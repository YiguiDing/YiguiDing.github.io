#ifndef __FOC_UTILS_H__
#define __FOC_UTILS_H__
#include <stdint.h>
#define _USE_MATH_DEFINES
#include <math.h>
#define M_PI    3.14159265358979323846
#define M_TWOPI         (M_PI * 2.0)
#ifdef __cplusplus
extern "C"
{
#endif
    /**
     * @param a float [0,2PI]
     * @return float [-1,1]
     */
    float _sin(float a);
    float _cos(float a);
    void _sincos(float a, float *s, float *c);
    float _atan2(float y, float x);
    float _constrain(float min, float value, float max);
    float _normalizeAngle(float a);
#ifdef __cplusplus
}
#endif

#endif
