#include "libavutil/avutil.h"     // 工具函数
#include "libavformat/avformat.h" // 封装
#include "libavcodec/avcodec.h"   // 编解码器

int main(int argc, char **argv)
{

  // 设置log级别
  av_log_set_level(AV_LOG_DEBUG);

  // 判断参数个数
  if (argc < 5)
  {
    av_log(NULL, AV_LOG_ERROR, "usage: %s <in_filename.mp4> <start_time_s> <end_time_s> <out_filename.mp4>\n", argv[0]);
    return -1;
  }

  char *inFileName = argv[1];
  char *outFileName = argv[4];
  int startTimeS = atoi(argv[2]);
  int endTimeS = atoi(argv[3]);

  // 打开输入流并读取头
  AVFormatContext *inFmtCtx = NULL;
  // Open an input stream and read the header.
  int ret = avformat_open_input(&inFmtCtx, inFileName, NULL, NULL);
  if (ret < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "avformat_open_input failed.\n");
    return -1;
  }

  // 读取流的头信息
  // Read packets of a media file to get stream information.
  ret = avformat_find_stream_info(inFmtCtx, NULL);
  if (ret < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "avformat_find_stream_info failed.\n");
    return -1;
  }

  // Allocate an AVFormatContext for an output format
  AVFormatContext *outFmtCtx = NULL;
  ret = avformat_alloc_output_context2(&outFmtCtx, NULL, NULL, outFileName);
  if (ret < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "avformat_alloc_output_context2 failed.\n");
    return -1;
  }

  // 创建流到输出文件
  for (uint8_t idx = 0; idx < inFmtCtx->nb_streams; idx++)
  {
    AVStream *inStream = inFmtCtx->streams[idx];
    AVStream *outStream = avformat_new_stream(outFmtCtx, NULL); //  Add a new stream to a media file.
    // Copy the contents of src to dst.
    ret = avcodec_parameters_copy(outStream->codecpar, inStream->codecpar);
    if (ret < 0)
    {
      av_log(NULL, AV_LOG_ERROR, "avcodec_parameters_copy failed.\n");
      return -1;
    }
    outStream->codecpar->codec_tag = 0;
  }

  // 检测标志位
  if (outFmtCtx->flags & AVFMT_NOFILE)
  {
    av_log(NULL, AV_LOG_ERROR, "AVFMT_NOFILE flag is set in iformat/oformat.flags. In this a case, the (de)muxer will handle I/O in some other way and this field(outFmtCtx->pb) will be NULL.\n");
    return -1;
  }

  // 打开输入（创建输入输出环境AVIOContext）
  ret = avio_open(&outFmtCtx->pb, outFileName, AVIO_FLAG_WRITE);
  if (ret < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "avio_open failed.\n");
    return -1;
  }
  // 写入文件头
  ret = avformat_write_header(outFmtCtx, NULL);
  if (ret < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "avformat_write_header failed.\n");
    return -1;
  }

  // 定位到关键帧
  // Seek to the keyframe at timestamp
  ret = av_seek_frame(
      inFmtCtx,                  // media file handle
      -1,                        //  流的id,-1为默认流
      startTimeS * AV_TIME_BASE, // 时间戳，如果指定了具体流，则填基于流时间基的时间戳；如果未指定具体流（-1），则填基于AV_TIME_BASE时间基的时间戳
      AVSEEK_FLAG_ANY            // seek to any frame, even non-keyframes
  );
  if (ret < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "av_seek_frame failed.\n");
    return -1;
  }

  // 记录流的开始时间戳
  int firstPTS[inFmtCtx->nb_streams];
  int firstDTS[inFmtCtx->nb_streams];
  memset(firstPTS, -1, sizeof(firstPTS));
  memset(firstDTS, -1, sizeof(firstDTS));

  AVPacket *packet = av_packet_alloc();
  while (av_read_frame(inFmtCtx, packet) == 0)
  {
    AVStream *inStream = inFmtCtx->streams[packet->stream_index];
    AVStream *outStream = outFmtCtx->streams[packet->stream_index];
    // pts渲染时间戳 x 流的时间基 = 播放时间
    int curTimeS = packet->pts * av_q2d(inStream->time_base);
    if (curTimeS > endTimeS)
      break;

    // 记录流的开始时间戳
    if (firstPTS[packet->stream_index] == -1)
      firstPTS[packet->stream_index] = packet->pts;
    if (firstDTS[packet->stream_index] == -1)
      firstDTS[packet->stream_index] = packet->dts;

    // 重新计算渲染时间戳
    packet->pts = av_rescale_q(packet->pts - firstPTS[packet->stream_index], inStream->time_base, outStream->time_base);
    if (packet->pts < 0)
      packet->pts = 0;
    // 重新计算解码时间戳
    packet->dts = av_rescale_q(packet->dts - firstDTS[packet->stream_index], inStream->time_base, outStream->time_base);
    if (packet->dts < 0)
      packet->dts = 0;
    // 重新计算时长
    packet->duration = av_rescale_q(packet->duration, inStream->time_base, outStream->time_base);
    // 位置位置
    packet->pos = -1;

    // 由于I P B 三个帧的存在，pts和dts的值可能不一样，这里根据时间范围暴力截取packet时，可能导致pts<dts的情况发生，那么后续的校验会不通过
    if (packet->pts < packet->dts)
    {
      continue;
    }
    // 写入封装
    // av_interleaved_write_frame 相比于 write_packet 前者会对pts、dts、stream_index做校验，且前者依赖于后者
    ret = av_interleaved_write_frame(outFmtCtx, packet);
    if (ret < 0)
    {
      av_log(NULL, AV_LOG_ERROR, "av_interleaved_write_frame failed.\n");
      return -1;
    }
    // 释放packet中buffer内存
    av_packet_unref(packet);
  }
  // 释放packet内存
  av_packet_free(&packet);

  // 写文件尾
  // Write the stream trailer to an output media file and free the file private data
  av_write_trailer(outFmtCtx);

  // 释放内存
  if (inFmtCtx)
  {
    avformat_close_input(&inFmtCtx);
  }
  if (outFmtCtx)
  {
    avio_close(outFmtCtx->pb);
    avformat_close_input(&outFmtCtx);
  }
  return 0;
}
