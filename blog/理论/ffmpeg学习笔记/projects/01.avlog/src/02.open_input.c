#include <stddef.h>
#include <libavutil/log.h> // ffmpeg的日志系统
#include <libavformat/avformat.h>

int err;
int main(int argc, char **argv)
{
    // 设置日志级别
    av_log_set_level(AV_LOG_INFO);
    // 提示用法
    if (argc < 2)
    {
        av_log(NULL, AV_LOG_ERROR, "usage %s media.mp4_or_url", argv[0]);
        return -1;
    }
    const char *url = argv[1];
    AVFormatContext *formatCtx = NULL;
    // 打开流
    err = avformat_open_input(&formatCtx, url, NULL, NULL);
    if (err)
    {
        av_log(NULL, AV_LOG_FATAL, "open url %s fail: %s;", url, av_err2str(err));
        return err;
    }
    // 输出流信息
    av_dump_format(formatCtx, 0, url, 0);
    // 关闭流
    avformat_close_input(&formatCtx);
    return 0;
}