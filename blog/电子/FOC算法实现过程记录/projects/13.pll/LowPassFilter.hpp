#ifndef _LowPassFilter_H_
#define _LowPassFilter_H_
#include "config.h"

class LowPassFilter
{

private:
    Timer *timer = new ConcreteTimer();
    float pre_value = 0;

public:
    float Tms;
    LowPassFilter(float Tms)
    {
        this->Tms = Tms;
    }
    float operator()(float value)
    {
        float dt = this->timer->dt_ms();
        float k = dt / (Tms + dt);
        float output = k * value + (1 - k) * pre_value;
        pre_value = output;
        return output;
    }
    void reset()
    {
        this->pre_value = 0;
        this->timer->dt_ms();
    }
};

#endif