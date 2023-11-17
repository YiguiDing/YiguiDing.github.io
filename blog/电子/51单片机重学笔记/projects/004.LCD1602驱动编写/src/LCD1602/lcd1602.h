#ifndef __LCD_1602_H_
#define __LCD_1602_H_
#include "utils.h"

void LCD_Init();

void LCD_Clear();

void LCD_Cusor_Init();
void LCD_Cusor_GoToXY(int8_t _x, int8_t _y);
uint8_t LCD_CGRAM_ADD_GET();

void LCD_DDRAM_ADD_SET(uint8_t _addr);

void LCD_PutChar(uint8_t _char);
void LCD_PutString(uint8_t *_str);
void LCD_PutNumWithSign(int16_t _num);
void LCD_PutHexWith0x(uint16_t _hex);

void LCD_LoadCustomChar(uint8_t _idx_CGRAM, uint8_t _data[8]);
void LCD_ShowCustomChar(uint8_t _idx);

void LCD_Cusor_Show_UnderLine(uint8_t _show);
void LCD_Cusor_Flash(uint8_t _flash);

void LCD_Scroll_Cusor_Step(uint8_t _dir);
void LCD_Scroll_View_Step(uint8_t _dir);

void LCD_View_Auto_Scroll(uint8_t _scrollable);
void LCD_AC_Positive_Increase(uint8_t _increase);

void LCD_Test();
#endif