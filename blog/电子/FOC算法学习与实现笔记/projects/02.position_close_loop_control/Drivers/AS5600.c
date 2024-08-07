#include "AS5600.h"

void AS5600_Init()
{
}

float AS5600_Angle()
{
    uint8_t data[2];
    read(AS5600_ANGLE, data, 2);
    return (data[0] << 8 | data[1]) / 4096.0 * 360.0;
}

float AS5600_Cycle()
{
    uint8_t data[2];
    read(AS5600_RAW_ANGLE, data, 2);
    return (data[0] << 8 | data[1]) / 4096.0;
}