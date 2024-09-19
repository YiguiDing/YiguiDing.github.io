#ifndef __BLDCMotor_H__
#define __BLDCMotor_H__
#include <stdint.h>
#include "foc_utils.h"
#include "BLDCDriver.hpp"
#include "Sensor.hpp"

class BLDCMotor
{
public:
    BLDCMotor();
    void BLDCMotor::connectDriver(BLDCDriver *driver);
    void BLDCMotor::connectSensor(Sensor *sensor);
    void BLDCMotor::initFOC();
    void BLDCMotor::loopFOC();
    /**
     * 设置相电压
     * @param u_d int16_t [-32768,32767] 表示 [-1,1] 精度：1/32768 = 0.0000305
     * @param u_q int16_t [-32768,32767] 表示 [-1,1]
     * @param e_angle uint16_t [0,65535] 表示 [0,2PI] 精度：360°/65535 = 0.00549°
     */
    void setPhraseVoltage(int16_t u_d, int16_t u_q, uint16_t e_angle);

private:
    BLDCDriver *driver = nullptr;
    Sensor *sensor = nullptr;
};
#endif
