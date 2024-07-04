#include "stm32f10x.h"
#include "Delay.h"
#include "OLED.h"
#include "OLED_Printf.h"
#include "Soft_I2C.h"
#include "MPU6050.h"

int main(void)
{
    OLED_Init();
    MPU6050_Init();
    while (1)
    {
        MPU6050_Read();
        printf("ACC:\tGYR:\n");
        printf("x:%2.2f %2.2f\n", acce[0] / 32768.0 * 2, gyro[0] / 32768.0 * 250);
        printf("y:%2.2f %2.2f\n", acce[1] / 32768.0 * 2, gyro[1] / 32768.0 * 250);
        printf("z:%2.2f %2.2f\n", acce[2] / 32768.0 * 2, gyro[2] / 32768.0 * 250);
    }
}
