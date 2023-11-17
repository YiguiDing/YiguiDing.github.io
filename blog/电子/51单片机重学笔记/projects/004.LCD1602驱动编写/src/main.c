#include "REG51.H"
#include "utils.h"
#include "lcd1602.h"

code uint8_t ding[] = {0x00, 0x3F, 0x04, 0x04, 0x04, 0x04, 0x0C, 0x00};
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
    LCD_PutString("   ----By ");
    LCD_ShowCustomChar(1);

    LCD_Scroll_View_Step('L');
    while (1) {
        i = 1;
        while (i--) {
            LCD_Scroll_View_Step('R');
            delay_ms(500);
        }
        i = 1;
        while (i--) {
            LCD_Scroll_View_Step('L');
            delay_ms(500);
        }
    }
}
