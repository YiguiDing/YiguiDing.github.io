#include "stm32f10x.h"
#include "FOC.h"
#include "OLED.h"
#include "AS5600.h"
#include "Soft_I2C.h"

int main()
{
  OLED_Init();
  FOC_Init();
  FOC_PositionCloseLoopControl(0.25*M_PI);
  return 0;
}