#######################################
# simple test
#######################################
# 编译
# gcc -c src/main.c -o ./out.o -I D:/app/ffmpeg-6.1.1-full_build-shared/include 
# 链接
# gcc ./out.o -o ./out.exe -L D:/app/ffmpeg-6.1.1-full_build-shared/lib  -l avutil -l avformat -l avcodec
#######################################
# OUTPUT
#######################################
TARGET = main.exe
BUILD_DIR = build
OUTPUT_DIR = output
#######################################
# SOURCES
#######################################
C_CPP_DEFS = 

C_SOURCES =  \
	src/14.encode_PCM_to_AAC.c
vpath %.c $(sort $(dir $(C_SOURCES)))

CPP_SOURCES = \

vpath %.cpp $(sort $(dir $(CPP_SOURCES)))

C_CPP_INCLUDES =  \
	-I D:/app/ffmpeg-6.1.1-full_build-shared/include \
	-I src/lib/
	
LIBDIR = \
	-L D:/app/ffmpeg-6.1.1-full_build-shared/lib  -l avutil -l avformat -l avcodec -l swscale \
	-l stdc++ \

DLL_SOURCES = \
	$(wildcard D:/app/ffmpeg-6.1.1-full_build-shared/bin/*.dll)
#######################################
# COMMAND
#######################################
CC = gcc
XX = g++
#######################################
# Standand
#######################################
C_STANDARD_FLAGS = -std=c17 # c90 c99 c11 c17  
CXX_STANDARD_FLAGS = -std=c++17
#######################################
# OBJECTS
#######################################
C_FLAGS =  $(C_CPP_DEFS) $(C_CPP_INCLUDES) ${C_STANDARD_FLAGS} -Wall
CXX_FLAGS =  $(C_CPP_DEFS) $(C_CPP_INCLUDES) ${CXX_STANDARD_FLAGS} -Wall

$(BUILD_DIR):
	mkdir $@

C_OBJECTS = $(addprefix $(BUILD_DIR)/,$(notdir $(C_SOURCES:.c=.o)))
vpath %.o $(sort $(dir $(C_OBJECTS)))

$(BUILD_DIR)/%.o: %.c | $(BUILD_DIR) 
	$(CC) -c $(C_FLAGS) $< -o $@
	
CPP_OBJECTS = $(addprefix $(BUILD_DIR)/,$(notdir $(CPP_SOURCES:.cpp=.o)))
vpath %.o $(sort $(dir $(CPP_OBJECTS)))

$(BUILD_DIR)/%.o: %.cpp | $(BUILD_DIR)
	$(XX) -c $(CXX_FLAGS) $< -o $@

#######################################
# LINK
#######################################
LD_FLAGS = $(LIBDIR)

$(OUTPUT_DIR):
	mkdir $@
	cp ${DLL_SOURCES} $@

$(OUTPUT_DIR)/$(TARGET): $(C_OBJECTS) $(CPP_OBJECTS) | $(OUTPUT_DIR)
	$(CC)  $(C_OBJECTS) $(CPP_OBJECTS) $(LD_FLAGS) -o $@ 

#######################################
# COMMAND
#######################################
all: $(OUTPUT_DIR)/$(TARGET)

clean:
	-rm -fR $(BUILD_DIR)
	-rm -fR $(OUTPUT_DIR)
