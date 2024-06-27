#include <stddef.h>
#include <stdio.h>
#include <libavutil/log.h> // ffmpeg的日志系统
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
void decodeAudio(AVCodecContext *decoderCtx, AVPacket *packet, FILE *dest)
{
    if (avcodec_send_packet(decoderCtx, packet) == 0)
    {
        AVFrame *frame = av_frame_alloc();
        while (avcodec_receive_frame(decoderCtx, frame) >= 0)
        {
            // f32le packed
            fwrite(frame->data[0], 1, frame->linesize[0], dest);
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
        av_log(NULL, AV_LOG_ERROR, "useage: %s <deviceName> <output_f32le.pcm>\n", argv[0]);
        return -1;
    }
    // 打开设备
    char *deviceName = argv[1];
    char *outputName = argv[2];

    // open file
    FILE *dest = fopen(outputName, "wb");
    if (dest == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "fopen failed!!!");
        goto end;
    }

    // ffmpeg -f dshow -i audio="麦克风 (Realtek High Definition Audio)" -ar 44100 -ac 1 -f s16le output.pcm
    // ffplay -ar 44100 -ac 2 -f s16le output.pcm

    const AVInputFormat *inputFmt = av_find_input_format("dshow");
    if (inputFmt == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "av_find_input_format failed!!!");
        goto end;
    }

    AVFormatContext *fmtCtx = avformat_alloc_context();
    char inputName[256] = {0};
    strcat(inputName, "audio=");
    strcat(inputName, deviceName);
    av_log(NULL, AV_LOG_INFO, "input: %s\n", inputName);
    AVDictionary *options = NULL;
    av_dict_set(&options, "ar", "44100", 0);
    av_dict_set(&options, "ac", "2", 0);
    av_dict_set(&options, "f", "s16le", 0);
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
    // 找到音频流
    // av_find_best_stream
    int audioIndex = av_find_best_stream(fmtCtx, AVMEDIA_TYPE_AUDIO, -1, -1, NULL, 0);
    if (audioIndex < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "av_find_best_stream failed!!!");
        goto end;
    }
    // 分配编码器上下文
    AVCodecContext *decoderCtx = avcodec_alloc_context3(NULL);
    err = avcodec_parameters_to_context(decoderCtx, fmtCtx->streams[audioIndex]->codecpar);
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

    AVPacket *packet = av_packet_alloc();
    while (1)
    {
        if (av_read_frame(fmtCtx, packet) == 0)
        {
            if (packet->stream_index == audioIndex)
            {
                decodeAudio(decoderCtx, packet, dest);
            }
        }
        av_packet_unref(packet);
    }
    av_packet_free(&packet);
    decodeAudio(decoderCtx, NULL, dest);

end:
    if (dest)
    {
        fclose(dest);
    }
    if (fmtCtx)
    {
        avformat_close_input(&fmtCtx); // 关闭输入
        avformat_free_context(fmtCtx); // 释放输入
    }
    return 0;
}