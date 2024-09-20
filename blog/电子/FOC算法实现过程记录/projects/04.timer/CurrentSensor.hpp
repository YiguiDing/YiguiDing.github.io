#ifndef __CurrentSensor_H__
#define __CurrentSensor_H__
#include <stdint.h>
#include "foc_utils.h"
#include "BLDCDriver.hpp"

typedef struct
{
    int16_t i_a;
    int16_t i_b;
    int16_t i_c;
} Current_RAW;

typedef struct
{
    int16_t i_alpha;
    int16_t i_beta;
} Current;

class CurrentSensor
{
private:
    Current_RAW offset;
    void (*_initSensor)();
    Current_RAW (*_readSensor)();

public:
    CurrentSensor(void (*_initSensor)(), Current_RAW (*_readSensor)());
    void initSensor();
    void alignSensor();
    Current readSensor(uint16_t theta);
};
#endif
