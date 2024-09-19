#include "Sensor.hpp"
#include "BLDCMotor.hpp"

Sensor::Sensor(void (*_initSensorl)(), uint16_t (*_readSensor)())
{
    this->_initSensor = _initSensorl;
    this->_readSensor = _readSensor;
}
void Sensor::initSensor()
{
    this->_initSensor();
}
void Sensor::connectMotor(BLDCMotor *motor)
{
    this->motor = motor;
}
void Sensor::alignSensor()
{
    this->motor->setPhraseVoltage(0, 0.2 * INT16_MAX, _3_PI_2_);
    delay(1000);
    this->offset = this->_readSensor();
    this->motor->setPhraseVoltage(0, 0, 0);
}
void Sensor::update()
{
    if (idx == 0)
        this->positon = this->_readSensor();
    idx++;
    idx %= 10;
}

uint16_t Sensor::getPositon()
{
    return (this->positon - offset);
}
