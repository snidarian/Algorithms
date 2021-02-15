// tail recursion algorithm in c programming

#include <stdlib.h>
#include <stdio.h>


int fact(int n)
{
    if (n == 1)
    {
        return 1;
    }
    else
    {
        return n * fact(n - 1);
    }
}

int tail_fact(int n, int accumulator)
{
    if (n == 1)
    {
        return accumulator;
    }
    else
    {
        return tail_fact((n-1), (n * accumulator));
    }
    
}


int main()
{
    
    printf("%d\n", fact(5));
    printf("%d\n", tail_fact(5, 1));

    return 0;
}


// Make two copies of this program and compile them
// In one, comment out the tail_fact() function call
// in the other comment out the fact() function call
// Use the unix command 'time' to calculate the execution times of both programs.

