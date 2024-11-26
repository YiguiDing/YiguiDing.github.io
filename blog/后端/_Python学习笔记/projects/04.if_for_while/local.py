# if、while、for不会创建新的作用域

k = 123
print(123) # k = 3
for k in range(1):
    k = 'for'
print(k) 

if True:
    k = True
print(k)


while True:
    k = 'while'
    break

print(k)
