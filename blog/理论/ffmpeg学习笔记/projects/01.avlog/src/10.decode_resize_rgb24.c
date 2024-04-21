#include <libavformat\avformat.h> // 解封装
#include <libavutil\avutil.h>     // 日志
#include <libavutil\parseutils.h> // 解析字符串
#include <libavutil\imgutils.h>   // 计算视频大小
#include <libavcodec\avcodec.h>   // 编解码
#include <libswscale\swscale.h>   // 视频缩放

int ret = 0;
AVFormatContext *inputFmtCtx = NULL;
FILE *destFile = NULL;
AVCodecContext *decoderCtx = NULL;

int cleanUp()
{
    if (inputFmtCtx)
        avformat_close_input(&inputFmtCtx);
    if (destFile)
    {
        fclose(destFile);
    }
    if (decoderCtx)
        avcodec_free_context(&decoderCtx);
    return ret;
}

int main(int avc, char *argv[])
{

    // 设置日志级别
    av_log_set_level(AV_LOG_INFO);

    // 打印用法
    if (avc < 4)
    {
        av_log(NULL, AV_LOG_INFO, "usage:%s <inFileName.mp4> <outFileName.yuv> <widthxheight>", argv[0]);
        return -1;
    }

    char *inFileName = argv[1];
    char *outFileName = argv[2];
    char *resolution = argv[3];
    int destWidth = 0, destHeight = 0;

    // 解析宽高
    if ((ret = av_parse_video_size(&destWidth, &destHeight, resolution)) < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "av_parse_video_size failed");
        return cleanUp();
    }

    // 打开输入
    if ((ret = avformat_open_input(&inputFmtCtx, inFileName, NULL, NULL)) < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avformat_open_input failed");
        return cleanUp();
    }

    // 创建输出文件
    destFile = fopen(outFileName, "wb");
    if (destFile == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "fopene failed.");
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
    // enum AVPixelFormat destPixFmt = AV_PIX_FMT_YUV420P; // AV_PIX_FMT_YUV420P
    enum AVPixelFormat destPixFmt = AV_PIX_FMT_RGB24; // AV_PIX_FMT_RGB24

    // 获取swscale上下文
    struct SwsContext *swsCtx = sws_getContext(
        decoderCtx->width, decoderCtx->height, srcPixFmt, // 源分辨率 源图像空间
        destWidth, destHeight, destPixFmt,                // 目标分辨率 目标图像空间
        SWS_FAST_BILINEAR,                                // 缩放算法
        NULL,                                             // 源图像过滤器（前后图像滤波处理）
        NULL,                                             // 目标图像滤波器
        NULL                                              // 参数
    );

    if (swsCtx == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "sws_getContext failed");
        return cleanUp();
    }
    // 创建destFrame
    AVFrame *destFrame = av_frame_alloc();
    // 为destFrame的data分配内存
    uint8_t *destBuffer = av_malloc(av_image_get_buffer_size(destPixFmt, destWidth, destHeight, 1));
    // 把所分配内存的地址，通过计算，分别设置到Y:data[0] U:data[1] V:data[2] 中
    av_image_fill_arrays(destFrame->data, destFrame->linesize, destBuffer, destPixFmt, destWidth, destHeight, 1);
    // 读取流
    AVPacket *packet = av_packet_alloc();
    AVFrame *srcFrame = av_frame_alloc();
    int render_process(AVCodecContext * decoderCtx, AVPacket * packet, struct SwsContext * swsCtx, AVFrame * srcFrame, AVFrame * destFrame, int destWidht, int destHeight, FILE *destFile);
    while (av_read_frame(inputFmtCtx, packet) == 0)
    {
        // 如果是视频流
        if (packet->stream_index == videoIdx)
        {
            // 把packet发送给解码器得到YUV帧
            if (render_process(decoderCtx, packet, swsCtx, srcFrame, destFrame, destWidth, destHeight, destFile) < 0)
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
    if (render_process(decoderCtx, NULL, swsCtx, srcFrame, destFrame, destWidth, destHeight, destFile) < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "render_process failed");
        return cleanUp();
    }
    av_packet_free(&packet);
    av_frame_free(&srcFrame);

    return 0;
}
int render_process(AVCodecContext *decoderCtx, AVPacket *packet, struct SwsContext *swsCtx, AVFrame *srcFrame, AVFrame *destFrame, int destWidht, int destHeight, FILE *destFile)
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
    // 接收解码器解码后的数据frame
    while (avcodec_receive_frame(decoderCtx, srcFrame) == 0)
    {
        // YUV420
        // Y
        // 【Y Y Y Y】
        // 【Y Y Y Y】
        // U
        // 【U 0 U 0】
        // 【0 0 0 0】
        // V
        // 【V 0 V 0】
        // 【0 0 0 0】

        // 写法1：
        // data[0]表示Y数据，通过 decoderCtx->width * decoderCtx->height 计算数据的长度
        // 这里的问题在于解码器和CPU可能会优化，导致frame->data[0]数据的宽度和decoderCtx->width不一致，有多余的无用数据，使得无法正常播放
        // fwrite(frame->data[0], 1, decoderCtx->width * decoderCtx->height, destFile);
        // fwrite(frame->data[1], 1, decoderCtx->width * decoderCtx->height / 4, destFile);
        // fwrite(frame->data[2], 1, decoderCtx->width * decoderCtx->height / 4, destFile);

        // 写法2:
        // data[0]表示Y数据，通过 frame->linesize[0] * decoderCtx->height 计算数据的长度
        // 这里的问题在于解码器和CPU可能会优化，frame->linesize[0]比实际宽度大、data中也有多余的无用数据，如果不能正确指定宽高，视频将无法正常播放
        // fwrite(srcFrame->data[0], 1, srcFrame->linesize[0] * decoderCtx->height, destFile); // Y
        // fwrite(srcFrame->data[1], 1, srcFrame->linesize[1] * decoderCtx->height, destFile); // U
        // fwrite(srcFrame->data[2], 1, srcFrame->linesize[2] * decoderCtx->height, destFile); // V
        // // 输出实际宽高
        // av_log(NULL, AV_LOG_INFO, "w:%d,h:%d.\n", srcFrame->width, srcFrame->height);       // 480x270
        // av_log(NULL, AV_LOG_INFO, "w:%d,h:%d.\n", srcFrame->linesize[0], srcFrame->height); // 512x270
        // av_log(NULL, AV_LOG_INFO, "w:%d,h:%d.\n", srcFrame->linesize[1], srcFrame->height); // 512x270
        // av_log(NULL, AV_LOG_INFO, "w:%d,h:%d.\n", srcFrame->linesize[2], srcFrame->height); // 512x270
        // 播放时要指定宽度为：512x270 而不是实际宽度480x270,否则不能正常播放
        // $ ffplay -f rawvideo -video_size 512x270 -pixel_format yuv420p file.yuv

        // 写法3：
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

        // YUV420 是planer数据 三个分量分开存放
        // fwrite(destFrame->data[0], 1, destWidht * destHeight, destFile);     // Y
        // fwrite(destFrame->data[1], 1, destWidht * destHeight / 4, destFile); // U
        // fwrite(destFrame->data[2], 1, destWidht * destHeight / 4, destFile); // V

        // RGB24是packed数据，三个分量打包存放
        fwrite(destFrame->data[0], 1, destWidht * destHeight * 3, destFile); // RGB23

        // 转换
        // ./output/main ./bigbuckbunny_h264_aac.mp4 resize.rgb24 720x576
        // 播放
        //  ffplay -f rawvideo -video_size 720x576 -pixel_format rgb24 resize.rgb24

        av_frame_unref(srcFrame);
    }
    return 0;
}