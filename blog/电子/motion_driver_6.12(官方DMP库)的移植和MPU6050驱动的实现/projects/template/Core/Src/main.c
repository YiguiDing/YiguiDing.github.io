
#include "stm32f10x.h"
#include "Delay.h"
#include "OLED.h"
#include "OLED_Printf.h"
#include "RTC_Time.h"
#include "Soft_I2C.h"
#include "Delay.h"
#include "mpu6050.h"

int main()
{
  OLED_Init();
  RTC_Time_Init();
  Soft_I2C_Init();
  if (MPU6050_DMP_Init())
    OLED_Printf("MPU6050_DMP_Init error\n");
  else
    OLED_Printf("MPU6050_DMP_Init success\n");

  float pitch;
  float roll;
  float yaw;

  while (1)
  {
    MPU6050_DMP_Get_Data(&pitch, &roll, &yaw);
    OLED_Printf("%.2f %.2f %.2f \n", pitch, roll, yaw);
  }
  return 0;
}