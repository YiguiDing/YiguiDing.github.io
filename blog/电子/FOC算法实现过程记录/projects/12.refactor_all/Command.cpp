#include "Command.hpp"
#include "BLDCMotor.hpp"
void Command::connectMotor(BLDCMotor *motor)
{
    this->motor = motor;
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
    case 4:
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
    case 4:
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
    case 4:
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
    case 4:
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
    case 4:
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
        if (this->motor->controlMode != BLDCControlMode::Current)
            this->motor->setMode(BLDCControlMode::Current);
        this->motor->setTarget(target);
        this->motor->target = target;
        // this->motor->pid_id_controller.reset();
        // this->motor->pid_iq_controller.reset();
        break;
    case 2:
        if (this->motor->controlMode != BLDCControlMode::VelocityCurrent)
            this->motor->setMode(BLDCControlMode::VelocityCurrent);
        this->motor->setTarget(target);
        // this->motor->pid_velocity_controller.reset();
        break;
    case 3:
        if (this->motor->controlMode != BLDCControlMode::PositionCurrent)
            this->motor->setMode(BLDCControlMode::PositionCurrent);
        this->motor->setTarget(target);
        // this->motor->pid_position_controller.reset();
        break;
    case 4:
        if (this->motor->controlMode != BLDCControlMode::PositionVelocityCurrent)
            this->motor->setMode(BLDCControlMode::PositionVelocityCurrent);
        this->motor->setTarget(target);
        break;
        // this->motor->pid_position_controller.reset();
    default:
        break;
    }
}
void Command::onDrawDragram(uint8_t ch, float target, float current)
{
}