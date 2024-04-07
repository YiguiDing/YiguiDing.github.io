#include "libavutil/avutil.h"     // 工具函数
#include "libavformat/avformat.h" // 封装
#include "libavcodec/avcodec.h"   // 编解码器

int main(int argc, char **argv)
{

  av_log_set_level(AV_LOG_DEBUG);
  if (argc < 2)
  {
    av_log(NULL, AV_LOG_ERROR, "usage: %s <filename.mp4>\n", argv[0]);
  }

  char *inFileName = argv[1];

  // 打开输入
  // Open an input stream and read the header.
  AVFormatContext *format_ctx = NULL;
  avformat_open_input(&format_ctx, inFileName, NULL, NULL);

  // 获取流信息
  // Read packets of a media file to get stream information.
  avformat_find_stream_info(format_ctx, NULL);

  // 输出封装的input的详细信息
  // Print detailed information about the input or output format
  av_dump_format(format_ctx, 0, inFileName, 0);

  //  ffmpeg 内部时间基
  av_log(NULL, AV_LOG_INFO, "ffmpeg internal time base: %d / %d\n", AV_TIME_BASE_Q.num, AV_TIME_BASE_Q.den); // AV_TIME_BASE_Q 表示的是时间基,值为 1/1000000 秒

  // 时间基x时间戳=时间
  av_log(NULL, AV_LOG_INFO, "input format duration(timestamp):%lld\n", format_ctx->duration);                 // duration表征的是时间戳
  av_log(NULL, AV_LOG_INFO, "input format duration(s):%lf\n", format_ctx->duration * av_q2d(AV_TIME_BASE_Q)); // av_q2d将分数转换成小数

  for (uint8_t idx = 0; idx < format_ctx->nb_streams; idx++)
  {
    AVStream *stream = format_ctx->streams[idx];
    if (stream->codecpar->codec_type == AVMEDIA_TYPE_VIDEO)
    {
      // 视频流的时间基
      AVRational videoTimeBase = stream->time_base;
      av_log(NULL, AV_LOG_INFO, "video stream time base: %d / %d\n", videoTimeBase.num, videoTimeBase.den);
    }
    if (stream->codecpar->codec_type == AVMEDIA_TYPE_AUDIO)
    {
      // 音频流的时间基
      AVRational audioTimeBase = stream->time_base;
      av_log(NULL, AV_LOG_INFO, "audio stream time base: %d / %d\n", audioTimeBase.num, audioTimeBase.den);
    }
  }

  AVPacket *packet = av_packet_alloc();
  while (av_read_frame(format_ctx, packet) == 0)
  {
    AVStream *mediaStream = format_ctx->streams[packet->stream_index];
    AVRational streamTimeBase = mediaStream->time_base;

    av_log(NULL, AV_LOG_INFO, "stream index: %d\n", packet->stream_index);
    av_log(NULL, AV_LOG_INFO, "\t stream time base: %d / %d\n", streamTimeBase.num, streamTimeBase.den);

    av_log(NULL, AV_LOG_INFO, "\t packet pts渲染时间戳: %lld\n", packet->pts);
    av_log(NULL, AV_LOG_INFO, "\t packet ptsTime渲染时间: %lf\n", packet->pts * av_q2d(streamTimeBase));
    
    av_log(NULL, AV_LOG_INFO, "\t packet dts解码时间戳: %lld\n", packet->dts);
    av_log(NULL, AV_LOG_INFO, "\t packet ptsTime解码时间: %lf\n", packet->dts * av_q2d(streamTimeBase));

    av_log(NULL, AV_LOG_INFO, "\t packet duration时间戳: %lld\n", packet->duration);
    av_log(NULL, AV_LOG_INFO, "\t packet duration时间: %lf\n", packet->duration * av_q2d(streamTimeBase));


    // 释放buffer内存
    av_packet_unref(packet);
  }
  av_packet_free(&packet);

  return 0;
}
