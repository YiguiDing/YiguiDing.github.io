#ifndef __PLL_H__
#define __PLL_H__
#include "LowPassFilter.hpp"
#include "Command.hpp"
#include "Timer.hpp"
#include "pid.hpp"

class PLL
{

public:
    Timer timer;
    LowPassFilter pll_lpf = LowPassFilter(100);
    PIDControler pi = PIDControler(10, 0, 0, 10000, 0);
    float update(float theta)
    {
        // 鉴相
        int16_t diff = _sin(fmodf(theta - this->theta_hat, 2 * PI));
        // VCO
        velocity = pi(pll_lpf(diff));
        // 1/s
        theta_hat += velocity * timer.dt_s();
        return theta_hat;
    };
    float getTheta()
    {
        return this->theta_hat;
    };
    float getVelocity()
    {
        return this->velocity;
    };
    void connectCommand(Command *command)
    {
        this->command = command;
    };

private:
    float velocity = 0;
    float theta_hat = 0;
    Command *command = nullptr;
};

#endif