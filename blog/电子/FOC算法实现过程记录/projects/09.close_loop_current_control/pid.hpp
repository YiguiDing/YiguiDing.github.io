#ifndef _PID_H_
#define _PID_H_
#include "Timer.hpp"
#include "foc_utils.h"
class PIDControler : Timer
{
private:
public:
    float p, i, d, limit, max_rate;
    float pre_error, pre_integral, pre_output;

public:
    PIDControler(float p, float i, float d, float max_rate, float limit);
    float operator()(float error);
};
#endif