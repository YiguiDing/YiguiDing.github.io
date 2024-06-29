#include "AD_With_DMA.h"

uint16_t Value[3];
void AD_With_DMA_Init()
{
    //
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

    // ----+----+配置规则通道：通道0 1 2放入序列1 2 3，采样时间为1.5个时钟周期
    ADC_RegularChannelConfig(ADC1, ADC_Channel_0, 1, ADC_SampleTime_1Cycles5);
    ADC_RegularChannelConfig(ADC1, ADC_Channel_1, 2, ADC_SampleTime_1Cycles5);
    ADC_RegularChannelConfig(ADC1, ADC_Channel_2, 3, ADC_SampleTime_1Cycles5);

    // ----+----+初始化ADC
    ADC_InitTypeDef ADC_InitStruct;
    ADC_InitStruct.ADC_Mode = ADC_Mode_Independent;                  // 模式=>独立
    ADC_InitStruct.ADC_ScanConvMode = ENABLE;                        // 扫描模式?
    ADC_InitStruct.ADC_ContinuousConvMode = ENABLE;                  // 连续转换模式?
    ADC_InitStruct.ADC_ExternalTrigConv = ADC_ExternalTrigConv_None; // 外部触发控制控制，可用于实现定时触发,不使用
    ADC_InitStruct.ADC_DataAlign = ADC_DataAlign_Right;              // 数据对齐方式
    ADC_InitStruct.ADC_NbrOfChannel = 3;                             // 通道数目，针对于扫描模式
    ADC_Init(ADC1, &ADC_InitStruct);
    // ----+----+将ADC1的DMA请求发送给DMA
    ADC_DMACmd(ADC1, ENABLE);
    // ----+----+开启ADC
    ADC_Cmd(ADC1, ENABLE);
    // ----+----+复位校准
    ADC_ResetCalibration(ADC1);                        // 复位校准（给RSTCAL置1）
    while (ADC_GetResetCalibrationStatus(ADC1) == SET) // 等待复位校准完成（等待硬件校准完毕后将RSTCAL置0）
        ;
    ADC_StartCalibration(ADC1);                   // 开始校准
    while (ADC_GetCalibrationStatus(ADC1) == SET) // 等待校准完毕
        ;
    // ----+配置DMA
    // ----+----+开启DMA1时钟
    RCC_AHBPeriphClockCmd(RCC_AHBPeriph_DMA1, ENABLE);
    // ----+----+初始化DMA
    DMA_InitTypeDef DMA_InitStruct;
    DMA_StructInit(&DMA_InitStruct);
    // 外设站点配置
    DMA_InitStruct.DMA_PeripheralBaseAddr = (uint32_t) & (ADC1->DR);         // 外设站起始地址地址
    DMA_InitStruct.DMA_PeripheralDataSize = DMA_PeripheralDataSize_HalfWord; // 数据大小,半字
    DMA_InitStruct.DMA_PeripheralInc = DMA_PeripheralInc_Disable;            // 地址不自增
    // 存储器站点配置
    DMA_InitStruct.DMA_MemoryBaseAddr = (uint32_t)Value;
    DMA_InitStruct.DMA_MemoryDataSize = DMA_MemoryDataSize_HalfWord;
    DMA_InitStruct.DMA_MemoryInc = DMA_MemoryInc_Enable;
    DMA_InitStruct.DMA_BufferSize = 3;                   // 传输计数器；数据长度
    DMA_InitStruct.DMA_DIR = DMA_DIR_PeripheralSRC;      // 方向： 外设 => 内存
    DMA_InitStruct.DMA_M2M = DMA_M2M_Disable;            // 软件触发？（存储器to存储器）
    DMA_InitStruct.DMA_Mode = DMA_Mode_Circular;         // 自动重装器; 模式？ 循环:单次
    DMA_InitStruct.DMA_Priority = DMA_Priority_VeryHigh; // 优先级
    // 初始化
    DMA_Init(DMA1_Channel1, &DMA_InitStruct);
    // 启用DMA
    DMA_Cmd(DMA1_Channel1, ENABLE);

    // 软件触发转换
    ADC_SoftwareStartConvCmd(ADC1, ENABLE);
}
