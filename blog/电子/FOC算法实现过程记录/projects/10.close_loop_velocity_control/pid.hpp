#ifndef _PID_H_
#define _PID_H_
#include "Timer.hpp"
#include "foc_utils.h"
class PIDControler : Timer
{
private:
public:
    float K_p, K_i, K_d;    // pid系数
    float output_limit;     // 限制输出幅值
    float output_roc_limit; // 限制输出最大变化率 ROC(rate of change)输出变化率
    float pre_error, pre_integral, pre_output;

public:
    PIDControler();
    PIDControler(float Kp, float Ki, float Kd, float output_limit, float output_roc_limit);
    float operator()(float error);
    void reset();
};
#endif