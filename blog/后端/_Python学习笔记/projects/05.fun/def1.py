def add():
    print('add()') # add
    return

print(add) # <function add at 0x018DF7C0>>
res = add()
print(res) # None
print(type(res)) # <class 'NoneType'>