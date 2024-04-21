#include <stdint.h>
#include <libavformat\avformat.h> // 解封装
#include <libavutil\avutil.h>     // 日志
#include <libavutil\parseutils.h> // 解析字符串
#include <libavutil\imgutils.h>   // 计算视频大小
#include <libavcodec\avcodec.h>   // 编解码
#include <libswscale\swscale.h>   // 视频缩放

int ret = 0;
int cleanUp()
{
    return 0;
}

int main(int avc, char *argv[])
{

    // 设置日志级别
    av_log_set_level(AV_LOG_DEBUG);

    // 打印用法
    if (avc < 5)
    {
        av_log(NULL, AV_LOG_INFO, "usage:%s <inFileName.yuv> <outFileName.h264> <encoderName> <yuvW x yuvH>", argv[0]);
        return -1;
    }

    // 获取参数
    char *yuvFileName = argv[1];
    char *h264FileName = argv[2];
    char *encoderName = argv[3];
    char *yuvSize = argv[4];
    int yuvFmt = AV_PIX_FMT_YUV420P;
    int yuvW = 0, yuvH = 0;
    av_parse_video_size(&yuvW, &yuvH, yuvSize);

    // 初始化编码器
    const AVCodec *encoder = avcodec_find_encoder_by_name(encoderName); // 获取编码器
    AVCodecContext *encoderCtx = avcodec_alloc_context3(encoder);       // 获取编码器上下文
    encoderCtx->codec_type = AVMEDIA_TYPE_VIDEO;                        // 编码视频
    encoderCtx->pix_fmt = yuvFmt;                                       // 编码视频格式
    encoderCtx->width = yuvW;                                           // 编码视频宽度
    encoderCtx->height = yuvH;                                          // 编码视频高度
    encoderCtx->time_base = (AVRational){1, 30};                        // 编码时间基
    encoderCtx->bit_rate = 4096000;                                     // 比特率
    encoderCtx->max_b_frames = 0;                                       // 没有B帧（B帧需要前后两帧来推测，这会降低解码效率，提高存储效率）
    encoderCtx->gop_size = 10;                                          // 同时决定了I帧（关键帧）的间隔 （可以用ESEyE工具来查看）
    avcodec_open2(encoderCtx, encoder, NULL);                           // 打开编码器

    // 初始化yuvFrame
    AVFrame *yuvFrame = av_frame_alloc();                                                       // 创建Frame
    uint8_t *yuvBuffer = av_malloc(av_image_get_buffer_size(yuvFmt, yuvW, yuvH, 1));            // 为data分配内存
    av_image_fill_arrays(yuvFrame->data, yuvFrame->linesize, yuvBuffer, yuvFmt, yuvW, yuvH, 1); // 将分配的内存赋值到data
    yuvFrame->format = yuvFmt;                                                                  // 必须设置
    yuvFrame->width = yuvW;                                                                     // 必须设置
    yuvFrame->height = yuvH;                                                                    // 必须设置
    yuvFrame->pts = 0;                                                                          // 初始化
    int frameSize = yuvW * yuvH;                                                                // frameSize
    int dataSize = frameSize +                                                                  // Y:4
                   frameSize / 4 +                                                              // U:2
                   frameSize / 4;                                                               // V:0

    // 初始化h264Packet
    AVPacket *h264Packet = av_packet_alloc();

    // 编码、读写文件
    FILE *yuvFile = fopen(yuvFileName, "rb");
    FILE *h264File = fopen(h264FileName, "wb");
    while (fread(yuvBuffer, 1, dataSize, yuvFile) == dataSize) // 读取yuv数据
    {
        // 下面三行等效于：av_image_fill_arrays()
        // yuvFrame->data[0] = yuvBuffer;                 // Y
        // yuvFrame->data[1] = yuvBuffer + frameSize;     // U
        // yuvFrame->data[2] = yuvBuffer + frameSize / 4; // V

        yuvFrame->pts++; // 必须设置

        ret = avcodec_send_frame(encoderCtx, yuvFrame); // 发送给编码器 (可能编码器中还有剩余的帧，需要flush)
        if (ret < 0)
        {
            av_log(NULL, AV_LOG_ERROR, "avcodec_send_frame failed");
            return -1;
        }
        while (avcodec_receive_packet(encoderCtx, h264Packet) == 0) // 读取编码后的数据
        {
            fwrite(h264Packet->data, 1, h264Packet->size, h264File); // 写入文件
            av_packet_unref(h264Packet);                             // 释放h264Packet->data
        }
    }
}