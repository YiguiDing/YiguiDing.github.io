#ifndef _Command_H_
#define _Command_H_
#include "lib/pid-configer/PIDConfiger.cpp"

class BLDCMotor;

class Command : public PIDConfiger
{
public:
    virtual void send(uint8_t byte);
    virtual void update();

public:
    BLDCMotor *motor;
    void connectMotor(BLDCMotor *motor);

private:
    void onSetKp(uint8_t ch, float Kp);
    void onSetKi(uint8_t ch, float Ki);
    void onSetKd(uint8_t ch, float Kd);
    void onSetLimit(uint8_t ch, float limit);
    void onSetROC(uint8_t ch, float roc);
    void onSetTarget(uint8_t ch, float target);
    void onDrawDragram(uint8_t ch, float target, float current);
};

#endif