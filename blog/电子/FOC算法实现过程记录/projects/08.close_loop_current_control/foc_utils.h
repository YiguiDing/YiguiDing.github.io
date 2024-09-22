#ifndef __FOC_UTILS_H__
#define __FOC_UTILS_H__
#include <stdint.h>
#include "typedef.h"

#ifdef __cplusplus
extern "C"
{
#endif
    /**
     * 定点数计算sin
     * @param a uint16_t [0,65535] 表示 [0,2PI] 精度：360°/65535 = 0.00549°
     * @return int16_t [-32768,32767] 表示 [-1,1] 精度：1/32768 = 0.0000305
     */
    int16_t _sin(uint16_t a);
    int16_t _cos(uint16_t a);
    void _sincos(uint16_t a, int16_t *s, int16_t *c);
    float _constrain(float min, float value, float max);
#ifdef __cplusplus
}
#endif

#endif
