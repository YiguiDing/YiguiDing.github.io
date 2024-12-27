#ifndef __ArduinoBLDCDriver_H__
#define __ArduinoBLDCDriver_H__
#include "../BLDCDriver.hpp"
#include "Arduino.h"
#include "pwm.h"

class ArduinoBLDCDriver : public BLDCDriver
{
    int Ua, Ub, Uc, En;
    PwmOut *pwmA;
    PwmOut *pwmB;
    PwmOut *pwmC;

public:
    ArduinoBLDCDriver(int Ua, int Ub, int Uc, int En)
    {
        this->Ua = Ua;
        this->Ub = Ub;
        this->Uc = Uc;
        this->En = En;
    }
    void initDriver() override
    {
        this->pwmA = new PwmOut(this->Ua);
        this->pwmB = new PwmOut(this->Ub);
        this->pwmC = new PwmOut(this->Uc);
        // period 50us = 20,000hz; pulse 0 us = 0%
        this->pwmA->begin(20000.0f, 0.0f);
        this->pwmB->begin(20000.0f, 0.0f);
        this->pwmC->begin(20000.0f, 0.0f);
        pinMode(this->En, OUTPUT); // OUTPUT Mode
    }
    void enableDriver(bool enable) override
    {
        digitalWrite(this->En, enable ? HIGH : LOW); // enable or disable
    }
    /**
     * 设置相电压
     * @param u_a float [-1.0,1.0]
     */
    void setPhraseVoltage(float u_a, float u_b, float u_c) override
    {
        // 设置占空比
        // [-1,1] => [-50,50] => [0,100]
        this->pwmA->pulse_perc(u_a * 50 + 50);
        this->pwmB->pulse_perc(u_b * 50 + 50);
        this->pwmC->pulse_perc(u_c * 50 + 50);
    }
};
#endif
