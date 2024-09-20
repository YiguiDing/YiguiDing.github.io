#include <Arduino.h>
#include "Timer.hpp"

Timer *timer1 = new Timer();
Timer *timer2 = new Timer();
Timer *timer3 = new Timer();
Timer *timer4 = new Timer();

void setup()
{
  Serial.begin(115200);
  timer1->dt_ms();
  timer2->dt_ms();
  timer3->dt_ms();
  timer4->dt_ms();
}
uint8_t idx = 1;
uint8_t flag = 0;
uint16_t dt[4] = {0};
void loop()
{
  if (idx % 10 == 0)
    dt[0] = timer1->dt_ms(); // 约100ms调用一次
  if (idx % 20 == 0)
    dt[1] = timer2->dt_ms(); // 约200ms调用一次
  if (idx % 40 == 0)
    dt[2] = timer3->dt_ms(); // 约400ms调用一次
  if (idx % 80 == 0)
    dt[3] = timer4->dt_ms(); // 约800ms调用一次

  Serial.print(dt[0]); // 输出约100
  Serial.print(',');
  Serial.print(dt[1]); // 输出约200
  Serial.print(',');
  Serial.print(dt[2]); // 输出约400
  Serial.print(',');
  Serial.print(dt[3]); // 输出约800
  Serial.print('\n');
  idx %= 160;
  idx += 1;
  delay(10);
}
