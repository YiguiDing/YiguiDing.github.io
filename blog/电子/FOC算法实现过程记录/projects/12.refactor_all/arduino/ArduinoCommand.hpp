#ifndef _ArduinoCommand_H_
#define _ArduinoCommand_H_

#include "../Command.hpp"
#include "Arduino.h"

class ArduinoCommand : public Command
{

public:
    HardwareSerial *serial;
    void connectSerial(HardwareSerial *serial)
    {
        this->serial = serial;
    }
    void send(uint8_t byte) override
    {
        this->serial->write(byte);
    }
    void update() override
    {
        while (this->serial->available())
            this->onReceive(this->serial->read());
        PIDConfiger::update(); // for send data
    }
};

#endif
