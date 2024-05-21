#include "stm32f10x.h"
#include "OLED.h"
#include <math.h>
#include "FOC.h"

int main(void)
{
    FOC_Init();
    FOC_openSpeedLoop();
}
