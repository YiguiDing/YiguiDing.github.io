#include "BLDCDriver.hpp"

BLDCDriver::BLDCDriver(void (*initHardWare)(),
                       void (*enableHardWare)(bool enable),
                       void (*setHardWarePhraseVoltage)(int16_t u_a, int16_t u_b, int16_t u_c))
{
    this->initHardWare = initHardWare;
    this->enableHardWare = enableHardWare;
    this->setHardWarePhraseVoltage = setHardWarePhraseVoltage;
}

void BLDCDriver::initDriver()
{
    this->initHardWare();
}
void BLDCDriver::enableDriver(bool enable)
{
    this->enableHardWare(enable);
}
/**
 * 设置相电压
 * @param u_a int16_t [-32768,32767] 表示 [-1,1] 精度：1/32768 = 0.0000305
 */
void BLDCDriver::setPhraseVoltage(int16_t u_a, int16_t u_b, int16_t u_c)
{
    this->setHardWarePhraseVoltage(u_a, u_b, u_c);
}
