
#ifndef _MatrixBtns_H_
#define _MatrixBtns_H_
#include "REG51.H"
#include "utils.h"
// 端口定义 1~4bit连接列，5~8bit连接行
//     1 2 3 4
// 5 | x x x x |
// 6 | x x x x |
// 7 | x x x x |
// 8 | x x x x |
#define MB_DATA P3
uint8_t MatrixKeyCodeScanf(); // 获取按键代码
uint8_t MatrixCharScanf();    // 获取按下的字符
#endif