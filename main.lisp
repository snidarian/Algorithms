#!/usr/bin/clisp
;;;; function demonstrating use of tail and regular recursion functions for factorial calculation



;; regular recursion function calculatin factorial values
(defun factorial (n)
  (if (= n 1)              
      1                           
      (* n (factorial (- n 1))))) 



(write-line "Enter number to return factorial: ")  

(setq x  (read))

(format t "~D! is ~D~%" x (factorial x))



;; recursive function to calculate factorial using tail-recursion trick of inserting accumulator
;; By multiplying and accumulating values as it goes it saves system resources by
;; not having to open many function contexts, initiate new variables for each contexts etc..


(defun tail_recursion_factorial (n accumulator)
  (if (= n 1)              
      accumulator                           
      (tail_recursion_factorial (- n 1) (* n accumulator)))) 



(write-line "tail recrusion function:")

(write-line "Enter number to return factorial: ")  

(setq x  (read))

(format t "~D! is ~D~%" x (tail_recursion_factorial x 1))





