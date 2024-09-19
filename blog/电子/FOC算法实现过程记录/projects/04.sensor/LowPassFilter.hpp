#ifndef _LowPassFilter_H_
#define _LowPassFilter_H_
#include "Time.hpp"
class LowPassFilter : Time
{
private:
    uint16_t Tms;
    int32_t pre_value;

public:
    LowPassFilter(uint16_t Tms)
    {
        this->Tms = Tms;
    }
    int32_t operator()(int32_t value)
    {
        uint16_t dt_ms = this->dt_ms();
        uint8_t k = UINT8_MAX * (uint32_t)dt_ms / (Tms + dt_ms);
        int32_t out = (k * value + (UINT8_MAX - k) * pre_value) / UINT8_MAX;
        return pre_value = out;
    }
};

#endif