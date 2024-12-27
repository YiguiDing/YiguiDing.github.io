#include "BLDCMotor.hpp"
#include "Sensor.hpp"
#include "CurrentSensor.hpp"
#include "foc_utils.h"

BLDCMotor::BLDCMotor(uint8_t pole_pairs, float power_supply_voltage)
{
    this->pole_pairs = pole_pairs;
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
        delay(10);
    }
    if (this->sensor)
    {
        this->sensor->initSensor();
        this->sensor->connectMotor(this);
        this->sensor->align();
        this->sensor->update();
    }
}

void BLDCMotor::loopFOC()
{
    if (this->sensor)
        this->sensor->update(); // 73us
    if (this->currentSensor)
        this->currentSensor->update(); // 54us

    switch (controlMode) // 185us
    {
    case BLDCControlMode::Voltage:
        this->open_loop_voltage_control(0, target);
        break;
    case BLDCControlMode::Current:
        this->close_loop_current_control(target);
        break;
    case BLDCControlMode::VelocityCurrent:
        this->close_loop_velocity_current_control(target);
        break;
    case BLDCControlMode::PositionCurrent:
        this->close_loop_position_current_control(target);
        break;
    case BLDCControlMode::PositionVelocityCurrent:
        this->close_loop_position_velocity_current_control(target);
        break;
    default:
        break;
    }
    return;
}

/**
 * 设置控制模式
 */
void BLDCMotor::setMode(BLDCControlMode controlMode)
{
    switch (controlMode)
    {
    case BLDCControlMode::Unknow:
        break;
    case BLDCControlMode::Voltage:
        break;
    case BLDCControlMode::Current:
        // 官方 Simple FOC Shield v2.0.4 开发板 with 2804-100kv 云台电机
        this->limit_voltage = 12.0; // 电机额定电压
        this->limit_current = 1;    // 额定电流
        // kp=35 时目标电流1 实际电流0.9 精确度90%
        // roc=600电机在快速正反转时抖动失控，所以取500
        this->pid_id_controller = PIDControler(35, 0, 0, this->limit_voltage, 500);
        this->pid_iq_controller = PIDControler(35, 0, 0, this->limit_voltage, 500);
        break;
    case BLDCControlMode::VelocityCurrent:
        // 官方 Simple FOC Shield v2.0.4 开发板 with 2804-100kv 云台电机
        this->limit_voltage = 12.0; // 电机额定电压
        this->limit_current = 1;    // 额定电流
        this->limit_velocity = 100; // 最大速度
        this->pid_id_controller = PIDControler(35, 0, 0, this->limit_voltage, 500);
        this->pid_iq_controller = PIDControler(35, 0, 0, this->limit_voltage, 500);
        // kp=0.05 时 目标速度100 实际速度90 精确度90%
        // ki=0.5 时 电机目标速度从100降到0时，电机有两次过冲抖动，ki=0.25 时 电机目标速度从100降到0时，电机有一次过冲抖动，遂取ki=0.1
        this->pid_velocity_controller = PIDControler(0.05, 0.1, 0, this->limit_current, 0);
        break;
    case BLDCControlMode::PositionCurrent: // 力位控制
        // 官方 Simple FOC Shield v2.0.4 开发板 with 2804-100kv 云台电机
        this->limit_voltage = 12.0; // 电机额定电压
        this->limit_current = 1;    // 额定电流
        this->pid_id_controller = PIDControler(35, 0, 0, this->limit_voltage, 500);
        this->pid_iq_controller = PIDControler(35, 0, 0, this->limit_voltage, 500);
        this->pid_position_controller = PIDControler(0.5, 0, 0.025, this->limit_current, 0);
        break;
    case BLDCControlMode::PositionVelocityCurrent: // 力矩-速度-位置控制
        this->limit_voltage = 12.0;
        this->limit_current = 1;
        this->limit_velocity = 100; // 最大速度
        this->pid_id_controller = PIDControler(35, 0, 0, this->limit_voltage, 500);
        this->pid_iq_controller = PIDControler(35, 0, 0, this->limit_voltage, 500);
        this->pid_velocity_controller = PIDControler(0.05, 0, 0, this->limit_current, 0);
        this->pid_position_controller = PIDControler(10, 0, 0.1, this->limit_velocity, 0);
        break;
    default:
        break;
    }
    this->controlMode = controlMode;
}

void BLDCMotor::setTarget(float target)
{
    this->target = target;
}
void BLDCMotor::setDirection(MotorDirectrion dir)
{
    this->direction = dir;
}
/**
 * @details
 *  电角度 = 机械角度 * 极对数
 *  @return [0,2PI]
 */
float BLDCMotor::electricalAngle()
{
    return _normalizeAngle(this->sensor->getPositon() * pole_pairs);
}
/**
 * 设置相电压
 * @param u_d float [-1,1]
 * @param u_q float [-1,1]
 * @param e_angle float [0,2PI]
 */
void BLDCMotor::setPhraseVoltage(float u_d, float u_q, float e_angle)
{
    float sin, cos;
    // 计算三角函数
    _sincos(e_angle, &sin, &cos);
    // 帕克逆变换
    float u_alpha = cos * u_d + -sin * u_q;
    float u_beta = sin * u_d + cos * u_q;
    // 克拉克逆变换(等幅值形式)
    float u_a = u_alpha;
    float u_b = (-1 * u_alpha + M_SQRT3 * u_beta) / 2;
    float u_c = -(u_a + u_b);
    // 设置相电压
    driver->setPhraseVoltage(u_a, u_b, u_c);
}

void BLDCMotor::open_loop_voltage_control(float target_ud, float target_uq)
{
    float e_angle = this->electricalAngle();
    float voltage_ud = _constrain(-limit_voltage, target_ud, limit_voltage);
    float voltage_uq = _constrain(-limit_voltage, target_uq, limit_voltage);
    float u_d = _constrain(-1, voltage_ud / power_supply_voltage, 1);
    float u_q = _constrain(-1, voltage_uq / power_supply_voltage, 1);
    this->setPhraseVoltage(u_d, u_q, e_angle); // 72us
    // unsigned long start = micros();
    // unsigned long dt = micros() - start;
    // static uint8_t idx = 0;
    // if (++idx % 15 == 0 && buffer_empty())
    // {
    //     idx = 0;
    //     buf_len += sprintf(buffer, "0,%d\n", dt);
    // }
    // return;
    // static uint8_t hfi_idx = 0;
    // static int8_t hfi_sign = 0;
    // float hfi_ud = hfi_sign * power_supply_voltage * 0.1;
    // //
    // // return;
    // static CurrentAB hfi_currentAB_pre;
    // static LowPassFilter pll_lpf{10};
    // static PIDControler pll_pi{10000, 0, 0, 1e10, 0};
    // static ConcreteTimer pll_imer = ConcreteTimer();
    // static float val = 0;
    // static float speed = 0;
    // if (++hfi_idx % 2 == 0)
    // {
    //     hfi_idx = 0;
    //     hfi_sign = hfi_sign < 0 ? +1 : -1;
    //     CurrentAB hfi_currentAB_now = this->currentSensor->getCurrentAB();
    //     float sin, cos;
    //     _sincos(e_angle, &sin, &cos);
    //     float error = -(hfi_currentAB_now.alpha - hfi_currentAB_pre.alpha) * sin + (hfi_currentAB_now.beta - hfi_currentAB_pre.beta) * cos;
    //     speed = pll_pi(pll_lpf(error));
    //     val += speed * pll_imer.dt_s();
    //     hfi_currentAB_pre = hfi_currentAB_now;
    // }
    // static uint8_t idx = 0;
    // if (++idx % 15 == 0 && buffer_empty())
    // {
    //     idx = 0;
    //     buf_len += sprintf(buffer, "0,%.2f,%.2f,%.2f\n", this->electricalAngle(), _normalizeAngle(val), speed);
    // }
}
/**
 * 获取Q轴电流
 */
CurrentDQ BLDCMotor::getCurrentDQ()
{
    CurrentDQ i = this->currentSensor->getCurrentDQ(this->electricalAngle()); // 75us
    return {
        .d = this->current_d_filter(i.d), // TODO: 测试新旧滤波器差异
        .q = this->current_q_filter(i.q),
    };
}
/**
 * 电流闭环控制
 */
void BLDCMotor::close_loop_current_control(float target)
{
    CurrentDQ current = this->getCurrentDQ(); // 77us
    float target_i_d = 0;
    float target_i_q = _constrain(-limit_current, target, limit_current);
    float error_d = target_i_d - current.d;
    float error_q = target_i_q - current.q;
    float u_d = this->pid_id_controller(error_d); //  8us
    float u_q = this->pid_iq_controller(error_q); //  8us
    this->open_loop_voltage_control(u_d, u_q);    // 88us
}
/**
 * 获取机械角度
 */
float BLDCMotor::shaftVelocity()
{
    return shaft_velocity_filter(this->sensor->getVelocity());
}
void BLDCMotor::close_loop_velocity_current_control(float target)
{
    float target_velocity = _constrain(-limit_velocity, target, limit_velocity);
    float current_velocity = this->shaftVelocity();
    float error = target_velocity - current_velocity;
    float i_q = this->direction * this->pid_velocity_controller(error);
    this->close_loop_current_control(i_q);
}
/**
 * 获取机械角度
 */
float BLDCMotor::shaftAngle()
{
    return shaft_angle_filter(this->sensor->getPositons());
}

void BLDCMotor::close_loop_position_current_control(float target)
{
    float target_position = target;
    float current_position = this->shaftAngle();
    float error = target_position - current_position;
    float i_q = this->direction * this->pid_position_controller(error);
    this->close_loop_current_control(i_q);
}

void BLDCMotor::close_loop_position_velocity_current_control(float target)
{
    float target_position = target;
    float current_position = this->shaftAngle();
    float error = target_position - current_position;
    float velocity = this->direction * this->pid_position_controller(error);
    this->close_loop_velocity_current_control(velocity);
}