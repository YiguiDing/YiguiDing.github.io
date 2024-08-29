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
TaskHandle_t task1Handler;
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
TaskHandle_t task2Handler;
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
#define TASK3_STACK_SIZE 100
StackType_t task3Stack[TASK3_STACK_SIZE];
StaticTask_t xTask3TCB;
TaskHandle_t task3Handler;
void task3(void *parameters)
{
  /* Unused parameters. */
  (void)parameters;

  for (;;)
  {
    Serial_Printf("333\n"); /* Example Task Code */
    vTaskDelay(100);        /* delay 100 ticks */
  }
}
/*-----------------------------------------------------------*/

int main(void)
{
  Serial_Init();
  Serial_Printf("Example FreeRTOS Project0\n"); // 有输出

  // task1 动态分配栈
  xTaskCreate(task1, "task1", 1024, NULL, 1, &task1Handler);
  // task2 动态分配栈
  xTaskCreate(task2, "task2", 100, NULL, 1, &task2Handler);
  // task3 静态分配栈
  task3Handler = xTaskCreateStatic(task3, "task3", TASK3_STACK_SIZE, NULL, 1, task3Stack, &xTask3TCB);

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
#if (configSUPPORT_STATIC_ALLOCATION > 0)
#define IdleTaskStackSize 100
StaticTask_t xIdleTaskTCB;
StackType_t xIdleTaskStack[IdleTaskStackSize];
void vApplicationGetIdleTaskMemory(StaticTask_t **ppxIdleTaskTCBBuffer,
                                   StackType_t **ppxIdleTaskStackBuffer,
                                   uint32_t *pulIdleTaskStackSize)
{
  *ppxIdleTaskTCBBuffer = &xIdleTaskTCB;
  *ppxIdleTaskStackBuffer = xIdleTaskStack;
  *pulIdleTaskStackSize = IdleTaskStackSize;
}
#endif /* #if ( configSUPPORT_STATIC_ALLOCATION > 0 ) */
