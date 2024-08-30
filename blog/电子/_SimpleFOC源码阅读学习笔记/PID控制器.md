---
title: PID控制器
date: 2024-08-30T12:53:00
---

## 最简代码实现

```cpp
PIDController::PIDController(float _P, float _I, float _D, float _ramp, float _limit){
    P = _P;
    I = _I;
    D = _D;
    ramp = _ramp;
    limit = _limit;
}
float PIDController::Output(float error,float dt){
    
    float proportional = P * error;                                            // 比例
    float integral = integral_prev + I * 0.5f * (error + error_prev) * dt;     // 积分
    float derivative = D*(error - error_prev)/dt;                              // 微分
    
    proportional =  _constrain(proportional, -limit, limit);    // 限幅
    integral =  _constrain(integral, -limit, limit);            // 限幅
    derivative =  _constrain(derivative, -limit, limit);        // 限幅
    
    float output = proportional + integral + derivative; // 求和

    output =  _constrain(output, -limit, limit);        // 限幅

    if(output_ramp > 0) {
        float output_rate = (output - output_prev)/dt; // 计算导数 dy/dt（输出变化率）
        if (output_rate > output_ramp) output = output_prev + output_ramp * dt; // 防止其变化率过大
        else if (output_rate < -output_ramp) output = output_prev - output_ramp * dt;// 防止其变化率过小
    }

    output =  _constrain(output, -limit, limit);        // 限幅

    error_prev = error;
    integral_prev = integral;
    output_prev = output;
    
    return output;
}
```
## 源代码实现

```cpp
#include "pid.h"

PIDController::PIDController(float P, float I, float D, float ramp, float limit)
    : P(P)
    , I(I)
    , D(D)
    , output_ramp(ramp)    // output derivative limit [volts/second]
    , limit(limit)         // output supply limit     [volts]
    , error_prev(0.0f)
    , output_prev(0.0f)
    , integral_prev(0.0f)
{
    timestamp_prev = _micros();
}

// PID controller function
float PIDController::operator() (float error){
    // calculate the time from the last call
    unsigned long timestamp_now = _micros();
    float Ts = (timestamp_now - timestamp_prev) * 1e-6f;
    // quick fix for strange cases (micros overflow)
    if(Ts <= 0 || Ts > 0.5f) Ts = 1e-3f;

    // u(s) = (P + I/s + Ds)e(s)
    // Discrete implementations
    // proportional part
    // u_p  = P *e(k)
    float proportional = P * error;
    // Tustin transform of the integral part
    // u_ik = u_ik_1  + I*Ts/2*(ek + ek_1)
    float integral = integral_prev + I*Ts*0.5f*(error + error_prev);
    // antiwindup - limit the output
    integral = _constrain(integral, -limit, limit);
    // Discrete derivation
    // u_dk = D(ek - ek_1)/Ts
    float derivative = D*(error - error_prev)/Ts;

    // sum all the components
    float output = proportional + integral + derivative;
    // antiwindup - limit the output variable
    output = _constrain(output, -limit, limit);

    // if output ramp defined
    if(output_ramp > 0){
        // limit the acceleration by ramping the output
        float output_rate = (output - output_prev)/Ts; // 计算 dy/dt 就是导数（输出变化率）
        if (output_rate > output_ramp)
            output = output_prev + output_ramp*Ts; // 保证其增长率最高为output_ramp
        else if (output_rate < -output_ramp)
            output = output_prev - output_ramp*Ts;
    }
    // saving for the next pass
    integral_prev = integral;
    output_prev = output;
    error_prev = error;
    timestamp_prev = timestamp_now;
    return output;
}

void PIDController::reset(){
    integral_prev = 0.0f;
    output_prev = 0.0f;
    error_prev = 0.0f;
}

```

```cpp
#ifndef PID_H
#define PID_H


#include "time_utils.h"
#include "foc_utils.h"

/**
 *  PID controller class
 */
class PIDController
{
public:
    /**
     *  
     * @param P - Proportional gain 
     * @param I - Integral gain
     * @param D - Derivative gain 
     * @param ramp - Maximum speed of change of the output value
     * @param limit - Maximum output value
     */
    PIDController(float P, float I, float D, float ramp, float limit);
    ~PIDController() = default;

    float operator() (float error);
    void reset();

    float P; //!< Proportional gain 
    float I; //!< Integral gain 
    float D; //!< Derivative gain 
    float output_ramp; //!< Maximum speed of change of the output value
    float limit; //!< Maximum output value

protected:
    float error_prev; //!< last tracking error value
    float output_prev;  //!< last pid output value
    float integral_prev; //!< last integral component value
    unsigned long timestamp_prev; //!< Last execution timestamp
};

#endif // PID_H
```