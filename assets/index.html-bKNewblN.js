import{_ as p,c as i,d as o,w as a,b as t,r,o as u,a as s,e as n}from"./app-DrXE16Uc.js";const k="/assets/image-BXVG57Dc.png",d={},m=t(`<h1 id="stm32-makefile项目的创建-c-c-混合编译" tabindex="-1"><a class="header-anchor" href="#stm32-makefile项目的创建-c-c-混合编译"><span>stm32-makefile项目的创建(c/c++混合编译)</span></a></h1><h2 id="工程文件结构" tabindex="-1"><a class="header-anchor" href="#工程文件结构"><span>工程文件结构</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Core</span>
<span class="line">    Inc</span>
<span class="line">        stm32f10x_conf.h</span>
<span class="line">        stm32f10x_it.h</span>
<span class="line">    Src</span>
<span class="line">        main.cpp</span>
<span class="line">        stm32f10x_it.c</span>
<span class="line">Drivers</span>
<span class="line">    <span class="token comment"># 官方标准外设库:</span></span>
<span class="line">    <span class="token comment"># 文件目录保持原始结构</span></span>
<span class="line">    STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/ </span>
<span class="line">        CMSIS/</span>
<span class="line">            CM3/CoreSupport/core_cm3/<span class="token punctuation">{</span>*.c,*.h<span class="token punctuation">}</span> <span class="token comment"># 内核接口</span></span>
<span class="line">            CM3/DeviceSupport/ST/STM32F10x/startup/gcc_ride7/startup_stm32f10x_md.s <span class="token comment"># 启动文件</span></span>
<span class="line">            CM3/DeviceSupport/ST/STM32F10x/<span class="token punctuation">{</span>stm32f10x.h<span class="token punctuation">}</span> <span class="token comment"># 头文件</span></span>
<span class="line">            CM3/DeviceSupport/ST/STM32F10x/system_stm32f10x<span class="token punctuation">{</span>.c,.h<span class="token punctuation">}</span></span>
<span class="line">        STM32F10x_StdPeriph_Driver/ <span class="token comment"># 标准外设库</span></span>
<span class="line">            inc/<span class="token punctuation">{</span>*.c<span class="token punctuation">}</span></span>
<span class="line">            inc/<span class="token punctuation">{</span>*.h<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="makefile文件的生成和修改" tabindex="-1"><a class="header-anchor" href="#makefile文件的生成和修改"><span>Makefile文件的生成和修改</span></a></h2><ol><li>先使用STM32CubeMX生成Hal库的makefile工程 <ul><li><img src="`+k+'" alt="Alt text"></li></ul></li><li>删除大部分文件，保留两个文件 <ol><li><code>Makefile</code>文件</li><li>链接脚本，文件名可能为：<code>STM32F103C8Tx_FLASH.ld</code></li></ol></li><li>下载并解压<code>STM32F10x_StdPeriph_Lib_V3.5.0</code></li><li>复制<code>STM32F10x_StdPeriph_Lib_V3.5.0</code>到<code>Drivers</code>目录</li><li>修改<code>Makefile</code>文件</li></ol>',5),v=s("code",null,"修改后的Makefile",-1),b=s("code",null,"修改前的Makefile",-1),S=s("code",null,"STM32F103C8Tx_FLASH.ld",-1),_=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"prismjs","data-ext":"cpp","data-title":"cpp"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[n("# "),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},[n("Generic "),s("span",{class:"token function"},"Makefile"),n(),s("span",{class:"token punctuation"},"("),n("based on gcc"),s("span",{class:"token punctuation"},")")])])]),n(`
`),s("span",{class:"line"},"#"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},[n("ChangeLog "),s("span",{class:"token operator"},":")])])]),n(`
`),s("span",{class:"line"},[n("# 	"),s("span",{class:"token number"},"2024"),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"07"),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"22"),n(),s("span",{class:"token operator"},"-"),n(" 实现c"),s("span",{class:"token operator"},"/"),n("c"),s("span",{class:"token operator"},"++"),n("混合编译、调用openocd实现写入"),s("span",{class:"token operator"},"/"),n("擦除")]),n(`
`),s("span",{class:"line"},[n("#	"),s("span",{class:"token number"},"2017"),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"02"),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"10"),n(),s("span",{class:"token operator"},"-"),n(" Several enhancements "),s("span",{class:"token operator"},"+"),n(" project update mode")]),n(`
`),s("span",{class:"line"},[n("#   "),s("span",{class:"token number"},"2015"),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"07"),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"22"),n(),s("span",{class:"token operator"},"-"),n(" first version")]),n(`
`),s("span",{class:"line"},[n("# "),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"target")])]),n(`
`),s("span",{class:"line"},"######################################"),n(`
`),s("span",{class:"line"},[n("TARGET "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token keyword"},"template")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"building"),n(),s("span",{class:"token expression"},"variables")])]),n(`
`),s("span",{class:"line"},"######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"debug"),n(),s("span",{class:"token expression"},[n("build"),s("span",{class:"token operator"},"?")])])]),n(`
`),s("span",{class:"line"},[n("DEBUG "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token number"},"1")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"optimization")])]),n(`
`),s("span",{class:"line"},[n("OPT "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token operator"},"-"),n("Og")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"paths")])]),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},"Build path")])]),n(`
`),s("span",{class:"line"},[n("BUILD_DIR "),s("span",{class:"token operator"},"="),n(" build")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"source")])]),n(`
`),s("span",{class:"line"},"######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},"C sources")])]),n(`
`),s("span",{class:"line"},[n("C_SOURCES "),s("span",{class:"token operator"},"="),n("  \\")]),n(`
`),s("span",{class:"line"},[n("	$"),s("span",{class:"token punctuation"},"("),n("wildcard Core"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f10x_it"),s("span",{class:"token punctuation"},"."),n("c"),s("span",{class:"token punctuation"},")"),n(" \\")]),n(`
`),s("span",{class:"line"},[n("	$"),s("span",{class:"token punctuation"},"("),n("wildcard Drivers"),s("span",{class:"token operator"},"/"),n("STM32F10x_StdPeriph_Lib_V3"),s("span",{class:"token punctuation"},"."),s("span",{class:"token number"},"5.0"),s("span",{class:"token operator"},"/"),n("Libraries"),s("span",{class:"token operator"},"/"),n("CMSIS"),s("span",{class:"token operator"},"/"),n("CM3"),s("span",{class:"token operator"},"/"),n("CoreSupport"),s("span",{class:"token comment"},"/*.c) \\"),n(`
`),s("span",{class:"line"},"	$(wildcard Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/*.c) \\"),n(`
`),s("span",{class:"line"},"	$(wildcard Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/STM32F10x_StdPeriph_Driver/src/*.c) \\"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"CPP_SOURCES =  \\"),n(`
`),s("span",{class:"line"},"	$(wildcard Core/Src/main.cpp) \\"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"# ASM sources"),n(`
`),s("span",{class:"line"},"ASM_SOURCES =  \\"),n(`
`),s("span",{class:"line"},"	$(wildcard Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/startup/gcc_ride7/startup_stm32f10x_md.s) \\"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"# ASM sources"),n(`
`),s("span",{class:"line"},"ASMM_SOURCES = "),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"# binaries"),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"PREFIX = arm-none-eabi-"),n(`
`),s("span",{class:"line"},"# The gcc compiler bin path can be either defined in make command via GCC_PATH variable (> make GCC_PATH=xxx)"),n(`
`),s("span",{class:"line"},"# either it can be added to the PATH environment variable."),n(`
`),s("span",{class:"line"},"ifdef GCC_PATH"),n(`
`),s("span",{class:"line"},"CC = $(GCC_PATH)/$(PREFIX)gcc"),n(`
`),s("span",{class:"line"},"XX = $(GCC_PATH)/$(PREFIX)g++"),n(`
`),s("span",{class:"line"},"AS = $(GCC_PATH)/$(PREFIX)gcc -x assembler-with-cpp"),n(`
`),s("span",{class:"line"},"CP = $(GCC_PATH)/$(PREFIX)objcopy"),n(`
`),s("span",{class:"line"},"SZ = $(GCC_PATH)/$(PREFIX)size"),n(`
`),s("span",{class:"line"},"else"),n(`
`),s("span",{class:"line"},"CC = $(PREFIX)gcc"),n(`
`),s("span",{class:"line"},"XX = $(PREFIX)g++"),n(`
`),s("span",{class:"line"},"AS = $(PREFIX)gcc -x assembler-with-cpp"),n(`
`),s("span",{class:"line"},"CP = $(PREFIX)objcopy"),n(`
`),s("span",{class:"line"},"SZ = $(PREFIX)size"),n(`
`),s("span",{class:"line"},"endif"),n(`
`),s("span",{class:"line"},"HEX = $(CP) -O ihex"),n(`
`),s("span",{class:"line"},"BIN = $(CP) -O binary -S"),n(`
`),s("span",{class:"line"}," "),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"# C_FLAGS"),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"# cpu"),n(`
`),s("span",{class:"line"},"CPU = -mcpu=cortex-m3"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"FLASH_START = 0x08000000"),n(`
`),s("span",{class:"line"},"# fpu"),n(`
`),s("span",{class:"line"},"# NONE for Cortex-M0/M0+/M3"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"# float-abi"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"# mcu"),n(`
`),s("span",{class:"line"},"MCU = $(CPU) -mthumb $(FPU) $(FLOAT-ABI)"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"# macros for gcc"),n(`
`),s("span",{class:"line"},"# AS defines"),n(`
`),s("span",{class:"line"},"AS_DEFS = "),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"# C defines"),n(`
`),s("span",{class:"line"},"C_DEFS =  \\"),n(`
`),s("span",{class:"line"},"	-D STM32F10X_MD \\"),n(`
`),s("span",{class:"line"},"	-D USE_STDPERIPH_DRIVER"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"# AS includes"),n(`
`),s("span",{class:"line"},"AS_INCLUDES = "),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"# C includes"),n(`
`),s("span",{class:"line"},"C_CPP_INCLUDES =  \\"),n(`
`),s("span",{class:"line"},"	-I Core/Inc/ \\"),n(`
`),s("span",{class:"line"},"	-I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/CoreSupport/ \\"),n(`
`),s("span",{class:"line"},"	-I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/ \\"),n(`
`),s("span",{class:"line"},"	-I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/STM32F10x_StdPeriph_Driver/inc/ \\"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"# compile gcc flags"),n(`
`),s("span",{class:"line"},"ASFLAGS = $(MCU) $(AS_DEFS) $(AS_INCLUDES) $(OPT) -Wall -fdata-sections -ffunction-sections"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"C_FLAGS += $(MCU) $(C_DEFS) $(C_CPP_INCLUDES) $(OPT) -Wall -fdata-sections -ffunction-sections"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"CPP_FLAGS += $(MCU) $(C_DEFS) $(C_CPP_INCLUDES) $(OPT) -Wall -fdata-sections -ffunction-sections"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"ifeq ($(DEBUG), 1)"),n(`
`),s("span",{class:"line"},"C_FLAGS += -g -gdwarf-2"),n(`
`),s("span",{class:"line"},"CPP_FLAGS += -g -gdwarf-2"),n(`
`),s("span",{class:"line"},"endif"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"# Generate dependency information"),n(`
`),s("span",{class:"line"},'C_FLAGS += -MMD -MP -MF"$(@:%.o=%.d)"'),n(`
`),s("span",{class:"line"},'CPP_FLAGS += -MMD -MP -MF"$(@:%.o=%.d)"'),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"# LDFLAGS"),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"# link script"),n(`
`),s("span",{class:"line"},"LDSCRIPT = STM32F103C8Tx_FLASH.ld"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"# libraries"),n(`
`),s("span",{class:"line"},"LIBS = -lc -lm -lnosys "),n(`
`),s("span",{class:"line"},"LIBDIR = "),n(`
`),s("span",{class:"line"},"LDFLAGS = $(MCU) -specs=nosys.specs -T$(LDSCRIPT) $(LIBDIR) $(LIBS) -Wl,-Map=$(BUILD_DIR)/$(TARGET).map,--cref -Wl,--gc-sections,--print-memory-usage "),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"# default action: build all"),n(`
`),s("span",{class:"line"},"all: $(BUILD_DIR)/$(TARGET).elf $(BUILD_DIR)/$(TARGET).hex $(BUILD_DIR)/$(TARGET).bin"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"# build the application"),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"# list of c program objects"),n(`
`),s("span",{class:"line"},"OBJECTS = $(addprefix $(BUILD_DIR)/,$(notdir $(C_SOURCES:.c=.o)))"),n(`
`),s("span",{class:"line"},"vpath %.c $(sort $(dir $(C_SOURCES)))"),n(`
`),s("span",{class:"line"},"# list of cpp program objects"),n(`
`),s("span",{class:"line"},"OBJECTS += $(addprefix $(BUILD_DIR)/,$(notdir $(CPP_SOURCES:.cpp=.o)))"),n(`
`),s("span",{class:"line"},"vpath %.cpp $(sort $(dir $(CPP_SOURCES)))"),n(`
`),s("span",{class:"line"},"# list of ASM program objects"),n(`
`),s("span",{class:"line"},"OBJECTS += $(addprefix $(BUILD_DIR)/,$(notdir $(ASM_SOURCES:.s=.o)))"),n(`
`),s("span",{class:"line"},"vpath %.s $(sort $(dir $(ASM_SOURCES)))"),n(`
`),s("span",{class:"line"},"OBJECTS += $(addprefix $(BUILD_DIR)/,$(notdir $(ASMM_SOURCES:.S=.o)))"),n(`
`),s("span",{class:"line"},"vpath %.S $(sort $(dir $(ASMM_SOURCES)))"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"$(BUILD_DIR)/%.o: %.c Makefile | $(BUILD_DIR) "),n(`
`),s("span",{class:"line"},"	$(CC) -c $(C_FLAGS) -Wa,-a,-ad,-alms=$(BUILD_DIR)/$(notdir $(<:.c=.lst)) $< -o $@"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"$(BUILD_DIR)/%.o: %.cpp Makefile | $(BUILD_DIR) "),n(`
`),s("span",{class:"line"},"	$(XX) -c $(CPP_FLAGS) -Wa,-a,-ad,-alms=$(BUILD_DIR)/$(notdir $(<:.cpp=.lst)) $< -o $@"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"$(BUILD_DIR)/%.o: %.s Makefile | $(BUILD_DIR)"),n(`
`),s("span",{class:"line"},"	$(AS) -c $(C_FLAGS) $< -o $@"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"$(BUILD_DIR)/$(TARGET).elf: $(OBJECTS) Makefile"),n(`
`),s("span",{class:"line"},"	$(CC) $(OBJECTS) $(LDFLAGS) -o $@"),n(`
`),s("span",{class:"line"},"	$(SZ) $@"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"$(BUILD_DIR)/%.hex: $(BUILD_DIR)/%.elf | $(BUILD_DIR)"),n(`
`),s("span",{class:"line"},"	$(HEX) $< $@"),n(`
`),s("span",{class:"line"},"	"),n(`
`),s("span",{class:"line"},"$(BUILD_DIR)/%.bin: $(BUILD_DIR)/%.elf | $(BUILD_DIR)"),n(`
`),s("span",{class:"line"},"	$(BIN) $< $@	"),n(`
`),s("span",{class:"line"},"	"),n(`
`),s("span",{class:"line"},"$(BUILD_DIR):"),n(`
`),s("span",{class:"line"},"	mkdir $@		"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"# clean up"),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"clean:"),n(`
`),s("span",{class:"line"},"	-rm -fR $(BUILD_DIR)"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"# write"),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"write: $(BUILD_DIR)/$(TARGET).bin"),n(`
`),s("span",{class:"line"},"	openocd \\"),n(`
`),s("span",{class:"line"},"		-f interface/stlink.cfg \\"),n(`
`),s("span",{class:"line"},"		-f target/stm32f1x.cfg \\"),n(`
`),s("span",{class:"line"},'		-c "init; reset halt; wait_halt; flash write_image erase $(BUILD_DIR)/$(TARGET).bin ${FLASH_START}; reset; shutdown;" '),n(`
`),s("span",{class:"line"},'		@echo "Write Completed."'),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"# erase"),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"erase:"),n(`
`),s("span",{class:"line"},"	openocd \\"),n(`
`),s("span",{class:"line"},"		-f interface/stlink.cfg \\"),n(`
`),s("span",{class:"line"},"		-f target/stm32f1x.cfg \\"),n(`
`),s("span",{class:"line"},'		-c "init; reset halt; flash erase_sector 0 0 1; exit"'),n(`
`),s("span",{class:"line"},'	@echo "Erase Completed."'),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"# reset"),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"reset:"),n(`
`),s("span",{class:"line"},"	openocd \\"),n(`
`),s("span",{class:"line"},"		-f interface/stlink.cfg \\"),n(`
`),s("span",{class:"line"},"		-f target/stm32f1x.cfg \\"),n(`
`),s("span",{class:"line"},'		-c "init; reset; exit"'),n(`
`),s("span",{class:"line"},'	@echo "Erase Completed."'),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"# dependencies"),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},"-include $(wildcard $(BUILD_DIR)/*.d)"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"# *** EOF ***"),n(`
`),s("span",{class:"line"})])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),I=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"prismjs","data-ext":"cpp","data-title":"cpp"},[s("pre",null,[s("code",null,[s("span",{class:"line"},"##########################################################################################################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},[n("File automatically"),s("span",{class:"token operator"},"-"),n("generated by tool"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n("projectgenerator"),s("span",{class:"token punctuation"},"]"),n(" version"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token number"},"4.2"),s("span",{class:"token punctuation"},"."),s("span",{class:"token number"},"0"),s("span",{class:"token operator"},"-"),n("B44"),s("span",{class:"token punctuation"},"]"),n(" date"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n("Sun Jul "),s("span",{class:"token number"},"21"),n(),s("span",{class:"token number"},"01"),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"54"),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"40"),n(" CST "),s("span",{class:"token number"},"2024"),s("span",{class:"token punctuation"},"]")])])]),n(`
`),s("span",{class:"line"},"##########################################################################################################################"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("# "),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},[n("Generic "),s("span",{class:"token function"},"Makefile"),n(),s("span",{class:"token punctuation"},"("),n("based on gcc"),s("span",{class:"token punctuation"},")")])])]),n(`
`),s("span",{class:"line"},"#"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},[n("ChangeLog "),s("span",{class:"token operator"},":")])])]),n(`
`),s("span",{class:"line"},[n("#	"),s("span",{class:"token number"},"2017"),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"02"),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"10"),n(),s("span",{class:"token operator"},"-"),n(" Several enhancements "),s("span",{class:"token operator"},"+"),n(" project update mode")]),n(`
`),s("span",{class:"line"},[n("#   "),s("span",{class:"token number"},"2015"),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"07"),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"22"),n(),s("span",{class:"token operator"},"-"),n(" first version")]),n(`
`),s("span",{class:"line"},[n("# "),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"target")])]),n(`
`),s("span",{class:"line"},"######################################"),n(`
`),s("span",{class:"line"},[n("TARGET "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token keyword"},"template")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"building"),n(),s("span",{class:"token expression"},"variables")])]),n(`
`),s("span",{class:"line"},"######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"debug"),n(),s("span",{class:"token expression"},[n("build"),s("span",{class:"token operator"},"?")])])]),n(`
`),s("span",{class:"line"},[n("DEBUG "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token number"},"1")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"optimization")])]),n(`
`),s("span",{class:"line"},[n("OPT "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token operator"},"-"),n("Og")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"paths")])]),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},"Build path")])]),n(`
`),s("span",{class:"line"},[n("BUILD_DIR "),s("span",{class:"token operator"},"="),n(" build")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"source")])]),n(`
`),s("span",{class:"line"},"######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},"C sources")])]),n(`
`),s("span",{class:"line"},[n("C_SOURCES "),s("span",{class:"token operator"},"="),n("  \\")]),n(`
`),s("span",{class:"line"},[n("Core"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("main"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Core"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_it"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Core"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_hal_msp"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Drivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_hal_gpio_ex"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Drivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_hal_tim"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Drivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_hal_tim_ex"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Drivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_hal"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Drivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_hal_rcc"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Drivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_hal_rcc_ex"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Drivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_hal_gpio"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Drivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_hal_dma"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Drivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_hal_cortex"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Drivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_hal_pwr"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Drivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_hal_flash"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Drivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_hal_flash_ex"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Drivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("stm32f1xx_hal_exti"),s("span",{class:"token punctuation"},"."),n("c \\")]),n(`
`),s("span",{class:"line"},[n("Core"),s("span",{class:"token operator"},"/"),n("Src"),s("span",{class:"token operator"},"/"),n("system_stm32f1xx"),s("span",{class:"token punctuation"},"."),n("c  ")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},"ASM sources")])]),n(`
`),s("span",{class:"line"},[n("ASM_SOURCES "),s("span",{class:"token operator"},"="),n("  \\")]),n(`
`),s("span",{class:"line"},[n("startup_stm32f103xb"),s("span",{class:"token punctuation"},"."),n("s")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},"ASM sources")])]),n(`
`),s("span",{class:"line"},[n("ASMM_SOURCES "),s("span",{class:"token operator"},"="),n()]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"binaries")])]),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[n("PREFIX "),s("span",{class:"token operator"},"="),n(" arm"),s("span",{class:"token operator"},"-"),n("none"),s("span",{class:"token operator"},"-"),n("eabi"),s("span",{class:"token operator"},"-")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},[n("The gcc compiler bin path can be either defined in make command via GCC_PATH "),s("span",{class:"token function"},"variable"),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token operator"},">"),n(" make GCC_PATH"),s("span",{class:"token operator"},"="),n("xxx"),s("span",{class:"token punctuation"},")")])])]),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"either"),n(),s("span",{class:"token expression"},[n("it can be added to the PATH environment variable"),s("span",{class:"token punctuation"},".")])])]),n(`
`),s("span",{class:"line"},"ifdef GCC_PATH"),n(`
`),s("span",{class:"line"},[n("CC "),s("span",{class:"token operator"},"="),n(" $"),s("span",{class:"token punctuation"},"("),n("GCC_PATH"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),n("$"),s("span",{class:"token punctuation"},"("),n("PREFIX"),s("span",{class:"token punctuation"},")"),n("gcc")]),n(`
`),s("span",{class:"line"},[n("AS "),s("span",{class:"token operator"},"="),n(" $"),s("span",{class:"token punctuation"},"("),n("GCC_PATH"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),n("$"),s("span",{class:"token punctuation"},"("),n("PREFIX"),s("span",{class:"token punctuation"},")"),n("gcc "),s("span",{class:"token operator"},"-"),n("x assembler"),s("span",{class:"token operator"},"-"),n("with"),s("span",{class:"token operator"},"-"),n("cpp")]),n(`
`),s("span",{class:"line"},[n("CP "),s("span",{class:"token operator"},"="),n(" $"),s("span",{class:"token punctuation"},"("),n("GCC_PATH"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),n("$"),s("span",{class:"token punctuation"},"("),n("PREFIX"),s("span",{class:"token punctuation"},")"),n("objcopy")]),n(`
`),s("span",{class:"line"},[n("SZ "),s("span",{class:"token operator"},"="),n(" $"),s("span",{class:"token punctuation"},"("),n("GCC_PATH"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),n("$"),s("span",{class:"token punctuation"},"("),n("PREFIX"),s("span",{class:"token punctuation"},")"),n("size")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token keyword"},"else")]),n(`
`),s("span",{class:"line"},[n("CC "),s("span",{class:"token operator"},"="),n(" $"),s("span",{class:"token punctuation"},"("),n("PREFIX"),s("span",{class:"token punctuation"},")"),n("gcc")]),n(`
`),s("span",{class:"line"},[n("AS "),s("span",{class:"token operator"},"="),n(" $"),s("span",{class:"token punctuation"},"("),n("PREFIX"),s("span",{class:"token punctuation"},")"),n("gcc "),s("span",{class:"token operator"},"-"),n("x assembler"),s("span",{class:"token operator"},"-"),n("with"),s("span",{class:"token operator"},"-"),n("cpp")]),n(`
`),s("span",{class:"line"},[n("CP "),s("span",{class:"token operator"},"="),n(" $"),s("span",{class:"token punctuation"},"("),n("PREFIX"),s("span",{class:"token punctuation"},")"),n("objcopy")]),n(`
`),s("span",{class:"line"},[n("SZ "),s("span",{class:"token operator"},"="),n(" $"),s("span",{class:"token punctuation"},"("),n("PREFIX"),s("span",{class:"token punctuation"},")"),n("size")]),n(`
`),s("span",{class:"line"},"endif"),n(`
`),s("span",{class:"line"},[n("HEX "),s("span",{class:"token operator"},"="),n(" $"),s("span",{class:"token punctuation"},"("),n("CP"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"-"),n("O ihex")]),n(`
`),s("span",{class:"line"},[n("BIN "),s("span",{class:"token operator"},"="),n(" $"),s("span",{class:"token punctuation"},"("),n("CP"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"-"),n("O binary "),s("span",{class:"token operator"},"-"),n("S")]),n(`
`),s("span",{class:"line"}," "),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},"CFLAGS")])]),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"cpu")])]),n(`
`),s("span",{class:"line"},[n("CPU "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token operator"},"-"),n("mcpu"),s("span",{class:"token operator"},"="),n("cortex"),s("span",{class:"token operator"},"-"),n("m3")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"fpu")])]),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},[n("NONE "),s("span",{class:"token keyword"},"for"),n(" Cortex"),s("span",{class:"token operator"},"-"),n("M0"),s("span",{class:"token operator"},"/"),n("M0"),s("span",{class:"token operator"},"+"),s("span",{class:"token operator"},"/"),n("M3")])])]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"float"),s("span",{class:"token expression"},[s("span",{class:"token operator"},"-"),n("abi")])])]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"mcu")])]),n(`
`),s("span",{class:"line"},[n("MCU "),s("span",{class:"token operator"},"="),n(" $"),s("span",{class:"token punctuation"},"("),n("CPU"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"-"),n("mthumb $"),s("span",{class:"token punctuation"},"("),n("FPU"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token punctuation"},"("),n("FLOAT"),s("span",{class:"token operator"},"-"),n("ABI"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"macros"),n(),s("span",{class:"token expression"},[s("span",{class:"token keyword"},"for"),n(" gcc")])])]),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},"AS defines")])]),n(`
`),s("span",{class:"line"},[n("AS_DEFS "),s("span",{class:"token operator"},"="),n()]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},"C defines")])]),n(`
`),s("span",{class:"line"},[n("C_DEFS "),s("span",{class:"token operator"},"="),n("  \\")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},"-"),n("DUSE_HAL_DRIVER \\")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},"-"),n("DSTM32F103xB")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},"AS includes")])]),n(`
`),s("span",{class:"line"},[n("AS_INCLUDES "),s("span",{class:"token operator"},"="),n()]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},"C includes")])]),n(`
`),s("span",{class:"line"},[n("C_INCLUDES "),s("span",{class:"token operator"},"="),n("  \\")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},"-"),n("ICore"),s("span",{class:"token operator"},"/"),n("Inc \\")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},"-"),n("IDrivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Inc \\")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},"-"),n("IDrivers"),s("span",{class:"token operator"},"/"),n("STM32F1xx_HAL_Driver"),s("span",{class:"token operator"},"/"),n("Inc"),s("span",{class:"token operator"},"/"),n("Legacy \\")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},"-"),n("IDrivers"),s("span",{class:"token operator"},"/"),n("CMSIS"),s("span",{class:"token operator"},"/"),n("Device"),s("span",{class:"token operator"},"/"),n("ST"),s("span",{class:"token operator"},"/"),n("STM32F1xx"),s("span",{class:"token operator"},"/"),n("Include \\")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},"-"),n("IDrivers"),s("span",{class:"token operator"},"/"),n("CMSIS"),s("span",{class:"token operator"},"/"),n("Include")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"compile"),n(),s("span",{class:"token expression"},"gcc flags")])]),n(`
`),s("span",{class:"line"},[n("ASFLAGS "),s("span",{class:"token operator"},"="),n(" $"),s("span",{class:"token punctuation"},"("),n("MCU"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token punctuation"},"("),n("AS_DEFS"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token punctuation"},"("),n("AS_INCLUDES"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token punctuation"},"("),n("OPT"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"-"),n("Wall "),s("span",{class:"token operator"},"-"),n("fdata"),s("span",{class:"token operator"},"-"),n("sections "),s("span",{class:"token operator"},"-"),n("ffunction"),s("span",{class:"token operator"},"-"),n("sections")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("CFLAGS "),s("span",{class:"token operator"},"+="),n(" $"),s("span",{class:"token punctuation"},"("),n("MCU"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token punctuation"},"("),n("C_DEFS"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token punctuation"},"("),n("C_INCLUDES"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token punctuation"},"("),n("OPT"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"-"),n("Wall "),s("span",{class:"token operator"},"-"),n("fdata"),s("span",{class:"token operator"},"-"),n("sections "),s("span",{class:"token operator"},"-"),n("ffunction"),s("span",{class:"token operator"},"-"),n("sections")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"ifeq"),n(),s("span",{class:"token punctuation"},"("),n("$"),s("span",{class:"token punctuation"},"("),n("DEBUG"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("CFLAGS "),s("span",{class:"token operator"},"+="),n(),s("span",{class:"token operator"},"-"),n("g "),s("span",{class:"token operator"},"-"),n("gdwarf"),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"2")]),n(`
`),s("span",{class:"line"},"endif"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},"Generate dependency information")])]),n(`
`),s("span",{class:"line"},[n("CFLAGS "),s("span",{class:"token operator"},"+="),n(),s("span",{class:"token operator"},"-"),n("MMD "),s("span",{class:"token operator"},"-"),n("MP "),s("span",{class:"token operator"},"-"),n("MF"),s("span",{class:"token string"},'"$(@:%.o=%.d)"')]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token expression"},"LDFLAGS")])]),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"link"),n(),s("span",{class:"token expression"},"script")])]),n(`
`),s("span",{class:"line"},[n("LDSCRIPT "),s("span",{class:"token operator"},"="),n(" STM32F103C8Tx_FLASH"),s("span",{class:"token punctuation"},"."),n("ld")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"libraries")])]),n(`
`),s("span",{class:"line"},[n("LIBS "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token operator"},"-"),n("lc "),s("span",{class:"token operator"},"-"),n("lm "),s("span",{class:"token operator"},"-"),n("lnosys ")]),n(`
`),s("span",{class:"line"},[n("LIBDIR "),s("span",{class:"token operator"},"="),n()]),n(`
`),s("span",{class:"line"},[n("LDFLAGS "),s("span",{class:"token operator"},"="),n(" $"),s("span",{class:"token punctuation"},"("),n("MCU"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"-"),n("specs"),s("span",{class:"token operator"},"="),n("nano"),s("span",{class:"token punctuation"},"."),n("specs "),s("span",{class:"token operator"},"-"),n("T$"),s("span",{class:"token punctuation"},"("),n("LDSCRIPT"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token punctuation"},"("),n("LIBDIR"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token punctuation"},"("),n("LIBS"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"-"),n("Wl"),s("span",{class:"token punctuation"},","),s("span",{class:"token operator"},"-"),n("Map"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),n("$"),s("span",{class:"token punctuation"},"("),n("TARGET"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),n("map"),s("span",{class:"token punctuation"},","),s("span",{class:"token operator"},"--"),n("cref "),s("span",{class:"token operator"},"-"),n("Wl"),s("span",{class:"token punctuation"},","),s("span",{class:"token operator"},"--"),n("gc"),s("span",{class:"token operator"},"-"),n("sections")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"default"),n(),s("span",{class:"token expression"},[n("action"),s("span",{class:"token operator"},":"),n(" build all")])])]),n(`
`),s("span",{class:"line"},[n("all"),s("span",{class:"token operator"},":"),n(" $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),n("$"),s("span",{class:"token punctuation"},"("),n("TARGET"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),n("elf $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),n("$"),s("span",{class:"token punctuation"},"("),n("TARGET"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),n("hex $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),n("$"),s("span",{class:"token punctuation"},"("),n("TARGET"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),n("bin")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"build"),n(),s("span",{class:"token expression"},"the application")])]),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"list"),n(),s("span",{class:"token expression"},"of objects")])]),n(`
`),s("span",{class:"line"},[n("OBJECTS "),s("span",{class:"token operator"},"="),n(" $"),s("span",{class:"token punctuation"},"("),n("addprefix $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),s("span",{class:"token punctuation"},","),n("$"),s("span",{class:"token punctuation"},"("),n("notdir $"),s("span",{class:"token punctuation"},"("),n("C_SOURCES"),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"."),n("c"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"."),n("o"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("vpath "),s("span",{class:"token operator"},"%"),s("span",{class:"token punctuation"},"."),n("c $"),s("span",{class:"token punctuation"},"("),n("sort $"),s("span",{class:"token punctuation"},"("),n("dir $"),s("span",{class:"token punctuation"},"("),n("C_SOURCES"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"list"),n(),s("span",{class:"token expression"},"of ASM program objects")])]),n(`
`),s("span",{class:"line"},[n("OBJECTS "),s("span",{class:"token operator"},"+="),n(" $"),s("span",{class:"token punctuation"},"("),n("addprefix $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),s("span",{class:"token punctuation"},","),n("$"),s("span",{class:"token punctuation"},"("),n("notdir $"),s("span",{class:"token punctuation"},"("),n("ASM_SOURCES"),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"."),n("s"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"."),n("o"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("vpath "),s("span",{class:"token operator"},"%"),s("span",{class:"token punctuation"},"."),n("s $"),s("span",{class:"token punctuation"},"("),n("sort $"),s("span",{class:"token punctuation"},"("),n("dir $"),s("span",{class:"token punctuation"},"("),n("ASM_SOURCES"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("OBJECTS "),s("span",{class:"token operator"},"+="),n(" $"),s("span",{class:"token punctuation"},"("),n("addprefix $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),s("span",{class:"token punctuation"},","),n("$"),s("span",{class:"token punctuation"},"("),n("notdir $"),s("span",{class:"token punctuation"},"("),n("ASMM_SOURCES"),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"."),n("S"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"."),n("o"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("vpath "),s("span",{class:"token operator"},"%"),s("span",{class:"token punctuation"},"."),n("S $"),s("span",{class:"token punctuation"},"("),n("sort $"),s("span",{class:"token punctuation"},"("),n("dir $"),s("span",{class:"token punctuation"},"("),n("ASMM_SOURCES"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("$"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},"%"),s("span",{class:"token punctuation"},"."),n("o"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token operator"},"%"),s("span",{class:"token punctuation"},"."),n("c Makefile "),s("span",{class:"token operator"},"|"),n(" $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),n()]),n(`
`),s("span",{class:"line"},[n("	$"),s("span",{class:"token punctuation"},"("),n("CC"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"-"),n("c $"),s("span",{class:"token punctuation"},"("),n("CFLAGS"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"-"),n("Wa"),s("span",{class:"token punctuation"},","),s("span",{class:"token operator"},"-"),n("a"),s("span",{class:"token punctuation"},","),s("span",{class:"token operator"},"-"),n("ad"),s("span",{class:"token punctuation"},","),s("span",{class:"token operator"},"-"),n("alms"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),n("$"),s("span",{class:"token punctuation"},"("),n("notdir $"),s("span",{class:"token punctuation"},"("),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"."),n("c"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"."),n("lst"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token operator"},"<"),n(),s("span",{class:"token operator"},"-"),n("o $@")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("$"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},"%"),s("span",{class:"token punctuation"},"."),n("o"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token operator"},"%"),s("span",{class:"token punctuation"},"."),n("s Makefile "),s("span",{class:"token operator"},"|"),n(" $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("	$"),s("span",{class:"token punctuation"},"("),n("AS"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"-"),n("c $"),s("span",{class:"token punctuation"},"("),n("CFLAGS"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token operator"},"<"),n(),s("span",{class:"token operator"},"-"),n("o $@")]),n(`
`),s("span",{class:"line"},[n("$"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},"%"),s("span",{class:"token punctuation"},"."),n("o"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token operator"},"%"),s("span",{class:"token punctuation"},"."),n("S Makefile "),s("span",{class:"token operator"},"|"),n(" $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("	$"),s("span",{class:"token punctuation"},"("),n("AS"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"-"),n("c $"),s("span",{class:"token punctuation"},"("),n("CFLAGS"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token operator"},"<"),n(),s("span",{class:"token operator"},"-"),n("o $@")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("$"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),n("$"),s("span",{class:"token punctuation"},"("),n("TARGET"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),n("elf"),s("span",{class:"token operator"},":"),n(" $"),s("span",{class:"token punctuation"},"("),n("OBJECTS"),s("span",{class:"token punctuation"},")"),n(" Makefile")]),n(`
`),s("span",{class:"line"},[n("	$"),s("span",{class:"token punctuation"},"("),n("CC"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token punctuation"},"("),n("OBJECTS"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token punctuation"},"("),n("LDFLAGS"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"-"),n("o $@")]),n(`
`),s("span",{class:"line"},[n("	$"),s("span",{class:"token punctuation"},"("),n("SZ"),s("span",{class:"token punctuation"},")"),n(" $@")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("$"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},"%"),s("span",{class:"token punctuation"},"."),n("hex"),s("span",{class:"token operator"},":"),n(" $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},"%"),s("span",{class:"token punctuation"},"."),n("elf "),s("span",{class:"token operator"},"|"),n(" $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("	$"),s("span",{class:"token punctuation"},"("),n("HEX"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token operator"},"<"),n(" $@")]),n(`
`),s("span",{class:"line"},"	"),n(`
`),s("span",{class:"line"},[n("$"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},"%"),s("span",{class:"token punctuation"},"."),n("bin"),s("span",{class:"token operator"},":"),n(" $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},"%"),s("span",{class:"token punctuation"},"."),n("elf "),s("span",{class:"token operator"},"|"),n(" $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("	$"),s("span",{class:"token punctuation"},"("),n("BIN"),s("span",{class:"token punctuation"},")"),n(" $"),s("span",{class:"token operator"},"<"),n(" $@	")]),n(`
`),s("span",{class:"line"},"	"),n(`
`),s("span",{class:"line"},[n("$"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},":")]),n(`
`),s("span",{class:"line"},"	mkdir $@		"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"clean"),n(),s("span",{class:"token expression"},"up")])]),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[n("clean"),s("span",{class:"token operator"},":")]),n(`
`),s("span",{class:"line"},[n("	"),s("span",{class:"token operator"},"-"),n("rm "),s("span",{class:"token operator"},"-"),n("fR $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},"  "),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),n(),s("span",{class:"token directive keyword"},"dependencies")])]),n(`
`),s("span",{class:"line"},"#######################################"),n(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},"-"),n("include $"),s("span",{class:"token punctuation"},"("),n("wildcard $"),s("span",{class:"token punctuation"},"("),n("BUILD_DIR"),s("span",{class:"token punctuation"},")"),s("span",{class:"token comment"},"/*.d)"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"# *** EOF ***"),n(`
`),s("span",{class:"line"})])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"prismjs","data-ext":"cpp","data-title":"cpp"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token comment"},"/*"),n(`
`),s("span",{class:"line"},"******************************************************************************"),n(`
`),s("span",{class:"line"},"**"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"**  File        : LinkerScript.ld"),n(`
`),s("span",{class:"line"},"**"),n(`
`),s("span",{class:"line"},"**  Author		: STM32CubeMX"),n(`
`),s("span",{class:"line"},"**"),n(`
`),s("span",{class:"line"},"**  Abstract    : Linker script for STM32F103C8Tx series"),n(`
`),s("span",{class:"line"},"**                64Kbytes FLASH and 20Kbytes RAM"),n(`
`),s("span",{class:"line"},"**"),n(`
`),s("span",{class:"line"},"**                Set heap size, stack size and stack location according"),n(`
`),s("span",{class:"line"},"**                to application requirements."),n(`
`),s("span",{class:"line"},"**"),n(`
`),s("span",{class:"line"},"**                Set memory bank area and size if external memory is used."),n(`
`),s("span",{class:"line"},"**"),n(`
`),s("span",{class:"line"},"**  Target      : STMicroelectronics STM32"),n(`
`),s("span",{class:"line"},"**"),n(`
`),s("span",{class:"line"},"**  Distribution: The file is distributed “as is,” without any warranty"),n(`
`),s("span",{class:"line"},"**                of any kind."),n(`
`),s("span",{class:"line"},"**"),n(`
`),s("span",{class:"line"},"*****************************************************************************"),n(`
`),s("span",{class:"line"},"** @attention"),n(`
`),s("span",{class:"line"},"**"),n(`
`),s("span",{class:"line"},"** <h2><center>&copy; COPYRIGHT(c) 2019 STMicroelectronics</center></h2>"),n(`
`),s("span",{class:"line"},"**"),n(`
`),s("span",{class:"line"},"** Redistribution and use in source and binary forms, with or without modification,"),n(`
`),s("span",{class:"line"},"** are permitted provided that the following conditions are met:"),n(`
`),s("span",{class:"line"},"**   1. Redistributions of source code must retain the above copyright notice,"),n(`
`),s("span",{class:"line"},"**      this list of conditions and the following disclaimer."),n(`
`),s("span",{class:"line"},"**   2. Redistributions in binary form must reproduce the above copyright notice,"),n(`
`),s("span",{class:"line"},"**      this list of conditions and the following disclaimer in the documentation"),n(`
`),s("span",{class:"line"},"**      and/or other materials provided with the distribution."),n(`
`),s("span",{class:"line"},"**   3. Neither the name of STMicroelectronics nor the names of its contributors"),n(`
`),s("span",{class:"line"},"**      may be used to endorse or promote products derived from this software"),n(`
`),s("span",{class:"line"},"**      without specific prior written permission."),n(`
`),s("span",{class:"line"},"**"),n(`
`),s("span",{class:"line"},'** THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"'),n(`
`),s("span",{class:"line"},"** AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE"),n(`
`),s("span",{class:"line"},"** IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE"),n(`
`),s("span",{class:"line"},"** DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE"),n(`
`),s("span",{class:"line"},"** FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL"),n(`
`),s("span",{class:"line"},"** DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR"),n(`
`),s("span",{class:"line"},"** SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER"),n(`
`),s("span",{class:"line"},"** CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,"),n(`
`),s("span",{class:"line"},"** OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE"),n(`
`),s("span",{class:"line"},"** OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE."),n(`
`),s("span",{class:"line"},"**"),n(`
`),s("span",{class:"line"},"*****************************************************************************"),n(`
`),s("span",{class:"line"},"*/")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"/* Entry Point */")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"ENTRY"),s("span",{class:"token punctuation"},"("),n("Reset_Handler"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"/* Highest address of the user mode stack */")]),n(`
`),s("span",{class:"line"},[n("_estack "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ORIGIN"),s("span",{class:"token punctuation"},"("),n("RAM"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token function"},"LENGTH"),s("span",{class:"token punctuation"},"("),n("RAM"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n("    "),s("span",{class:"token comment"},"/* end of RAM */")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"/* Generate a link error if heap and stack don't fit into RAM */")]),n(`
`),s("span",{class:"line"},[n("_Min_Heap_Size "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token number"},"0x200"),s("span",{class:"token punctuation"},";"),n("      "),s("span",{class:"token comment"},"/* required amount of heap  */")]),n(`
`),s("span",{class:"line"},[n("_Min_Stack_Size "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token number"},"0x400"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token comment"},"/* required amount of stack */")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"/* Specify the memory areas */")]),n(`
`),s("span",{class:"line"},"MEMORY"),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"RAM"),n(),s("span",{class:"token punctuation"},"("),n("xrw"),s("span",{class:"token punctuation"},")"),n("      "),s("span",{class:"token operator"},":"),n(" ORIGIN "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token number"},"0x20000000"),s("span",{class:"token punctuation"},","),n(" LENGTH "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token number"},"20"),n("K")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"FLASH"),n(),s("span",{class:"token punctuation"},"("),n("rx"),s("span",{class:"token punctuation"},")"),n("      "),s("span",{class:"token operator"},":"),n(" ORIGIN "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token number"},"0x8000000"),s("span",{class:"token punctuation"},","),n(" LENGTH "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token number"},"64"),n("K")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"/* Define output sections */")]),n(`
`),s("span",{class:"line"},"SECTIONS"),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token comment"},"/* The startup code goes first into FLASH */")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"."),n("isr_vector "),s("span",{class:"token operator"},":")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ALIGN"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"KEEP"),s("span",{class:"token punctuation"},"("),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("isr_vector"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token comment"},"/* Startup code */")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ALIGN"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token operator"},">"),n("FLASH")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token comment"},"/* The program code and other data goes into FLASH */")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"."),n("text "),s("span",{class:"token operator"},":")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ALIGN"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("text"),s("span",{class:"token punctuation"},")"),n("           "),s("span",{class:"token comment"},"/* .text sections (code) */")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("text"),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},")"),n("          "),s("span",{class:"token comment"},"/* .text* sections (code) */")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("glue_7"),s("span",{class:"token punctuation"},")"),n("         "),s("span",{class:"token comment"},"/* glue arm to thumb code */")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("glue_7t"),s("span",{class:"token punctuation"},")"),n("        "),s("span",{class:"token comment"},"/* glue thumb to arm code */")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("eh_frame"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"KEEP"),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("init"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"KEEP"),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("fini"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ALIGN"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    _etext "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},";"),n("        "),s("span",{class:"token comment"},"/* define a global symbols at end of code */")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token operator"},">"),n("FLASH")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token comment"},"/* Constant data goes into FLASH */")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"."),n("rodata "),s("span",{class:"token operator"},":")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ALIGN"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("rodata"),s("span",{class:"token punctuation"},")"),n("         "),s("span",{class:"token comment"},"/* .rodata sections (constants, strings, etc.) */")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("rodata"),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},")"),n("        "),s("span",{class:"token comment"},"/* .rodata* sections (constants, strings, etc.) */")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ALIGN"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token operator"},">"),n("FLASH")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"."),n("ARM"),s("span",{class:"token punctuation"},"."),n("extab   "),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("ARM"),s("span",{class:"token punctuation"},"."),n("extab"),s("span",{class:"token operator"},"*"),n(),s("span",{class:"token punctuation"},"."),n("gnu"),s("span",{class:"token punctuation"},"."),n("linkonce"),s("span",{class:"token punctuation"},"."),n("armextab"),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token operator"},">"),n("FLASH")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"."),n("ARM "),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    __exidx_start "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("ARM"),s("span",{class:"token punctuation"},"."),n("exidx"),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("    __exidx_end "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token operator"},">"),n("FLASH")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"."),n("preinit_array     "),s("span",{class:"token operator"},":")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"PROVIDE_HIDDEN"),n(),s("span",{class:"token punctuation"},"("),n("__preinit_array_start "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"KEEP"),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("preinit_array"),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"PROVIDE_HIDDEN"),n(),s("span",{class:"token punctuation"},"("),n("__preinit_array_end "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token operator"},">"),n("FLASH")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"."),n("init_array "),s("span",{class:"token operator"},":")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"PROVIDE_HIDDEN"),n(),s("span",{class:"token punctuation"},"("),n("__init_array_start "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"KEEP"),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token function"},"SORT"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("init_array"),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"KEEP"),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("init_array"),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"PROVIDE_HIDDEN"),n(),s("span",{class:"token punctuation"},"("),n("__init_array_end "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token operator"},">"),n("FLASH")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"."),n("fini_array "),s("span",{class:"token operator"},":")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"PROVIDE_HIDDEN"),n(),s("span",{class:"token punctuation"},"("),n("__fini_array_start "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"KEEP"),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token function"},"SORT"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("fini_array"),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"KEEP"),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("fini_array"),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"PROVIDE_HIDDEN"),n(),s("span",{class:"token punctuation"},"("),n("__fini_array_end "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token operator"},">"),n("FLASH")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token comment"},"/* used by the startup to initialize data */")]),n(`
`),s("span",{class:"line"},[n("  _sidata "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"LOADADDR"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("data"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token comment"},"/* Initialized data sections goes into RAM, load LMA copy after code */")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"."),n("data "),s("span",{class:"token operator"},":"),n()]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ALIGN"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    _sdata "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},";"),n("        "),s("span",{class:"token comment"},"/* create a global symbol at data start */")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("data"),s("span",{class:"token punctuation"},")"),n("           "),s("span",{class:"token comment"},"/* .data sections */")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("data"),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},")"),n("          "),s("span",{class:"token comment"},"/* .data* sections */")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ALIGN"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    _edata "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},";"),n("        "),s("span",{class:"token comment"},"/* define a global symbol at data end */")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token operator"},">"),n("RAM AT"),s("span",{class:"token operator"},">"),n(" FLASH")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"  "),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token comment"},"/* Uninitialized data section */")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ALIGN"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"."),n("bss "),s("span",{class:"token operator"},":")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token comment"},"/* This is used by the startup in order to initialize the .bss secion */")]),n(`
`),s("span",{class:"line"},[n("    _sbss "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},";"),n("         "),s("span",{class:"token comment"},"/* define a global symbol at bss start */")]),n(`
`),s("span",{class:"line"},[n("    __bss_start__ "),s("span",{class:"token operator"},"="),n(" _sbss"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("bss"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("bss"),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),n("COMMON"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ALIGN"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    _ebss "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},";"),n("         "),s("span",{class:"token comment"},"/* define a global symbol at bss end */")]),n(`
`),s("span",{class:"line"},[n("    __bss_end__ "),s("span",{class:"token operator"},"="),n(" _ebss"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token operator"},">"),n("RAM")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token comment"},"/* User_heap_stack section, used to check that there is enough RAM left */")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"."),n("_user_heap_stack "),s("span",{class:"token operator"},":")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ALIGN"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"8"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"PROVIDE"),n(),s("span",{class:"token punctuation"},"("),n(" end "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token function"},"PROVIDE"),n(),s("span",{class:"token punctuation"},"("),n(" _end "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"+"),n(" _Min_Heap_Size"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"+"),n(" _Min_Stack_Size"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"."),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ALIGN"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"8"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token operator"},">"),n("RAM")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"  "),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token comment"},"/* Remove information from the standard libraries */")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token operator"},"/"),n("DISCARD"),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token operator"},":")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    libc"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"a"),n(),s("span",{class:"token punctuation"},"("),n(),s("span",{class:"token operator"},"*"),n(),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("    libm"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"a"),n(),s("span",{class:"token punctuation"},"("),n(),s("span",{class:"token operator"},"*"),n(),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("    libgcc"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"a"),n(),s("span",{class:"token punctuation"},"("),n(),s("span",{class:"token operator"},"*"),n(),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"."),n("ARM"),s("span",{class:"token punctuation"},"."),n("attributes "),s("span",{class:"token number"},"0"),n(),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token operator"},"*"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"."),n("ARM"),s("span",{class:"token punctuation"},"."),n("attributes"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),h=t(`<p>主要添加/修改的内容为</p><div class="language-makefile line-numbers-mode" data-highlighter="prismjs" data-ext="makefile" data-title="makefile"><pre><code><span class="line"><span class="token comment">######################################</span></span>
<span class="line"><span class="token comment"># source</span></span>
<span class="line"><span class="token comment">######################################</span></span>
<span class="line"><span class="token comment"># C sources</span></span>
<span class="line">C_SOURCES <span class="token operator">=</span>  \\</span>
<span class="line"> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> Core/Src/stm32f10x_it.c<span class="token punctuation">)</span> \\</span>
<span class="line"> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/CoreSupport/*.c<span class="token punctuation">)</span> \\</span>
<span class="line"> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/*.c<span class="token punctuation">)</span> \\</span>
<span class="line"> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/STM32F10x_StdPeriph_Driver/src/*.c<span class="token punctuation">)</span> \\</span>
<span class="line"></span>
<span class="line">CPP_SOURCES <span class="token operator">=</span>  \\</span>
<span class="line"> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> Core/Src/*.cpp<span class="token punctuation">)</span> \\</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ASM sources</span></span>
<span class="line">ASM_SOURCES <span class="token operator">=</span>  \\</span>
<span class="line"> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/startup/gcc_ride7/startup_stm32f10x_md.s<span class="token punctuation">)</span> \\</span>
<span class="line"></span>
<span class="line">FLASH_START <span class="token operator">=</span> 0x08000000</span>
<span class="line"></span>
<span class="line"><span class="token comment"># C defines</span></span>
<span class="line"><span class="token comment"># 定义芯片型号</span></span>
<span class="line"><span class="token comment"># 定义使用标准外设库</span></span>
<span class="line">C_DEFS <span class="token operator">=</span>  \\</span>
<span class="line"> -D STM32F10X_MD \\</span>
<span class="line"> -D USE_STDPERIPH_DRIVER</span>
<span class="line"></span>
<span class="line"><span class="token comment"># C includes</span></span>
<span class="line">C_CPP_INCLUDES <span class="token operator">=</span>  \\</span>
<span class="line"> -I Core/Inc/ \\</span>
<span class="line"> -I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/CoreSupport/ \\</span>
<span class="line"> -I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/CMSIS/CM3/DeviceSupport/ST/STM32F10x/ \\</span>
<span class="line"> -I Drivers/STM32F10x_StdPeriph_Lib_V3.5.0/Libraries/STM32F10x_StdPeriph_Driver/inc/ \\</span>
<span class="line"></span>
<span class="line">CPP_FLAGS <span class="token operator">+=</span> <span class="token variable">$</span><span class="token punctuation">(</span>MCU<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>C_DEFS<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>C_CPP_INCLUDES<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>OPT<span class="token punctuation">)</span> -Wall -fdata-sections -ffunction-sections</span>
<span class="line"></span>
<span class="line"><span class="token keyword">ifeq</span> <span class="token punctuation">(</span><span class="token variable">$</span><span class="token punctuation">(</span>DEBUG<span class="token punctuation">)</span>, 1<span class="token punctuation">)</span></span>
<span class="line">C_FLAGS <span class="token operator">+=</span> -g -gdwarf-2</span>
<span class="line">CPP_FLAGS <span class="token operator">+=</span> -g -gdwarf-2</span>
<span class="line"><span class="token keyword">endif</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Generate dependency information</span></span>
<span class="line">C_FLAGS <span class="token operator">+=</span> -MMD -MP -MF<span class="token string">&quot;$(@:%.o=%.d)&quot;</span></span>
<span class="line">CPP_FLAGS <span class="token operator">+=</span> -MMD -MP -MF<span class="token string">&quot;$(@:%.o=%.d)&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># link script</span></span>
<span class="line">LDSCRIPT <span class="token operator">=</span> STM32F103C8Tx_FLASH.ld</span>
<span class="line"></span>
<span class="line"><span class="token comment"># libraries</span></span>
<span class="line">LIBS <span class="token operator">=</span> -lc -lm -lnosys </span>
<span class="line">LIBDIR <span class="token operator">=</span> </span>
<span class="line"><span class="token comment"># 改成 -specs=nosys.specs</span></span>
<span class="line"><span class="token comment"># 添加 -Wl,--gc-sections,--print-memory-usage # 打印输出内存使用情况</span></span>
<span class="line"><span class="token comment"># 添加 -u _printf_float # 实现浮点数格式化输出 printf(&quot;%f&quot;,val);</span></span>
<span class="line">LDFLAGS <span class="token operator">=</span> <span class="token variable">$</span><span class="token punctuation">(</span>MCU<span class="token punctuation">)</span> -specs<span class="token operator">=</span>nosys.specs -T<span class="token variable">$</span><span class="token punctuation">(</span>LDSCRIPT<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>LIBDIR<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>LIBS<span class="token punctuation">)</span> -Wl,-Map<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span>/<span class="token variable">$</span><span class="token punctuation">(</span>TARGET<span class="token punctuation">)</span>.map,--cref -Wl,--gc-sections,--print-memory-usage </span>
<span class="line"></span>
<span class="line"><span class="token comment">#######################################</span></span>
<span class="line"><span class="token comment"># build the application</span></span>
<span class="line"><span class="token comment">#######################################</span></span>
<span class="line"><span class="token comment"># list of c program objects</span></span>
<span class="line">OBJECTS <span class="token operator">=</span> <span class="token variable">$</span><span class="token punctuation">(</span>addprefix <span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span>/,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">notdir</span> <span class="token variable">$</span><span class="token punctuation">(</span>C_SOURCES<span class="token punctuation">:</span>.c<span class="token operator">=</span>.o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">vpath</span> %.c <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">sort</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">dir</span> <span class="token variable">$</span><span class="token punctuation">(</span>C_SOURCES<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># list of cpp program objects</span></span>
<span class="line">OBJECTS <span class="token operator">+=</span> <span class="token variable">$</span><span class="token punctuation">(</span>addprefix <span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span>/,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">notdir</span> <span class="token variable">$</span><span class="token punctuation">(</span>CPP_SOURCES<span class="token punctuation">:</span>.cpp<span class="token operator">=</span>.o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">vpath</span> %.cpp <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">sort</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">dir</span> <span class="token variable">$</span><span class="token punctuation">(</span>CPP_SOURCES<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token target symbol"><span class="token variable">$</span>(BUILD_DIR)/%.o</span><span class="token punctuation">:</span> %.c Makefile <span class="token operator">|</span> <span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span> </span>
<span class="line"> <span class="token variable">$</span><span class="token punctuation">(</span>CC<span class="token punctuation">)</span> -c <span class="token variable">$</span><span class="token punctuation">(</span>C_FLAGS<span class="token punctuation">)</span> -Wa,-a,-ad,-alms<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span>/<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">notdir</span> <span class="token variable">$</span><span class="token punctuation">(</span>&lt;<span class="token punctuation">:</span>.c<span class="token operator">=</span>.lst<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token variable">$&lt;</span> -o <span class="token variable">$@</span></span>
<span class="line"></span>
<span class="line"><span class="token target symbol"><span class="token variable">$</span>(BUILD_DIR)/%.o</span><span class="token punctuation">:</span> %.cpp Makefile <span class="token operator">|</span> <span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span> </span>
<span class="line"> <span class="token variable">$</span><span class="token punctuation">(</span>XX<span class="token punctuation">)</span> -c <span class="token variable">$</span><span class="token punctuation">(</span>CPP_FLAGS<span class="token punctuation">)</span> -Wa,-a,-ad,-alms<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span>/<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">notdir</span> <span class="token variable">$</span><span class="token punctuation">(</span>&lt;<span class="token punctuation">:</span>.cpp<span class="token operator">=</span>.lst<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token variable">$&lt;</span> -o <span class="token variable">$@</span></span>
<span class="line"></span>
<span class="line"><span class="token target symbol"><span class="token variable">$</span>(BUILD_DIR)/%.o</span><span class="token punctuation">:</span> %.s Makefile <span class="token operator">|</span> <span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span></span>
<span class="line"> <span class="token variable">$</span><span class="token punctuation">(</span>AS<span class="token punctuation">)</span> -c <span class="token variable">$</span><span class="token punctuation">(</span>C_FLAGS<span class="token punctuation">)</span> <span class="token variable">$&lt;</span> -o <span class="token variable">$@</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编写makefile指令实现写入-擦除" tabindex="-1"><a class="header-anchor" href="#编写makefile指令实现写入-擦除"><span>编写makefile指令实现写入\\擦除</span></a></h2><div class="language-makefile line-numbers-mode" data-highlighter="prismjs" data-ext="makefile" data-title="makefile"><pre><code><span class="line"><span class="token comment">#######################################</span></span>
<span class="line"><span class="token comment"># write</span></span>
<span class="line"><span class="token comment">#######################################</span></span>
<span class="line"><span class="token target symbol">write</span><span class="token punctuation">:</span> <span class="token variable">$</span><span class="token punctuation">(</span>BUILD_DIR<span class="token punctuation">)</span>/<span class="token variable">$</span><span class="token punctuation">(</span>TARGET<span class="token punctuation">)</span>.bin</span>
<span class="line"> openocd \\</span>
<span class="line">  -f interface/stlink.cfg \\</span>
<span class="line">  -f target/stm32f1x.cfg \\</span>
<span class="line">  -c <span class="token string">&quot;init; reset halt; wait_halt; flash write_image erase $(BUILD_DIR)/$(TARGET).bin \${FLASH_START}; reset; shutdown;&quot;</span> </span>
<span class="line">  <span class="token operator">@</span>echo <span class="token string">&quot;Write Completed.&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#######################################</span></span>
<span class="line"><span class="token comment"># erase</span></span>
<span class="line"><span class="token comment">#######################################</span></span>
<span class="line"><span class="token target symbol">erase</span><span class="token punctuation">:</span></span>
<span class="line"> openocd \\</span>
<span class="line">  -f interface/stlink.cfg \\</span>
<span class="line">  -f target/stm32f1x.cfg \\</span>
<span class="line">  -c <span class="token string">&quot;init; reset halt; flash erase_sector 0 0 1; exit&quot;</span></span>
<span class="line"> <span class="token operator">@</span>echo <span class="token string">&quot;Erase Completed.&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#######################################</span></span>
<span class="line"><span class="token comment"># reset</span></span>
<span class="line"><span class="token comment">#######################################</span></span>
<span class="line"><span class="token target symbol">reset</span><span class="token punctuation">:</span></span>
<span class="line"> openocd \\</span>
<span class="line">  -f interface/stlink.cfg \\</span>
<span class="line">  -f target/stm32f1x.cfg \\</span>
<span class="line">  -c <span class="token string">&quot;init; reset; exit&quot;</span></span>
<span class="line"> <span class="token operator">@</span>echo <span class="token string">&quot;Reset Completed.&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function D($,C){const c=r("CodeTabs");return u(),i("div",null,[m,o(c,{id:"56",data:[{id:"<code v-pre>修改后的Makefile</code>"},{id:"<code v-pre>修改前的Makefile</code>"},{id:"<code v-pre>STM32F103C8Tx_FLASH.ld</code>"}]},{title0:a(({value:e,isActive:l})=>[v]),title1:a(({value:e,isActive:l})=>[b]),title2:a(({value:e,isActive:l})=>[S]),tab0:a(({value:e,isActive:l})=>[_]),tab1:a(({value:e,isActive:l})=>[I]),tab2:a(({value:e,isActive:l})=>[f]),_:1}),h])}const L=p(d,[["render",D],["__file","index.html.vue"]]),A=JSON.parse('{"path":"/%E7%94%B5%E5%AD%90/stm32-makefile%E6%A8%A1%E6%9D%BF%E5%B7%A5%E7%A8%8B%E7%9A%84%E5%88%9B%E5%BB%BA/","title":"stm32-makefile项目的创建(c/c++混合编译)","lang":"zh-CN","frontmatter":{"title":"stm32-makefile项目的创建(c/c++混合编译)","date":"2024-07-21T04:01:00.000Z","description":"stm32-makefile项目的创建(c/c++混合编译) 工程文件结构 Makefile文件的生成和修改 先使用STM32CubeMX生成Hal库的makefile工程 Alt text 删除大部分文件，保留两个文件 Makefile文件 链接脚本，文件名可能为：STM32F103C8Tx_FLASH.ld 下载并解压STM32F10x_StdPe...","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E7%94%B5%E5%AD%90/stm32-makefile%E6%A8%A1%E6%9D%BF%E5%B7%A5%E7%A8%8B%E7%9A%84%E5%88%9B%E5%BB%BA/"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"stm32-makefile项目的创建(c/c++混合编译)"}],["meta",{"property":"og:description","content":"stm32-makefile项目的创建(c/c++混合编译) 工程文件结构 Makefile文件的生成和修改 先使用STM32CubeMX生成Hal库的makefile工程 Alt text 删除大部分文件，保留两个文件 Makefile文件 链接脚本，文件名可能为：STM32F103C8Tx_FLASH.ld 下载并解压STM32F10x_StdPe..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-22T16:53:14.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:published_time","content":"2024-07-21T04:01:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-22T16:53:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"stm32-makefile项目的创建(c/c++混合编译)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-21T04:01:00.000Z\\",\\"dateModified\\":\\"2024-07-22T16:53:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"工程文件结构","slug":"工程文件结构","link":"#工程文件结构","children":[]},{"level":2,"title":"Makefile文件的生成和修改","slug":"makefile文件的生成和修改","link":"#makefile文件的生成和修改","children":[]},{"level":2,"title":"编写makefile指令实现写入\\\\擦除","slug":"编写makefile指令实现写入-擦除","link":"#编写makefile指令实现写入-擦除","children":[]}],"git":{"createdTime":1721505726000,"updatedTime":1721667194000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":3}]},"readingTime":{"minutes":1.82,"words":545},"filePathRelative":"电子/stm32-makefile模板工程的创建/index.md","localizedDate":"2024年7月21日","excerpt":"","autoDesc":true}');export{L as comp,A as data};
