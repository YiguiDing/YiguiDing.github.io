#ifndef __FOC_MATH_H__
#define __FOC_MATH_H__

#include "math.h"
#include "stdint.h"

#ifdef __cplusplus
extern "C"
{
#endif

#define M_TWOPI (2 * M_PI)

    /**
     * 角度归一化 a => [0,2PI]
     */
    float _normalizeAngle(float a);

    /**
     * @param a float [0,2PI]
     * @return float [-1,1]
     */
    float _sin(float a);

    /**
     * @param a float [0,2PI]
     * @return float [-1,1]
     */
    float _cos(float a);
    /**
     * @param a float [0,2PI]
     * @return s,c float [-1,1]
     */
    void _sincos(float a, float *s, float *c);

    float _constrain(float min, float value, float max);

    float _atan2(float y, float x);

#ifdef __cplusplus
}
#endif

#endif