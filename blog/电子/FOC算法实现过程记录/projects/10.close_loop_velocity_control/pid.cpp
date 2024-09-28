#include "pid.hpp"

PIDControler::PIDControler(float Kp, float Ki, float Kd, float output_limit, float output_roc_limit)

{
    this->K_p = Kp;
    this->K_i = Ki;
    this->K_d = Kd;
    this->output_limit = output_limit;
    this->output_roc_limit = output_roc_limit;
    this->reset();
}
float PIDControler ::operator()(float error)
{
    float dt = this->dt_s();
    float proportional = K_p * error;
    float integral = pre_integral + K_i * 0.5f * (error + pre_error) * dt;
    float derivative = K_d * (error - pre_error) / dt;
    //
    proportional = _constrain(-output_limit, proportional, output_limit);
    integral = _constrain(-output_limit, integral, output_limit);
    derivative = _constrain(-output_limit, derivative, output_limit);
    //
    float output = proportional + integral + derivative;
    output = _constrain(-output_limit, output, output_limit);
    //
    if (output_roc_limit)
    {
        float out_rate = (output - pre_output) / dt;
        if (out_rate > output_roc_limit)
            output = pre_output + output_roc_limit * dt;
        else if (out_rate < -output_roc_limit)
            output = pre_output - output_roc_limit * dt;
        output = _constrain(-output_limit, output, output_limit);
    }
    //
    pre_error = error;
    pre_integral = integral;
    pre_output = output;
    //
    return output;
}
void PIDControler::reset()
{
    this->pre_output = 0;
    this->pre_integral = 0;
    this->pre_error = 0;
    this->dt_ms();
}
