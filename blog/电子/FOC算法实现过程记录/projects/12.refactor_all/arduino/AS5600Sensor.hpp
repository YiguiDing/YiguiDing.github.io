#ifndef __AS5600Sensor_H__
#define __AS5600Sensor_H__
#include "../Sensor.hpp"
#include "../foc_utils.h"
#include "Arduino.h"

#define AS5600_ADDR 0x36
#define AS5600_RAW_ANGLE 0x0c
#define AS5600_ANGLE 0x0e

class AS5600Sensor : public Sensor
{
public:
    void initSensor() override
    {
        // AS5600 最高支持1Mhz 1000000
        Wire.setClock(1000000); //  100000 (standard mode)  400000 (fast mode) 1000000 (fast mode plus)
        Wire.begin();
    }
    float readSensor() override
    {
        Wire.beginTransmission(AS5600_ADDR);
        Wire.write(AS5600_ANGLE);
        uint8_t error = Wire.endTransmission(false);
        if (!!error)
            return 0;
        Wire.requestFrom(AS5600_ADDR, 2);
        uint16_t data = 0;
        *((uint8_t *)&data + 1) = Wire.read();
        *((uint8_t *)&data + 0) = Wire.read();
        error = Wire.endTransmission(true);
        if (!!error)
            return 0;
        delay(1);
        // as5600 12bit精度，左移4位变成16位
        data <<= 4;                                // [0,0x0fff] -> [0,0xffff]
        return data / (float)UINT16_MAX * M_TWOPI; // [0,0xffff] -> [0,2PI]
    }
};
#endif
