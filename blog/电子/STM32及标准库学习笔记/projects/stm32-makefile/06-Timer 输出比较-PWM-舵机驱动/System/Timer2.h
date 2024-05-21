#ifndef __Timer2_H__
#define __Timer2_H__

#ifdef __cplusplus
extern "C"
{
#endif

    void Timer2_setInterval(void (*_callback)(), uint16_t times);
    void Timer2_ClearInterval();

#ifdef __cplusplus
}
#endif

#endif