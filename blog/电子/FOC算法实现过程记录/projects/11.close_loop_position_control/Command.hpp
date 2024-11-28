#ifndef _Command_H_
#define _Command_H_
#include "Arduino.h"
#include "lib/pid-configer/commander.cpp"

class BLDCMotor;

class Command : public PID_Configer
{
private:
    BLDCMotor *motor;
    HardwareSerial *serial;

public:
    void connectMotor(BLDCMotor *motor);
    void connectSerial(HardwareSerial *serial);
    void update();

private:
    void send(uint8_t byte) override;
    void onSetKp(uint8_t ch, float Kp) override;
    void onSetKi(uint8_t ch, float Ki) override;
    void onSetKd(uint8_t ch, float Kd) override;
    void onSetLimit(uint8_t ch, float limit) override;
    void onSetROC(uint8_t ch, float roc) override;
    void onSetTarget(uint8_t ch, float target) override;
    void onDrawDragram(uint8_t ch, float target, float current) override;
};

#endif