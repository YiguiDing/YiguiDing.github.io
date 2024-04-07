#include <stddef.h>
#include <libavutil/log.h> // ffmpeg的日志系统

int main(int argc, char **argv)
{
    // 设置日志级别
    av_log_set_level(AV_LOG_INFO);
    av_log(NULL, AV_LOG_INFO, "this is a info log.\n");
    av_log(NULL, AV_LOG_ERROR, "this is a error log.\n");
    av_log(NULL, AV_LOG_DEBUG, "this is a debug log.\n");
    av_log(NULL, AV_LOG_FATAL, "this is a fatal log.\n");
    return 0;
}