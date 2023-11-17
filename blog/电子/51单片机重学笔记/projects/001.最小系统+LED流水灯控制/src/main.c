#include <REG51.H>
#include "utils.h"

sfr LED  = 0x90; // P1
sbit BUZ = P2 ^ 0;

unsigned char LED_STATE[] = {
                                1 << 0, //00000001 0x01
                                1 << 1, //00000010 0x02
                                1 << 2, //00000100 0x04
                                1 << 3, //00001000 0x08
                                1 << 4, //00010000 0x10
                                1 << 5, //00100000 0x20
                                1 << 6, //01000000 0x40
                                1 << 7, //10000000 0x80
                                1 << 8, //00000000 0x00
    };
void main()
{
    while (1) {
        char i;
        for (i = 0; i < 8; i++) {
            LED = ~LED_STATE[i];
            BUZ = ~BUZ;
            delay(1000);
        }
    }
}