import{_ as c,r,c as l,d as i,w as a,b as e,o as k,a as n,e as s}from"./app-B5uJTUF5.js";const u="/assets/image-BXVG57Dc.png",d={},m=e(`<h1 id="stm32-makefile项目的创建-c-c-混合编译" tabindex="-1"><a class="header-anchor" href="#stm32-makefile项目的创建-c-c-混合编译"><span>stm32-makefile项目的创建(c/c++混合编译)</span></a></h1><h2 id="工程文件结构" tabindex="-1"><a class="header-anchor" href="#工程文件结构"><span>工程文件结构</span></a></h2><pre><code class="language-bash">Core
    Inc
        stm32f10x_conf.h
        stm32f10x_it.h
    Src
        main.cpp
        stm32f10x_it.c
Drivers
    <span class="token comment"># 官方标准外设库:</span>
    <span class="token comment"># 文件目录保持原始结构</span>
    STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/ 
        CMSIS/
            CM3/CoreSupport/core_cm3/<span class="token punctuation">{</span>*.c,*.h<span class="token punctuation">}</span> <span class="token comment"># 内核接口</span>
            CM3/DeviceSupport/ST/STM32F10x/startup/gcc_ride7/startup_stm32f10x_md.s <span class="token comment"># 启动文件</span>
            CM3/DeviceSupport/ST/STM32F10x/<span class="token punctuation">{</span>stm32f10x.h<span class="token punctuation">}</span> <span class="token comment"># 头文件</span>
            CM3/DeviceSupport/ST/STM32F10x/system_stm32f10x<span class="token punctuation">{</span>.c,.h<span class="token punctuation">}</span>
        STM32F10x_StdPeriph_Driver/ <span class="token comment"># 标准外设库</span>
            inc/<span class="token punctuation">{</span>*.c<span class="token punctuation">}</span>
            inc/<span class="token punctuation">{</span>*.h<span class="token punctuation">}</span>
</code></pre><h2 id="makefile文件的生成和修改" tabindex="-1"><a class="header-anchor" href="#makefile文件的生成和修改"><span>Makefile文件的生成和修改</span></a></h2><ol><li>先使用STM32CubeMX生成Hal库的makefile工程 <ul><li><img src="`+u+'" alt="Alt text"></li></ul></li><li>删除大部分文件，保留两个文件 <ol><li><code>Makefile</code>文件</li><li>链接脚本，文件名可能为：<code>STM32F103C8Tx_FLASH.ld</code></li></ol></li><li>下载并解压<code>STM32F10x_StdPeriph_Lib_V3.5.0</code></li><li>复制<code>STM32F10x_StdPeriph_Lib_V3.5.0</code>到<code>Drivers</code>目录</li><li>修改<code>Makefile</code>文件</li></ol>',5),S=n("code",null,"修改后的Makefile",-1),_=n("code",null,"修改前的Makefile",-1),I=n("code",null,"STM32F103C8Tx_FLASH.ld",-1),f=n("pre",null,[n("code",{class:"language-cpp"},[s("# "),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},[s("Generic "),n("span",{class:"token function"},"Makefile"),s(),n("span",{class:"token punctuation"},"("),s("based on gcc"),n("span",{class:"token punctuation"},")")])]),s(`
#
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},[s("ChangeLog "),n("span",{class:"token operator"},":")])]),s(`
# 	`),n("span",{class:"token number"},"2024"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"07"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"22"),s(),n("span",{class:"token operator"},"-"),s(" 实现c"),n("span",{class:"token operator"},"/"),s("c"),n("span",{class:"token operator"},"++"),s("混合编译、调用openocd实现写入"),n("span",{class:"token operator"},"/"),s(`擦除
#	`),n("span",{class:"token number"},"2017"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"02"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"-"),s(" Several enhancements "),n("span",{class:"token operator"},"+"),s(` project update mode
#   `),n("span",{class:"token number"},"2015"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"07"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"22"),s(),n("span",{class:"token operator"},"-"),s(` first version
# `),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),s(`

######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"target")]),s(`
######################################
TARGET `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"template"),s(`


######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"building"),s(),n("span",{class:"token expression"},"variables")]),s(`
######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"debug"),s(),n("span",{class:"token expression"},[s("build"),n("span",{class:"token operator"},"?")])]),s(`
DEBUG `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"optimization")]),s(`
OPT `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),s(`Og


#######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"paths")]),s(`
#######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},"Build path")]),s(`
BUILD_DIR `),n("span",{class:"token operator"},"="),s(` build

######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"source")]),s(`
######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},"C sources")]),s(`
C_SOURCES `),n("span",{class:"token operator"},"="),s(`  \\
	$`),n("span",{class:"token punctuation"},"("),s("wildcard Core"),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f10x_it"),n("span",{class:"token punctuation"},"."),s("c"),n("span",{class:"token punctuation"},")"),s(` \\
	$`),n("span",{class:"token punctuation"},"("),s("wildcard Drivers"),n("span",{class:"token operator"},"/"),s("STM32F10x_StdPeriph_Lib_V3"),n("span",{class:"token punctuation"},"."),n("span",{class:"token number"},"5.0"),n("span",{class:"token operator"},"/"),s("Libraries"),n("span",{class:"token operator"},"/"),s("CMSIS"),n("span",{class:"token operator"},"/"),s("CM3"),n("span",{class:"token operator"},"/"),s("CoreSupport"),n("span",{class:"token comment"},`/*.c) \\
	$(wildcard Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/*.c) \\
	$(wildcard Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/STM32F10x_StdPeriph_Driver/src/*.c) \\

CPP_SOURCES =  \\
	$(wildcard Core/Src/main.cpp) \\


# ASM sources
ASM_SOURCES =  \\
	$(wildcard Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/startup/gcc_ride7/startup_stm32f10x_md.s) \\

# ASM sources
ASMM_SOURCES = 


#######################################
# binaries
#######################################
PREFIX = arm-none-eabi-
# The gcc compiler bin path can be either defined in make command via GCC_PATH variable (> make GCC_PATH=xxx)
# either it can be added to the PATH environment variable.
ifdef GCC_PATH
CC = $(GCC_PATH)/$(PREFIX)gcc
XX = $(GCC_PATH)/$(PREFIX)g++
AS = $(GCC_PATH)/$(PREFIX)gcc -x assembler-with-cpp
CP = $(GCC_PATH)/$(PREFIX)objcopy
SZ = $(GCC_PATH)/$(PREFIX)size
else
CC = $(PREFIX)gcc
XX = $(PREFIX)g++
AS = $(PREFIX)gcc -x assembler-with-cpp
CP = $(PREFIX)objcopy
SZ = $(PREFIX)size
endif
HEX = $(CP) -O ihex
BIN = $(CP) -O binary -S
 
#######################################
# C_FLAGS
#######################################
# cpu
CPU = -mcpu=cortex-m3

FLASH_START = 0x08000000
# fpu
# NONE for Cortex-M0/M0+/M3

# float-abi


# mcu
MCU = $(CPU) -mthumb $(FPU) $(FLOAT-ABI)

# macros for gcc
# AS defines
AS_DEFS = 

# C defines
C_DEFS =  \\
	-D STM32F10X_MD \\
	-D USE_STDPERIPH_DRIVER


# AS includes
AS_INCLUDES = 

# C includes
C_CPP_INCLUDES =  \\
	-I Core/Inc/ \\
	-I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/CoreSupport/ \\
	-I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/ \\
	-I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/STM32F10x_StdPeriph_Driver/inc/ \\


# compile gcc flags
ASFLAGS = $(MCU) $(AS_DEFS) $(AS_INCLUDES) $(OPT) -Wall -fdata-sections -ffunction-sections

C_FLAGS += $(MCU) $(C_DEFS) $(C_CPP_INCLUDES) $(OPT) -Wall -fdata-sections -ffunction-sections

CPP_FLAGS += $(MCU) $(C_DEFS) $(C_CPP_INCLUDES) $(OPT) -Wall -fdata-sections -ffunction-sections

ifeq ($(DEBUG), 1)
C_FLAGS += -g -gdwarf-2
CPP_FLAGS += -g -gdwarf-2
endif


# Generate dependency information
C_FLAGS += -MMD -MP -MF"$(@:%.o=%.d)"
CPP_FLAGS += -MMD -MP -MF"$(@:%.o=%.d)"


#######################################
# LDFLAGS
#######################################
# link script
LDSCRIPT = STM32F103C8Tx_FLASH.ld

# libraries
LIBS = -lc -lm -lnosys 
LIBDIR = 
LDFLAGS = $(MCU) -specs=nosys.specs -T$(LDSCRIPT) $(LIBDIR) $(LIBS) -Wl,-Map=$(BUILD_DIR)/$(TARGET).map,--cref -Wl,--gc-sections,--print-memory-usage 

# default action: build all
all: $(BUILD_DIR)/$(TARGET).elf $(BUILD_DIR)/$(TARGET).hex $(BUILD_DIR)/$(TARGET).bin


#######################################
# build the application
#######################################
# list of c program objects
OBJECTS = $(addprefix $(BUILD_DIR)/,$(notdir $(C_SOURCES:.c=.o)))
vpath %.c $(sort $(dir $(C_SOURCES)))
# list of cpp program objects
OBJECTS += $(addprefix $(BUILD_DIR)/,$(notdir $(CPP_SOURCES:.cpp=.o)))
vpath %.cpp $(sort $(dir $(CPP_SOURCES)))
# list of ASM program objects
OBJECTS += $(addprefix $(BUILD_DIR)/,$(notdir $(ASM_SOURCES:.s=.o)))
vpath %.s $(sort $(dir $(ASM_SOURCES)))
OBJECTS += $(addprefix $(BUILD_DIR)/,$(notdir $(ASMM_SOURCES:.S=.o)))
vpath %.S $(sort $(dir $(ASMM_SOURCES)))

$(BUILD_DIR)/%.o: %.c Makefile | $(BUILD_DIR) 
	$(CC) -c $(C_FLAGS) -Wa,-a,-ad,-alms=$(BUILD_DIR)/$(notdir $(<:.c=.lst)) $< -o $@

$(BUILD_DIR)/%.o: %.cpp Makefile | $(BUILD_DIR) 
	$(XX) -c $(CPP_FLAGS) -Wa,-a,-ad,-alms=$(BUILD_DIR)/$(notdir $(<:.cpp=.lst)) $< -o $@

$(BUILD_DIR)/%.o: %.s Makefile | $(BUILD_DIR)
	$(AS) -c $(C_FLAGS) $< -o $@

$(BUILD_DIR)/$(TARGET).elf: $(OBJECTS) Makefile
	$(CC) $(OBJECTS) $(LDFLAGS) -o $@
	$(SZ) $@

$(BUILD_DIR)/%.hex: $(BUILD_DIR)/%.elf | $(BUILD_DIR)
	$(HEX) $< $@
	
$(BUILD_DIR)/%.bin: $(BUILD_DIR)/%.elf | $(BUILD_DIR)
	$(BIN) $< $@	
	
$(BUILD_DIR):
	mkdir $@		

#######################################
# clean up
#######################################
clean:
	-rm -fR $(BUILD_DIR)

#######################################
# write
#######################################
write: $(BUILD_DIR)/$(TARGET).bin
	openocd \\
		-f interface/stlink.cfg \\
		-f target/stm32f1x.cfg \\
		-c "init; reset halt; wait_halt; flash write_image erase $(BUILD_DIR)/$(TARGET).bin \${FLASH_START}; reset; shutdown;" 
		@echo "Write Completed."

#######################################
# erase
#######################################
erase:
	openocd \\
		-f interface/stlink.cfg \\
		-f target/stm32f1x.cfg \\
		-c "init; reset halt; flash erase_sector 0 0 1; exit"
	@echo "Erase Completed."

#######################################
# reset
#######################################
reset:
	openocd \\
		-f interface/stlink.cfg \\
		-f target/stm32f1x.cfg \\
		-c "init; reset; exit"
	@echo "Erase Completed."
#######################################
# dependencies
#######################################
-include $(wildcard $(BUILD_DIR)/*.d)

# *** EOF ***
`)])],-1),D=n("pre",null,[n("code",{class:"language-cpp"},[s(`##########################################################################################################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},[s("File automatically"),n("span",{class:"token operator"},"-"),s("generated by tool"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s("projectgenerator"),n("span",{class:"token punctuation"},"]"),s(" version"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"4.2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token number"},"0"),n("span",{class:"token operator"},"-"),s("B44"),n("span",{class:"token punctuation"},"]"),s(" date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s("Sun Jul "),n("span",{class:"token number"},"21"),s(),n("span",{class:"token number"},"01"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"54"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"40"),s(" CST "),n("span",{class:"token number"},"2024"),n("span",{class:"token punctuation"},"]")])]),s(`
##########################################################################################################################

# `),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},[s("Generic "),n("span",{class:"token function"},"Makefile"),s(),n("span",{class:"token punctuation"},"("),s("based on gcc"),n("span",{class:"token punctuation"},")")])]),s(`
#
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},[s("ChangeLog "),n("span",{class:"token operator"},":")])]),s(`
#	`),n("span",{class:"token number"},"2017"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"02"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"-"),s(" Several enhancements "),n("span",{class:"token operator"},"+"),s(` project update mode
#   `),n("span",{class:"token number"},"2015"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"07"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"22"),s(),n("span",{class:"token operator"},"-"),s(` first version
# `),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),s(`

######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"target")]),s(`
######################################
TARGET `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"template"),s(`


######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"building"),s(),n("span",{class:"token expression"},"variables")]),s(`
######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"debug"),s(),n("span",{class:"token expression"},[s("build"),n("span",{class:"token operator"},"?")])]),s(`
DEBUG `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"optimization")]),s(`
OPT `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),s(`Og


#######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"paths")]),s(`
#######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},"Build path")]),s(`
BUILD_DIR `),n("span",{class:"token operator"},"="),s(` build

######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"source")]),s(`
######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},"C sources")]),s(`
C_SOURCES `),n("span",{class:"token operator"},"="),s(`  \\
Core`),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("main"),n("span",{class:"token punctuation"},"."),s(`c \\
Core`),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_it"),n("span",{class:"token punctuation"},"."),s(`c \\
Core`),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_hal_msp"),n("span",{class:"token punctuation"},"."),s(`c \\
Drivers`),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_hal_gpio_ex"),n("span",{class:"token punctuation"},"."),s(`c \\
Drivers`),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_hal_tim"),n("span",{class:"token punctuation"},"."),s(`c \\
Drivers`),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_hal_tim_ex"),n("span",{class:"token punctuation"},"."),s(`c \\
Drivers`),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_hal"),n("span",{class:"token punctuation"},"."),s(`c \\
Drivers`),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_hal_rcc"),n("span",{class:"token punctuation"},"."),s(`c \\
Drivers`),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_hal_rcc_ex"),n("span",{class:"token punctuation"},"."),s(`c \\
Drivers`),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_hal_gpio"),n("span",{class:"token punctuation"},"."),s(`c \\
Drivers`),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_hal_dma"),n("span",{class:"token punctuation"},"."),s(`c \\
Drivers`),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_hal_cortex"),n("span",{class:"token punctuation"},"."),s(`c \\
Drivers`),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_hal_pwr"),n("span",{class:"token punctuation"},"."),s(`c \\
Drivers`),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_hal_flash"),n("span",{class:"token punctuation"},"."),s(`c \\
Drivers`),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_hal_flash_ex"),n("span",{class:"token punctuation"},"."),s(`c \\
Drivers`),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("stm32f1xx_hal_exti"),n("span",{class:"token punctuation"},"."),s(`c \\
Core`),n("span",{class:"token operator"},"/"),s("Src"),n("span",{class:"token operator"},"/"),s("system_stm32f1xx"),n("span",{class:"token punctuation"},"."),s(`c  

`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},"ASM sources")]),s(`
ASM_SOURCES `),n("span",{class:"token operator"},"="),s(`  \\
startup_stm32f103xb`),n("span",{class:"token punctuation"},"."),s(`s

`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},"ASM sources")]),s(`
ASMM_SOURCES `),n("span",{class:"token operator"},"="),s(` 


#######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"binaries")]),s(`
#######################################
PREFIX `),n("span",{class:"token operator"},"="),s(" arm"),n("span",{class:"token operator"},"-"),s("none"),n("span",{class:"token operator"},"-"),s("eabi"),n("span",{class:"token operator"},"-"),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},[s("The gcc compiler bin path can be either defined in make command via GCC_PATH "),n("span",{class:"token function"},"variable"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},">"),s(" make GCC_PATH"),n("span",{class:"token operator"},"="),s("xxx"),n("span",{class:"token punctuation"},")")])]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"either"),s(),n("span",{class:"token expression"},[s("it can be added to the PATH environment variable"),n("span",{class:"token punctuation"},".")])]),s(`
ifdef GCC_PATH
CC `),n("span",{class:"token operator"},"="),s(" $"),n("span",{class:"token punctuation"},"("),s("GCC_PATH"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),s("$"),n("span",{class:"token punctuation"},"("),s("PREFIX"),n("span",{class:"token punctuation"},")"),s(`gcc
AS `),n("span",{class:"token operator"},"="),s(" $"),n("span",{class:"token punctuation"},"("),s("GCC_PATH"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),s("$"),n("span",{class:"token punctuation"},"("),s("PREFIX"),n("span",{class:"token punctuation"},")"),s("gcc "),n("span",{class:"token operator"},"-"),s("x assembler"),n("span",{class:"token operator"},"-"),s("with"),n("span",{class:"token operator"},"-"),s(`cpp
CP `),n("span",{class:"token operator"},"="),s(" $"),n("span",{class:"token punctuation"},"("),s("GCC_PATH"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),s("$"),n("span",{class:"token punctuation"},"("),s("PREFIX"),n("span",{class:"token punctuation"},")"),s(`objcopy
SZ `),n("span",{class:"token operator"},"="),s(" $"),n("span",{class:"token punctuation"},"("),s("GCC_PATH"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),s("$"),n("span",{class:"token punctuation"},"("),s("PREFIX"),n("span",{class:"token punctuation"},")"),s(`size
`),n("span",{class:"token keyword"},"else"),s(`
CC `),n("span",{class:"token operator"},"="),s(" $"),n("span",{class:"token punctuation"},"("),s("PREFIX"),n("span",{class:"token punctuation"},")"),s(`gcc
AS `),n("span",{class:"token operator"},"="),s(" $"),n("span",{class:"token punctuation"},"("),s("PREFIX"),n("span",{class:"token punctuation"},")"),s("gcc "),n("span",{class:"token operator"},"-"),s("x assembler"),n("span",{class:"token operator"},"-"),s("with"),n("span",{class:"token operator"},"-"),s(`cpp
CP `),n("span",{class:"token operator"},"="),s(" $"),n("span",{class:"token punctuation"},"("),s("PREFIX"),n("span",{class:"token punctuation"},")"),s(`objcopy
SZ `),n("span",{class:"token operator"},"="),s(" $"),n("span",{class:"token punctuation"},"("),s("PREFIX"),n("span",{class:"token punctuation"},")"),s(`size
endif
HEX `),n("span",{class:"token operator"},"="),s(" $"),n("span",{class:"token punctuation"},"("),s("CP"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(`O ihex
BIN `),n("span",{class:"token operator"},"="),s(" $"),n("span",{class:"token punctuation"},"("),s("CP"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("O binary "),n("span",{class:"token operator"},"-"),s(`S
 
#######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},"CFLAGS")]),s(`
#######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"cpu")]),s(`
CPU `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),s("mcpu"),n("span",{class:"token operator"},"="),s("cortex"),n("span",{class:"token operator"},"-"),s(`m3

`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"fpu")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},[s("NONE "),n("span",{class:"token keyword"},"for"),s(" Cortex"),n("span",{class:"token operator"},"-"),s("M0"),n("span",{class:"token operator"},"/"),s("M0"),n("span",{class:"token operator"},"+"),n("span",{class:"token operator"},"/"),s("M3")])]),s(`

`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"float"),n("span",{class:"token expression"},[n("span",{class:"token operator"},"-"),s("abi")])]),s(`


`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"mcu")]),s(`
MCU `),n("span",{class:"token operator"},"="),s(" $"),n("span",{class:"token punctuation"},"("),s("CPU"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("mthumb $"),n("span",{class:"token punctuation"},"("),s("FPU"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token punctuation"},"("),s("FLOAT"),n("span",{class:"token operator"},"-"),s("ABI"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"macros"),s(),n("span",{class:"token expression"},[n("span",{class:"token keyword"},"for"),s(" gcc")])]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},"AS defines")]),s(`
AS_DEFS `),n("span",{class:"token operator"},"="),s(` 

`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},"C defines")]),s(`
C_DEFS `),n("span",{class:"token operator"},"="),s(`  \\
`),n("span",{class:"token operator"},"-"),s(`DUSE_HAL_DRIVER \\
`),n("span",{class:"token operator"},"-"),s(`DSTM32F103xB


`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},"AS includes")]),s(`
AS_INCLUDES `),n("span",{class:"token operator"},"="),s(` 

`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},"C includes")]),s(`
C_INCLUDES `),n("span",{class:"token operator"},"="),s(`  \\
`),n("span",{class:"token operator"},"-"),s("ICore"),n("span",{class:"token operator"},"/"),s(`Inc \\
`),n("span",{class:"token operator"},"-"),s("IDrivers"),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s(`Inc \\
`),n("span",{class:"token operator"},"-"),s("IDrivers"),n("span",{class:"token operator"},"/"),s("STM32F1xx_HAL_Driver"),n("span",{class:"token operator"},"/"),s("Inc"),n("span",{class:"token operator"},"/"),s(`Legacy \\
`),n("span",{class:"token operator"},"-"),s("IDrivers"),n("span",{class:"token operator"},"/"),s("CMSIS"),n("span",{class:"token operator"},"/"),s("Device"),n("span",{class:"token operator"},"/"),s("ST"),n("span",{class:"token operator"},"/"),s("STM32F1xx"),n("span",{class:"token operator"},"/"),s(`Include \\
`),n("span",{class:"token operator"},"-"),s("IDrivers"),n("span",{class:"token operator"},"/"),s("CMSIS"),n("span",{class:"token operator"},"/"),s(`Include


`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"compile"),s(),n("span",{class:"token expression"},"gcc flags")]),s(`
ASFLAGS `),n("span",{class:"token operator"},"="),s(" $"),n("span",{class:"token punctuation"},"("),s("MCU"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token punctuation"},"("),s("AS_DEFS"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token punctuation"},"("),s("AS_INCLUDES"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token punctuation"},"("),s("OPT"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("Wall "),n("span",{class:"token operator"},"-"),s("fdata"),n("span",{class:"token operator"},"-"),s("sections "),n("span",{class:"token operator"},"-"),s("ffunction"),n("span",{class:"token operator"},"-"),s(`sections

CFLAGS `),n("span",{class:"token operator"},"+="),s(" $"),n("span",{class:"token punctuation"},"("),s("MCU"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token punctuation"},"("),s("C_DEFS"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token punctuation"},"("),s("C_INCLUDES"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token punctuation"},"("),s("OPT"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("Wall "),n("span",{class:"token operator"},"-"),s("fdata"),n("span",{class:"token operator"},"-"),s("sections "),n("span",{class:"token operator"},"-"),s("ffunction"),n("span",{class:"token operator"},"-"),s(`sections

`),n("span",{class:"token function"},"ifeq"),s(),n("span",{class:"token punctuation"},"("),s("$"),n("span",{class:"token punctuation"},"("),s("DEBUG"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
CFLAGS `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token operator"},"-"),s("g "),n("span",{class:"token operator"},"-"),s("gdwarf"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"2"),s(`
endif


`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},"Generate dependency information")]),s(`
CFLAGS `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token operator"},"-"),s("MMD "),n("span",{class:"token operator"},"-"),s("MP "),n("span",{class:"token operator"},"-"),s("MF"),n("span",{class:"token string"},'"$(@:%.o=%.d)"'),s(`


#######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token expression"},"LDFLAGS")]),s(`
#######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"link"),s(),n("span",{class:"token expression"},"script")]),s(`
LDSCRIPT `),n("span",{class:"token operator"},"="),s(" STM32F103C8Tx_FLASH"),n("span",{class:"token punctuation"},"."),s(`ld

`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"libraries")]),s(`
LIBS `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),s("lc "),n("span",{class:"token operator"},"-"),s("lm "),n("span",{class:"token operator"},"-"),s(`lnosys 
LIBDIR `),n("span",{class:"token operator"},"="),s(` 
LDFLAGS `),n("span",{class:"token operator"},"="),s(" $"),n("span",{class:"token punctuation"},"("),s("MCU"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("specs"),n("span",{class:"token operator"},"="),s("nano"),n("span",{class:"token punctuation"},"."),s("specs "),n("span",{class:"token operator"},"-"),s("T$"),n("span",{class:"token punctuation"},"("),s("LDSCRIPT"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token punctuation"},"("),s("LIBDIR"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token punctuation"},"("),s("LIBS"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("Wl"),n("span",{class:"token punctuation"},","),n("span",{class:"token operator"},"-"),s("Map"),n("span",{class:"token operator"},"="),s("$"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),s("$"),n("span",{class:"token punctuation"},"("),s("TARGET"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("map"),n("span",{class:"token punctuation"},","),n("span",{class:"token operator"},"--"),s("cref "),n("span",{class:"token operator"},"-"),s("Wl"),n("span",{class:"token punctuation"},","),n("span",{class:"token operator"},"--"),s("gc"),n("span",{class:"token operator"},"-"),s(`sections

`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"default"),s(),n("span",{class:"token expression"},[s("action"),n("span",{class:"token operator"},":"),s(" build all")])]),s(`
all`),n("span",{class:"token operator"},":"),s(" $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),s("$"),n("span",{class:"token punctuation"},"("),s("TARGET"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("elf $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),s("$"),n("span",{class:"token punctuation"},"("),s("TARGET"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("hex $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),s("$"),n("span",{class:"token punctuation"},"("),s("TARGET"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`bin


#######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"build"),s(),n("span",{class:"token expression"},"the application")]),s(`
#######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"list"),s(),n("span",{class:"token expression"},"of objects")]),s(`
OBJECTS `),n("span",{class:"token operator"},"="),s(" $"),n("span",{class:"token punctuation"},"("),s("addprefix $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},","),s("$"),n("span",{class:"token punctuation"},"("),s("notdir $"),n("span",{class:"token punctuation"},"("),s("C_SOURCES"),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"."),s("c"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"."),s("o"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
vpath `),n("span",{class:"token operator"},"%"),n("span",{class:"token punctuation"},"."),s("c $"),n("span",{class:"token punctuation"},"("),s("sort $"),n("span",{class:"token punctuation"},"("),s("dir $"),n("span",{class:"token punctuation"},"("),s("C_SOURCES"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"list"),s(),n("span",{class:"token expression"},"of ASM program objects")]),s(`
OBJECTS `),n("span",{class:"token operator"},"+="),s(" $"),n("span",{class:"token punctuation"},"("),s("addprefix $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},","),s("$"),n("span",{class:"token punctuation"},"("),s("notdir $"),n("span",{class:"token punctuation"},"("),s("ASM_SOURCES"),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"."),s("s"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"."),s("o"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
vpath `),n("span",{class:"token operator"},"%"),n("span",{class:"token punctuation"},"."),s("s $"),n("span",{class:"token punctuation"},"("),s("sort $"),n("span",{class:"token punctuation"},"("),s("dir $"),n("span",{class:"token punctuation"},"("),s("ASM_SOURCES"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
OBJECTS `),n("span",{class:"token operator"},"+="),s(" $"),n("span",{class:"token punctuation"},"("),s("addprefix $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},","),s("$"),n("span",{class:"token punctuation"},"("),s("notdir $"),n("span",{class:"token punctuation"},"("),s("ASMM_SOURCES"),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"."),s("S"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"."),s("o"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
vpath `),n("span",{class:"token operator"},"%"),n("span",{class:"token punctuation"},"."),s("S $"),n("span",{class:"token punctuation"},"("),s("sort $"),n("span",{class:"token punctuation"},"("),s("dir $"),n("span",{class:"token punctuation"},"("),s("ASMM_SOURCES"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

$`),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"%"),n("span",{class:"token punctuation"},"."),s("o"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"%"),n("span",{class:"token punctuation"},"."),s("c Makefile "),n("span",{class:"token operator"},"|"),s(" $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),s(` 
	$`),n("span",{class:"token punctuation"},"("),s("CC"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("c $"),n("span",{class:"token punctuation"},"("),s("CFLAGS"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("Wa"),n("span",{class:"token punctuation"},","),n("span",{class:"token operator"},"-"),s("a"),n("span",{class:"token punctuation"},","),n("span",{class:"token operator"},"-"),s("ad"),n("span",{class:"token punctuation"},","),n("span",{class:"token operator"},"-"),s("alms"),n("span",{class:"token operator"},"="),s("$"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),s("$"),n("span",{class:"token punctuation"},"("),s("notdir $"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"."),s("c"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"."),s("lst"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token operator"},"-"),s(`o $@

$`),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"%"),n("span",{class:"token punctuation"},"."),s("o"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"%"),n("span",{class:"token punctuation"},"."),s("s Makefile "),n("span",{class:"token operator"},"|"),s(" $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),s(`
	$`),n("span",{class:"token punctuation"},"("),s("AS"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("c $"),n("span",{class:"token punctuation"},"("),s("CFLAGS"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token operator"},"-"),s(`o $@
$`),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"%"),n("span",{class:"token punctuation"},"."),s("o"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"%"),n("span",{class:"token punctuation"},"."),s("S Makefile "),n("span",{class:"token operator"},"|"),s(" $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),s(`
	$`),n("span",{class:"token punctuation"},"("),s("AS"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("c $"),n("span",{class:"token punctuation"},"("),s("CFLAGS"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token operator"},"-"),s(`o $@

$`),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),s("$"),n("span",{class:"token punctuation"},"("),s("TARGET"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("elf"),n("span",{class:"token operator"},":"),s(" $"),n("span",{class:"token punctuation"},"("),s("OBJECTS"),n("span",{class:"token punctuation"},")"),s(` Makefile
	$`),n("span",{class:"token punctuation"},"("),s("CC"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token punctuation"},"("),s("OBJECTS"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token punctuation"},"("),s("LDFLAGS"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(`o $@
	$`),n("span",{class:"token punctuation"},"("),s("SZ"),n("span",{class:"token punctuation"},")"),s(` $@

$`),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"%"),n("span",{class:"token punctuation"},"."),s("hex"),n("span",{class:"token operator"},":"),s(" $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"%"),n("span",{class:"token punctuation"},"."),s("elf "),n("span",{class:"token operator"},"|"),s(" $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),s(`
	$`),n("span",{class:"token punctuation"},"("),s("HEX"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token operator"},"<"),s(` $@
	
$`),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"%"),n("span",{class:"token punctuation"},"."),s("bin"),n("span",{class:"token operator"},":"),s(" $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"%"),n("span",{class:"token punctuation"},"."),s("elf "),n("span",{class:"token operator"},"|"),s(" $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),s(`
	$`),n("span",{class:"token punctuation"},"("),s("BIN"),n("span",{class:"token punctuation"},")"),s(" $"),n("span",{class:"token operator"},"<"),s(` $@	
	
$`),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(`
	mkdir $@		

#######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"clean"),s(),n("span",{class:"token expression"},"up")]),s(`
#######################################
clean`),n("span",{class:"token operator"},":"),s(`
	`),n("span",{class:"token operator"},"-"),s("rm "),n("span",{class:"token operator"},"-"),s("fR $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),s(`
  
#######################################
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),s(),n("span",{class:"token directive keyword"},"dependencies")]),s(`
#######################################
`),n("span",{class:"token operator"},"-"),s("include $"),n("span",{class:"token punctuation"},"("),s("wildcard $"),n("span",{class:"token punctuation"},"("),s("BUILD_DIR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token comment"},`/*.d)

# *** EOF ***
`)])],-1),$=n("pre",null,[n("code",{class:"language-cpp"},[n("span",{class:"token comment"},`/*
******************************************************************************
**

**  File        : LinkerScript.ld
**
**  Author		: STM32CubeMX
**
**  Abstract    : Linker script for STM32F103C8Tx series
**                64Kbytes FLASH and 20Kbytes RAM
**
**                Set heap size, stack size and stack location according
**                to application requirements.
**
**                Set memory bank area and size if external memory is used.
**
**  Target      : STMicroelectronics STM32
**
**  Distribution: The file is distributed “as is,” without any warranty
**                of any kind.
**
*****************************************************************************
** @attention
**
** <h2><center>&copy; COPYRIGHT(c) 2019 STMicroelectronics</center></h2>
**
** Redistribution and use in source and binary forms, with or without modification,
** are permitted provided that the following conditions are met:
**   1. Redistributions of source code must retain the above copyright notice,
**      this list of conditions and the following disclaimer.
**   2. Redistributions in binary form must reproduce the above copyright notice,
**      this list of conditions and the following disclaimer in the documentation
**      and/or other materials provided with the distribution.
**   3. Neither the name of STMicroelectronics nor the names of its contributors
**      may be used to endorse or promote products derived from this software
**      without specific prior written permission.
**
** THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
** AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
** IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
** DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
** FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
** DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
** SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
** CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
** OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
** OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
**
*****************************************************************************
*/`),s(`

`),n("span",{class:"token comment"},"/* Entry Point */"),s(`
`),n("span",{class:"token function"},"ENTRY"),n("span",{class:"token punctuation"},"("),s("Reset_Handler"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"/* Highest address of the user mode stack */"),s(`
_estack `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ORIGIN"),n("span",{class:"token punctuation"},"("),s("RAM"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token function"},"LENGTH"),n("span",{class:"token punctuation"},"("),s("RAM"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("    "),n("span",{class:"token comment"},"/* end of RAM */"),s(`
`),n("span",{class:"token comment"},"/* Generate a link error if heap and stack don't fit into RAM */"),s(`
_Min_Heap_Size `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0x200"),n("span",{class:"token punctuation"},";"),s("      "),n("span",{class:"token comment"},"/* required amount of heap  */"),s(`
_Min_Stack_Size `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0x400"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/* required amount of stack */"),s(`

`),n("span",{class:"token comment"},"/* Specify the memory areas */"),s(`
MEMORY
`),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token function"},"RAM"),s(),n("span",{class:"token punctuation"},"("),s("xrw"),n("span",{class:"token punctuation"},")"),s("      "),n("span",{class:"token operator"},":"),s(" ORIGIN "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0x20000000"),n("span",{class:"token punctuation"},","),s(" LENGTH "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"20"),s(`K
`),n("span",{class:"token function"},"FLASH"),s(),n("span",{class:"token punctuation"},"("),s("rx"),n("span",{class:"token punctuation"},")"),s("      "),n("span",{class:"token operator"},":"),s(" ORIGIN "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0x8000000"),n("span",{class:"token punctuation"},","),s(" LENGTH "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"64"),s(`K
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"/* Define output sections */"),s(`
SECTIONS
`),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"/* The startup code goes first into FLASH */"),s(`
  `),n("span",{class:"token punctuation"},"."),s("isr_vector "),n("span",{class:"token operator"},":"),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ALIGN"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"KEEP"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("isr_vector"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"/* Startup code */"),s(`
    `),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ALIGN"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},">"),s(`FLASH

  `),n("span",{class:"token comment"},"/* The program code and other data goes into FLASH */"),s(`
  `),n("span",{class:"token punctuation"},"."),s("text "),n("span",{class:"token operator"},":"),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ALIGN"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("text"),n("span",{class:"token punctuation"},")"),s("           "),n("span",{class:"token comment"},"/* .text sections (code) */"),s(`
    `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("text"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},")"),s("          "),n("span",{class:"token comment"},"/* .text* sections (code) */"),s(`
    `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("glue_7"),n("span",{class:"token punctuation"},")"),s("         "),n("span",{class:"token comment"},"/* glue arm to thumb code */"),s(`
    `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("glue_7t"),n("span",{class:"token punctuation"},")"),s("        "),n("span",{class:"token comment"},"/* glue thumb to arm code */"),s(`
    `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("eh_frame"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token function"},"KEEP"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("init"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"KEEP"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("fini"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ALIGN"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    _etext `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},";"),s("        "),n("span",{class:"token comment"},"/* define a global symbols at end of code */"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},">"),s(`FLASH

  `),n("span",{class:"token comment"},"/* Constant data goes into FLASH */"),s(`
  `),n("span",{class:"token punctuation"},"."),s("rodata "),n("span",{class:"token operator"},":"),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ALIGN"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("rodata"),n("span",{class:"token punctuation"},")"),s("         "),n("span",{class:"token comment"},"/* .rodata sections (constants, strings, etc.) */"),s(`
    `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("rodata"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},")"),s("        "),n("span",{class:"token comment"},"/* .rodata* sections (constants, strings, etc.) */"),s(`
    `),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ALIGN"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},">"),s(`FLASH

  `),n("span",{class:"token punctuation"},"."),s("ARM"),n("span",{class:"token punctuation"},"."),s("extab   "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("ARM"),n("span",{class:"token punctuation"},"."),s("extab"),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"."),s("gnu"),n("span",{class:"token punctuation"},"."),s("linkonce"),n("span",{class:"token punctuation"},"."),s("armextab"),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},">"),s(`FLASH
  `),n("span",{class:"token punctuation"},"."),s("ARM "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    __exidx_start `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("ARM"),n("span",{class:"token punctuation"},"."),s("exidx"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},")"),s(`
    __exidx_end `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},">"),s(`FLASH

  `),n("span",{class:"token punctuation"},"."),s("preinit_array     "),n("span",{class:"token operator"},":"),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"PROVIDE_HIDDEN"),s(),n("span",{class:"token punctuation"},"("),s("__preinit_array_start "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"KEEP"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("preinit_array"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"PROVIDE_HIDDEN"),s(),n("span",{class:"token punctuation"},"("),s("__preinit_array_end "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},">"),s(`FLASH
  `),n("span",{class:"token punctuation"},"."),s("init_array "),n("span",{class:"token operator"},":"),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"PROVIDE_HIDDEN"),s(),n("span",{class:"token punctuation"},"("),s("__init_array_start "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"KEEP"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"SORT"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("init_array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"KEEP"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("init_array"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"PROVIDE_HIDDEN"),s(),n("span",{class:"token punctuation"},"("),s("__init_array_end "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},">"),s(`FLASH
  `),n("span",{class:"token punctuation"},"."),s("fini_array "),n("span",{class:"token operator"},":"),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"PROVIDE_HIDDEN"),s(),n("span",{class:"token punctuation"},"("),s("__fini_array_start "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"KEEP"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"SORT"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("fini_array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"KEEP"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("fini_array"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"PROVIDE_HIDDEN"),s(),n("span",{class:"token punctuation"},"("),s("__fini_array_end "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},">"),s(`FLASH

  `),n("span",{class:"token comment"},"/* used by the startup to initialize data */"),s(`
  _sidata `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"LOADADDR"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},"/* Initialized data sections goes into RAM, load LMA copy after code */"),s(`
  `),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},":"),s(` 
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ALIGN"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    _sdata `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},";"),s("        "),n("span",{class:"token comment"},"/* create a global symbol at data start */"),s(`
    `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},")"),s("           "),n("span",{class:"token comment"},"/* .data sections */"),s(`
    `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},")"),s("          "),n("span",{class:"token comment"},"/* .data* sections */"),s(`

    `),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ALIGN"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    _edata `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},";"),s("        "),n("span",{class:"token comment"},"/* define a global symbol at data end */"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},">"),s("RAM AT"),n("span",{class:"token operator"},">"),s(` FLASH

  
  `),n("span",{class:"token comment"},"/* Uninitialized data section */"),s(`
  `),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ALIGN"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"."),s("bss "),n("span",{class:"token operator"},":"),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"/* This is used by the startup in order to initialize the .bss secion */"),s(`
    _sbss `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},";"),s("         "),n("span",{class:"token comment"},"/* define a global symbol at bss start */"),s(`
    __bss_start__ `),n("span",{class:"token operator"},"="),s(" _sbss"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("bss"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("bss"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),s("COMMON"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ALIGN"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    _ebss `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},";"),s("         "),n("span",{class:"token comment"},"/* define a global symbol at bss end */"),s(`
    __bss_end__ `),n("span",{class:"token operator"},"="),s(" _ebss"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},">"),s(`RAM

  `),n("span",{class:"token comment"},"/* User_heap_stack section, used to check that there is enough RAM left */"),s(`
  `),n("span",{class:"token punctuation"},"."),s("_user_heap_stack "),n("span",{class:"token operator"},":"),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ALIGN"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"PROVIDE"),s(),n("span",{class:"token punctuation"},"("),s(" end "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"PROVIDE"),s(),n("span",{class:"token punctuation"},"("),s(" _end "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"+"),s(" _Min_Heap_Size"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"+"),s(" _Min_Stack_Size"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ALIGN"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},">"),s(`RAM

  

  `),n("span",{class:"token comment"},"/* Remove information from the standard libraries */"),s(`
  `),n("span",{class:"token operator"},"/"),s("DISCARD"),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token operator"},":"),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    libc`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"a"),s(),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},")"),s(`
    libm`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"a"),s(),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},")"),s(`
    libgcc`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"a"),s(),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token punctuation"},"."),s("ARM"),n("span",{class:"token punctuation"},"."),s("attributes "),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),s("ARM"),n("span",{class:"token punctuation"},"."),s("attributes"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`)])],-1),h=e(`<p>主要添加/修改的内容为</p><pre><code class="language-makefile"><span class="token comment">######################################</span>
<span class="token comment"># source</span>
<span class="token comment">######################################</span>
<span class="token comment"># C sources</span>
C_SOURCES <span class="token operator">=</span>  \\
 <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> Core/Src/stm32f10x_it.c<span class="token punctuation">)</span> \\
 <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/CoreSupport/*.c<span class="token punctuation">)</span> \\
 <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/*.c<span class="token punctuation">)</span> \\
 <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/STM32F10x_StdPeriph_Driver/src/*.c<span class="token punctuation">)</span> \\

CPP_SOURCES <span class="token operator">=</span>  \\
 <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> Core/Src/*.cpp<span class="token punctuation">)</span> \\


<span class="token comment"># ASM sources</span>
ASM_SOURCES <span class="token operator">=</span>  \\
 <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/startup/gcc_ride7/startup_stm32f10x_md.s<span class="token punctuation">)</span> \\

FLASH_START <span class="token operator">=</span> 0x08000000

<span class="token comment"># C defines</span>
<span class="token comment"># 定义芯片型号</span>
<span class="token comment"># 定义使用标准外设库</span>
C_DEFS <span class="token operator">=</span>  \\
 -D STM32F10X_MD \\
 -D USE_STDPERIPH_DRIVER

<span class="token comment"># C includes</span>
C_CPP_INCLUDES <span class="token operator">=</span>  \\
 -I Core/Inc/ \\
 -I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/CoreSupport/ \\
 -I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/ \\
 -I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/STM32F10x_StdPeriph_Driver/inc/ \\

CPP_FLAGS <span class="token operator">+=</span> <span class="token variable">$</span><span class="token punctuation">(</span>MCU<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>C_DEFS<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>C_CPP_INCLUDES<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>OPT<span class="token punctuation">)</span> -Wall -fdata-sections -ffunction-sections

<span class="token keyword">ifeq</span> <span class="token punctuation">(</span><span class="token variable">$</span><span class="token punctuation">(</span>DEBUG<span class="token punctuation">)</span>, 1<span class="token punctuation">)</span>
C_FLAGS <span class="token operator">+=</span> -g -gdwarf-2
CPP_FLAGS <span class="token operator">+=</span> -g -gdwarf-2
<span class="token keyword">endif</span>

<span class="token comment"># Generate dependency information</span>
C_FLAGS <span class="token operator">+=</span> -MMD -MP -MF<span class="token string">&quot;$(@:%.o=%.d)&quot;</span>
CPP_FLAGS <span class="token operator">+=</span> -MMD -MP -MF<span class="token string">&quot;$(@:%.o=%.d)&quot;</span>


<span class="token comment"># link script</span>
LDSCRIPT <span class="token operator">=</span> STM32F103C8Tx_FLASH.ld

<span class="token comment"># libraries</span>
LIBS <span class="token operator">=</span> -lc -lm -lnosys 
LIBDIR <span class="token operator">=</span> 
<span class="token comment"># 改成 -specs=nosys.specs</span>
<span class="token comment"># 添加 -Wl,--gc-sections,--print-memory-usage # 打印输出内存使用情况</span>
<span class="token comment"># 添加 -u _printf_float # 实现浮点数格式化输出 printf(&quot;%f&quot;,val);</span>
LDFLAGS <span class="token operator">=</span> <span class="token variable">$</span><span class="token punctuation">(</span>MCU<span class="token punctuation">)</span> -specs<span class="token operator">=</span>nosys.specs -T<span class="token variable">$</span><span class="token punctuation">(</span>LDSCRIPT<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>LIBDIR<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>LIBS<span class="token punctuation">)</span> -Wl,-Map<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span>/<span class="token variable">$</span><span class="token punctuation">(</span>TARGET<span class="token punctuation">)</span>.map,--cref -Wl,--gc-sections,--print-memory-usage 

<span class="token comment">#######################################</span>
<span class="token comment"># build the application</span>
<span class="token comment">#######################################</span>
<span class="token comment"># list of c program objects</span>
OBJECTS <span class="token operator">=</span> <span class="token variable">$</span><span class="token punctuation">(</span>addprefix <span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span>/,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">notdir</span> <span class="token variable">$</span><span class="token punctuation">(</span>C_SOURCES<span class="token punctuation">:</span>.c<span class="token operator">=</span>.o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">vpath</span> %.c <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">sort</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">dir</span> <span class="token variable">$</span><span class="token punctuation">(</span>C_SOURCES<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># list of cpp program objects</span>
OBJECTS <span class="token operator">+=</span> <span class="token variable">$</span><span class="token punctuation">(</span>addprefix <span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span>/,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">notdir</span> <span class="token variable">$</span><span class="token punctuation">(</span>CPP_SOURCES<span class="token punctuation">:</span>.cpp<span class="token operator">=</span>.o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">vpath</span> %.cpp <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">sort</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">dir</span> <span class="token variable">$</span><span class="token punctuation">(</span>CPP_SOURCES<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token target symbol"><span class="token variable">$</span>(BUILD_DIR)/%.o</span><span class="token punctuation">:</span> %.c Makefile <span class="token operator">|</span> <span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span> 
 <span class="token variable">$</span><span class="token punctuation">(</span>CC<span class="token punctuation">)</span> -c <span class="token variable">$</span><span class="token punctuation">(</span>C_FLAGS<span class="token punctuation">)</span> -Wa,-a,-ad,-alms<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span>/<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">notdir</span> <span class="token variable">$</span><span class="token punctuation">(</span>&lt;<span class="token punctuation">:</span>.c<span class="token operator">=</span>.lst<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token variable">$&lt;</span> -o <span class="token variable">$@</span>

<span class="token target symbol"><span class="token variable">$</span>(BUILD_DIR)/%.o</span><span class="token punctuation">:</span> %.cpp Makefile <span class="token operator">|</span> <span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span> 
 <span class="token variable">$</span><span class="token punctuation">(</span>XX<span class="token punctuation">)</span> -c <span class="token variable">$</span><span class="token punctuation">(</span>CPP_FLAGS<span class="token punctuation">)</span> -Wa,-a,-ad,-alms<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span>/<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">notdir</span> <span class="token variable">$</span><span class="token punctuation">(</span>&lt;<span class="token punctuation">:</span>.cpp<span class="token operator">=</span>.lst<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token variable">$&lt;</span> -o <span class="token variable">$@</span>

<span class="token target symbol"><span class="token variable">$</span>(BUILD_DIR)/%.o</span><span class="token punctuation">:</span> %.s Makefile <span class="token operator">|</span> <span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span>
 <span class="token variable">$</span><span class="token punctuation">(</span>AS<span class="token punctuation">)</span> -c <span class="token variable">$</span><span class="token punctuation">(</span>C_FLAGS<span class="token punctuation">)</span> <span class="token variable">$&lt;</span> -o <span class="token variable">$@</span>



</code></pre><h2 id="编写makefile指令实现写入-擦除" tabindex="-1"><a class="header-anchor" href="#编写makefile指令实现写入-擦除"><span>编写makefile指令实现写入\\擦除</span></a></h2><pre><code class="language-makefile"><span class="token comment">#######################################</span>
<span class="token comment"># write</span>
<span class="token comment">#######################################</span>
<span class="token target symbol">write</span><span class="token punctuation">:</span> <span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span>/<span class="token variable">$</span><span class="token punctuation">(</span>TARGET<span class="token punctuation">)</span>.bin
 openocd \\
  -f interface/stlink.cfg \\
  -f target/stm32f1x.cfg \\
  -c <span class="token string">&quot;init; reset halt; wait_halt; flash write_image erase $(BUILD_DIR)/$(TARGET).bin \${FLASH_START}; reset; shutdown;&quot;</span> 
  <span class="token operator">@</span>echo <span class="token string">&quot;Write Completed.&quot;</span>

<span class="token comment">#######################################</span>
<span class="token comment"># erase</span>
<span class="token comment">#######################################</span>
<span class="token target symbol">erase</span><span class="token punctuation">:</span>
 openocd \\
  -f interface/stlink.cfg \\
  -f target/stm32f1x.cfg \\
  -c <span class="token string">&quot;init; reset halt; flash erase_sector 0 0 1; exit&quot;</span>
 <span class="token operator">@</span>echo <span class="token string">&quot;Erase Completed.&quot;</span>

<span class="token comment">#######################################</span>
<span class="token comment"># reset</span>
<span class="token comment">#######################################</span>
<span class="token target symbol">reset</span><span class="token punctuation">:</span>
 openocd \\
  -f interface/stlink.cfg \\
  -f target/stm32f1x.cfg \\
  -c <span class="token string">&quot;init; reset; exit&quot;</span>
 <span class="token operator">@</span>echo <span class="token string">&quot;Reset Completed.&quot;</span>
</code></pre>`,4);function C(b,T){const p=r("CodeTabs");return k(),l("div",null,[m,i(p,{id:"56",data:[{id:"<code v-pre>修改后的Makefile</code>"},{id:"<code v-pre>修改前的Makefile</code>"},{id:"<code v-pre>STM32F103C8Tx_FLASH.ld</code>"}]},{title0:a(({value:t,isActive:o})=>[S]),title1:a(({value:t,isActive:o})=>[_]),title2:a(({value:t,isActive:o})=>[I]),tab0:a(({value:t,isActive:o})=>[f]),tab1:a(({value:t,isActive:o})=>[D]),tab2:a(({value:t,isActive:o})=>[$]),_:1}),h])}const A=c(d,[["render",C],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/%E7%94%B5%E5%AD%90/stm32-makefile%E6%A8%A1%E6%9D%BF%E5%B7%A5%E7%A8%8B%E7%9A%84%E5%88%9B%E5%BB%BA/","title":"stm32-makefile项目的创建(c/c++混合编译)","lang":"zh-CN","frontmatter":{"title":"stm32-makefile项目的创建(c/c++混合编译)","date":"2024-07-21T04:01:00.000Z","description":"stm32-makefile项目的创建(c/c++混合编译) 工程文件结构 Makefile文件的生成和修改 先使用STM32CubeMX生成Hal库的makefile工程 Alt text 删除大部分文件，保留两个文件 Makefile文件 链接脚本，文件名可能为：STM32F103C8Tx_FLASH.ld 下载并解压STM32F10x_StdPe...","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E7%94%B5%E5%AD%90/stm32-makefile%E6%A8%A1%E6%9D%BF%E5%B7%A5%E7%A8%8B%E7%9A%84%E5%88%9B%E5%BB%BA/"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"stm32-makefile项目的创建(c/c++混合编译)"}],["meta",{"property":"og:description","content":"stm32-makefile项目的创建(c/c++混合编译) 工程文件结构 Makefile文件的生成和修改 先使用STM32CubeMX生成Hal库的makefile工程 Alt text 删除大部分文件，保留两个文件 Makefile文件 链接脚本，文件名可能为：STM32F103C8Tx_FLASH.ld 下载并解压STM32F10x_StdPe..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-22T16:53:14.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:published_time","content":"2024-07-21T04:01:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-22T16:53:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"stm32-makefile项目的创建(c/c++混合编译)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-21T04:01:00.000Z\\",\\"dateModified\\":\\"2024-07-22T16:53:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"工程文件结构","slug":"工程文件结构","link":"#工程文件结构","children":[]},{"level":2,"title":"Makefile文件的生成和修改","slug":"makefile文件的生成和修改","link":"#makefile文件的生成和修改","children":[]},{"level":2,"title":"编写makefile指令实现写入\\\\擦除","slug":"编写makefile指令实现写入-擦除","link":"#编写makefile指令实现写入-擦除","children":[]}],"git":{"createdTime":1721505726000,"updatedTime":1721667194000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":3}]},"readingTime":{"minutes":1.82,"words":545},"filePathRelative":"电子/stm32-makefile模板工程的创建/index.md","localizedDate":"2024年7月21日","excerpt":"","autoDesc":true}');export{A as comp,v as data};
