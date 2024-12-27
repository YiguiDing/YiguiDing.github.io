#ifndef _PID_H_
#define _PID_H_
#include "Timer.hpp"
#include "config.h"
#include "foc_utils.h"
class PIDControler
{
private:
public:
    float Kp, Ki, Kd;    // pid系数
    float output_limit;     // 限制输出幅值
    float output_roc_limit; // 限制输出最大变化率 ROC(rate of change)输出变化率
    float pre_error, pre_integral, pre_output;
    Timer *timer = new ConcreteTimer();

public:
    PIDControler() {}
    PIDControler(float Kp, float Ki, float Kd, float output_limit, float output_roc_limit)
    {
        this->Kp = Kp;
        this->Ki = Ki;
        this->Kd = Kd;
        this->output_limit = output_limit;
        this->output_roc_limit = output_roc_limit;
        this->reset();
    }
    float operator()(float error)
    {
        float dt = this->timer->dt_s();
        float proportional = Kp * error;
        float integral = pre_integral + Ki * 0.5f * (error + pre_error) * dt;
        float derivative = Kd * (error - pre_error) / dt;
        //
        proportional = _constrain(-output_limit, proportional, output_limit);
        integral = _constrain(-output_limit, integral, output_limit);
        derivative = _constrain(-output_limit, derivative, output_limit);
        //
        float output = proportional + integral + derivative;
        if (output_roc_limit)
        {
            float out_rate = (output - pre_output) / dt;
            if (out_rate > output_roc_limit)
                output = pre_output + output_roc_limit * dt;
            else if (out_rate < -output_roc_limit)
                output = pre_output - output_roc_limit * dt;
        }
        output = _constrain(-output_limit, output, output_limit);
        //
        pre_error = error;
        pre_integral = integral;
        pre_output = output;
        //
        return output;
    }
    void reset()
    {
        this->pre_output = 0;
        this->pre_integral = 0;
        this->pre_error = 0;
        this->timer->dt_s();
    }
};
#endif