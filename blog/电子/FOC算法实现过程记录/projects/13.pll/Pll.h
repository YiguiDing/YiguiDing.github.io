#ifndef _PLL_H_
#define _PLL_H_
#include "LowPassFilter.hpp"
#include "PIDControler.hpp"
#include "Timer.hpp"
#include "config.h"
#include "foc_utils.h"

class PLL
{
private:
    Timer *timer = new ConcreteTimer();

public:
    PIDControler pid_speed_controller{500, 0, 0, 1e10, 0};
    LowPassFilter lpf{10};
    float speed = 0;
    float value = 0;
    float update(float target)
    {
        // PLL=鉴相=>低通滤波=>压控振荡器
        speed = pid_speed_controller(lpf(_sin(_normalizeAngle(target - value))));
        value += speed * timer->dt_s();
        return value;
    }
};

#endif