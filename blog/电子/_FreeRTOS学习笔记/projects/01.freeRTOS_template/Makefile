# ------------------------------------------------
# Generic Makefile (based on gcc)
#
# ChangeLog :
# 	2024-07-22 - 实现c/c++混合编译、调用openocd实现写入/擦除
#	2017-02-10 - Several enhancements + project update mode
#   2015-07-22 - first version
# ------------------------------------------------
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
BUILD_DIR = build
OUTPUT_DIR = output
######################################
# target
######################################
TARGET = main
######################################
# source
######################################
include Library/Makefile
include Driver/Makefile
include Core/Makefile
# C sources
C_SOURCES +=  \
# CPP sources
CPP_SOURCES +=  \
# ASM sources
ASM_SOURCES +=  \
# ASM sources
ASMM_SOURCES += \
# AS includes
AS_INCLUDES += \
# C includes
C_CPP_INCLUDES +=  \
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
	-D USE_STDPERIPH_DRIVER

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
LDSCRIPT = Library/STM32F103C8Tx_FLASH.ld

# libraries
LIBS = -lc -lm -lnosys 
LIBDIR = 
LDFLAGS = $(MCU) -specs=nosys.specs -T$(LDSCRIPT) $(LIBDIR) $(LIBS) -Wl,-Map=$(BUILD_DIR)/$(TARGET).map,--cref -Wl,--gc-sections,--print-memory-usage -u _printf_float

#######################################
# build the application
#######################################

#######################################
# build  objects
#######################################
$(BUILD_DIR):
	mkdir $@
$(BUILD_DIR)/%.o: %.c Makefile | $(BUILD_DIR)
	$(CC) -c $(C_FLAGS) -Wa,-a,-ad,-alms=$(BUILD_DIR)/$(notdir $(<:.c=.lst)) $< -o $@
$(BUILD_DIR)/%.o: %.cpp Makefile | $(BUILD_DIR) 
	$(XX) -c $(CPP_FLAGS) -Wa,-a,-ad,-alms=$(BUILD_DIR)/$(notdir $(<:.cpp=.lst)) $< -o $@
$(BUILD_DIR)/%.o: %.s Makefile | $(BUILD_DIR)
	$(AS) -c $(C_FLAGS) $< -o $@
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
#######################################
# build  elf hex 
#######################################
$(OUTPUT_DIR):
	mkdir $@
$(OUTPUT_DIR)/$(TARGET).elf: $(OBJECTS) Makefile | $(OUTPUT_DIR)
	$(CC) $(OBJECTS) $(LDFLAGS) -o $@
	$(SZ) $@
$(OUTPUT_DIR)/%.hex: $(OUTPUT_DIR)/%.elf | $(OUTPUT_DIR)
	$(HEX) $< $@
$(OUTPUT_DIR)/%.bin: $(OUTPUT_DIR)/%.elf | $(OUTPUT_DIR)
	$(BIN) $< $@

#######################################
# default action: build all
#######################################
all: $(OUTPUT_DIR)/$(TARGET).elf $(OUTPUT_DIR)/$(TARGET).hex $(OUTPUT_DIR)/$(TARGET).bin
	
#######################################
# clean up
#######################################
clean:
	-rm -fR $(BUILD_DIR)
	-rm -fR $(OUTPUT_DIR)

#######################################
# write
#######################################
write: $(OUTPUT_DIR)/$(TARGET).bin
	openocd \
		-f interface/stlink.cfg \
		-f target/stm32f1x.cfg \
		-c "init; reset halt; wait_halt; flash write_image erase $(OUTPUT_DIR)/$(TARGET).bin ${FLASH_START}; reset; shutdown;" 
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