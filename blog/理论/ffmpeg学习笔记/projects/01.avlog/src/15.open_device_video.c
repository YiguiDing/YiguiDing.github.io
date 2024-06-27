#include <stddef.h>
#include <stdio.h>
#include <libavutil/avutil.h>
#include <libavutil/imgutils.h> // 计算视频大小
#include <libavutil/log.h>      // ffmpeg的日志系统
#include <libavformat/avformat.h>
#include <libavcodec/avcodec.h>
#include <libavdevice/avdevice.h> // 设备
#include <libswscale/swscale.h>   // 视频缩放

int err;
/**
 * 列出当前所连设备
 */
void list_devices()
{
    // ffmpeg -f dshow -list_devices true -i dummy
    const AVInputFormat *inputFmt = av_find_input_format("dshow");
    if (inputFmt == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "av_find_input_format failed!!!\n");
    }
    AVDictionary *options = NULL;
    av_dict_set(&options, "list_devices", "true", 0);
    AVFormatContext *fmtCtx = avformat_alloc_context();
    err = avformat_open_input(&fmtCtx, "dummy", inputFmt, &options);
    if (err != 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avformat_open_input failed!!!\n");
    }
    /**
        输出：
            [dshow @ 000002572fc93000] "USB2.0 UVC HD Webcam" (video)
            [dshow @ 000002572fc93000]   Alternative name "@device_pnp_\\?\usb#vid_13d3&pid_5654&mi_00#6&3907f7b1&0&0000#{65e8773d-8f56-11d0-a3b9-00a0c9223196}\global"
            [dshow @ 000002572fc93000] "麦克风 (Realtek High Definition Audio)" (audio)
            [dshow @ 000002572fc93000]   Alternative name "@device_cm_{33D9A762-90C8-11D0-BD43-00A0C911CE86}\wave_{4030643A-CF6B-43BC-99F6-7AB127C53A99}"
    */
    if (fmtCtx)
    {
        avformat_close_input(&fmtCtx); // 关闭输入
        avformat_free_context(fmtCtx); // 释放输入
    }
}
void decodeVideoYUV420p(AVCodecContext *decoderCtx, struct SwsContext *swsCtx, AVPacket *packet, AVFrame *destFrame, FILE *dest)
{
    if (avcodec_send_packet(decoderCtx, packet) == 0)
    {
        AVFrame *srcframe = av_frame_alloc();
        while (avcodec_receive_frame(decoderCtx, srcframe) >= 0)
        {
            sws_scale(swsCtx,                                                    // swscale上下文
                      srcframe->data, srcframe->linesize, 0, decoderCtx->height, // 源Frame数据 源Frame宽度 起始位置 原始图片高度
                      destFrame->data, destFrame->linesize                       // 目标Frame数据 目标Frame宽度
            );
            // yuv420p (packed format)
            fwrite(destFrame->data[0], 1, decoderCtx->width * decoderCtx->height, dest);
            fwrite(destFrame->data[1], 1, decoderCtx->width * decoderCtx->height / 4, dest);
            fwrite(destFrame->data[2], 1, decoderCtx->width * decoderCtx->height / 4, dest);
        }
        av_frame_free(&srcframe);
    }
}
void decodeVideo(AVCodecContext *decoderCtx, AVPacket *packet, FILE *dest)
{
    if (avcodec_send_packet(decoderCtx, packet) == 0)
    {
        AVFrame *frame = av_frame_alloc();
        while (avcodec_receive_frame(decoderCtx, frame) >= 0)
        {
            // uyvu422 yuv422 (packed format)
            fwrite(frame->data[0], 1, decoderCtx->width * decoderCtx->height * 2, dest);
        }
        av_frame_free(&frame);
    }
}

int main(int argc, char **argv)
{
    // 设置日志级别
    av_log_set_level(AV_LOG_INFO);
    // 注册所有device
    avdevice_register_all();
    if (argc < 3)
    {
        // 显示所有输入设备
        list_devices();
        // 显示用法
        av_log(NULL, AV_LOG_ERROR, "useage: %s <deviceName> <output.yuv> <yuv420p.yuv>\n", argv[0]);
        return -1;
    }
    // 打开设备
    char *deviceName = argv[1];
    char *outputName1 = argv[2];
    char *outputNmae2 = argv[3];

    // open file
    FILE *dest1 = fopen(outputName1, "wb");
    if (dest1 == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "fopen failed!!!");
        goto end;
    }
    FILE *dest2 = fopen(outputNmae2, "wb");
    if (dest2 == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "fopen failed!!!");
        goto end;
    }

    // ffmpeg -f dshow -i video='USB2.0 UVC HD Webcam' -framerate 30 -video_size 640x480 -pixel_format yuyv422  out.yuv
    // ffplay out.yuv -framerate 30 -video_size 640x480 -pixel_format yuyv422

    const AVInputFormat *inputFmt = av_find_input_format("dshow");
    if (inputFmt == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "av_find_input_format failed!!!");
        goto end;
    }

    AVFormatContext *fmtCtx = avformat_alloc_context();
    char inputName[256] = {0};
    strcat(inputName, "video=");
    strcat(inputName, deviceName);
    av_log(NULL, AV_LOG_INFO, "input: %s\n", inputName);
    AVDictionary *options = NULL;
    // av_dict_set(&options, "framerate", "30", 0);
    // av_dict_set(&options, "pixel_format", "yuyv422", 0);
    // av_dict_set(&options, "video_size", "640x480", 0);
    err = avformat_open_input(&fmtCtx, inputName, inputFmt, &options);
    if (err)
    {
        av_log(NULL, AV_LOG_ERROR, "avformat_open_input failed!!!");
        goto end;
    }
    // 输出流信息
    av_dump_format(fmtCtx, 0, deviceName, 0);
    // 探测流
    // get stream information
    err = avformat_find_stream_info(fmtCtx, NULL);
    if (err < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "av_find_best_stream failed!!!");
        goto end;
    }
    // 找到视频流
    // av_find_best_stream
    int videoIndex = av_find_best_stream(fmtCtx, AVMEDIA_TYPE_VIDEO, -1, -1, NULL, 0);
    if (videoIndex < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "av_find_best_stream failed!!!");
        goto end;
    }
    // 分配编码器上下文
    AVCodecContext *decoderCtx = avcodec_alloc_context3(NULL);
    err = avcodec_parameters_to_context(decoderCtx, fmtCtx->streams[videoIndex]->codecpar);
    if (err < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avcodec_parameters_to_context failed!!!");
        goto end;
    }
    const AVCodec *decoder = avcodec_find_decoder(decoderCtx->codec_id);

    if (decoder == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "avcodec_find_decoder failed!!!");
        goto end;
    }
    av_log(NULL, AV_LOG_INFO, "decoder name: %s\n", decoder->name);

    err = avcodec_open2(decoderCtx, decoder, NULL);
    if (err != 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avcodec_open2 failed!!!");
        goto end;
    }

    // 获取源颜色空间
    enum AVPixelFormat srcPixFmt = decoderCtx->pix_fmt;
    enum AVPixelFormat destPixFmt = AV_PIX_FMT_YUV420P; // AV_PIX_FMT_YUV420P

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
        goto end;
    }
    // 创建destFrame
    AVFrame *destFrame = av_frame_alloc();
    // 为destFrame的data分配内存
    uint8_t *destBuffer = av_malloc(av_image_get_buffer_size(destPixFmt, decoderCtx->width, decoderCtx->height, 1));
    // 把所分配内存的地址，通过计算，分别设置到Y:data[0] U:data[1] V:data[2] 中
    av_image_fill_arrays(destFrame->data, destFrame->linesize, destBuffer, destPixFmt, decoderCtx->width, decoderCtx->height, 1);

    AVPacket *packet = av_packet_alloc();
    while (1)
    {
        if (av_read_frame(fmtCtx, packet) == 0)
        {
            if (packet->stream_index == videoIndex)
            {
                decodeVideo(decoderCtx, packet, dest1);
                decodeVideoYUV420p(decoderCtx, swsCtx, packet, destFrame, dest2);
            }
        }
        av_packet_unref(packet);
    }
    av_packet_free(&packet);
    decodeVideo(decoderCtx, NULL, dest1);
    decodeVideoYUV420p(decoderCtx, swsCtx, NULL, destFrame, dest2);

end:
    if (dest1)
    {
        fclose(dest1);
    }
    if (fmtCtx)
    {
        avformat_close_input(&fmtCtx); // 关闭输入
        avformat_free_context(fmtCtx); // 释放输入
    }
    return 0;
}