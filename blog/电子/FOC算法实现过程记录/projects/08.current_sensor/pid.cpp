#include "pid.hpp"

PIDControler::PIDControler(float p, float i, float d, float max_rate, float limit)
{
    this->p = p;
    this->i = i;
    this->d = d;
    this->max_rate = max_rate;
    this->limit = limit;
}
float PIDControler ::operator()(float error)
{
    float dt = this->dt_s();
    float proportional = p * error;
    float integral = pre_integral + i * 0.5f * (error + pre_error) * dt;
    float derivative = d * (error - pre_error) / dt;
    //
    proportional = _constrain(-limit, proportional, limit);
    integral = _constrain(-limit, integral, limit);
    derivative = _constrain(-limit, derivative, limit);
    //
    float output = proportional + integral + derivative;
    output = _constrain(-limit, output, limit);
    //
    if (max_rate)
    {
        float out_rate = (output - pre_output) / dt;
        if (out_rate > max_rate)
            output = pre_output + max_rate * dt;
        else if (out_rate < -max_rate)
            output = pre_output - max_rate * dt;
        output = _constrain(-limit, output, limit);
    }
    //
    pre_error = error;
    pre_integral = integral;
    pre_output = output;
    //
    return output;
}
