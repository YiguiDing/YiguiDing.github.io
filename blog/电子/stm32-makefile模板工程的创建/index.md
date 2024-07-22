---
title: stm32-makefile项目的创建(c/c++混合编译)
date: 2024-07-21T04:01:00
---


# stm32-makefile项目的创建(c/c++混合编译)

## 工程文件结构

```bash
Core
    Inc
        stm32f10x_conf.h
        stm32f10x_it.h
    Src
        main.cpp
        stm32f10x_it.c
Drivers
    # 官方标准外设库:
    # 文件目录保持原始结构
    STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/ 
        CMSIS/
            CM3/CoreSupport/core_cm3/{*.c,*.h} # 内核接口
            CM3/DeviceSupport/ST/STM32F10x/startup/gcc_ride7/startup_stm32f10x_md.s # 启动文件
            CM3/DeviceSupport/ST/STM32F10x/{stm32f10x.h} # 头文件
            CM3/DeviceSupport/ST/STM32F10x/system_stm32f10x{.c,.h}
        STM32F10x_StdPeriph_Driver/ # 标准外设库
            inc/{*.c}
            inc/{*.h}
```

## Makefile文件的生成和修改

1. 先使用STM32CubeMX生成Hal库的makefile工程
   - ![Alt text](assets/images/image.png)
2. 删除大部分文件，保留两个文件
   1. `Makefile`文件
   2. 链接脚本，文件名可能为：`STM32F103C8Tx_FLASH.ld`
3. 下载并解压`STM32F10x_StdPeriph_Lib_V3.5.0`
4. 复制`STM32F10x_StdPeriph_Lib_V3.5.0`到`Drivers`目录
5. 修改`Makefile`文件

:::code-tabs
@tab `修改后的Makefile`
@[code cpp](./projects/template/Makefile)
@tab `修改前的Makefile`
@[code cpp](./projects/template/Makefile-origin)
@tab `STM32F103C8Tx_FLASH.ld`
@[code cpp](./projects/template/STM32F103C8Tx_FLASH.ld)
:::

主要添加/修改的内容为

```makefile
######################################
# source
######################################
# C sources
C_SOURCES =  \
 $(wildcard Core/Src/stm32f10x_it.c) \
 $(wildcard Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/CoreSupport/*.c) \
 $(wildcard Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/*.c) \
 $(wildcard Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/STM32F10x_StdPeriph_Driver/src/*.c) \

CPP_SOURCES =  \
 $(wildcard Core/Src/*.cpp) \


# ASM sources
ASM_SOURCES =  \
 $(wildcard Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/startup/gcc_ride7/startup_stm32f10x_md.s) \

FLASH_START = 0x08000000

# C defines
# 定义芯片型号
# 定义使用标准外设库
C_DEFS =  \
 -D STM32F10X_MD \
 -D USE_STDPERIPH_DRIVER

# C includes
C_CPP_INCLUDES =  \
 -I Core/Inc/ \
 -I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/CoreSupport/ \
 -I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/ \
 -I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/STM32F10x_StdPeriph_Driver/inc/ \

CPP_FLAGS += $(MCU) $(C_DEFS) $(C_CPP_INCLUDES) $(OPT) -Wall -fdata-sections -ffunction-sections

ifeq ($(DEBUG), 1)
C_FLAGS += -g -gdwarf-2
CPP_FLAGS += -g -gdwarf-2
endif

# Generate dependency information
C_FLAGS += -MMD -MP -MF"$(@:%.o=%.d)"
CPP_FLAGS += -MMD -MP -MF"$(@:%.o=%.d)"


# link script
LDSCRIPT = STM32F103C8Tx_FLASH.ld

# libraries
LIBS = -lc -lm -lnosys 
LIBDIR = 
# 改成 -specs=nosys.specs
# 添加 -Wl,--gc-sections,--print-memory-usage # 打印输出内存使用情况
# 添加 -u _printf_float # 实现浮点数格式化输出 printf("%f",val);
LDFLAGS = $(MCU) -specs=nosys.specs -T$(LDSCRIPT) $(LIBDIR) $(LIBS) -Wl,-Map=$(BUILD_DIR)/$(TARGET).map,--cref -Wl,--gc-sections,--print-memory-usage 

#######################################
# build the application
#######################################
# list of c program objects
OBJECTS = $(addprefix $(BUILD_DIR)/,$(notdir $(C_SOURCES:.c=.o)))
vpath %.c $(sort $(dir $(C_SOURCES)))
# list of cpp program objects
OBJECTS += $(addprefix $(BUILD_DIR)/,$(notdir $(CPP_SOURCES:.cpp=.o)))
vpath %.cpp $(sort $(dir $(CPP_SOURCES)))


$(BUILD_DIR)/%.o: %.c Makefile | $(BUILD_DIR) 
 $(CC) -c $(C_FLAGS) -Wa,-a,-ad,-alms=$(BUILD_DIR)/$(notdir $(<:.c=.lst)) $< -o $@

$(BUILD_DIR)/%.o: %.cpp Makefile | $(BUILD_DIR) 
 $(XX) -c $(CPP_FLAGS) -Wa,-a,-ad,-alms=$(BUILD_DIR)/$(notdir $(<:.cpp=.lst)) $< -o $@

$(BUILD_DIR)/%.o: %.s Makefile | $(BUILD_DIR)
 $(AS) -c $(C_FLAGS) $< -o $@



```

## 编写makefile指令实现写入\擦除

```makefile
#######################################
# write
#######################################
write: $(BUILD_DIR)/$(TARGET).bin
 openocd \
  -f interface/stlink.cfg \
  -f target/stm32f1x.cfg \
  -c "init; reset halt; wait_halt; flash write_image erase $(BUILD_DIR)/$(TARGET).bin ${FLASH_START}; reset; shutdown;" 
  @echo "Write Completed."

#######################################
# erase
#######################################
erase:
 openocd \
  -f interface/stlink.cfg \
  -f target/stm32f1x.cfg \
  -c "init; reset halt; flash erase_sector 0 0 1; exit"
 @echo "Erase Completed."

#######################################
# reset
#######################################
reset:
 openocd \
  -f interface/stlink.cfg \
  -f target/stm32f1x.cfg \
  -c "init; reset; exit"
 @echo "Reset Completed."
```
