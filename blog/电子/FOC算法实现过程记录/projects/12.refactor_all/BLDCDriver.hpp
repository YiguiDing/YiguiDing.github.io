#ifndef __BLDCDriver_H__
#define __BLDCDriver_H__
#include <stdint.h>

class BLDCDriver
{
public:
    virtual void initDriver();
    virtual void enableDriver(bool enable);
    virtual void setPhraseVoltage(float u_a, float u_b, float u_c);
};
#endif