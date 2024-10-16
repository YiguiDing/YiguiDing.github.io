#ifndef _Command_H_
#define _Command_H_
#include "BLDCMotor.hpp"
#include "arduino.h"
#include "lib/pid-configer/commander.cpp"

class Command : public PID_Configer
{
private:
    BLDCMotor *motor;
    Serial_ *serial;

public:
    void connectMotor(BLDCMotor *motor)
    {
        this->motor = motor;
    }
    void connectSerial(Serial_ *serial)
    {
        this->serial = serial;
    }
    void update()
    {
        while (this->serial->available())
            this->receive(this->serial->read());
    }

private:
    void send(uint8_t byte) override
    {
        this->serial->write(byte);
    }
    void onSetKp(uint8_t ch, float Kp) override
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
    void onSetKi(uint8_t ch, float Ki) override
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
    void onSetKd(uint8_t ch, float Kd) override
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
    void onSetLimit(uint8_t ch, float limit) override
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
    void onSetROC(uint8_t ch, float roc) override
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
    void onSetTarget(uint8_t ch, float target) override
    {
        switch (ch)
        {
        case 1:
            this->motor->controlMode = ControlMode::Current;
            this->motor->target = target;
            this->motor->pid_id_controller.reset();
            this->motor->pid_iq_controller.reset();
            break;
        case 2:
            this->motor->controlMode = ControlMode::Velocity;
            this->motor->target = target;
            this->motor->pid_velocity_controller.reset();
            break;
        case 3:
            this->motor->controlMode = ControlMode::Position;
            this->motor->target = target;
            this->motor->pid_position_controller.reset();
        default:
            break;
        }
    }
};

#endif