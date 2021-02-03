# simple linear search algorithm implemented in python
import random

num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
             21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
            39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

random_number = random.randint(1, 50)
guess = 1

while True:

    if guess == num_array[random_number - 1]:
        print("Number found after " + str(guess) + " guesses")
        print("The random number was " + str(random_number))
        break
    else:
        print("Searching...")
        guess += 1
        continue













