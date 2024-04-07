#ifndef _ADTSHEADER_H
#define _ADTSHEADER_H
#include <stdio.h>
#include <stdint.h>

#define ADTS_HEADER_LEN 7;

const int sampling_frequencies[] = {
    96000, // 0x0
    88200, // 0x1
    64000, // 0x2
    48000, // 0x3
    44100, // 0x4
    32000, // 0x5
    24000, // 0x6
    22050, // 0x7
    16000, // 0x8
    12000, // 0x9
    11025, // 0xa
    8000   // 0xb
    // 0xc d e f是保留的
};

void set_ADTS_Header(char data[7],
                int data_length,
                int profile,
                int samplerate,
                int channels)
{

    int sampling_frequency_index = 3; // 默认使用48000hz
    int adtsLen = data_length + 7;
    // ADTS不是单纯的data，是hearder+data的，所以加7这个头部hearder的长度，这里7是因为后面protection absent位设为1，不做校验，所以直接加7，如果做校验，可能会是9

    int frequencies_size = sizeof(sampling_frequencies) / sizeof(sampling_frequencies[0]);
    int i = 0;
    for (i = 0; i < frequencies_size; i++) // 查找采样率
    {
        if (sampling_frequencies[i] == samplerate)
        {
            sampling_frequency_index = i;
            break;
        }
    }
    if (i >= frequencies_size)
    {
        printf("unsupport samplerate:%d\n", samplerate);
    }

    data[0] = 0xff;                                    // syncword:0xfff                          高8bits
    data[1] = 0xf0;                                    // syncword:0xfff                          低4bits
    data[1] |= (0 << 3);                               // MPEG Version:0 for MPEG-4,1 for MPEG-2  1bit
    data[1] |= (0 << 1);                               // Layer:0                                 2bits
    data[1] |= 1;                                      // protection absent:1                     1bit
    data[2] = (profile) << 6;                          // profile:profile                       2bits
    data[2] |= (sampling_frequency_index & 0x0f) << 2; // sampling frequency index:sampling_frequency_index  4bits
    data[2] |= (0 << 1);                               // private bit:0                   1bit
    data[2] |= (channels & 0x04) >> 2;                 // channel configuration:channels  高1bit
    data[3] = (channels & 0x03) << 6;                  // channel configuration:channels 低2bits
    data[3] |= (0 << 5);                               // original：0                1bit
    data[3] |= (0 << 4);                               // home：0                    1bit
    data[3] |= (0 << 3);                               // copyright id bit：0        1bit
    data[3] |= (0 << 2);                               // copyright id start：0      1bit
    data[3] |= ((adtsLen & 0x1800) >> 11);             // frame length：value    高2bits
    data[4] = (uint8_t)((adtsLen & 0x7f8) >> 3);       // frame length: value    中间8bits
    data[5] = (uint8_t)((adtsLen & 0x7) << 5);         // frame length: value    低3bits
    data[5] |= 0x1f;                                   // buffer fullness:0x7ff 高5bits
    data[6] = 0xfc;                                    // 11111100       //buffer fullness:0x7ff 低6bits
    // number_of_raw_data_blocks_in_frame：  //    表示ADTS帧中有number_of_raw_data_blocks_in_frame + 1个AAC原始帧。
}

#endif // _ADTSHEADER_H