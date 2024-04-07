#include <stddef.h>
#include <libavutil/avutil.h>     // for log
#include <libavformat/avformat.h> // for avformat
#include <libavcodec/avcodec.h>   // for packet
#include "./lib/adts.h"           // for adts 音频头
int err;
int main(int argc, char **argv)
{
  // 设置日志级别
  av_log_set_level(AV_LOG_INFO);

  // 提示用法
  if (argc < 2)
  {
    av_log(NULL, AV_LOG_ERROR, "usage: %s input.mp4 output.aac\n", argv[0]);
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
  // 获取音频流
  int audio_idx = av_find_best_stream(format_ctx, AVMEDIA_TYPE_AUDIO, -1, -1, NULL, 0);
  if (audio_idx < 0)
  {
    av_log(NULL, AV_LOG_ERROR, "find best audio stream index failed; index: %d\n", audio_idx);
  }
  else
  {
    av_log(NULL, AV_LOG_INFO, "find best audio stream index is %d\n", audio_idx);
  }

  // 创建文件
  FILE *dest_fp = fopen(output, "wb");
  if (dest_fp == NULL)
  {
    av_log(NULL, AV_LOG_ERROR, "make file failed.");
    return -1;
  }

  // 初始化packet
  AVPacket *packet = av_packet_alloc();

  // 读取packet
  while (av_read_frame(format_ctx, packet) == 0)
  {
    // 找到音频流
    if (packet->stream_index == audio_idx)
    {
      // 写入ADTS_Header
      uint8_t adts_header[7] = {0};
      set_ADTS_Header(
          adts_header,
          packet->size,
          format_ctx->streams[audio_idx]->codecpar->profile,
          format_ctx->streams[audio_idx]->codecpar->sample_rate,
          format_ctx->streams[audio_idx]->codecpar->channels //
      );
      if (fwrite(adts_header, 1, sizeof(adts_header), dest_fp) != sizeof(adts_header))
      {
        av_log(NULL, AV_LOG_ERROR, "write ADTS_Header failed.\n");
        return -1;
      }
      // 写入文件（data是原始数据）
      if (fwrite(packet->data, 1, packet->size, dest_fp) != packet->size)
      {
        av_log(NULL, AV_LOG_ERROR, "write file failed.\n");
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

  // 关闭文件
  if (dest_fp)
  {
    fclose(dest_fp);
  }
  return 0;
}