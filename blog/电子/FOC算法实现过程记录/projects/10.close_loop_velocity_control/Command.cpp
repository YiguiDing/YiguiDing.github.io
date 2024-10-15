#ifndef _Command_H_
#define _Command_H_
#include "BLDCMotor.hpp"
class Command
{
private:
    BLDCMotor *motor;

public:
    void connectMotor(BLDCMotor *motor)
    {
        this->motor = motor;
    }
    void update()
    {
        if (Serial.available() > 1)
        {
            char cmd;

            // skip \r\n
            do
                cmd = Serial.read();
            while (cmd == '\r' || cmd == '\n');
            float val = Serial.parseFloat();

            switch (cmd)
            {
            case 'T':
            case 't':
                motor->target = val;
                break;
            case 'M':
            case 'm':
                motor->setMode((ControlMode)val);
                break;
            case 'p':
                motor->pid_id_controller.K_p = val;
                motor->pid_iq_controller.K_p = val;
                motor->pid_id_controller.reset();
                motor->pid_iq_controller.reset();
                break;
            case 'i':
                motor->pid_id_controller.K_i = val;
                motor->pid_iq_controller.K_i = val;
                motor->pid_id_controller.reset();
                motor->pid_iq_controller.reset();
                break;
            case 'd':
                motor->pid_id_controller.K_d = val;
                motor->pid_iq_controller.K_d = val;
                motor->pid_id_controller.reset();
                motor->pid_iq_controller.reset();
                break;
            case 'r':
                motor->pid_id_controller.output_roc_limit = val;
                motor->pid_iq_controller.output_roc_limit = val;
                motor->pid_id_controller.reset();
                motor->pid_iq_controller.reset();
                break;
            case 'P':
                motor->pid_velocity_controller.K_p = val;
                motor->pid_velocity_controller.reset();
                break;
            case 'I':
                motor->pid_velocity_controller.K_i = val;
                motor->pid_velocity_controller.reset();
                break;
            case 'D':
                motor->pid_velocity_controller.K_d = val;
                motor->pid_velocity_controller.reset();
                break;
            case 'R':
                motor->pid_velocity_controller.output_roc_limit = val;
                motor->pid_velocity_controller.reset();
                break;
            case 'G':
            case 'g':
                motor->debug = val;
                break;
            default:
                break;
            }
        }
    }
};

#endif