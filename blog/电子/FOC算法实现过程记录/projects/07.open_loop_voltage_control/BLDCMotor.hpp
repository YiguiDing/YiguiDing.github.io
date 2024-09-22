#ifndef __BLDCMotor_H__
#define __BLDCMotor_H__
#include <stdint.h>
#include "foc_utils.h"
#include "BLDCDriver.hpp"
#include "LowPassFilter.hpp"
#include "Sensor.hpp"

class BLDCMotor
{
    enum MotorDirectrion : int8_t
    {
        UNKNOW = 0,
        CLOCK_WISE = 1,
        ANTI_CLOCK_WISE = -1,
    };

public:
    // 极对数
    uint8_t polePairs;
    // 供电电压
    float power_supply_voltage = 12.0f;
    // 限制电压
    float limit_voltage = 4.0f;
    // directron
    MotorDirectrion direction = MotorDirectrion::CLOCK_WISE;
private:
    //
    BLDCDriver *driver = nullptr;
    Sensor *sensor = nullptr;

public:
    BLDCMotor(uint8_t polePairs, float power_supply_voltage);
    void connectDriver(BLDCDriver *driver);
    void connectSensor(Sensor *sensor);
    void initFOC();
    void loopFOC();
    /**
     * 获取电角度
     */
    uint16_t electricalAngle();

    /**
     * 设置相电压
     * @param u_d int16_t [-32768,32767] 表示 [-1,1] 精度：1/32768 = 0.0000305
     * @param u_q int16_t [-32768,32767] 表示 [-1,1]
     * @param e_angle uint16_t [0,65535] 表示 [0,2PI] 精度：360°/65535 = 0.00549°
     */
    void setPhraseVoltage(int16_t u_d, int16_t u_q, uint16_t e_angle);
    /**
     * 开环电压控制
     */
    void open_loop_voltage_control(float target);
};
#endif
