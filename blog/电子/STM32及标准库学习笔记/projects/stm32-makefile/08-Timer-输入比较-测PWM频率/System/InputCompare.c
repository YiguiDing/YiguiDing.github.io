#include "InputCompare.h"

void Timer3_IC_Init()
{
    // 步骤
    // 1. 配置GPIO
    //    1. 通过RCC寄存器开启GPIO时钟
    //    2. 初始化GPIO：配置为输入模式、上拉或浮空输入
    // 2. 配置AFIO(如果需要重映射的话)
    // 3. 配置定时器
    //    1. 通过RCC寄存器开启TIM时钟
    //    2. 配置时基单元（时钟源、预分频器、计数器自增模式、自动重装器）
    //    3. 配置输入捕获单元（滤波器、边沿检测、通道直连或交叉、分频器）
    //    4. 配置实现自动清零计数器
    //       1. 配置从模式触发源（触发源为TI1FP1）
    //       2. 配置触发操作（触发Reset操作）
    // 4. 开启定时器
    // 5. 获取频率
    //    - N=CCR寄存器
    //    - f_c = CNT计数频率
    //    - Freq = f_c / N

    // #####################################################################
    // 1. 配置GPIO
    // 1.1 通过RCC寄存器开启GPIO时钟
    // 根据手册 Timer3的ch1输入比较通道连接在了 GPIO_A6 上
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
    //  1.2. 初始化GPIO：配置为输入模式、上拉或浮空输入
    GPIO_InitTypeDef GPIO_InitStruct = {
        GPIO_Pin_6,
        GPIO_Speed_50MHz,
        GPIO_Mode_IPU // 配置为上拉输入或浮空输入
    };
    GPIO_Init(GPIOA, &GPIO_InitStruct);

    // #####################################################################
    // 2. 配置AFIO
    // 端口重映射
    // RCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO, ENABLE);      // 开启AFIO时钟
    // GPIO_PinRemapConfig(GPIO_PartialRemap1_TIM3, ENABLE);     // 配置TIM3重映射，这样tim3_ch1就用重映射到PC6上

    // #####################################################################
    // 3. 配置定时器
    // 3.1 开启Tim2外设时钟
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM3, ENABLE);
    // 3.2 配置时基单元
    // 为TIM2时基单元选择内部
    TIM_InternalClockConfig(TIM3);
    // 72Mhz -> /72 = 1Mhz
    // 这里使用1Mhz作为标准频率
    TIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct;
    TIM_TimeBaseInitStruct.TIM_ClockDivision = TIM_CKD_DIV1;     // 采样点数，外部时钟信号滤波器的一个参数，这里填一分频，也就是不分频，那么就会以（内部时钟频率/1）的频率对外部时钟信号进行采样，这里用不到，随便写
    TIM_TimeBaseInitStruct.TIM_CounterMode = TIM_CounterMode_Up; // 计数模式，向上计数
    TIM_TimeBaseInitStruct.TIM_Prescaler = 72 - 1;               // 预分频器 PSC
    TIM_TimeBaseInitStruct.TIM_Period = 0xffff - 1;              // 自动重装器 ARR
    TIM_TimeBaseInitStruct.TIM_RepetitionCounter = 0;            // 重复计数器，高级定时器才有
    TIM_TimeBaseInit(TIM3, &TIM_TimeBaseInitStruct);
    // 3.3 初始化输出比较单元
    TIM_ICInitTypeDef TIM_ICInitStruct;
    TIM_ICStructInit(&TIM_ICInitStruct);
    TIM_ICInitStruct.TIM_Channel = TIM_Channel_1;                // 配置通道1
    TIM_ICInitStruct.TIM_ICFilter = 0xf;                         // 滤波级别 具体参考手册
    TIM_ICInitStruct.TIM_ICPolarity = TIM_ICPolarity_Rising;     // 上升沿触发
    TIM_ICInitStruct.TIM_ICSelection = TIM_ICSelection_DirectTI; // 选择直连到分频器
    TIM_ICInitStruct.TIM_ICPrescaler = TIM_ICPSC_DIV1;           // 1分频（即不分频）
    TIM_ICInit(TIM3, &TIM_ICInitStruct);
    // 3.4 配置实现自动清零计数器
    // 3.4.1. 配置从模式触发源（触发源为TI1FP1）
    TIM_SelectInputTrigger(TIM3, TIM_TS_TI1FP1);
    // 3.4.2. 配置触发操作（触发Reset操作）
    TIM_SelectSlaveMode(TIM3, TIM_SlaveMode_Reset);

    // #####################################################################
    // 4. 启动定时器
    TIM_Cmd(TIM3, ENABLE);
}
/**
 * 获取被测频率
 * @return 被测频率
 */
int Timer3_IC_GetFreq()
{
    // 标准频率F_c = 1Mhz
    // 标准频率的周期数 = 计数器的值N
    // 被测频率 = 1/周期 = 1/(标准频率的周期*标准频率的周期数) =1/(1/F_c * N) = F_c * N = 1M / N

    // Freq_max = 1 / 0xffffus
    return 1000000 / (TIM_GetCapture1(TIM3)+1);
}
