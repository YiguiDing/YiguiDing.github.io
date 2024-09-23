#include "Arduino.h"
#include "CurrentSensor.hpp"

#define M_SQRT3 1.7320508F

CurrentSensor::CurrentSensor(void (*initHardWare)(), CurrentABC (*readHardWare)())
{
    this->initHardWare = initHardWare;
    this->readHardWare = readHardWare;
}

void CurrentSensor::initSensor()
{
    this->initHardWare();
}

CurrentABC CurrentSensor::readSensor()
{
    return this->readHardWare();
}

void CurrentSensor::alignSensor()
{
    uint16_t times = 1000;
    CurrentABC average = {0, 0};
    for (uint16_t n = 1; n <= times; n++)
    {
        CurrentABC current = this->readHardWare();
        average.a += current.a;
        average.b += current.b;
        delay(2);
    }
    average.a /= times;
    average.b /= times;
    this->offset = average;
}

CurrentABC CurrentSensor::getCurrentABC()
{
    CurrentABC i = this->readHardWare();
    i.a -= offset.a;
    i.b -= offset.b;
    return i;
}

CurrentAB CurrentSensor::getCurrentAB()
{
    CurrentABC i = this->getCurrentABC();
    // 克拉克变换，等赋值形式
    return {
        .alpha = i.a,                     // i_alpha = 1 * i_a + 0 * i_b
        .beta = (i.a + 2 * i.b) / M_SQRT3 // i_beta = 1/sqrt(3) * i_a + 2 / sqrt(3) * i_b
    };
}

CurrentDC CurrentSensor::getCurrentDC()
{
    CurrentAB i = this->getCurrentAB();
    return sqrtf(i.alpha * i.alpha + i.beta * i.beta);
}

CurrentDQ CurrentSensor::getCurrentDQ(uint16_t theta)
{
    int16_t sin, cos;
    _sincos(theta, &sin, &cos);
    CurrentABC i = this->getCurrentABC();
    return {
        .d = (i.a * cos + i.b * sin) / INT16_MAX,
        .q = (-i.a * sin + i.b * cos) / INT16_MAX,
    };
}
