#include "stm32f10x.h"
#include "Timer4.h"
#include <stddef.h>

void Timer4_Clock_Init()
{
    // 步骤
    // 1. 通过 RCC 开启相关外设时钟
    // 2. 为时基单元选择时钟源：内部时钟源、外部时钟模式、编码器模式
    // 3. 配置时基单元：预分频器、自动重装器、计数模式
    // 4. 配置输出中断控制: 允许输出中断到NVIC
    // 5. 配置NVIC: 打开定时中断通道、分配中断优先级
    // 6. 运行控制：使能计数器

    // 1开启TIM4外设时钟
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM4, ENABLE);

    // 2为TIM4时基单元选择内部时钟（可不写，默认使用内部时钟）
    TIM_InternalClockConfig(TIM4);

    // 3配置时基单元
    // 溢出频率
    //      72Mhz / 72 = 1kkhz -> 1us
    //      1kkhz / 1000 = 1khz -> 1ms
    TIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct;
    TIM_TimeBaseInitStruct.TIM_ClockDivision = TIM_CKD_DIV1;     // 采样点数，外部时钟信号滤波器的一个参数，这里填一分频，也就是不分频，那么就会以（内部时钟频率/1）的频率对外部时钟信号进行采样，这里用不到，随便写
    TIM_TimeBaseInitStruct.TIM_CounterMode = TIM_CounterMode_Up; // 计数模式，向上计数
    TIM_TimeBaseInitStruct.TIM_Prescaler = 72 - 1;               // 预分频器
    TIM_TimeBaseInitStruct.TIM_Period = 1000 - 1;                // 自动重装器
    TIM_TimeBaseInitStruct.TIM_RepetitionCounter = 0;            // 重复计数器，高级定时器才有
    TIM_TimeBaseInit(TIM4, &TIM_TimeBaseInitStruct);

    // 上面配置时基单元的函数为了让写入预分频器和自动重装器的值立即生效，
    // 手动触发了更新事件，这里要清除一下，否则中断函数也会立即执行一次
    TIM_ClearFlag(TIM4, TIM_FLAG_Update);

    // 4把TIM4的更新中断连接到NVIC
    TIM_ITConfig(TIM4, TIM_IT_Update, ENABLE);

    // 5配置NVIC优先级
    NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);
    NVIC_InitTypeDef NVIC_InitStruct;
    NVIC_InitStruct.NVIC_IRQChannel = TIM4_IRQn;           // 定时器2中断通道
    NVIC_InitStruct.NVIC_IRQChannelCmd = ENABLE;           // 启用
    NVIC_InitStruct.NVIC_IRQChannelPreemptionPriority = 0; // 抢占优先级
    NVIC_InitStruct.NVIC_IRQChannelSubPriority = 0;        // 响应优先级
    NVIC_Init(&NVIC_InitStruct);

    // 6启动定时器
    TIM_Cmd(TIM4, ENABLE);
}

uint64_t clock_ms = 0;
/**
 * 重写中断函数
 */
void TIM4_IRQHandler()
{
    if (TIM_GetITStatus(TIM4, TIM_IT_Update) == SET)
    {
        clock_ms++;
        TIM_ClearITPendingBit(TIM4, TIM_IT_Update);
    }
}

uint64_t Timer4_Clock_GetClockMs()
{
    return clock_ms;
}