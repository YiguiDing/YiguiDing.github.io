from math import sqrt


a_x = eval(input("input:a_x="))
a_y = eval(input("input:a_y="))
b_x = eval(input("input:b_x="))
b_y = eval(input("input:b_y="))

d = sqrt((a_x-b_x)**2+(a_y-b_y)**2)

print(d)