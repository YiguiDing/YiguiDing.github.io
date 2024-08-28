# C sources
C_SOURCES +=  \
	$(wildcard Library/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/CoreSupport/*.c) \
	$(wildcard Library/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/*.c) \
	$(wildcard Library/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/STM32F10x_StdPeriph_Driver/src/*.c) \

# CPP sources
CPP_SOURCES +=  \

# ASM sources
ASM_SOURCES +=  \
	$(wildcard Library/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/startup/gcc_ride7/startup_stm32f10x_md.s) \

# ASM sources
ASMM_SOURCES += \

# C/C++ includes
C_CPP_INCLUDES +=  \
	-I Library/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/CoreSupport/ \
	-I Library/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/ \
	-I Library/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/STM32F10x_StdPeriph_Driver/inc/ \
