// 低级接口
#include "utils.h"
#include "REG51.H"

// ----------------------------------------------端口定义----------------------------------------------
#define LCD_DATA P0         // LCD数据8bit端口
sbit LCD_BF = LCD_DATA ^ 7; // 数据位的第七位为读/写允许位，进行读写操作前，要确认该位值为 0 才可进行操作
sbit LCD_RS = P2 ^ 0;       // 数据/命令选择端(H/L)
sbit LCD_RW = P2 ^ 1;       // 读/写选择端(H/L)
sbit LCD_EN = P2 ^ 2;       // 使能信号

// ----------------------------------------------常量定义----------------------------------------------
enum LCD_BF_Enum {
    Lazy = 0,
    Busy = 1
};
enum LCD_RW_Enum {
    Write = 0,
    Read  = 1
};
enum LCD_RS_Enum {
    CMD  = 0,
    DATA = 1
};
enum LCD_EN_Enum {
    Disable = 0,
    Enable  = 1
};
// enum LCD_Bool_Enum {
//     False = 0,
//     True  = 1
// };
// ----------------【忙等待、读取、写入】三个基本操作的实现--------------------------------

// 基本操作：等待LCD可以读写数据
// 功能：读取BF状态字、AC地址(最高位为BF状态字，可判断是否忙)
// BF 位为读/写允许位，在 MCU 对 LCD 进行读写操作前，要确认该位值为 0 才可进行操作。
uint8_t LCD_WaitNoBusy()
{
    uint8_t AC_Add;
    LCD_BF = Busy;            // 预先拉高BF信号
    do {                      // 循环、直到BF为低电平
        LCD_EN = Disable;     // 拉低使能信号
        LCD_RW = Read;        // 读取操作
        LCD_RS = CMD;         // 读取命令
        delay_2us(1);         // 延时
        LCD_EN = Enable;      // 拉高使能
        delay_2us(1);         // 延时
    } while (LCD_BF == Busy); // LCD_BF==1 说明忙
    AC_Add = LCD_DATA;        // 获取AC地址；
    LCD_EN = Disable;         // 拉低使能
    return AC_Add;            // 返回AC地址
}

// 基本操作：写操作（数据或命令）
void LCD_Put(uint8_t _CMD_OR_DATA, uint8_t _data) // 传入指令或数据
{
    LCD_WaitNoBusy();
    LCD_EN   = Disable;      // EN低电平
    LCD_RW   = Write;        // 写入操作
    LCD_RS   = _CMD_OR_DATA; // 数据类型：指令？数据？
    LCD_DATA = _data;        // 准备数据
    delay_2us(1);            // 延时
    LCD_EN = Enable;         // 给一个上升沿，让LCD读取数据
    delay_2us(1);            // 延时
    LCD_EN = Disable;
}
// 基本操作：读操作（数据或命令）
uint8_t LCD_Get(uint8_t _CMD_OR_DATA)
{
    uint8_t res;
    LCD_WaitNoBusy();
    LCD_EN = Disable;      // EN低电平
    LCD_RW = Read;         // 读取操作
    LCD_RS = _CMD_OR_DATA; // 数据类型：指令？数据？
    delay_2us(1);          // 延时
    LCD_EN = Enable;       // 给一个高电平使能
    delay_2us(1);          // 延时
    res    = LCD_DATA;     // 读取数据
    LCD_EN = Disable;      // 拉低使能
    return res;            // 返回结果
}

// -------------- ----【写入命令、写入数据、读取命令、读取数据】四个基本操作的宏定义---------------------------
#define LCD_PutCmd(_cmd)  LCD_Put(CMD, _cmd)
#define LCD_PutDat(_data) LCD_Put(DATA, _data)
#define LCD_GetCmd()      LCD_Get(CMD)
#define LCD_GetDat()      LCD_Get(DATA)

// ----------------------------------8条命令的定义（实际上也保存了状态）------------------------------------

uint8_t CMD_CLEAR = 0x01; // 清屏指令 光标复位到地址00H
uint8_t CMD_CLEAC = 0x02; // 光标归位指令   (使AC清零,光标归位
uint8_t CMD_ENTER = 0x04; // 输入方式设置指令   （该指令的功能在于设置显示字符的进入方式，即在对 DDRM 操作数据写入/读出后，AC 数据地址指针的修改方式）
uint8_t CMD_STATE = 0x08; // 显示状态设置指令 （该指令控制着画面、光标和闪烁的开与关）
uint8_t CMD_SCROL = 0x10; // 画面或光标滚动设置指令
uint8_t CMD_RMODE = 0x20; // 工作方式设置指令
uint8_t CMD_CGADR = 0x40; // 设定 CGRAM 地址设置指令
uint8_t CMD_DDADR = 0x80; // 设置 DDRAM 地址设置指令    (也可理解为修改 AC 指针位置

// ------------------------------低级功能接口实现-------------------------------------
// 工作方式设置
void LCD_RunMode()
{
    // 设置控制器与 MCU 的接口形式为数据总线宽度为 8 位，设置显示字符的行数为 2 行字符，设置显示字符的字体为 5X8 点阵字符体
    LCD_PutCmd(CMD_RMODE | 0x18);
}
// 画面显示
void LCD_Open(uint8_t _open)
{
    if (_open)
        CMD_STATE |= 0x04;
    else
        CMD_STATE &= ~0x04;
    LCD_PutCmd(CMD_STATE);
}
// 光标下划线显示
void LCD_Cusor_Show_UnderLine(uint8_t _show)
{
    if (_show)
        CMD_STATE |= 0x02;
    else
        CMD_STATE &= ~0x02;
    LCD_PutCmd(CMD_STATE);
}
// 光标闪烁
void LCD_Cusor_Flash(uint8_t _flash)
{
    if (_flash)
        CMD_STATE |= 0x01;
    else
        CMD_STATE &= ~0x01;
    LCD_PutCmd(CMD_STATE);
}
// 光标滚动一步
void LCD_Scroll_Cusor_Step(uint8_t _dir)
{
    CMD_SCROL &= ~0x08; // 保证第四位是0
    if (_dir == 'R' || _dir == 'r')
        CMD_SCROL |= 0x04;
    else
        CMD_SCROL &= ~0x04;
    LCD_PutCmd(CMD_SCROL);
}
// 画面滚动
void LCD_Scroll_View_Step(uint8_t _dir)
{
    CMD_SCROL |= 0x08;
    if (_dir == 'R' || _dir == 'r')
        CMD_SCROL |= 0x04;
    else
        CMD_SCROL &= ~0x04;
    LCD_PutCmd(CMD_SCROL);
}
//  在对DDRM 操作数据写入/读出后，AC 数据地址指针自增还是自减。
void LCD_AC_Positive_Increase(uint8_t _increase)
{
    if (_increase) CMD_ENTER |= 0x02;
    else CMD_ENTER &= ~0x02;
    LCD_PutCmd(CMD_ENTER);
}
// 在对 DDRM 写入数据后画面是否同步滚动（显示屏上所有文字是否左移或右移）
void LCD_View_Auto_Scroll(uint8_t _scrollable)
{
    if (_scrollable)
        CMD_ENTER |= 0x01;
    else
        CMD_ENTER &= ~0x01;
    LCD_PutCmd(CMD_ENTER);
}
// 清屏指令,同时光标复位到地址00H
void LCD_Clear()
{
    LCD_PutCmd(CMD_CLEAR);
}
// 光标归位指令
void LCD_Cusor_Init()
{
    LCD_PutCmd(CMD_CLEAC);
}
// 设定 CGRAM 地址设置
void LCD_CGRAM_ADD_SET(uint8_t _col, uint8_t _row)
{
    _col = (_col & 0x07) << 3;
    _row = _row & 0x7;  // 只要最低三位
    CMD_CGADR &= ~0x3f; // 擦除上一次的6bit数据
    CMD_CGADR = CMD_CGADR | _col | _row;
    LCD_PutCmd(CMD_CGADR);
}
// 获取DDRAM(AC)地址
uint8_t LCD_CGRAM_ADD_GET()
{
    return LCD_WaitNoBusy();
}
// 设定 DDRAM(AC) 地址设置
void LCD_DDRAM_ADD_SET(uint8_t _addr)
{
    CMD_DDADR &= ~0x7f; // 擦除上一次的7bit数据
    CMD_DDADR |= _addr;
    LCD_PutCmd(CMD_DDADR);
}
// 向 DDRAM 或 CGRAM 写入数据
void LCD_CGRAM_DDRAM_Put_Data(uint8_t _data)
{
    LCD_PutDat(_data);
}
// 从 DDRAM 或 CGRAM 读回数据
uint8_t LCD_CGRAM_DDRAM_Get_Data()
{
    return LCD_GetDat();
}

// ---------------------------------高级功能接口实现-----------------------------------------------------------
// 初始化
void LCD_Init()
{
    LCD_RunMode();
    LCD_Clear();
    LCD_Cusor_Init();   
    LCD_AC_Positive_Increase(True); // 开启写入后自增AC
    LCD_View_Auto_Scroll(False);    // 关闭写入后自动滚动
    LCD_Open(True);                 // 开显示
}
/*------------------------------------------------------
DDRAM
x=     0  1  2  3  4...................0x27
        ____________________________________
y=0    | 00 01 02 03 04 05 06 07 ....... 27 |
y=1    | 40 41 42 43 44 45 46 47 ....... 67 |
------------------------------------------------------*/
// 跳转到指定位置（支持负数反向定位） x∈[0,0x27] y∈[0,1] 可以使用-1表示最后一位，-2表示最后第二位
void LCD_Cusor_GoToXY(int8_t _x, int8_t _y)
{
    uint8_t addr;
    _x   = (_x % 0x28 + 0x28) % 0x28; // 使其可以使用-1定位到最后一个位置
    _y   = (_y % 0x02 + 0x02) % 0x02;
    addr = _y * 0x40 + _x;
    LCD_DDRAM_ADD_SET(addr);
}
// 输出一个字符
void LCD_PutChar(uint8_t _char)
{
    LCD_CGRAM_DDRAM_Put_Data(_char);
}
// 输出字符串
void LCD_PutString(uint8_t *_str)
{
    while (*_str) LCD_PutChar(*_str++);
}
// 递归输出无符号数
void LCD_PutNum(uint16_t _num) reentrant // reentrant 关键字用于保证可以递归
{
    if (_num / 10) LCD_PutNum(_num / 10);
    LCD_PutChar(_num % 10 + '0');
}
// 输出有符号数
void LCD_PutNumWithSign(int16_t _num)
{
    if (_num < 0) {
        _num = -_num;
        LCD_PutChar('-');
    }
    LCD_PutNum(_num);
}
// 输出一位十六进制字符
void LCD_PutOneHex(uint8_t _hex)
{
    uint8_t temp = _hex % 16;
    if (temp < 9) LCD_PutChar(temp + '0');
    else LCD_PutChar(temp - '9' + 'A');
}
// 输出一个十六进制数
void LCD_PutHex(uint16_t _hex) reentrant
{
    if (_hex / 16) LCD_PutHex(_hex / 16);
    LCD_PutOneHex(_hex % 16);
}
// 输出一个十六进制数，带0x格式
void LCD_PutHexWith0x(uint16_t _hex)
{
    LCD_PutString("0x");
    LCD_PutHex(_hex);
}
// 加载自定义字符
void LCD_LoadCustomChar(uint8_t _idx_CGRAM, uint8_t _data[8])
{
    uint8_t _row;
    for (_row = 0; _row < 8; _row++) {
        LCD_CGRAM_ADD_SET(_idx_CGRAM, _row);
        LCD_CGRAM_DDRAM_Put_Data(_data[_row]);
    }
}
// 输出自定义字符
void LCD_ShowCustomChar(uint8_t _idx)
{
    _idx &= 0x0f; // 只要低四位地址
    LCD_CGRAM_DDRAM_Put_Data(_idx);
}
void LCD_Test()
{
    uint8_t i;
    uint8_t ding[] = {0x00, 0x3F, 0x04, 0x04, 0x04, 0x04, 0x0C, 0x00};
    LCD_Cusor_GoToXY(0, 0);
    // 开启测试
    LCD_Open(True);
    // LCD_Open(False);
    LCD_Cusor_Show_UnderLine(True);
    // LCD_Cusor_Show_UnderLine(False);
    LCD_Cusor_Flash(True);
    // LCD_Cusor_Flash(False);
    LCD_AC_Positive_Increase(True); // 写入后自动移动AC位置
    LCD_View_Auto_Scroll(True);     // 写入后自动滚动

    LCD_Scroll_View_Step('R'); // LCD右滚动
    LCD_Scroll_View_Step('R'); // LCD右滚动
    LCD_Scroll_View_Step('R'); // LCD右滚动
    LCD_Scroll_View_Step('R'); // LCD右滚动
    LCD_Scroll_View_Step('R'); // LCD右滚动
    LCD_Scroll_View_Step('R'); // LCD右滚动
    LCD_Scroll_View_Step('R'); // LCD右滚动

    LCD_Cusor_GoToXY(0, 0);
    LCD_PutString("A");
    delay_ms(1000);

    LCD_LoadCustomChar(1, ding);
    LCD_Cusor_GoToXY(1, 0);
    LCD_ShowCustomChar(1);

    delay_ms(1000);
    LCD_PutChar(' ');
    delay_ms(1000);

    LCD_PutNumWithSign(-123);

    LCD_View_Auto_Scroll(False); // 写入时是否允许AC移动
    delay_ms(1000);
    // LCD_OP_DDRM_AC_Increase(False);// 关闭写入后自动移动位置
    LCD_PutChar(' ');
    delay_ms(1000);
    LCD_PutHexWith0x(0x80);
    delay_ms(1000);

    LCD_Cusor_GoToXY(-1, -1); // 负数坐标测试
    LCD_PutChar('E');

    LCD_Cusor_GoToXY(5, 1);
    i = 5;
    while (i--) {
        LCD_Scroll_Cusor_Step('R'); // 光标右移
        LCD_Scroll_View_Step('L');  // LCD左滚动
        delay_ms(500);
    }
    i = 5;
    while (i--) {
        LCD_Scroll_Cusor_Step('L'); // 光标左移
        LCD_Scroll_View_Step('R');  // LCD右滚动
        delay_ms(500);
    }
}