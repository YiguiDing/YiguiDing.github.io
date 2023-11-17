#ifndef _UTILS_
#define _UTILS_

typedef unsigned char uint8_t;
typedef unsigned int uint16_t;
typedef unsigned long uint32_t;

typedef signed char int8_t;
typedef signed int int16_t;
typedef signed long int32_t;

#define EXT0_VECTOR  0 /* 0x03 external interrupt 0 */
#define TIM0_VECTOR  1 /* 0x0b timer 0 */
#define EXT1_VECTOR  2 /* 0x13 external interrupt 1 */
#define TIM1_VECTOR  3 /* 0x1b timer 1 */
#define UART0_VECTOR 4 /* 0x23 serial port 0 */

// 共阴极七段数码管0~9数字段选信号
uint8_t SEG7_CODE_CC[] = {0x3f, 0x06, 0x5b, 0x4f, 0x66, 0x6d, 0x7d, 0x07, 0x7f, 0x6f}; 
void delay(unsigned int);

#endif