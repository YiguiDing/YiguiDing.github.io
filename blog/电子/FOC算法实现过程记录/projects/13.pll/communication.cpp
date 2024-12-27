#include "communication.hpp"
char buffer[1024];
uint8_t buf_idx = 0;
uint8_t buf_len = 0;
uint8_t buffer_empty()
{
  return buf_len == 0;
}
void send_message()
{
  if (buf_idx < buf_len)
    Serial.print(buffer[buf_idx++]);
  else
    buf_idx = buf_len = 0;
}
