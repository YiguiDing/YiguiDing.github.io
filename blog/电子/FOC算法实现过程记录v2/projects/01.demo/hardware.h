#ifndef __HARDWARE_H__
#define __HARDWARE_H__

#include <common_data.h>
#include <r_cgc.h>
#include <r_adc.h>
#include <r_gpt.h>
#include <r_ioport.h>

#ifdef __cplusplus
extern "C"
{
#endif

    void hardware_init();
    float hardware_get_adc_value(adc_channel_t channel);
    void hardware_set_pwm_duty(uint8_t chA, float dutyA, uint8_t chB, float dutyB, uint8_t chC, float dutyC);

#ifdef __cplusplus
}
#endif

#endif
