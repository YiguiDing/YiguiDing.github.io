---
title: Arduino学习笔记：Arduino编程语言实践
shortTitle: Arduino编程语言实践
date: 2024-09-15T20:42:00
article: false 
index: true
---

## Arduino编程语言实践


### 数字输入/输出

- digitalRead()
- digitalWrite()
- pinMode()


**低阻抗输出**

- `pinMode(pin, OUTPUT )`
- Atmega 引脚可以为其他设备/电路提供（提供正电流）或吸收（提供负电流）高达 40 mA（毫安）的电流。
- 这个电流足以点亮 LED（不要忘记串联电阻），或运行许多传感器，但不足以运行大多数继电器、螺线管或电机。


```c
#include <Arduino.h>
int ledPin = 13;  // LED connected to digital pin 13
void setup() {
  pinMode(ledPin, OUTPUT);  // sets the digital pin 13 as output
}
void loop() {
  // 闪烁的LED灯
  digitalWrite(ledPin, HIGH);
  digitalWrite(ledPin, LOW);
}
```

**高阻抗输入**

- `pinMode(pin, INPUT)`
- Arduino (Atmega) 引脚默认为高阻抗输入,
- 因此无需使用 `pinMode` 明确声明



**低阻抗输入(上拉输入)**
- `pinMode(pin, INPUT_PULLUP)`
- Atmega 芯片内置有 20K 上拉电阻，可通过软件访问。
- 上拉电阻提供足够的电流，使连接到已配置为输入的引脚的 LED 微弱地发光。
- 上拉电阻由控制引脚是高电平还是低电平的相同寄存器（内部芯片内存位置）控制。
- 因此，如果引脚配置为在引脚为输入时打开上拉电阻，则如果随后使用 pinMode() 将引脚切换为输出，则该引脚将配置为高电平。
  ```c
  pinMode(pin, INPUT); // 低阻抗输入模式
  digitalWrite(pin, HIGH); // 连接上拉电阻,实现输出高电平
  pinMode(pin, OUTPUT); // 低阻抗输出模式
  // 输出将保持高电平
  ```
- 这在另一方面也有效，如果使用 pinMode() 将引脚切换为输入，则处于高电平状态的输出引脚将设置上拉电阻。
  ```c
  pinMode(pin, INPUT); // 低阻抗输入模式
  digitalWrite(pin, HIGH); // 连接上拉电阻,实现输出高电平
  digitalWrite(pin, LOW); // 断开上拉电阻,实现输出高阻态
  ```