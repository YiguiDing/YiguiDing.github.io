#ifndef _MPU_6050_H_
#define _MPU_6050_H_

#include "motion_driver_6.12/driver/eMPL/inv_mpu.h"                   // 操作MPU
#include "motion_driver_6.12/driver/eMPL/inv_mpu_dmp_motion_driver.h" // 操作DMP
#include "motion_driver_6.12/mllite/ml_math_func.h"                   // 数学计算

#include "OLED_Printf.h"
#include "math.h"

#define log OLED_Printf

#ifdef __cplusplus
extern "C"
{
#endif

    int MPU6050_DMP_Init();
    int MPU6050_DMP_Get_Data(float *pitch, float *roll, float *yaw);

#ifdef __cplusplus
}
#endif

#endif