#ifndef __ArduinoTimer_H__
#define __ArduinoTimer_H__
#include "../Timer.hpp"
#include "Arduino.h"

class ArduinoTimer : public Timer
{
    uint32_t us() override
    {
        return micros();
    }
};
#endif
