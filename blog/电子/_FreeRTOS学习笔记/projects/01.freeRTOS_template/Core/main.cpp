/* StdPeriph_Lib includes. */
#include "stm32f10x.h"
/* FreeRTOS includes. */
#include <FreeRTOS.h>
#include <task.h>
#include <queue.h>
#include <timers.h>
#include <semphr.h>
/* Driver includes. */
#include <Serial.h>
/*-----------------------------------------------------------*/
void task1(void *parameters)
{
  Serial_Printf("vTaskStartScheduler\n");

  /* Unused parameters. */
  (void)parameters;

  for (;;)
  {
    Serial_Printf("111\n"); /* Example Task Code */
    vTaskDelay(100);        /* delay 100 ticks */
  }
}
void task2(void *parameters)
{
  /* Unused parameters. */
  (void)parameters;

  for (;;)
  {
    Serial_Printf("222\n"); /* Example Task Code */
    vTaskDelay(100);        /* delay 100 ticks */
  }
}
/*-----------------------------------------------------------*/

int main(void)
{
  Serial_Init();
  Serial_Printf("Example FreeRTOS Project0\n"); // 有输出

  // task1
  TaskHandle_t pxCreatedTask1Handler;
  xTaskCreate(task1, "task1", 1024, NULL, 1, &pxCreatedTask1Handler); // 为什么卡死
  Serial_Printf("Example FreeRTOS Project1\n"); // 没有输出

  // task2
  TaskHandle_t pxCreatedTask2Handler;
  xTaskCreate(task2, "task2", 100, NULL, 1, &pxCreatedTask2Handler);

  /* Start the scheduler. */
  vTaskStartScheduler();

  for (;;)
  {
    /* Should not reach here. */
  }
  return 0;
}
/*-----------------------------------------------------------*/

#if (configCHECK_FOR_STACK_OVERFLOW > 0)

void vApplicationStackOverflowHook(TaskHandle_t xTask,
                                   char *pcTaskName)
{
  /* Check pcTaskName for the name of the offending task,
   * or pxCurrentTCB if pcTaskName has itself been corrupted. */
  (void)xTask;
  (void)pcTaskName;
}

#endif /* #if ( configCHECK_FOR_STACK_OVERFLOW > 0 ) */
/*-----------------------------------------------------------*/
