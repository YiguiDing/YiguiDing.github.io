#include "foc_utils.h"

/**
 * 角度归一化 a => [0,2PI]
 */
float _normalizeAngle(float a)
{
    a = fmodf(a, 2 * M_PI);
    if (a < 0)
        a += 2 * M_PI;
    return a;
}

/**
 * @param a float [0,2PI]
 * @return float [-1,1]
 */
// __attribute__((weak)) float _sin(float a)
// {
//     // sine_array [0,1] => [0,32767] 这里要用32767表示1，而不是32768；因为int16_t可以表示-32768，但是无法表示+32768
//     static uint16_t sine_array[65] = {
//         //  for(float a=0;a<=1;a+=M_PI/65) sin(a);
//         0, 804, 1608, 2410, 3212, 4011, 4808, 5602,
//         6393, 7179, 7962, 8739, 9512, 10278, 11039, 11793,
//         12539, 13279, 14010, 14732, 15446, 16151, 16846, 17530,
//         18204, 18868, 19519, 20159, 20787, 21403, 22005, 22594,
//         23170, 23731, 24279, 24811, 25329, 25832, 26319, 26790,
//         27245, 27683, 28105, 28510, 28898, 29268, 29621, 29956,
//         30273, 30571, 30852, 31113, 31356, 31580, 31785, 31971,
//         32137, 32285, 32412, 32521, 32609, 32678, 32728, 32757, 32767 //
//     };
//     int32_t t1, t2;
//     uint16_t idx = a / M_TWOPI * 0xffff; // a:[0,2PI] => [0,0xffff]
//     uint16_t frac = idx & 0xff;
//     idx = (idx >> 8) & 0xff;
//     if (idx < 64)
//     {
//         t1 = sine_array[idx];
//         t2 = sine_array[idx + 1];
//     }
//     else if (idx < 128)
//     {
//         t1 = sine_array[128 - idx];
//         t2 = sine_array[128 - (idx + 1)];
//     }
//     else if (idx < 192)
//     {
//         // 因为-((uint16_t)0)会计算错误 所以要写成-((int32_t)(uint16_t)0)
//         t1 = -(int32_t)sine_array[-128 + idx];
//         t2 = -(int32_t)sine_array[-128 + (idx + 1)];
//     }
//     else
//     {
//         t1 = -(int32_t)sine_array[256 - idx];
//         t2 = -(int32_t)sine_array[256 - (idx + 1)];
//     }
//     return (t1 + (((t2 - t1) * frac / 256.0f))) / 32768.0f;
// }
__attribute__((weak)) float _sin(float a){
  // 16bit integer array for sine lookup. interpolation is used for better precision
  // 16 bit precision on sine value, 8 bit fractional value for interpolation, 6bit LUT size
  // resulting precision compared to stdlib sine is 0.00006480 (RMS difference in range -PI,PI for 3217 steps)
  static uint16_t sine_array[65] = {0,804,1608,2411,3212,4011,4808,5602,6393,7180,7962,8740,9512,10279,11039,11793,12540,13279,14010,14733,15447,16151,16846,17531,18205,18868,19520,20160,20788,21403,22006,22595,23170,23732,24279,24812,25330,25833,26320,26791,27246,27684,28106,28511,28899,29269,29622,29957,30274,30572,30853,31114,31357,31581,31786,31972,32138,32286,32413,32522,32610,32679,32729,32758,32768};
  int32_t t1, t2;
  unsigned int i = (unsigned int)(a * (64*4*256.0f/M_TWOPI));
  int frac = i & 0xff;
  i = (i >> 8) & 0xff;
  if (i < 64) {
    t1 = (int32_t)sine_array[i]; t2 = (int32_t)sine_array[i+1];
  }
  else if(i < 128) {
    t1 = (int32_t)sine_array[128 - i]; t2 = (int32_t)sine_array[127 - i];
  }
  else if(i < 192) {
    t1 = -(int32_t)sine_array[-128 + i]; t2 = -(int32_t)sine_array[-127 + i];
  }
  else {
    t1 = -(int32_t)sine_array[256 - i]; t2 = -(int32_t)sine_array[255 - i];
  }
  return (1.0f/32768.0f) * (t1 + (((t2 - t1) * frac) >> 8));
}
/**
 * @param a float [0,2PI]
 * @return float [-1,1]
 */
__attribute__((weak)) float _cos(float a)
{
    // _cos和sin相位差90°，所以加上PI/2
    return _sin(_normalizeAngle(a + M_PI_2));
}

/**
 * @param a float [0,2PI]
 * @return s,c float [-1,1]
 */
__attribute__((weak)) void _sincos(float a, float *s, float *c)
{
    *s = _sin(a);
    *c = _cos(a);
}

__attribute__((weak)) float _constrain(float min, float value, float max)
{
    return (value < min ? min : (value > max ? max : value));
}
// fast_atan2 based on https://math.stackexchange.com/a/1105038/81278
// Via Odrive project
// https://github.com/odriverobotics/ODrive/blob/master/Firmware/MotorControl/utils.cpp
// This function is MIT licenced, copyright Oskar Weigl/Odrive Robotics
// The origin for Odrive atan2 is public domain. Thanks to Odrive for making
// it easy to borrow.
__attribute__((weak)) float _atan2(float y, float x)
{
    // a := min (|x|, |y|) / max (|x|, |y|)
    float abs_y = fabsf(y);
    float abs_x = fabsf(x);
    // inject FLT_MIN in denominator to avoid division by zero
    float a = min(abs_x, abs_y) / (max(abs_x, abs_y));
    // s := a * a
    float s = a * a;
    // r := ((-0.0464964749 * s + 0.15931422) * s - 0.327622764) * s * a + a
    float r =
        ((-0.0464964749f * s + 0.15931422f) * s - 0.327622764f) * s * a + a;
    // if |y| > |x| then r := 1.57079637 - r
    if (abs_y > abs_x)
        r = 1.57079637f - r;
    // if x < 0 then r := 3.14159274 - r
    if (x < 0.0f)
        r = 3.14159274f - r;
    // if y < 0 then r := -r
    if (y < 0.0f)
        r = -r;
    return r;
}
