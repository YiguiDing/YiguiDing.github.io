#include "timer.hpp"

Timer::Timer()
{
    this->dt_us(); // 为了初始化 pre_us
}

uint32_t Timer::dt_us()
{
    uint32_t cur_us = micros();
    uint32_t dt_us;
    if (cur_us > pre_us) // 正常情况
    {
        dt_us = cur_us - pre_us;
        // dt_us = (dt_us > 500000) ? 500000 : dt_us; // 最大1s
    }
    else if (cur_us == pre_us) // 处理dt为0的情况
        dt_us = 1;
    else // 处理溢出 micros70分钟溢出一次
        dt_us = pre_dt_us;
    pre_dt_us = dt_us;
    pre_us = cur_us;
    return dt_us;
}

float Timer::dt_ms()
{
    return this->pre_dt_ms = dt_us() / 1000.0f;
}

float Timer::dt_s()
{
    return this->pre_dt_s = dt_us() / 1000000.0f;
}