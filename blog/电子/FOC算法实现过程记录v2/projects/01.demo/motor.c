#include "motor.h"
#include "hardware.h"

void motor_init(Motor *motor, uint8_t pole_pairs, float power_supply)
{
    // 初始化
    motor->pole_pairs = pole_pairs;
    motor->power_supply = power_supply;
    // 初始化
    motor->target = 5;
    motor->controlMode = OPEN_VOLTAGE_LOOP;
    motor->modulation = SPWM;
    pid_controller_init(&motor->pid_id_controller, 30, 0, 0, 12, 0);
    pid_controller_init(&motor->pid_iq_controller, 30, 0, 0, 12, 0);
    // 初始化
    motor->theta_mes = 0;
    motor->theta_mes_offset = 0;
    motor->theta_est = 0;
    motor->theta_pdt = 0;
    pll_init(&motor->pll_theta, 0.000050, 500, 0);
    lowpass_filter_init(&motor->theta_filter, 0.000010);
    motor->e_theta = 0;
    motor->omega = 0.1f;
    motor->e_omega = 0;
    motor->sin_e_theta = 0;
    motor->cos_e_theta = 0;

    // 初始化硬件
    // analogWriteResolution(12);
    // analogReadResolution(14);
    // pinMode(A5, INPUT);    // sensor-analog
    // pinMode(5, OUTPUT);    // pwmA
    // pinMode(9, OUTPUT);    // pwmB
    // pinMode(6, OUTPUT);    // pwmC

    pinMode(8, OUTPUT);    // pwm_EN
    digitalWrite(8, HIGH); // driver enable
    sensor_align(motor);
}
void sensor_align(Motor *motor)
{
    // 等效为在 dq轴 -90°方向 注入电压。
    hardware_set_pwm_duty(
        0, 0.5, // Ua = 0
        1, 0.0, // Ub = 1
        2, 0.0  // Uc = 1
    );
    delay(1000); // 1s
    float x = 0;
    for (uint8_t n = 1; n <= 100; n++)
    {
        float z = hardware_get_adc_value(ADC_CHANNEL_22) * M_TWOPI;
        // 递归求均值
        // X[n] = X[n-1] + 1/n * (Z[n] - X[n-1])
        x = x + (z - x) / n;
        delay(5);
    }
    motor->theta_mes_offset = -x;
    hardware_set_pwm_duty(
        0, 0.0, // Ua = 0
        1, 0.0, // Ub = 0
        2, 0.0  // Uc = 0
    );
}
void motor_state_update(Motor *motor, float dt)
{
}
void motor_foc_loop(Motor *motor, float dt)
{
    // ########################################################
    // float angle = analogRead(A5) * M_TWOPI / 0x03fff; // [0,0x03fff] => [0,2*pi] 耗时50us
    motor->theta_mes = _normalizeAngle(hardware_get_adc_value(ADC_CHANNEL_22) * M_TWOPI + motor->theta_mes_offset); // 测量角度
    pll_update(&motor->pll_theta, motor->theta_mes, dt);                                                            //  锁相环更新
    // motor->theta_est = lowpass_filter_update(&motor->theta_filter, motor->pll_theta.theta, dt);                     // 估计角度  滤波
    // ########################################################
    motor->theta_est = motor->theta_mes;
    // motor->theta_est = motor->pll_theta.theta;
    motor->omega = motor->pll_theta.omega;
    // ########################################################
    motor->e_theta = _normalizeAngle(motor->theta_est * motor->pole_pairs);
    motor->e_omega = motor->omega * motor->pole_pairs;
    motor->sin_e_theta = sinf(motor->e_theta); // Arduino UNO R4（带FPU） 最省时 sinf+cosf  耗时10us
    motor->cos_e_theta = cosf(motor->e_theta);
    // ########################################################
    // motor->sin_e_theta = _sin(motor->e_theta); // 查表法 _sin+_cos 耗时46us
    // motor->cos_e_theta = _cos(motor->e_theta);
    // ########################################################
    // motor->sin_e_theta = sin(motor->e_theta); // 双精度 耗时严重 sin+cos 100us~129us
    // motor->cos_e_theta = cos(motor->e_theta);
    // ########################################################
    //
    switch (motor->controlMode)
    {
    case CLOSE_VELOCITY_LOOP:
        break;
    case CLOSE_CURRENT_LOOP:
        motor->Id_target = 0;
        motor->Iq_target = motor->target;
        motor_close_current_loop(motor, dt);
        break;
    case OPEN_VOLTAGE_LOOP:
        motor->Ud_target = 0;
        motor->Uq_target = motor->target;
        motor_open_voltage_loop(motor, dt);
        break;
    default:
        break;
    }
    //
}
void motor_open_voltage_loop(Motor *motor, float dt)
{
    motor->Ud = motor->Ud_target;
    motor->Uq = motor->Uq_target;
    switch (motor->modulation)
    {
    case SPWM: // 帕克逆变换+克拉克逆变换 耗时13us
    {
#define M_SQRT3_2 0.866025403785 // sqrt(3)/2
        // 帕克逆变换
        motor->Uahpha = motor->cos_e_theta * motor->Ud - motor->sin_e_theta * motor->Uq;
        motor->Ubeta = motor->sin_e_theta * motor->Ud + motor->cos_e_theta * motor->Uq;
        // 克拉克逆变换
        motor->Ua = motor->Uahpha; // 等赋值形式
        motor->Ub = -0.5f * motor->Uahpha + M_SQRT3_2 * motor->Ubeta;
        motor->Uc = -(motor->Ua + motor->Ub); // 基尔霍夫电压电流定律
    }
    break;
    case SVPWM:
    {
#define M_PI_3 1.0471975512   // pi/3
#define M_SQRT3 1.73205080757 // sqrt(3)
        int sector = floor(motor->e_theta / M_PI_3) + 1;
        float T1 = M_SQRT3 * sinf(sector * M_PI_3 - motor->e_theta) * motor->Uq / motor->power_supply;
        float T2 = M_SQRT3 * sinf(motor->e_theta - (sector - 1.0f) * M_PI_3) * motor->Uq / motor->power_supply;
        float T0 = 1 - T1 - T2;
        float Ta, Tb, Tc;
        switch (sector)
        {
        case 1:
            Ta = T1 + T2 + T0 / 2;
            Tb = T2 + T0 / 2;
            Tc = T0 / 2;
            break;
        case 2:
            Ta = T1 + T0 / 2;
            Tb = T1 + T2 + T0 / 2;
            Tc = T0 / 2;
            break;
        case 3:
            Ta = T0 / 2;
            Tb = T1 + T2 + T0 / 2;
            Tc = T2 + T0 / 2;
            break;
        case 4:
            Ta = T0 / 2;
            Tb = T1 + T0 / 2;
            Tc = T1 + T2 + T0 / 2;
            break;
        case 5:
            Ta = T2 + T0 / 2;
            Tb = T0 / 2;
            Tc = T1 + T2 + T0 / 2;
            break;
        case 6:
            Ta = T1 + T2 + T0 / 2;
            Tb = T0 / 2;
            Tc = T1 + T0 / 2;
            break;
        default:
            Ta = 0;
            Tb = 0;
            Tc = 0;
            motor->Ua = Ta * motor->power_supply;
            motor->Ub = Tb * motor->power_supply;
            motor->Uc = Tc * motor->power_supply;
        }
    }
    break;
    default:
        break;
    }
    // 耗时38~46us:
    // [-1,+1] -> [-0.5,+0.5] -> [0,1] -> [0,0x0fff]
    // analogWrite(5, (motor->Ua / motor->power_supply * 0.5 + 0.5f) * 0x0fff);
    // analogWrite(9, (motor->Ub / motor->power_supply * 0.5 + 0.5f) * 0x0fff);
    // analogWrite(6, (motor->Uc / motor->power_supply * 0.5 + 0.5f) * 0x0fff);
    // 耗时：
    hardware_set_pwm_duty(
        0, (motor->Ua / motor->power_supply * 0.5 + 0.5f),
        1, (motor->Ub / motor->power_supply * 0.5 + 0.5f),
        2, (motor->Uc / motor->power_supply * 0.5 + 0.5f));
}
void motor_close_current_loop(Motor *motor, float dt)
{
    // 电流采样
    // close_current_loop
    // motor->Ia = (analogRead(A0) * 5.0f / 0x03fff) - 2.5f; // [0,0x03fff] => [-2.5,+2.5] 耗时50us
    // motor->Ib = (analogRead(A2) * 5.0f / 0x03fff) - 2.5f; // [0,0x03fff] => [-2.5,+2.5] 耗时50us
    // motor->Ic = -(motor->Ia + motor->Ib);
    // 电流采样
    motor->Ia = (hardware_get_adc_value(CHANNEL_9) - 0.5) / 0.01 * 50;  // [0,1] -> [-0.5,0.5] -> 0.01Ω 50倍 i=u/r
    motor->Ib = -(hardware_get_adc_value(CHANNEL_1) - 0.5) / 0.01 * 50; // [0,1] -> [-0.5,0.5] -> 0.01Ω 50倍 i=u/r
    motor->Ic = -(motor->Ia + motor->Ib);
    // 克拉克变换
    motor->Ialpha = motor->Ia; // 等幅值形式
    motor->Ibeta = sqrtf(3) / 3 * motor->Ia + 2 * sqrtf(3) / 3 * motor->Ib;
    // 帕克变换
    motor->Id = motor->cos_e_theta * motor->Ialpha + motor->sin_e_theta * motor->Ibeta;
    motor->Ia = -motor->sin_e_theta * motor->Ialpha + motor->cos_e_theta * motor->Ibeta;
    // 电流环pid
    motor->Ud_target = pid_controller_update(&motor->pid_id_controller, motor->Id - motor->Id_target, dt);
    motor->Uq_target = pid_controller_update(&motor->pid_iq_controller, motor->Iq - motor->Iq_target, dt);
    // 电压环
    motor_open_voltage_loop(motor, dt);
}