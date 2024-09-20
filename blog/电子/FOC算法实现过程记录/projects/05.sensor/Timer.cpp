#include "timer.hpp"

uint32_t Timer::dt_us()
{
    pre_us = cur_us;
    cur_us = micros();                                   // micros70分钟溢出一次
    uint32_t dt = cur_us > pre_us ? cur_us - pre_us : 1; // 处理溢出和dt为0的情况
    return dt;
}

uint16_t Timer::dt_ms()
{
    uint16_t dt = dt_us() / 1000;
    return dt == 0 ? 1 : dt;
}

uint16_t Timer::dt_s()
{
    uint16_t dt = dt_us() / 1000000;
    return dt == 0 ? 1 : dt;
}