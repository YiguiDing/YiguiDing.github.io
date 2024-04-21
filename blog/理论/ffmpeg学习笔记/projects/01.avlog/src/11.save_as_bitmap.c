#include <stdint.h>
#include <libavformat\avformat.h> // 解封装
#include <libavutil\avutil.h>     // 日志
#include <libavutil\parseutils.h> // 解析字符串
#include <libavutil\imgutils.h>   // 计算视频大小
#include <libavcodec\avcodec.h>   // 编解码
#include <libswscale\swscale.h>   // 视频缩放

/**
 * win32 类型
 */
typedef uint16_t WORD;
typedef uint32_t DWORD;
typedef int32_t LONG;

// 设置按1字节对齐，防止编译器对结构体做字节对齐
#pragma pack(1)

// 位图文件文件头
typedef struct
{
    WORD bfType;      // 文件类型 固定为0x4d42 表示BM(BitMap)
    DWORD bfSize;     // 整个文件大小
    WORD bfReserved1; // 保留字
    WORD bfReserved2; // 保留字
    DWORD bfOffBits;  // 实际位图数据的偏移字节数（相对于整个文件）
} BitMapFileHeader;

// 位图文件信息头
typedef struct
{
    DWORD biSize;         // 表示当前结构体的长度，设置为40 不要用sizeof因为不准确，除非关闭字节对齐
    LONG biWidth;         // 图片宽度
    LONG biHeight;        // 图片高度，高度字段的正负值表示位图的上下方向。当高度为正时，图像是从上到下绘制的；当高度为负时，图像是从下到上绘制的。
    WORD biPlanes;        // 图片平面数 设置为1
    WORD biBitCount;      // 颜色位数 1(黑白)、8、16、24、32位图
    DWORD biCompression;  // 压缩属性，位图是不压缩的，所以设置0
    DWORD biSizeImage;    // 位图数据实际占用的字节数（不压缩就不用填）
    LONG biXPelsPerMeter; // X方向分辨率,可省略
    LONG biYPelsPerMeter; // Y方向分辨率,可省略
    DWORD biClrUsed;      // 使用了多少个颜色索引表，0表示使用默认值：2^(biBitCount颜色位数)
    DWORD biClrImportant; // 重要颜色数，0表示所有颜色都是重要的
} BitMapFileInfoHeader;
#pragma endregion

// 写入bitmap文件
int writeBitMap(const char *bmpFileName, uint8_t *rgb24Data, int width, int height)
{
    BitMapFileHeader fileHeader = {0};
    BitMapFileInfoHeader infoHeader = {0};

    fileHeader.bfType = 0x4d42;
    fileHeader.bfSize = sizeof(BitMapFileHeader) + sizeof(BitMapFileInfoHeader) + width * height * 3;
    fileHeader.bfOffBits = sizeof(BitMapFileHeader) + sizeof(BitMapFileInfoHeader);

    infoHeader.biSize = sizeof(BitMapFileInfoHeader);
    infoHeader.biWidth = width;
    infoHeader.biHeight = -1 * height;
    infoHeader.biPlanes = 1;
    infoHeader.biBitCount = 24;

    FILE *file = fopen(bmpFileName, "wb");
    if (file == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "fopen failed\n");
        return -1;
    }

    fwrite(&fileHeader, 1, sizeof(BitMapFileHeader), file);
    fwrite(&infoHeader, 1, sizeof(BitMapFileInfoHeader), file);
    fwrite(rgb24Data, 1, width * height * 3, file);

    fclose(file);

    return 0;
}

int ret = 0;
AVFormatContext *inputFmtCtx = NULL;
AVCodecContext *decoderCtx = NULL;

int cleanUp()
{
    if (inputFmtCtx)
        avformat_close_input(&inputFmtCtx);
    if (decoderCtx)
        avcodec_free_context(&decoderCtx);
    return ret;
}

int main(int avc, char *argv[])
{

    // 设置日志级别
    av_log_set_level(AV_LOG_INFO);

    // 打印用法
    if (avc < 2)
    {
        av_log(NULL, AV_LOG_INFO, "usage:%s <inFileName.mp4>", argv[0]);
        return -1;
    }

    char *inFileName = argv[1];

    // 打开输入
    if ((ret = avformat_open_input(&inputFmtCtx, inFileName, NULL, NULL)) < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avformat_open_input failed");
        return cleanUp();
    }

    // 探测流信息
    if ((ret = avformat_find_stream_info(inputFmtCtx, NULL)) < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avformat_find_stream_info failed");
        return cleanUp();
    }

    // 得到视频流
    int videoIdx = av_find_best_stream(inputFmtCtx, AVMEDIA_TYPE_VIDEO, -1, -1, NULL, 0);
    if (videoIdx < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "av_find_best_stream failed");
        return cleanUp();
    }

    // 得到编解码上下文
    if ((decoderCtx = avcodec_alloc_context3(NULL)) == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "avcodec_alloc_context3 failed");
        return cleanUp();
    }

    // 将视频流编解码器信息拷贝到编解码上下文
    if ((ret = avcodec_parameters_to_context(decoderCtx, inputFmtCtx->streams[videoIdx]->codecpar)) < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avcodec_parameters_to_context failed");
        return cleanUp();
    }

    // 根据编解码器id获取解码器
    const AVCodec *videoDecoder = avcodec_find_decoder(decoderCtx->codec_id);
    if (videoDecoder == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "avcodec_find_decoder failed");
        return cleanUp();
    }

    // 使用 编解码器 初始化 编解码器的上下文
    if ((ret = avcodec_open2(decoderCtx, videoDecoder, NULL)) < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avcodec_open2 failed");
        return cleanUp();
    }

    // 获取源颜色空间
    enum AVPixelFormat srcPixFmt = decoderCtx->pix_fmt;
    // 据说：BitMap期望的存储格式为RGB 但是ffmpeg中RGB的存储格式为BGR,所以这里得写BGR,得到的存储格式才能是RGB
    enum AVPixelFormat destPixFmt = AV_PIX_FMT_BGR24;

    // 获取swscale上下文
    struct SwsContext *swsCtx = sws_getContext(
        decoderCtx->width, decoderCtx->height, srcPixFmt,  // 源分辨率 源图像空间
        decoderCtx->width, decoderCtx->height, destPixFmt, // 目标分辨率 目标图像空间
        SWS_FAST_BILINEAR,                                 // 缩放算法
        NULL,                                              // 源图像过滤器（前后图像滤波处理）
        NULL,                                              // 目标图像滤波器
        NULL                                               // 参数
    );

    if (swsCtx == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "sws_getContext failed");
        return cleanUp();
    }
    // 创建destFrame
    AVFrame *destFrame = av_frame_alloc();
    // 为destFrame的data分配内存
    uint8_t *destBuffer = (uint8_t *)av_malloc(av_image_get_buffer_size(destPixFmt, decoderCtx->width, decoderCtx->height, 1));
    // 把所分配内存的地址，通过计算，分别设置到Y:data[0] U:data[1] V:data[2] 中
    av_image_fill_arrays(destFrame->data, destFrame->linesize, destBuffer, destPixFmt, decoderCtx->width, decoderCtx->height, 1);
    // 读取流
    AVPacket *packet = av_packet_alloc();
    AVFrame *srcFrame = av_frame_alloc();
    int render_process(AVCodecContext * decoderCtx, AVPacket * packet, struct SwsContext * swsCtx, AVFrame * srcFrame, AVFrame * destFrame, int destWidht, int destHeight);
    while (av_read_frame(inputFmtCtx, packet) == 0)
    {
        // 如果是视频流
        if (packet->stream_index == videoIdx)
        {
            // 把packet发送给解码器得到YUV帧
            if (render_process(decoderCtx, packet, swsCtx, srcFrame, destFrame, decoderCtx->width, decoderCtx->height) < 0)
            {
                av_log(NULL, AV_LOG_ERROR, "render_process failed");
                return cleanUp();
            }
        }
        av_packet_unref(packet);
    }
    // 再次把packet发送给解码器得到YUV帧
    // （这里是为了防止pts和dts的原因导致解码器中还有YUV帧没有取出，所以发送packet=NULL,然后再读Frame）
    // 如果不这么做，可能导致最后少几帧
    if (render_process(decoderCtx, NULL, swsCtx, srcFrame, destFrame, decoderCtx->width, decoderCtx->height) < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "render_process failed");
        return cleanUp();
    }
    av_packet_free(&packet);
    av_frame_free(&srcFrame);

    return 0;
}
int render_process(AVCodecContext *decoderCtx, AVPacket *packet, struct SwsContext *swsCtx, AVFrame *srcFrame, AVFrame *destFrame, int destWidht, int destHeight)
{
    /**
     * avcodec_send_packet:
     *
     * packet can be NULL (or an AVPacket with data set to NULL and
     * size set to 0); in this case, it is considered a flush
     * packet, which signals the end of the stream.
     */

    // 将数据发送给解码器
    if ((ret = avcodec_send_packet(decoderCtx, packet)) < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avcodec_send_packet failed");
        return -1;
    }
    int frameCnt = 0;
    // 接收解码器解码后的数据frame
    while (avcodec_receive_frame(decoderCtx, srcFrame) == 0)
    {
        // 利用swscale裁剪
        // 此时destFrame中没有多余的数据，但是destFrame->height为0,destFrame->width有正确值
        if (
            (ret = sws_scale(swsCtx,                                                                            // swscale上下文
                             (const uint8_t *const *)srcFrame->data, srcFrame->linesize, 0, decoderCtx->height, // 源Frame数据 源Frame宽度 起始位置 原始图片高度
                             destFrame->data, destFrame->linesize                                               // 目标Frame数据 目标Frame宽度
                             )) < 0)
        {
            av_log(NULL, AV_LOG_ERROR, "sws_scale failed");
            return -1;
        }
        // RGB24是packed数据，三个分量打包存放

        char fileName[255] = {0};
        sprintf(fileName, "./pic/%lld-%d.bmp", packet->pos, frameCnt++);
        av_log(NULL, AV_LOG_INFO, "%s\n", fileName);

        writeBitMap(fileName, destFrame->data[0], destWidht, destHeight);

        av_frame_unref(srcFrame);
    }
    return 0;
}