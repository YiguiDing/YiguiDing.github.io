#include "AD.h"

void AD_Init()
{
    // ----+配置GPIO
    // ----+----+通过RCC寄存器开启GPIO时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
    // ----+----+配置GPIO端口模式为模拟输入
    GPIO_InitTypeDef GPIO_InitStruct;
    GPIO_InitStruct.GPIO_Mode = GPIO_Mode_AIN;
    GPIO_InitStruct.GPIO_Pin = GPIO_Pin_0 | GPIO_Pin_1 | GPIO_Pin_2;
    GPIO_InitStruct.GPIO_Speed = GPIO_Speed_50MHz;
    GPIO_Init(GPIOA, &GPIO_InitStruct);

    // ----+配置ADC
    // ----+----+通过RCC寄存器配置ADC时钟预分频器，最高12M，所以72/6=12
    RCC_ADCCLKConfig(RCC_PCLK2_Div6);
    // ----+----+开启ADC1时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_ADC1, ENABLE);

    // ----+----+初始化ADC
    ADC_InitTypeDef ADC_InitStruct;
    ADC_InitStruct.ADC_Mode = ADC_Mode_Independent;                  // 模式=>独立
    ADC_InitStruct.ADC_ScanConvMode = DISABLE;                       // 扫描模式?
    ADC_InitStruct.ADC_ContinuousConvMode = DISABLE;                  // 连续转换模式?
    ADC_InitStruct.ADC_ExternalTrigConv = ADC_ExternalTrigConv_None; // 外部触发控制控制，可用于实现定时触发,不使用
    ADC_InitStruct.ADC_DataAlign = ADC_DataAlign_Right;              // 数据对齐方式
    ADC_InitStruct.ADC_NbrOfChannel = 1;                             // 通道数目，针对于扫描模式
    ADC_Init(ADC1, &ADC_InitStruct);
    // ----+----+开启ADC
    ADC_Cmd(ADC1, ENABLE);
    // ----+----+复位校准
    ADC_ResetCalibration(ADC1);                        // 复位校准（给RSTCAL置1）
    while (ADC_GetResetCalibrationStatus(ADC1) == SET) // 等待复位校准完成（等待硬件校准完毕后将RSTCAL置0）
        ;
    ADC_StartCalibration(ADC1);                   // 开始校准
    while (ADC_GetCalibrationStatus(ADC1) == SET) // 等待校准完毕
        ;
}
/**
 * @arg ADC_Channel  通道编号 0~17
 */
uint16_t AD_GetChVal(uint8_t ADC_Channel)
{

    // 配置规则通道：通道x放入序列1，采样时间为1.5个时钟周期
    ADC_RegularChannelConfig(ADC1, ADC_Channel, 1, ADC_SampleTime_1Cycles5);
    // 软件触发转换
    ADC_SoftwareStartConvCmd(ADC1, ENABLE);
    // 等待转换完成 转换耗时 = ADCCLK周期 * （采样周期+固定的转换周期12.5）= 1/(12M) * (1.5+12.5) = 14/12 ≈ 1.16 us
    while (ADC_GetFlagStatus(ADC1, ADC_FLAG_EOC) == RESET) //
        ;
    // 读取转换结果(如果是连续转换模式，不需要上面两步，直接读取，但至少要软件触发一次)
    return ADC_GetConversionValue(ADC1);
}