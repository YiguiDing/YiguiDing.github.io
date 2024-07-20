#ifndef __OLED_PRINTF_H_
#define __OLED_PRINTF_H_

#include "OLED.h"
#include "stdio.h"
#include "math.h"

#ifdef __cplusplus
extern "C"
{
#endif

#define MAX_ROW 4
#define MAX_COL 16

    void OLED_putchar(char ch);
#define OLED_Printf printf

#ifdef __cplusplus
}
#endif

#endif
