// 12MHz时实现毫秒级延迟的写法
void delay(unsigned int ms)
{
    unsigned int i, j;
    for (i = ms; i > 0; i--)
        for (j = 123; j > 0; j--) ;
}