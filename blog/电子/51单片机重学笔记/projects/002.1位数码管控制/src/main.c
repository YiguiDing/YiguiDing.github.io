#include "REG52.H"
#include "utils.h"

sfr LED                = 0x90;                                                         // P1口
uint8_t SEG7_CODE_CC[] = {0x3f, 0x06, 0x5b, 0x4f, 0x66, 0x6d, 0x7d, 0x07, 0x7f, 0x6f}; // 共阴极七段数码管0~9数字
void main()
{
    uint8_t num = 1;
    while (1) {
        uint8_t i;
        for (i = 0; i < 10; i++) {
            LED = ~SEG7_CODE_CC[i];
            delay(500);
        }
    }
}