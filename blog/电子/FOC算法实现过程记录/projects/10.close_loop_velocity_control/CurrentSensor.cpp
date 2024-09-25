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

#define M_1_SQRT3 0.57735026919f // (1 / sqrtf(3))
#define M_2_SQRT3 1.15470053838f // (2 / sqrtf(3))

CurrentAB CurrentSensor::getCurrentAB()
{
    CurrentABC i = this->getCurrentABC();
    // 克拉克变换，等赋值形式
    return {
        .alpha = i.a,                              // i_alpha = 1 * i_a + 0 * i_b
        .beta = M_1_SQRT3 * i.a + M_2_SQRT3 * i.b, // i_beta = 1/sqrt(3) * i_a + 2 / sqrt(3) * i_b
    };
}

CurrentDC CurrentSensor::getCurrentDC()
{
    CurrentAB i = this->getCurrentAB();
    return sqrtf(i.alpha * i.alpha + i.beta * i.beta);
}

CurrentDQ CurrentSensor::getCurrentDQ(uint16_t e_theta)
{
    int16_t sin, cos;
    _sincos(e_theta, &sin, &cos);
    CurrentAB i = this->getCurrentAB();
    return {
        .d = (cos * i.alpha + sin * i.beta) / (INT16_MAX),
        .q = (sin * -i.alpha + cos * i.beta) / (INT16_MAX),
    };
}
