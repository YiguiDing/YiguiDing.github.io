#include "pid_controller.h"
void pid_controller_init(PidController *ctrl, float Kp, float Ki, float Kd, float limit, float roc)
{
    // 初始化参数
    ctrl->Kp = Kp;
    ctrl->Ki = Ki;
    ctrl->Kd = Kd;
    ctrl->output_limit = limit;
    ctrl->output_roc_limit = roc;
    // 初始化状态
    ctrl->pre_error = 0.0f;
    ctrl->pre_integral = 0.0f;
    ctrl->pre_output = 0.0f;
}

float pid_controller_update(PidController *ctrl, float error, float dt)
{
    // 计算PID控制输出
    float proportional = ctrl->Kp * error;
    float integral = ctrl->pre_integral + ctrl->Ki * (error + ctrl->pre_error) * dt / 2.0f;
    float derivative = ctrl->Kd * (error - ctrl->pre_error) / dt;
    float output = proportional + integral + derivative;

    // 限制输出最大变化率
    float output_roc = (output - ctrl->pre_output) / dt;
    if (output_roc > ctrl->output_roc_limit)
        output = ctrl->pre_output + ctrl->output_roc_limit * dt;
    else if (output_roc < -ctrl->output_roc_limit)
        output = ctrl->pre_output - ctrl->output_roc_limit * dt;

    // 限制输出幅值
    if (output > ctrl->output_limit)
        output = ctrl->output_limit;
    else if (output < -ctrl->output_limit)
        output = -ctrl->output_limit;

    // 更新状态
    ctrl->pre_error = error;
    ctrl->pre_integral = integral;
    ctrl->pre_output = output;

    return output;
}

float pid_controller_reset(PidController *ctrl)
{
    ctrl->pre_error = 0.0f;
    ctrl->pre_integral = 0.0f;
    ctrl->pre_output = 0.0f;
    return 0.0f;
}