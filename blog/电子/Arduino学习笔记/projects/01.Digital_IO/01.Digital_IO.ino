#include <Arduino.h>

int pin = 12;

void setup() {
  Serial.begin(9600);
  pinMode(pin, INPUT);
  digitalWrite(pin, HIGH);
}

void loop() {
  Serial.println(digitalRead(pin));
}