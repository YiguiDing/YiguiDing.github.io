
#include "lowpass_filter.h"

void lowpass_filter_init(LowpassFilter *filter, float Ts)
{
    filter->Ts = Ts;
}
float lowpass_filter_update(LowpassFilter *filter, float x_now, float dt)
{
    // dt>>Ts k->1 x->x_now
    // dt<<Ts k->0 x->x_prev
    float k = dt / (dt + filter->Ts);
    float x = filter->x_prev + k * (x_now - filter->x_prev);
    filter->x_prev = x;
    return x;
}
