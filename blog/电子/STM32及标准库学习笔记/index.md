---
title: STM32及标准库学习笔记
date: 2024-02-16 07:00:00+08:00
cover: ./assets/cover/STM32及标准库学习笔记.png
tag: [stm32]
category: [笔记, 电子]
star: true
---

# STM32及标准库学习笔记

![Alt text](assets/images/image-24.png)

## 目录

- [STM32及标准库学习笔记](#stm32及标准库学习笔记)
  - [目录](#目录)
  - [F103C8T6简介](#f103c8t6简介)
  - [F1X片上资源](#f1x片上资源)
  - [系统结构](#系统结构)
  - [引脚定义](#引脚定义)
  - [启动配置](#启动配置)
  - [工程架构](#工程架构)
  - [Hello\_World](#hello_world)
  - [标准外设库](#标准外设库)
  - [RCC](#rcc)
    - [基本介绍](#基本介绍)
    - [RCC时钟树](#rcc时钟树)
    - [标准库函数](#标准库函数)
  - [GPIO](#gpio)
    - [基本介绍](#基本介绍-1)
    - [案例代码：点灯](#案例代码点灯)
  - [中断与NVIC](#中断与nvic)
    - [基本介绍](#基本介绍-2)
    - [STM32的中断](#stm32的中断)
    - [EXTI外部中断](#exti外部中断)
    - [案例代码：光电计数器触发外部中断](#案例代码光电计数器触发外部中断)
  - [TIM定时器](#tim定时器)
    - [概念](#概念)
    - [基本定时器](#基本定时器)
    - [通用定时器](#通用定时器)
    - [高级定时器](#高级定时器)
    - [时基单元](#时基单元)
    - [输出比较](#输出比较)
    - [输入比较](#输入比较)
    - [案例：定时中断](#案例定时中断)
      - [案例：利用内部时钟源实现`setInterval(callback,ms)`](#案例利用内部时钟源实现setintervalcallbackms)
      - [案例：利用外部时钟源实现`setInterval(callback,times)`](#案例利用外部时钟源实现setintervalcallbacktimes)
    - [案例：LED呼吸灯](#案例led呼吸灯)
    - [案例：舵机驱动](#案例舵机驱动)
        - [直流电机与驱动电路](#直流电机与驱动电路)
    - [案例：定时器输出捕获——测量方波](#案例定时器输出捕获测量方波)
    - [编码器接口](#编码器接口)
    - [编码器测位置、测速案例](#编码器测位置测速案例)
  - [ADC模拟/数字转化器](#adc模拟数字转化器)

## F103C8T6简介

- 系列：主流系列STM32F1
- 内核：ARM Cortex-M3
- 主频：72MHz
- RAM：20K（SRAM）
- ROM：64K（Flash）
- 供电：2.0~3.6V（标准3.3V）
- 封装：LQFP48
- ![Alt text](assets/images/image-1.png)

![Alt text](assets/images/image-23.png)

## F1X片上资源

| 英文缩写 |        名称        |                       笔记                        |
| :------: | :----------------: | :-----------------------------------------------: |
|   NVIC   | 嵌套向量中断控制器 | 系统外设，内核中管理中断的设备，如配置中断优先级  |
| SysTick  |   系统滴答定时器   |   系统外设，内核定时器，给操作系统提供定时服务    |
|   RCC    |   复位和时钟控制   |    用于对系统时钟进行配置、开启其他模块的时钟     |
|   GPIO   |      通用IO口      |            通用IO口，可点灯，读取按键             |
|   AFIO   |      复用IO口      |   复用IO口，可实现复用端口重定义和中断端口配置    |
|   EXTI   |      外部中断      |         配置好外部中断后，可用于触发中断          |
|   TIM    |       定时器       | 可用于实现定时中断、测频率、生成PWM、配置成编码器 |
|   ADC    |     模数转换器     |    内置12位模数转换器 ,可直接读取IO口模拟电压     |
|   DMA    |    直接内存访问    |       配置好后，可替代CPU完成搬运数据的工作       |
|  USART   | 同步/异步串口通信  |        UART是同步串口 USART是同步/异步串口        |
|   I2C    |      I2C通信       |    内置控制器，实现了直接使用硬件输出时序波形     |
|   SPI    |      SPI通信       |                       同上                        |
|   CAN    |      CAN通信       |                       同上                        |
|   USB    |      USB通信       |                  USB从机模式接口                  |
|   RTC    |      实时时钟      |   实现年月日时分秒的计时功能，可接外部配用电池    |
|   CRC    |      CRC校验       |           直接通过硬件电路完成数据校验            |
|   PWR    |      电源控制      |                可让芯片睡眠，省电                 |
|   BKP    |     备份寄存器     |      在断电时通过备用电池完成保持数据的操作       |
|   IWDG   |     独立看门狗     |       在程序卡死一定的时间后，自动复位芯片        |
|   WWDG   |     窗口看门狗     |                       同上                        |
|   DAC    |     数模转换器     |             可在IO口直接输出模拟电压              |
|   SDIO   |      SD卡接口      |                     读写SD卡                      |
|   FSMC   | 可变静态存储控制器 |                     扩展内存                      |
| USB OTG  |    USB主机接口     |        USB主机模式接口，可读写其他USB设备         |

## 系统结构

**几个重要总线**

- `ICode总线` 连接Flash闪存 主要用来加载指令（Instruction）如：程序
- `DCode总线` 连接Flash闪存 主要用来加载数据（Data）如：常量、调试参数
- `System总线` 系统总线，通过总线矩阵连接到其他部分，如：SRAM(内存) FSMC
- `AHB系统总线` AHB(先进高性能)总线，挂载其他最基本的外设和高性能外设 如：复位、时钟控制、SDIO
  - `APB2` APB(先进外设)总线 连接一般外设 `频率一般72Mhz` `连接重要的外设` 如：高级定时器，GPIO，ADC
  - `APB1` APB(先进外设)总线 连接一般外设 `频率一般36Mhz` `连接次要的外设` 如：普通定时器，USB
- `DMA总线` DMA(直接内存访问)总线 DMA外设可以通过该总线代替CPU完成数据搬运工作，如：从ADC模数转换外设中的读取数值复制到内存中

- ![Alt text](assets/images/image-2.png)

## 引脚定义

**特殊端口笔记**

|  引脚号  | 名称             | 默认功能    | 笔记                                               |
| :------: | :--------------- | :---------- | :------------------------------------------------- |
| **电源** |
|    1     | VBAT             | VBAT        | 可接3v备用电池给RTC时钟和备份寄存器供电            |
|   8-9    | VSSA VDDA        | VSSA VDDA   | 内部模拟电路供电                                   |
|  23-24   | VSS_1 VDD_1      | VSS_1 VDD_1 | 主电源                                             |
|  35-36   | VSS_2 VDD_2      | VSS_2 VDD_2 | 主电源                                             |
|  47-48   | VSS_3 VDD_3      | VSS_3 VDD_3 | 主电源                                             |
| **时钟** |
|    3     | PC14-OSC32-IN    | PC14        | 默认为PC14口 可外接32.768kMhz                      |
|    4     | PC15-OSC32-OUT   | PC15        | 默认为PC15口 可外接32.768kMhz                      |
|    5     | OSC_IN           | OSC_IN      | 默认为时钟输入 一般为8M                            |
|    6     | OSC_OUT          | OSC_OUT     | 默认为时钟输入 一般为8M                            |
| **复位** |
|    7     | NRST             | NRST        | 低电平复位 N表示低电平                             |
| **调试** |
|    34    | PA13             | JTMS/SWDIO  | 调试口 JTAG调试线1 / SWD调试线1                    |
|    37    | PA14             | JTCK/SWCLK  | 调试口 JTAG调试线2 / SWD调试线2（共两根线）        |
|    38    | PA15             | JTDI        | 调试口 JTAG调试线3                                 |
|    39    | PB3              | JTDO        | 调试口 JTAG调试线4                                 |
|    40    | PB4              | NJTRST      | 调试口 JTAG调试线5（共五根线）                     |
| **其他** |
|    2     | PC13-TARMPER-RTC | PC13        | 默认为PC13口 另外可以实现侵入检测或输出RTC校准时钟 |
|    10    | PA0-WKUP         | PA0         | 默认PA0 兼具唤醒功能，用于唤醒待机的STM32          |
|    20    | BP2              | BP2/BOOT1   | BOOT1用来配置启动模式，配置成功后退化为BP2         |
|    44    | BOOT0            | BOOT0       | BOOT0用来配置启动模式                              |

**所有引脚**

![Alt text](assets/images/image-3.png)

上图备注：

- 红色：电源
- 蓝色：最小系统相关
- 绿色：IO口 功能口
- 类型：S电源 I输入 O输出
- IO口电平：默认为3.3v；FT表示能够容忍5v电压
- 主功能： 该端口的默认功能
- 默认复用功能：该端口支持的其他功能
- 重定义功能：可将该端口上的功能重新映射到其他端口上

## 启动配置

- `BOOT1=x BOOT0=0` 从主闪存中加载程序并执行
- `BOOT1=0 BOOT0=1` 从系统存储器加载BootLoader程序并执行,该程序把从串口接收的数据写入主闪存，完成程序的烧录
- `BOOT1=1 BOOT0=1` 从内置SRAM启动，用于程序调试
- ![Alt text](assets/images/image-4.png)

## 工程架构

**工程架构**

![Alt text](assets/images/image.png)

**项目结构**

```bash
.
|---Startup # 启动Stm32所需的最基本的几个文件,这几个文件可以在标准外设库中找到
|   +---startup*stm32f10x*??.s # 汇编启动文件，主要定义复位中断函数，在其中调用SystemInit();main();
|   +---system_stm32f10x.h
|   +---system_stm32f10x.c # 定义了系统初始化函数SystemInit()负责初始化寄存器
|   +---core_cm3.h # 内核寄存器描述
|   +---core_cm3.c # 内核寄存器配置函数
|   \---stm32f10x.h # 外设寄存器描述，当定义USE_STDPERIPH_DRIVER后，将自动包含stm32f10x_conf.h
|
|---StdPeriph_Lib # 标准外设库
|   +---misc.h # 内核中的外设
|   +---misc.c
|   +---stm32f10x_gpio.h # GPIO外设
|   +---stm32f10x_gpio.c
|   \---......略
|
|---User
|   +---main.c # 用户代码
|   +---stm32f10x_conf.h # 外设库配置文件，用来#include<标准外设>
|   +---stm32f10x_it.h
|   \---stm32f10x_it.c # 各种中断函数
```

## Hello_World

**寄存器点灯**

```cpp
#include "stm32f10x.h" // 包含了外设寄存器描述

int main(void)
{
    // 1.通过RCC寄存器 开启GPIO_C的时钟
    RCC->APB2ENR = 0x00000010;
    // 2.通过GOPIO_C_CRH高寄存器 配置13号口的模式 为通用推挽输出模式、最大速度为50Mhz
    GPIOC->CRH = 0x00300000;
    // 3.通过GPIO_C_ODR输出数据寄存器 配置C13口输出低电平
    GPIOC->ODR &= ~0x00002000;
    while (1)
    {
    }
}
```

**标准库点灯**

```cpp
// 定义 USE_STDPERIPH_DRIVER 后
// `stm32f10x.h` 会通过条件编译自动包含 `stm32f10x_conf.h` 文件
// 要在 `stm32f10x_conf.h` 中配置： `#include "stm32f10x_gpio.h"` 还有rcc
#define USE_STDPERIPH_DRIVER
#include "stm32f10x.h" // 包含了外设寄存器描述

int main(void)
{
    // 1. 启用APB2_GPIOC外设时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOC, ENABLE);
    // 2. 初始化GPIOC_13 为推挽输出、速度50MHz
    GPIO_InitTypeDef GPIO_InitStruct = {GPIO_Pin_13, GPIO_Speed_50MHz, GPIO_Mode_Out_PP};
    GPIO_Init(GPIOC, &GPIO_InitStruct);
    // 3.设置输出低电平
    GPIO_ResetBits(GPIOC, GPIO_Pin_13);
    while (1)
    {
    }
}
```

## 标准外设库

```bash
- STM32F10x_StdPeriph_Lib_V3.5.0
  - Libraries/ `标准库`
    - CMSIS/CM3/ `CMSIS表示：通用微控制器软件接口标准; CM3表示：Cortex-M3`
      - /CoreSupport/ `内核支持`
        - core_cm3.h `内核寄存器描述文件`
        - core_cm3.c `内核寄存器配置函数`
      - DeviceSupport/ `外设支持`
        - ST/STM32F10x/ `ST公司产品系列`
          - startup/ `启动文件,汇编代码,定义了复位中断和其他中断函数，复位中断函数中调用了SystemInit()和main()`
            - arm/ `ARM公司生产的芯片`
              - startup_stm32f10x_ld_vl.s
              - startup_stm32f10x_md_vl.s
              - startup_stm32f10x_hd_vl.s
              - startup_stm32f10x_ld.s
              - startup_stm32f10x_md.s
              - startup_stm32f10x_hd.s
              - startup_stm32f10x_xl.s
              - startup_stm32f10x_cl.s
          - stm32f10x.h `外设寄存器描述文件；当定义了USE_STDPERIPH_DRIVER后，将自动包含stm32f10x_conf.h文件，该文件用于包含标准外设库`
          - system_stm32f10x.c `定义了SystemInit()负责初始化寄存器`
          - system_stm32f10x.h
    - STM32F10x_StdPeriph_Driver/ `标准外设驱动`
      - inc/ `头文件`
        - misc.h `内核中的外设`
        - stm32f10x_dac.h
        - stm32f10x_gpio.h
        - ...略
      - src/ `具体实现`
        - ...略
      - Release_Notes.html
- Project/ `官方提供的工程案例和模板，可以作为使用库函数的参考`
  - STM32F10x_StdPeriph_Examples/ `案例`
  - STM32F10x_StdPeriph_Template/ `模板`
    - RIDE/
    - EWARM/
    - HiTOP/
    - MDK-ARM/
    - TrueSTUDIO/
    - stm32f10x_conf.h `用来配置标准外设库头文件的配置文件，同时包含一个所有库函数都需要的参数检查函数定义`
    - stm32f10x_it.c `用来存放中断函数`
    - stm32f10x_it.h
    - system_stm32f10x.c
    - main.c 主函数
    - Release_Notes.html 发布说明
- Utilities/ `官方用于测评STM32的程序`
- Release_Notes.html `发布说明`
- stm32f10x_stdperiph_lib_um.chm `帮助文档`
```

**启动文件的选择——型号分类及缩写**

| 文件                      | 缩写                  | 释义               | 释义     | 型号              |
| :------------------------ | :-------------------- | ------------------ | -------- | ----------------- |
| startup_stm32f10x_ld_vl.s | LD_VL(Value Line)     | 小容量产品超值系列 | 16~32K   | STM32F100         |
| startup_stm32f10x_md_vl.s | MD_VL(Value Line)     | 中容量产品超值系列 | 64~128K  | STM32F100         |
| startup_stm32f10x_hd_vl.s | HD_VL(Value Line)     | 大容量产品超值系列 | 256~512K | STM32F100         |
| startup_stm32f10x_ld.s    | LD(Low Density)       | 小容量产品         | 16~32K   | STM32F101/102/103 |
| startup_stm32f10x_md.s    | MD(Medium Density)    | 中容量产品         | 64~128K  | STM32F101/102/103 |
| startup_stm32f10x_hd.s    | HD(High Density)      | 大容量产品         | 256~512K | STM32F101/102/103 |
| startup_stm32f10x_xl.s    | XL(Extra Large)       | 加大容量产品       | 大于512K | STM32F101/102/103 |
| startup_stm32f10x_cl.s    | CL(Connectivity Line) | 互联型产品         | -        | STM32F105/107     |

## RCC

### 基本介绍

> RCC复位和时钟控制外设

**在系统结构中的位置**

- 位于AHB系统总线上
- ![Alt text](assets/images/image-11.png)

**RCC相关寄存器**

- 时钟控制寄存器 `RCC_CR`
- 时钟配置寄存器`RCC_CFGR`
- 时钟中断寄存器 `RCC_CIR`
- APB2 外设复位寄存器 `RCC_APB2RSTR`
- APB1 外设复位寄存器 `RCC_APB1RSTR`
- **AHB 外设时钟使能寄存器** `RCC_AHBENR`
- **APB2 外设时钟使能寄存器** `RCC_APB2ENR`
- **APB1 外设时钟使能寄存器** `RCC_APB1ENR`
- 备份域控制寄存器 `RCC_BDCR`
- 控制/状态寄存器 `RCC_CSR`

### RCC时钟树

**时钟树**

- 时钟树就是STM32内部产生和配置时钟并把配置好的时钟发送到各个外设的系统。
- 时钟是所有外设运行的基础，所以时钟也是最先需要配置的东西
- 在启动文件中,main函数之前，还有一个SystemInit()函数，该函数用于配置时钟树。

**时钟产生流程**

- AHB左侧为时钟产生电路、右侧为时钟分配电路
- 在时钟产生电路，有四个震荡源
  - 内部8Mhz高速RC振荡器（提供系统时钟）
  - 外部4~16Mhz高速石英晶振（提供系统时钟；一般8M）
  - 外部32.768khz低速晶振（给RTC电路提供时钟）
  - 内部40Khz低速RC振荡器（给看门狗提供时钟）
- 高速晶振用于提供系统时钟，AHB、APB1、APB2的时钟来源
- 内外高速时钟的选择
  - 内外的高速晶振都可使用，只是石英振荡器比RC更稳定，
  - 系统简单、不需要精确时钟则可使用内部RC振荡器
- SystemInit()默认配置时钟的流程
  - 时钟产生
    - 启动内部8Mhz
    - 选择内部时钟为系统时钟，暂时以内部8Mhz运行
    - ![Alt text](assets/images/image-26.png)
    - 启动外部时钟，
    - 配置外部时钟进入PLLMUL锁相环进行倍频得到8x9=72Mhz时钟
    - 待锁相环输出稳定后，选择锁相环输出为系统时钟。
    - ![Alt text](assets/images/image-27.png)
    - 这样系统时钟就从8Mhz切换到了72Mhz
  - 时钟分配
    - 系统时钟SYSCLK（72Mhz or 8Mhz）进入AHB总线预分频器
    - 配置的预分频器系数为1，所以AHB得到时钟为SYSCLK/1=72Mhz
    - ![Alt text](assets/images/image-28.png)
    - AHB得到的时钟再分配给`APB1`总线预分频器
    - 配置的预分频器系数为2，所以APB1得到时钟为SYSCLK/2=36Mhz
    - ![Alt text](assets/images/image-29.png)
  - 经过APB1预分频器后得到的时钟会再分配给通用定时器和基本定时器（定时器2~7）
    - 分配之前会做判断，
      - APB1预分配系数为1则直接分配，
      - 否则x2再分配`（这里就是这种情况）`
      - 保证定时器得到的系统时钟为72Mhz
    - ![Alt text](assets/images/image-30.png)
  - AHB得到的时钟再分配给`APB2`总线内部预分频器
  - 配置的预分频器系数为1，所以APB2得到时钟为SYSCLK/1=72Mhz
  - ![Alt text](assets/images/image-31.png)
  - 经过APB2预分配器后得到的时钟最终会送至高级定时器定时器1和8
    - 分配之前会做判断，
      - APB2预分配系数为1则直接分配，`（这里就是这种情况）`
      - 否则x2再分配
      - 保证定时器得到的系统时钟为72Mhz
    - ![Alt text](assets/images/image-32.png)

**可能出现的问题**

> 如果外部时钟出现问题，那么系统时钟就无法从8Mhz切换到72Mhz，系统时钟就比预期慢了9倍，定时1秒，实际为9秒。

**CSS(Clock Security System-时钟安全系统)**

- 负责检测外部运行状态，
- 当外部时钟失效，就把外部时钟切换为内部时钟
- 在高级定时器中，
  - 当CSS检测到外部时钟失效时，
  - 将发送一个时钟失效事件给高级定时器的刹车控制电路，
  - 控制输出比较电路控制的电机立即停止，防止出现意外。

![Alt text](assets/images/image-25.png)

### 标准库函数

:::
**RCC外设所有函数功能描述**

> 感觉大概知道下有哪些功能就行了

| 函数名 (加粗表示常用)         | 描述                                 |
| :---------------------------- | :----------------------------------- |
| RCC_DeInit                    | 将外设 RCC 寄存器重设为缺省值        |
| RCC_HSEConfig                 | 设置外部高速晶振（HSE）              |
| RCC_WaitForHSEStartUp         | 等待 HSE 起振                        |
| RCC_AdjustHSICalibrationValue | 调整内部高速晶振（HSI）校准值        |
| RCC_HSICmd                    | 使能或者失能内部高速晶振（HSI）      |
| RCC_PLLConfig                 | 设置 PLL 时钟源及倍频系数            |
| RCC_PLLCmd                    | 使能或者失能 PLL                     |
| RCC_SYSCLKConfig              | 设置系统时钟（SYSCLK）               |
| RCC_GetSYSCLKSource           | 返回用作系统时钟的时钟源             |
| RCC_HCLKConfig                | 设置 AHB 时钟（HCLK）                |
| RCC_PCLK1Config               | 设置低速 AHB 时钟（PCLK1）           |
| RCC_PCLK2Config               | 设置高速 AHB 时钟（PCLK2）           |
| RCC_ITConfig                  | 使能或者失能指定的 RCC 中断          |
| RCC_USBCLKConfig              | 设置 USB 时钟（USBCLK）              |
| RCC_ADCCLKConfig              | 设置 ADC 时钟（ADCCLK）              |
| RCC_LSEConfig                 | 设置外部低速晶振（LSE）              |
| RCC_LSICmd                    | 使能或者失能内部低速晶振（LSI）      |
| RCC_RTCCLKConfig              | 设置 RTC 时钟（RTCCLK）              |
| RCC_RTCCLKCmd                 | 使能或者失能 RTC 时钟                |
| RCC_GetClocksFreq             | 返回不同片上时钟的频率               |
| **RCC_AHBPeriphClockCmd**     | 使能或者失能 AHB 外设时钟            |
| **RCC_APB2PeriphClockCmd**    | 使能或者失能 APB2 外设时钟           |
| **RCC_APB1PeriphClockCmd**    | 使能或者失能 APB1 外设时钟           |
| RCC_APB2PeriphResetCmd        | 强制或者释放高速 APB（APB2）外设复位 |
| RCC_APB1PeriphResetCmd        | 强制或者释放低速 APB（APB1）外设复位 |
| RCC_BackupResetCmd            | 强制或者释放后备域复位               |
| RCC_ClockSecuritySystemCmd    | 使能或者失能时钟安全系统             |
| RCC_MCOConfig                 | 选择在 MCO 管脚上输出的时钟源        |
| RCC_GetFlagStatus             | 检查指定的 RCC 标志位设置与否        |
| RCC_ClearFlag                 | 清除 RCC 的复位标志位                |
| RCC_GetITStatus               | 检查指定的 RCC 中断发生与否          |
| RCC_ClearITPendingBit         | 清除 RCC 的中断待处理位              |

## GPIO

### 基本介绍

- GPIO（General Purpose Input Output）通用输入输出口
- 可配置为8种输入输出模式
- 引脚电平：0V~3.3V，部分引脚可容忍5V
- 输出模式下可控制端口输出高低电平
- 输入模式下可读取端口的高低电平或电压

**GPIO基本结构**

- 这里的寄存器实际上共有7个
  - 32bit配置寄存器x2 `GPIOx_CRL` `GPIOx_CRH` (4bit x 16 = 64bit)
  - 32bit配置锁定寄存器x1 `GPIOx_LCKR`
  - 32bit数据寄存器x2 `GPIOx_IDR` `GPIOx_ODR` (输入/输出)
  - 32bit置位/复位寄存器x1 `GPIOx_BSRR` (低16bit置位，高16bit复位) (可用于设置某位的同时清除另一位)
  - 16bit复位寄存器x1 `GPIOx_BRR` (低16bit复位)
- ![Alt text](assets/images/image-5.png)

**GPIO位结构**

- 这里值得注意的一些点：
  - 对`输出数据寄存器`操作会影响16个端口
  - 对`位设置/清除寄存器`操作只影响具体的位
  - 复用功能输入实际上是数字信号
  - GPIO模式决定了上拉电阻和下拉电阻是否启用，以及上下MOS管是否受控。
- ![Alt text](assets/images/image-6.png)

**八种GPIO模式**

|   模式名称   |     性质     | 特征                                               |
| :----------: | :----------: | :------------------------------------------------- |
|   浮空输入   | **数字输入** | 可读取引脚电平，若引脚悬空，则电平不确定           |
|   上拉输入   | **数字输入** | 可读取引脚电平，内部连接上拉电阻，悬空时默认高电平 |
|   下拉输入   | **数字输入** | 可读取引脚电平，内部连接下拉电阻，悬空时默认低电平 |
|   模拟输入   | **模拟输入** | GPIO无效，引脚直接接入内部ADC                      |
|   开漏输出   |  `数字输出`  | 可输出引脚电平，高电平为高阻态，低电平接VSS        |
|   推挽输出   |  `数字输出`  | 可输出引脚电平，高电平接VDD，低电平接VSS           |
| 复用开漏输出 |  `数字输出`  | 由片上外设控制，高电平为高阻态，低电平接VSS        |
| 复用推挽输出 |  `数字输出`  | 由片上外设控制，高电平接VDD，低电平接VSS           |

**数字输入模式电路**

- 特点
  - 无法输出
  - 浮空输入 上下拉电阻失效 电平不确定
  - 上拉输入 上拉电阻有效 默认高电平
  - 下拉输入 下拉电阻有效 默认低电平
- ![Alt text](assets/images/image-7.png)

**模拟输入模式电路**

- 特点
  - 肖特基触发器关闭，无法读取数字输入信号
  - 输出电路断开，无法输出信号
  - 引脚信号直接接入ADC
- ![Alt text](assets/images/image-9.png)

**数字输出模式电路**

- 特点
  - 上管无效为开漏输出
  - 上下管都有效为推挽输出
  - 肖特基触发器开启，可以读取到数字输入
- ![Alt text](assets/images/image-8.png)

**复用输出模式**

- 特点
  - 输出的控制权转交给片上外设
  - 肖特基触发器开启，仍然能够读取数字输入
- ![Alt text](assets/images/image-10.png)

### 案例代码：点灯

**步骤**

- 配置RCC外设开启相关端口的时钟
- 配置GPIO口输出模式
- 输出

```cpp
#define USE_STDPERIPH_DRIVER
#include "stm32f10x.h"

int main(void)
{
    // 1.启用APB2_GPIOC外设时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOC, ENABLE);
    // 2.初始化GPIOC_13 为推挽输出、速度50MHz
    GPIO_InitTypeDef GPIO_InitStruct = {GPIO_Pin_13, GPIO_Speed_50MHz, GPIO_Mode_Out_PP};
    GPIO_Init(GPIOC, &GPIO_InitStruct);
    // 3.设置输出低电平
    GPIO_WriteBit(GPIOC,GPIO_Pin_13,Bit_RESET);
    while (1)
    {
    }
}
```

## 中断与NVIC

### 基本介绍

- **中断：** 在主程序运行过程中，出现了特定的**中断触发条件**（中断源），使得CPU暂停当前正在运行的程序，转而去处理**中断程序**，处理完成后又返回原来被暂停的位置继续运行
- **中断优先级：** 当有多个中断源同时申请中断时，CPU会根据中断源的轻重缓急进行裁决，优先响应更加紧急的中断源
- **中断嵌套：** 当一个中断程序正在运行时，又有新的更高优先级的中断源申请中断，CPU再次暂停当前中断程序，转而去处理新的中断程序，处理完成后依次进行返回

**中断执行流程**

![Alt text](assets/images/image-12.png)

### STM32的中断

**介绍**

- 68个可屏蔽中断通道，包含EXTI、TIM、ADC、USART、SPI、I2C、RTC等多个外设
- 使用**NVIC**统一管理中断，每个中断通道都拥有**16**个可编程的优先等级，可对优先级进行分组，进一步设置抢占优先级和响应优先级

**NVIC-嵌套中断向量控制器**

- 是统一分配中断优先级和管理中断的**内核外设**，
- 负责根据中断的优先级决定中断的先后顺序，
- 以及是否要嵌套处理新的中断。
- ![Alt text](assets/images/image-14.png)

**NVIC优先级分组**

- 分组
  - NVIC的中断优先级由优先级寄存器的4位决定（共16个优先级）
  - 这4位可以进行切分，分为
  - 高n位的**抢占优先级**和
  - 低(4-n)位的**响应优先级**
- 优先级
  - `抢占优先级高的可以中断嵌套，`
  - `响应优先级高的可以优先排队，`
  - `抢占优先级和响应优先级均相同的按中断号排队`

| 分组方式 |   抢占优先级    |   响应优先级    |
| :------: | :-------------: | :-------------: |
|  分组0   |  0位，取值为0   | 4位，取值为0~15 |
|  分组1   | 1位，取值为0~1  | 3位，取值为0~7  |
|  分组2   | 2位，取值为0~3  | 2位，取值为0~3  |
|  分组3   | 3位，取值为0~7  | 1位，取值为0~1  |
|  分组4   | 4位，取值为0~15 |  0位，取值为0   |

**STM32中断向量表**

- 分类
  - 灰色的都是内核的中断，一般用不到。
    - Reset复位中断，当产生复位事件时程序就会自动执行复位中断。
  - 其余部分为外设中断
- 中断地址
  - 外设申请中断时，会跳转到相应的中断地址执行程序
  - 而中断跳转只能跳转到固定的地址
  - 用户定义的中断处理函数在编译器编译后，其地址是不固定的
  - 这就需要在跳转到中断地址后再次跳转到用户定义的中断函数，这部分工作将会由编译器自动完成（定义在了setup汇编文件中）。
- ![Alt text](assets/images/image-13.png)

### EXTI外部中断

**介绍**

- EXTI（Extern Interrupt）外部中断
- `EXTI可以监测指定GPIO口的电平信号，当其指定的GPIO口产生电平变化时，EXTI将立即向NVIC发出中断申请，经过NVIC裁决后即可中断CPU主程序，使CPU执行EXTI对应的中断程序`
- 支持的触发方式：
  - 上升沿
  - 下降沿
  - 双边沿
  - 软件触发
- 支持的GPIO口：
  - **所有GPIO口**
  - 但**相同的Pin不能同时触发中断**,就是说PA0和PB0不能同时作为中断触发源
- 通道数（**共20个通道**）：
  - 16个GPIO_Pin
  - 外加PVD输出
  - RTC闹钟
  - USB唤醒
  - 以太网唤醒
- 触发响应方式：
  - 中断响应：通道电压变化，申请中断，让CPU执行中断函数
  - 事件响应：通道电压变化，触发事件，触发其他外设的操作
- **EXTI基本结构**
  - ![Alt text](assets/images/image-15.png)

**EXTI外部中断框图**

- 下图左侧的输入线就是20个外部中断通道
- **边沿检测电路**根据**上升沿触发选择寄存器**和**下降沿触发选择寄存器**的值
- 决定输出到或门的值，然后输出到**请求挂起寄存器**，然后再输出至后续的与门。
- **中断屏蔽寄存器**就相当于是这个与门的开关，决定了中断信号能否发送至后续的NVIC
- 从或门输出的信号还将经过脉冲发生器，用来触发其他外设
- ![Alt text](assets/images/image-17.png)

**AFIO中断引脚选择**

- AFIO主要用于引脚复用功能的选择和重定义
- 在STM32中，AFIO主要完成两个任务：
  - 复用功能引脚重映射
  - **中断引脚选择**
- 下图的主要意思就是**EXTIO只能是PA0~PG0中的其中一个**，具体选择哪一个，由AFIO来控制
- ![Alt text](assets/images/image-16.png)

### 案例代码：光电计数器触发外部中断

**基本步骤**

1. 开启GPIOx时钟
2. 配置GPIOx_Pinx
3. 开启AFIO时钟
4. 配置AFIO，使GPIOx_Pinx通向 EXTIx中断信号
5. 配置EXTI，启用EXTI_Linex
6. 配置NVIC,设置EXTIxx_IRQn中断函数优先级
7. 定义中断函数EXTIxx_IRQn
   - 在中断执行完毕后清除请求挂起寄存器对应的位

**配置GPIO_G_Pin_13口外部中断的示例代码**

```cpp
#include "stm32f10x.h"
#include "stdint.h"
#include "CountSensor.h"

/**
 * @ref 初始化光电计数器
 */
void CountSensor_Init()
{
    /**
     * 配置GPIO
     */
    // 开启APB2_GPIO_C外设时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOC, ENABLE);
    // 初始化GPIO_C13为上拉输入模式
    GPIO_InitTypeDef GPIO_InitStruct = {GPIO_Pin_13, GPIO_Speed_50MHz, GPIO_Mode_IPU};
    GPIO_Init(GPIOC, &GPIO_InitStruct);

    /**
     * 配置AFIO
     * AFIO用于配置引脚复用功能重映射 中断引脚
     */
    // 开启APB2_AFIO外设时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO, ENABLE);
    // 配置AFIO的数据选择器联通GPIO_C13到EXTI电路
    GPIO_EXTILineConfig(GPIO_PortSourceGPIOC, GPIO_PinSource13);

    /**
     * 配置EXTI
     */
    // EXTI外设时钟默认开启
    // 配置EXTI
    EXTI_InitTypeDef EXTI_InitStruct = {
        EXTI_Line13,          // 配置EXTI_Line13
        EXTI_Mode_Interrupt,  // 中断模式
        EXTI_Trigger_Falling, // 下降沿触发
        ENABLE,               // 启用
    };
    EXTI_Init(&EXTI_InitStruct);

    /**
     * 配置NVCI
     */
    // NVCI是内核外设，时钟默认开启
    // 通过NVIC寄存器配置优先级分组（先占优先级和从占优先级）
    NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);
    // 配置EXTI15_10_IRQn中断的优先级
    NVIC_InitTypeDef NVIC_InitStruct = {
        EXTI15_10_IRQn,
        0, // 先占优先级
        0, // 从占优先级
        ENABLE,
    };
    NVIC_Init(&NVIC_InitStruct);
}

uint16_t counter = 0;
uint16_t CountSensor_GetCounter()
{
    return counter;
}
/**
 * @ref 重写中断回调
 */
void EXTI15_10_IRQHandler()
{
    // 获取EXTI状态
    if (EXTI_GetITStatus(EXTI_Line13) == SET)
    {
        counter++;
        // 清除中断请求挂起寄存器相应的位
        EXTI_ClearITPendingBit(EXTI_Line13);
    }
}
```

## TIM定时器

### 概念

- TIM（Timer）定时器
- 定时器可以对**输入的时钟**进行**计数**，并在计数值达到设定值时触发中断
  - **输入时钟可以是系统时钟、外部输入**
  - **对高精度时钟计数，实际就是计时**
    - 对系统时钟72Mhz计数72次，就是1us
- 由**预分频器**、**16位计数器**、**自动重装寄存器**组成的时基单元，在72MHz计数时钟下可以实现最大59.65s的定时
  - **预分频器**，可以对时钟进行分频，
  - **16位计数器**,用来执行计数定时的计数器，每来一个时钟，计数器加1
  - 单个定时器最大定时时长： `(1/72Mhz) * 65536 * 65536 = 59.65232355555556 s`
  - 两个定时器级联最大定时时长：`59.65s * 65536 * 65536 ≈ 8千多年`
  - 三个定时器级联最大定时时长：`8K * 65536 * 65536 ≈ 34万亿年`
- 具备基本的**定时中断功能**，而且还包含**内外时钟源选择**、**输入捕获**、**输出比较**、编码器接口、主从触发模式等多种功能
- 根据复杂度和应用场景分为了**高级定时器**、**通用定时器**、**基本定时器**三种类型

**定时器类型**

> STM32F103C8T6定时器资源：TIM1、TIM2、TIM3、TIM4

| 类型       | 编号                   | 总线 | 功能                                                                                                 |
| :--------- | :--------------------- | :--- | :--------------------------------------------------------------------------------------------------- |
| 高级定时器 | TIM1、TIM8             | APB2 | 拥有通用定时器全部功能，并额外具有重复计数器、死区生成、互补输出、刹车输入等功能                     |
| 通用定时器 | TIM2、TIM3、TIM4、TIM5 | APB1 | 拥有基本定时器全部功能，并额外具有内外时钟源选择、输入捕获、输出比较、编码器接口、主从触发模式等功能 |
| 基本定时器 | TIM6、TIM7             | APB1 | 拥有定时中断、主模式触发DAC的功能                                                                    |

### 基本定时器

**基本定时器框图**

- **`CK_PSC`时钟：** 一般直接使用`CK_INT`（内部时钟72Mhz）作为定时器时钟
- **时基单元：** 预分频器+计数器+自动重装寄存器
  - **预分频器：** 对时钟进行降频
    - 写0 输出 72/1 Mhz （不分频/也叫1分频）
    - 写1 输出 72/2 Mhz （2分频）
    - 写2 输出 72/3 Mhz （3分频）
    - ......
    - 写n 输出 72/(n+1) Mhz （n+1分频）
  - **计数器：** 对预分频器输出的方波上升沿计数，计数就是计数器值+1
    - 对于基本定时器，计数器只有向上计数模式
  - **自动重装寄存器：** 当计数器数值达到自动重装值时，产生中断信号并清零计时器
    - 下图中向上的折现箭头就是中断信号，这种计数值等于重装值的中断一般称为更新中断，该中断信号会通往NVIC，配置好NVIC的定时器通道，那么定时器的更新中断就能得到CPU的响应
    - 向下的折现表示会产生一个事件，这里就是更新事件，不会触发中断，但可用于触发内部其他电路工作，可以实现一种不需要CPU直接参与的自动化任务。
- **主模式触发DAC:** 可以把定时器的更新事件，映射到TRGO（Trigger Oout）触发输出，然后再接到DAC的触发转换引脚上，实现定时触发DAC转换输出模拟量，不需要CPU参与，实现硬件自动化
- ![Alt text](assets/images/image-18.png)

### 通用定时器

**通用定时器框图**

- **时基单元**: 没有改变，和**基本定时器**一样
  - **计数器：**
    - 对于通用寄存器和高级寄存器，计数器支持向上计数、向下计数，中央对齐计数
- `CK_PSC`**时钟**
  - `CK_INT 内部时钟`
    - 可直接使用内部时钟72Mhz作为定时器时钟
  - `CK_PSC 外部时钟模式2`
    - 可以把ETR（TIMx_ETR）外部时钟引脚信号作为定时器时钟；如：TIM2_CH1_ETR引脚
    - 需要配置边沿检测、分配器
    - 可以用来对外部时钟引脚上的信号计数
  - `TRGI 外部时钟模式1`
    - TRGI主要作为触发输入使用，可以触发定时器的从模式
    - 也可以用来作为定时器的外部时钟输入信号
      - `ITRx` 是来自其他定时器的触发输出 用于实现定时器的级联
        - 具体来说，
          - 可以初始化TIM3,主模式，更新事件映射到TRGO;
          - 初始化TIM2,选择ITR2（也就是TIM3的TRGO）,外部时钟模式1，作为定时器的时钟信号。
        - ![Alt text](assets/images/image-20.png)
      - `TI1F_ED` 连接的是输入捕获单元的CH1引脚，ED表示边沿触发，上升沿和下降沿均有效
        - 可用于输入捕获，测频率
      - `TI1FP1` CH1引脚的时钟
      - `TI1FP2` CH2引脚的时钟
- 编码器接口：可用于读取正交编码器的输出波形
- `TRGO`触发输出：
  - 可以把定时器内部的一些事件映射到该接口
- `捕获/比较电路`

  - 四个捕获/比较电路寄存器，及其**左侧**的电路称为**输入捕获电路**，可用于**测量方波频率**
  - 四个捕获/比较电路寄存器，及其**右侧**的电路称为**输出比较电路**，可用于**输出PWM波形**
  - 输入捕获电路 和 输出比较电路 **共用引脚和寄存器**，**不能同时使用**

- ![Alt text](assets/images/image-19.png)

### 高级定时器

**高级定时器框图**

- 对比高级定时器框图，新增的部分为右下角的一圈电路
  - `重复计数器`：实现每隔几个计数周期触发中断和更新事件，相当于对输出的更新信号又做了分频
  - **DTG(Dead Time Generate四驱时间生成)寄存器**，用于控制输出上下互补的PWM波，为了防止输出的互补PWM波驱动MOS管时，在开关切换的瞬间，由于器件的不理想，导致短暂的上下管都导通的情况发生，所以这里添加了死区生成电路，实现在上管完全关闭时，再开启下管。
  - **输出控制**，用于输出两个上下互补的PWM波形，用于控制三相电机，第四路由于用不到，所以只有一根线。
  - `BRK刹车输入功能`：当从外部引脚BKIN得到刹车信号时，或者时钟信号失效事件发生时，控制电路将自动切断电机的输出，防止意外发生。
- ![Alt text](assets/images/image-21.png)

### 时基单元

**延迟更新的预分频器**

- 一句话总结：修改预分频器参数时，不会立即生效，而是会在计数器达到目标值后，产生更新事件，进入下一轮计数时生效。
- 时序过程
  - `预分频控制寄存器`是供读写的寄存器，不直接决定分频系数，
  - `预分频缓存器`是真正决定预分频参数的寄存器
  - 在一个计数的过程中，用户对`预分频控制寄存器`写入分频系数，写入的分频系数不生效，**计数频率将保持不变**，
  - 直到本轮计数完成，更新事件产生，该系数才会写入`预分频缓存器`，进入下一轮计数时，写入的分频系数生效,**计数频率才会改变**。
  - ![Alt text](assets/images/image-33.png)
  - `计数器计数频率CK_CN`
  - `= CK_PSC定时器时钟/(PSC预分频器系数 + 1)`
- 这里的预分频缓冲器，是为了防止计数中途更改数值造成错误而设计的。

**更新事件的产生时序**

- 一句话总结：更新事件不是在计数器达到目标时立即产生的，而是在达到目标值后的下一个定时器周期，计数器溢出时产生的。
- ![Alt text](assets/images/image-34.png)
- `计数器溢出频率CK_CNT_OV`
  - `= CK_CNT计数器/(ARR自动重装寄存器+1)`
  - `= [CK_PSC定时器时钟/(PSC预分频器系数+1)]/(ARR自动重装寄存器+1)`
- 更新中断标志置1后，会申请中断，在中断处理函数中需要手动清除该标志位。
- 这里的ARR自动重装寄存器，也有一个缓冲寄存器，或者叫影子寄存器，是否使用是可以设置的。当使用时，会有和预分频器一样延迟生效的作用。
  - ![Alt text](assets/images/image-35.png)

### 输出比较

**OC（Output Compare）输出比较**

- 输出比较可以通过比较`CNT计数器`与`CCR捕获比较寄存器`值的关系，来对输出电平进行置1、置0或翻转的操作，
- 用于输出一定频率和占空比的PWM波形。
- 每个高级定时器和通用定时器都拥有4个输出比较通道
- 高级定时器的前3个通道额外拥有死区生成和互补输出的功能
- ![Alt text](assets/images/image-52.png)
- tips
  - OC（Output Compare）输出比较
  - IC（Input Compare）输入比较
  - CC (Capture Compare) 输入捕获和输出比较的单元

**PWM**

- PWM（Pulse Width Modulation）脉冲宽度调制
- 在**具有惯性的系统**中，可以通过对一系列脉冲的宽度进行调制，来等效地获得所需要的模拟参量，常应用于电机控速等领域
- PWM参数：
  - 频率 = 1 / TS
    - 一般为几k~几十khz
  - 占空比 = TON / TS
  - 分辨率 = 占空比变化步距
    - 形容的是占空比的精度
      - 比如 1% 2% 3% 分辨率为1%
      - 比如 1.1% 1.2% 1.3% 分辨率为0.1%
- ![Alt text](assets/images/image-37.png)

**捕获比较通道输出部分**

- `OC1M[2:0]` 负责控制输出模式控制器的输出逻辑
- `CC1P` 用于实现极性选择的控制，用来实现波形的翻转
- `CC1E` 输出使能
- 通用定时器的比较输出通道
  - ![Alt text](assets/images/image-38.png)
  - ![Alt text](assets/images/image-39.png)
- 高级定时器的比较输出通道
  - 相比于通用定时器，多了一个互补的输出端口，用于控制上下MOS管的导通与截止。
  - 死区生成电路用来防止上下管同时导通，防止上下管截至时，由于器件的不理想导致不完全截至，而同时另一个管又导通，这将使得上下管同时导通发生短路。
  - ![Alt text](assets/images/image-43.png)

**输出模式控制器的模式选择**

| 模式             | 描述                                                                                                                             | 笔记                                                                             |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| 冻结             | CNT=CCR时，REF保持为原状态                                                                                                       | （输出保持不变）                                                                 |
| 匹配时置有效电平 | CNT=CCR时，REF置有效电平                                                                                                         | （输出保持高电平）                                                               |
| 匹配时置无效电平 | CNT=CCR时，REF置无效电平                                                                                                         | （输出保持低电平）                                                               |
| 匹配时电平翻转   | CNT=CCR时，REF电平翻转                                                                                                           | （输出50%PWM方波，频率为计数频率的一半） ![Alt text](assets/images/image-40.png) |
| 强制为无效电平   | CNT与CCR无效，REF强制为无效电平                                                                                                  | （强制输出低电平）                                                               |
| 强制为有效电平   | CNT与CCR无效，REF强制为有效电平                                                                                                  | （强制输出高电平）                                                               |
| PWM模式1         | 向上计数：CNT<CCR时，REF置有效电平，CNT≥CCR时，REF置无效电平 <br/> 向下计数：CNT >CCR时，REF置无效电平，CNT≤CCR时，REF置有效电平 | ![Alt text](assets/images/image-50.png)                                          |
| PWM模式2         | 向上计数：CNT<CCR时，REF置无效电平，CNT≥CCR时，REF置有效电平 <br/> 向下计数：CNT >CCR时，REF置有效电平，CNT≤CCR时，REF置无效电平 | PWM模式的取反                                                                    |

**PWM模式1的输出波形**

![Alt text](assets/images/image-41.png)
![Alt text](assets/images/image-42.png)

### 输入比较

**IC（Input Capture）输入捕获**

- 输入捕获模式下，当通道输入引脚出现指定电平跳变时，当前CNT的值将被锁存到CCR中，
- 可用于测量PWM波形的频率、占空比、脉冲间隔、电平持续时间等参数。
- ![Alt text](assets/images/image-51.png)
- 每个高级定时器和通用定时器都拥有4个输入捕获通道
- 可配置为PWMI模式，同时测量频率和占空比
- 可配合主从触发模式（主模式、从模式），实现硬件全自动测量

**框图详解**

- ![Alt text](assets/images/image-53.png)
- **异或门**
  - 在当三个输入引脚电平发生翻转时输出引脚产生一次电平翻转，然后可以通过通道选择器，进入通道1
  - 用于连接三相无刷电机的传感器检测转子的位置，根据位置换相。
- **输入滤波器和边沿检测器**
  - 输入滤波器可以对信号进行滤波，避免高频毛刺信号误触发。
  - 边沿检测电路可以选择触发模式，上首页触发，下降沿触发等。
  - 两套相同的电路
    - 实际上有两套相同的电路，
      - 如图，TI1FP1、TI1FP2就是这两套电路的输出，分别传递给IC1和IC2
      - ![Alt text](assets/images/image-55.png)
    - 目的：
      - 1.可以灵活切换捕获电路的输入：后续电路配置保持不变，可以将信号输入从ch1切换到ch2
      - 2.可以把一个引脚的输入，同时映射到两个捕获寄存器，
        - PWMI模式
          - 第一个通道使用上升沿触发，用于捕获周期
          - 第二个通道使用下降沿触发，用于捕获占空比
- **预分频器**
  - 每个通道有一个，共四个，可以对前面的信号进行分频，
  - 分频后的触发信号可以触发后续捕获电路工作
- **捕获寄存器**
  - 每从预分频器来一个触发信号,CNT寄存器的值就会向CCR寄存器转运一次。
  - 转运的同时，会发生一个捕获事件，这个事件会在状态寄存器置标志位，同时产生中断。
  - 如有需要，可开启该**捕获中断**。

**捕获/比较通道框图**

- ![Alt text](assets/images/image-54.png)
- **滤波器**
  - TI1(也就是CH1引脚)为滤波器的输入，
  - TI1F为滤波器的输出
  - FDTS为滤波器的采样时钟来源
  - CCMR1寄存器的`ICF[3:0]`位可以控制滤波器的参数
  - 滤波器工作原理：
    - 以采样频率对输入信号采样，
    - 当连项N个值都为高电平时输出才为高电平，
    - 当连项N个值都为低电平时输出才为低电平，
    - 如果信号出现高频抖动，导致连续的N个值不完全一样，那么输出就不会发生变化，就达到了滤波的效果。
    - 采样频率越低，采样个数N越大，滤波效果就越好，但失真就越严重。
    - ![Alt text](assets/images/image-56.png)
- **边沿检测器**
  - `TI1F`是边沿检测器的输入
  - `TI1F_Rising`是边沿检测器的上升沿检测结果输出
  - `TI1F_Falling`是边沿检测器的下降沿检测结果输出
  - `TI1F_Rising`和`TI1F_Falling`通过数据选择器输出`TI1FP1`信号
  - `CCER寄存器的CC1P位`用来控制数据选择器
- **分频器**
  - `TI1FP1`通过数据选择器进入分频器电路。
    - `CC1S[1:0]`两个位用来控制数据选择器
  - `ICPS[1:0]`可以配置分频器，决定使用1/2/4/8分频
  - `CC1E`位控制输出使能或失能
  - 使能后，`IC1PS`就能让CNT寄存器的值转运的到CCR寄存器中。
- **CNT的清零**
  - `TI1F_ED` 和 `TI1FP1`信号都还通向从模式控制器
  - 在从模式的电路中，就可以完成CNT寄存器的清零工作

**主模式、从模式、触发源选择**

- ![Alt text](assets/images/image-57.png)
- **主模式**
  - 可以将定时器内部的信号映射到TRGO引脚，用于触发控制其他外设。
- **从模式**
  - 用于接收其他外设或自身外设的信号，用于实现受控于其他信号或外设。
- **触发源选择**
  - 用于选择从模式的触发信号源，可以认为是从模式的一部分。
  - 选择指定的信号联通TRGI,TRGI再去触发从模式，从模式可以从列表中选择一个操作来自动执行。
- 案例：
  - 自动清零CNT寄存器
    - 触发源选择`TI1FP1`,
    - 从模式选择`Reset`，
    - 即可实现自动清零CNT寄存器
  - 定时器的级联
    - 一个定时器使用主模式将更新信号输出到TRGO,
    - 另一个定时器将触发源选择为前一个定时器的输出作为TRGI并将从模式选择为外部时钟模式1，
    - 即可将前一个定时器的输出作为后一个定时器的外部时钟，实现了定时器的级联

### 案例：定时中断

**定时中断基本结构**

![Alt text](assets/images/image-22.png)

**实现定时中断的基本步骤**

1. 通过 RCC 开启相关外设时钟
2. 为时基单元选择时钟源：内部时钟源、外部时钟模式、编码器模式
3. 配置时基单元：预分频器、自动重装器、计数模式
4. 配置输出中断控制: 允许输出中断到NVIC
5. 配置NVIC: 打开定时中断通道、分配中断优先级
6. 运行控制：使能计数器

#### 案例：利用内部时钟源实现`setInterval(callback,ms)`

setInterval是一个在前端开发中经常使用的函数，这里尝试实现一下

:::code-tabs

@tab `main.cpp`

```c
#include "stm32f10x.h"
#include "OLED.h"
#include "Timer2.h"

uint16_t num = 0;
void update_callback()
{
    num++;
}

int main(void)
{
    OLED_Init();
    Timer2_setInterval(update_callback, 1000);
    while (1)
    {
        OLED_ShowString(1, 1, "Hello World!!!");
        OLED_ShowNum(2, 1, num, 10);
    }
}
```

@tab `Timer2.c`

```c
#include "stm32f10x.h"
#include "Timer2.h"
#include <stddef.h>

void (*callback)() = NULL;

/**
 * @arg _callback 回调函数
 * @arg ms 毫秒 取值范围 [1,0xffff/10+1]
 */
void Timer2_setInterval(void (*_callback)(), uint16_t ms)
{
    // 步骤
    // 1. 通过 RCC 开启相关外设时钟
    // 2. 为时基单元选择时钟源：内部时钟源、外部时钟模式、编码器模式
    // 3. 配置时基单元：预分频器、自动重装器、计数模式
    // 4. 配置输出中断控制: 允许输出中断到NVIC
    // 5. 配置NVIC: 打开定时中断通道、分配中断优先级
    // 6. 运行控制：使能计数器

    // 1开启Tim2外设时钟
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);

    // 2为TIM2时基单元选择内部时钟（可不写，默认使用内部时钟）
    TIM_InternalClockConfig(TIM2);

    // 3配置时基单元
    // CK_CNT_OV计数器溢出频率 = CK_CNT定时器时钟/(ARR重装值+1) = CK_PSC内部时钟/(PSC预分频器+1)/(ARR重装值+1)
    // 溢出频率
    //      1s => 72Mhz / 7.2k / 10k => 1s
    //      1ms => 72Mhz / 7.2k / 10  => 1ms
    TIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct;
    TIM_TimeBaseInitStruct.TIM_ClockDivision = TIM_CKD_DIV1;     // 采样点数，外部时钟信号滤波器的一个参数，这里填一分频，也就是不分频，那么就会以（内部时钟频率/1）的频率对外部时钟信号进行采样，这里用不到，随便写
    TIM_TimeBaseInitStruct.TIM_CounterMode = TIM_CounterMode_Up; // 计数模式，向上计数
    TIM_TimeBaseInitStruct.TIM_Prescaler = 7200 - 1;             // 预分频器
    TIM_TimeBaseInitStruct.TIM_Period = 10 * ms - 1;             // 自动重装器
    TIM_TimeBaseInitStruct.TIM_RepetitionCounter = 0;            // 重复计数器，高级定时器才有
    TIM_TimeBaseInit(TIM2, &TIM_TimeBaseInitStruct);

    // 上面配置时基单元的函数为了让写入预分频器和自动重装器的值立即生效，
    // 手动触发了更新事件，这里要清除一下，否则中断函数也会立即执行一次
    TIM_ClearFlag(TIM2, TIM_FLAG_Update);

    // 4把TIM2的更新中断连接到NVIC
    TIM_ITConfig(TIM2, TIM_IT_Update, ENABLE);

    // 5配置NVIC优先级
    NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);
    NVIC_InitTypeDef NVIC_InitStruct;
    NVIC_InitStruct.NVIC_IRQChannel = TIM2_IRQn;           // 定时器2中断通道
    NVIC_InitStruct.NVIC_IRQChannelCmd = ENABLE;           // 启用
    NVIC_InitStruct.NVIC_IRQChannelPreemptionPriority = 0; // 抢占优先级
    NVIC_InitStruct.NVIC_IRQChannelSubPriority = 0;        // 响应优先级
    NVIC_Init(&NVIC_InitStruct);

    // 回调
    callback = _callback;
    // 6启动定时器
    TIM_Cmd(TIM2, ENABLE);
}
/**
 * 清除定时器
 */
void Timer2_ClearInterval()
{
    TIM_Cmd(TIM2, DISABLE);
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, DISABLE);
    callback = NULL;
}
/**
 * 重写中断函数
 */
void TIM2_IRQHandler()
{
    if (TIM_GetITStatus(TIM2, TIM_IT_Update) == SET)
    {
        if (callback)
            callback();
        // 清除更新中断Pending标志
        TIM_ClearITPendingBit(TIM2, TIM_IT_Update);
    }
}
```

@tab `Timer2.h`

```c
#ifndef __Timer2_H__
#define __Timer2_H__

#ifdef __cplusplus
extern "C" {
#endif

    void Timer2_setInterval(void (*_callback)(), uint16_t ms);
    void Timer2_ClearInterval();

#ifdef __cplusplus
}
#endif

#endif
```

:::

#### 案例：利用外部时钟源实现`setInterval(callback,times)`

:::code-tabs

@tab `main.cpp`

```c
#include "stm32f10x.h"
#include "OLED.h"
#include "Timer2.h"

uint16_t num = 0;
void update_callback()
{
    num++;
}

int main(void)
{
    OLED_Init();
    Timer2_setInterval(update_callback, 2);
    while (1)
    {
        OLED_ShowString(1, 1, "Hello World!!!");
        OLED_ShowNum(2, 1, num, 10);
    }
}

```

@tab `Timer2.c`

```c
#include "stm32f10x.h"
#include "Timer2.h"
#include <stddef.h>

void (*callback)() = NULL;

/**
 * @brief 外部触发times次后执行传入的_callback函数
 * @arg _callback 回调函数
 * @arg times 计数次数 取值范围 [1,0xffff-1]
 */
void Timer2_setInterval(void (*_callback)(), uint16_t times)
{
    // 步骤
    // 1. 通过 RCC 开启相关外设时钟
    // 2. 为时基单元选择时钟源：内部时钟源、外部时钟模式、编码器模式
    // 3. 配置时基单元：预分频器、自动重装器、计数模式
    // 4. 配置输出中断控制: 允许输出中断到NVIC
    // 5. 配置NVIC: 打开定时中断通道、分配中断优先级
    // 6. 运行控制：使能计数器

    // 1开启Tim2外设时钟
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);

    // 2为TIM2时基单元选择外部时钟
    // 2.1 PA0默认复用功能是TIM2_CH1_ETR,这里要配置PA0
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
    GPIO_InitTypeDef GPIO_InitStruct = {GPIO_Pin_0, GPIO_Speed_50MHz, GPIO_Mode_IPU};
    GPIO_Init(GPIOA, &GPIO_InitStruct);
    // 2.2 配置外部时钟2
    TIM_ETRClockMode2Config(
        TIM2,                        // 配置TIM2
        TIM_ExtTRGPSC_OFF,           // 外部时钟分频
        TIM_ExtTRGPolarity_Inverted, // 下降沿触发
        0x00                         // 滤波器配置
    );

    // 3配置时基单元
    TIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct;
    TIM_TimeBaseInitStruct.TIM_ClockDivision = TIM_CKD_DIV1;     // 采样点数，外部时钟信号滤波器的一个参数，这里填一分频，也就是不分频，那么就会以（内部时钟频率/1）的频率对外部时钟信号进行采样，这里用不到，随便写
    TIM_TimeBaseInitStruct.TIM_CounterMode = TIM_CounterMode_Up; // 计数模式，向上计数
    TIM_TimeBaseInitStruct.TIM_Prescaler = 1 - 1;                // 预分频器
    TIM_TimeBaseInitStruct.TIM_Period = times - 1;               // 自动重装器
    TIM_TimeBaseInitStruct.TIM_RepetitionCounter = 0;            // 重复计数器，高级定时器才有
    TIM_TimeBaseInit(TIM2, &TIM_TimeBaseInitStruct);

    // 上面配置时基单元的函数为了让写入预分频器和自动重装器的值立即生效，
    // 手动触发了更新事件，这里要清除一下，否则中断函数也会立即执行一次
    TIM_ClearFlag(TIM2, TIM_FLAG_Update);

    // 4把TIM2的更新中断连接到NVIC
    TIM_ITConfig(TIM2, TIM_IT_Update, ENABLE);

    // 5配置NVIC优先级
    NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);
    NVIC_InitTypeDef NVIC_InitStruct;
    NVIC_InitStruct.NVIC_IRQChannel = TIM2_IRQn;           // 定时器2中断通道
    NVIC_InitStruct.NVIC_IRQChannelCmd = ENABLE;           // 启用
    NVIC_InitStruct.NVIC_IRQChannelPreemptionPriority = 0; // 抢占优先级
    NVIC_InitStruct.NVIC_IRQChannelSubPriority = 0;        // 响应优先级
    NVIC_Init(&NVIC_InitStruct);

    // 回调
    callback = _callback;
    // 6启动定时器
    TIM_Cmd(TIM2, ENABLE);
}
/**
 * 清除定时器
 */
void Timer2_ClearInterval()
{
    TIM_Cmd(TIM2, DISABLE);
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, DISABLE);
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, DISABLE);
    callback = NULL;
}
/**
 * 重写中断函数
 */
void TIM2_IRQHandler()
{
    if (TIM_GetITStatus(TIM2, TIM_IT_Update) == SET)
    {
        if (callback)
            callback();
        // 清除更新中断Pending标志
        TIM_ClearITPendingBit(TIM2, TIM_IT_Update);
    }
}
```

@tab `Timer2.h`

```c
#ifndef __Timer2_H__
#define __Timer2_H__

#ifdef __cplusplus
extern "C"
{
#endif

    void Timer2_setInterval(void (*_callback)(), uint16_t times);
    void Timer2_ClearInterval();

#ifdef __cplusplus
}
#endif

#endif
```

:::

### 案例：LED呼吸灯

:::code-tabs

@tab `PWM.c`

```cpp
#include "PWM.h"
/**
 * 产生PWM波，精度1% 频率1k 占空比默认50% 可调
 */
void Timer2_PWM_Init()
{
    // 步骤
    // 1. 通过 RCC 开启相关外设时钟
    // 2. 为时基单元选择时钟源：内部时钟源
    // 3. 配置时基单元：预分频器、自动重装器、计数模式
    // 4. 初始化输出比较单元
    // 5. 配置GPIO
    // 6. 运行控制：使能计数器

    // 1开启Tim2外设时钟
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);

    // 2为TIM2时基单元选择内部
    TIM_InternalClockConfig(TIM2);

    // 3配置时基单元
    // 72Mhz -> /720 = 100khz  -> /100 -> 1khz
    TIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct;
    TIM_TimeBaseInitStruct.TIM_ClockDivision = TIM_CKD_DIV1;     // 采样点数，外部时钟信号滤波器的一个参数，这里填一分频，也就是不分频，那么就会以（内部时钟频率/1）的频率对外部时钟信号进行采样，这里用不到，随便写
    TIM_TimeBaseInitStruct.TIM_CounterMode = TIM_CounterMode_Up; // 计数模式，向上计数
    TIM_TimeBaseInitStruct.TIM_Prescaler = 720 - 1;              // 预分频器 PSC
    TIM_TimeBaseInitStruct.TIM_Period = 100 - 1;                 // 自动重装器 ARR
    TIM_TimeBaseInitStruct.TIM_RepetitionCounter = 0;            // 重复计数器，高级定时器才有
    TIM_TimeBaseInit(TIM2, &TIM_TimeBaseInitStruct);

    // 4. 初始化输出比较单元
    TIM_OCInitTypeDef TIM_OCInitStruct;
    // 初始化结构体，赋默认值，因为该结构体中有些属性是生效于高级定时器的，
    // 这里没有为这些属性赋值，又由于这里是局部变量，那么这些属性的值就是不确定的，
    // 这些未赋值的属性可能会对高级定时器的输出造成影响
    TIM_OCStructInit(&TIM_OCInitStruct);

    // 占空比
    TIM_OCInitStruct.TIM_OCMode = TIM_OCMode_PWM1;             // 设置输出比较模式
    TIM_OCInitStruct.TIM_OCPolarity = TIM_OCPolarity_High;     // 设置输出比较极性
    TIM_OCInitStruct.TIM_OutputState = TIM_OutputState_Enable; // 设置输出使能
    TIM_OCInitStruct.TIM_Pulse = 0;                            // 设置CCR捕获比较寄存器的值 [0x0000 and 0xFFFF]
    // OC1 是对ch1通道初始化
    TIM_OC1Init(TIM2, &TIM_OCInitStruct);

    // 5.1 配置AFIO
    // 端口重映射
    // RCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO, ENABLE);      // 开启AFIO时钟
    // GPIO_PinRemapConfig(GPIO_PartialRemap1_TIM2, ENABLE);     // 配置TIM2重映射1，这样tim2_ch1就用重映射到PA15上
    // GPIO_PinRemapConfig(GPIO_Remap_SWJ_JTAGDisable, ENABLE); // 配置关闭Jtag调试端口重映射，这样PA15 PB3 PB4三个端口就成为了GPIO口

    // 5.2 配置GPIO,
    // 根据手册 Timer2的ch1输出比较通道连接在了GPIO_A0上
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
    GPIO_InitTypeDef GPIO_InitStruct = {
        GPIO_Pin_0  // Timer2_ch1 ==默认==> GPIO_A0
        // | GPIO_Pin_15 // Timer2_ch1 ==重映射==> GPIO_A15
        ,
        GPIO_Speed_50MHz,
        GPIO_Mode_AF_PP // 必须设置复用推挽输出，引脚的输出控制才会和输出数据寄存器断开，和片上外设复用功能输出连接
    };
    GPIO_Init(GPIOA, &GPIO_InitStruct);

    // 6启动定时器
    TIM_Cmd(TIM2, ENABLE);
}
/**
 * 设置占空比（0~100）
 */
void Timer2_PWM_SetDuty(uint8_t duty)
{
    TIM_SetCompare1(TIM2, duty);
}

```

@tab `PWM.h`

```cpp
#ifndef __PWM_H__
#define __PWM_H__
#include "stm32f10x.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void Timer2_PWM_Init();
    void Timer2_PWM_SetDuty(uint8_t duty);

#ifdef __cplusplus
}
#endif

#endif
```

@tab `main.cpp`

```cpp
#include "stm32f10x.h"
#include "OLED.h"
#include "Delay.h"
#include "PWM.h"

int8_t step = 1;
uint16_t duty = 0;

int main(void)
{
    OLED_Init();
    Timer2_PWM_Init();
    OLED_ShowString(1, 1, "Duty:");
    while (1)
    {
        OLED_ShowNum(1, 6, duty, 3);
        Timer2_PWM_SetDuty(duty);
        Delay_ms(5);
        duty += step;
        if (duty == 0) step = 1;
        if (duty == 100) step = -1;
    }
}
```

:::

### 案例：舵机驱动

- 舵机是一种根据输入PWM信号占空比来控制输出角度的装置
- 执行逻辑：
  - PWM输入到控制板，给控制板一个目标角度
  - 通过点位器检测输出轴的当前角度
  - 大于目标角度，电机反转
  - 小于目标角度，电机正转
- SG90舵机
  - PWM要求：
    - 周期:20ms（50Hz），
    - 高电平宽度为:0.5ms~2.5ms
      - `0.5ms -> -90°` 占空比：0.5/20 -> 2.5%
      - `1.5ms -> 0°` 占空比：1.5/20 -> 7.5%
      - `2.5ms -> +90°` 占空比：2.5/20 -> 12.5%
  - ![Alt text](assets/images/image-44.png)
  - ![Alt text](assets/images/image-45.png)

:::code-tabs

@tab `PWM.c`

```cpp
#include "PWM.h"
/**
 * 产生PWM波，精度1% 频率1k 占空比默认50% 可调
 */
void Timer2_PWM_Init()
{
    // 步骤
    // 1. 通过 RCC 开启相关外设时钟
    // 2. 为时基单元选择时钟源：内部时钟源
    // 3. 配置时基单元：预分频器、自动重装器、计数模式
    // 4. 初始化输出比较单元
    // 5. 配置GPIO
    // 6. 运行控制：使能计数器

    // 1开启Tim2外设时钟
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);

    // 2为TIM2时基单元选择内部
    TIM_InternalClockConfig(TIM2);

    // 3配置时基单元
    // 72Mhz -> /72 = 1M  -> /20k -> 50hz

    TIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct;
    TIM_TimeBaseInitStruct.TIM_ClockDivision = TIM_CKD_DIV1;     // 采样点数，外部时钟信号滤波器的一个参数，这里填一分频，也就是不分频，那么就会以（内部时钟频率/1）的频率对外部时钟信号进行采样，这里用不到，随便写
    TIM_TimeBaseInitStruct.TIM_CounterMode = TIM_CounterMode_Up; // 计数模式，向上计数
    TIM_TimeBaseInitStruct.TIM_Prescaler = 72 - 1;               // 预分频器 PSC
    TIM_TimeBaseInitStruct.TIM_Period = 20000 - 1;               // 自动重装器 ARR
    TIM_TimeBaseInitStruct.TIM_RepetitionCounter = 0;            // 重复计数器，高级定时器才有
    TIM_TimeBaseInit(TIM2, &TIM_TimeBaseInitStruct);

    // 4. 初始化输出比较单元
    TIM_OCInitTypeDef TIM_OCInitStruct;
    // 初始化结构体，赋默认值，因为该结构体中有些属性是生效于高级定时器的，
    // 这里没有为这些属性赋值，又由于这里是局部变量，那么这些属性的值就是不确定的，
    // 这些未赋值的属性可能会对高级定时器的输出造成影响
    TIM_OCStructInit(&TIM_OCInitStruct);

    // 占空比
    TIM_OCInitStruct.TIM_OCMode = TIM_OCMode_PWM1;             // 设置输出比较模式
    TIM_OCInitStruct.TIM_OCPolarity = TIM_OCPolarity_High;     // 设置输出比较极性
    TIM_OCInitStruct.TIM_OutputState = TIM_OutputState_Enable; // 设置输出使能
    TIM_OCInitStruct.TIM_Pulse = 0;                            // 设置CCR捕获比较寄存器的值 [0x0000 and 0xFFFF]
    // OC1 是对ch1通道初始化
    TIM_OC1Init(TIM2, &TIM_OCInitStruct);

    // 5 配置GPIO,
    // 根据手册 Timer2的ch1输出比较通道连接在了GPIO_A0上
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
    GPIO_InitTypeDef GPIO_InitStruct = {
        GPIO_Pin_0 // Timer2_ch1 ==默认==> GPIO_A0
        ,
        GPIO_Speed_50MHz,
        GPIO_Mode_AF_PP // 必须设置复用推挽输出，引脚的输出控制才会和输出数据寄存器断开，和片上外设复用功能输出连接
    };
    GPIO_Init(GPIOA, &GPIO_InitStruct);

    // 6启动定时器
    TIM_Cmd(TIM2, ENABLE);
}
/**
 * 设置角度[0,180]
 */
void Timer2_PWM_SetDegree(float degree)
{
    // 20ms -> 20k
    // 0°：     0.5ms -> 0.5k
    // +90°：   1.5ms -> 1.5k
    // +180°：  2.5ms -> 2.5k

    // 1deg -> 0.5k + 1k/90
    TIM_SetCompare1(TIM2,500+degree*(1000/90.0));
}
```

@tab `PWM.h`

```cpp
#ifndef __PWM_H__
#define __PWM_H__
#include "stm32f10x.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void Timer2_PWM_Init();
    void Timer2_PWM_SetDegree(float degree);

#ifdef __cplusplus
}
#endif

#endif
```

@tab `main.cpp`

```cpp
#include "stm32f10x.h"
#include "OLED.h"
#include "Delay.h"
#include "PWM.h"
#include <math.h>

float degree = 0;

float random(float from,float to){
    float rand_0_1 = (float)rand() / RAND_MAX;
    return rand_0_1 * (to - from) + from;
}

int main(void)
{
    OLED_Init();
    Timer2_PWM_Init();
    OLED_ShowString(1, 1, "Degree:");
    while (1)
    {
        OLED_ShowSignedNum(1, 7, degree, 5);
        Timer2_PWM_SetDegree(degree);
        Delay_ms(1000);
        degree = random(0,180);
    }
}
```

:::

##### 直流电机与驱动电路

- 直流电机是一种将电能转换为机械能的装置，有两个电极，当电极正接时，电机正转，当电极反接时，电机反转
- 直流电机属于大功率器件，GPIO口无法直接驱动，需要配合电机驱动电路来操作

**TB6612**

- TB6612是一款双路H桥型的直流电机驱动芯片，
- 可以驱动两个直流电机并且控制其转速和方向
- ![Alt text](assets/images/image-46.png)
- ![Alt text](assets/images/image-47.png)
  - MV脚电压功率可以和电机功率保持一致
  - VCC脚电压可以和单片机供电电压保持一致
  - STBY(Stand By)待机控制脚，低电平芯片不工作
- ![Alt text](assets/images/image-48.png)

`TB6612FNG.pdf`

**Features:**

- Power supply voltage ； VM=15V（Max.）
- Output current ； Iout=1.2A(ave) / 3.2A (peak)
- Output low ON resistor； 0.5Ω (upper＋lower Typ. @VM≧5V)
- Standby (Power save) system
- CW/CCW/short brake/stop function modes
- Built-in thermal shutdown circuit and low voltage detecting circuit
- Small faced package（SSOP24：0.65mm Lead pitch）
- Response to Pb free packaging
- ![Alt text](assets/images/image-49.png)

**接线图：**

**示例代码：**

:::code-tabs

@tab `main.cpp`

```c
#include "stm32f10x.h"
#include "OLED.h"
#include "Delay.h"
#include "PWM.h"

int8_t step = 1;
uint16_t duty = 0;

int main(void)
{
    OLED_Init();
    Timer2_PWM_Init();
    OLED_ShowString(1, 1, "Duty:");
    while (1)
    {
        OLED_ShowNum(1, 6, duty, 3);
        Timer2_PWM_SetDuty(duty);
        duty += 5;
        Delay_ms(100);
        duty %= 100;
    }
}
```

:::

### 案例：定时器输出捕获——测量方波

**频率测量**

- ![Alt text](assets/images/image-36.png)
- 测频法：在闸门时间T内，对上升沿计次，得到N，则频率 $f_x=N/T$
- 测周法：两个上升沿内，以标准频率fc计次，得到N ，则频率 $f_x=f_c/N$
- 中界频率：测频法与测周法误差相等的频率点 $f_m=√f_c/T$

**输入捕获基本结构**

![Alt text](assets/images/image-58.png)

**测频原理/流程**

- 方波信号通过GPIO口进入输入捕获单元1，
- 首先进入滤波器滤波，滤除高频杂波，
- 然后经过边沿检测电路，检测上升沿信号，
- 上升沿信号进入分频器，分频器配置为1分频，
- 输出不分频的方波信号，
- 在上升沿，触发实现将CNT寄存器的值搬运到CCR1寄存器，
- 然后CNT寄存器被从模式Reset清零。
- CNT被清零后重新计数
- 当方波信号的下一个上升沿来到时，
- CNT寄存器的值就代表了被测方波信号一个周期的时长，
- 然后CNT寄存器的值再次被搬运到CCR1寄存器，
- CNT被再次清零重新计数
- 这样只要读取CCR1寄存器的值，就能计算出被测方波信号的频率
- 具体计算方法为测周法的计算公式：被测方波频率=CNT计数频率/CCR1寄存器值

**步骤**

1. 配置GPIO
   1. 通过RCC寄存器开启GPIO时钟
   2. 初始化GPIO：配置为输入模式、上拉或浮空输入
2. 配置AFIO(如果需要重映射的话)
3. 配置定时器
   1. 通过RCC寄存器开启TIM时钟
   2. 配置时基单元（时钟源、预分频器、计数器自增模式、自动重装器）
   3. 配置输入捕获单元（滤波器、边沿检测、通道直连或交叉、分频器）
   4. 配置实现自动清零计数器
      1. 配置从模式触发源（触发源为TI1FP1）
      2. 配置触发操作（触发Reset操作）
4. 开启定时器
5. 获取频率
   - N=CCR寄存器
   - f_c = CNT计数频率
   - Freq = f_c / N

:::code-tabs
@tab `User/main.cpp`
@[code cpp](./projects/stm32-makefile/08-Timer-输入比较-测PWM频率/User/main.cpp)

@tab `/System/InputCompare.h`
@[code cpp](./projects/stm32-makefile/08-Timer-输入比较-测PWM频率/System/InputCompare.h)

@tab `/System/InputCompare.c`
@[code cpp](./projects/stm32-makefile/08-Timer-输入比较-测PWM频率/System/InputCompare.c)

@tab `/System/PWM.h`
@[code cpp](./projects/stm32-makefile/08-Timer-输入比较-测PWM频率/System/PWM.h)

@tab `/System/PWM.c`
@[code cpp](./projects/stm32-makefile/08-Timer-输入比较-测PWM频率/System/PWM.c)
:::

**PWMI模式结构（同时测量频率和占空比）**

![Alt text](assets/images/image-59.png)

**测频原理/流程**

- 通道1用于测频率，和上面说的原理一样
- 通道2用于测占空比，
- 原理是，当第一个上升沿来到是，CNT计数器清零并重新计数，
- TIFP2配置为下降沿触发，那么当遇到方波中下降沿时，
- 通道2的分频器触发实现将CNT的值搬运到CCR2寄存器，
- 这个时候CNT的值记录的就是第一个上升沿到第一个下降沿之间的时常，也就能计算出占空比。
- 当遇到第二个上升沿时，CNT被清零，重新开始计数。

:::code-tabs
@tab `User/main.cpp`
@[code cpp](./projects/stm32-makefile/09-Timer-输入比较-PWMI模式-测PWM频率和脉冲宽度(占空比)/User/main.cpp)

@tab `/System/InputCompare.h`
@[code cpp](./projects/stm32-makefile/09-Timer-输入比较-PWMI模式-测PWM频率和脉冲宽度(占空比)/System/InputCompare.h)

@tab `/System/InputCompare.c`
@[code cpp](./projects/stm32-makefile/09-Timer-输入比较-PWMI模式-测PWM频率和脉冲宽度(占空比)/System/InputCompare.c)

@tab `/System/PWM.h`
@[code cpp](./projects/stm32-makefile/09-Timer-输入比较-PWMI模式-测PWM频率和脉冲宽度(占空比)/System/PWM.h)

@tab `/System/PWM.c`
@[code cpp](./projects/stm32-makefile/09-Timer-输入比较-PWMI模式-测PWM频率和脉冲宽度(占空比)/System/PWM.c)
:::

### 编码器接口

**EncoderInterface编码器接口**

- 编码器接口可接收增量（正交）编码器的信号，根据编码器旋转产生的正交信号脉冲，自动控制CNT计数寄存器自增或自减，从而指示编码器的位置、旋转方向和旋转速度
- 高级定时器和通用定时器都拥有1个编码器接口
- ![Alt text](assets/images/image-62.png)

**原理简图**

- 两个输入引脚来自输入捕获的通道1和通道2
- 不需要配置计数时钟和计数方向，因为增或减有编码器决定，
- 可以配置预分频器
- 可以配置ARR自动重装寄存器为0xffff，防止CNT过早溢出
- CNT计数器
  - 编码器读取到正转信号时，CNT自增，值为：0 1 2 3，可用来获取编码器位置
  - 编码器读取到反转信号时，CNT自减：值为：0 0xffff 0xfffe 0xfffd 转换成int16为：0 -1 -2 -3
- ![Alt text](assets/images/image-63.png)

**正交信号波形**

- 规律就是，
  - 正转时，
    - A相上升沿，B相低电平
    - A相下降沿，B相高电平
  - 反转时，
    - A相上升沿，B相高电平
    - A相下升沿，B相低电平
![Alt text](assets/images/image-60.png)

**编码器的三种工作模式**

- 第一种模式就是只对通道1计数
- 第二种模式就是只对通道2计数
- 第三种模式就是对通道1和通道2计数
- 计数的条件就是要看AB两相的波形是否满足条件，比如说，
  - A相上升沿，B相低电平，则判断为编码器正转，计数器自增
  - A相下升沿，B相高电平，则判断为编码器反转，计数器自减
- ![Alt text](assets/images/image-61.png)

**编码器模式下的计数器**

- ![Alt text](assets/images/image-64.png)
- 将其中任意一相波形反向，计数器增长方向也将发生改变
- ![Alt text](assets/images/image-65.png)

### 编码器测位置、测速案例

**步骤**

- 配置GPIO
  - 通过RCC寄存器开启GPIO外设时钟
  - 配置IO口为输入模式，上拉 下拉 或 浮空
- 配置TIM定时器
  - 通过RCC寄存器开启TIM定时器外设时钟
  - 配置时基单元
    - 预分频器可以不分频
    - 自动重装器可以配置为0xffff
  - 配置输入捕获单元
    - 配置滤波器
    - 配置边沿检测(极性选择器)，
    - 配置编码器接口模式
- 启动定时器
- 位置
  - 读取CNT计数器的值，转换成int16，代表了位置
- 速度
  - 方法1
    - 两次读取的位置值的差，比上两次读取的时间间隔，就是速度
    - V = (上一次读取的位置值-当前位置值) / 两次读取的时间间隔
    - = dP/dt
    - 但是这里的dt不能太大，否则会丢失精度，读取频率的周期要大于旋转速度
  - 方法2
    - 以一定的时间间隔t去读取计数器的值p，然后清空计数器
    - V = p/t
    - t不能太大
  - 方法3
    - 定时时间t,中断读取计数器的值p,然后清空计数器
    - V = p/t
    - t不能太大
  - 第一种方法可以同时得到位置信息和速度信息
  - 后两种方法要清空计数器，会丢失位置信息

:::code-tabs

@tab `main.cpp`
@[code cpp](./projects/stm32-makefile/10-Timer-编码器模式-测位置-测速度/User/main.cpp)

@tab `System/EncoderInterface.c`
@[code cpp](./projects/stm32-makefile/10-Timer-编码器模式-测位置-测速度/System/EncoderInterface.c)

@tab `System/EncoderInterface.h`
@[code cpp](./projects/stm32-makefile/10-Timer-编码器模式-测位置-测速度/System/EncoderInterface.h)

:::

## ADC模拟/数字转化器

**ADC简介**

- ADC（Analog-Digital Converter）模拟-数字转换器
- 可将引脚的模拟电压转换数字量
- 12位逐次逼近型ADC，最快1us转换时间
- 输入电压范围：0~3.3V，转换结果范围：0~4095
- 18个输入通道，可测量16个外部和2个内部信号源
- 规则组和注入组两个转换单元
- 模拟看门狗自动监测输入电压范围

> STM32F103C8T6 ADC资源：ADC1、ADC2，10个外部输入通道

**ADC原理图：ADC0809芯片框图**

- ADC0809是比较过去比较常用的ADC芯片
- 8位逐次逼近型ADC
- 通道选择
  - IN0~7为8个输入通道
  - ADDA~C为3bit的地址信号，用来选择通道
  - ALE为锁存信号，用来锁定通道。
- 开始转换
  - START为开始转换信号
  - CLOCK为推动逐次比较过程的时钟
- 逐次逼近
  - 电压比较器的两个输入分别来自通道选择器和DAC模拟数字转换器。
  - Vref为DAC的参考电压
    - 当Vref=5v时,0~255对应0~5v
  - SAR寄存器的值给到DAC,DAC输出电压到比较器,通过比较器输出电压的高低来判断SAR寄存器的值是偏大还是偏小，逐渐逼近实际被测电压。
  - 由于二进制的特性，逼近过程可以使用逐位比较（折半查找、二分查找）实现，总共从高到低需要比较8次，转换结束后，SAR寄存器的值就是未知电压的编码。
- 结束转换
  - EOC为结束转换信号（End Of Convert）
![Alt text](assets/images/image-66.png)

**ADC原理框图**

- **模拟多路开关**：
  - 用于实现将16路GPIO通道和另外两路通道连接至ADC
  - 可以同时选中最多4路，连接至ADC的注入通道
  - 可以同时选中最多16路，连接至ADC的规则通道
- **模拟至数字转换器**：
  - 用于实现将注入通道和规则通道的模拟量转换成数字量
  - 转换结果存放至**注入通道数据寄存器**或**规则通道数据寄存器**
  - **规则通道**
    - 最多可以同时转换16路通道，
    - 其数据寄存器有1个
  - **注入通道**
    - 最多可以同时转换4路通道，
    - 其数据寄存器有4个
- **规则通道数据寄存器**
  - 1x16位寄存器
  - 最好配合DMA实现，将转换结果转运，否则数据会被覆盖
- **注入通道数据寄存器**
  - 4x16位寄存器
  - 不用担心数据覆盖的问题
- **注入组的开始触发信号**
  - JEXTTRIG，用来实现软件触发开启ADC转换的位
  - JEXTSEL，用来选中触发开启转换的外部事件
  - ADCx_ETRGINJ_REMAP,用来选中外部引脚来实现触发开启转换
- **规则组的开始触发信号**
  - 略
- Vref
  - 模数转换器所需的参考电压
  - 芯片内部已经将Vref+和Vdda连接在一起了
- ADCCLK
  - 来自于ADC预分频器的时钟，用来驱动模数转换器工作
    - 需要参考RCC时钟树框图
  - 最大频率不能超过14Mhz
  - 当主频为72M时，ADC预分频器只能设置6或8，即12M或9Mhz
- 模拟看门狗
  - 可以存一个最大电压和最小电压
  - 然后选择指定通道看门
  - 到通道电压超出设置的电压范围时，将产生**模拟看门中断事件**
- 标志位
  - EOC转换结束信号，当注入通道**或**规则通道转换结束后触发
  - JEOC注入转换结束信号，当注入通道转换结束后触发
  
![Alt text](assets/images/image-67.png)

**ADC简化框图**

![Alt text](assets/images/image-68.png)

**18个ADC通道**
> 具体参考引脚功能表

|  通道  |     ADC1     | ADC2  | ADC3  |
| :----: | :----------: | :---: | :---: |
| 通道0  |     PA0      |  PA0  |  PA0  |
| 通道1  |     PA1      |  PA1  |  PA1  |
| 通道2  |     PA2      |  PA2  |  PA2  |
| 通道3  |     PA3      |  PA3  |  PA3  |
| 通道4  |     PA4      |  PA4  |  PF6  |
| 通道5  |     PA5      |  PA5  |  PF7  |
| 通道6  |     PA6      |  PA6  |  PF8  |
| 通道7  |     PA7      |  PA7  |  PF9  |
| 通道8  |     PB0      |  PB0  | PF10  |
| 通道9  |     PB1      |  PB1  |
| 通道10 |     PC0      |  PC0  |  PC0  |
| 通道11 |     PC1      |  PC1  |  PC1  |
| 通道12 |     PC2      |  PC2  |  PC2  |
| 通道13 |     PC3      |  PC3  |  PC3  |
| 通道14 |     PC4      |  PC4  |
| 通道15 |     PC5      |  PC5  |
| 通道16 |  温度传感器  |
| 通道17 | 内部参考电压 |


**四种转换模式**
- 单次转换，非扫描模式
  - 单次，只转换一次，每次转换都需要触发信号
  - 非扫描，只对序列1转换，转换前需要将通道x放到序列1的位置
  - ![Alt text](assets/images/image-69.png)
- 连续转换，非扫描模式
  - 连续，第一次转换需要触发信号，然后其转换结束信号会作为下一次转换的触发信号
  - 非扫描，只对序列1转换。
  - ![Alt text](assets/images/image-70.png)
- 单次转换，扫描模式
  - 单次，只转换一次
  - 扫描，对多个序列进行转换，
  - ![Alt text](assets/images/image-71.png)
- 连续转换，扫描模式
  - 连续，EOF信号作为下一次转换的开始转换信号
  - 扫描，对多个序列接连转换
  - ![Alt text](assets/images/image-72.png)

**规则通道外部触发**
- 外部引脚/定时器的选择需要配合AFIO来完成
![Alt text](assets/images/image-73.png)


**数据对齐方式**
- 由于ADC是12bit,所以转换结果也是12bit
- 左对齐，然后读取高8bit，可以读取到低精度的单字节数据。
- ![Alt text](assets/images/image-74.png)



**转换时间**
- AD转换的步骤：采样，保持，量化，编码
  - 采样保持，
    - 用小容量电容来存储待测电压，然后测量电容上的电压
    - 电容开始充电和停止充电的时间间隔就是采样保持的时间
  - 量化编码，
    - 逐次逼近，逐位比较过程所花费的时间
- STM32 ADC的总转换时间为：
	- TCONV = 采样时间 + 12.5个ADC周期
- 例如：当ADCCLK=14MHz，采样时间为1.5个ADC周期
	- TCONV = 1.5 + 12.5 = 14个ADC周期 = 1μs


**校准**

- ADC内置自校准模式。
- 校准可大幅减小因内部电容器组的变化而造成的准精度误差。
- 校准期间，在每个电容器上都会计算出一个误差修正码(数字值)，这个码用于消除在随后的转换中每个电容器上产生的误差
- 建议在每次上电后执行一次校准
- 启动校准前， ADC必须处于关电状态超过至少两个ADC时钟周期


**基本步骤**
- 配置GPIO
  - 通过RCC寄存器开启GPIO外设时钟
- 配置多路开关
  - 把GPIO等的通道接入ADC的规则组或注入组
- 配置ADC
  - 通过RCC寄存器配置ADCCLK预分频器
  - 配置ADC转换模式（单次转换连续转换，扫描模式或非扫描模式，通道数、触发源、数据对齐方向）
- 配置模拟看门狗（如果有需要）
  - 配置阈值
  - 配置监测通道
- 开启中断（如果有需要）
  - ITConfig开启对应的输出
  - NVIC配置中断优先级
- 开启ADC
  - ADC_Cmd
  - 校准ADC


**标准库相关函数**

```cpp
// "stm32f10x_rcc.h"

// 配置ADCCLK预分频器系数：2 4 6 8
// 实现对APB2的72Mhz时钟分频后输出到ADCCLK
void RCC_ADCCLKConfig(uint32_t RCC_PCLK2);
```


```cpp
// "stm32f10x_adc.h"

// 恢复默认配置
void ADC_DeInit(ADC_TypeDef* ADCx);
// 初始化ADC
void ADC_Init(ADC_TypeDef* ADCx, ADC_InitTypeDef* ADC_InitStruct);
// 初始化结构体
void ADC_StructInit(ADC_InitTypeDef* ADC_InitStruct);
// ADC开关
void ADC_Cmd(ADC_TypeDef* ADCx, FunctionalState NewState);
// 开启DMA输出信号
void ADC_DMACmd(ADC_TypeDef* ADCx, FunctionalState NewState);
// ADC中断输出控制,用来控制中断信号能否通向NVIC
void ADC_ITConfig(ADC_TypeDef* ADCx, uint16_t ADC_IT, FunctionalState NewState);
// 复位校准
void ADC_ResetCalibration(ADC_TypeDef* ADCx);
// 获取复位校准状态
FlagStatus ADC_GetResetCalibrationStatus(ADC_TypeDef* ADCx);
// 开始校准
void ADC_StartCalibration(ADC_TypeDef* ADCx);
// 获取开始校准状态
FlagStatus ADC_GetCalibrationStatus(ADC_TypeDef* ADCx);
// 软件触发AD转换
void ADC_SoftwareStartConvCmd(ADC_TypeDef* ADCx, FunctionalState NewState);
// 获取软件开始转换状态（SWSTART的状态）（实际上获取不到，
// 具体参考源码，其是通过检查SWSTART位来判断状态，但手册上说，SWSTART被软件置1后会被硬件立即清0）
// 所以其返回值不能反应转换是否结束
FlagStatus ADC_GetSoftwareStartConvStatus(ADC_TypeDef* ADCx);
// 配置间断模式
// 每隔几个通道间断检测
void ADC_DiscModeChannelCountConfig(ADC_TypeDef* ADCx, uint8_t Number);
// 是否启用间断模式
void ADC_DiscModeCmd(ADC_TypeDef* ADCx, FunctionalState NewState);
// 规则组通道配置，如序列1 和 通道2
void ADC_RegularChannelConfig(ADC_TypeDef* ADCx, uint8_t ADC_Channel, uint8_t Rank, uint8_t ADC_SampleTime);
// 是否允许外部触发转换控制
void ADC_ExternalTrigConvCmd(ADC_TypeDef* ADCx, FunctionalState NewState);
// 获取转换结果
uint16_t ADC_GetConversionValue(ADC_TypeDef* ADCx);
// 获取双ADC模式转换结果
uint32_t ADC_GetDualModeConversionValue(void);
// Injected都是注入组相关函数
void ADC_AutoInjectedConvCmd(ADC_TypeDef* ADCx, FunctionalState NewState);
void ADC_InjectedDiscModeCmd(ADC_TypeDef* ADCx, FunctionalState NewState);
void ADC_ExternalTrigInjectedConvConfig(ADC_TypeDef* ADCx, uint32_t ADC_ExternalTrigInjecConv);
void ADC_ExternalTrigInjectedConvCmd(ADC_TypeDef* ADCx, FunctionalState NewState);
void ADC_SoftwareStartInjectedConvCmd(ADC_TypeDef* ADCx, FunctionalState NewState);
FlagStatus ADC_GetSoftwareStartInjectedConvCmdStatus(ADC_TypeDef* ADCx);
void ADC_InjectedChannelConfig(ADC_TypeDef* ADCx, uint8_t ADC_Channel, uint8_t Rank, uint8_t ADC_SampleTime);
void ADC_InjectedSequencerLengthConfig(ADC_TypeDef* ADCx, uint8_t Length);
void ADC_SetInjectedOffset(ADC_TypeDef* ADCx, uint8_t ADC_InjectedChannel, uint16_t Offset);
uint16_t ADC_GetInjectedConversionValue(ADC_TypeDef* ADCx, uint8_t ADC_InjectedChannel);
// 模拟看门狗配置函数
// 是否启动
void ADC_AnalogWatchdogCmd(ADC_TypeDef* ADCx, uint32_t ADC_AnalogWatchdog);
// 配置高低阈值
void ADC_AnalogWatchdogThresholdsConfig(ADC_TypeDef* ADCx, uint16_t HighThreshold, uint16_t LowThreshold);
// 配置看门狗通道
void ADC_AnalogWatchdogSingleChannelConfig(ADC_TypeDef* ADCx, uint8_t ADC_Channel);
// 开启温度传感器/内部参考电压
void ADC_TempSensorVrefintCmd(FunctionalState NewState);
// 获取标志位状态，第二个参数传EOC,可以判断是否转换结束
FlagStatus ADC_GetFlagStatus(ADC_TypeDef* ADCx, uint8_t ADC_FLAG);
// 清除标志位
void ADC_ClearFlag(ADC_TypeDef* ADCx, uint8_t ADC_FLAG);
// 获取中断位
ITStatus ADC_GetITStatus(ADC_TypeDef* ADCx, uint16_t ADC_IT);
// 清除中断挂起位
void ADC_ClearITPendingBit(ADC_TypeDef* ADCx, uint16_t ADC_IT);
```


**案例：软件触发，单次转换，非扫描模式，**

:::code-tabs

@tab `main.cpp`
@[code cpp](./projects/stm32-makefile/11-ADC-规则组-单次转换-非扫描模式-软件触发/User/main.cpp)

@tab `AD.c`
@[code cpp](./projects/stm32-makefile/11-ADC-规则组-单次转换-非扫描模式-软件触发/System/AD.c)

@tab `AD.h`
@[code cpp](./projects/stm32-makefile/11-ADC-规则组-单次转换-非扫描模式-软件触发/System/AD.h)

:::

**案例：软件触发，读取多通道，单次转换，非扫描模式**

:::code-tabs
@tab `main.cpp`
@[code cpp](./projects/stm32-makefile/12-ADC-规则组-单次转换-非扫描模式-软件触发-读取多通道/User/main.cpp)

@tab `AD.c`
@[code cpp](./projects/stm32-makefile/12-ADC-规则组-单次转换-非扫描模式-软件触发-读取多通道/System/AD.c)

@tab `AD.h`
@[code cpp](./projects/stm32-makefile/12-ADC-规则组-单次转换-非扫描模式-软件触发-读取多通道/System/AD.h)

:::

**案例：软件触发，连续转换，非扫描模式**

:::code-tabs

@tab `main.cpp`
@[code cpp](./projects/stm32-makefile/13-ADC-规则组-连续转换-非扫描模式-软件触发/User/main.cpp)

@tab `AD.c`
@[code cpp](./projects/stm32-makefile/13-ADC-规则组-连续转换-非扫描模式-软件触发/System/AD.c)

:::
