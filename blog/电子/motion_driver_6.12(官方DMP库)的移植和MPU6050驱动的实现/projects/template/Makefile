# ------------------------------------------------
# Generic Makefile (based on gcc)
#
# ChangeLog :
# 	2024-07-22 - 实现c/c++混合编译、调用openocd实现写入/擦除
#	2017-02-10 - Several enhancements + project update mode
#   2015-07-22 - first version
# ------------------------------------------------

######################################
# target
######################################
TARGET = template


######################################
# building variables
######################################
# debug build?
DEBUG = 1
# optimization
OPT = -Og


#######################################
# paths
#######################################
# Build path
BUILD_DIR = build

######################################
# source
######################################
# C sources
C_SOURCES =  \
	$(wildcard Core/Src/main.c) \
	$(wildcard Core/Src/stm32f10x_it.c) \
	$(wildcard Drivers/*.c) \
	$(wildcard Library/STM32F10x_StdPeriph_Lib_V3.5.0/CMSIS/CM3/CoreSupport/*.c) \
	$(wildcard Library/STM32F10x_StdPeriph_Lib_V3.5.0/CMSIS/CM3/DeviceSupport/ST/STM32F10x/*.c) \
	$(wildcard Library/STM32F10x_StdPeriph_Lib_V3.5.0/STM32F10x_StdPeriph_Driver/src/*.c) \
	$(wildcard Library/motion_driver_6.12/driver/eMPL/*.c) \
	$(wildcard Library/motion_driver_6.12/mllite/*.c) \
	$(wildcard Library/motion_driver_6.12/eMPL-hal/*.c) \
	$(wildcard Library/motion_driver_6.12/mpl/*.c) \


CPP_SOURCES =  \
	# $(wildcard Core/Src/main.cpp) \


# ASM sources
ASM_SOURCES =  \
	$(wildcard Library/STM32F10x_StdPeriph_Lib_V3.5.0/CMSIS/CM3/DeviceSupport/ST/STM32F10x/startup/gcc_ride7/startup_stm32f10x_md.s) \

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
C_DEFS =  \
	-D STM32F10X_MD \
	-D USE_STDPERIPH_DRIVER \
	-D EMPL_TARGET_STM32F1 \
	-D MPU6050


# AS includes
AS_INCLUDES = 

# C includes
C_CPP_INCLUDES =  \
	-I Core/Inc/ \
	-I Drivers/ \
	-I Library/ \
	-I Library/STM32F10x_StdPeriph_Lib_V3.5.0/CMSIS/CM3/CoreSupport/ \
	-I Library/STM32F10x_StdPeriph_Lib_V3.5.0/CMSIS/CM3/DeviceSupport/ST/STM32F10x/ \
	-I Library/STM32F10x_StdPeriph_Lib_V3.5.0/STM32F10x_StdPeriph_Driver/inc/ \
	-I Library/STM32F10x_StdPeriph_Lib_V3.5.0/STM32F10x_StdPeriph_Driver/inc/ \
	-I Library/motion_driver_6.12/driver/eMPL/ \
	-I Library/motion_driver_6.12/driver/include/ \
	-I Library/motion_driver_6.12/eMPL-hal/ \
	-I Library/motion_driver_6.12/mllite/ \
	-I Library/motion_driver_6.12/mpl/ \



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
LDFLAGS = $(MCU) -specs=nano.specs -T$(LDSCRIPT) $(LIBDIR) $(LIBS) -Wl,-Map=$(BUILD_DIR)/$(TARGET).map,--cref -Wl,--gc-sections,--print-memory-usage -u _printf_float 

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
	@echo "Erase Completed."
#######################################
# dependencies
#######################################
-include $(wildcard $(BUILD_DIR)/*.d)

# *** EOF ***