#include "utils.h"
void delay_ms(uint16_t ms) // ms_delay when T=12MHz
{
    uint16_t i, j;
    for (i = ms; i > 0; i--)
        for (j = 123; j > 0; j--) // 耗时1ms
            ;
}
// T=12Mhz 一个机器周期=1us
void delay_2us(uint8_t _2us)
{
    // 耗时2t个机器周期
    while (--_2us);
}