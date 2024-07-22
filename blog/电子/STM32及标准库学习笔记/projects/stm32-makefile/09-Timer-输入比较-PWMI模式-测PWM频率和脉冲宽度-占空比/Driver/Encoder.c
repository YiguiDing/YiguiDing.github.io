#include "stm32f10x.h"
#include "Encoder.h"
#include "Delay.h"

void Encoder_Init()
{
    /**
     * 1配置GPIO
     */
    // 开启外设时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
    // 初始化为下拉输入模式
    GPIO_InitTypeDef GPIO_InitStruct = {GPIO_Pin_0 | GPIO_Pin_1, GPIO_Speed_50MHz, GPIO_Mode_IPD};
    GPIO_Init(GPIOB, &GPIO_InitStruct);

    /**
     * 2配置AFIO
     * AFIO用于配置引脚复用功能重映射 中断引脚
     */
    // 开启外设时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO, ENABLE);
    // 配置数据选择器
    GPIO_EXTILineConfig(GPIO_PortSourceGPIOA, GPIO_PinSource0);
    GPIO_EXTILineConfig(GPIO_PortSourceGPIOA, GPIO_PinSource1);

    /**
     * 3配置EXTI
     */
    // EXTI外设时钟默认开启
    // 初始化为上升沿触发
    EXTI_InitTypeDef EXTI_InitStruct0 = {EXTI_Line0, EXTI_Mode_Interrupt, EXTI_Trigger_Falling, ENABLE};
    EXTI_InitTypeDef EXTI_InitStruct1 = {EXTI_Line1, EXTI_Mode_Interrupt, EXTI_Trigger_Falling, ENABLE};
    EXTI_Init(&EXTI_InitStruct0);
    EXTI_Init(&EXTI_InitStruct1);

    /**
     * 4配置NVCI
     */
    // NVCI是内核外设，时钟默认开启
    // 通过NVIC寄存器配置优先级分组（先占优先级和从占优先级）
    NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);
    // 配置中断的优先级
    NVIC_InitTypeDef NVIC_InitStruct0 = {EXTI0_IRQn, 1, 1, ENABLE};
    NVIC_InitTypeDef NVIC_InitStruct1 = {EXTI1_IRQn, 1, 1, ENABLE};
    NVIC_Init(&NVIC_InitStruct0);
    NVIC_Init(&NVIC_InitStruct1);
}
int8_t Encoder_Counter = 0;

int8_t Encoder_GetCounter()
{
    return Encoder_Counter;
}

void EXTI0_IRQHandler()
{
    if (EXTI_GetITStatus(EXTI_Line0) == SET)
    {
        if (GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_1) == SET)
        {
            Encoder_Counter--;
        }
        EXTI_ClearITPendingBit(EXTI_Line0);
    }
}

void EXTI1_IRQHandler()
{
    if (EXTI_GetITStatus(EXTI_Line1) == SET)
    {
        if (GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_0) == SET)
        {
            Encoder_Counter++;
        }
        EXTI_ClearITPendingBit(EXTI_Line1);
    }
}