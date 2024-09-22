#ifndef __CurrentSensor_H__
#define __CurrentSensor_H__
#include <stdint.h>
#include "foc_utils.h"
#include "BLDCDriver.hpp"

typedef struct
{
    float a;
    float b;
} CurrentABC;

typedef struct
{
    float alpha;
    float beta;
} CurrentAB;

typedef float CurrentDC;

typedef struct
{
    float d;
    float q;
} CurrentDQ;

class CurrentSensor
{
private:
    void (*initHardWare)();
    CurrentABC (*readHardWare)();
    CurrentABC offset;

public:
    CurrentSensor(void (*initHardWare)(), CurrentABC (*readHardWare)());
    void initSensor();
    void alignSensor();
    CurrentABC readSensor();
    CurrentABC getCurrentABC();
    CurrentAB getCurrentAB();
    CurrentDC getCurrentDC();
    CurrentDQ getCurrentDQ(uint16_t theta);
};
#endif
