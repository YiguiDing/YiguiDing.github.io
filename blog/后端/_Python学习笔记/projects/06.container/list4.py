mylist = [0,1,2,3,4,5,6]

# 尾部附加
mylist.append(7)
print(mylist) # [0, 1, 2, 3, 4, 5, 6, 7]

# 清除
# mylist.clear()

# 浅拷贝列表
mylist2 = mylist.copy()
print(mylist2) # [0, 1, 2, 3, 4, 5, 6, 7]

# 统计元素2的个数
print(mylist.count(2)) # 1

# 扩展列表 
mylist.extend([8,9,10])
print(mylist) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 查找6的索引
print(mylist.index(6)) # 6

# 在指定位置插入元素
mylist.insert(1,'x')
print(mylist) # [0, 'x', 1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 弹出尾部元素
print(mylist.pop()) # 10
print(mylist) # [0, 'x', 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 删除指定元素
mylist.remove('x')
print(mylist) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 删除指定索引的元素
del mylist[9]
print(mylist) # [0, 1, 2, 3, 4, 5, 6, 7, 8]

# 原地排序
mylist.sort()
print(mylist) # [0, 1, 2, 3, 4, 5, 6, 7, 8]

# 获取长度
print(len(mylist)) # 9
