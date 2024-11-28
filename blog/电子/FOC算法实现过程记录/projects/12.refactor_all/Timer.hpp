#ifndef _Time_H_
#define _Time_H_
#include <stdint.h>

class Timer
{

public:
    virtual uint32_t us();
    float dt_us()
    {
        static uint32_t t_pre = this->us();
        static uint32_t dt_us_pre = 1;
        uint32_t t_now = this->us();
        uint32_t dt_us_now = t_now - t_pre;
        if (dt_us_now <= 0)
            dt_us_now = dt_us_pre;
        t_pre = t_now;
        dt_us_pre = dt_us_now;
        return dt_us_now;
    }
    float dt_ms()
    {
        return this->dt_us() / 1e3f;
    }
    float dt_s()
    {
        return dt_us() / 1e6f;
    }
};

#endif