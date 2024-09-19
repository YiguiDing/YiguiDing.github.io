#ifndef __BLDCDriver_H__
#define __BLDCDriver_H__
#include <stdint.h>

class BLDCDriver
{
private:
    void (*_initDriver)();
    void (*_enableDriver)(bool enable);
    void (*_setPhraseVoltage)(int16_t u_a, int16_t u_b, int16_t u_c);

public:
    BLDCDriver(
        void (*_initDriver)(),
        void (*_enableDriver)(bool enable),
        void (*_setPhraseVoltage)(int16_t u_a, int16_t u_b, int16_t u_c));
    void initDriver();
    void enableDriver(bool enable);
    void setPhraseVoltage(int16_t u_a, int16_t u_b, int16_t u_c);
};
#endif