#include <Arduino.h>
#include "foc_utils.h"
#include "typedef.h"

void setup() {
  Serial.begin(9600);
}

uint16_t a = 0;

void loop() {
  a += 1500;
  if (a > _2PI_) a -= _2PI_;
  Serial.print(_sin(a));
  Serial.print(',');
  Serial.print(_cos(a));
  Serial.print('\n');
}