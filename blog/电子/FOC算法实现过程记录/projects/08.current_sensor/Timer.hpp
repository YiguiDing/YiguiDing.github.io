#ifndef _Time_H_
#define _Time_H_

#include <Arduino.h>
#include <stdint.h>

class Timer
{
private:
    uint32_t pre_us;

protected:
    uint32_t pre_dt_us;
    float pre_dt_ms;
    float pre_dt_s;

public:
    Timer();
    uint32_t dt_us();
    float dt_ms();
    float dt_s();
};

#endif