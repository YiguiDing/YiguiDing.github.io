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
    // void initSensor() override
    // {
    //     // AS5600 最高支持1Mhz 1000000
    //     Wire.setClock(1000000); //  100000 (standard mode)  400000 (fast mode) 1000000 (fast mode plus)
    //     Wire.begin();
    // }
    // float readSensor() override
    // {
    //     Wire.beginTransmission(AS5600_ADDR);
    //     Wire.write(AS5600_ANGLE);
    //     uint8_t error = Wire.endTransmission(false);
    //     Wire.requestFrom(AS5600_ADDR, 2);
    //     uint16_t data = 0;
    //     *((uint8_t *)&data + 1) = Wire.read();
    //     *((uint8_t *)&data + 0) = Wire.read();
    //     // as5600 12bit精度，左移4位变成16位
    //     data <<= 4;                                // [0,0x0fff] -> [0,0xffff]
    //     return data / (float)UINT16_MAX * M_TWOPI; // [0,0xffff] -> [0,2PI]
    // }
    void initSensor() override
    {
        analogReadResolution(14);    // UNO R4 支持高达 14 位(0-16383)的分辨率
        analogReference(AR_DEFAULT); // 默认参考电压 5 V
        pinMode(A5, INPUT);
    }
    float readSensor() override
    {
        // 10bit min:0 max:1024
        // 14bit min:0 max:16384

        // t1: 14bit min:226 max:16383
        // t2: 14bit min:286 max:16368
        // t3: 14bit min:299 max:16369
        // t3: 14bit min:238 max:16383
        // t3: 14bit min:231 max:16353
        // t3: 14bit min:224 max:16363

        // [226,16383] => [0,16384] => [0,2PI]
        // return (analogRead(A5) - 224) * M_TWOPI / (16363 - 224);
        return (analogRead(A5) - 224.0f) / (16363.0f - 224) * M_TWOPI;
    }
    // void logMaxMin()
    // {
    //     static uint32_t _min = UINT32_MAX;
    //     static uint32_t _max = 0;
    //     uint32_t val = analogRead(A5);
    //     _min = min(_min, val);
    //     _max = max(_max, val);

    //     Serial.print(_min);
    //     Serial.print(',');
    //     Serial.print(val);
    //     Serial.print(',');
    //     Serial.print(_max);
    //     Serial.print('\n');
    // }
};
#endif
