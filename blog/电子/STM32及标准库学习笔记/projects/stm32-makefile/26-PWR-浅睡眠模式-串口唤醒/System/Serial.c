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

    /*配置NVIC，把接收到数据的信号通向NVIC*/
    USART_ITConfig(USART1, USART_IT_RXNE, ENABLE);
    /*配置NVIC优先级分组方式*/
    NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);
    /*配置NVIC启用USART1中断通道*/
    NVIC_InitTypeDef NVIC_InitStruct = {
        USART1_IRQn, // 通道
        1, 1,        // 优先级
        ENABLE       // 启用
    };
    NVIC_Init(&NVIC_InitStruct);
    /*启动USART*/
    USART_Cmd(USART1, ENABLE);
}

/** 处理接收数据的函数*/
void (*dataHandler)(uint8_t data) = NULL;
void Serial_SetDataHandler(void (*_dataHandler)(uint8_t data))
{
    dataHandler = _dataHandler;
}
/**重写中断处理函数，读取接收到的数据，传递给数据处理函数*/
void USART1_IRQHandler()
{
    if (dataHandler)
        dataHandler(USART_ReceiveData(USART1));
}