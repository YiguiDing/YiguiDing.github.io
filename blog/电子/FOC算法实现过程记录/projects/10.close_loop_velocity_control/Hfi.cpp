#ifndef _HFI_H_
#define _HFI_H_

#include "BLDCMotor.hpp"
#include "Timer.h"
#include "foc_utils.h"

class HFI : Timer
{
    BLDCMotor *motor = nullptr;
    CurrentSensor *sensor = nullptr;
    float theta = 0;
    float theta_hat = 0;
    float d_theta_hat = 0;
    CurrentDQ i_pre = {0, 0};
    PIDControler pi = {10, 0, 0, 10, 0};

    void connect(CurrentSensor *sensor)
    {
        this->sensor = sensor;
    }
    void connect(BLDCMotor *motor)
    {
        this->motor = motor;
    }

    float inject_ud()
    {
        static uint8_t idx = 0;
        uint8_t sign = idx++ % 2 == 0 ? +1 : -1;
        return sign * this->motor->power_supply_voltage * 0.08;
    }

    void update()
    {
        // 根据估计位置，计算dq电流
        CurrentDQ i_cur = this->sensor->getCurrentDQ(this->theta_hat);
        theta = _atan2(i_cur.d - i_pre.d, i_cur.q - i_pre.q);
        // PLL
        // float A = 100;
        // float err = A * _sin(theta - theta_hat);
        // d_theta_hat = pi(err);
        // theta_hat += d_theta_hat * this->dt_s();
        this->theta_hat = theta;
    }
};

#endif