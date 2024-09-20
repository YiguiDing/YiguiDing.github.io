#include "CurrentSensor.hpp"

CurrentSensor::CurrentSensor(void (*_initSensor)(), Current_RAW (*_readSensor)())
{
    this->_initSensor = _initSensor;
    this->_readSensor = _readSensor;
}
void CurrentSensor::initSensor()
{
    this->_initSensor();
}
void CurrentSensor::alignSensor()
{
    Current_RAW average, current = this->_readSensor();
    average = current; // n=1
    for (uint16_t n = 2; n <= 1000; n++)
    {
        current = this->_readSensor();
        average.i_a = current.i_a / n + average.i_a / (n - 1);
        average.i_b = current.i_b / n + average.i_b / (n - 1);
        average.i_c = current.i_c / n + average.i_c / (n - 1);
    }
    this->offset = average;
}
Current CurrentSensor::readSensor(uint16_t theta)
{
    Current_RAW current = this->_readSensor();
    // align
    current.i_a -= offset.i_a;
    current.i_b -= offset.i_b;
    current.i_c -= offset.i_c;
    // clarke transformation
    int16_t i_alpha = current.i_a + current.i_a + current.i_a;
    int16_t i_beta = current.i_a + current.i_a + current.i_a;
    return {0, 0};
}