mylist = [0,1,2,3,4,5,6]
print("########切片########")
print(mylist[:]) # [0, 1, 2, 3, 4, 5, 6]
print(mylist[0:2]) # [0, 1]
print(mylist[2:4]) # [2, 3]
print(mylist[-5:-1]) # [2, 3, 4, 5]
print(mylist[-4:-1]) # [3, 4, 5]
print("########切片+步长########")
print(mylist[::1]) # [0, 1, 2, 3, 4, 5, 6]
print(mylist[::2]) # [0, 2, 4, 6]
print(mylist[::-1]) # [6, 5, 4, 3, 2, 1, 0]
print(mylist[::-2]) # [6, 4, 2, 0]