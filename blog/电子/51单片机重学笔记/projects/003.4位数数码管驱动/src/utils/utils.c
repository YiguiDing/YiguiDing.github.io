void delay(unsigned int ms) // ms_delay when T=12MHz
{
    unsigned int i, j;
    for (i = ms; i > 0; i--)
        for (j = 123; j > 0; j--) ;
}