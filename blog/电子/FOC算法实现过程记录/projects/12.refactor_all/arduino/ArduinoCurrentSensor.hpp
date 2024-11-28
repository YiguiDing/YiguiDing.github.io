#ifndef __ArduinoCurrentSensor_H__
#define __ArduinoCurrentSensor_H__
#include "../CurrentSensor.hpp"
#include "Arduino.h"

class ArduinoCurrentSensor : public CurrentSensor
{
    int Ia, Ib;
    float R;   // 检流电阻
    uint8_t A; // 放大倍数
public:
    ArduinoCurrentSensor(int Ia, int Ib, float R, uint8_t A)
    {
        this->Ia = Ia;
        this->Ib = Ib;
        this->R = R;
        this->A = A;
    }
    void initSensor() override
    {
        pinMode(this->Ia, INPUT);
        pinMode(this->Ib, INPUT);
        // Arduino 板上的标准分辨率为 10 位 (0-1023)
        analogReadResolution(14); // UNO R4 支持高达 14 位(0-16383)的分辨率
        // 默认参考电压 5 V
        analogReference(AR_DEFAULT);
        // analogReference(AR_INTERNAL); // 内置参考电压 1.5 V
    }
    CurrentABC readSensor() override
    {
        // [0,16383] => [0,5] => [-2.5,2.5]
        float i_a = (analogRead(this->Ia) / 16383.0f * 5.0f - 2.5f) / this->R / this->A;
        float i_b = -(analogRead(this->Ib) / 16383.0f * 5.0f - 2.5f) / this->R / this->A; // b电路接反了 加符号
        float i_c = -(i_a + i_b);
        return CurrentABC{i_a, i_b, i_c};
    }
};
#endif
