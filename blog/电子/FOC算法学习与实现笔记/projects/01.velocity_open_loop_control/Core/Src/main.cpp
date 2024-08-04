#include "stm32f10x.h"
#include "FOC.h"

int main()
{
  FOC_Init();
  FOC_SpeedOpenLoopControl(10 * 2 * M_PI);
  return 0;
}