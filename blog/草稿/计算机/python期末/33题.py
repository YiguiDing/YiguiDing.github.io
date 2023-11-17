斐波纳契数列 I
def f(n):
    if n==1 or n==2:
        return 1
    else:
        return f(n-1)+f(n-2)
m=eval(input())        
s=""
for i in range(1,m+1):
    s+="{},".format(f(i))
print(s[:-1])



数列求和
def f(n):
    sum=0.0
    if n%2!=0:
        for i in range(1, n+1, 2):
            sum += 1/i
    else:
        for i in range(2, n+1, 2):
            sum += 1/i
    return sum

n = int(input())
print("{:.2f}".format(f(n)))


逆序
s=input()
print(s[::-1])


输出格式控制 I
n=123456
print("{:+>25}".format(n))

输出格式控制 II
print("0x{0:x},{0},0o{0:o},0b{0:b}".format(0x1010))


转换小写
n=input()
print(n.lower())


字符串替换
s=input()
print(s.replace('py','python'))


汉字的 Unicode 编码值
#请输入一个汉字：
s = input()
print("\"{}\"汉字的Unicode编码：{}".format(s,ord(s)))


传感器日志光照统计
f = open("sensor-data-1k.txt", "r")
sum, cnt = 0, 0
for line in f:
    ls = line.split()
    cnt += 1
    sum += eval(ls[4])
print("{:.2f}".format(sum/cnt))
f.close()


《白鹿原》词频统计
import jieba
f = open("白鹿原.txt")
ls = jieba.lcut(f.read())
d = {}
for w in ls:
    d[w] = d.get(w, 0) + 1
maxc = 0
maxw = ""
for k in d:
    if d[k] > maxc and len(k) > 2:
        maxc = d[k]
        maxw = k
    if d[k] == maxc and len(k) > 2 and k > maxw:
        maxw = k
print(maxw)
f.close()

100以内素数之和
#Prime
def is_prime(n):
    for i in range(2,n):
        if n%i == 0:
            return False
    return True
sum = 0
for i in range(2,100):
    if is_prime(i):
        sum += i
print(sum)



多输入数字求和
sum = 0
txt = input()
while txt != "":
    sum += eval(txt)
    txt = input()
print(sum)



随机字符串
import random
a, b = eval(input())
s = ""
random.seed(a+b)
for i in range(20):
    s += chr(random.randint(32, 127))
print(s)



随机生成字符串
import random
n = int(input())
random.seed(n)
s = ""
for i in range(10):
    s = s + str(random.randint(0,999))
print(s)


随机开柜码
import random

n = input()
random.seed(int(n)) # 随机数种子 n 由用户输入
Sn = '' # 空字符串
characters = 'ABCDEFGHIJ0123456789'
for i in range(6):
    Sn = Sn + random.choice(characters) # 生成的字符连接到字符串上
print(Sn)



生成随机整数 II
import random
n=int(input())
random.seed(n)
print(random.randrange(100))


生成随机整数 I
import random
random.seed(123)
for i in range(10):
    print(random.randint(1,999), end=",")


输入一串字符，统计中文字符的个数
s = input("")#输入包含中文的字符串：
count = 0
for c in s:
    if 0X4E00<=ord(c)<=0X9FA5:
       count += 1
print(count)


输入一个正整数，判断是否为质数
n=eval(input())
t=True
for i in range(2,n):
    if n%i==0:
        t=False
        break
print(t)



输入正整数n，计算各位数字的平方和
n = input()
s = 0
for c in n:
    s += eval(c)**2
print(s)

阶乘 n!

n=eval(input())
term=1
for i in range(1,n+1):
    term=term*i
print(term)    


人名最多数统计
s = '''双儿 洪七公 赵敏 赵敏 逍遥子 鳌拜 殷天正 金轮法王 乔峰 杨过 洪七公 郭靖 
       杨逍 鳌拜 殷天正 段誉 杨逍 慕容复 阿紫 慕容复 郭芙 乔峰 令狐冲 郭芙 
       金轮法王 小龙女 杨过 慕容复 梅超风 李莫愁 洪七公 张无忌 梅超风 杨逍 
       鳌拜 岳不群 黄药师 黄蓉 段誉 金轮法王 忽必烈 忽必烈 张三丰 乔峰 乔峰 
       阿紫 乔峰 金轮法王 袁冠南 张无忌 郭襄 黄蓉 李莫愁 赵敏 赵敏 郭芙 张三丰 
       乔峰 赵敏 梅超风 双儿 鳌拜 陈家洛 袁冠南 郭芙 郭芙 杨逍 赵敏 金轮法王 
       忽必烈 慕容复 张三丰 赵敏 杨逍 令狐冲 黄药师 袁冠南 杨逍 完颜洪烈 殷天正 
       李莫愁 阿紫 逍遥子 乔峰 逍遥子 完颜洪烈 郭芙 杨逍 张无忌 杨过 慕容复 
       逍遥子 虚竹 双儿 乔峰 郭芙 黄蓉 李莫愁 陈家洛 杨过 忽必烈 鳌拜 王语嫣 
       洪七公 韦小宝 阿朱 梅超风 段誉 岳灵珊 完颜洪烈 乔峰 段誉 杨过 杨过 慕容复 
       黄蓉 杨过 阿紫 杨逍 张三丰 张三丰 赵敏 张三丰 杨逍 黄蓉 金轮法王 郭襄 
       张三丰 令狐冲 赵敏 郭芙 韦小宝 黄药师 阿紫 韦小宝 金轮法王 杨逍 令狐冲 阿紫 
       洪七公 袁冠南 双儿 郭靖 鳌拜 谢逊 阿紫 郭襄 梅超风 张无忌 段誉 忽必烈 
       完颜洪烈 双儿 逍遥子 谢逊 完颜洪烈 殷天正 金轮法王 张三丰 双儿 郭襄 阿朱 
       郭襄 双儿 李莫愁 郭襄 忽必烈 金轮法王 张无忌 鳌拜 忽必烈 郭襄 令狐冲 
       谢逊 梅超风 殷天正 段誉 袁冠南 张三丰 王语嫣 阿紫 谢逊 杨过 郭靖 黄蓉 
       双儿 灭绝师太 段誉 张无忌 陈家洛 黄蓉 鳌拜 黄药师 逍遥子 忽必烈 赵敏 
       逍遥子 完颜洪烈 金轮法王 双儿 鳌拜 洪七公 郭芙 郭襄 赵敏'''
ls = s.split()
d = {}
for i in ls:
    d[i] = d.get(i, 0) + 1
max_name, max_cnt = "", 0
for k in d:
    if d[k] > max_cnt:
        max_name, max_cnt = k, d[k]
print(max_name)



数字不同数之和
n = input()
ss = set(n)
s = 0
for i in ss:
    s += eval(i)
print(s)



生成随机密码
import random
random.seed(0x1010)
s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"
ls = []            #把十个密码放入列表ls中
excludes = ""      #存放每个密码的首字符
while len(ls) < 10:
    pwd = ""               #生成一个10字符的密码
    for i in range(10):
        pwd += s[random.randint(0, len(s)-1)]
    if pwd[0] in excludes:   #首字符重复，重新再生成新密码
        continue
    else:                    #首字符不重复，把它添加到列表中
        ls.append(pwd)
        excludes += pwd[0]

# 直接打印
print("\n".join(ls))



jieba库分词
import jieba
txt = "中华人民共和国教育部考试中心委托专家制定了全国计算机等级考试二级程序设计考试大纲"
ls = jieba.lcut(txt, cut_all=True)
print(ls)


列表元素计算
def mean(numlist):
    s = 0.0
    for num in numlist:
        s = s + num
    return s/len(numlist)
ls = eval(input(""))
print("average",mean(ls))



计算消费总额

dictMenu = {'卡布奇洛':32,'摩卡':30,'抹茶蛋糕':28,'布朗尼':26}
sum=0 
for i in dictMenu.values():
    sum +=  i
print(sum)


字典 I
d={123:"123",456:"456",789:"789"}
print(list(d.keys()))



字典最大值
fruits = {"apple":10,"mango":12,"durian":20,"banana":5}
m = 'apple'
for key in fruits.keys():
#此段代码请完善
    if fruits[m]

输出一串字符对应的Unicode值

s = input("")
ls = []
for c in s:
    ls.append(str(ord(c)))
print(','.join(ls))


列表基本操作：元素增加、删除

listA = ['水煮干丝','平桥豆腐','白灼虾','香菇青菜','西红柿鸡蛋汤']
listA.append("红烧肉")
listA.remove("水煮干丝")
print(listA)


列表增加元素
import random
ls=[]
random.seed(10)
for i in range(10):
    a=random.randint(0,100)
    ls.append(a)
print(ls)

































