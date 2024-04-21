#include <libavutil/avutil.h>     // 工具函数
#include <libavutil/frame.h>      // 工具函数
#include <libavformat/avformat.h> // 解封装
#include <libavcodec/avcodec.h>   // 解码

int ret = 0;
AVFormatContext *inFmtCtx = NULL;
void cleanUp()
{
    if (inFmtCtx)
    {
        avformat_close_input(&inFmtCtx);
    }
}

int main(int argc, char **argv)
{
    // 设置日志级别
    av_log_set_level(AV_LOG_INFO);
    if (argc < 3)
    {
        av_log(NULL, AV_LOG_ERROR, "useage: %s <input.mp4> <output.pcm>", argv[0]);
        return -1;
    }

    char *input = argv[1];
    char *output = argv[2];

    // 打开输入
    ret = avformat_open_input(&inFmtCtx, input, NULL, NULL);
    if (ret < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avformat_open_input failed");
        cleanUp();
        return -1;
    }
    // 打开输出
    FILE *outFile = fopen(output, "wb+");

    // 找到流信息
    ret = avformat_find_stream_info(inFmtCtx, NULL);
    if (ret < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avformat_find_stream_info failed");
        cleanUp();
        return -1;
    }

    // 找到音频流
    int audioIdx = av_find_best_stream(inFmtCtx, AVMEDIA_TYPE_AUDIO, -1, -1, NULL, 0);
    if (audioIdx < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "av_find_best_stream failed");
        cleanUp();
        return -1;
    }
    // 创建解码器上下文
    AVCodecContext *audioDecoderCtx = avcodec_alloc_context3(NULL);

    // 拷贝解码器参数到解码器上下文
    ret = avcodec_parameters_to_context(audioDecoderCtx, inFmtCtx->streams[audioIdx]->codecpar);
    if (ret < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avcodec_parameters_to_context failed");
        cleanUp();
        return -1;
    }
    // 找到解码器
    const AVCodec *audioDecoder = avcodec_find_decoder(audioDecoderCtx->codec_id);

    // 打开解码器
    ret = avcodec_open2(audioDecoderCtx, audioDecoder, NULL);
    if (ret < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avcodec_open2 failed");
        cleanUp();
        return -1;
    }

    // 创建frame
    AVFrame *audioFrame = av_frame_alloc();
    // 创建buffer
    int bufSize = av_samples_get_buffer_size(NULL, audioDecoderCtx->ch_layout.nb_channels, audioDecoderCtx->sample_rate, audioDecoderCtx->sample_fmt, 1);
    uint8_t *buf = av_malloc(bufSize);
    // 分配buffer到frame->data中
    audioFrame->nb_samples = audioDecoderCtx->sample_rate; // 必须预先设置
    ret = avcodec_fill_audio_frame(audioFrame, audioDecoderCtx->ch_layout.nb_channels, audioDecoderCtx->sample_fmt, buf, bufSize, 1);
    if (ret < 0)
    {
        av_log(NULL, AV_LOG_ERROR, "avcodec_fill_audio_frame failed");
        cleanUp();
        return -1;
    }
    // 单个采样所占字节数
    int bytesPerSample = av_get_bytes_per_sample(audioDecoderCtx->sample_fmt);

    // 读取packet
    AVPacket *packet = av_packet_alloc();
    while (av_read_frame(inFmtCtx, packet) >= 0)
    {
        if (packet->stream_index == audioIdx)
        {
            // 发送个解码器
            avcodec_send_packet(audioDecoderCtx, packet);
            // 从解码器接收数据
            while (avcodec_receive_frame(audioDecoderCtx, audioFrame) == 0)
            {
                /**
                 * 需要把解码后的非交错格式（Planer），写入文件使用交错格式（Packed）
                 *
                 * audioFrame  格式：fltp(float32-le)
                 *
                 * frame->data[ch=0] L L L L
                 * frame->data[ch=1] R R R R
                 *
                 * 写入文件：
                 * L R L R L R L R L R L R
                 */

                for (int sampleIdx = 0; sampleIdx < audioFrame->nb_samples; sampleIdx++)
                {
                    for (int ch = 0; ch < audioFrame->ch_layout.nb_channels; ch++)
                    {
                        fwrite(audioFrame->data[ch] + sampleIdx * bytesPerSample, 1, bytesPerSample, outFile);
                    }
                }
            }
        }
        av_packet_unref(packet);
    }
    /**
    $ ffprobe.exe out.aac
        Input #0, aac, from 'out.aac':
        Duration: 00:00:34.95, bitrate: 122 kb/s
        Stream #0:0: Audio: aac (LC), 44100 Hz, stereo, fltp, 122 kb/s
     */
    /*
    $ ./output/main.exe out.aac aac_to_pcm.pcm
    $ ffplay.exe -i aac_to_pcm.pcm -ac 2 -ar 44100 -f f32le
    */
    return 0;
}