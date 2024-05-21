#include "Timer3.h"

void Timer3_EncoderInterface_Init()
{
    // **步骤**
    // - 配置GPIO
    //   - 通过RCC寄存器开启GPIO外设时钟
    //   - 配置IO口为输入模式，上拉 下拉 或 浮空
    // - 配置TIM定时器
    //   - 通过RCC寄存器开启TIM定时器外设时钟
    //   - 配置时基单元
    //     - 预分频器可以不分频
    //     - 自动重装器可以配置为0xffff
    //   - 配置输入捕获单元
    //     - 配置滤波器
    //     - 配置边沿检测(极性选择器)，
    //     - 配置编码器接口模式
    // - 启动定时器

    // #####################################################################
    // 1. 配置GPIO
    // 1.1 通过RCC寄存器开启GPIO时钟
    // 根据手册 Timer3的ch1\ch2输入比较通道连接在了 GPIO_A6\A7 上
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
    //  1.2. 初始化GPIO：配置为输入模式
    GPIO_InitTypeDef GPIO_InitStruct = {
        GPIO_Pin_6 | GPIO_Pin_7,
        GPIO_Speed_50MHz,
        GPIO_Mode_IPU // 配置为上拉输入
    };
    GPIO_Init(GPIOA, &GPIO_InitStruct);

    // #####################################################################
    // 2. 配置AFIO
    // 端口重映射
    // RCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO, ENABLE);      // 开启AFIO时钟
    // GPIO_PinRemapConfig(GPIO_PartialRemap1_TIM3, ENABLE);     // 配置TIM3重映射，这样tim3_ch1就用重映射到PC6上

    // #####################################################################
    // 3. 配置定时器
    // 3.1 开启Tim3外设时钟
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM3, ENABLE);
    // 3.2 配置时基单元
    // 72Mhz -> /72 = 1Mhz
    TIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct;
    TIM_TimeBaseStructInit(&TIM_TimeBaseInitStruct);
    TIM_TimeBaseInitStruct.TIM_Prescaler = 4 - 1; // 预分频器 PSC 不分频
    TIM_TimeBaseInitStruct.TIM_Period = 0xffff;   // 自动重装器 ARR 直接设置最大值
    TIM_TimeBaseInit(TIM3, &TIM_TimeBaseInitStruct);
    // 3.3 初始化输出比较单元
    TIM_ICInitTypeDef TIM_ICInitStruct;
    TIM_ICStructInit(&TIM_ICInitStruct);
    // 通道1
    TIM_ICInitStruct.TIM_Channel = TIM_Channel_1;            // 配置通道1
    TIM_ICInitStruct.TIM_ICFilter = 0xf;                     // 滤波级别 具体参考手册
    TIM_ICInitStruct.TIM_ICPolarity = TIM_ICPolarity_Rising; // 上升沿触发（其实是用来做极性选择，控制波形是否反向，而且这里的设置实际上也会被后续的配置编码器模式时覆盖）
    TIM_ICInit(TIM3, &TIM_ICInitStruct);
    // 通道2

    TIM_ICInitStruct.TIM_Channel = TIM_Channel_2;             // 配置通道2
    TIM_ICInitStruct.TIM_ICPolarity = TIM_ICPolarity_Falling; // 下降沿触发
    TIM_ICInit(TIM3, &TIM_ICInitStruct);

    // 3.4 配置为编码器模式
    TIM_EncoderInterfaceConfig(TIM3,
                               TIM_EncoderMode_TI12,   // 编码器模式3 同时检测通道1和通道2的边沿
                               TIM_ICPolarity_Falling, // 通道1的极性选择,反相
                               TIM_ICPolarity_Rising   // 通道2的极性选择,不反相
    );
    // #####################################################################
    // 4. 启动定时器
    TIM_Cmd(TIM3, ENABLE);
}
/**
 * 获取编码器位置
 * @return 位置
 */
int16_t Timer3_EncoderInterface_GetPosition()
{
    return TIM_GetCounter(TIM3);
}
