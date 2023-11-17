#include "REG51.H"
#include "utils.h"
#include "lcd1602.h"
#include "MatrixBtns.h"

void main()
{
    LCD_Init();
    while (1) {
        uint8_t ch =  MatrixCharScanf();
        if(ch!=-1){
            LCD_Cusor_GoToXY(0,0);
            LCD_PutChar(ch);
        }
    }
}
