---
title: motion_driver_6.12(官方DMP库)的移植和MPU6050驱动的实现
date: 2024-07-26T01:57:00
article: false
---


# motion_driver_6.12(官方DMP库)的移植和MPU6050驱动的实现

## 目录

- [motion\_driver\_6.12(官方DMP库)的移植和MPU6050驱动的实现](#motion_driver_612官方dmp库的移植和mpu6050驱动的实现)
  - [目录](#目录)
  - [motion driver\_6.12](#motion-driver_612)
    - [motion\_driver\_6.12的三个主要目录](#motion_driver_612的三个主要目录)
    - [motion\_driver\_6.12目录结构](#motion_driver_612目录结构)
  - [DMP](#dmp)
  - [MPL算法](#mpl算法)
  - [motion\_driver\_6.12的移植](#motion_driver_612的移植)
  - [基于motion\_driver\_6.12实现MPU6050的驱动](#基于motion_driver_612实现mpu6050的驱动)

## motion driver_6.12

- motion driver_6.12 是从invensense网站上下载的最新的DMP库。
- Motion Driver是传感器驱动程序层的嵌入式软件堆栈，可轻松配置和利用InvenSense运动跟踪解决方案的许多功能。
- 支持的运动设备为MPU6050 / MPU6500 / MPU9150 / MPU9250。
- 硬件和板载数字运动处理器（DMP）的许多功能都封装在可以使用和引用的模块化API中。
- Motion Driver设计为一种可轻松移植到大多数MCU的解决方案。
- Motion Driver 6.0包括一个用于ARM MCU和TI-MSP430的9轴解决方案。
- 仅6轴解决方案应继续参考运动驱动程序5.1.2，以便更容易理解软件。

### motion_driver_6.12的三个主要目录

- `driver/`
  - 包含了与 MPU 传感器通信和控制相关的底层驱动程序和库文件。
  - 实现了对MPU寄存器读写的函数(inv_mpu.c)
  - 基于对MPU寄存器读写的函数（inv_mpu.c），实现了：写入DMP固件、操作DMP的一些函数（inv_mpu_dmp_motion_driver.c）。
  - > **只需要对这部分代码做修改就能实现移植，主要为：**
    - 修改宏定义，提供通信接口
    - 修改宏定义，提供获取时间的接口
    - 修改宏定义，提供延时函数接口
- `mllite/`
  - 应该就是轻量级版本的Motion Processing Library (MPL)
  - 简化版的数据处理和传感器融合功能
- `mpl/` :
  - 完整的 Motion Processing Library
  - 提供了更高级的数据处理和传感器融合功能，包括姿态估计、传感器数据融合等。
  - 但只包含一些头文件，和一个`libmpllib.a`的静态库文件，没有源代码。

### motion_driver_6.12目录结构

motion_driver_6.12/

- driver/
  - eMPL/
    - `inv_mpu.c`  实现了与MPU交互的基本功能，如读写寄存器
    - `inv_mpu_dmp_motion_driver.c`: 实现了与DMP交互的功能，包括：写入DMP固件到MPU、初始化、数据处理。
    - `dmpmap.h` DMP寄存器映射的定义
    - `dmpKey.h` DMP 寄存器映射和键值定义
    - `inv_mpu.h` 头文件
    - `inv_mpu_dmp_motion_driver.h`: 头文件
  - include/
    - `log.h`: 日志记录功能的头文件。
    - `mlinclude.h`: 包含了其他头文件的汇总文件。
    - `mlmath.h`: 数学函数库的头文件。
    - `mlos.h`: 操作系统相关功能的头文件。
    - `mltypes.h`: 数据类型定义的头文件。
    - `stdint_invensense.h`: 固定宽度整数类型的定义文件。
- mllite/
  - `data_builder.c`: 构建数据结构的实现文件。
  - `data_builder.h`: 构建数据结构的头文件。
  - `hal_outputs.c`: 实现了硬件抽象层的输出功能。
  - `hal_outputs.h`: 定义了硬件抽象层的输出接口。
  - `invensense.h`: InvenSense 库的主头文件。
  - `message_layer.c`: 实现了消息层的功能。
  - `message_layer.h`: 定义了消息层的接口。
  - `mlmath.c`: 数学函数库的实现文件。
  - `ml_math_func.c`: 数学函数的具体实现。
  - `ml_math_func.h`: 数学函数的声明。
  - `mpl.c`: 实现了 Motion Processing Library 的核心功能。
  - `mpl.h`: 提供了 Motion Processing Library 的函数声明。
  - `results_holder.c`: 保存结果数据的实现文件。
  - `results_holder.h`: 定义了保存结果数据的接口。
  - `start_manager.c`: 管理启动过程的实现文件。
  - `start_manager.h`: 定义了管理启动过程的接口。
  - `storage_manager.c`: 管理数据存储的实现文件。
  - `storage_manager.h`: 定义了数据存储的接口。
- mpl/
  - `accel_auto_cal.h`: 加速度计自动校准的头文件。
  - `compass_vec_cal.h`: 罗盘向量校准的头文件。
  - `fast_no_motion.h`: 快速静止检测的头文件。
  - `fusion_9axis.h`: 九轴传感器融合的头文件。
  - `gyro_tc.h`: 陀螺仪温度补偿的头文件。
  - `heading_from_gyro.h`: 从陀螺仪计算航向的头文件。
  - `invensense_adv.h`: InvenSense 高级功能的头文件。
  - `inv_math.h`: InvenSense 数学函数库的头文件。
  - `libmpllib.a`: Motion Processing Library 的静态库文件。
  - `mag_disturb.h`: 磁场扰动检测的头文件。
  - `motion_no_motion.h`: 运动和静止检测的头文件。
  - `no_gyro_fusion.h`: 无陀螺仪传感器融合的头文件。
  - `quaternion_supervisor.h`: 四元数监督的头文件。

## DMP

> 简单来说，
>
> - DMP 是 MPU-6050 内部的一个硬件加速器，
> - 可以执行复杂的运动处理任务，如传感器数据融合、姿态估计等，无需主处理器的干预。
> - 可以直接输出四元数等姿态信息。

---

- DMP是MPU设备中的快速，低功耗，可编程，嵌入式轻量级处理器。
- 设计是从MCU卸载功能，如传感器融合和手势识别，以节省系统中的总体功率。
- DMP具有许多功能，可以在运行时动态关闭和打开。
- 也可以禁用个别功能，同时让其他功能运行。
- 除计步器外，所有DMP数据都输出到FIFO。
- DMP还可以编程为通过手势或数据就绪生成中断。
- 功能
  - ①3轴低功率四元数 --- 仅陀螺四元数。启用此功能后，将以200Hz的频率整合陀螺仪数据，同时以用户请求的速率将传感器融合数据输出到FIFO。200Hz集成将允许更准确的传感器融合数据。在MD6中，如果启用此功能，驱动程序会将3轴四元数推入MPL库，MPL将处理加速度和罗盘集成。
  - ②6轴低功率四元数 --- 陀螺仪和加速四元数。与3轴LPQ类似，以200Hz采样速率集成加速度和陀螺仪将以用户请求的速率输出到FIFO。3轴LPQ和6轴LPQ是互斥的，不应同时运行。如果启用，则可以将6轴四元数推入MPL库，MPL将处理9轴的罗盘集成。
  - ③方向手势识别 ---使用传感器数据检测设备方向是否有纵向，横向，反向纵向和反向方向的变化。非常依赖于方向矩阵。
  - ④点击手势识别 --- 设备上的多方向点击检测。此功能将让用户知道检测到哪个轴位置或负值。它可以检测多达4个多抽头.PSP可用于配置此功能的阈值，死区时间和分接头数。
  - ⑤计步器手势识别 --- 简单的计步器提供步数和时间戳。此功能会自动启用，但在检测到连续5秒的步骤后才会触发。5秒钟后，计数和时间戳将开始，数据可以从DMP存储器中读出。
  - ⑥DMP中断 --- 可以将中断配置为在传感器数据就绪（FIFO输出速率）或检测到抽头或方向手势时生成。

## MPL算法

- Motion Driver 6.12包含一个二进制库，其中包含用于传感器融合和动态校准的InvenSense专有算法。
- MD 6.12驱动程序将传感器数据推入MPL，MPL将处理包括罗盘集成在内的9轴传感器融合。
- 在启用MPL库之前配置MPL功能。它们可以通过API调用动态关闭和打开到MPL中。

| MPL 算法                 | 描述                                                                                                                                                                                                                                                           |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 陀螺仪校准（快速无动作） | 运行时间校准例程。一旦检测到无运动状态，陀螺校准将被触发。在无运动状态检测5秒内完成校准。                                                                                                                                                                      |
| 陀螺仪温度补偿           | 在每个陀螺仪校准之后，MPL将记录内部温度。在多个数据点之后，MPL将能够为陀螺仪建立多点温度斜率，并将其应用于校准偏差。这将补偿陀螺仪由于温度造成的漂移。                                                                                                         |
| 指南针校准               | 用于MPU9150和MPU9250的运行时间硬铁罗盘校准。MPL读取并建立设备周围的磁场环境。一旦存在足够的数据，可以应用罗盘偏移，并且可以生成9轴四元数。如果你处于一个磁场不稳定的环境，指南针就不会被校准。如果罗盘没有校准，四元数只使用6轴。图8在装置上的运动将加快校准。 |
| Mag干扰拒绝              | 校准后，MPL库将跟踪磁场，如果有异常检测，MPL库将拒绝指南针数据，并切换回6轴融合。在检测到磁干扰之后，MPL库将继续每隔5秒检查指南针数据。在每次检查中，如果干扰不再存在，它将切换回9轴融合，否则它将继续拒绝数据。                                               |
| 3轴融合                  | 陀螺角四元数                                                                                                                                                                                                                                                   |
| 6轴融合                  | 陀螺与加速度传感器的四元数                                                                                                                                                                                                                                     |
| 9轴融合                  | 陀螺仪、AccEL和罗盘四元数                                                                                                                                                                                                                                      |

## motion_driver_6.12的移植

> 只需要修改`inv_mpu.c` 和 `inv_mpu_dmp_motion_driver.c` 文件，添加一些宏定义，即可完成移植

`inv_mpu.c`

```cpp
// start ################# 添加的代码 #################
#if defined EMPL_TARGET_STM32F1
#include "Soft_I2C.h" 
#include "Delay.h" 
#include "RTC_Time.h" 
#include "OLED_Printf.h" 
// 提供通信接口 注意这里要求函数当执行成功时返回值0
#define i2c_write(slave_addr,reg_addr,length,p_data) (!Soft_I2C_Write_Device_Register_Datas(slave_addr,reg_addr,p_data,length))
#define i2c_read(slave_addr,reg_addr,length,p_data) (!Soft_I2C_Read_Device_Register_Datas(slave_addr,reg_addr,p_data,length))
// 提供延时接口
#define delay_ms    Delay_ms
// 提供获取时间的接口
#define get_ms      RTC_Time_GetTime_MS
// 提供打印输出的接口
#define log_i       OLED_Printf
#define log_e       OLED_Printf
#define min(a,b) ((a<b)?a:b)
// end ###############################################

#elif defined EMPL_TARGET_STM32F4
#include "i2c.h"   
#include "main.h"
#include "log.h"
#include "board-st_discovery.h"
#define i2c_write   Sensors_I2C_WriteRegister
#define i2c_read    Sensors_I2C_ReadRegister 
#define delay_ms    mdelay
#define get_ms      get_tick_count
#define log_i       MPL_LOGI
#define log_e       MPL_LOGE
#define min(a,b) ((a<b)?a:b)
```

`inv_mpu_dmp_motion_driver.c`

```cpp
// start ################# 添加的代码 #################
#if defined EMPL_TARGET_STM32F1
#include "Soft_I2C.h"
#include "RTC_Time.h"
// 提供通信接口
#define i2c_write(slave_addr,reg_addr,length,p_data) Soft_I2C_Write_Device_Register_Datas(slave_addr,reg_addr,p_data,length)
#define i2c_read(slave_addr,reg_addr,length,p_data) Soft_I2C_Read_Device_Register_Datas(slave_addr,reg_addr,p_data,length)
// 提供获取时间的接口
#define get_ms      RTC_Time_GetTime_MS
// end ###############################################

#elif defined EMPL_TARGET_STM32F4
#include "i2c.h"   
#include "main.h"
#include "board-st_discovery.h"
#define i2c_write   Sensors_I2C_WriteRegister
#define i2c_read    Sensors_I2C_ReadRegister
#define get_ms      get_tick_count
```

## 基于motion_driver_6.12实现MPU6050的驱动

:::code-tabs
@tab `/Drivers/mpu6050.h`
@[code cpp](./projects/template/Drivers/mpu6050.h)
@tab `/Drivers/mpu6050.c`
@[code cpp](./projects/template/Drivers/mpu6050.c)
:::
