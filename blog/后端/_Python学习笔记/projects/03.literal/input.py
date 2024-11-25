name = input('whats your name?')
age = input('whats your age?') # 得到的是字符串，可能需要调用 age=int(age)


print(f'hello,{name}.')
print(f'your age is {age}.')
print(f'type(age) is {type(age)}.')