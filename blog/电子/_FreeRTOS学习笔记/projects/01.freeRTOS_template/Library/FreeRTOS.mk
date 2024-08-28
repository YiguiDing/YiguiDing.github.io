# C sources
C_SOURCES +=  \
	$(wildcard Library/FreeRTOSv202212.01/FreeRTOS/Source/*.c) \
	$(wildcard Library/FreeRTOSv202212.01/FreeRTOS/Source/portable/GCC/ARM_CM3/*.c) \
	$(wildcard Library/FreeRTOSv202212.01/FreeRTOS/Source/portable/GCC/Common/*.c) \
	Library/FreeRTOSv202212.01/FreeRTOS/Source/portable/MemMang/heap_4.c \

# CPP sources
CPP_SOURCES +=  \

# ASM sources
ASM_SOURCES +=  \

# ASM sources
ASMM_SOURCES += \

# C/C++ includes
C_CPP_INCLUDES +=  \
	-I Library/FreeRTOSv202212.01/FreeRTOS/Source/include/ \
	-I Library/FreeRTOSv202212.01/FreeRTOS/Source/portable/GCC/ARM_CM3/ \
	-I Library/ \
