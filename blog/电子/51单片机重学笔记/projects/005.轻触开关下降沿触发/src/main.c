#include "REG51.H"
#include "utils.h"
#include "lcd1602.h"

code uint8_t ding[] = {0x00, 0x3F, 0x04, 0x04, 0x04, 0x04, 0x0C, 0x00};

sbit k1 = P2 ^ 3;
sbit k2 = P2 ^ 4;
sbit k3 = P2 ^ 5;
sbit k4 = P2 ^ 6;
sbit k5 = P2 ^ 7;

uint8_t AllKeyUp = true;
uint8_t keyScanf()
{
    k1 = k2 = k3 = k4 = true;   // 向所有端口发送高电平
    if (k1 && k2 && k3 && k4) { // 按键全部抬起
        AllKeyUp = true;
        return 0;
    } else if (AllKeyUp /*保证下降沿触发*/ && (!k1 || !k2 || !k3 || !k4) /*任一按键按下*/) {
        delay_ms(10); // 防抖动
        if (!k1 || !k2 || !k3 || !k4) {
            AllKeyUp = false; // 标记为有按键按下
            if (!k1) return 1;
            if (!k2) return 2;
            if (!k3) return 3;
            if (!k4) return 4;
        }
    }
    return 0;
}
void LCD_BackSpace()
{
    LCD_Scroll_Cusor_Step('L');
    LCD_PutChar(' ');
    LCD_Scroll_Cusor_Step('L');
}
void main()
{
    uint8_t i;
    LCD_Init();
    LCD_LoadCustomChar(1, ding);
    LCD_Clear();
    LCD_Cusor_Init();
    LCD_PutString(" Hello LCD1602!! ");
    LCD_Cusor_GoToXY(0, 1);
    LCD_PutChar(' ');
    LCD_PutHexWith0x(0x80);
    LCD_PutString(" --By ");
    LCD_ShowCustomChar(1);

    while (1) {
        uint8_t res = keyScanf();
        if (res == 1) LCD_Cusor_Flash(true);
        if (res == 2) LCD_Cusor_Show_UnderLine(true);
        if (res == 3) LCD_BackSpace();
        if (res == 4) LCD_PutNumWithSign(i++);
    }
}
