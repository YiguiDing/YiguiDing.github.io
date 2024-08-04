
#include "Timer2_PWM.h"
/**
 * 产生PWM波，占空比[0~100]% 频率[1~720]k
 */
void Timer2_PWM_Init()
{
    // 步骤
    // 1. 通过 RCC 开启相关外设时钟
    // 2. 为时基单元选择时钟源：内部时钟源
    // 3. 配置时基单元：预分频器、自动重装器、计数模式
    // 4. 初始化输出比较单元
    // 5. 配置GPIO
    // 6. 运行控制：使能计数器

    // 1开启Tim2外设时钟
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);

    // 2为TIM2时基单元选择内部
    TIM_InternalClockConfig(TIM2);

    // 3配置时基单元
    // 72Mhz -> /72 = 1000khz  -> /1000 -> 1khz
    TIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct;
    TIM_TimeBaseInitStruct.TIM_ClockDivision = TIM_CKD_DIV1;     // 采样点数，外部时钟信号滤波器的一个参数，这里填一分频，也就是不分频，那么就会以（内部时钟频率/1）的频率对外部时钟信号进行采样，这里用不到，随便写
    TIM_TimeBaseInitStruct.TIM_CounterMode = TIM_CounterMode_Up; // 计数模式，向上计数
    TIM_TimeBaseInitStruct.TIM_Prescaler = 72 - 1;               // 预分频器 PSC
    TIM_TimeBaseInitStruct.TIM_Period = 1000 - 1;                // 自动重装器 ARR
    TIM_TimeBaseInitStruct.TIM_RepetitionCounter = 0;            // 重复计数器，高级定时器才有
    TIM_TimeBaseInit(TIM2, &TIM_TimeBaseInitStruct);

    // 4. 初始化输出比较单元
    TIM_OCInitTypeDef TIM_OCInitStruct;
    // 初始化结构体，赋默认值，因为该结构体中有些属性是生效于高级定时器的，
    // 这里没有为这些属性赋值，又由于这里是局部变量，那么这些属性的值就是不确定的，
    // 这些未赋值的属性可能会对高级定时器的输出造成影响
    TIM_OCStructInit(&TIM_OCInitStruct);

    // 占空比
    TIM_OCInitStruct.TIM_OCMode = TIM_OCMode_PWM1;             // 设置输出比较模式
    TIM_OCInitStruct.TIM_OCPolarity = TIM_OCPolarity_High;     // 设置输出比较极性
    TIM_OCInitStruct.TIM_OutputState = TIM_OutputState_Enable; // 设置输出使能
    TIM_OCInitStruct.TIM_Pulse = 0;                            // 设置CCR捕获比较寄存器的值 [0x0000 and 0xFFFF]
    // OC1 是对ch1通道初始化
    TIM_OC1Init(TIM2, &TIM_OCInitStruct);
    TIM_OC2Init(TIM2, &TIM_OCInitStruct);
    TIM_OC3Init(TIM2, &TIM_OCInitStruct);

    // 5.1 配置AFIO
    // 端口重映射
    // RCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO, ENABLE);      // 开启AFIO时钟
    // GPIO_PinRemapConfig(GPIO_PartialRemap1_TIM2, ENABLE);     // 配置TIM2重映射1，这样tim2_ch1就用重映射到PA15上
    // GPIO_PinRemapConfig(GPIO_Remap_SWJ_JTAGDisable, ENABLE); // 配置关闭Jtag调试端口重映射，这样PA15 PB3 PB4三个端口就成为了GPIO口

    // 5.2 配置GPIO,
    // 根据手册 Timer2的ch1输出比较通道连接在了GPIO_A0上
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
    GPIO_InitTypeDef GPIO_InitStruct = {
        GPIO_Pin_0 | GPIO_Pin_1 | GPIO_Pin_2,
        GPIO_Speed_50MHz,
        GPIO_Mode_AF_PP // 必须设置复用推挽输出，引脚的输出控制才会和输出数据寄存器断开，和片上外设复用功能输出连接
    };
    GPIO_Init(GPIOA, &GPIO_InitStruct);

    // 6启动定时器
    TIM_Cmd(TIM2, ENABLE);
}
/**
 * 设置频率
 * @arg freq_khz 频率 取值范围：[1,72] 单位：khz
 */
void Timer2_PWM_SetFreq(uint16_t freq_khz)
{
    //  72Mhz = 72 000 000 hz =  72 000 khz（内部时钟） ÷ prescaler（预分频器） ÷ 1000（ARR自动重装器） = ? khz
    // prescaler = 72 000 khz / 1000 / ?khz = 72khz /  ?khz

    if (freq_khz == 0)
        freq_khz = 1;
    uint16_t prescaler = 72.0 / freq_khz;

    TIM_PrescalerConfig(TIM2, prescaler - 1, TIM_PSCReloadMode_Update);
}

/**
 * 设置占空比
 * @arg duty 占空比 取值范围：[0,1]
 */
void Timer2_PWM_SetDuty(
    float ch1_duty,
    float ch2_duty,
    float ch3_duty)
{
    TIM_SetCompare1(TIM2, ch1_duty * 1000);
    TIM_SetCompare2(TIM2, ch2_duty * 1000);
    TIM_SetCompare3(TIM2, ch3_duty * 1000);
}