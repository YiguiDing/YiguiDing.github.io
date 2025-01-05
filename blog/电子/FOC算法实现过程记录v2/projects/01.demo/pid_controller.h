#ifndef __PID_CONTROLLER_H__
#define __PID_CONTROLLER_H__

#ifdef __cplusplus
extern "C"
{
#endif
    typedef struct
    {
        float Kp, Ki, Kd;       // pid系数
        float output_limit;     // 限制输出幅值
        float output_roc_limit; // 限制输出最大变化率 ROC(rate of change)输出变化率
        float pre_error, pre_integral, pre_output;
    } PidController;

    void pid_controller_init(PidController *ctrl, float Kp, float Ki, float Kd, float limit, float roc);
    float pid_controller_update(PidController *ctrl, float error, float dt);
    float pid_controller_reset(PidController *ctrl);
#ifdef __cplusplus
}
#endif
#endif