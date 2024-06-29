#include "stm32f10x.h"
#include "OLED.h"
#include "Serial.h"

#define STACK_MAX 255

int main(void)
{
    OLED_Init();
    Serial_Init();

    Serial_SendString("Send Byte:\r\n");
    Serial_SendByte('A');
    Serial_SendByte('B');
    Serial_SendByte('C');
    Serial_SendByte('\r');
    Serial_SendByte('\n');

    Serial_SendString("Send String:\r\n");
    Serial_SendString("this is a string.\r\n");

    Serial_SendString("Send Array:\r\n");
    uint8_t arr[] = {'a', 'b', 'c'};
    Serial_SendArray(arr, 3);
    Serial_SendByte('\r');
    Serial_SendByte('\n');

    Serial_SendString("Send Number:\r\n");
    Serial_SendNumber(-123456);
    Serial_SendByte('\r');
    Serial_SendByte('\n');
    Serial_SendNumber(+123456);
    Serial_SendByte('\r');
    Serial_SendByte('\n');

    Serial_SendString("printf:\r\n");
    printf("this is printf output num=%d \r\n", 123);

    uint8_t idx = 0;
    while (1)
    {
        uint8_t ch;
        if (Serial_ReceiveByte(&ch))
        {
            OLED_ShowHexNum(1, 1 + idx * 3, ch, 2);
            idx++;
        }
    }
}
