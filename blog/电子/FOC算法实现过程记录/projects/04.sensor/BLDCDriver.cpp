#include "BLDCDriver.hpp"

BLDCDriver::BLDCDriver(void (*_initDriver)(),
                       void (*_enableDriver)(bool enable),
                       void (*_setPhraseVoltage)(int16_t u_a, int16_t u_b, int16_t u_c))
{
    this->_initDriver = _initDriver;
    this->_enableDriver = _enableDriver;
    this->_setPhraseVoltage = _setPhraseVoltage;
}

void BLDCDriver::initDriver()
{
    this->_initDriver();
}
void BLDCDriver::enableDriver(bool enable)
{
    this->_enableDriver(enable);
}
/**
 * 设置相电压
 * @param u_a int16_t [-32768,32767] 表示 [-1,1] 精度：1/32768 = 0.0000305
 */
void BLDCDriver::setPhraseVoltage(int16_t u_a, int16_t u_b, int16_t u_c)
{
    this->_setPhraseVoltage(u_a, u_b, u_c);
}
