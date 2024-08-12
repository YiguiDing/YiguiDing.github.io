#include "AS5600.h"

float angle, prev_angle, cur_angle, error;
void AS5600_Init()
{
    angle = prev_angle = cur_angle = AS5600_RawAngle();
}
void AS5600_SetError(float _error)
{
    error = _error;
}
/**
 * 获取位置[0,2π]
 */
float AS5600_RawAngle()
{
    uint8_t data[2];
    read(AS5600_ANGLE, data, 2);
    return (data[0] << 8 | data[1]) / 4096.0 * 2 * M_PI;
}

float minus(float degA, float degB);
float AS5600_Angle()
{
    cur_angle = AS5600_RawAngle();
    angle += minus(cur_angle, prev_angle);
    prev_angle = cur_angle;
    return angle + error;
}

/**
 * @details 返回 `degA - degB` 的角度
 * @param degA [0,2π]
 * @param degB [0,2π]
 */
float minus(float degA, float degB)
{
    // 角度A在第一象限,角度B在第四象限,把角度B减去2π,使其成为一个用负数表示的角度。
    // 角度B在第一象限,角度A在第四象限,把角度A减去2π,使其成为一个用负数表示的角度。
    (degA < 0.5 * M_PI) && (degB > 1.5 * M_PI) && (degB -= 2 * M_PI);
    (degB < 0.5 * M_PI) && (degA > 1.5 * M_PI) && (degA -= 2 * M_PI);
    return degA - degB;
}