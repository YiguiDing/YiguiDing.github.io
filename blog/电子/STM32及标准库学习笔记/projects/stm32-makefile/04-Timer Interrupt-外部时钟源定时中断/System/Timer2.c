#include "stm32f10x.h"
#include "Timer2.h"
#include <stddef.h>

void (*callback)() = NULL;

/**
 * @brief 外部触发times次后执行传入的_callback函数
 * @arg _callback 回调函数
 * @arg times 计数次数 取值范围 [1,0xffff-1]
 */
void Timer2_setInterval(void (*_callback)(), uint16_t times)
{
    // 步骤
    // 1. 通过 RCC 开启相关外设时钟
    // 2. 为时基单元选择时钟源：内部时钟源、外部时钟模式、编码器模式
    // 3. 配置时基单元：预分频器、自动重装器、计数模式
    // 4. 配置输出中断控制: 允许输出中断到NVIC
    // 5. 配置NVIC: 打开定时中断通道、分配中断优先级
    // 6. 运行控制：使能计数器

    // 1开启Tim2外设时钟
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);

    // 2为TIM2时基单元选择外部时钟
    // 2.1 PA0默认复用功能是TIM2_CH1_ETR,这里要配置PA0
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
    GPIO_InitTypeDef GPIO_InitStruct = {GPIO_Pin_0, GPIO_Speed_50MHz, GPIO_Mode_IPU};
    GPIO_Init(GPIOA, &GPIO_InitStruct);
    // 2.2 配置外部时钟2
    TIM_ETRClockMode2Config(
        TIM2,                        // 配置TIM2
        TIM_ExtTRGPSC_OFF,           // 外部时钟分频
        TIM_ExtTRGPolarity_Inverted, // 下降沿触发
        0x00                         // 滤波器配置
    );

    // 3配置时基单元
    TIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct;
    TIM_TimeBaseInitStruct.TIM_ClockDivision = TIM_CKD_DIV1;     // 采样点数，外部时钟信号滤波器的一个参数，这里填一分频，也就是不分频，那么就会以（内部时钟频率/1）的频率对外部时钟信号进行采样，这里用不到，随便写
    TIM_TimeBaseInitStruct.TIM_CounterMode = TIM_CounterMode_Up; // 计数模式，向上计数
    TIM_TimeBaseInitStruct.TIM_Prescaler = 1 - 1;                // 预分频器
    TIM_TimeBaseInitStruct.TIM_Period = times - 1;               // 自动重装器
    TIM_TimeBaseInitStruct.TIM_RepetitionCounter = 0;            // 重复计数器，高级定时器才有
    TIM_TimeBaseInit(TIM2, &TIM_TimeBaseInitStruct);

    // 上面配置时基单元的函数为了让写入预分频器和自动重装器的值立即生效，
    // 手动触发了更新事件，这里要清除一下，否则中断函数也会立即执行一次
    TIM_ClearFlag(TIM2, TIM_FLAG_Update);

    // 4把TIM2的更新中断连接到NVIC
    TIM_ITConfig(TIM2, TIM_IT_Update, ENABLE);

    // 5配置NVIC优先级
    NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);
    NVIC_InitTypeDef NVIC_InitStruct;
    NVIC_InitStruct.NVIC_IRQChannel = TIM2_IRQn;           // 定时器2中断通道
    NVIC_InitStruct.NVIC_IRQChannelCmd = ENABLE;           // 启用
    NVIC_InitStruct.NVIC_IRQChannelPreemptionPriority = 0; // 抢占优先级
    NVIC_InitStruct.NVIC_IRQChannelSubPriority = 0;        // 响应优先级
    NVIC_Init(&NVIC_InitStruct);

    // 回调
    callback = _callback;
    // 6启动定时器
    TIM_Cmd(TIM2, ENABLE);
}
/**
 * 清除定时器
 */
void Timer2_ClearInterval()
{
    TIM_Cmd(TIM2, DISABLE);
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, DISABLE);
    callback = NULL;
}
/**
 * 重写中断函数
 */
void TIM2_IRQHandler()
{
    if (TIM_GetITStatus(TIM2, TIM_IT_Update) == SET)
    {
        if (callback)
            callback();
        // 清除更新中断Pending标志
        TIM_ClearITPendingBit(TIM2, TIM_IT_Update);
    }
}