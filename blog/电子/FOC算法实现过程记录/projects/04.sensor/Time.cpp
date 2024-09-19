#include "time.hpp"

uint16_t Time::dt_us()
{
    pre_us = cur_us;
    cur_us = micros();                                       //
    int32_t temp = (cur_us - (int32_t)pre_us);               // 负数说明溢出
    return (temp <= 0 || temp > 5000000) ? 1 : (_dt = temp); // 处理溢出和0的情况
}

uint16_t Time::dt_ms()
{
    uint16_t t = dt_us() / 1000;
    return t <= 0 ? 1 : t;
}

uint16_t Time::dt_s()
{
    uint16_t t = dt_us() / 1000000;
    return t <= 0 ? 1 : t;
}