#include <libavutil/avutil.h>     // 工具函数
#include <libavutil/frame.h>      // 工具函数
#include <libavformat/avformat.h> // 解封装
#include <libavcodec/avcodec.h>   // 解码
#include "./lib/adts.h"           // for adts 音频头

int ret = 0;
AVFrame *frame = NULL;
void cleanUp()
{
    if (frame)
    {
        av_frame_unref(frame);
        av_frame_free(&frame);
    }
}

int main(int argc, char **argv)
{
    // 设置日志级别
    av_log_set_level(AV_LOG_INFO);
    if (argc < 3)
    {
        av_log(NULL, AV_LOG_ERROR, "useage: %s <input.pcm> <output.aac>", argv[0]);
        return -1;
    }

    char *input = argv[1];
    char *output = argv[2];

    // 打开输入
    FILE *srcFile = fopen(input, "rb");
    if (srcFile == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "fopen srcFile failed");
        return -1;
    }
    // 打开输出
    FILE *destFile = fopen(output, "wb");
    if (destFile == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "fopen destFile failed");
        return -1;
    }
    // 获取单声道pcm
    // ffmpeg -i bigbuckbunny_h264_aac.mp4 -ar 44100 -ac 1 -f f32le r_44100_c_1_f_f32le.pcm
    // 获取双声道pcm
    // ffmpeg -i bigbuckbunny_h264_aac.mp4 -ar 44100 -ac 2 -f f32le r_44100_c_2_f_f32le.pcm
    // 单声道pcm转换成aac
    // ./output/main.exe r_44100_c_1_f_f32le.pcm pcm_to_aac.aac
    // 双声道pcm转换成aac
    // ./output/main.exe r_44100_c_2_f_f32le.pcm pcm_to_aac.aac
    // 播放
    // ffplay.exe pcm_to_aac.aac

    // 主要的是前三个参数
    AVChannelLayout ch_layout = AV_CHANNEL_LAYOUT_MONO; // 单声道或双声道
    int sample_rate = 44100;                            // 采样率
    int sample_fmt = AV_SAMPLE_FMT_FLTP;                // 采样格式
    int nb_samples = 1024;                              // 每个frame的每个通道含有的采样数

    // 初始化frame
    frame = av_frame_alloc();
    frame->ch_layout = ch_layout;     // av_frame_alloc
    frame->sample_rate = sample_rate; // 采样率
    frame->format = sample_fmt;       /* 对于libfdk_aac编码器，填：AV_SAMPLE_FMT_S16(packet)，因为这是`ff_libfdk_aac_encoder`所支持的格式
                                       * 因为我的ffmpeg是开源社区下载的，没有包含libfdk_aac解码器，需要手动编译才有。
                                       * 
                                       * 对于aac编码器，填，AV_SAMPLE_FMT_FLTP（fltp）（float, planar）FFmpeg内部AAC格式只支持AV_SAMPLE_FMT_FLTP格式的PCM
                                       * 这里播放时提示，AAC RDB per ADTS frame is not implemented，是因为我这里的aac编码器没有实现adts头文件
                                       * 另外，由于fltp是指planar格式，而ffmpeg提取pcm格式文件为packed格式，
                                       * 所以读取文件的时候要做特殊处理，或者仅处理单声道文件
                                       */
    frame->nb_samples = nb_samples;   // 每帧（frame）采样数，如果是`LC profile`默认为1024,如果是`HE profile`则设置为2048

    // 为frame分配buffer空间
    ret = av_frame_get_buffer(frame, 0);
    if (ret < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "av_frame_get_buffer failed");
        cleanUp();
        return -1;
    }

    // 找到编码器
    const AVCodec *encoder = avcodec_find_encoder_by_name("aac");
    if (encoder == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "avcodec_find_encoder_by_name failed");
        cleanUp();
        return -1;
    }
    // 创建上下文
    AVCodecContext *encoderCtx = avcodec_alloc_context3(encoder);
    if (encoderCtx == NULL)
    {
        av_log(NULL, AV_LOG_ERROR, "avcodec_alloc_context3 failed");
        cleanUp();
        return -1;
    }
    // 填参数
    encoderCtx->ch_layout = ch_layout;
    encoderCtx->sample_rate = sample_rate;
    encoderCtx->sample_fmt = sample_fmt;

    // 打开编码器
    ret = avcodec_open2(encoderCtx, encoder, NULL);
    if (ret < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avcodec_open2 failed");
        cleanUp();
        return -1;
    }

    // 读取数据
    AVPacket *packet = av_packet_alloc();
    while (fread(frame->data[0], 1, frame->linesize[0], srcFile) > 0)
    {
        // 发送给编码器
        ret = avcodec_send_frame(encoderCtx, frame);
        if (ret < 0)
        {
            av_log(NULL, AV_LOG_ERROR, "avcodec_send_frame failed");
            cleanUp();
            return -1;
        }
        // 从编码器接收数据
        while (avcodec_receive_packet(encoderCtx, packet) == 0)
        {
            // 写入ADTS_Header
            uint8_t adts_header[7] = {0};
            set_ADTS_Header(
                adts_header,
                packet->size,
                1,
                sample_rate,
                ch_layout.nb_channels);
            fwrite(adts_header, 1, sizeof(adts_header), destFile);
            // 写入数据
            fwrite(packet->data, 1, packet->size, destFile);
            av_packet_unref(packet);
        }
    }

    return 0;
}