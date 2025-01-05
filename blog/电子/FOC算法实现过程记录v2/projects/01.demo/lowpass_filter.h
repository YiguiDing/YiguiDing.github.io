#ifndef _LOWPASS_FILTER_H_
#define _LOWPASS_FILTER_H_

#ifdef __cplusplus
extern "C"
{
#endif

    typedef struct
    {
        float Ts;
        float x_prev;
    } LowpassFilter;

    void lowpass_filter_init(LowpassFilter *filter, float alpha);
    float lowpass_filter_update(LowpassFilter *filter, float x, float dt);

#ifdef __cplusplus
}
#endif

#endif