#include "FOC.h"

void FOC_Init()
{
    Timer2_PWM_Init();
    Timer2_PWM_SetFreq(70);
    Timer3_EncoderInterface_Init();
    Timer4_Clock_Init();
    OLED_Init();
}

void FOC_Update(float F, float angle)
{
    float U_d = F;
    float U_q = 0;

    // 帕克变换
    float U_alpha = U_d * cos(angle) - U_q * sin(angle);
    float U_bata = U_q * cos(angle) + U_d * sin(angle);

    // 逆克拉克变换
    float U_a = U_alpha;
    float U_b = (sqrt(3) * U_bata - U_alpha) / 2;
    float U_c = (-U_alpha - sqrt(3) * U_bata) / 2;

    // 重映射
    // U_a的取值范围在[-1,+1]
    // Duty_a的取值范围在[0,1000]
    int16_t Duty_a = U_a * 500 + 250;
    int16_t Duty_b = U_b * 500 + 250;
    int16_t Duty_c = U_c * 500 + 250;

    // OLED_ShowSignedNum(1, 1, Duty_a, 5);
    // OLED_ShowSignedNum(2, 1, Duty_b, 5);
    // OLED_ShowSignedNum(3, 1, Duty_c, 5);

    Timer2_PWM_SetDuty(Duty_a, Duty_b, Duty_c);
}

void FOC_openSpeedLoop()
{
    float f = 0.1;
    float speed = rad(0);
    float angle = 0;
    float dt_s;
    uint64_t prevTime_ms, curTime_ms;
    prevTime_ms = Timer4_Clock_GetClockMs();
    while (1)
    {
        speed = rad(Timer3_EncoderInterface_GetPosition() * 100);
        // f = Timer3_EncoderInterface_GetPosition() / 500.0;

        // OLED_ShowSignedNum(1, 1, Timer3_EncoderInterface_GetPosition(), 10);

        curTime_ms = Timer4_Clock_GetClockMs();
        dt_s = (curTime_ms - prevTime_ms) / 1000.0;
        // OLED_ShowNum(4, 1, dt_s * 1000, 5);

        angle += speed * dt_s;
        // angle = normalizeAngle(angle);

        FOC_Update(f, normalizeAngle(electricalAngle(angle, 7)));
        prevTime_ms = curTime_ms;
    }
}
/**
 * 电角度=机械角x极对数
 */
float electricalAngle(float angle, int pole_pairs)
{
    return angle * pole_pairs;
}
/**
 * 角度归一化
 * 将 α ± k * Pi -> α
 */
float normalizeAngle(float angle)
{
    angle = fmod(angle, 2 * M_PI);
    if (angle < 0)
        angle += 2 * M_PI;
    return angle;
}
float rad(float deg)
{
    // 180 -> PI
    return deg / 180 * M_PI;
}