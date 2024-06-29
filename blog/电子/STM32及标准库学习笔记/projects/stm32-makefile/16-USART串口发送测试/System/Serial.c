#include "Serial.h"
void Serial_Init()
{
    /*开启时钟*/
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_USART1, ENABLE); // 开启USART1的时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);  // 开启GPIOA的时钟

    /*GPIO发送脚配置*/
    GPIO_InitTypeDef GPIO_InitStruct = {
        GPIO_Pin_9,
        GPIO_Speed_50MHz, // 速率
        GPIO_Mode_AF_PP   // 复用推挽输出
    };
    GPIO_Init(GPIOA, &GPIO_InitStruct);

    /*GPIO接收脚配置*/
    GPIO_InitStruct.GPIO_Pin = GPIO_Pin_10;
    GPIO_InitStruct.GPIO_Speed = GPIO_Speed_50MHz; // 速率
    GPIO_InitStruct.GPIO_Mode = GPIO_Mode_IPU;     // 上拉输入
    GPIO_Init(GPIOA, &GPIO_InitStruct);

    /*USART配置*/
    USART_InitTypeDef USART_InitStruct = {
        9600,                           // USART_BaudRate 波特率：9600
        USART_WordLength_8b,            // USART_WordLength 字长：8比特
        USART_StopBits_1,               // USART_StopBits 停止位长度：1
        USART_Parity_No,                // USART_Parity, 校验位：不校验
        USART_Mode_Rx | USART_Mode_Tx,  // USART_Mode 模式：收发
        USART_HardwareFlowControl_None, // USART_HardwareFlowControl 硬件流控制：无
    };
    USART_Init(USART1, &USART_InitStruct);

    /*启动USART*/
    USART_Cmd(USART1, ENABLE);
}
void Serial_SendByte(uint8_t Byte)
{
    // 写入TDR,发送数据
    USART_SendData(USART1, Byte);
    // 检查TDR是否为空，为空说明数据已经转运到了移位发送寄存器。
    while (USART_GetFlagStatus(USART1, USART_FLAG_TXE) != SET)
        ;
    // 该标志位不需要手动置0，在下一次写入数据的时候自动置0
}
uint8_t Serial_ReceiveByte(uint8_t *Byte)
{
    // 收到数据返回真
    if (USART_GetFlagStatus(USART1, USART_FLAG_RXNE))
    {
        *Byte = USART_ReceiveData(USART1); // 读取数据后，接收数据寄存器非空标志位会自动清零
        return 1;
    }
    else
    {
        *Byte = 0x00;
        return 0;
    }
}

void Serial_SendArray(uint8_t *arry, uint32_t length)
{
    uint8_t idx = 0;
    while (idx < length)
        Serial_SendByte(arry[idx++]);
}

void Serial_SendString(const char *str)
{
    while (*str)
        Serial_SendByte(*str++);
}

void Serial_SendNumber(int32_t num)
{
    if (num < 0)
    {
        Serial_SendByte('-');
        Serial_SendNumber(-num);
    }
    else if (num <= 9)
    {
        Serial_SendByte('0' + num);
    }
    else
    {
        Serial_SendNumber(num / 10);
        Serial_SendNumber(num % 10);
    }
}
/*针对于arm编译器(microlib)，需要重写fputc实现对printf的重写*/
int fputc(int ch, FILE *dest)
{
    Serial_SendByte(ch);
    return ch;
}

/*针对于gcc-arm编译器，需要重写_write实现对printf的重写*/
int _write(int fd, char *pBuffer, int size)
{
    for (int i = 0; i < size; i++)
    {
        Serial_SendByte(pBuffer[i]);
    }
    return size;
}

#include <stdarg.h>
void Serial_Printf(const uint8_t *format, ...)
{
    // 这种写法感觉不完美
    char str[256];
    va_list args;
    va_start(args, format);
    vfprintf(str, format, args);
    va_end(args);
    Serial_SendString(str);
}
