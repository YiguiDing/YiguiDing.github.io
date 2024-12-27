#ifndef __COMMUNICATION_H__
#define __COMMUNICATION_H__
#include <stdint.h>
#include <Arduino.h>

extern char buffer[];
extern uint8_t buf_idx;
extern uint8_t buf_len;
uint8_t buffer_empty();
void send_message();

#endif