# C sources
C_SOURCES +=  \
	$(wildcard Library/FreeRTOSv202406.01-LTS/FreeRTOS/FreeRTOS-Kernel/*.c) \
	$(wildcard Library/FreeRTOSv202406.01-LTS/FreeRTOS/FreeRTOS-Kernel/portable/GCC/ARM_CM3/*.c) \
	$(wildcard Library/FreeRTOSv202406.01-LTS/FreeRTOS/FreeRTOS-Kernel/portable/GCC/Common/*.c) \
	Library/FreeRTOSv202406.01-LTS/FreeRTOS/FreeRTOS-Kernel/portable/MemMang/heap_4.c \

# CPP sources
CPP_SOURCES +=  \

# ASM sources
ASM_SOURCES +=  \

# ASM sources
ASMM_SOURCES += \
# AS includes
AS_INCLUDES += \
	-I Library/ \

# C/C++ includes
C_CPP_INCLUDES +=  \
	-I Library/FreeRTOSv202406.01-LTS/FreeRTOS/FreeRTOS-Kernel/include/ \
	-I Library/FreeRTOSv202406.01-LTS/FreeRTOS/FreeRTOS-Kernel/portable/GCC/ARM_CM3/ \
	-I Library/ \
