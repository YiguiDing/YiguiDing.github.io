#include "stm32f10x.h"
#include "Delay.h"
#include "OLED.h"
#include "OLED_Printf.h"
#include "FlashUtils.h"
#include "FlashStore.h"

int main(void)
{
    OLED_Init();
    FlashStore_Init();
    store[1] = 0x1234;
    store[2]++;
    FlashStore_Save();
    while (1)
    {
    }
}
