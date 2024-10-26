#include "Command.hpp"
#include "BLDCMotor.hpp"
void Command::connectMotor(BLDCMotor *motor)
{
    this->motor = motor;
}
void Command::connectSerial(HardwareSerial *serial)
{
    this->serial = serial;
}
void Command::update()
{
    while (this->serial->available())
        this->receive(this->serial->read());
    PID_Configer::update(); // for send data
}
void Command::send(uint8_t byte)
{
    this->serial->write(byte);
}
void Command::onSetKp(uint8_t ch, float Kp)
{
    switch (ch)
    {
    case 1:
        this->motor->pid_id_controller.K_p = Kp;
        this->motor->pid_iq_controller.K_p = Kp;
        this->motor->pid_id_controller.reset();
        this->motor->pid_iq_controller.reset();
        break;
    case 2:
        this->motor->pid_velocity_controller.K_p = Kp;
        this->motor->pid_velocity_controller.reset();
        break;
    case 3:
        this->motor->pid_position_controller.K_p = Kp;
        this->motor->pid_position_controller.reset();
    default:
        break;
    }
}
void Command::onSetKi(uint8_t ch, float Ki)
{
    switch (ch)
    {
    case 1:
        this->motor->pid_id_controller.K_i = Ki;
        this->motor->pid_iq_controller.K_i = Ki;
        this->motor->pid_id_controller.reset();
        this->motor->pid_iq_controller.reset();
        break;
    case 2:
        this->motor->pid_velocity_controller.K_i = Ki;
        this->motor->pid_velocity_controller.reset();
        break;
    case 3:
        this->motor->pid_position_controller.K_i = Ki;
        this->motor->pid_position_controller.reset();
    default:
        break;
    }
}
void Command::onSetKd(uint8_t ch, float Kd)
{
    switch (ch)
    {
    case 1:
        this->motor->pid_id_controller.K_d = Kd;
        this->motor->pid_iq_controller.K_d = Kd;
        this->motor->pid_id_controller.reset();
        this->motor->pid_iq_controller.reset();
        break;
    case 2:
        this->motor->pid_velocity_controller.K_d = Kd;
        this->motor->pid_velocity_controller.reset();
        break;
    case 3:
        this->motor->pid_position_controller.K_d = Kd;
        this->motor->pid_position_controller.reset();
    default:
        break;
    }
}
void Command::onSetLimit(uint8_t ch, float limit)
{
    switch (ch)
    {
    case 1:
        this->motor->pid_id_controller.output_limit = limit;
        this->motor->pid_iq_controller.output_limit = limit;
        this->motor->pid_id_controller.reset();
        this->motor->pid_iq_controller.reset();
        break;
    case 2:
        this->motor->pid_velocity_controller.output_limit = limit;
        this->motor->pid_velocity_controller.reset();
        break;
    case 3:
        this->motor->pid_position_controller.output_limit = limit;
        this->motor->pid_position_controller.reset();
    default:
        break;
    }
}
void Command::onSetROC(uint8_t ch, float roc)
{
    switch (ch)
    {
    case 1:
        this->motor->pid_id_controller.output_roc_limit = roc;
        this->motor->pid_iq_controller.output_roc_limit = roc;
        this->motor->pid_id_controller.reset();
        this->motor->pid_iq_controller.reset();
        break;
    case 2:
        this->motor->pid_velocity_controller.output_roc_limit = roc;
        this->motor->pid_velocity_controller.reset();
        break;
    case 3:
        this->motor->pid_position_controller.output_roc_limit = roc;
        this->motor->pid_position_controller.reset();
    default:
        break;
    }
}
void Command::onSetTarget(uint8_t ch, float target)
{
    switch (ch)
    {
    case 1:
        if (this->motor->controlMode != BLDCMotor::ControlMode::Current)
            this->motor->setMode(BLDCMotor::ControlMode::Current);
        this->motor->setTarget(target);
        this->motor->target = target;
        // this->motor->pid_id_controller.reset();
        // this->motor->pid_iq_controller.reset();
        break;
    case 2:
        if (this->motor->controlMode != BLDCMotor::ControlMode::Velocity)
            this->motor->setMode(BLDCMotor::ControlMode::Velocity);
        this->motor->setTarget(target);
        // this->motor->pid_velocity_controller.reset();
        break;
    case 3:
        if (this->motor->controlMode != BLDCMotor::ControlMode::Position)
            this->motor->setMode(BLDCMotor::ControlMode::Position);
        this->motor->setTarget(target);
        // this->motor->pid_position_controller.reset();
    default:
        break;
    }
}
void Command::onDrawDragram(uint8_t ch, float target, float current)
{
}