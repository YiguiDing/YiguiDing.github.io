#ifndef _LowPassFilter_H_
#define _LowPassFilter_H_
#include "Timer.hpp"
class LowPassFilter : Timer
{
private:
    float Tms;
    float pre_value = 0;

public:
    LowPassFilter(float Tms)
    {
        this->Tms = Tms;
    }
    float operator()(float value)
    {
        float dt = this->dt_ms();
        float k = dt / (Tms + dt);
        float output = k * value + (1 - k) * pre_value;
        pre_value = output;
        return output;
    }
};

#endif