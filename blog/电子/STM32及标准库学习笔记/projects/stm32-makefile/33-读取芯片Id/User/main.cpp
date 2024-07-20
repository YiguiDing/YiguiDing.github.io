#include "stm32f10x.h"
#include "Delay.h"
#include "OLED.h"
#include "OLED_Printf.h"

#define F_SIZE_BASE 0x1ffff7e0
#define F_SIZE *((__I uint16_t *)F_SIZE_BASE)

#define F_ID_BASE 0x1ffff7e8
#define F_ID_1 *((__I uint32_t *)F_ID_BASE + 4 * 0)
#define F_ID_2 *((__I uint32_t *)F_ID_BASE + 4 * 1)
#define F_ID_3 *((__I uint32_t *)F_ID_BASE + 4 * 2)

int main(void)
{
    OLED_Init();
    // 芯片容量
    OLED_Printf("%X \n", F_SIZE); // 0x40 => 64KB
    // 芯片id
    OLED_Printf("%X \n", F_ID_1);
    OLED_Printf("%X \n", F_ID_2);
    OLED_Printf("%X \n", F_ID_3);

    while (1)
    {
    }
}
