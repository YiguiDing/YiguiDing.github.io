#ifndef _Time_H_
#define _Time_H_
#include <stdint.h>
#include <arduino.h>

class Timer
{

public:
    virtual uint32_t us();

private:
    uint32_t t_pre = UINT32_MAX;
    uint32_t dt_us_pre = 1;

public:
    float dt_us()
    {
        uint32_t t_now = this->us();
        uint32_t dt_us_now = t_now > t_pre ? t_now - t_pre : dt_us_pre;
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
        return this->dt_us() / 1e6f;
    }
};

#endif