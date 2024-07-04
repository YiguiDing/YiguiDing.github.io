#include "stm32f10x.h"
#include "stdint.h"
#include "CountSensor.h"

/**
 * @ref 初始化光电计数器
 */
void CountSensor_Init()
{
    /**
     * 配置GPIO
     */
    // 开启APB2_GPIO_C外设时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOC, ENABLE);
    // 初始化GPIO_C13为上拉输入模式
    GPIO_InitTypeDef GPIO_InitStruct = {GPIO_Pin_13, GPIO_Speed_50MHz, GPIO_Mode_IPU};
    GPIO_Init(GPIOC, &GPIO_InitStruct);

    /**
     * 配置AFIO
     * AFIO用于配置引脚复用功能重映射 中断引脚
     */
    // 开启APB2_AFIO外设时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO, ENABLE);
    // 配置AFIO的数据选择器联通GPIO_C13到EXTI电路
    GPIO_EXTILineConfig(GPIO_PortSourceGPIOC, GPIO_PinSource13);

    /**
     * 配置EXTI
     */
    // EXTI外设时钟默认开启
    // 配置EXTI
    EXTI_InitTypeDef EXTI_InitStruct = {
        EXTI_Line13,          // 配置EXTI_Line13
        EXTI_Mode_Interrupt,  // 中断模式
        EXTI_Trigger_Falling, // 下降沿触发
        ENABLE,               // 启用
    };
    EXTI_Init(&EXTI_InitStruct);

    /**
     * 配置NVCI
     */
    // NVCI是内核外设，时钟默认开启
    // 通过NVIC寄存器配置优先级分组（先占优先级和从占优先级）
    NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);
    // 配置EXTI15_10_IRQn中断的优先级
    NVIC_InitTypeDef NVIC_InitStruct = {
        EXTI15_10_IRQn,
        0, // 先占优先级
        0, // 从占优先级
        ENABLE,
    };
    NVIC_Init(&NVIC_InitStruct);
}

uint16_t counter = 0;
uint16_t CountSensor_GetCounter()
{
    return counter;
}
/**
 * @ref 重写中断回调
 */
void EXTI15_10_IRQHandler()
{
    // 获取EXTI状态
    if (EXTI_GetITStatus(EXTI_Line13) == SET)
    {
        counter++;
        EXTI_ClearITPendingBit(EXTI_Line13);
    }
}