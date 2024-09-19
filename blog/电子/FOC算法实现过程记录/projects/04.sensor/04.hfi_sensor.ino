#include <Arduino.h>
// #include <Wire.h>
// #include "BLDCMotor.hpp"
// #include "BLDCDriver.hpp"
// #include "Sensor.hpp"
// #include "foc_utils.h"
// #include "typedef.h"

// BLDCMotor motor = BLDCMotor();
// BLDCDriver driver = BLDCDriver(
// #define M1_En 8
// #define M1_Ua 5
// #define M1_Ub 9
// #define M1_Uc 6
//   // init driver
//   []() {
//     pinMode(M1_En, OUTPUT);  // enable
//     pinMode(M1_Ua, OUTPUT);  // a
//     pinMode(M1_Ub, OUTPUT);  // b
//     pinMode(M1_Uc, OUTPUT);  // c
//   },
//   // enable or disable driver
//   [](bool enable) {
//     digitalWrite(M1_En, enable ? HIGH : LOW);  // enable
//   },
//   // set pwm to driver
//   [](int16_t u_a, int16_t u_b, int16_t u_c) {
//     // [-32768,32767] => [0,255]
//     // 大多数引脚上的 PWM 信号频率约为490 Hz
//     analogWrite(M1_Ua, (u_a + _INT16_N_ONE_) / 255);
//     analogWrite(M1_Ub, (u_b + _INT16_N_ONE_) / 255);
//     analogWrite(M1_Uc, (u_c + _INT16_N_ONE_) / 255);
//   });

// Sensor sensor = Sensor(
// #define AS5600_ADDR 0x36
// #define AS5600_RAW_ANGLE 0x0c
// #define AS5600_ANGLE 0x0e
//   []() {
//     Wire.begin();
//   },
//   []() {
//     Wire.beginTransmission(AS5600_ADDR);
//     Wire.write(AS5600_ANGLE);
//     Wire.endTransmission(false);
//     Wire.requestFrom(AS5600_ADDR, 2);
//     uint8_t data[2];
//     data[1] = Wire.read();
//     data[0] = Wire.read();
//     // Wire.endTransmission(true);
//     return *(uint16_t *)data;
//   });

void setup() {
  // Serial.begin(9600);
  // Serial.println("123");
  // motor.connectDriver(&driver);
  // motor.connectSensor(&sensor);
  // motor.initFOC();
  pinMode(13, OUTPUT);
  digitalWrite(13, LOW);
}

uint16_t angle_s = 0;
uint16_t angle_e = 0;
void loop() {
  // angle_s += 200;
  // angle_e = angle_s * 7;
  // Serial.print(angle_e);
  // Serial.print('\n');
  // motor.loopFOC();
  // motor.setPhraseVoltage(0, 0.2 * 65535, angle_e);
  // digitalWrite(13, HIGH);
  // delay(1000);
  // digitalWrite(13, LOW);
  // delay(1000);

}