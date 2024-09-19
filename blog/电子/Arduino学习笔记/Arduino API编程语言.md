---
title: Arduino学习笔记：Arduino API编程语言
shortTitle: Arduino API编程语言
date: 2024-09-15T20:22:00
article: true
---

## Arduino API编程语言

> <https://docs.arduino.cc/learn/starting-guide/getting-started-arduino/#main-parts>

> Arduino API，又名“Arduino 编程语言”，由基于 C/C++ 语言的几个函数、变量和结构组成。

### 主要部件

Arduino API 可以分为三个主要部分：函数、变量和结构：

- 函数： 用于控制 Arduino 板并执行计算。例如，读取或写入数字引脚的状态、映射值或使用串行通信。
- 变量： Arduino 常量、数据类型和转换。例如int，boolean，array。
- 结构： Arduino（C++）代码的元素，例如
  - 草图（`loop()`，`setup()`）
  - 控制结构（`if`，`else`，`while`，`for`）
  - 算术运算符（乘法、加法、减法）
  - 比较运算符，例如==（等于），!=（不等于），>（大于）。

Arduino API 可以说是 **C++ 编程语言的简化**，其中添加了许多用于控制 Arduino 硬件的功能。

### 程序结构

Arduino 程序的绝对最低要求是使用两个函数：

- `void setup()`
  - 此函数仅在 Arduino 通电时执行一次。
  - 在这里我们定义诸如引脚的模式（输入或输出）、串行通信的波特率或库的初始化等内容。
- `void loop()` “void” 表示执行时不返回任何内容。
  - 这是我们编写想要反复执行的代码的地方，例如根据输入打开/关闭灯，或者每隔 X 秒进行一次传感器读数。

### Sketch草图

- 在 Arduino 项目中，程序被称为“草图”。草图是您在里面编写程序的文件。
- **它具有.ino扩展名，并始终存储在同名文件夹中。**
- 该文件夹可以包含其他文件，例如可包含在草图中的头文件。

示例草图

```c
int sensorPin = A1; //define pin A1 (analog pin)
int ledPin = 2; //define pin 2 (digital pin)
int sensorValue; //create variable for storing readings

//void setup is for configurations on start up
void setup() { 
    Serial.begin(9600); //initialize serial communication
    pinMode(ledPin, OUTPUT); //define ledPin as an output
}

void loop() {
    sensorValue = analogRead(sensorPin); // do a sensor reading
    
    Serial.print("Sensor value is: "); //print a message to the serial monitor
    Serial.println(sensorValue); //print the value to the serial monitor
    
    //check if sensorValue is below 200
    if(sensorValue < 200) { 
        digitalWrite(ledPin, HIGH); //if it is, turn on the LED on pin 2.
    }
    //if sensorValue is above 200, turn off the LED
    else{ 
        digitalWrite(ledPin, LOW);
    }
}
```

### 库

Arduino 库是标准 Arduino API 的扩展，包含数千个库，包括官方的和社区贡献的。

库简化了原本复杂的代码的使用，例如读取特定传感器、控制电机或连接到互联网。

您不必自己编写所有这些代码，只需安装一个库，将其包含在代码顶部，然后使用它的任何可用功能即可。

所有 Arduino 库都是开源的，任何人都可以免费使用。

要使用库，您需要将其包含在代码顶部，如下例所示：

```c
#include <Library.h>
```

### 核心特定 API

- 每块 Arduino 开发板都需要一个“核心”或“软件包”，需要安装后才能进行编程。
- 所有软件包都包含标准 Arduino API，但也包含只能用于特定开发板的特定 API。


### 典型工作流程

要使用 IDE 将代码上传到 Arduino 开发板，通常执行以下操作：

1. **安装您的主板**- 这意味着为您的主板安装正确的“软件包”。没有软件包，您根本无法使用您的主板。安装直接在 IDE 中完成，操作快速简便。
2. 创建新的草图- 草图是您的主程序文件。在这里，我们编写一组要在微控制器上执行的指令。
3. 编译你的代码- 我们编写的代码与上传到 Arduino 时看起来并不完全一样：编译代码意味着我们会检查代码中的错误，并将其转换为二进制文件（1 和 0）。如果出现故障，你会在错误控制台中看到此信息。
4. 上传您的草图- 编译成功后，代码即可上传到您的主板。在此步骤中，我们将主板物理连接到计算机，并选择正确的串行端口。
5. 串行监视器（可选） - 对于大多数 Arduino 项目来说，了解主板上的情况非常重要。所有 IDE 中提供的串行监视器工具允许将数据从主板发送到计算机。
