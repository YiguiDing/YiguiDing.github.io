#include "OLED_Printf.h"

uint8_t row = 0;
uint8_t col = 0;

void OLED_putchar(char ch)
{
    if (row == 0 && col == 0)
    {
        OLED_Clear(); // 清屏
    }

    if (ch == '\r')
    {
        col = 0; // 回到第一列
    }
    else if (ch == '\n')
    {
        col = 0;  // 回到第一列
        row += 1; // 换行
    }
    else if (ch == '\t')
    {
        col += 4;                  // 一个制表符等于4个空格
        col = 4 * ceil(col / 4.0); // 上取整，保证对齐
    }
    else
    {
        // 普通字符
        OLED_ShowChar(row + 1, col + 1, ch);
        col += 1;           // 换列
        if (col == MAX_COL) // 列满
            row += 1;       // 换行
    }

    col %= MAX_COL;
    row %= MAX_ROW;
}

/*针对于arm编译器(microlib)，需要重写fputc实现对printf的重写*/
int fputc(int ch, FILE *dest)
{
    OLED_putchar(ch);
    return ch;
}
/*针对于gcc-arm编译器，需要重写_write实现对printf的重写*/
int _write(int fd, char *pBuffer, int size)
{
    int idx = 0;
    while (idx < size)
        OLED_putchar(pBuffer[idx++]); // 这里直接复用上面实现的fputc
    return size;
}