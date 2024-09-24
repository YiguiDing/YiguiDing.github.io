#include "BLDCMotor.hpp"

BLDCMotor::BLDCMotor(uint8_t polePairs, float power_supply_voltage)
{
    this->polePairs = polePairs;
    this->power_supply_voltage = power_supply_voltage;
}
void BLDCMotor::connectDriver(BLDCDriver *driver)
{
    this->driver = driver;
}
void BLDCMotor::connectSensor(Sensor *sensor)
{
    this->sensor = sensor;
}
void BLDCMotor::connectCurrentSensor(CurrentSensor *currentSensor)
{
    this->currentSensor = currentSensor;
}
void BLDCMotor::initFOC()
{
    if (this->currentSensor)
    {
        this->currentSensor->initSensor();
        this->currentSensor->alignSensor();
    }
    if (this->driver)
    {
        this->driver->initDriver();
        this->driver->enableDriver(true);
        this->driver->setPhraseVoltage(0, 0, 0);
    }
    if (this->sensor)
    {
        this->sensor->initSensor();
        this->sensor->connectMotor(this);
        this->sensor->alignSensor();
        this->sensor->init();
        this->sensor->update();
    }
}

void BLDCMotor::loopFOC()
{
    if (this->sensor)
        this->sensor->update();
    // this->open_loop_voltage_control(0, 1.0f);
    this->close_loop_current_control(2.5f);
}

/**
 * @details
 *  电角度=机械角度*极对数
 *  @return [0,2PI] => [0,UINT16_MAX]
 */
uint16_t BLDCMotor::electricalAngle()
{
    return this->sensor->getPositon() * polePairs;
}
/**
 * 设置相电压
 * @param u_d int16_t [-32768,32767] 表示 [-1,1] 精度：1/32768 = 0.0000305
 * @param u_q int16_t [-32768,32767] 表示 [-1,1]
 * @param e_angle uint16_t [0,65535] 表示 [0,2PI] 精度：360°/65535 = 0.00549°
 */
void BLDCMotor::setPhraseVoltage(int16_t u_d, int16_t u_q, uint16_t e_angle)
{
    int16_t sin, cos;
    // 计算三角函数
    _sincos(e_angle, &sin, &cos);
    // 帕克逆变换
    int16_t u_alpha = ((cos * (int32_t)u_d) + (-sin * (int32_t)u_q)) / INT16_MAX;
    int16_t u_beta = ((sin * (int32_t)u_d) + (cos * (int32_t)u_q)) / INT16_MAX;
    // 克拉克逆变换(等幅值形式)
    int16_t u_a = u_alpha;
    int16_t u_b = (-u_alpha + _INT16_SQRT3_ * u_beta / INT16_MAX) / 2;
    int16_t u_c = -(u_a + u_b);
    // 设置相电压
    driver->setPhraseVoltage(u_a, u_b, u_c);
}

void BLDCMotor::open_loop_voltage_control(float target_ud, float target_uq)
{
    float voltage_ud = _constrain(-limit_voltage, target_ud, limit_voltage);
    float voltage_uq = _constrain(-limit_voltage, target_uq, limit_voltage);
    int16_t u_d = this->sensor->directron * this->direction * (voltage_ud / power_supply_voltage * INT16_MAX);
    int16_t u_q = this->sensor->directron * this->direction * (voltage_uq / power_supply_voltage * INT16_MAX);
    uint16_t e_angle = this->electricalAngle();
    this->setPhraseVoltage(u_d, u_q, e_angle);
}
/**
 * 获取Q轴电流
 */
CurrentDQ BLDCMotor::getCurrentDQ()
{
    CurrentDQ i = this->currentSensor->getCurrentDQ(this->electricalAngle());
    return {
        .d = this->current_d_filter(i.d),
        .q = this->current_q_filter(i.q),
    };
}
/**
 * 电流闭环控制
 */
void BLDCMotor::close_loop_current_control(float target)
{
    float target_i_d = 0;
    float target_i_q = _constrain(-limit_current, target, limit_current);
    CurrentDQ current = this->getCurrentDQ();
    float error_d = target_i_d - current.d;
    float error_q = target_i_q - current.q;
    float u_d = this->pid_id_controller(error_d);
    float u_q = this->pid_iq_controller(error_q);
    this->open_loop_voltage_control(u_d, u_q);
}
/**
 * 获取机械角度
 */
float BLDCMotor::shaftAngle()
{
    return shaft_angle_filter(this->sensor->getPositons());
}
/**
 * 获取机械角度
 */
float BLDCMotor::shaftVelocity()
{
    return shaft_velocity_filter(this->sensor->getVelocity());
}