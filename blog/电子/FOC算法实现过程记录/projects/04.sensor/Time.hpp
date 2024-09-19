#ifndef _Time_H_
#define _Time_H_

#include <Arduino.h>
#include <stdint.h>

#define _1_Second_ 1000000
#define _1_Millisecond_ 1000

class Time
{
private:
    uint32_t pre_us;
    uint32_t cur_us;
    uint32_t _dt = 1000;

public:
    uint16_t dt_us();
    uint16_t dt_ms();
    uint16_t dt_s();
};

#endif