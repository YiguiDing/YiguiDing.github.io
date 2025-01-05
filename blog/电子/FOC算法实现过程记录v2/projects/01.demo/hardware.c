#include "hardware.h"

/**
 * Current Sensor
 * i_a A0 P014  AN09
 * i_b A2 P001  AN01
 *
 * Position Sensor
 * theta A5 P100 AN022
 *
 * PWM
 * A D5 P103 GPT2_A
 * B D9 P304 GPT7_A
 * C D6 P102 GPT2_B
 *
 * A D5-GPT2_A or D3-GPT1_B
 * B D9-GPT7_A or D10-GPT3_B
 * C D6-GPT2_B or D11-NULL
 * EN 8
 */
//
//

//
//

// 产品页：https://store.arduino.cc/products/uno-r4-minima
// 电路图：https://docs.arduino.cc/resources/schematics/ABX00080-schematics.pdf
// 芯片手册：https://www.renesas.com/en/document/dst/ra4m1-group-datasheet
// Renesas Flexible Software Package (FSP)库函数手册: https://renesas.github.io/fsp/

adc_instance_ctrl_t adc_ctrl;
adc_cfg_t adc_cfg;
adc_extended_cfg_t adc_cfg_extend;
adc_channel_cfg_t adc_channel_cfg;

uint16_t *adc_channel = (uint16_t *)(R_ADC0->ADDR);

void adc_callback(adc_callback_args_t *p_args)
{
}

void adc_init()
{
    adc_cfg.unit = 0;
    adc_cfg.mode = ADC_MODE_CONTINUOUS_SCAN;    // 连续采样
    adc_cfg.resolution = ADC_RESOLUTION_14_BIT; // 14bit
    adc_cfg.alignment = ADC_ALIGNMENT_RIGHT;    // 右对齐
    adc_cfg.trigger = ADC_TRIGGER_SOFTWARE;     // 软件触发
    adc_cfg.p_callback = adc_callback;
    adc_cfg.p_context = NULL;
    adc_cfg.scan_end_irq = FSP_INVALID_VECTOR; // 未定义的中断向量
    adc_cfg.scan_end_ipl = (12);               // 中断优先级
    adc_cfg.scan_end_b_irq = FSP_INVALID_VECTOR;
    adc_cfg.scan_end_b_ipl = (12);
    adc_cfg.p_extend = &adc_cfg_extend;

    adc_cfg_extend.add_average_count = ADC_ADD_OFF;     // 不使用均值采样
    adc_cfg_extend.clearing = ADC_CLEAR_AFTER_READ_OFF; // 读取后不清零
    adc_cfg_extend.trigger_group_b = ADC_TRIGGER_SOFTWARE;
    adc_cfg_extend.double_trigger_mode = ADC_DOUBLE_TRIGGER_DISABLED; //
    adc_cfg_extend.adc_vref_control = ADC_VREF_CONTROL_AVCC0_AVSS0;   // 参考电压为AVCC AVSS
    adc_cfg_extend.enable_adbuf = 0;
    adc_cfg_extend.window_a_irq = FSP_INVALID_VECTOR; // 未定义的中断向量
    adc_cfg_extend.window_a_ipl = (12);               // 中断优先级
    adc_cfg_extend.window_b_irq = FSP_INVALID_VECTOR;
    adc_cfg_extend.window_b_ipl = (12);

    adc_channel_cfg.sample_hold_states = 24;
    adc_channel_cfg.scan_mask = ADC_MASK_CHANNEL_9 | ADC_MASK_CHANNEL_1 | ADC_MASK_CHANNEL_22;
    adc_channel_cfg.scan_mask_group_b = 0;
    adc_channel_cfg.add_mask = 0;
    adc_channel_cfg.p_window_cfg = NULL;
    adc_channel_cfg.priority_group_a = ADC_GROUP_A_PRIORITY_OFF;
    adc_channel_cfg.sample_hold_mask = 0;

    R_ADC_Open(&adc_ctrl, &adc_cfg);
    R_ADC_ScanCfg(&adc_ctrl, &adc_channel_cfg);
    R_ADC_ScanStart(&adc_ctrl);
}

float hardware_get_adc_value(adc_channel_t channel)
{
    // return R_ADC0->ADDR[channel];
    uint16_t result;
    R_ADC_Read(&adc_ctrl, channel, &result);
    return result / 16383.0f;
}

// pwmA D5 P107_GPT0_A
// pwmB D9 P303_GPT7_B
// pwmC D6 P111_GPT3_A
uint8_t timer_ch[3] = {0, 7, 3};
gpt_io_pin_t pwm_ch[3] = {GPT_IO_PIN_GTIOCA, GPT_IO_PIN_GTIOCB, GPT_IO_PIN_GTIOCA};
bsp_io_port_pin_t io_port[3] = {BSP_IO_PORT_01_PIN_07, BSP_IO_PORT_03_PIN_03, BSP_IO_PORT_01_PIN_11};

gpt_instance_ctrl_t gpt_ctrls[3];
timer_cfg_t gpt_timer_cfgs[3];
gpt_extended_cfg_t gpt_ext_cfgs[3];
gpt_extended_pwm_cfg_t gpt_pwm_cfgs[3];
void gpt_init()
{
    uint32_t start_mask = 0;
    for (int8_t idx = 0; idx <= 2; idx++)
    {
        R_IOPORT_PinCfg(&g_ioport_ctrl, io_port[idx], (uint32_t)(IOPORT_CFG_PORT_DIRECTION_OUTPUT | IOPORT_CFG_PERIPHERAL_PIN | IOPORT_PERIPHERAL_GPT1));
        // port_config
        // timer_config
        gpt_timer_cfgs[idx].channel = timer_ch[idx];
        gpt_timer_cfgs[idx].mode = TIMER_MODE_PWM;
        // 48Mhz dev1 cnt=1000 => 48khz
        // 48Mhz dev2 cnt=1000 => 24khz
        // 48Mhz dev4 cnt=1000 => 12khz
        gpt_timer_cfgs[idx].source_div = TIMER_SOURCE_DIV_2; // // uint32_t pclkd_freq_hz = R_FSP_SystemClockHzGet(FSP_PRIV_CLOCK_PCLKD)
        gpt_timer_cfgs[idx].period_counts = 1000;            // pwm分辨率
        gpt_timer_cfgs[idx].duty_cycle_counts = 500;
        gpt_timer_cfgs[idx].p_callback = NULL;
        gpt_timer_cfgs[idx].p_context = NULL;
        gpt_timer_cfgs[idx].p_extend = &gpt_ext_cfgs[idx];
        gpt_timer_cfgs[idx].cycle_end_ipl = BSP_IRQ_DISABLED;
        gpt_timer_cfgs[idx].cycle_end_irq = FSP_INVALID_VECTOR;

        // // gpt_cfg
        gpt_ext_cfgs[idx].gtioca.output_enabled = pwm_ch[idx] == GPT_IO_PIN_GTIOCA;
        gpt_ext_cfgs[idx].gtioca.stop_level = GPT_PIN_LEVEL_LOW;
        gpt_ext_cfgs[idx].gtiocb.output_enabled = pwm_ch[idx] == GPT_IO_PIN_GTIOCB;
        gpt_ext_cfgs[idx].gtiocb.stop_level = GPT_PIN_LEVEL_LOW;
        gpt_ext_cfgs[idx].start_source = (gpt_source_t)(GPT_SOURCE_NONE);
        gpt_ext_cfgs[idx].stop_source = (gpt_source_t)(GPT_SOURCE_NONE);
        gpt_ext_cfgs[idx].clear_source = (gpt_source_t)(GPT_SOURCE_NONE);
        gpt_ext_cfgs[idx].count_up_source = (gpt_source_t)(GPT_SOURCE_NONE);
        gpt_ext_cfgs[idx].count_down_source = (gpt_source_t)(GPT_SOURCE_NONE);
        gpt_ext_cfgs[idx].capture_a_source = (gpt_source_t)(GPT_SOURCE_NONE);
        gpt_ext_cfgs[idx].capture_b_source = (gpt_source_t)(GPT_SOURCE_NONE);
        gpt_ext_cfgs[idx].capture_a_ipl = BSP_IRQ_DISABLED;
        gpt_ext_cfgs[idx].capture_b_ipl = BSP_IRQ_DISABLED;
        gpt_ext_cfgs[idx].capture_a_irq = FSP_INVALID_VECTOR;
        gpt_ext_cfgs[idx].capture_b_irq = FSP_INVALID_VECTOR;
        gpt_ext_cfgs[idx].capture_filter_gtioca = GPT_CAPTURE_FILTER_NONE;
        gpt_ext_cfgs[idx].capture_filter_gtiocb = GPT_CAPTURE_FILTER_NONE;
        gpt_ext_cfgs[idx].p_pwm_cfg = &gpt_pwm_cfgs[idx];
        gpt_ext_cfgs[idx].gtior_setting.gtior = 0U;

        // // pwm_cfg
        gpt_pwm_cfgs[idx].trough_ipl = BSP_IRQ_DISABLED;
        gpt_pwm_cfgs[idx].trough_irq = FSP_INVALID_VECTOR;
        gpt_pwm_cfgs[idx].poeg_link = GPT_POEG_LINK_POEG0;
        gpt_pwm_cfgs[idx].output_disable = GPT_OUTPUT_DISABLE_NONE;
        gpt_pwm_cfgs[idx].adc_trigger = GPT_ADC_TRIGGER_NONE;
        gpt_pwm_cfgs[idx].dead_time_count_up = 0;
        gpt_pwm_cfgs[idx].dead_time_count_down = 0;
        gpt_pwm_cfgs[idx].adc_a_compare_match = 0;
        gpt_pwm_cfgs[idx].adc_b_compare_match = 0;
        gpt_pwm_cfgs[idx].interrupt_skip_source = GPT_INTERRUPT_SKIP_SOURCE_NONE;
        gpt_pwm_cfgs[idx].interrupt_skip_count = GPT_INTERRUPT_SKIP_COUNT_0;
        gpt_pwm_cfgs[idx].interrupt_skip_adc = GPT_INTERRUPT_SKIP_ADC_NONE;
        gpt_pwm_cfgs[idx].gtioca_disable_setting = GPT_GTIOC_DISABLE_PROHIBITED;
        gpt_pwm_cfgs[idx].gtiocb_disable_setting = GPT_GTIOC_DISABLE_PROHIBITED;

        // memset(&gpt_ctrl[idx], 0, sizeof(gpt_instance_ctrl_t));

        fsp_err_t err = FSP_SUCCESS;
        // Initializes the timer module and applies configurations.
        err = R_GPT_Open(&gpt_ctrls[idx], &gpt_timer_cfgs[idx]);
        assert(FSP_SUCCESS == err);

        // Enables external event triggers that start, stop, clear, or capture the counter.
        err = R_GPT_Enable(&gpt_ctrls[idx]);
        assert(FSP_SUCCESS == err);

        // // Enable output for GTIOCA and/or GTIOCB
        err = R_GPT_OutputEnable(&gpt_ctrls[idx], pwm_ch[idx]);
        assert(FSP_SUCCESS == err);

        // Starts timer.
        // err = R_GPT_Start(&gpt_ctrls[idx]);
        // assert(FSP_SUCCESS == err);

        start_mask |= (1 << timer_ch[idx]);
    }
    // Starts timer at the same time
    gpt_ctrls[0].p_reg->GTSTR |= start_mask;
}

/**
 * dutyA [0.0,1.0]
 */
void hardware_set_pwm_duty(uint8_t chA, float dutyA, uint8_t chB, float dutyB, uint8_t chC, float dutyC)
{
    R_GPT_DutyCycleSet(&gpt_ctrls[chA], dutyA * 1000, pwm_ch[chA]);
    R_GPT_DutyCycleSet(&gpt_ctrls[chB], dutyB * 1000, pwm_ch[chB]);
    R_GPT_DutyCycleSet(&gpt_ctrls[chC], dutyC * 1000, pwm_ch[chC]);
}

void hardware_init()
{
    adc_init();
    gpt_init();
}