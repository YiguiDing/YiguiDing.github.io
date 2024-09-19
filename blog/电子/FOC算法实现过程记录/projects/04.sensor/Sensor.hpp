#ifndef _Sensor_H_
#define _Sensor_H_

#include <stdint.h>
#include "arduino.h"

class BLDCMotor;

class Sensor
{

private:
    void (*_initSensor)();
    uint16_t (*_readSensor)();
    BLDCMotor *motor = nullptr;
    uint16_t positon = 0;
    uint8_t idx = 0;

public:
    uint16_t offset;
    Sensor::Sensor(void (*initSensor)(), uint16_t (*readSensor)());
    void connectMotor(BLDCMotor *motor);
    void initSensor();
    void alignSensor();
    void update();
    uint16_t getPositon();
};

#endif