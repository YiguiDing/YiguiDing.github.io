#include "mpu6050.h"

#define COMPASS_ENABLED 0
/* Data read from MPL. */
#define PRINT_ACCEL (0x01)
#define PRINT_GYRO (0x02)
#define PRINT_QUAT (0x04)
#define PRINT_COMPASS (0x08)
#define PRINT_EULER (0x10)
#define PRINT_ROT_MAT (0x20)
#define PRINT_HEADING (0x40)
#define PRINT_PEDO (0x80)
#define PRINT_LINEAR_ACCEL (0x100)
#define PRINT_GRAVITY_VECTOR (0x200)

#define ACCEL_ON (0x01)
#define GYRO_ON (0x02)
#define COMPASS_ON (0x04)

#define MOTION (0)
#define NO_MOTION (1)

/* Starting sampling rate. */
#define DEFAULT_MPU_HZ (20)

#define FLASH_SIZE (512)
#define FLASH_MEM_START ((void *)0x1800)

#define PEDO_READ_MS (1000)
#define TEMP_READ_MS (500)
#define COMPASS_READ_MS (100)

/* Every time new gyro data is available, this function is called in an
 * ISR context.
 */
static void gyro_data_ready_cb(void)
{
}
/* Platform-specific information. Kinda like a boardfile. */
struct platform_data_s
{
    signed char orientation[9];
};
/* The sensors can be mounted onto the board in any orientation. The mounting
 * matrix seen below tells the MPL how to rotate the raw data from the
 * driver(s).
 * TODO: The following matrices refer to the configuration on internal test
 * boards at Invensense. If needed, please modify the matrices to match the
 * chip-to-body matrix for your particular set up.
 */
static int8_t orientation[8] = {1, 0, 0,
                                0, 1, 0,
                                0, 0, 1};
int run_self_test();
int MPU6050_DMP_Init()
{
    int result;
    unsigned char accel_fsr, new_temp = 0;
    unsigned short gyro_rate, gyro_fsr;
    unsigned long timestamp;
    struct int_param_s int_param;
    int_param.cb = gyro_data_ready_cb;
#if COMPASS_ENABLED
    unsigned char new_compass = 0;
    unsigned short compass_fsr;
#endif

    if (mpu_init(&int_param)) // mpu6050初始化
        return -1;

        /* Get/set hardware configuration. Start gyro. */
        /* Wake up all sensors. */
#if COMPASS_ENABLED
    if (mpu_set_sensors(INV_XYZ_GYRO | INV_XYZ_ACCEL | INV_XYZ_COMPASS)) // 设置所有传感器
        return -2;
#else
    if (mpu_set_sensors(INV_XYZ_GYRO | INV_XYZ_ACCEL)) // 设置传感器
        return -3;
#endif

    /* Push both gyro and accel data into the FIFO. */
    if (mpu_configure_fifo(INV_XYZ_GYRO | INV_XYZ_ACCEL)) // 配置fifo
        return -4;
    if (mpu_set_sample_rate(DEFAULT_MPU_HZ)) // 设置采样率
        return -5;
#if COMPASS_ENABLED
    /* The compass sampling rate can be less than the gyro/accel sampling rate.
     * Use this function for proper power management.
     */
    if (mpu_set_compass_sample_rate(1000 / COMPASS_READ_MS)) // 设置罗盘采样率
        return -6;
#endif

    /* Read back configuration in case it was set improperly. */
    if (mpu_get_sample_rate(&gyro_rate)) // 获取采样率
        return -7;
    if (mpu_get_gyro_fsr(&gyro_fsr)) // 获取满量程范围
        return -8;
    if (mpu_get_accel_fsr(&accel_fsr)) // 获取满量程范围
        return -9;
#if COMPASS_ENABLED
    if (mpu_get_compass_fsr(&compass_fsr)) // 获取满量程范围
        return -10;

#endif

    if (dmp_load_motion_driver_firmware()) // 加载DMP固件
    {
        log("Could not download DMP.\n");
        return -11;
    }
    if (dmp_set_orientation(inv_orientation_matrix_to_scalar(orientation))) // 设置陀螺仪方向
        return -12;
    /*
     * Known Bug -
     * DMP when enabled will sample sensor data at 200Hz and output to FIFO at the rate
     * specified in the dmp_set_fifo_rate API. The DMP will then sent an interrupt once
     * a sample has been put into the FIFO. Therefore if the dmp_set_fifo_rate is at 25Hz
     * there will be a 25Hz interrupt from the MPU device.
     *
     * There is a known issue in which if you do not enable DMP_FEATURE_TAP
     * then the interrupts will be at 200Hz even if fifo rate
     * is set at a different rate. To avoid this issue include the DMP_FEATURE_TAP
     *
     * DMP sensor fusion works only with gyro at +-2000dps and accel +-2G
     */
    if (dmp_enable_feature(DMP_FEATURE_6X_LP_QUAT | DMP_FEATURE_TAP |
                           DMP_FEATURE_ANDROID_ORIENT | DMP_FEATURE_SEND_RAW_ACCEL |
                           DMP_FEATURE_SEND_CAL_GYRO | DMP_FEATURE_GYRO_CAL)) // 设置DMP功能
        return -13;
    if (dmp_set_fifo_rate(DEFAULT_MPU_HZ)) // 设置输出速率
        return -14;
    if (run_self_test()) // 自检
        return -15;
    if (mpu_set_dmp_state(1)) // 使能DMP
        return -16;
}
// 2^30
#define Q30 (1073741824.0f)
/**
 *  @brief      run_self_test
 *  @return     0 if successful.
 */
int MPU6050_DMP_Get_Data(float *pitch, float *roll, float *yaw)
{
    short gyro[3];  // 重力加速度
    short accel[3]; // 角加速度
    long quat[4];   // Q30格式四元数
    float q[4];     // float格式四元数
    unsigned long timestamp;
    short sensors;
    unsigned char more;
    if (dmp_read_fifo(gyro, accel, quat, &timestamp, &sensors, &more))
        return -1;
    if (sensors & INV_WXYZ_QUAT)
    {
        q[0] = quat[0] / Q30;
        q[1] = quat[1] / Q30;
        q[2] = quat[2] / Q30;
        q[3] = quat[3] / Q30;

        // 四元数转欧拉角
        // 1rad = 57.3 degree
        *roll = atan2(2 * (q[0] * q[1] + q[2] * q[3]), 1 - 2 * (q[1] * q[1] + q[2] * q[2])) * 57.3;
        *pitch = asin(2 * q[0] * q[2] - 2 * q[1] * q[3]) * 57.3;
        *yaw = atan2(2 * (q[1] * q[2] + q[0] * q[3]), 1 - 2 * (q[2] * q[2] + q[3] * q[3])) * 57.3;
    }
    return 0;
}
/**
 *  @brief      run_self_test
 *  @return     0 if successful.
 */
int run_self_test()
{
    int result;
    long gyro[3], accel[3];

#if defined(MPU6500) || defined(MPU9250)
    result = mpu_run_6500_self_test(gyro, accel, 0);
#elif defined(MPU6050) || defined(MPU9150)
    result = mpu_run_self_test(gyro, accel);
#endif
    if (result == 0x07)
    {
        log("Passed!\n");
        log("accel: %7.4f %7.4f %7.4f\n",
            accel[0] / 65536.f,
            accel[1] / 65536.f,
            accel[2] / 65536.f);
        log("gyro: %7.4f %7.4f %7.4f\n",
            gyro[0] / 65536.f,
            gyro[1] / 65536.f,
            gyro[2] / 65536.f);
        /* Test passed. We can trust the gyro data here, so now we need to update calibrated data*/

#ifdef USE_CAL_HW_REGISTERS
        /*
         * This portion of the code uses the HW offset registers that are in the MPUxxxx devices
         * instead of pushing the cal data to the MPL software library
         */
        unsigned char i = 0;

        for (i = 0; i < 3; i++)
        {
            gyro[i] = (long)(gyro[i] * 32.8f); // convert to +-1000dps
            accel[i] *= 2048.f;                // convert to +-16G (bug fix from +-8G)
            accel[i] = accel[i] >> 16;
            gyro[i] = (long)(gyro[i] >> 16);
        }

        mpu_set_gyro_bias_reg(gyro);

#if defined(MPU6500) || defined(MPU9250)
        mpu_set_accel_bias_6500_reg(accel);
#elif defined(MPU6050) || defined(MPU9150)
        mpu_set_accel_bias_6050_reg(accel);
#endif
#else
        /* Push the calibrated data to the MPL library.
         *
         * MPL expects biases in hardware units << 16, but self test returns
         * biases in g's << 16.
         */
        unsigned short accel_sens;
        float gyro_sens;

        mpu_get_accel_sens(&accel_sens);
        accel[0] *= accel_sens;
        accel[1] *= accel_sens;
        accel[2] *= accel_sens;
        inv_set_accel_bias(accel, 3);
        mpu_get_gyro_sens(&gyro_sens);
        gyro[0] = (long)(gyro[0] * gyro_sens);
        gyro[1] = (long)(gyro[1] * gyro_sens);
        gyro[2] = (long)(gyro[2] * gyro_sens);
        inv_set_gyro_bias(gyro, 3);
#endif
    }
    else
    {
        if (!(result & 0x1))
            log("Gyro failed.\n");
        if (!(result & 0x2))
            log("Accel failed.\n");
        if (!(result & 0x4))
            log("Compass failed.\n");
        return -1;
    }
    return 0;
}
