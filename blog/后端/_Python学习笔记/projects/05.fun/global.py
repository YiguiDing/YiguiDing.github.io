num = 123

def changeNumA():
    num = 111
    
def changeNumB():
    global num
    num = 222

print(num)    
changeNumA()
print(num)    
changeNumB()
print(num)    
