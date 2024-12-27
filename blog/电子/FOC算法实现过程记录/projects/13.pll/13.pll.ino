#include <Arduino.h>
#include <Wire.h>
#include "BLDCMotor.hpp"
#include "BLDCDriver.hpp"
#include "Sensor.hpp"
#include "foc_utils.h"
#include "communication.hpp"
#include "arduino/ArduinoBLDCDriver.hpp"
#include "arduino/ArduinoCurrentSensor.hpp"
#include "arduino/AS5600Sensor.hpp"
#include "Pll.h"

BLDCMotor motor = BLDCMotor(7, 12);
AS5600Sensor *sensor = new AS5600Sensor();
BLDCDriver *driver = new ArduinoBLDCDriver(5, 9, 6, 8);
CurrentSensor *currentSensor = new ArduinoCurrentSensor(A0, A2, 0.01f, 50);

void setup()
{
  Serial.begin(115200);
  motor.connectDriver(driver);
  motor.connectSensor(sensor);
  motor.connectCurrentSensor(currentSensor);
  motor.initFOC();
  motor.setMode(BLDCControlMode::Current);
}
void decode_message();
Timer *tim = new ConcreteTimer();
void loop()
{
  motor.loopFOC();
  decode_message();
  send_message();
  static uint8_t cnt = 0;
  if (++cnt % 15 == 0 && buffer_empty())
  {
    cnt = 0;
    buf_len += sprintf(buffer, "0,%.2f,%.2f\n", sensor->position_now, _normalizeAngle(sensor->pll.value));
  }
}

void decode_message()
{
  if (Serial.available())
  {
    uint8_t cmd = Serial.read();
    float val = Serial.parseFloat();
    while (Serial.read() != '\n')
      ;
    switch (cmd)
    {
    case 'm':
      motor.setMode((BLDCControlMode)val);
      break;
    case 't':
      motor.setTarget(val);
      break;
    case 'l':
      motor.current_d_filter.Tms = val;
      motor.current_q_filter.Tms = val;
      break;
    case 'p':
      motor.pid_id_controller.Kp = val;
      motor.pid_iq_controller.Kp = val;
      motor.pid_id_controller.reset();
      motor.pid_iq_controller.reset();
      break;
    case 'i':
      motor.pid_id_controller.Ki = val;
      motor.pid_iq_controller.Ki = val;
      motor.pid_id_controller.reset();
      motor.pid_iq_controller.reset();
      break;
    case 'd':
      motor.pid_id_controller.Kd = val;
      motor.pid_iq_controller.Kd = val;
      motor.pid_id_controller.reset();
      motor.pid_iq_controller.reset();
      break;
    default:
      break;
    }
  }
}