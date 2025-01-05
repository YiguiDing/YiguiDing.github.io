#include "pll.h"

void pll_init(PLL *pll, float Ts, float Kp, float Ki)
{
    pll->theta = 0;
    pll->omega = 0;
    lowpass_filter_init(&pll->filter, Ts);
    pid_controller_init(&pll->pid, Kp, Ki, 0, 1e10f, 1e10f);
}
float pll_update(PLL *pll, float theta, float dt)
{
    // 相位差 = sin(theta)*cos(target) - cos(theta)*sin(target) ≈ sin(theta - target) ≈ PI - normalizeAngle(theta - target)
    // 角速度 = PI控制器(lpf低通滤波器(鉴相器))
    // 角度 = 角速度 * dt
    // float phase_diff = cosf(pll->theta) * sinf(theta) - sinf(pll->theta) * cosf(theta);
    float phase_diff = sinf(_normalizeAngle(pll->theta - theta));
    // float phase_diff = _normalizeAngle(pll->theta - theta) - M_PI;
    pll->omega = pid_controller_update(&pll->pid, lowpass_filter_update(&pll->filter, phase_diff, dt), dt);
    pll->theta += pll->omega * dt;
    return pll->theta;
}