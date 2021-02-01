//  A famous recursive function in the world of computer science

#include <stdio.h>
#include <stdlib.h>


int ack(int m, int n)
{
    int ans;
    if (m == 0)
    {
        ans = (n+1);
    }
    else if (n == 0)
    {
        ans = ack((m-1), 1);
    }
    else
    {
        ans = ack(m-1, ack(m, n-1));
        return (ans);
    }
    
}

int main (int argc, char **argv)
{
    int i, j;

    i = atoi(argv[1]);
    j = atoi(argv[2]);

    for(i=0; i<6; i++)
    for(j=0; j<6; j++)

    printf("ackerman (%d, %d) is: %d\n", i, j, ack(i, j));
}














