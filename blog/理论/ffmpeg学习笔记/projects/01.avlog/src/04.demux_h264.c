#include <stddef.h>
#include <libavutil/avutil.h>     // for log
#include <libavformat/avformat.h> // for avformat
#include <libavcodec/avcodec.h>   // for packet
#include <libavcodec/bsf.h>       // for bsf

int err;
int main(int argc, char **argv)
{
  // 设置日志级别
  av_log_set_level(AV_LOG_INFO);

  // 提示用法
  if (argc < 2)
  {
    av_log(NULL, AV_LOG_ERROR, "usage: %s input.mp4 output.h264\n", argv[0]);
    return -1;
  }

  const char *input = argv[1];
  const char *output = argv[2];

  // 打开流
  AVFormatContext *format_ctx = NULL;
  err = avformat_open_input(&format_ctx, input, NULL, NULL);
  if (err < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "open input %s fail: %s;\n", input, av_err2str(err));
    return err;
  }
  av_dump_format(format_ctx, 0, input, 0);

  // 获取码流信息，实际是去对formatCtx中stream相关的参数赋值，因为后面需要用
  // Read packets of a media file to get stream information.
  err = avformat_find_stream_info(format_ctx, NULL);
  if (err < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "find stream info failed:%s\n", av_err2str(err));
    return err;
  }
  // 获取视频流
  int video_idx = av_find_best_stream(format_ctx, AVMEDIA_TYPE_VIDEO, -1, -1, NULL, 0);
  if (video_idx < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "find best video stream index failed; index: %d\n", video_idx);
  }
  else
  {
    av_log(NULL, AV_LOG_INFO, "find best video stream index is %d\n", video_idx);
  }

  // 创建文件
  FILE *dest_fp = fopen(output, "wb");
  if (dest_fp == NULL)
  {
    av_log(NULL, AV_LOG_ERROR, "make file failed.");
    return -1;
  }

  // 获取比特流过滤器
  // mp4 to annexb
  // Convert an H.264 bitstream from `length prefixed mode` to `start code prefixed mode`
  //  this filter is auto-inserted for MPEG-TS (muxer mpegts) and raw H.264 (muxer h264) output formats.
  // ffmpeg -i INPUT.mp4 -codec copy -bsf:v h264_mp4toannexb OUTPUT.ts
  const AVBitStreamFilter *bsf = av_bsf_get_by_name("h264_mp4toannexb");
  if (bsf == NULL)
  {
    av_log(NULL, AV_LOG_ERROR, "creat AVBitStreamFilter: h264_mp4toannexb  failed.");
    return -1;
  }
  // Allocate a context for a given bitstream filter.
  // 创建bsf上下文
  AVBSFContext *bsf_ctx = NULL;
  av_bsf_alloc(bsf, &bsf_ctx);

  // 复制编码参数
  // 提取h264,不需要改变编码参数
  avcodec_parameters_copy(bsf_ctx->par_in, format_ctx->streams[video_idx]->codecpar);

  // 初始化bsf
  // Prepare the filter for use
  av_bsf_init(bsf_ctx);

  // 初始化packet
  AVPacket *packet = av_packet_alloc();

  // 读取packet
  while (av_read_frame(format_ctx, packet) == 0)
  {
    // 找到视频流
    if (packet->stream_index == video_idx)
    {
      // 发送到bsf
      if (av_bsf_send_packet(bsf_ctx, packet) == 0)
      {
        // 从bsf接收数据
        while (av_bsf_receive_packet(bsf_ctx, packet)==0)
        {
          // 写入文件
          if (fwrite(packet->data, 1, packet->size, dest_fp) != packet->size)
          {
            av_log(NULL, AV_LOG_ERROR, "write file failed.\n");
            return -1;
          }
        }
      }
      else
      {
        av_log(NULL, AV_LOG_ERROR, "send packet to bsf failed.\n");
        return -1;
      }
    }
    // 释放packet中的data
    av_packet_unref(packet);
  }
  // 释放packet
  av_packet_free(&packet);

  // 关闭流
  if (format_ctx)
    avformat_close_input(&format_ctx);
  // 清除bsf
  if (bsf_ctx)
    av_bsf_free(&bsf_ctx);
  // 关闭文件
  if (dest_fp)
    fclose(dest_fp);
  return 0;
}