
#include "GPIO_EXTI.h"

void (*callback)() = NULL;
void GPIOB11_EXTI_Init(void (*_callback)())
{
    callback = _callback;
    /**
     * 配置GPIO
     */
    // 开启APB2_GPIO_C外设时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB, ENABLE);
    // 初始化GPIO_C13为上拉输入模式
    GPIO_InitTypeDef GPIO_InitStruct = {GPIO_Pin_11, GPIO_Speed_50MHz, GPIO_Mode_IPU};
    GPIO_Init(GPIOB, &GPIO_InitStruct);

    /**
     * 配置AFIO
     * AFIO用于配置引脚复用功能重映射 中断引脚
     */
    // 开启APB2_AFIO外设时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO, ENABLE);
    // 配置AFIO的数据选择器联通GPIO_C13到EXTI电路
    GPIO_EXTILineConfig(GPIO_PortSourceGPIOB, GPIO_PinSource11);

    /**
     * 配置EXTI
     */
    // EXTI外设时钟默认开启
    // 配置EXTI
    EXTI_InitTypeDef EXTI_InitStruct = {
        EXTI_Line11,          // 配置EXTI_Line13
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

/**
 * @ref 重写中断回调
 */
void EXTI15_10_IRQHandler()
{
    // 获取EXTI状态
    if (EXTI_GetITStatus(EXTI_Line11) == SET)
    {
        if (callback)
            callback();
        EXTI_ClearITPendingBit(EXTI_Line11);
    }
}