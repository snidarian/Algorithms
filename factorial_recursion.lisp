
#!/usr/bin/clisp

(defun factorial (n)
  (if (= n 1)
      1
      (* n (factorial (- n 1)))))


(write-line "Enter number to return factorial: ")
(setq x  (read))
(format t "~D! is ~D" x (factorial x))






