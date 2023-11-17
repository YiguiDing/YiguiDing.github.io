#include "REG52.H"
#include "utils.h"

uint8_t SEG_MASK[] = {0x01, 0x02, 0x04, 0x08};
uint8_t NUM[]      = {1, 2, 3, 4};
void display()
{
    uint8_t i;
    for (i = 0; i < 4; i++) {
        P0 = ~SEG7_CODE_CC[NUM[i]];
        P2 = ~SEG_MASK[i];
        delay(1);
        P0 = 0xff; // 关闭段选 一定要初始化，否则将导致第n位显示在第n-1位上
        P2 = 0xff; // 关闭位选 一定要初始化
    }
}

void main()
{
    while (1) {
        display();
    }
}
