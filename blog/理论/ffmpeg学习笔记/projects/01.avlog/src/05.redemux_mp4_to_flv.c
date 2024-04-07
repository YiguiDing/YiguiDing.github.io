#include <stdint.h>
#include <libavutil/avutil.h>     // for log
#include <libavformat/avformat.h> // for avformat
#include <libavcodec/avcodec.h>   // for packet
#include <libavcodec/bsf.h>       // for bsf

int main(int argc, char **argv)
{
  // 设置日志级别
  av_log_set_level(AV_LOG_INFO);

  // 提示用法
  if (argc < 2)
  {
    av_log(NULL, AV_LOG_ERROR, "usage: %s input.mp4 output.flv\n", argv[0]);
    return -1;
  }

  const char *input = argv[1];
  const char *output = argv[2];

  // 打开输入上下文
  AVFormatContext *in_format_ctx = NULL;
  int ret = avformat_open_input(&in_format_ctx, input, NULL, NULL);
  if (ret < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "open input %s fail;\n", input);
    return -1;
  }

  // 显示输入的详细信息
  // Print detailed information about the input or output format
  av_dump_format(in_format_ctx, 0, input, 0);

  // 获取输入码流信息，实际是去对formatCtx中stream相关的参数赋值，因为后面需要用
  // Read packets of a media file to get stream information.
  ret = avformat_find_stream_info(in_format_ctx, NULL);
  if (ret < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "find stream info failed\n");
    return -1;
  }

  // 创建输出上下文
  AVFormatContext *out_format_ctx = NULL;
  ret = avformat_alloc_output_context2(&out_format_ctx, NULL, NULL, output);
  if (ret < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "alloc output format failed\n");
    return -1;
  }

  // 对输出流计数
  int out_stream_idx = 0;
  // 记录输入流和输出流的对应关系
  int io_stream_idx_map[in_format_ctx->nb_streams];
  memset(io_stream_idx_map, -1, sizeof(io_stream_idx_map));
  // 收集(挑选)视频流、音频流、字幕流
  for (uint8_t in_stream_idx = 0; in_stream_idx < in_format_ctx->nb_streams; in_stream_idx++)
  {
    AVStream *in_stream = in_format_ctx->streams[in_stream_idx];
    if (in_stream->codecpar->codec_type == AVMEDIA_TYPE_AUDIO ||
        in_stream->codecpar->codec_type == AVMEDIA_TYPE_VIDEO ||
        in_stream->codecpar->codec_type == AVMEDIA_TYPE_SUBTITLE)
    {
      // 创建输出的视频流、音频流、字幕流
      // Add a new stream to a media file. When demuxing
      AVStream *out_stream = avformat_new_stream(out_format_ctx, NULL);
      if (out_stream == NULL)
      {
        av_log(NULL, AV_LOG_ERROR, "creat media stream failed.\n");
        return -1;
      }
      // 拷贝流的编码参数
      // Copy the contents of src to dst.
      avcodec_parameters_copy(out_stream->codecpar, in_stream->codecpar);
      // Additional information about the codec
      out_stream->codecpar->codec_tag = 0; // codec_tag不需要拷贝

      // 记录对应关系
      io_stream_idx_map[in_stream_idx] = out_stream_idx++;
    }
  }

  if (out_format_ctx->oformat->flags & AVFMT_NOFILE)
  {
    // AVFMT_NOFILE cant be write
    av_log(NULL, AV_LOG_ERROR, "AVFMT_NOFILE cant be write.\n");
    return -1;
  }
  // Create and initialize a AVIOContext for accessing the resource indicated by url.
  // 输出文件
  // I/O context
  ret = avio_open(&out_format_ctx->pb, output, AVIO_FLAG_WRITE);
  if (ret < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "open %s file failed.\n", output);
    return -1;
  }

  // 写入文件头
  ret = avformat_write_header(out_format_ctx, NULL);
  if (ret < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "write stream header to output media file failed.\n");
    return -1;
  }

  // 读取流
  AVPacket *packet = av_packet_alloc();
  while (av_read_frame(in_format_ctx, packet) == 0)
  {
    // 如果找到
    if (io_stream_idx_map[packet->stream_index] >= 0)
    {
      // 获取输入流和输出流
      AVStream *inStream = in_format_ctx->streams[packet->stream_index];
      AVStream *outStream = out_format_ctx->streams[io_stream_idx_map[packet->stream_index]];

      // 修改stream_index
      packet->stream_index = io_stream_idx_map[packet->stream_index];

      // 重新计算时间戳： 当前时间戳 = 原先时间戳/原先时间基 * 当前时间基
      // 重新计算pts(Presentation timestamp显示时间戳)  
      packet->pts = av_rescale_q(packet->pts, inStream->time_base, outStream->time_base);
      // 重新计算dts(Decompression timestamp解码时间戳)
      packet->dts = av_rescale_q(packet->dts, inStream->time_base, outStream->time_base);
      // 重新计算duration（Duration of this packet包的时长）
      packet->duration = av_rescale_q(packet->duration, inStream->time_base, outStream->time_base);

      // byte position in stream, -1 if unknown
      packet->pos = -1;

      // 写入packet
      // Write a packet to an output media file ensuring correct interleaving.
      if (av_interleaved_write_frame(out_format_ctx, packet) < 0)
      {
        av_log(NULL, AV_LOG_ERROR, "Write packet to output media file failed.\n");
        return -1;
      }
    }
    // 清除buffer
    av_packet_unref(packet);
  }
  av_packet_free(&packet);

  // 写入文件尾
  av_write_trailer(out_format_ctx);

  // 关闭输入上下文
  if (in_format_ctx)
    avformat_close_input(&in_format_ctx);

  // 关闭I/O context.
  if (out_format_ctx && out_format_ctx->pb && !(out_format_ctx->flags & AVFMT_NOFILE))
  {
    avio_closep(&out_format_ctx->pb);
  }
  // 关闭输出上下文
  if (out_format_ctx)
    avformat_free_context(out_format_ctx);

  return 0;
}