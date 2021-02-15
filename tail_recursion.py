#! /usr/local/bin/python3.9
# Factorial tail_recursion


import argparse

parser = argparse.ArgumentParser(description='Calculates factorial of given cli integer arg.')

args = parser.add_argument("integer", help="Factorial integer", type=int)

args = parser.parse_args()

integer = args.integer


# regular factorial recursion algorithm


def factorial(n):
    # base case
    if n == 1:
        return 1
    # recursive case
    else:
        return n * factorial(n - 1)


# tail recursion

def tail_recursion_factorial(n, accumulator):
    # base case
    if n == 1:
        return accumulator
    else:
        return tail_recursion_factorial((n - 1), (accumulator * n))


# use unix 'time' command to test the execution times of these two functions that accomplish the same goal
# and you'll find that the function making use of tail recursion uses less system resources and executes sooner.
print(factorial(integer))
print(tail_recursion_factorial(integer, 1))


# Note to self: Python is very good at innately handling enormous numbers with little if any thinking required.
# Consider how it would be handling a 100 digit number in C - quite a different matter indeed.

# Tail recursion is another useful tool in a programmers belt and I'll keep it in the back of my mind should
# It ever prove useful to me.

























