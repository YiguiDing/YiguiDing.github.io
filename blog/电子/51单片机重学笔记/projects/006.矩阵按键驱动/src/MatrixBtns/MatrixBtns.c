
#include "MatrixBtns.h"
uint8_t KeyRowScanf()
{
    static uint8_t KeyRowUp = 1;
    MB_DATA                 = 0xf0; // 发送行扫描
    if (MB_DATA == 0xf0) {          // 说明没有按键被按下
        KeyRowUp = 1;
    } else if (KeyRowUp) /*保证下降沿触发*/ {
        delay_ms(5);           // 执行到这里必然是有按键被按下，先去除抖动
        if (~MB_DATA & 0xf0) { // 被按下的列为低电平，取反就能找到被按下的列
            KeyRowUp = 0;
            return ~MB_DATA & 0xf0;
            // 如果第一行被按下则返回结果为 0001 0000
            // 如果第二行被按下则返回结果为 0010 0000
            // 如果第一行和第二行被同时按下 0011 0000
        }
    }
    return 0;
}

uint8_t KeyColScanf()
{
    static uint8_t KeyColUp = 1;
    MB_DATA                 = 0x0f;
    if (MB_DATA == 0x0f) {
        KeyColUp = 1;
    } else if (KeyColUp) {
        delay_ms(5);
        if (~MB_DATA & 0x0f) {
            KeyColUp = 0;
            return ~MB_DATA & 0x0f;
            // 如果第一列被按下则返回结果为 0000 0001
            // 如果第二列被按下则返回结果为 0000 0010
            // 如果第一列和第二列被同时按下 0000 0011
        }
    }
    return 0;
}
// 获取按键代码
uint8_t MatrixKeyCodeScanf()
{
    uint8_t row = KeyRowScanf();
    uint8_t col = KeyColScanf();
    // 行和列都不为0
    if (row && col) return row | col;
    else return 0x00;
}
// 获取按下的字符
uint8_t MatrixCharScanf()
{
    uint8_t keyCode = MatrixKeyCodeScanf();
    switch (keyCode) {
        case 0x11 :return '1';
        case 0x12 :return '2';
        case 0x14 :return '3';
        case 0x18 :return '4';
        case 0x21 :return '5';
        case 0x22 :return '6';
        case 0x24 :return '7';
        case 0x28 :return '8';
        case 0x41 :return '9';
        case 0x42 :return '0';
        case 0x44 :return '+';
        case 0x48 :return '-';
        case 0x81 :return '*';
        case 0x82 :return '/';
        case 0x84 :return '=';
        case 0x88 :return '\x08';// ascii 退格
        default: return -1;
    }
}