#ifndef __CurrentSensor_H__
#define __CurrentSensor_H__
#include <stdint.h>
#include "foc_utils.h"
#include <math.h>
#include "BLDCMotor.hpp"
#define M_SQRT3 1.73205080756887719000
// CurrentABC
typedef struct
{
    float a;
    float b;
    float c;
} CurrentABC;

// CurrentAB
typedef struct
{
    float alpha;
    float beta;
} CurrentAB;

// CurrentDQ
typedef struct
{
    float d;
    float q;
} CurrentDQ;

// CurrentDC
typedef float CurrentDC;

class CurrentSensor
{

public:
    virtual void initSensor();
    virtual CurrentABC readSensor();
    friend class BLDCMotor;

private:
public:
    CurrentABC offset = {0, 0, 0};
    CurrentABC cache = {0, 0, 0};
    void alignSensor()
    {
        uint16_t times = 1000;
        CurrentABC average = {0, 0, 0};
        for (uint16_t n = 1; n <= times; n++)
        {
            CurrentABC current = this->readSensor();
            average.a += current.a;
            average.b += current.b;
            average.c += current.c;
            delay(2);
        }
        average.a /= times;
        average.b /= times;
        average.c /= times;
        this->offset = average;
    }

public:
    void update()
    {
        cache = this->readSensor();
    }

    CurrentABC getCurrentABC()
    {
        return {
            .a = cache.a - offset.a,
            .b = cache.b - offset.b,
            .c = cache.c - offset.c,
        };
    }

    CurrentAB getCurrentAB()
    {
        CurrentABC i = this->getCurrentABC();
        // 克拉克变换，等赋值形式
        return {
            .alpha = i.a,                      // i_alpha = 1 * i_a + 0 * i_b
            .beta = (i.a + 2 * i.b) / M_SQRT3, // i_beta = 1/sqrt(3) * i_a + 2 / sqrt(3) * i_b = (i_a + 2 * i_b)/sqrt(3)
        };
    }

    CurrentDC getCurrentDC()
    {
        CurrentAB i = this->getCurrentAB();
        return sqrtf(i.alpha * i.alpha + i.beta * i.beta); // 向量模长
    }
    /**
     * @param e_theta [0,2PI]
     */
    CurrentDQ getCurrentDQ(float e_theta)
    {
        float sin, cos;
        _sincos(e_theta, &sin, &cos);
        CurrentAB i = this->getCurrentAB();
        return {
            .d = cos * i.alpha + sin * i.beta,
            .q = -sin * i.alpha + cos * i.beta,
        };
    }
};
#endif
