---
layout: post
cover: /images/article/DeepLearning.jpg
---

# 线性回归的实现

* 在了解线性回归的关键思想之后，我们可以开始通过代码来动手实现线性回归了。
* 在这一节中，(**我们将从零开始实现整个方法，
* 包括数据流水线、模型、损失函数和小批量随机梯度下降优化器**)。
* 虽然现代的深度学习框架几乎可以自动化地进行所有这些工作，但从零开始实现可以确保你真正知道自己在做什么。
* 同时，了解更细致的工作原理将方便我们自定义模型、自定义层或自定义损失函数。
* 在这一节中，我们将只使用张量和自动求导。
* 在之后的章节中，我们会充分利用深度学习框架的优势，介绍更简洁的实现方式。


## Matplotlib绘图库复习

* Matplotlib 是 Python 的绘图库。 
* 它可与 NumPy 一起使用，
* 是一种替代MatLab的开源方案


```python
import torch
import numpy as np 
from matplotlib import pyplot as plt 
 
x = np.arange(1,5) 
y =  2  * x +  5

# plt.title("Matplotlib demo") 
# plt.xlabel("x axis caption") 
# plt.ylabel("y axis caption") 

plt.plot(x,y-1,"o"+"b")
plt.plot(x,y,"."+"b")
plt.plot(x,y+1,"--"+"b")
plt.plot(x,y+2,"-."+"b")
plt.scatter(x,y+3)

plt.show()

plt.plot(torch.normal(0,1,(1000,1)),"."+"b")
plt.show()



fig=plt.figure(num=1,figsize=(40,10))

axes1=fig.add_subplot(1,4,1)
axes1.plot([1,2,3,4],[1,2,3,4])

axes2=fig.add_subplot(1,4,2)
axes2.plot([1,2,3,4],[2,2,3,4])

axes3=fig.add_subplot(1,4,3)
axes3.plot([1,2,3,4],[1,2,2,4])

plt.show()
```


    
![png](/李沫《动手学深度学习》学习笔记/3.线性神经网络/3.2线性回归实现/output_2_0.png)
    



    
![png](/李沫《动手学深度学习》学习笔记/3.线性神经网络/3.2线性回归实现/output_2_1.png)
    



    
![png](/李沫《动手学深度学习》学习笔记/3.线性神经网络/3.2线性回归实现/output_2_2.png)
    


### pytorch索引复习


```python
print(torch.arange(0,100).reshape((10,10)))
print(torch.arange(0,100).reshape((10,10))[:,(5,1)]) #从所有行中选出第五列和第一列
print(torch.arange(0,100).reshape((10,10))[1:5,(5,1)]) #从第五行到第一行中选出第五列和第一列
```

    tensor([[ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9],
            [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
            [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
            [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
            [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
            [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
            [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
            [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
            [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]])
    tensor([[ 5,  1],
            [15, 11],
            [25, 21],
            [35, 31],
            [45, 41],
            [55, 51],
            [65, 61],
            [75, 71],
            [85, 81],
            [95, 91]])
    tensor([[15, 11],
            [25, 21],
            [35, 31],
            [45, 41]])
    

# 生成人工数据集


```python
import torch
def stand_data(w,b,x_lists_count):
    # X=torch.normal(0,1,(x_lists_count,len(w)))
    X=torch.rand((x_lists_count,len(w))) * torch.normal(10,1,(1,1))
    Y=torch.matmul(X,w)+b
    noise=torch.normal(0,0.5,Y.shape)
    Y += noise
    Y.reshape((-1,1))
    # Y = WX + b + noise
    return X,Y

real_w = torch.tensor([1.5])
real_b = 1.2

samples , labels = stand_data(real_w,real_b,50)

plt.plot(samples,labels,"o"+"b")
plt.show()



```


    
![png](/李沫《动手学深度学习》学习笔记/3.线性神经网络/3.2线性回归实现/output_6_0.png)
    



```python
import torch
def stand_data(w,b,x_lists_count):
    X=torch.normal(0,1,(x_lists_count,len(w)))
    # X=torch.rand((x_lists_count,len(w))) * torch.normal(10,1,(1,1))
    Y=torch.matmul(X,w)+b
    noise=torch.normal(0,0.5,Y.shape)
    Y += noise
    Y.reshape((-1,1))
    # Y = WX + b + noise
    return X,Y

real_w = torch.tensor([4.0,-2.0,0.0])
real_b = 4.2

samples , labels = stand_data(real_w,real_b,500)
# detach()获取一个隔离于计算图的张量

plt.scatter(samples[:,(2)].detach(),labels.detach()) 
plt.plot(samples[:,(1)].detach(),labels.detach(),"o"+"g") 
plt.plot(samples[:,(0)].detach(),labels.detach(),"o"+"r") #[:,(0)] 表示ｘ轴是Ｘ中所有行的第0列 也就是此处权重最大的Ｘ的特征
# 可以看出y与特征x_0的线性关系
# 可以看出y与特征x_1的线性关系
# 可以看出y与特征x_2的线性关系

plt.show()
```


    
![png](/李沫《动手学深度学习》学习笔记/3.线性神经网络/3.2线性回归实现/output_7_0.png)
    


## python 迭代器和生成器复习
### 迭代器
* 迭代器是一个可以记住遍历的位置的对象。
* 迭代器对象从集合的第一个元素开始访问，直到所有的元素被访问完结束。
* 迭代器只能往前不会后退。
* 迭代器有两个基本的方法：
    + iter() 创建迭代器
    + next() 获取下一个元素或对象
* 可用于创建迭代器的有：
    + 字符串，
    + 列表
    + 元组对象


```python
# 迭代器
listA = [1,2,3,4]
listA = "哈哈哈"
a=iter(listA) # a是一个迭代器

while True:
    try:
        print(next(a))
    except StopIteration: #捕捉异常
        print("到头了")
        break
```

    哈
    哈
    哈
    到头了
    

## 生成器
* 使用了 yield 的函数被称为生成器（generator）。
* 生成器的返回值是一个迭代器，
* 在调用生成器运行的过程中，每次遇到 yield 时函数会暂停并保存当前所有的运行信息，返回 yield 的值, 并在下一次执行 next() 方法时从当前位置继续运行。
* 调用一个生成器函数，返回的是一个迭代器对象。
* 以下实例使用 yield 实现斐波那契数列：


```python
def generator(): #使用了yield关键字的函数就是一个生成器，其返回值是一个迭代器
    times=0
    while True:
        if (times > 5): 
            return
        yield times
        times += 1
    
f = generator() # f 是一个迭代器，由生成器返回生成 使用next(f)就能获取到生成器生成的值

while True:
    try:
        print (next(f))
    except StopIteration:
        break
```

    0
    1
    2
    3
    4
    5
    

# 随机抽取数据


```python
# torch.tensor特性测试
print(torch.arange(0,1000).reshape((10,10,10))[0]  )
print(torch.arange(0,1000).reshape((10,10,10))[0].shape )
print(torch.arange(0,1000).reshape((10,10,10))[0].shape[1] )
```

    tensor([[ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9],
            [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
            [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
            [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
            [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
            [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
            [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
            [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
            [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]])
    torch.Size([10, 10])
    10
    


```python
# 获取随机数测试
import numpy
randomIndex=numpy.random.randint(0,100)
print(randomIndex)
randomIndex=numpy.random.randint(0,100,10)
print(randomIndex)
randomIndex=numpy.random.randint(0,100,(5,5))
print(randomIndex)
```

    41
    [75 97 79 21 96 87 72  1 18 60]
    [[49 35 27 43  8]
     [48 89 28 25 35]
     [61 30 47 55 15]
     [ 4 64 91 75 66]
     [17 39 56 33 22]]
    

## 定义随机批量抽取样本和标签的函数


```python
import numpy
def data_iter(onceGetSampleNum,sampleX,lableY):#这是一个生成器
    sampleMaxIndex=sampleX.shape[0] #获取张量最高维的元素个数
    rangeStart,rangeEnd = 0,sampleMaxIndex-onceGetSampleNum #计算随机数范围
    while True:
        randomIndex=numpy.random.randint(rangeStart,rangeEnd)
        yield sampleX[randomIndex:randomIndex+onceGetSampleNum],lableY[randomIndex:randomIndex+onceGetSampleNum]

# import random
# def data_iter(batch_size, features, labels):
#     num_examples = len(features)
#     indices = list(range(num_examples))
#     # 这些样本是随机读取的，没有特定的顺序
#     random.shuffle(indices)
#     for i in range(0, num_examples, batch_size):
#         xxx=torch.tensor(  indices[i:min(i+min(i+batch_size,num_examples))]  )
#         yield features[xxx], labels[xxx]
```

    The history saving thread hit an unexpected error (OperationalError('database or disk is full')).History will not be written to the database.
    

## 使用


```python
import torch
def stand_data(w,b,x_lists_count):
    X=torch.normal(0,1,(x_lists_count,w.shape[0]))
    Y=torch.matmul(X,w)+b
    noise=torch.normal(0,0.5,Y.shape)
    Y += noise
    Y.reshape((-1,1))
    # Y = WX + b + noise
    return X,Y

real_w = torch.tensor([4.0,-4.0,0.0]).reshape(3,1)
# real_w = torch.tensor([1.234567]).reshape(1,1)
real_b = 4.2

samplesX , labelsY = stand_data(real_w,real_b,500) #生成人工数据

patch_data = data_iter(10,samplesX,labelsY) #生成器返回一个迭代器对象 该迭代器从样本和标签中随机抽取指定数量

for i in range(10):
    X,Y=next(patch_data)
    print("样本:",X)
    print("标签:",Y)

```

    样本: tensor([[-0.3974, -0.7059, -0.3041],
            [-2.2920,  0.7974, -0.1454],
            [ 1.4397, -1.6953,  0.3961],
            [-0.7685,  0.3427,  0.3206],
            [-0.0519, -0.4741,  0.8035],
            [ 1.7951, -0.7270,  0.0325],
            [-0.3635, -1.3012, -0.0127],
            [ 0.6430, -0.0201,  0.7150],
            [-0.7441,  1.6679,  0.2459],
            [-0.1533, -1.7026,  0.1408]])
    标签: tensor([[ 5.4936],
            [-8.2453],
            [17.0714],
            [-0.8144],
            [ 6.3562],
            [14.3694],
            [ 7.5676],
            [ 6.6626],
            [-4.6265],
            [10.7440]])
    样本: tensor([[ 1.6756e+00,  8.4108e-01, -2.6331e-01],
            [-4.5273e-01,  2.9957e-01, -2.1448e-01],
            [-7.4436e-03,  5.2232e-01, -8.8159e-01],
            [-1.7100e-03,  7.7191e-01, -2.0921e-01],
            [-3.8252e-01,  6.4100e-01, -4.9110e-01],
            [-7.4645e-01,  8.0151e-01,  7.6639e-01],
            [ 1.5477e-01, -1.5038e+00, -2.3561e+00],
            [-5.6344e-01,  1.7286e-01, -6.5517e-01],
            [ 8.3030e-01, -8.7677e-01, -4.9899e-01],
            [-1.0105e+00, -1.3996e+00,  3.9545e-01]])
    标签: tensor([[ 7.6065],
            [ 0.8546],
            [ 2.1624],
            [ 0.3534],
            [-0.5272],
            [-2.5424],
            [10.5999],
            [ 0.9362],
            [10.6821],
            [ 5.6504]])
    样本: tensor([[ 0.7817, -1.7789, -1.4927],
            [-0.1551,  1.5386,  0.4878],
            [-0.1544, -0.2564,  1.3895],
            [-1.0065,  0.3774,  2.2765],
            [-0.1219,  0.5564, -0.3869],
            [ 1.6773, -0.7440,  0.8643],
            [ 0.4153,  0.3182,  0.4077],
            [ 1.1461, -1.4678,  2.0371],
            [ 1.9609,  0.5245,  1.2577],
            [ 1.5027,  0.6582, -1.0514]])
    标签: tensor([[13.7450],
            [-1.8143],
            [ 4.9303],
            [-1.8711],
            [ 1.1854],
            [14.5160],
            [ 4.4409],
            [13.5763],
            [10.5809],
            [ 7.1977]])
    样本: tensor([[ 1.0078, -0.9133,  0.3534],
            [ 0.5371,  0.1202,  0.8319],
            [ 1.3067, -0.5458, -0.6129],
            [ 1.4463, -0.4677, -1.7201],
            [-0.1905,  0.9530,  0.8436],
            [-1.1940, -1.3148, -0.4334],
            [ 0.2477,  0.0053, -0.4823],
            [-0.9976,  0.3934,  0.9102],
            [ 0.1579,  0.0739, -0.8046],
            [ 1.7864, -1.6902,  1.1748]])
    标签: tensor([[12.6920],
            [ 5.6466],
            [12.1426],
            [11.7102],
            [-0.1912],
            [ 5.3679],
            [ 5.1267],
            [-1.8338],
            [ 5.5902],
            [18.3457]])
    样本: tensor([[ 1.8780, -0.1927, -0.5780],
            [ 1.9689, -1.9513,  0.8059],
            [-1.7111, -0.9405, -0.0981],
            [ 0.0625, -0.4307,  0.0512],
            [ 1.0078, -0.9133,  0.3534],
            [ 0.5371,  0.1202,  0.8319],
            [ 1.3067, -0.5458, -0.6129],
            [ 1.4463, -0.4677, -1.7201],
            [-0.1905,  0.9530,  0.8436],
            [-1.1940, -1.3148, -0.4334]])
    标签: tensor([[11.9860],
            [19.9741],
            [ 1.5019],
            [ 6.1219],
            [12.6920],
            [ 5.6466],
            [12.1426],
            [11.7102],
            [-0.1912],
            [ 5.3679]])
    样本: tensor([[-1.1171,  0.5036, -0.1444],
            [-0.8719, -1.0997, -0.3174],
            [ 1.3328, -1.3785,  0.2008],
            [ 0.3066, -0.2080, -1.1436],
            [-1.5585, -0.8544, -0.4786],
            [ 1.8053,  0.6651, -1.0655],
            [-0.2078, -0.0800,  1.8868],
            [ 1.0302,  0.1001, -0.0083],
            [ 1.7390,  0.2131, -0.0120],
            [ 0.9297, -0.0768,  0.8596]])
    标签: tensor([[-2.7226],
            [ 4.8960],
            [15.0269],
            [ 6.4598],
            [ 1.1055],
            [ 8.6942],
            [ 3.3183],
            [ 7.9326],
            [10.2604],
            [ 7.9395]])
    样本: tensor([[-0.4123,  1.1314,  0.8321],
            [ 0.9275,  0.8369,  1.0172],
            [ 0.6472, -2.1580, -0.2635],
            [ 0.7817, -1.7789, -1.4927],
            [-0.1551,  1.5386,  0.4878],
            [-0.1544, -0.2564,  1.3895],
            [-1.0065,  0.3774,  2.2765],
            [-0.1219,  0.5564, -0.3869],
            [ 1.6773, -0.7440,  0.8643],
            [ 0.4153,  0.3182,  0.4077]])
    标签: tensor([[-1.6568],
            [ 5.0247],
            [14.9812],
            [13.7450],
            [-1.8143],
            [ 4.9303],
            [-1.8711],
            [ 1.1854],
            [14.5160],
            [ 4.4409]])
    样本: tensor([[-1.6216, -1.5242, -0.8025],
            [ 0.4210, -0.6359,  0.2631],
            [-0.3182,  0.9926, -0.9260],
            [-0.3939,  0.0859, -0.6605],
            [-1.3934, -0.4252, -0.3861],
            [-1.0925, -0.9920, -1.9562],
            [ 1.4121, -1.1929,  1.7388],
            [ 0.9386, -1.4978,  0.7763],
            [-0.2362,  2.2644, -0.1112],
            [-0.8573,  0.5310, -1.4934]])
    标签: tensor([[ 3.9558],
            [ 8.1053],
            [-0.6693],
            [ 1.8654],
            [ 1.0843],
            [ 4.1501],
            [14.1656],
            [13.7938],
            [-5.6957],
            [-1.3459]])
    样本: tensor([[-2.3205,  0.8331,  0.0432],
            [-1.5295,  0.0111, -0.6750],
            [-0.2469, -0.8159,  1.8572],
            [ 1.7567,  0.5733,  1.9128],
            [-1.2556,  0.9296,  2.6371],
            [ 0.0325, -0.2705, -0.0894],
            [ 2.8570, -1.1761, -0.5183],
            [ 1.0897,  0.6914, -0.1955],
            [ 0.2553,  0.2369,  1.7451],
            [-0.5170,  0.6709,  0.2213]])
    标签: tensor([[-8.8168],
            [-1.5858],
            [ 6.7321],
            [ 8.0816],
            [-4.4214],
            [ 5.1169],
            [20.4922],
            [ 5.9086],
            [ 4.7478],
            [-0.7978]])
    样本: tensor([[ 0.6175,  0.0646,  1.0617],
            [ 0.3137, -1.0837,  0.0770],
            [-1.1973,  0.8101,  0.5930],
            [-2.3205,  0.8331,  0.0432],
            [-1.5295,  0.0111, -0.6750],
            [-0.2469, -0.8159,  1.8572],
            [ 1.7567,  0.5733,  1.9128],
            [-1.2556,  0.9296,  2.6371],
            [ 0.0325, -0.2705, -0.0894],
            [ 2.8570, -1.1761, -0.5183]])
    标签: tensor([[ 6.5277],
            [ 9.5567],
            [-4.4593],
            [-8.8168],
            [-1.5858],
            [ 6.7321],
            [ 8.0816],
            [-4.4214],
            [ 5.1169],
            [20.4922]])
    

## 定义模型并初始化参数


```python
def linerModel(W,X,b):
    Y=torch.matmul(X,W)+b
    return Y
def square_loss(lableY,Y):
    return 1/2*(lableY-Y)**2

def learning(params,learningSpeed,patch_size):
    with torch.no_grad():
        for param in params:
            param  -= learningSpeed * param.grad / patch_size
            param.grad.zero_()
            
```


```python
W=torch.normal(0,1,(3,1),requires_grad=True)
# W=torch.normal(0,1,(1,1),requires_grad=True)
b=torch.normal(0,1,(1,1),requires_grad=True)

Net=linerModel
Loss_Fun=square_loss
Learning_Fun=learning
learningSpeed=0.01
training_times=2000
patch_size=50

```

## 样本各个特征标准值与训练前的预测值对比


```python
plt.plot(samplesX[:,(0)].detach(),labelsY.detach(),"o"+"b")
plt.plot(samplesX[:,(0)].detach(),Net(W,samplesX,b).detach().numpy(),"o"+"r")
plt.show()

plt.plot(samplesX[:,(1)].detach(),labelsY.detach(),"o"+"b") 
plt.plot(samplesX[:,(1)].detach(),Net(W,samplesX,b).detach().numpy(),"o"+"r") 
plt.show()

plt.plot(samplesX[:,(2)].detach(),labelsY.detach(),"o"+"b") 
plt.plot(samplesX[:,(2)].detach(),Net(W,samplesX,b).detach().numpy(),"o"+"r") 
plt.show()
```


    
![png](/李沫《动手学深度学习》学习笔记/3.线性神经网络/3.2线性回归实现/output_23_0.png)
    



    
![png](/李沫《动手学深度学习》学习笔记/3.线性神经网络/3.2线性回归实现/output_23_1.png)
    



    
![png](/李沫《动手学深度学习》学习笔记/3.线性神经网络/3.2线性回归实现/output_23_2.png)
    



```python
patch_data = data_iter(patch_size,samplesX,labelsY)
for i in range(training_times):
# while 1:
    patch_samplesX,patch_labelsY = next(patch_data)

    Y = Net(W,patch_samplesX,b)
    loss=Loss_Fun(patch_labelsY,Y)#计算这一批数据的损失

    loss.sum().backward()#反向传播梯度
    Learning_Fun((W,b),learningSpeed,patch_size)#利用梯度计算新的权重和偏置

    print("loss:",loss.sum()/patch_size)

    # if loss.sum()/patch_size < 0.01:
    #     break

# print("W实际值：\n",real_w.detach().numpy())
# print("W训练值：\n",W.detach().numpy())

# print("b实际值：\n",real_b)
# print("b训练值：\n",b.detach().numpy())
```

    loss: tensor(22.5479, grad_fn=<DivBackward0>)
    loss: tensor(19.8708, grad_fn=<DivBackward0>)
    loss: tensor(22.1876, grad_fn=<DivBackward0>)
    loss: tensor(18.7092, grad_fn=<DivBackward0>)
    loss: tensor(23.5673, grad_fn=<DivBackward0>)
    loss: tensor(21.5965, grad_fn=<DivBackward0>)
    loss: tensor(19.0675, grad_fn=<DivBackward0>)
    loss: tensor(19.6969, grad_fn=<DivBackward0>)
    loss: tensor(17.4777, grad_fn=<DivBackward0>)
    loss: tensor(19.8592, grad_fn=<DivBackward0>)
    loss: tensor(16.7553, grad_fn=<DivBackward0>)
    loss: tensor(20.0704, grad_fn=<DivBackward0>)
    loss: tensor(18.2937, grad_fn=<DivBackward0>)
    loss: tensor(16.7664, grad_fn=<DivBackward0>)
    loss: tensor(15.3216, grad_fn=<DivBackward0>)
    loss: tensor(14.5867, grad_fn=<DivBackward0>)
    loss: tensor(14.3857, grad_fn=<DivBackward0>)
    loss: tensor(15.0245, grad_fn=<DivBackward0>)
    loss: tensor(13.6919, grad_fn=<DivBackward0>)
    loss: tensor(15.7479, grad_fn=<DivBackward0>)
    loss: tensor(12.7651, grad_fn=<DivBackward0>)
    loss: tensor(13.6745, grad_fn=<DivBackward0>)
    loss: tensor(14.2124, grad_fn=<DivBackward0>)
    loss: tensor(14.5055, grad_fn=<DivBackward0>)
    loss: tensor(10.9931, grad_fn=<DivBackward0>)
    loss: tensor(13.4386, grad_fn=<DivBackward0>)
    loss: tensor(11.9267, grad_fn=<DivBackward0>)
    loss: tensor(12.8781, grad_fn=<DivBackward0>)
    loss: tensor(11.6279, grad_fn=<DivBackward0>)
    loss: tensor(10.5745, grad_fn=<DivBackward0>)
    loss: tensor(12.6453, grad_fn=<DivBackward0>)
    loss: tensor(11.0547, grad_fn=<DivBackward0>)
    loss: tensor(10.1814, grad_fn=<DivBackward0>)
    loss: tensor(11.0708, grad_fn=<DivBackward0>)
    loss: tensor(9.3164, grad_fn=<DivBackward0>)
    loss: tensor(9.1062, grad_fn=<DivBackward0>)
    loss: tensor(10.9207, grad_fn=<DivBackward0>)
    loss: tensor(10.7870, grad_fn=<DivBackward0>)
    loss: tensor(9.7219, grad_fn=<DivBackward0>)
    loss: tensor(8.8552, grad_fn=<DivBackward0>)
    loss: tensor(9.3925, grad_fn=<DivBackward0>)
    loss: tensor(7.9328, grad_fn=<DivBackward0>)
    loss: tensor(7.6057, grad_fn=<DivBackward0>)
    loss: tensor(7.4725, grad_fn=<DivBackward0>)
    loss: tensor(9.6222, grad_fn=<DivBackward0>)
    loss: tensor(7.9866, grad_fn=<DivBackward0>)
    loss: tensor(8.5790, grad_fn=<DivBackward0>)
    loss: tensor(7.4430, grad_fn=<DivBackward0>)
    loss: tensor(7.5327, grad_fn=<DivBackward0>)
    loss: tensor(6.6962, grad_fn=<DivBackward0>)
    loss: tensor(6.1475, grad_fn=<DivBackward0>)
    loss: tensor(6.6773, grad_fn=<DivBackward0>)
    loss: tensor(6.9652, grad_fn=<DivBackward0>)
    loss: tensor(5.9185, grad_fn=<DivBackward0>)
    loss: tensor(6.7638, grad_fn=<DivBackward0>)
    loss: tensor(6.6788, grad_fn=<DivBackward0>)
    loss: tensor(6.6473, grad_fn=<DivBackward0>)
    loss: tensor(5.1179, grad_fn=<DivBackward0>)
    loss: tensor(6.8297, grad_fn=<DivBackward0>)
    loss: tensor(5.5894, grad_fn=<DivBackward0>)
    loss: tensor(5.8774, grad_fn=<DivBackward0>)
    loss: tensor(5.8867, grad_fn=<DivBackward0>)
    loss: tensor(5.0766, grad_fn=<DivBackward0>)
    loss: tensor(5.3042, grad_fn=<DivBackward0>)
    loss: tensor(5.3636, grad_fn=<DivBackward0>)
    loss: tensor(4.2583, grad_fn=<DivBackward0>)
    loss: tensor(4.6296, grad_fn=<DivBackward0>)
    loss: tensor(4.1796, grad_fn=<DivBackward0>)
    loss: tensor(4.9261, grad_fn=<DivBackward0>)
    loss: tensor(4.4691, grad_fn=<DivBackward0>)
    loss: tensor(4.6212, grad_fn=<DivBackward0>)
    loss: tensor(4.1060, grad_fn=<DivBackward0>)
    loss: tensor(4.5434, grad_fn=<DivBackward0>)
    loss: tensor(3.9224, grad_fn=<DivBackward0>)
    loss: tensor(3.9907, grad_fn=<DivBackward0>)
    loss: tensor(3.8838, grad_fn=<DivBackward0>)
    loss: tensor(2.8388, grad_fn=<DivBackward0>)
    loss: tensor(4.0310, grad_fn=<DivBackward0>)
    loss: tensor(3.5317, grad_fn=<DivBackward0>)
    loss: tensor(3.7861, grad_fn=<DivBackward0>)
    loss: tensor(3.6619, grad_fn=<DivBackward0>)
    loss: tensor(3.7175, grad_fn=<DivBackward0>)
    loss: tensor(2.9616, grad_fn=<DivBackward0>)
    loss: tensor(3.5443, grad_fn=<DivBackward0>)
    loss: tensor(2.8841, grad_fn=<DivBackward0>)
    loss: tensor(3.2678, grad_fn=<DivBackward0>)
    loss: tensor(3.0041, grad_fn=<DivBackward0>)
    loss: tensor(2.7721, grad_fn=<DivBackward0>)
    loss: tensor(3.1046, grad_fn=<DivBackward0>)
    loss: tensor(2.6320, grad_fn=<DivBackward0>)
    loss: tensor(2.8043, grad_fn=<DivBackward0>)
    loss: tensor(2.7620, grad_fn=<DivBackward0>)
    loss: tensor(2.9661, grad_fn=<DivBackward0>)
    loss: tensor(2.5969, grad_fn=<DivBackward0>)
    loss: tensor(2.6268, grad_fn=<DivBackward0>)
    loss: tensor(2.7470, grad_fn=<DivBackward0>)
    loss: tensor(2.4718, grad_fn=<DivBackward0>)
    loss: tensor(2.5511, grad_fn=<DivBackward0>)
    loss: tensor(2.5777, grad_fn=<DivBackward0>)
    loss: tensor(2.5179, grad_fn=<DivBackward0>)
    loss: tensor(2.4429, grad_fn=<DivBackward0>)
    loss: tensor(1.7850, grad_fn=<DivBackward0>)
    loss: tensor(2.3073, grad_fn=<DivBackward0>)
    loss: tensor(1.8850, grad_fn=<DivBackward0>)
    loss: tensor(2.2747, grad_fn=<DivBackward0>)
    loss: tensor(1.8747, grad_fn=<DivBackward0>)
    loss: tensor(2.0151, grad_fn=<DivBackward0>)
    loss: tensor(2.1874, grad_fn=<DivBackward0>)
    loss: tensor(1.7043, grad_fn=<DivBackward0>)
    loss: tensor(1.3886, grad_fn=<DivBackward0>)
    loss: tensor(1.9776, grad_fn=<DivBackward0>)
    loss: tensor(1.9035, grad_fn=<DivBackward0>)
    loss: tensor(1.9649, grad_fn=<DivBackward0>)
    loss: tensor(1.4626, grad_fn=<DivBackward0>)
    loss: tensor(1.7124, grad_fn=<DivBackward0>)
    loss: tensor(1.5841, grad_fn=<DivBackward0>)
    loss: tensor(1.4701, grad_fn=<DivBackward0>)
    loss: tensor(1.6360, grad_fn=<DivBackward0>)
    loss: tensor(1.6753, grad_fn=<DivBackward0>)
    loss: tensor(1.6269, grad_fn=<DivBackward0>)
    loss: tensor(1.5657, grad_fn=<DivBackward0>)
    loss: tensor(1.3355, grad_fn=<DivBackward0>)
    loss: tensor(1.4530, grad_fn=<DivBackward0>)
    loss: tensor(1.4600, grad_fn=<DivBackward0>)
    loss: tensor(1.3930, grad_fn=<DivBackward0>)
    loss: tensor(1.4584, grad_fn=<DivBackward0>)
    loss: tensor(1.1720, grad_fn=<DivBackward0>)
    loss: tensor(1.4510, grad_fn=<DivBackward0>)
    loss: tensor(1.3567, grad_fn=<DivBackward0>)
    loss: tensor(1.3872, grad_fn=<DivBackward0>)
    loss: tensor(1.2012, grad_fn=<DivBackward0>)
    loss: tensor(1.2440, grad_fn=<DivBackward0>)
    loss: tensor(1.2204, grad_fn=<DivBackward0>)
    loss: tensor(1.1002, grad_fn=<DivBackward0>)
    loss: tensor(1.0287, grad_fn=<DivBackward0>)
    loss: tensor(1.0884, grad_fn=<DivBackward0>)
    loss: tensor(1.0715, grad_fn=<DivBackward0>)
    loss: tensor(0.9271, grad_fn=<DivBackward0>)
    loss: tensor(1.0876, grad_fn=<DivBackward0>)
    loss: tensor(0.7073, grad_fn=<DivBackward0>)
    loss: tensor(1.0717, grad_fn=<DivBackward0>)
    loss: tensor(1.0983, grad_fn=<DivBackward0>)
    loss: tensor(0.9515, grad_fn=<DivBackward0>)
    loss: tensor(0.9111, grad_fn=<DivBackward0>)
    loss: tensor(0.8863, grad_fn=<DivBackward0>)
    loss: tensor(0.8915, grad_fn=<DivBackward0>)
    loss: tensor(0.7758, grad_fn=<DivBackward0>)
    loss: tensor(0.8584, grad_fn=<DivBackward0>)
    loss: tensor(0.8530, grad_fn=<DivBackward0>)
    loss: tensor(0.7768, grad_fn=<DivBackward0>)
    loss: tensor(0.8633, grad_fn=<DivBackward0>)
    loss: tensor(0.8857, grad_fn=<DivBackward0>)
    loss: tensor(0.7027, grad_fn=<DivBackward0>)
    loss: tensor(0.7868, grad_fn=<DivBackward0>)
    loss: tensor(0.8224, grad_fn=<DivBackward0>)
    loss: tensor(0.7858, grad_fn=<DivBackward0>)
    loss: tensor(0.4922, grad_fn=<DivBackward0>)
    loss: tensor(0.5558, grad_fn=<DivBackward0>)
    loss: tensor(0.7725, grad_fn=<DivBackward0>)
    loss: tensor(0.4716, grad_fn=<DivBackward0>)
    loss: tensor(0.5190, grad_fn=<DivBackward0>)
    loss: tensor(0.6511, grad_fn=<DivBackward0>)
    loss: tensor(0.6879, grad_fn=<DivBackward0>)
    loss: tensor(0.6107, grad_fn=<DivBackward0>)
    loss: tensor(0.6502, grad_fn=<DivBackward0>)
    loss: tensor(0.6378, grad_fn=<DivBackward0>)
    loss: tensor(0.6344, grad_fn=<DivBackward0>)
    loss: tensor(0.5327, grad_fn=<DivBackward0>)
    loss: tensor(0.5709, grad_fn=<DivBackward0>)
    loss: tensor(0.6387, grad_fn=<DivBackward0>)
    loss: tensor(0.4930, grad_fn=<DivBackward0>)
    loss: tensor(0.6536, grad_fn=<DivBackward0>)
    loss: tensor(0.5667, grad_fn=<DivBackward0>)
    loss: tensor(0.5308, grad_fn=<DivBackward0>)
    loss: tensor(0.5372, grad_fn=<DivBackward0>)
    loss: tensor(0.5599, grad_fn=<DivBackward0>)
    loss: tensor(0.4819, grad_fn=<DivBackward0>)
    loss: tensor(0.5969, grad_fn=<DivBackward0>)
    loss: tensor(0.5838, grad_fn=<DivBackward0>)
    loss: tensor(0.5147, grad_fn=<DivBackward0>)
    loss: tensor(0.3460, grad_fn=<DivBackward0>)
    loss: tensor(0.4448, grad_fn=<DivBackward0>)
    loss: tensor(0.3889, grad_fn=<DivBackward0>)
    loss: tensor(0.3902, grad_fn=<DivBackward0>)
    loss: tensor(0.4422, grad_fn=<DivBackward0>)
    loss: tensor(0.4322, grad_fn=<DivBackward0>)
    loss: tensor(0.3852, grad_fn=<DivBackward0>)
    loss: tensor(0.4205, grad_fn=<DivBackward0>)
    loss: tensor(0.3960, grad_fn=<DivBackward0>)
    loss: tensor(0.3577, grad_fn=<DivBackward0>)
    loss: tensor(0.4362, grad_fn=<DivBackward0>)
    loss: tensor(0.3881, grad_fn=<DivBackward0>)
    loss: tensor(0.3414, grad_fn=<DivBackward0>)
    loss: tensor(0.3727, grad_fn=<DivBackward0>)
    loss: tensor(0.4633, grad_fn=<DivBackward0>)
    loss: tensor(0.3419, grad_fn=<DivBackward0>)
    loss: tensor(0.3518, grad_fn=<DivBackward0>)
    loss: tensor(0.4030, grad_fn=<DivBackward0>)
    loss: tensor(0.3568, grad_fn=<DivBackward0>)
    loss: tensor(0.2423, grad_fn=<DivBackward0>)
    loss: tensor(0.3838, grad_fn=<DivBackward0>)
    loss: tensor(0.2684, grad_fn=<DivBackward0>)
    loss: tensor(0.2182, grad_fn=<DivBackward0>)
    loss: tensor(0.3160, grad_fn=<DivBackward0>)
    loss: tensor(0.2932, grad_fn=<DivBackward0>)
    loss: tensor(0.3566, grad_fn=<DivBackward0>)
    loss: tensor(0.2831, grad_fn=<DivBackward0>)
    loss: tensor(0.3084, grad_fn=<DivBackward0>)
    loss: tensor(0.3234, grad_fn=<DivBackward0>)
    loss: tensor(0.3865, grad_fn=<DivBackward0>)
    loss: tensor(0.3089, grad_fn=<DivBackward0>)
    loss: tensor(0.1777, grad_fn=<DivBackward0>)
    loss: tensor(0.2418, grad_fn=<DivBackward0>)
    loss: tensor(0.2364, grad_fn=<DivBackward0>)
    loss: tensor(0.3034, grad_fn=<DivBackward0>)
    loss: tensor(0.2964, grad_fn=<DivBackward0>)
    loss: tensor(0.2733, grad_fn=<DivBackward0>)
    loss: tensor(0.3011, grad_fn=<DivBackward0>)
    loss: tensor(0.2601, grad_fn=<DivBackward0>)
    loss: tensor(0.2188, grad_fn=<DivBackward0>)
    loss: tensor(0.2556, grad_fn=<DivBackward0>)
    loss: tensor(0.2942, grad_fn=<DivBackward0>)
    loss: tensor(0.2364, grad_fn=<DivBackward0>)
    loss: tensor(0.2941, grad_fn=<DivBackward0>)
    loss: tensor(0.2462, grad_fn=<DivBackward0>)
    loss: tensor(0.2788, grad_fn=<DivBackward0>)
    loss: tensor(0.2422, grad_fn=<DivBackward0>)
    loss: tensor(0.2166, grad_fn=<DivBackward0>)
    loss: tensor(0.2178, grad_fn=<DivBackward0>)
    loss: tensor(0.1811, grad_fn=<DivBackward0>)
    loss: tensor(0.2342, grad_fn=<DivBackward0>)
    loss: tensor(0.2509, grad_fn=<DivBackward0>)
    loss: tensor(0.2269, grad_fn=<DivBackward0>)
    loss: tensor(0.2528, grad_fn=<DivBackward0>)
    loss: tensor(0.1782, grad_fn=<DivBackward0>)
    loss: tensor(0.2079, grad_fn=<DivBackward0>)
    loss: tensor(0.2866, grad_fn=<DivBackward0>)
    loss: tensor(0.1941, grad_fn=<DivBackward0>)
    loss: tensor(0.1917, grad_fn=<DivBackward0>)
    loss: tensor(0.1767, grad_fn=<DivBackward0>)
    loss: tensor(0.1916, grad_fn=<DivBackward0>)
    loss: tensor(0.2160, grad_fn=<DivBackward0>)
    loss: tensor(0.2038, grad_fn=<DivBackward0>)
    loss: tensor(0.2215, grad_fn=<DivBackward0>)
    loss: tensor(0.2279, grad_fn=<DivBackward0>)
    loss: tensor(0.2067, grad_fn=<DivBackward0>)
    loss: tensor(0.1960, grad_fn=<DivBackward0>)
    loss: tensor(0.1623, grad_fn=<DivBackward0>)
    loss: tensor(0.1437, grad_fn=<DivBackward0>)
    loss: tensor(0.2070, grad_fn=<DivBackward0>)
    loss: tensor(0.1946, grad_fn=<DivBackward0>)
    loss: tensor(0.2036, grad_fn=<DivBackward0>)
    loss: tensor(0.1795, grad_fn=<DivBackward0>)
    loss: tensor(0.2400, grad_fn=<DivBackward0>)
    loss: tensor(0.1889, grad_fn=<DivBackward0>)
    loss: tensor(0.1431, grad_fn=<DivBackward0>)
    loss: tensor(0.1792, grad_fn=<DivBackward0>)
    loss: tensor(0.1483, grad_fn=<DivBackward0>)
    loss: tensor(0.2119, grad_fn=<DivBackward0>)
    loss: tensor(0.1379, grad_fn=<DivBackward0>)
    loss: tensor(0.1603, grad_fn=<DivBackward0>)
    loss: tensor(0.2065, grad_fn=<DivBackward0>)
    loss: tensor(0.1733, grad_fn=<DivBackward0>)
    loss: tensor(0.1583, grad_fn=<DivBackward0>)
    loss: tensor(0.1982, grad_fn=<DivBackward0>)
    loss: tensor(0.1763, grad_fn=<DivBackward0>)
    loss: tensor(0.1942, grad_fn=<DivBackward0>)
    loss: tensor(0.1534, grad_fn=<DivBackward0>)
    loss: tensor(0.1549, grad_fn=<DivBackward0>)
    loss: tensor(0.2074, grad_fn=<DivBackward0>)
    loss: tensor(0.1920, grad_fn=<DivBackward0>)
    loss: tensor(0.1915, grad_fn=<DivBackward0>)
    loss: tensor(0.1753, grad_fn=<DivBackward0>)
    loss: tensor(0.1871, grad_fn=<DivBackward0>)
    loss: tensor(0.2131, grad_fn=<DivBackward0>)
    loss: tensor(0.1414, grad_fn=<DivBackward0>)
    loss: tensor(0.1562, grad_fn=<DivBackward0>)
    loss: tensor(0.1247, grad_fn=<DivBackward0>)
    loss: tensor(0.1410, grad_fn=<DivBackward0>)
    loss: tensor(0.1804, grad_fn=<DivBackward0>)
    loss: tensor(0.1526, grad_fn=<DivBackward0>)
    loss: tensor(0.1790, grad_fn=<DivBackward0>)
    loss: tensor(0.1411, grad_fn=<DivBackward0>)
    loss: tensor(0.1460, grad_fn=<DivBackward0>)
    loss: tensor(0.1523, grad_fn=<DivBackward0>)
    loss: tensor(0.1834, grad_fn=<DivBackward0>)
    loss: tensor(0.2042, grad_fn=<DivBackward0>)
    loss: tensor(0.1581, grad_fn=<DivBackward0>)
    loss: tensor(0.1320, grad_fn=<DivBackward0>)
    loss: tensor(0.1720, grad_fn=<DivBackward0>)
    loss: tensor(0.1432, grad_fn=<DivBackward0>)
    loss: tensor(0.1345, grad_fn=<DivBackward0>)
    loss: tensor(0.1352, grad_fn=<DivBackward0>)
    loss: tensor(0.1161, grad_fn=<DivBackward0>)
    loss: tensor(0.1715, grad_fn=<DivBackward0>)
    loss: tensor(0.1613, grad_fn=<DivBackward0>)
    loss: tensor(0.1608, grad_fn=<DivBackward0>)
    loss: tensor(0.1525, grad_fn=<DivBackward0>)
    loss: tensor(0.1103, grad_fn=<DivBackward0>)
    loss: tensor(0.1537, grad_fn=<DivBackward0>)
    loss: tensor(0.1528, grad_fn=<DivBackward0>)
    loss: tensor(0.1611, grad_fn=<DivBackward0>)
    loss: tensor(0.1771, grad_fn=<DivBackward0>)
    loss: tensor(0.1672, grad_fn=<DivBackward0>)
    loss: tensor(0.1635, grad_fn=<DivBackward0>)
    loss: tensor(0.1166, grad_fn=<DivBackward0>)
    loss: tensor(0.1475, grad_fn=<DivBackward0>)
    loss: tensor(0.1472, grad_fn=<DivBackward0>)
    loss: tensor(0.1790, grad_fn=<DivBackward0>)
    loss: tensor(0.1585, grad_fn=<DivBackward0>)
    loss: tensor(0.1477, grad_fn=<DivBackward0>)
    loss: tensor(0.1285, grad_fn=<DivBackward0>)
    loss: tensor(0.1037, grad_fn=<DivBackward0>)
    loss: tensor(0.1383, grad_fn=<DivBackward0>)
    loss: tensor(0.1867, grad_fn=<DivBackward0>)
    loss: tensor(0.1533, grad_fn=<DivBackward0>)
    loss: tensor(0.1782, grad_fn=<DivBackward0>)
    loss: tensor(0.1453, grad_fn=<DivBackward0>)
    loss: tensor(0.1325, grad_fn=<DivBackward0>)
    loss: tensor(0.1266, grad_fn=<DivBackward0>)
    loss: tensor(0.1833, grad_fn=<DivBackward0>)
    loss: tensor(0.1554, grad_fn=<DivBackward0>)
    loss: tensor(0.1163, grad_fn=<DivBackward0>)
    loss: tensor(0.1691, grad_fn=<DivBackward0>)
    loss: tensor(0.1518, grad_fn=<DivBackward0>)
    loss: tensor(0.1131, grad_fn=<DivBackward0>)
    loss: tensor(0.1041, grad_fn=<DivBackward0>)
    loss: tensor(0.1394, grad_fn=<DivBackward0>)
    loss: tensor(0.0972, grad_fn=<DivBackward0>)
    loss: tensor(0.1073, grad_fn=<DivBackward0>)
    loss: tensor(0.1182, grad_fn=<DivBackward0>)
    loss: tensor(0.1411, grad_fn=<DivBackward0>)
    loss: tensor(0.1317, grad_fn=<DivBackward0>)
    loss: tensor(0.1397, grad_fn=<DivBackward0>)
    loss: tensor(0.1667, grad_fn=<DivBackward0>)
    loss: tensor(0.1394, grad_fn=<DivBackward0>)
    loss: tensor(0.1128, grad_fn=<DivBackward0>)
    loss: tensor(0.1046, grad_fn=<DivBackward0>)
    loss: tensor(0.1574, grad_fn=<DivBackward0>)
    loss: tensor(0.1038, grad_fn=<DivBackward0>)
    loss: tensor(0.1262, grad_fn=<DivBackward0>)
    loss: tensor(0.1024, grad_fn=<DivBackward0>)
    loss: tensor(0.1221, grad_fn=<DivBackward0>)
    loss: tensor(0.1336, grad_fn=<DivBackward0>)
    loss: tensor(0.1314, grad_fn=<DivBackward0>)
    loss: tensor(0.1361, grad_fn=<DivBackward0>)
    loss: tensor(0.1388, grad_fn=<DivBackward0>)
    loss: tensor(0.1502, grad_fn=<DivBackward0>)
    loss: tensor(0.1085, grad_fn=<DivBackward0>)
    loss: tensor(0.1330, grad_fn=<DivBackward0>)
    loss: tensor(0.1470, grad_fn=<DivBackward0>)
    loss: tensor(0.1502, grad_fn=<DivBackward0>)
    loss: tensor(0.1592, grad_fn=<DivBackward0>)
    loss: tensor(0.1068, grad_fn=<DivBackward0>)
    loss: tensor(0.1343, grad_fn=<DivBackward0>)
    loss: tensor(0.1211, grad_fn=<DivBackward0>)
    loss: tensor(0.1391, grad_fn=<DivBackward0>)
    loss: tensor(0.1066, grad_fn=<DivBackward0>)
    loss: tensor(0.1263, grad_fn=<DivBackward0>)
    loss: tensor(0.1617, grad_fn=<DivBackward0>)
    loss: tensor(0.1076, grad_fn=<DivBackward0>)
    loss: tensor(0.1433, grad_fn=<DivBackward0>)
    loss: tensor(0.0992, grad_fn=<DivBackward0>)
    loss: tensor(0.1273, grad_fn=<DivBackward0>)
    loss: tensor(0.1107, grad_fn=<DivBackward0>)
    loss: tensor(0.1214, grad_fn=<DivBackward0>)
    loss: tensor(0.1231, grad_fn=<DivBackward0>)
    loss: tensor(0.1473, grad_fn=<DivBackward0>)
    loss: tensor(0.1231, grad_fn=<DivBackward0>)
    loss: tensor(0.1324, grad_fn=<DivBackward0>)
    loss: tensor(0.1547, grad_fn=<DivBackward0>)
    loss: tensor(0.1053, grad_fn=<DivBackward0>)
    loss: tensor(0.1722, grad_fn=<DivBackward0>)
    loss: tensor(0.1395, grad_fn=<DivBackward0>)
    loss: tensor(0.1355, grad_fn=<DivBackward0>)
    loss: tensor(0.1326, grad_fn=<DivBackward0>)
    loss: tensor(0.1277, grad_fn=<DivBackward0>)
    loss: tensor(0.1383, grad_fn=<DivBackward0>)
    loss: tensor(0.1085, grad_fn=<DivBackward0>)
    loss: tensor(0.1325, grad_fn=<DivBackward0>)
    loss: tensor(0.1242, grad_fn=<DivBackward0>)
    loss: tensor(0.1145, grad_fn=<DivBackward0>)
    loss: tensor(0.1317, grad_fn=<DivBackward0>)
    loss: tensor(0.1099, grad_fn=<DivBackward0>)
    loss: tensor(0.1012, grad_fn=<DivBackward0>)
    loss: tensor(0.1454, grad_fn=<DivBackward0>)
    loss: tensor(0.1234, grad_fn=<DivBackward0>)
    loss: tensor(0.1742, grad_fn=<DivBackward0>)
    loss: tensor(0.0957, grad_fn=<DivBackward0>)
    loss: tensor(0.1316, grad_fn=<DivBackward0>)
    loss: tensor(0.1083, grad_fn=<DivBackward0>)
    loss: tensor(0.1594, grad_fn=<DivBackward0>)
    loss: tensor(0.1503, grad_fn=<DivBackward0>)
    loss: tensor(0.1452, grad_fn=<DivBackward0>)
    loss: tensor(0.1022, grad_fn=<DivBackward0>)
    loss: tensor(0.1001, grad_fn=<DivBackward0>)
    loss: tensor(0.1472, grad_fn=<DivBackward0>)
    loss: tensor(0.1427, grad_fn=<DivBackward0>)
    loss: tensor(0.1092, grad_fn=<DivBackward0>)
    loss: tensor(0.1358, grad_fn=<DivBackward0>)
    loss: tensor(0.1442, grad_fn=<DivBackward0>)
    loss: tensor(0.1030, grad_fn=<DivBackward0>)
    loss: tensor(0.1530, grad_fn=<DivBackward0>)
    loss: tensor(0.1202, grad_fn=<DivBackward0>)
    loss: tensor(0.1057, grad_fn=<DivBackward0>)
    loss: tensor(0.1303, grad_fn=<DivBackward0>)
    loss: tensor(0.1318, grad_fn=<DivBackward0>)
    loss: tensor(0.1300, grad_fn=<DivBackward0>)
    loss: tensor(0.1381, grad_fn=<DivBackward0>)
    loss: tensor(0.1176, grad_fn=<DivBackward0>)
    loss: tensor(0.1065, grad_fn=<DivBackward0>)
    loss: tensor(0.1722, grad_fn=<DivBackward0>)
    loss: tensor(0.1174, grad_fn=<DivBackward0>)
    loss: tensor(0.1271, grad_fn=<DivBackward0>)
    loss: tensor(0.1083, grad_fn=<DivBackward0>)
    loss: tensor(0.1009, grad_fn=<DivBackward0>)
    loss: tensor(0.1721, grad_fn=<DivBackward0>)
    loss: tensor(0.1299, grad_fn=<DivBackward0>)
    loss: tensor(0.1181, grad_fn=<DivBackward0>)
    loss: tensor(0.1310, grad_fn=<DivBackward0>)
    loss: tensor(0.1527, grad_fn=<DivBackward0>)
    loss: tensor(0.1155, grad_fn=<DivBackward0>)
    loss: tensor(0.1472, grad_fn=<DivBackward0>)
    loss: tensor(0.1458, grad_fn=<DivBackward0>)
    loss: tensor(0.1292, grad_fn=<DivBackward0>)
    loss: tensor(0.1458, grad_fn=<DivBackward0>)
    loss: tensor(0.0939, grad_fn=<DivBackward0>)
    loss: tensor(0.1373, grad_fn=<DivBackward0>)
    loss: tensor(0.1220, grad_fn=<DivBackward0>)
    loss: tensor(0.0907, grad_fn=<DivBackward0>)
    loss: tensor(0.1217, grad_fn=<DivBackward0>)
    loss: tensor(0.1705, grad_fn=<DivBackward0>)
    loss: tensor(0.1314, grad_fn=<DivBackward0>)
    loss: tensor(0.1281, grad_fn=<DivBackward0>)
    loss: tensor(0.1305, grad_fn=<DivBackward0>)
    loss: tensor(0.1037, grad_fn=<DivBackward0>)
    loss: tensor(0.1486, grad_fn=<DivBackward0>)
    loss: tensor(0.0925, grad_fn=<DivBackward0>)
    loss: tensor(0.1130, grad_fn=<DivBackward0>)
    loss: tensor(0.1623, grad_fn=<DivBackward0>)
    loss: tensor(0.1205, grad_fn=<DivBackward0>)
    loss: tensor(0.1574, grad_fn=<DivBackward0>)
    loss: tensor(0.1288, grad_fn=<DivBackward0>)
    loss: tensor(0.1289, grad_fn=<DivBackward0>)
    loss: tensor(0.1333, grad_fn=<DivBackward0>)
    loss: tensor(0.0918, grad_fn=<DivBackward0>)
    loss: tensor(0.1275, grad_fn=<DivBackward0>)
    loss: tensor(0.1463, grad_fn=<DivBackward0>)
    loss: tensor(0.1430, grad_fn=<DivBackward0>)
    loss: tensor(0.0884, grad_fn=<DivBackward0>)
    loss: tensor(0.1415, grad_fn=<DivBackward0>)
    loss: tensor(0.1072, grad_fn=<DivBackward0>)
    loss: tensor(0.1246, grad_fn=<DivBackward0>)
    loss: tensor(0.1431, grad_fn=<DivBackward0>)
    loss: tensor(0.1210, grad_fn=<DivBackward0>)
    loss: tensor(0.1158, grad_fn=<DivBackward0>)
    loss: tensor(0.1441, grad_fn=<DivBackward0>)
    loss: tensor(0.1563, grad_fn=<DivBackward0>)
    loss: tensor(0.1431, grad_fn=<DivBackward0>)
    loss: tensor(0.1156, grad_fn=<DivBackward0>)
    loss: tensor(0.1339, grad_fn=<DivBackward0>)
    loss: tensor(0.1239, grad_fn=<DivBackward0>)
    loss: tensor(0.1475, grad_fn=<DivBackward0>)
    loss: tensor(0.1712, grad_fn=<DivBackward0>)
    loss: tensor(0.1201, grad_fn=<DivBackward0>)
    loss: tensor(0.0832, grad_fn=<DivBackward0>)
    loss: tensor(0.1183, grad_fn=<DivBackward0>)
    loss: tensor(0.1359, grad_fn=<DivBackward0>)
    loss: tensor(0.1287, grad_fn=<DivBackward0>)
    loss: tensor(0.1447, grad_fn=<DivBackward0>)
    loss: tensor(0.0911, grad_fn=<DivBackward0>)
    loss: tensor(0.1236, grad_fn=<DivBackward0>)
    loss: tensor(0.1625, grad_fn=<DivBackward0>)
    loss: tensor(0.1456, grad_fn=<DivBackward0>)
    loss: tensor(0.0831, grad_fn=<DivBackward0>)
    loss: tensor(0.1084, grad_fn=<DivBackward0>)
    loss: tensor(0.1695, grad_fn=<DivBackward0>)
    loss: tensor(0.1117, grad_fn=<DivBackward0>)
    loss: tensor(0.1030, grad_fn=<DivBackward0>)
    loss: tensor(0.1331, grad_fn=<DivBackward0>)
    loss: tensor(0.1636, grad_fn=<DivBackward0>)
    loss: tensor(0.1411, grad_fn=<DivBackward0>)
    loss: tensor(0.1421, grad_fn=<DivBackward0>)
    loss: tensor(0.1168, grad_fn=<DivBackward0>)
    loss: tensor(0.1684, grad_fn=<DivBackward0>)
    loss: tensor(0.1226, grad_fn=<DivBackward0>)
    loss: tensor(0.1806, grad_fn=<DivBackward0>)
    loss: tensor(0.1089, grad_fn=<DivBackward0>)
    loss: tensor(0.1155, grad_fn=<DivBackward0>)
    loss: tensor(0.0926, grad_fn=<DivBackward0>)
    loss: tensor(0.1252, grad_fn=<DivBackward0>)
    loss: tensor(0.1019, grad_fn=<DivBackward0>)
    loss: tensor(0.1223, grad_fn=<DivBackward0>)
    loss: tensor(0.1117, grad_fn=<DivBackward0>)
    loss: tensor(0.1712, grad_fn=<DivBackward0>)
    loss: tensor(0.1379, grad_fn=<DivBackward0>)
    loss: tensor(0.1681, grad_fn=<DivBackward0>)
    loss: tensor(0.1296, grad_fn=<DivBackward0>)
    loss: tensor(0.1324, grad_fn=<DivBackward0>)
    loss: tensor(0.1131, grad_fn=<DivBackward0>)
    loss: tensor(0.1547, grad_fn=<DivBackward0>)
    loss: tensor(0.1127, grad_fn=<DivBackward0>)
    loss: tensor(0.1154, grad_fn=<DivBackward0>)
    loss: tensor(0.1100, grad_fn=<DivBackward0>)
    loss: tensor(0.1161, grad_fn=<DivBackward0>)
    loss: tensor(0.1416, grad_fn=<DivBackward0>)
    loss: tensor(0.0880, grad_fn=<DivBackward0>)
    loss: tensor(0.1274, grad_fn=<DivBackward0>)
    loss: tensor(0.1481, grad_fn=<DivBackward0>)
    loss: tensor(0.1094, grad_fn=<DivBackward0>)
    loss: tensor(0.1307, grad_fn=<DivBackward0>)
    loss: tensor(0.1679, grad_fn=<DivBackward0>)
    loss: tensor(0.1328, grad_fn=<DivBackward0>)
    loss: tensor(0.0702, grad_fn=<DivBackward0>)
    loss: tensor(0.1448, grad_fn=<DivBackward0>)
    loss: tensor(0.0948, grad_fn=<DivBackward0>)
    loss: tensor(0.1547, grad_fn=<DivBackward0>)
    loss: tensor(0.1400, grad_fn=<DivBackward0>)
    loss: tensor(0.1148, grad_fn=<DivBackward0>)
    loss: tensor(0.1307, grad_fn=<DivBackward0>)
    loss: tensor(0.1014, grad_fn=<DivBackward0>)
    loss: tensor(0.1235, grad_fn=<DivBackward0>)
    loss: tensor(0.1033, grad_fn=<DivBackward0>)
    loss: tensor(0.1174, grad_fn=<DivBackward0>)
    loss: tensor(0.1083, grad_fn=<DivBackward0>)
    loss: tensor(0.1488, grad_fn=<DivBackward0>)
    loss: tensor(0.1230, grad_fn=<DivBackward0>)
    loss: tensor(0.1278, grad_fn=<DivBackward0>)
    loss: tensor(0.1654, grad_fn=<DivBackward0>)
    loss: tensor(0.1305, grad_fn=<DivBackward0>)
    loss: tensor(0.1289, grad_fn=<DivBackward0>)
    loss: tensor(0.1579, grad_fn=<DivBackward0>)
    loss: tensor(0.1367, grad_fn=<DivBackward0>)
    loss: tensor(0.0846, grad_fn=<DivBackward0>)
    loss: tensor(0.1315, grad_fn=<DivBackward0>)
    loss: tensor(0.1172, grad_fn=<DivBackward0>)
    loss: tensor(0.1234, grad_fn=<DivBackward0>)
    loss: tensor(0.1295, grad_fn=<DivBackward0>)
    loss: tensor(0.0953, grad_fn=<DivBackward0>)
    loss: tensor(0.1194, grad_fn=<DivBackward0>)
    loss: tensor(0.1192, grad_fn=<DivBackward0>)
    loss: tensor(0.1306, grad_fn=<DivBackward0>)
    loss: tensor(0.1258, grad_fn=<DivBackward0>)
    loss: tensor(0.0873, grad_fn=<DivBackward0>)
    loss: tensor(0.1232, grad_fn=<DivBackward0>)
    loss: tensor(0.0985, grad_fn=<DivBackward0>)
    loss: tensor(0.1542, grad_fn=<DivBackward0>)
    loss: tensor(0.1245, grad_fn=<DivBackward0>)
    loss: tensor(0.1244, grad_fn=<DivBackward0>)
    loss: tensor(0.1260, grad_fn=<DivBackward0>)
    loss: tensor(0.1165, grad_fn=<DivBackward0>)
    loss: tensor(0.1143, grad_fn=<DivBackward0>)
    loss: tensor(0.1406, grad_fn=<DivBackward0>)
    loss: tensor(0.1452, grad_fn=<DivBackward0>)
    loss: tensor(0.1649, grad_fn=<DivBackward0>)
    loss: tensor(0.1144, grad_fn=<DivBackward0>)
    loss: tensor(0.1129, grad_fn=<DivBackward0>)
    loss: tensor(0.0719, grad_fn=<DivBackward0>)
    loss: tensor(0.1585, grad_fn=<DivBackward0>)
    loss: tensor(0.1069, grad_fn=<DivBackward0>)
    loss: tensor(0.1074, grad_fn=<DivBackward0>)
    loss: tensor(0.1163, grad_fn=<DivBackward0>)
    loss: tensor(0.1544, grad_fn=<DivBackward0>)
    loss: tensor(0.1673, grad_fn=<DivBackward0>)
    loss: tensor(0.0980, grad_fn=<DivBackward0>)
    loss: tensor(0.1241, grad_fn=<DivBackward0>)
    loss: tensor(0.1047, grad_fn=<DivBackward0>)
    loss: tensor(0.1473, grad_fn=<DivBackward0>)
    loss: tensor(0.1483, grad_fn=<DivBackward0>)
    loss: tensor(0.0860, grad_fn=<DivBackward0>)
    loss: tensor(0.1274, grad_fn=<DivBackward0>)
    loss: tensor(0.1012, grad_fn=<DivBackward0>)
    loss: tensor(0.1196, grad_fn=<DivBackward0>)
    loss: tensor(0.1191, grad_fn=<DivBackward0>)
    loss: tensor(0.1411, grad_fn=<DivBackward0>)
    loss: tensor(0.1273, grad_fn=<DivBackward0>)
    loss: tensor(0.0881, grad_fn=<DivBackward0>)
    loss: tensor(0.1295, grad_fn=<DivBackward0>)
    loss: tensor(0.1417, grad_fn=<DivBackward0>)
    loss: tensor(0.0996, grad_fn=<DivBackward0>)
    loss: tensor(0.1472, grad_fn=<DivBackward0>)
    loss: tensor(0.1575, grad_fn=<DivBackward0>)
    loss: tensor(0.0716, grad_fn=<DivBackward0>)
    loss: tensor(0.0718, grad_fn=<DivBackward0>)
    loss: tensor(0.1294, grad_fn=<DivBackward0>)
    loss: tensor(0.1433, grad_fn=<DivBackward0>)
    loss: tensor(0.1564, grad_fn=<DivBackward0>)
    loss: tensor(0.1444, grad_fn=<DivBackward0>)
    loss: tensor(0.0993, grad_fn=<DivBackward0>)
    loss: tensor(0.1487, grad_fn=<DivBackward0>)
    loss: tensor(0.1417, grad_fn=<DivBackward0>)
    loss: tensor(0.1308, grad_fn=<DivBackward0>)
    loss: tensor(0.1073, grad_fn=<DivBackward0>)
    loss: tensor(0.1015, grad_fn=<DivBackward0>)
    loss: tensor(0.1441, grad_fn=<DivBackward0>)
    loss: tensor(0.0853, grad_fn=<DivBackward0>)
    loss: tensor(0.1483, grad_fn=<DivBackward0>)
    loss: tensor(0.1110, grad_fn=<DivBackward0>)
    loss: tensor(0.1516, grad_fn=<DivBackward0>)
    loss: tensor(0.1365, grad_fn=<DivBackward0>)
    loss: tensor(0.0931, grad_fn=<DivBackward0>)
    loss: tensor(0.1644, grad_fn=<DivBackward0>)
    loss: tensor(0.1020, grad_fn=<DivBackward0>)
    loss: tensor(0.1534, grad_fn=<DivBackward0>)
    loss: tensor(0.0893, grad_fn=<DivBackward0>)
    loss: tensor(0.1252, grad_fn=<DivBackward0>)
    loss: tensor(0.0932, grad_fn=<DivBackward0>)
    loss: tensor(0.1063, grad_fn=<DivBackward0>)
    loss: tensor(0.0932, grad_fn=<DivBackward0>)
    loss: tensor(0.1293, grad_fn=<DivBackward0>)
    loss: tensor(0.1010, grad_fn=<DivBackward0>)
    loss: tensor(0.0971, grad_fn=<DivBackward0>)
    loss: tensor(0.1261, grad_fn=<DivBackward0>)
    loss: tensor(0.1228, grad_fn=<DivBackward0>)
    loss: tensor(0.1364, grad_fn=<DivBackward0>)
    loss: tensor(0.1200, grad_fn=<DivBackward0>)
    loss: tensor(0.1228, grad_fn=<DivBackward0>)
    loss: tensor(0.1200, grad_fn=<DivBackward0>)
    loss: tensor(0.1285, grad_fn=<DivBackward0>)
    loss: tensor(0.1164, grad_fn=<DivBackward0>)
    loss: tensor(0.1465, grad_fn=<DivBackward0>)
    loss: tensor(0.1011, grad_fn=<DivBackward0>)
    loss: tensor(0.0858, grad_fn=<DivBackward0>)
    loss: tensor(0.1300, grad_fn=<DivBackward0>)
    loss: tensor(0.1388, grad_fn=<DivBackward0>)
    loss: tensor(0.1007, grad_fn=<DivBackward0>)
    loss: tensor(0.1284, grad_fn=<DivBackward0>)
    loss: tensor(0.1004, grad_fn=<DivBackward0>)
    loss: tensor(0.1130, grad_fn=<DivBackward0>)
    loss: tensor(0.0854, grad_fn=<DivBackward0>)
    loss: tensor(0.1262, grad_fn=<DivBackward0>)
    loss: tensor(0.1194, grad_fn=<DivBackward0>)
    loss: tensor(0.1179, grad_fn=<DivBackward0>)
    loss: tensor(0.1552, grad_fn=<DivBackward0>)
    loss: tensor(0.1108, grad_fn=<DivBackward0>)
    loss: tensor(0.1160, grad_fn=<DivBackward0>)
    loss: tensor(0.0990, grad_fn=<DivBackward0>)
    loss: tensor(0.1285, grad_fn=<DivBackward0>)
    loss: tensor(0.1423, grad_fn=<DivBackward0>)
    loss: tensor(0.1590, grad_fn=<DivBackward0>)
    loss: tensor(0.1527, grad_fn=<DivBackward0>)
    loss: tensor(0.1196, grad_fn=<DivBackward0>)
    loss: tensor(0.1344, grad_fn=<DivBackward0>)
    loss: tensor(0.1524, grad_fn=<DivBackward0>)
    loss: tensor(0.1243, grad_fn=<DivBackward0>)
    loss: tensor(0.1674, grad_fn=<DivBackward0>)
    loss: tensor(0.1537, grad_fn=<DivBackward0>)
    loss: tensor(0.1275, grad_fn=<DivBackward0>)
    loss: tensor(0.1505, grad_fn=<DivBackward0>)
    loss: tensor(0.1428, grad_fn=<DivBackward0>)
    loss: tensor(0.1298, grad_fn=<DivBackward0>)
    loss: tensor(0.1022, grad_fn=<DivBackward0>)
    loss: tensor(0.1006, grad_fn=<DivBackward0>)
    loss: tensor(0.1158, grad_fn=<DivBackward0>)
    loss: tensor(0.1412, grad_fn=<DivBackward0>)
    loss: tensor(0.0918, grad_fn=<DivBackward0>)
    loss: tensor(0.1279, grad_fn=<DivBackward0>)
    loss: tensor(0.1160, grad_fn=<DivBackward0>)
    loss: tensor(0.1401, grad_fn=<DivBackward0>)
    loss: tensor(0.1663, grad_fn=<DivBackward0>)
    loss: tensor(0.1078, grad_fn=<DivBackward0>)
    loss: tensor(0.1572, grad_fn=<DivBackward0>)
    loss: tensor(0.0946, grad_fn=<DivBackward0>)
    loss: tensor(0.1202, grad_fn=<DivBackward0>)
    loss: tensor(0.1570, grad_fn=<DivBackward0>)
    loss: tensor(0.1567, grad_fn=<DivBackward0>)
    loss: tensor(0.1012, grad_fn=<DivBackward0>)
    loss: tensor(0.1681, grad_fn=<DivBackward0>)
    loss: tensor(0.1252, grad_fn=<DivBackward0>)
    loss: tensor(0.0887, grad_fn=<DivBackward0>)
    loss: tensor(0.1186, grad_fn=<DivBackward0>)
    loss: tensor(0.0988, grad_fn=<DivBackward0>)
    loss: tensor(0.0938, grad_fn=<DivBackward0>)
    loss: tensor(0.1220, grad_fn=<DivBackward0>)
    loss: tensor(0.1100, grad_fn=<DivBackward0>)
    loss: tensor(0.1284, grad_fn=<DivBackward0>)
    loss: tensor(0.1001, grad_fn=<DivBackward0>)
    loss: tensor(0.1187, grad_fn=<DivBackward0>)
    loss: tensor(0.1204, grad_fn=<DivBackward0>)
    loss: tensor(0.1306, grad_fn=<DivBackward0>)
    loss: tensor(0.1154, grad_fn=<DivBackward0>)
    loss: tensor(0.1186, grad_fn=<DivBackward0>)
    loss: tensor(0.1837, grad_fn=<DivBackward0>)
    loss: tensor(0.1146, grad_fn=<DivBackward0>)
    loss: tensor(0.1586, grad_fn=<DivBackward0>)
    loss: tensor(0.0957, grad_fn=<DivBackward0>)
    loss: tensor(0.1325, grad_fn=<DivBackward0>)
    loss: tensor(0.1110, grad_fn=<DivBackward0>)
    loss: tensor(0.1096, grad_fn=<DivBackward0>)
    loss: tensor(0.1420, grad_fn=<DivBackward0>)
    loss: tensor(0.0932, grad_fn=<DivBackward0>)
    loss: tensor(0.1539, grad_fn=<DivBackward0>)
    loss: tensor(0.1597, grad_fn=<DivBackward0>)
    loss: tensor(0.1294, grad_fn=<DivBackward0>)
    loss: tensor(0.1111, grad_fn=<DivBackward0>)
    loss: tensor(0.1053, grad_fn=<DivBackward0>)
    loss: tensor(0.1097, grad_fn=<DivBackward0>)
    loss: tensor(0.0896, grad_fn=<DivBackward0>)
    loss: tensor(0.0906, grad_fn=<DivBackward0>)
    loss: tensor(0.1480, grad_fn=<DivBackward0>)
    loss: tensor(0.1379, grad_fn=<DivBackward0>)
    loss: tensor(0.1143, grad_fn=<DivBackward0>)
    loss: tensor(0.0833, grad_fn=<DivBackward0>)
    loss: tensor(0.1196, grad_fn=<DivBackward0>)
    loss: tensor(0.1471, grad_fn=<DivBackward0>)
    loss: tensor(0.1033, grad_fn=<DivBackward0>)
    loss: tensor(0.0925, grad_fn=<DivBackward0>)
    loss: tensor(0.1305, grad_fn=<DivBackward0>)
    loss: tensor(0.1107, grad_fn=<DivBackward0>)
    loss: tensor(0.1381, grad_fn=<DivBackward0>)
    loss: tensor(0.1165, grad_fn=<DivBackward0>)
    loss: tensor(0.1019, grad_fn=<DivBackward0>)
    loss: tensor(0.1004, grad_fn=<DivBackward0>)
    loss: tensor(0.1284, grad_fn=<DivBackward0>)
    loss: tensor(0.1168, grad_fn=<DivBackward0>)
    loss: tensor(0.1462, grad_fn=<DivBackward0>)
    loss: tensor(0.1005, grad_fn=<DivBackward0>)
    loss: tensor(0.1555, grad_fn=<DivBackward0>)
    loss: tensor(0.0829, grad_fn=<DivBackward0>)
    loss: tensor(0.1145, grad_fn=<DivBackward0>)
    loss: tensor(0.1537, grad_fn=<DivBackward0>)
    loss: tensor(0.1277, grad_fn=<DivBackward0>)
    loss: tensor(0.0923, grad_fn=<DivBackward0>)
    loss: tensor(0.1290, grad_fn=<DivBackward0>)
    loss: tensor(0.0922, grad_fn=<DivBackward0>)
    loss: tensor(0.1375, grad_fn=<DivBackward0>)
    loss: tensor(0.1353, grad_fn=<DivBackward0>)
    loss: tensor(0.1461, grad_fn=<DivBackward0>)
    loss: tensor(0.1166, grad_fn=<DivBackward0>)
    loss: tensor(0.1160, grad_fn=<DivBackward0>)
    loss: tensor(0.1493, grad_fn=<DivBackward0>)
    loss: tensor(0.1339, grad_fn=<DivBackward0>)
    loss: tensor(0.1274, grad_fn=<DivBackward0>)
    loss: tensor(0.0998, grad_fn=<DivBackward0>)
    loss: tensor(0.0946, grad_fn=<DivBackward0>)
    loss: tensor(0.1083, grad_fn=<DivBackward0>)
    loss: tensor(0.1254, grad_fn=<DivBackward0>)
    loss: tensor(0.1004, grad_fn=<DivBackward0>)
    loss: tensor(0.0943, grad_fn=<DivBackward0>)
    loss: tensor(0.1359, grad_fn=<DivBackward0>)
    loss: tensor(0.1277, grad_fn=<DivBackward0>)
    loss: tensor(0.1243, grad_fn=<DivBackward0>)
    loss: tensor(0.1252, grad_fn=<DivBackward0>)
    loss: tensor(0.1034, grad_fn=<DivBackward0>)
    loss: tensor(0.1271, grad_fn=<DivBackward0>)
    loss: tensor(0.1122, grad_fn=<DivBackward0>)
    loss: tensor(0.1350, grad_fn=<DivBackward0>)
    loss: tensor(0.1286, grad_fn=<DivBackward0>)
    loss: tensor(0.1201, grad_fn=<DivBackward0>)
    loss: tensor(0.1295, grad_fn=<DivBackward0>)
    loss: tensor(0.1488, grad_fn=<DivBackward0>)
    loss: tensor(0.1220, grad_fn=<DivBackward0>)
    loss: tensor(0.1238, grad_fn=<DivBackward0>)
    loss: tensor(0.1285, grad_fn=<DivBackward0>)
    loss: tensor(0.1183, grad_fn=<DivBackward0>)
    loss: tensor(0.0895, grad_fn=<DivBackward0>)
    loss: tensor(0.1357, grad_fn=<DivBackward0>)
    loss: tensor(0.1405, grad_fn=<DivBackward0>)
    loss: tensor(0.1296, grad_fn=<DivBackward0>)
    loss: tensor(0.0907, grad_fn=<DivBackward0>)
    loss: tensor(0.1199, grad_fn=<DivBackward0>)
    loss: tensor(0.0831, grad_fn=<DivBackward0>)
    loss: tensor(0.1246, grad_fn=<DivBackward0>)
    loss: tensor(0.1675, grad_fn=<DivBackward0>)
    loss: tensor(0.0891, grad_fn=<DivBackward0>)
    loss: tensor(0.0995, grad_fn=<DivBackward0>)
    loss: tensor(0.1164, grad_fn=<DivBackward0>)
    loss: tensor(0.1283, grad_fn=<DivBackward0>)
    loss: tensor(0.1006, grad_fn=<DivBackward0>)
    loss: tensor(0.1596, grad_fn=<DivBackward0>)
    loss: tensor(0.1547, grad_fn=<DivBackward0>)
    loss: tensor(0.1138, grad_fn=<DivBackward0>)
    loss: tensor(0.0847, grad_fn=<DivBackward0>)
    loss: tensor(0.1260, grad_fn=<DivBackward0>)
    loss: tensor(0.0992, grad_fn=<DivBackward0>)
    loss: tensor(0.0908, grad_fn=<DivBackward0>)
    loss: tensor(0.0988, grad_fn=<DivBackward0>)
    loss: tensor(0.1092, grad_fn=<DivBackward0>)
    loss: tensor(0.1182, grad_fn=<DivBackward0>)
    loss: tensor(0.1615, grad_fn=<DivBackward0>)
    loss: tensor(0.1284, grad_fn=<DivBackward0>)
    loss: tensor(0.1602, grad_fn=<DivBackward0>)
    loss: tensor(0.1535, grad_fn=<DivBackward0>)
    loss: tensor(0.1232, grad_fn=<DivBackward0>)
    loss: tensor(0.1158, grad_fn=<DivBackward0>)
    loss: tensor(0.0896, grad_fn=<DivBackward0>)
    loss: tensor(0.1213, grad_fn=<DivBackward0>)
    loss: tensor(0.1525, grad_fn=<DivBackward0>)
    loss: tensor(0.1589, grad_fn=<DivBackward0>)
    loss: tensor(0.1302, grad_fn=<DivBackward0>)
    loss: tensor(0.1110, grad_fn=<DivBackward0>)
    loss: tensor(0.1401, grad_fn=<DivBackward0>)
    loss: tensor(0.1312, grad_fn=<DivBackward0>)
    loss: tensor(0.0945, grad_fn=<DivBackward0>)
    loss: tensor(0.1024, grad_fn=<DivBackward0>)
    loss: tensor(0.1162, grad_fn=<DivBackward0>)
    loss: tensor(0.1309, grad_fn=<DivBackward0>)
    loss: tensor(0.0702, grad_fn=<DivBackward0>)
    loss: tensor(0.1375, grad_fn=<DivBackward0>)
    loss: tensor(0.1297, grad_fn=<DivBackward0>)
    loss: tensor(0.1190, grad_fn=<DivBackward0>)
    loss: tensor(0.1421, grad_fn=<DivBackward0>)
    loss: tensor(0.1583, grad_fn=<DivBackward0>)
    loss: tensor(0.1494, grad_fn=<DivBackward0>)
    loss: tensor(0.1400, grad_fn=<DivBackward0>)
    loss: tensor(0.1269, grad_fn=<DivBackward0>)
    loss: tensor(0.1671, grad_fn=<DivBackward0>)
    loss: tensor(0.1093, grad_fn=<DivBackward0>)
    loss: tensor(0.1588, grad_fn=<DivBackward0>)
    loss: tensor(0.1604, grad_fn=<DivBackward0>)
    loss: tensor(0.1240, grad_fn=<DivBackward0>)
    loss: tensor(0.1202, grad_fn=<DivBackward0>)
    loss: tensor(0.1159, grad_fn=<DivBackward0>)
    loss: tensor(0.1249, grad_fn=<DivBackward0>)
    loss: tensor(0.1003, grad_fn=<DivBackward0>)
    loss: tensor(0.1623, grad_fn=<DivBackward0>)
    loss: tensor(0.1622, grad_fn=<DivBackward0>)
    loss: tensor(0.1620, grad_fn=<DivBackward0>)
    loss: tensor(0.1311, grad_fn=<DivBackward0>)
    loss: tensor(0.1084, grad_fn=<DivBackward0>)
    loss: tensor(0.1240, grad_fn=<DivBackward0>)
    loss: tensor(0.0954, grad_fn=<DivBackward0>)
    loss: tensor(0.1677, grad_fn=<DivBackward0>)
    loss: tensor(0.1227, grad_fn=<DivBackward0>)
    loss: tensor(0.1277, grad_fn=<DivBackward0>)
    loss: tensor(0.1188, grad_fn=<DivBackward0>)
    loss: tensor(0.1441, grad_fn=<DivBackward0>)
    loss: tensor(0.1585, grad_fn=<DivBackward0>)
    loss: tensor(0.1694, grad_fn=<DivBackward0>)
    loss: tensor(0.1191, grad_fn=<DivBackward0>)
    loss: tensor(0.1533, grad_fn=<DivBackward0>)
    loss: tensor(0.0923, grad_fn=<DivBackward0>)
    loss: tensor(0.1376, grad_fn=<DivBackward0>)
    loss: tensor(0.1239, grad_fn=<DivBackward0>)
    loss: tensor(0.0877, grad_fn=<DivBackward0>)
    loss: tensor(0.1585, grad_fn=<DivBackward0>)
    loss: tensor(0.1303, grad_fn=<DivBackward0>)
    loss: tensor(0.0862, grad_fn=<DivBackward0>)
    loss: tensor(0.1267, grad_fn=<DivBackward0>)
    loss: tensor(0.1433, grad_fn=<DivBackward0>)
    loss: tensor(0.1297, grad_fn=<DivBackward0>)
    loss: tensor(0.1144, grad_fn=<DivBackward0>)
    loss: tensor(0.1028, grad_fn=<DivBackward0>)
    loss: tensor(0.0889, grad_fn=<DivBackward0>)
    loss: tensor(0.0917, grad_fn=<DivBackward0>)
    loss: tensor(0.0938, grad_fn=<DivBackward0>)
    loss: tensor(0.1004, grad_fn=<DivBackward0>)
    loss: tensor(0.1414, grad_fn=<DivBackward0>)
    loss: tensor(0.1676, grad_fn=<DivBackward0>)
    loss: tensor(0.1130, grad_fn=<DivBackward0>)
    loss: tensor(0.0930, grad_fn=<DivBackward0>)
    loss: tensor(0.1189, grad_fn=<DivBackward0>)
    loss: tensor(0.1142, grad_fn=<DivBackward0>)
    loss: tensor(0.0989, grad_fn=<DivBackward0>)
    loss: tensor(0.1263, grad_fn=<DivBackward0>)
    loss: tensor(0.1104, grad_fn=<DivBackward0>)
    loss: tensor(0.1159, grad_fn=<DivBackward0>)
    loss: tensor(0.1275, grad_fn=<DivBackward0>)
    loss: tensor(0.1453, grad_fn=<DivBackward0>)
    loss: tensor(0.0828, grad_fn=<DivBackward0>)
    loss: tensor(0.1287, grad_fn=<DivBackward0>)
    loss: tensor(0.1358, grad_fn=<DivBackward0>)
    loss: tensor(0.1254, grad_fn=<DivBackward0>)
    loss: tensor(0.1389, grad_fn=<DivBackward0>)
    loss: tensor(0.1507, grad_fn=<DivBackward0>)
    loss: tensor(0.0975, grad_fn=<DivBackward0>)
    loss: tensor(0.1529, grad_fn=<DivBackward0>)
    loss: tensor(0.1275, grad_fn=<DivBackward0>)
    loss: tensor(0.1533, grad_fn=<DivBackward0>)
    loss: tensor(0.1234, grad_fn=<DivBackward0>)
    loss: tensor(0.1666, grad_fn=<DivBackward0>)
    loss: tensor(0.1458, grad_fn=<DivBackward0>)
    loss: tensor(0.1127, grad_fn=<DivBackward0>)
    loss: tensor(0.1111, grad_fn=<DivBackward0>)
    loss: tensor(0.1234, grad_fn=<DivBackward0>)
    loss: tensor(0.1431, grad_fn=<DivBackward0>)
    loss: tensor(0.0937, grad_fn=<DivBackward0>)
    loss: tensor(0.1474, grad_fn=<DivBackward0>)
    loss: tensor(0.1389, grad_fn=<DivBackward0>)
    loss: tensor(0.1170, grad_fn=<DivBackward0>)
    loss: tensor(0.1183, grad_fn=<DivBackward0>)
    loss: tensor(0.1039, grad_fn=<DivBackward0>)
    loss: tensor(0.1190, grad_fn=<DivBackward0>)
    loss: tensor(0.0887, grad_fn=<DivBackward0>)
    loss: tensor(0.1495, grad_fn=<DivBackward0>)
    loss: tensor(0.0896, grad_fn=<DivBackward0>)
    loss: tensor(0.0916, grad_fn=<DivBackward0>)
    loss: tensor(0.1150, grad_fn=<DivBackward0>)
    loss: tensor(0.1258, grad_fn=<DivBackward0>)
    loss: tensor(0.1304, grad_fn=<DivBackward0>)
    loss: tensor(0.1795, grad_fn=<DivBackward0>)
    loss: tensor(0.1360, grad_fn=<DivBackward0>)
    loss: tensor(0.1099, grad_fn=<DivBackward0>)
    loss: tensor(0.1199, grad_fn=<DivBackward0>)
    loss: tensor(0.1614, grad_fn=<DivBackward0>)
    loss: tensor(0.1137, grad_fn=<DivBackward0>)
    loss: tensor(0.0868, grad_fn=<DivBackward0>)
    loss: tensor(0.1184, grad_fn=<DivBackward0>)
    loss: tensor(0.1525, grad_fn=<DivBackward0>)
    loss: tensor(0.1299, grad_fn=<DivBackward0>)
    loss: tensor(0.0940, grad_fn=<DivBackward0>)
    loss: tensor(0.1299, grad_fn=<DivBackward0>)
    loss: tensor(0.1114, grad_fn=<DivBackward0>)
    loss: tensor(0.1261, grad_fn=<DivBackward0>)
    loss: tensor(0.1252, grad_fn=<DivBackward0>)
    loss: tensor(0.1295, grad_fn=<DivBackward0>)
    loss: tensor(0.0997, grad_fn=<DivBackward0>)
    loss: tensor(0.0910, grad_fn=<DivBackward0>)
    loss: tensor(0.1684, grad_fn=<DivBackward0>)
    loss: tensor(0.0999, grad_fn=<DivBackward0>)
    loss: tensor(0.1688, grad_fn=<DivBackward0>)
    loss: tensor(0.1135, grad_fn=<DivBackward0>)
    loss: tensor(0.1248, grad_fn=<DivBackward0>)
    loss: tensor(0.1140, grad_fn=<DivBackward0>)
    loss: tensor(0.1262, grad_fn=<DivBackward0>)
    loss: tensor(0.1247, grad_fn=<DivBackward0>)
    loss: tensor(0.1044, grad_fn=<DivBackward0>)
    loss: tensor(0.1268, grad_fn=<DivBackward0>)
    loss: tensor(0.1305, grad_fn=<DivBackward0>)
    loss: tensor(0.0934, grad_fn=<DivBackward0>)
    loss: tensor(0.1160, grad_fn=<DivBackward0>)
    loss: tensor(0.1360, grad_fn=<DivBackward0>)
    loss: tensor(0.1167, grad_fn=<DivBackward0>)
    loss: tensor(0.0826, grad_fn=<DivBackward0>)
    loss: tensor(0.0889, grad_fn=<DivBackward0>)
    loss: tensor(0.1142, grad_fn=<DivBackward0>)
    loss: tensor(0.0937, grad_fn=<DivBackward0>)
    loss: tensor(0.1326, grad_fn=<DivBackward0>)
    loss: tensor(0.1256, grad_fn=<DivBackward0>)
    loss: tensor(0.1296, grad_fn=<DivBackward0>)
    loss: tensor(0.1456, grad_fn=<DivBackward0>)
    loss: tensor(0.1246, grad_fn=<DivBackward0>)
    loss: tensor(0.1311, grad_fn=<DivBackward0>)
    loss: tensor(0.1483, grad_fn=<DivBackward0>)
    loss: tensor(0.1423, grad_fn=<DivBackward0>)
    loss: tensor(0.1575, grad_fn=<DivBackward0>)
    loss: tensor(0.1843, grad_fn=<DivBackward0>)
    loss: tensor(0.1289, grad_fn=<DivBackward0>)
    loss: tensor(0.0925, grad_fn=<DivBackward0>)
    loss: tensor(0.0979, grad_fn=<DivBackward0>)
    loss: tensor(0.1187, grad_fn=<DivBackward0>)
    loss: tensor(0.1393, grad_fn=<DivBackward0>)
    loss: tensor(0.1397, grad_fn=<DivBackward0>)
    loss: tensor(0.1450, grad_fn=<DivBackward0>)
    loss: tensor(0.1125, grad_fn=<DivBackward0>)
    loss: tensor(0.1005, grad_fn=<DivBackward0>)
    loss: tensor(0.1390, grad_fn=<DivBackward0>)
    loss: tensor(0.0852, grad_fn=<DivBackward0>)
    loss: tensor(0.0857, grad_fn=<DivBackward0>)
    loss: tensor(0.1108, grad_fn=<DivBackward0>)
    loss: tensor(0.1701, grad_fn=<DivBackward0>)
    loss: tensor(0.1160, grad_fn=<DivBackward0>)
    loss: tensor(0.1287, grad_fn=<DivBackward0>)
    loss: tensor(0.1109, grad_fn=<DivBackward0>)
    loss: tensor(0.1314, grad_fn=<DivBackward0>)
    loss: tensor(0.1347, grad_fn=<DivBackward0>)
    loss: tensor(0.1019, grad_fn=<DivBackward0>)
    loss: tensor(0.0926, grad_fn=<DivBackward0>)
    loss: tensor(0.1273, grad_fn=<DivBackward0>)
    loss: tensor(0.0846, grad_fn=<DivBackward0>)
    loss: tensor(0.1325, grad_fn=<DivBackward0>)
    loss: tensor(0.0989, grad_fn=<DivBackward0>)
    loss: tensor(0.1354, grad_fn=<DivBackward0>)
    loss: tensor(0.1010, grad_fn=<DivBackward0>)
    loss: tensor(0.1238, grad_fn=<DivBackward0>)
    loss: tensor(0.1611, grad_fn=<DivBackward0>)
    loss: tensor(0.1522, grad_fn=<DivBackward0>)
    loss: tensor(0.1064, grad_fn=<DivBackward0>)
    loss: tensor(0.1306, grad_fn=<DivBackward0>)
    loss: tensor(0.1673, grad_fn=<DivBackward0>)
    loss: tensor(0.1125, grad_fn=<DivBackward0>)
    loss: tensor(0.0889, grad_fn=<DivBackward0>)
    loss: tensor(0.1516, grad_fn=<DivBackward0>)
    loss: tensor(0.1293, grad_fn=<DivBackward0>)
    loss: tensor(0.1297, grad_fn=<DivBackward0>)
    loss: tensor(0.1113, grad_fn=<DivBackward0>)
    loss: tensor(0.1423, grad_fn=<DivBackward0>)
    loss: tensor(0.1011, grad_fn=<DivBackward0>)
    loss: tensor(0.1223, grad_fn=<DivBackward0>)
    loss: tensor(0.0887, grad_fn=<DivBackward0>)
    loss: tensor(0.1076, grad_fn=<DivBackward0>)
    loss: tensor(0.1315, grad_fn=<DivBackward0>)
    loss: tensor(0.1003, grad_fn=<DivBackward0>)
    loss: tensor(0.1727, grad_fn=<DivBackward0>)
    loss: tensor(0.1490, grad_fn=<DivBackward0>)
    loss: tensor(0.1178, grad_fn=<DivBackward0>)
    loss: tensor(0.1178, grad_fn=<DivBackward0>)
    loss: tensor(0.1283, grad_fn=<DivBackward0>)
    loss: tensor(0.0912, grad_fn=<DivBackward0>)
    loss: tensor(0.1183, grad_fn=<DivBackward0>)
    loss: tensor(0.1561, grad_fn=<DivBackward0>)
    loss: tensor(0.0890, grad_fn=<DivBackward0>)
    loss: tensor(0.0836, grad_fn=<DivBackward0>)
    loss: tensor(0.1464, grad_fn=<DivBackward0>)
    loss: tensor(0.0839, grad_fn=<DivBackward0>)
    loss: tensor(0.1209, grad_fn=<DivBackward0>)
    loss: tensor(0.1592, grad_fn=<DivBackward0>)
    loss: tensor(0.1355, grad_fn=<DivBackward0>)
    loss: tensor(0.1107, grad_fn=<DivBackward0>)
    loss: tensor(0.1868, grad_fn=<DivBackward0>)
    loss: tensor(0.0916, grad_fn=<DivBackward0>)
    loss: tensor(0.1024, grad_fn=<DivBackward0>)
    loss: tensor(0.1022, grad_fn=<DivBackward0>)
    loss: tensor(0.1670, grad_fn=<DivBackward0>)
    loss: tensor(0.1564, grad_fn=<DivBackward0>)
    loss: tensor(0.1135, grad_fn=<DivBackward0>)
    loss: tensor(0.1153, grad_fn=<DivBackward0>)
    loss: tensor(0.0924, grad_fn=<DivBackward0>)
    loss: tensor(0.1276, grad_fn=<DivBackward0>)
    loss: tensor(0.1513, grad_fn=<DivBackward0>)
    loss: tensor(0.0927, grad_fn=<DivBackward0>)
    loss: tensor(0.1039, grad_fn=<DivBackward0>)
    loss: tensor(0.1000, grad_fn=<DivBackward0>)
    loss: tensor(0.1194, grad_fn=<DivBackward0>)
    loss: tensor(0.1289, grad_fn=<DivBackward0>)
    loss: tensor(0.0975, grad_fn=<DivBackward0>)
    loss: tensor(0.1288, grad_fn=<DivBackward0>)
    loss: tensor(0.1295, grad_fn=<DivBackward0>)
    loss: tensor(0.1165, grad_fn=<DivBackward0>)
    loss: tensor(0.1485, grad_fn=<DivBackward0>)
    loss: tensor(0.1437, grad_fn=<DivBackward0>)
    loss: tensor(0.1458, grad_fn=<DivBackward0>)
    loss: tensor(0.1168, grad_fn=<DivBackward0>)
    loss: tensor(0.1493, grad_fn=<DivBackward0>)
    loss: tensor(0.0993, grad_fn=<DivBackward0>)
    loss: tensor(0.1440, grad_fn=<DivBackward0>)
    loss: tensor(0.1356, grad_fn=<DivBackward0>)
    loss: tensor(0.1139, grad_fn=<DivBackward0>)
    loss: tensor(0.1190, grad_fn=<DivBackward0>)
    loss: tensor(0.1567, grad_fn=<DivBackward0>)
    loss: tensor(0.0996, grad_fn=<DivBackward0>)
    loss: tensor(0.1249, grad_fn=<DivBackward0>)
    loss: tensor(0.1018, grad_fn=<DivBackward0>)
    loss: tensor(0.1356, grad_fn=<DivBackward0>)
    loss: tensor(0.1310, grad_fn=<DivBackward0>)
    loss: tensor(0.1181, grad_fn=<DivBackward0>)
    loss: tensor(0.1194, grad_fn=<DivBackward0>)
    loss: tensor(0.1540, grad_fn=<DivBackward0>)
    loss: tensor(0.1058, grad_fn=<DivBackward0>)
    loss: tensor(0.0888, grad_fn=<DivBackward0>)
    loss: tensor(0.0925, grad_fn=<DivBackward0>)
    loss: tensor(0.1340, grad_fn=<DivBackward0>)
    loss: tensor(0.1469, grad_fn=<DivBackward0>)
    loss: tensor(0.1080, grad_fn=<DivBackward0>)
    loss: tensor(0.1307, grad_fn=<DivBackward0>)
    loss: tensor(0.1235, grad_fn=<DivBackward0>)
    loss: tensor(0.1527, grad_fn=<DivBackward0>)
    loss: tensor(0.1659, grad_fn=<DivBackward0>)
    loss: tensor(0.0924, grad_fn=<DivBackward0>)
    loss: tensor(0.1085, grad_fn=<DivBackward0>)
    loss: tensor(0.0921, grad_fn=<DivBackward0>)
    loss: tensor(0.1022, grad_fn=<DivBackward0>)
    loss: tensor(0.0943, grad_fn=<DivBackward0>)
    loss: tensor(0.1867, grad_fn=<DivBackward0>)
    loss: tensor(0.0922, grad_fn=<DivBackward0>)
    loss: tensor(0.1288, grad_fn=<DivBackward0>)
    loss: tensor(0.1564, grad_fn=<DivBackward0>)
    loss: tensor(0.1268, grad_fn=<DivBackward0>)
    loss: tensor(0.0907, grad_fn=<DivBackward0>)
    loss: tensor(0.1100, grad_fn=<DivBackward0>)
    loss: tensor(0.1231, grad_fn=<DivBackward0>)
    loss: tensor(0.1283, grad_fn=<DivBackward0>)
    loss: tensor(0.1331, grad_fn=<DivBackward0>)
    loss: tensor(0.1073, grad_fn=<DivBackward0>)
    loss: tensor(0.0885, grad_fn=<DivBackward0>)
    loss: tensor(0.1118, grad_fn=<DivBackward0>)
    loss: tensor(0.1342, grad_fn=<DivBackward0>)
    loss: tensor(0.1004, grad_fn=<DivBackward0>)
    loss: tensor(0.0982, grad_fn=<DivBackward0>)
    loss: tensor(0.0994, grad_fn=<DivBackward0>)
    loss: tensor(0.1832, grad_fn=<DivBackward0>)
    loss: tensor(0.0919, grad_fn=<DivBackward0>)
    loss: tensor(0.1831, grad_fn=<DivBackward0>)
    loss: tensor(0.1565, grad_fn=<DivBackward0>)
    loss: tensor(0.1560, grad_fn=<DivBackward0>)
    loss: tensor(0.1288, grad_fn=<DivBackward0>)
    loss: tensor(0.1597, grad_fn=<DivBackward0>)
    loss: tensor(0.1288, grad_fn=<DivBackward0>)
    loss: tensor(0.0981, grad_fn=<DivBackward0>)
    loss: tensor(0.1244, grad_fn=<DivBackward0>)
    loss: tensor(0.1167, grad_fn=<DivBackward0>)
    loss: tensor(0.1404, grad_fn=<DivBackward0>)
    loss: tensor(0.1534, grad_fn=<DivBackward0>)
    loss: tensor(0.1237, grad_fn=<DivBackward0>)
    loss: tensor(0.1168, grad_fn=<DivBackward0>)
    loss: tensor(0.1146, grad_fn=<DivBackward0>)
    loss: tensor(0.1171, grad_fn=<DivBackward0>)
    loss: tensor(0.1690, grad_fn=<DivBackward0>)
    loss: tensor(0.0995, grad_fn=<DivBackward0>)
    loss: tensor(0.1431, grad_fn=<DivBackward0>)
    loss: tensor(0.1512, grad_fn=<DivBackward0>)
    loss: tensor(0.1128, grad_fn=<DivBackward0>)
    loss: tensor(0.1375, grad_fn=<DivBackward0>)
    loss: tensor(0.1192, grad_fn=<DivBackward0>)
    loss: tensor(0.1246, grad_fn=<DivBackward0>)
    loss: tensor(0.1304, grad_fn=<DivBackward0>)
    loss: tensor(0.1616, grad_fn=<DivBackward0>)
    loss: tensor(0.1283, grad_fn=<DivBackward0>)
    loss: tensor(0.0916, grad_fn=<DivBackward0>)
    loss: tensor(0.1166, grad_fn=<DivBackward0>)
    loss: tensor(0.0907, grad_fn=<DivBackward0>)
    loss: tensor(0.1031, grad_fn=<DivBackward0>)
    loss: tensor(0.1583, grad_fn=<DivBackward0>)
    loss: tensor(0.0882, grad_fn=<DivBackward0>)
    loss: tensor(0.1288, grad_fn=<DivBackward0>)
    loss: tensor(0.0934, grad_fn=<DivBackward0>)
    loss: tensor(0.0885, grad_fn=<DivBackward0>)
    loss: tensor(0.1589, grad_fn=<DivBackward0>)
    loss: tensor(0.1446, grad_fn=<DivBackward0>)
    loss: tensor(0.1397, grad_fn=<DivBackward0>)
    loss: tensor(0.1503, grad_fn=<DivBackward0>)
    loss: tensor(0.1444, grad_fn=<DivBackward0>)
    loss: tensor(0.1414, grad_fn=<DivBackward0>)
    loss: tensor(0.1675, grad_fn=<DivBackward0>)
    loss: tensor(0.0992, grad_fn=<DivBackward0>)
    loss: tensor(0.1238, grad_fn=<DivBackward0>)
    loss: tensor(0.1283, grad_fn=<DivBackward0>)
    loss: tensor(0.0896, grad_fn=<DivBackward0>)
    loss: tensor(0.1228, grad_fn=<DivBackward0>)
    loss: tensor(0.1595, grad_fn=<DivBackward0>)
    loss: tensor(0.1548, grad_fn=<DivBackward0>)
    loss: tensor(0.1301, grad_fn=<DivBackward0>)
    loss: tensor(0.1023, grad_fn=<DivBackward0>)
    loss: tensor(0.1473, grad_fn=<DivBackward0>)
    loss: tensor(0.1391, grad_fn=<DivBackward0>)
    loss: tensor(0.0826, grad_fn=<DivBackward0>)
    loss: tensor(0.1138, grad_fn=<DivBackward0>)
    loss: tensor(0.0882, grad_fn=<DivBackward0>)
    loss: tensor(0.1204, grad_fn=<DivBackward0>)
    loss: tensor(0.1197, grad_fn=<DivBackward0>)
    loss: tensor(0.1008, grad_fn=<DivBackward0>)
    loss: tensor(0.0932, grad_fn=<DivBackward0>)
    loss: tensor(0.1414, grad_fn=<DivBackward0>)
    loss: tensor(0.1273, grad_fn=<DivBackward0>)
    loss: tensor(0.1273, grad_fn=<DivBackward0>)
    loss: tensor(0.0991, grad_fn=<DivBackward0>)
    loss: tensor(0.1438, grad_fn=<DivBackward0>)
    loss: tensor(0.0841, grad_fn=<DivBackward0>)
    loss: tensor(0.0977, grad_fn=<DivBackward0>)
    loss: tensor(0.1076, grad_fn=<DivBackward0>)
    loss: tensor(0.1646, grad_fn=<DivBackward0>)
    loss: tensor(0.1187, grad_fn=<DivBackward0>)
    loss: tensor(0.0871, grad_fn=<DivBackward0>)
    loss: tensor(0.1600, grad_fn=<DivBackward0>)
    loss: tensor(0.1447, grad_fn=<DivBackward0>)
    loss: tensor(0.1062, grad_fn=<DivBackward0>)
    loss: tensor(0.1480, grad_fn=<DivBackward0>)
    loss: tensor(0.0857, grad_fn=<DivBackward0>)
    loss: tensor(0.0894, grad_fn=<DivBackward0>)
    loss: tensor(0.1064, grad_fn=<DivBackward0>)
    loss: tensor(0.1189, grad_fn=<DivBackward0>)
    loss: tensor(0.0937, grad_fn=<DivBackward0>)
    loss: tensor(0.1211, grad_fn=<DivBackward0>)
    loss: tensor(0.0928, grad_fn=<DivBackward0>)
    loss: tensor(0.1498, grad_fn=<DivBackward0>)
    loss: tensor(0.1305, grad_fn=<DivBackward0>)
    loss: tensor(0.1087, grad_fn=<DivBackward0>)
    loss: tensor(0.0826, grad_fn=<DivBackward0>)
    loss: tensor(0.1455, grad_fn=<DivBackward0>)
    loss: tensor(0.1620, grad_fn=<DivBackward0>)
    loss: tensor(0.0870, grad_fn=<DivBackward0>)
    loss: tensor(0.1288, grad_fn=<DivBackward0>)
    loss: tensor(0.1319, grad_fn=<DivBackward0>)
    loss: tensor(0.1511, grad_fn=<DivBackward0>)
    loss: tensor(0.1098, grad_fn=<DivBackward0>)
    loss: tensor(0.1315, grad_fn=<DivBackward0>)
    loss: tensor(0.1436, grad_fn=<DivBackward0>)
    loss: tensor(0.0715, grad_fn=<DivBackward0>)
    loss: tensor(0.1093, grad_fn=<DivBackward0>)
    loss: tensor(0.1372, grad_fn=<DivBackward0>)
    loss: tensor(0.1069, grad_fn=<DivBackward0>)
    loss: tensor(0.1380, grad_fn=<DivBackward0>)
    loss: tensor(0.1666, grad_fn=<DivBackward0>)
    loss: tensor(0.1346, grad_fn=<DivBackward0>)
    loss: tensor(0.1036, grad_fn=<DivBackward0>)
    loss: tensor(0.1829, grad_fn=<DivBackward0>)
    loss: tensor(0.1291, grad_fn=<DivBackward0>)
    loss: tensor(0.1062, grad_fn=<DivBackward0>)
    loss: tensor(0.0890, grad_fn=<DivBackward0>)
    loss: tensor(0.1016, grad_fn=<DivBackward0>)
    loss: tensor(0.1306, grad_fn=<DivBackward0>)
    loss: tensor(0.1476, grad_fn=<DivBackward0>)
    loss: tensor(0.1378, grad_fn=<DivBackward0>)
    loss: tensor(0.1090, grad_fn=<DivBackward0>)
    loss: tensor(0.1304, grad_fn=<DivBackward0>)
    loss: tensor(0.1422, grad_fn=<DivBackward0>)
    loss: tensor(0.1667, grad_fn=<DivBackward0>)
    loss: tensor(0.1552, grad_fn=<DivBackward0>)
    loss: tensor(0.1661, grad_fn=<DivBackward0>)
    loss: tensor(0.1430, grad_fn=<DivBackward0>)
    loss: tensor(0.1457, grad_fn=<DivBackward0>)
    loss: tensor(0.1460, grad_fn=<DivBackward0>)
    loss: tensor(0.0922, grad_fn=<DivBackward0>)
    loss: tensor(0.1304, grad_fn=<DivBackward0>)
    loss: tensor(0.1333, grad_fn=<DivBackward0>)
    loss: tensor(0.1423, grad_fn=<DivBackward0>)
    loss: tensor(0.1023, grad_fn=<DivBackward0>)
    loss: tensor(0.1268, grad_fn=<DivBackward0>)
    loss: tensor(0.0955, grad_fn=<DivBackward0>)
    loss: tensor(0.1069, grad_fn=<DivBackward0>)
    loss: tensor(0.1258, grad_fn=<DivBackward0>)
    loss: tensor(0.1050, grad_fn=<DivBackward0>)
    loss: tensor(0.1173, grad_fn=<DivBackward0>)
    loss: tensor(0.1132, grad_fn=<DivBackward0>)
    loss: tensor(0.0968, grad_fn=<DivBackward0>)
    loss: tensor(0.1119, grad_fn=<DivBackward0>)
    loss: tensor(0.1224, grad_fn=<DivBackward0>)
    loss: tensor(0.1061, grad_fn=<DivBackward0>)
    loss: tensor(0.1254, grad_fn=<DivBackward0>)
    loss: tensor(0.1552, grad_fn=<DivBackward0>)
    loss: tensor(0.1093, grad_fn=<DivBackward0>)
    loss: tensor(0.1678, grad_fn=<DivBackward0>)
    loss: tensor(0.1255, grad_fn=<DivBackward0>)
    loss: tensor(0.1662, grad_fn=<DivBackward0>)
    loss: tensor(0.1165, grad_fn=<DivBackward0>)
    loss: tensor(0.1195, grad_fn=<DivBackward0>)
    loss: tensor(0.1303, grad_fn=<DivBackward0>)
    loss: tensor(0.1664, grad_fn=<DivBackward0>)
    loss: tensor(0.0923, grad_fn=<DivBackward0>)
    loss: tensor(0.1019, grad_fn=<DivBackward0>)
    loss: tensor(0.0716, grad_fn=<DivBackward0>)
    loss: tensor(0.1025, grad_fn=<DivBackward0>)
    loss: tensor(0.1234, grad_fn=<DivBackward0>)
    loss: tensor(0.1396, grad_fn=<DivBackward0>)
    loss: tensor(0.1012, grad_fn=<DivBackward0>)
    loss: tensor(0.1507, grad_fn=<DivBackward0>)
    loss: tensor(0.1466, grad_fn=<DivBackward0>)
    loss: tensor(0.1001, grad_fn=<DivBackward0>)
    loss: tensor(0.1551, grad_fn=<DivBackward0>)
    loss: tensor(0.1003, grad_fn=<DivBackward0>)
    loss: tensor(0.1647, grad_fn=<DivBackward0>)
    loss: tensor(0.1448, grad_fn=<DivBackward0>)
    loss: tensor(0.0897, grad_fn=<DivBackward0>)
    loss: tensor(0.1046, grad_fn=<DivBackward0>)
    loss: tensor(0.1289, grad_fn=<DivBackward0>)
    loss: tensor(0.1111, grad_fn=<DivBackward0>)
    loss: tensor(0.1102, grad_fn=<DivBackward0>)
    loss: tensor(0.0828, grad_fn=<DivBackward0>)
    loss: tensor(0.0721, grad_fn=<DivBackward0>)
    loss: tensor(0.1527, grad_fn=<DivBackward0>)
    loss: tensor(0.1025, grad_fn=<DivBackward0>)
    loss: tensor(0.0828, grad_fn=<DivBackward0>)
    loss: tensor(0.0977, grad_fn=<DivBackward0>)
    loss: tensor(0.1417, grad_fn=<DivBackward0>)
    loss: tensor(0.1000, grad_fn=<DivBackward0>)
    loss: tensor(0.1395, grad_fn=<DivBackward0>)
    loss: tensor(0.1246, grad_fn=<DivBackward0>)
    loss: tensor(0.1094, grad_fn=<DivBackward0>)
    loss: tensor(0.1229, grad_fn=<DivBackward0>)
    loss: tensor(0.1066, grad_fn=<DivBackward0>)
    loss: tensor(0.0895, grad_fn=<DivBackward0>)
    loss: tensor(0.0930, grad_fn=<DivBackward0>)
    loss: tensor(0.1526, grad_fn=<DivBackward0>)
    loss: tensor(0.1013, grad_fn=<DivBackward0>)
    loss: tensor(0.0893, grad_fn=<DivBackward0>)
    loss: tensor(0.0911, grad_fn=<DivBackward0>)
    loss: tensor(0.1491, grad_fn=<DivBackward0>)
    loss: tensor(0.1171, grad_fn=<DivBackward0>)
    loss: tensor(0.1307, grad_fn=<DivBackward0>)
    loss: tensor(0.1104, grad_fn=<DivBackward0>)
    loss: tensor(0.1160, grad_fn=<DivBackward0>)
    loss: tensor(0.1133, grad_fn=<DivBackward0>)
    loss: tensor(0.1203, grad_fn=<DivBackward0>)
    loss: tensor(0.0884, grad_fn=<DivBackward0>)
    loss: tensor(0.1291, grad_fn=<DivBackward0>)
    loss: tensor(0.1101, grad_fn=<DivBackward0>)
    loss: tensor(0.1236, grad_fn=<DivBackward0>)
    loss: tensor(0.0996, grad_fn=<DivBackward0>)
    loss: tensor(0.1257, grad_fn=<DivBackward0>)
    loss: tensor(0.1346, grad_fn=<DivBackward0>)
    loss: tensor(0.1311, grad_fn=<DivBackward0>)
    loss: tensor(0.0820, grad_fn=<DivBackward0>)
    loss: tensor(0.1004, grad_fn=<DivBackward0>)
    loss: tensor(0.1015, grad_fn=<DivBackward0>)
    loss: tensor(0.1578, grad_fn=<DivBackward0>)
    loss: tensor(0.1177, grad_fn=<DivBackward0>)
    loss: tensor(0.1325, grad_fn=<DivBackward0>)
    loss: tensor(0.1244, grad_fn=<DivBackward0>)
    loss: tensor(0.1406, grad_fn=<DivBackward0>)
    loss: tensor(0.1015, grad_fn=<DivBackward0>)
    loss: tensor(0.1108, grad_fn=<DivBackward0>)
    loss: tensor(0.1482, grad_fn=<DivBackward0>)
    loss: tensor(0.1314, grad_fn=<DivBackward0>)
    loss: tensor(0.1022, grad_fn=<DivBackward0>)
    loss: tensor(0.1291, grad_fn=<DivBackward0>)
    loss: tensor(0.1309, grad_fn=<DivBackward0>)
    loss: tensor(0.1460, grad_fn=<DivBackward0>)
    loss: tensor(0.0881, grad_fn=<DivBackward0>)
    loss: tensor(0.1005, grad_fn=<DivBackward0>)
    loss: tensor(0.1632, grad_fn=<DivBackward0>)
    loss: tensor(0.1506, grad_fn=<DivBackward0>)
    loss: tensor(0.1370, grad_fn=<DivBackward0>)
    loss: tensor(0.0829, grad_fn=<DivBackward0>)
    loss: tensor(0.1023, grad_fn=<DivBackward0>)
    loss: tensor(0.1010, grad_fn=<DivBackward0>)
    loss: tensor(0.1298, grad_fn=<DivBackward0>)
    loss: tensor(0.1341, grad_fn=<DivBackward0>)
    loss: tensor(0.1167, grad_fn=<DivBackward0>)
    loss: tensor(0.1174, grad_fn=<DivBackward0>)
    loss: tensor(0.1667, grad_fn=<DivBackward0>)
    loss: tensor(0.1416, grad_fn=<DivBackward0>)
    loss: tensor(0.1295, grad_fn=<DivBackward0>)
    loss: tensor(0.0983, grad_fn=<DivBackward0>)
    loss: tensor(0.0995, grad_fn=<DivBackward0>)
    loss: tensor(0.1092, grad_fn=<DivBackward0>)
    loss: tensor(0.1319, grad_fn=<DivBackward0>)
    loss: tensor(0.1025, grad_fn=<DivBackward0>)
    loss: tensor(0.1339, grad_fn=<DivBackward0>)
    loss: tensor(0.1363, grad_fn=<DivBackward0>)
    loss: tensor(0.1285, grad_fn=<DivBackward0>)
    loss: tensor(0.1461, grad_fn=<DivBackward0>)
    loss: tensor(0.1296, grad_fn=<DivBackward0>)
    loss: tensor(0.1111, grad_fn=<DivBackward0>)
    loss: tensor(0.1540, grad_fn=<DivBackward0>)
    loss: tensor(0.1393, grad_fn=<DivBackward0>)
    loss: tensor(0.1600, grad_fn=<DivBackward0>)
    loss: tensor(0.1156, grad_fn=<DivBackward0>)
    loss: tensor(0.1539, grad_fn=<DivBackward0>)
    loss: tensor(0.1544, grad_fn=<DivBackward0>)
    loss: tensor(0.1671, grad_fn=<DivBackward0>)
    loss: tensor(0.1270, grad_fn=<DivBackward0>)
    loss: tensor(0.1181, grad_fn=<DivBackward0>)
    loss: tensor(0.0868, grad_fn=<DivBackward0>)
    loss: tensor(0.1171, grad_fn=<DivBackward0>)
    loss: tensor(0.1182, grad_fn=<DivBackward0>)
    loss: tensor(0.1485, grad_fn=<DivBackward0>)
    loss: tensor(0.1512, grad_fn=<DivBackward0>)
    loss: tensor(0.1143, grad_fn=<DivBackward0>)
    loss: tensor(0.1665, grad_fn=<DivBackward0>)
    loss: tensor(0.1051, grad_fn=<DivBackward0>)
    loss: tensor(0.1115, grad_fn=<DivBackward0>)
    loss: tensor(0.1282, grad_fn=<DivBackward0>)
    loss: tensor(0.1614, grad_fn=<DivBackward0>)
    loss: tensor(0.1141, grad_fn=<DivBackward0>)
    loss: tensor(0.1681, grad_fn=<DivBackward0>)
    loss: tensor(0.1831, grad_fn=<DivBackward0>)
    loss: tensor(0.1321, grad_fn=<DivBackward0>)
    loss: tensor(0.1447, grad_fn=<DivBackward0>)
    loss: tensor(0.1536, grad_fn=<DivBackward0>)
    loss: tensor(0.1445, grad_fn=<DivBackward0>)
    loss: tensor(0.1561, grad_fn=<DivBackward0>)
    loss: tensor(0.1627, grad_fn=<DivBackward0>)
    loss: tensor(0.1593, grad_fn=<DivBackward0>)
    loss: tensor(0.1413, grad_fn=<DivBackward0>)
    loss: tensor(0.1110, grad_fn=<DivBackward0>)
    loss: tensor(0.1095, grad_fn=<DivBackward0>)
    loss: tensor(0.1091, grad_fn=<DivBackward0>)
    loss: tensor(0.1251, grad_fn=<DivBackward0>)
    loss: tensor(0.1207, grad_fn=<DivBackward0>)
    loss: tensor(0.0974, grad_fn=<DivBackward0>)
    loss: tensor(0.1075, grad_fn=<DivBackward0>)
    loss: tensor(0.1239, grad_fn=<DivBackward0>)
    loss: tensor(0.1534, grad_fn=<DivBackward0>)
    loss: tensor(0.1404, grad_fn=<DivBackward0>)
    loss: tensor(0.1823, grad_fn=<DivBackward0>)
    loss: tensor(0.1293, grad_fn=<DivBackward0>)
    loss: tensor(0.1359, grad_fn=<DivBackward0>)
    loss: tensor(0.1294, grad_fn=<DivBackward0>)
    loss: tensor(0.1525, grad_fn=<DivBackward0>)
    loss: tensor(0.1050, grad_fn=<DivBackward0>)
    loss: tensor(0.1338, grad_fn=<DivBackward0>)
    loss: tensor(0.1512, grad_fn=<DivBackward0>)
    loss: tensor(0.0883, grad_fn=<DivBackward0>)
    loss: tensor(0.1366, grad_fn=<DivBackward0>)
    loss: tensor(0.1205, grad_fn=<DivBackward0>)
    loss: tensor(0.1330, grad_fn=<DivBackward0>)
    loss: tensor(0.1144, grad_fn=<DivBackward0>)
    loss: tensor(0.1547, grad_fn=<DivBackward0>)
    loss: tensor(0.1508, grad_fn=<DivBackward0>)
    loss: tensor(0.0925, grad_fn=<DivBackward0>)
    loss: tensor(0.1531, grad_fn=<DivBackward0>)
    loss: tensor(0.1415, grad_fn=<DivBackward0>)
    loss: tensor(0.0917, grad_fn=<DivBackward0>)
    loss: tensor(0.1180, grad_fn=<DivBackward0>)
    loss: tensor(0.1302, grad_fn=<DivBackward0>)
    loss: tensor(0.0890, grad_fn=<DivBackward0>)
    loss: tensor(0.1467, grad_fn=<DivBackward0>)
    loss: tensor(0.1158, grad_fn=<DivBackward0>)
    loss: tensor(0.0921, grad_fn=<DivBackward0>)
    loss: tensor(0.1264, grad_fn=<DivBackward0>)
    loss: tensor(0.1312, grad_fn=<DivBackward0>)
    loss: tensor(0.1001, grad_fn=<DivBackward0>)
    loss: tensor(0.1531, grad_fn=<DivBackward0>)
    loss: tensor(0.1153, grad_fn=<DivBackward0>)
    loss: tensor(0.1200, grad_fn=<DivBackward0>)
    loss: tensor(0.1462, grad_fn=<DivBackward0>)
    loss: tensor(0.1034, grad_fn=<DivBackward0>)
    loss: tensor(0.1233, grad_fn=<DivBackward0>)
    loss: tensor(0.1112, grad_fn=<DivBackward0>)
    loss: tensor(0.1134, grad_fn=<DivBackward0>)
    loss: tensor(0.1304, grad_fn=<DivBackward0>)
    loss: tensor(0.0854, grad_fn=<DivBackward0>)
    loss: tensor(0.1017, grad_fn=<DivBackward0>)
    loss: tensor(0.1498, grad_fn=<DivBackward0>)
    loss: tensor(0.1459, grad_fn=<DivBackward0>)
    loss: tensor(0.1791, grad_fn=<DivBackward0>)
    loss: tensor(0.1176, grad_fn=<DivBackward0>)
    loss: tensor(0.1340, grad_fn=<DivBackward0>)
    loss: tensor(0.1233, grad_fn=<DivBackward0>)
    loss: tensor(0.1293, grad_fn=<DivBackward0>)
    loss: tensor(0.1174, grad_fn=<DivBackward0>)
    loss: tensor(0.0897, grad_fn=<DivBackward0>)
    loss: tensor(0.0830, grad_fn=<DivBackward0>)
    loss: tensor(0.1412, grad_fn=<DivBackward0>)
    loss: tensor(0.0723, grad_fn=<DivBackward0>)
    loss: tensor(0.0925, grad_fn=<DivBackward0>)
    loss: tensor(0.1376, grad_fn=<DivBackward0>)
    loss: tensor(0.1020, grad_fn=<DivBackward0>)
    loss: tensor(0.0942, grad_fn=<DivBackward0>)
    loss: tensor(0.1075, grad_fn=<DivBackward0>)
    loss: tensor(0.1195, grad_fn=<DivBackward0>)
    loss: tensor(0.1119, grad_fn=<DivBackward0>)
    loss: tensor(0.1067, grad_fn=<DivBackward0>)
    loss: tensor(0.1178, grad_fn=<DivBackward0>)
    loss: tensor(0.1127, grad_fn=<DivBackward0>)
    loss: tensor(0.0986, grad_fn=<DivBackward0>)
    loss: tensor(0.1404, grad_fn=<DivBackward0>)
    loss: tensor(0.1576, grad_fn=<DivBackward0>)
    loss: tensor(0.1273, grad_fn=<DivBackward0>)
    loss: tensor(0.1233, grad_fn=<DivBackward0>)
    loss: tensor(0.1158, grad_fn=<DivBackward0>)
    loss: tensor(0.1198, grad_fn=<DivBackward0>)
    loss: tensor(0.1670, grad_fn=<DivBackward0>)
    loss: tensor(0.1342, grad_fn=<DivBackward0>)
    loss: tensor(0.1602, grad_fn=<DivBackward0>)
    loss: tensor(0.1462, grad_fn=<DivBackward0>)
    loss: tensor(0.1670, grad_fn=<DivBackward0>)
    loss: tensor(0.1257, grad_fn=<DivBackward0>)
    loss: tensor(0.1245, grad_fn=<DivBackward0>)
    loss: tensor(0.0934, grad_fn=<DivBackward0>)
    loss: tensor(0.1431, grad_fn=<DivBackward0>)
    loss: tensor(0.1296, grad_fn=<DivBackward0>)
    loss: tensor(0.1239, grad_fn=<DivBackward0>)
    loss: tensor(0.1472, grad_fn=<DivBackward0>)
    loss: tensor(0.1479, grad_fn=<DivBackward0>)
    loss: tensor(0.1621, grad_fn=<DivBackward0>)
    loss: tensor(0.1198, grad_fn=<DivBackward0>)
    loss: tensor(0.1039, grad_fn=<DivBackward0>)
    loss: tensor(0.1198, grad_fn=<DivBackward0>)
    loss: tensor(0.1550, grad_fn=<DivBackward0>)
    loss: tensor(0.1267, grad_fn=<DivBackward0>)
    loss: tensor(0.1001, grad_fn=<DivBackward0>)
    loss: tensor(0.1452, grad_fn=<DivBackward0>)
    loss: tensor(0.1153, grad_fn=<DivBackward0>)
    loss: tensor(0.0934, grad_fn=<DivBackward0>)
    loss: tensor(0.0826, grad_fn=<DivBackward0>)
    loss: tensor(0.1357, grad_fn=<DivBackward0>)
    loss: tensor(0.1311, grad_fn=<DivBackward0>)
    loss: tensor(0.0855, grad_fn=<DivBackward0>)
    loss: tensor(0.1452, grad_fn=<DivBackward0>)
    loss: tensor(0.1735, grad_fn=<DivBackward0>)
    loss: tensor(0.1062, grad_fn=<DivBackward0>)
    loss: tensor(0.1327, grad_fn=<DivBackward0>)
    loss: tensor(0.1138, grad_fn=<DivBackward0>)
    loss: tensor(0.1613, grad_fn=<DivBackward0>)
    loss: tensor(0.1209, grad_fn=<DivBackward0>)
    loss: tensor(0.1473, grad_fn=<DivBackward0>)
    loss: tensor(0.1292, grad_fn=<DivBackward0>)
    loss: tensor(0.1231, grad_fn=<DivBackward0>)
    loss: tensor(0.0892, grad_fn=<DivBackward0>)
    loss: tensor(0.1506, grad_fn=<DivBackward0>)
    loss: tensor(0.1264, grad_fn=<DivBackward0>)
    loss: tensor(0.1199, grad_fn=<DivBackward0>)
    loss: tensor(0.1255, grad_fn=<DivBackward0>)
    loss: tensor(0.1321, grad_fn=<DivBackward0>)
    loss: tensor(0.0991, grad_fn=<DivBackward0>)
    loss: tensor(0.1833, grad_fn=<DivBackward0>)
    loss: tensor(0.1177, grad_fn=<DivBackward0>)
    loss: tensor(0.1277, grad_fn=<DivBackward0>)
    loss: tensor(0.1378, grad_fn=<DivBackward0>)
    loss: tensor(0.1159, grad_fn=<DivBackward0>)
    loss: tensor(0.1233, grad_fn=<DivBackward0>)
    loss: tensor(0.1399, grad_fn=<DivBackward0>)
    loss: tensor(0.1514, grad_fn=<DivBackward0>)
    loss: tensor(0.1134, grad_fn=<DivBackward0>)
    loss: tensor(0.1252, grad_fn=<DivBackward0>)
    loss: tensor(0.1266, grad_fn=<DivBackward0>)
    loss: tensor(0.1584, grad_fn=<DivBackward0>)
    loss: tensor(0.1161, grad_fn=<DivBackward0>)
    loss: tensor(0.1223, grad_fn=<DivBackward0>)
    loss: tensor(0.1619, grad_fn=<DivBackward0>)
    loss: tensor(0.1485, grad_fn=<DivBackward0>)
    loss: tensor(0.1412, grad_fn=<DivBackward0>)
    loss: tensor(0.1655, grad_fn=<DivBackward0>)
    loss: tensor(0.1651, grad_fn=<DivBackward0>)
    loss: tensor(0.1100, grad_fn=<DivBackward0>)
    loss: tensor(0.0821, grad_fn=<DivBackward0>)
    loss: tensor(0.1425, grad_fn=<DivBackward0>)
    loss: tensor(0.1537, grad_fn=<DivBackward0>)
    loss: tensor(0.1088, grad_fn=<DivBackward0>)
    loss: tensor(0.1290, grad_fn=<DivBackward0>)
    loss: tensor(0.1022, grad_fn=<DivBackward0>)
    loss: tensor(0.1658, grad_fn=<DivBackward0>)
    loss: tensor(0.1340, grad_fn=<DivBackward0>)
    loss: tensor(0.1442, grad_fn=<DivBackward0>)
    loss: tensor(0.1083, grad_fn=<DivBackward0>)
    loss: tensor(0.0913, grad_fn=<DivBackward0>)
    loss: tensor(0.0915, grad_fn=<DivBackward0>)
    loss: tensor(0.0939, grad_fn=<DivBackward0>)
    loss: tensor(0.1253, grad_fn=<DivBackward0>)
    loss: tensor(0.1259, grad_fn=<DivBackward0>)
    loss: tensor(0.1197, grad_fn=<DivBackward0>)
    loss: tensor(0.1176, grad_fn=<DivBackward0>)
    loss: tensor(0.1411, grad_fn=<DivBackward0>)
    loss: tensor(0.1082, grad_fn=<DivBackward0>)
    loss: tensor(0.1401, grad_fn=<DivBackward0>)
    loss: tensor(0.1165, grad_fn=<DivBackward0>)
    loss: tensor(0.1452, grad_fn=<DivBackward0>)
    loss: tensor(0.1224, grad_fn=<DivBackward0>)
    loss: tensor(0.1607, grad_fn=<DivBackward0>)
    loss: tensor(0.1290, grad_fn=<DivBackward0>)
    loss: tensor(0.1363, grad_fn=<DivBackward0>)
    loss: tensor(0.1291, grad_fn=<DivBackward0>)
    loss: tensor(0.0941, grad_fn=<DivBackward0>)
    loss: tensor(0.1286, grad_fn=<DivBackward0>)
    loss: tensor(0.1154, grad_fn=<DivBackward0>)
    loss: tensor(0.0936, grad_fn=<DivBackward0>)
    loss: tensor(0.1309, grad_fn=<DivBackward0>)
    loss: tensor(0.1417, grad_fn=<DivBackward0>)
    loss: tensor(0.1494, grad_fn=<DivBackward0>)
    loss: tensor(0.1464, grad_fn=<DivBackward0>)
    loss: tensor(0.1010, grad_fn=<DivBackward0>)
    loss: tensor(0.1264, grad_fn=<DivBackward0>)
    loss: tensor(0.1439, grad_fn=<DivBackward0>)
    loss: tensor(0.1456, grad_fn=<DivBackward0>)
    loss: tensor(0.1140, grad_fn=<DivBackward0>)
    loss: tensor(0.1717, grad_fn=<DivBackward0>)
    loss: tensor(0.1195, grad_fn=<DivBackward0>)
    loss: tensor(0.1186, grad_fn=<DivBackward0>)
    loss: tensor(0.0964, grad_fn=<DivBackward0>)
    loss: tensor(0.0838, grad_fn=<DivBackward0>)
    loss: tensor(0.1676, grad_fn=<DivBackward0>)
    loss: tensor(0.0921, grad_fn=<DivBackward0>)
    loss: tensor(0.1223, grad_fn=<DivBackward0>)
    loss: tensor(0.1005, grad_fn=<DivBackward0>)
    loss: tensor(0.1189, grad_fn=<DivBackward0>)
    loss: tensor(0.1466, grad_fn=<DivBackward0>)
    loss: tensor(0.1334, grad_fn=<DivBackward0>)
    loss: tensor(0.1153, grad_fn=<DivBackward0>)
    loss: tensor(0.1026, grad_fn=<DivBackward0>)
    loss: tensor(0.1632, grad_fn=<DivBackward0>)
    loss: tensor(0.0914, grad_fn=<DivBackward0>)
    loss: tensor(0.1523, grad_fn=<DivBackward0>)
    loss: tensor(0.1545, grad_fn=<DivBackward0>)
    loss: tensor(0.1266, grad_fn=<DivBackward0>)
    loss: tensor(0.1270, grad_fn=<DivBackward0>)
    loss: tensor(0.1468, grad_fn=<DivBackward0>)
    loss: tensor(0.1281, grad_fn=<DivBackward0>)
    loss: tensor(0.1144, grad_fn=<DivBackward0>)
    loss: tensor(0.1299, grad_fn=<DivBackward0>)
    loss: tensor(0.1315, grad_fn=<DivBackward0>)
    loss: tensor(0.0921, grad_fn=<DivBackward0>)
    loss: tensor(0.1415, grad_fn=<DivBackward0>)
    loss: tensor(0.1455, grad_fn=<DivBackward0>)
    loss: tensor(0.1472, grad_fn=<DivBackward0>)
    loss: tensor(0.0870, grad_fn=<DivBackward0>)
    loss: tensor(0.0884, grad_fn=<DivBackward0>)
    loss: tensor(0.1302, grad_fn=<DivBackward0>)
    loss: tensor(0.0911, grad_fn=<DivBackward0>)
    loss: tensor(0.1549, grad_fn=<DivBackward0>)
    loss: tensor(0.1550, grad_fn=<DivBackward0>)
    loss: tensor(0.0861, grad_fn=<DivBackward0>)
    loss: tensor(0.0990, grad_fn=<DivBackward0>)
    loss: tensor(0.1291, grad_fn=<DivBackward0>)
    loss: tensor(0.0907, grad_fn=<DivBackward0>)
    loss: tensor(0.1061, grad_fn=<DivBackward0>)
    loss: tensor(0.1159, grad_fn=<DivBackward0>)
    loss: tensor(0.1473, grad_fn=<DivBackward0>)
    loss: tensor(0.1231, grad_fn=<DivBackward0>)
    loss: tensor(0.1470, grad_fn=<DivBackward0>)
    loss: tensor(0.1283, grad_fn=<DivBackward0>)
    loss: tensor(0.0977, grad_fn=<DivBackward0>)
    loss: tensor(0.1247, grad_fn=<DivBackward0>)
    loss: tensor(0.0919, grad_fn=<DivBackward0>)
    loss: tensor(0.1286, grad_fn=<DivBackward0>)
    loss: tensor(0.0875, grad_fn=<DivBackward0>)
    loss: tensor(0.1256, grad_fn=<DivBackward0>)
    loss: tensor(0.1491, grad_fn=<DivBackward0>)
    loss: tensor(0.1670, grad_fn=<DivBackward0>)
    loss: tensor(0.1153, grad_fn=<DivBackward0>)
    loss: tensor(0.0948, grad_fn=<DivBackward0>)
    loss: tensor(0.1119, grad_fn=<DivBackward0>)
    loss: tensor(0.1131, grad_fn=<DivBackward0>)
    loss: tensor(0.1046, grad_fn=<DivBackward0>)
    loss: tensor(0.1034, grad_fn=<DivBackward0>)
    loss: tensor(0.1279, grad_fn=<DivBackward0>)
    loss: tensor(0.0999, grad_fn=<DivBackward0>)
    loss: tensor(0.1064, grad_fn=<DivBackward0>)
    loss: tensor(0.1601, grad_fn=<DivBackward0>)
    loss: tensor(0.0859, grad_fn=<DivBackward0>)
    loss: tensor(0.1670, grad_fn=<DivBackward0>)
    loss: tensor(0.1670, grad_fn=<DivBackward0>)
    loss: tensor(0.1438, grad_fn=<DivBackward0>)
    loss: tensor(0.1171, grad_fn=<DivBackward0>)
    loss: tensor(0.1328, grad_fn=<DivBackward0>)
    loss: tensor(0.1161, grad_fn=<DivBackward0>)
    loss: tensor(0.1537, grad_fn=<DivBackward0>)
    loss: tensor(0.1439, grad_fn=<DivBackward0>)
    loss: tensor(0.1245, grad_fn=<DivBackward0>)
    loss: tensor(0.1404, grad_fn=<DivBackward0>)
    loss: tensor(0.1075, grad_fn=<DivBackward0>)
    loss: tensor(0.1253, grad_fn=<DivBackward0>)
    loss: tensor(0.1433, grad_fn=<DivBackward0>)
    loss: tensor(0.1319, grad_fn=<DivBackward0>)
    loss: tensor(0.1206, grad_fn=<DivBackward0>)
    loss: tensor(0.1298, grad_fn=<DivBackward0>)
    loss: tensor(0.1363, grad_fn=<DivBackward0>)
    loss: tensor(0.0885, grad_fn=<DivBackward0>)
    loss: tensor(0.1403, grad_fn=<DivBackward0>)
    loss: tensor(0.1078, grad_fn=<DivBackward0>)
    loss: tensor(0.1826, grad_fn=<DivBackward0>)
    loss: tensor(0.1101, grad_fn=<DivBackward0>)
    loss: tensor(0.1263, grad_fn=<DivBackward0>)
    loss: tensor(0.1481, grad_fn=<DivBackward0>)
    loss: tensor(0.1537, grad_fn=<DivBackward0>)
    loss: tensor(0.1172, grad_fn=<DivBackward0>)
    loss: tensor(0.1470, grad_fn=<DivBackward0>)
    loss: tensor(0.1100, grad_fn=<DivBackward0>)
    loss: tensor(0.1473, grad_fn=<DivBackward0>)
    loss: tensor(0.1616, grad_fn=<DivBackward0>)
    loss: tensor(0.1239, grad_fn=<DivBackward0>)
    loss: tensor(0.0887, grad_fn=<DivBackward0>)
    loss: tensor(0.1283, grad_fn=<DivBackward0>)
    loss: tensor(0.1523, grad_fn=<DivBackward0>)
    loss: tensor(0.1415, grad_fn=<DivBackward0>)
    loss: tensor(0.1687, grad_fn=<DivBackward0>)
    loss: tensor(0.1080, grad_fn=<DivBackward0>)
    loss: tensor(0.1824, grad_fn=<DivBackward0>)
    loss: tensor(0.1244, grad_fn=<DivBackward0>)
    loss: tensor(0.1063, grad_fn=<DivBackward0>)
    loss: tensor(0.1231, grad_fn=<DivBackward0>)
    loss: tensor(0.1363, grad_fn=<DivBackward0>)
    loss: tensor(0.1018, grad_fn=<DivBackward0>)
    loss: tensor(0.1232, grad_fn=<DivBackward0>)
    loss: tensor(0.1138, grad_fn=<DivBackward0>)
    loss: tensor(0.1666, grad_fn=<DivBackward0>)
    loss: tensor(0.1196, grad_fn=<DivBackward0>)
    loss: tensor(0.1202, grad_fn=<DivBackward0>)
    loss: tensor(0.1654, grad_fn=<DivBackward0>)
    loss: tensor(0.1146, grad_fn=<DivBackward0>)
    loss: tensor(0.1078, grad_fn=<DivBackward0>)
    loss: tensor(0.1822, grad_fn=<DivBackward0>)
    loss: tensor(0.1320, grad_fn=<DivBackward0>)
    loss: tensor(0.1034, grad_fn=<DivBackward0>)
    loss: tensor(0.0828, grad_fn=<DivBackward0>)
    loss: tensor(0.0949, grad_fn=<DivBackward0>)
    loss: tensor(0.1436, grad_fn=<DivBackward0>)
    loss: tensor(0.0932, grad_fn=<DivBackward0>)
    loss: tensor(0.1182, grad_fn=<DivBackward0>)
    loss: tensor(0.1462, grad_fn=<DivBackward0>)
    loss: tensor(0.1195, grad_fn=<DivBackward0>)
    loss: tensor(0.1013, grad_fn=<DivBackward0>)
    loss: tensor(0.1029, grad_fn=<DivBackward0>)
    loss: tensor(0.0943, grad_fn=<DivBackward0>)
    loss: tensor(0.0925, grad_fn=<DivBackward0>)
    loss: tensor(0.1683, grad_fn=<DivBackward0>)
    loss: tensor(0.1209, grad_fn=<DivBackward0>)
    loss: tensor(0.1134, grad_fn=<DivBackward0>)
    loss: tensor(0.1344, grad_fn=<DivBackward0>)
    loss: tensor(0.1562, grad_fn=<DivBackward0>)
    loss: tensor(0.1198, grad_fn=<DivBackward0>)
    loss: tensor(0.1161, grad_fn=<DivBackward0>)
    loss: tensor(0.1189, grad_fn=<DivBackward0>)
    loss: tensor(0.1278, grad_fn=<DivBackward0>)
    loss: tensor(0.1017, grad_fn=<DivBackward0>)
    loss: tensor(0.1163, grad_fn=<DivBackward0>)
    loss: tensor(0.1101, grad_fn=<DivBackward0>)
    loss: tensor(0.0931, grad_fn=<DivBackward0>)
    loss: tensor(0.1657, grad_fn=<DivBackward0>)
    loss: tensor(0.0714, grad_fn=<DivBackward0>)
    loss: tensor(0.1462, grad_fn=<DivBackward0>)
    loss: tensor(0.1248, grad_fn=<DivBackward0>)
    loss: tensor(0.1295, grad_fn=<DivBackward0>)
    loss: tensor(0.1250, grad_fn=<DivBackward0>)
    loss: tensor(0.1528, grad_fn=<DivBackward0>)
    loss: tensor(0.1379, grad_fn=<DivBackward0>)
    loss: tensor(0.1232, grad_fn=<DivBackward0>)
    loss: tensor(0.1134, grad_fn=<DivBackward0>)
    loss: tensor(0.1269, grad_fn=<DivBackward0>)
    loss: tensor(0.1247, grad_fn=<DivBackward0>)
    loss: tensor(0.1235, grad_fn=<DivBackward0>)
    loss: tensor(0.1431, grad_fn=<DivBackward0>)
    loss: tensor(0.1557, grad_fn=<DivBackward0>)
    loss: tensor(0.1394, grad_fn=<DivBackward0>)
    loss: tensor(0.0762, grad_fn=<DivBackward0>)
    loss: tensor(0.1162, grad_fn=<DivBackward0>)
    loss: tensor(0.1102, grad_fn=<DivBackward0>)
    loss: tensor(0.0930, grad_fn=<DivBackward0>)
    loss: tensor(0.1023, grad_fn=<DivBackward0>)
    loss: tensor(0.1657, grad_fn=<DivBackward0>)
    loss: tensor(0.1282, grad_fn=<DivBackward0>)
    loss: tensor(0.1122, grad_fn=<DivBackward0>)
    loss: tensor(0.0854, grad_fn=<DivBackward0>)
    loss: tensor(0.1429, grad_fn=<DivBackward0>)
    loss: tensor(0.1104, grad_fn=<DivBackward0>)
    loss: tensor(0.0694, grad_fn=<DivBackward0>)
    loss: tensor(0.1064, grad_fn=<DivBackward0>)
    loss: tensor(0.1098, grad_fn=<DivBackward0>)
    loss: tensor(0.1026, grad_fn=<DivBackward0>)
    loss: tensor(0.1529, grad_fn=<DivBackward0>)
    loss: tensor(0.0913, grad_fn=<DivBackward0>)
    loss: tensor(0.1676, grad_fn=<DivBackward0>)
    loss: tensor(0.0910, grad_fn=<DivBackward0>)
    loss: tensor(0.1273, grad_fn=<DivBackward0>)
    loss: tensor(0.1068, grad_fn=<DivBackward0>)
    loss: tensor(0.1677, grad_fn=<DivBackward0>)
    loss: tensor(0.1110, grad_fn=<DivBackward0>)
    loss: tensor(0.1542, grad_fn=<DivBackward0>)
    loss: tensor(0.1604, grad_fn=<DivBackward0>)
    loss: tensor(0.1154, grad_fn=<DivBackward0>)
    loss: tensor(0.1100, grad_fn=<DivBackward0>)
    loss: tensor(0.1219, grad_fn=<DivBackward0>)
    loss: tensor(0.1179, grad_fn=<DivBackward0>)
    loss: tensor(0.0945, grad_fn=<DivBackward0>)
    loss: tensor(0.0859, grad_fn=<DivBackward0>)
    loss: tensor(0.1157, grad_fn=<DivBackward0>)
    loss: tensor(0.1161, grad_fn=<DivBackward0>)
    loss: tensor(0.1018, grad_fn=<DivBackward0>)
    loss: tensor(0.1294, grad_fn=<DivBackward0>)
    loss: tensor(0.1468, grad_fn=<DivBackward0>)
    loss: tensor(0.1207, grad_fn=<DivBackward0>)
    loss: tensor(0.1302, grad_fn=<DivBackward0>)
    loss: tensor(0.1184, grad_fn=<DivBackward0>)
    loss: tensor(0.1361, grad_fn=<DivBackward0>)
    loss: tensor(0.0886, grad_fn=<DivBackward0>)
    loss: tensor(0.1122, grad_fn=<DivBackward0>)
    loss: tensor(0.1330, grad_fn=<DivBackward0>)
    loss: tensor(0.0838, grad_fn=<DivBackward0>)
    loss: tensor(0.1505, grad_fn=<DivBackward0>)
    loss: tensor(0.1012, grad_fn=<DivBackward0>)
    loss: tensor(0.1124, grad_fn=<DivBackward0>)
    loss: tensor(0.1111, grad_fn=<DivBackward0>)
    loss: tensor(0.1385, grad_fn=<DivBackward0>)
    loss: tensor(0.0929, grad_fn=<DivBackward0>)
    loss: tensor(0.1290, grad_fn=<DivBackward0>)
    loss: tensor(0.1102, grad_fn=<DivBackward0>)
    loss: tensor(0.1022, grad_fn=<DivBackward0>)
    loss: tensor(0.0933, grad_fn=<DivBackward0>)
    loss: tensor(0.1031, grad_fn=<DivBackward0>)
    loss: tensor(0.1307, grad_fn=<DivBackward0>)
    loss: tensor(0.1699, grad_fn=<DivBackward0>)
    loss: tensor(0.1693, grad_fn=<DivBackward0>)
    loss: tensor(0.1027, grad_fn=<DivBackward0>)
    loss: tensor(0.1518, grad_fn=<DivBackward0>)
    loss: tensor(0.1524, grad_fn=<DivBackward0>)
    loss: tensor(0.1327, grad_fn=<DivBackward0>)
    loss: tensor(0.1525, grad_fn=<DivBackward0>)
    loss: tensor(0.1419, grad_fn=<DivBackward0>)
    loss: tensor(0.1027, grad_fn=<DivBackward0>)
    loss: tensor(0.1271, grad_fn=<DivBackward0>)
    loss: tensor(0.0964, grad_fn=<DivBackward0>)
    loss: tensor(0.0968, grad_fn=<DivBackward0>)
    loss: tensor(0.1442, grad_fn=<DivBackward0>)
    loss: tensor(0.1490, grad_fn=<DivBackward0>)
    loss: tensor(0.1442, grad_fn=<DivBackward0>)
    loss: tensor(0.0952, grad_fn=<DivBackward0>)
    loss: tensor(0.1484, grad_fn=<DivBackward0>)
    loss: tensor(0.1297, grad_fn=<DivBackward0>)
    loss: tensor(0.1437, grad_fn=<DivBackward0>)
    loss: tensor(0.0978, grad_fn=<DivBackward0>)
    loss: tensor(0.1285, grad_fn=<DivBackward0>)
    loss: tensor(0.1494, grad_fn=<DivBackward0>)
    loss: tensor(0.1252, grad_fn=<DivBackward0>)
    loss: tensor(0.1572, grad_fn=<DivBackward0>)
    loss: tensor(0.1063, grad_fn=<DivBackward0>)
    loss: tensor(0.1174, grad_fn=<DivBackward0>)
    loss: tensor(0.1624, grad_fn=<DivBackward0>)
    loss: tensor(0.1362, grad_fn=<DivBackward0>)
    loss: tensor(0.1127, grad_fn=<DivBackward0>)
    loss: tensor(0.1573, grad_fn=<DivBackward0>)
    loss: tensor(0.1236, grad_fn=<DivBackward0>)
    loss: tensor(0.1272, grad_fn=<DivBackward0>)
    loss: tensor(0.1305, grad_fn=<DivBackward0>)
    loss: tensor(0.1697, grad_fn=<DivBackward0>)
    loss: tensor(0.1420, grad_fn=<DivBackward0>)
    loss: tensor(0.1225, grad_fn=<DivBackward0>)
    loss: tensor(0.1317, grad_fn=<DivBackward0>)
    loss: tensor(0.1703, grad_fn=<DivBackward0>)
    loss: tensor(0.1840, grad_fn=<DivBackward0>)
    loss: tensor(0.1283, grad_fn=<DivBackward0>)
    loss: tensor(0.1322, grad_fn=<DivBackward0>)
    loss: tensor(0.1106, grad_fn=<DivBackward0>)
    loss: tensor(0.1252, grad_fn=<DivBackward0>)
    loss: tensor(0.1103, grad_fn=<DivBackward0>)
    loss: tensor(0.1327, grad_fn=<DivBackward0>)
    loss: tensor(0.0937, grad_fn=<DivBackward0>)
    loss: tensor(0.1495, grad_fn=<DivBackward0>)
    loss: tensor(0.1489, grad_fn=<DivBackward0>)
    loss: tensor(0.1485, grad_fn=<DivBackward0>)
    loss: tensor(0.1225, grad_fn=<DivBackward0>)
    loss: tensor(0.1286, grad_fn=<DivBackward0>)
    loss: tensor(0.0854, grad_fn=<DivBackward0>)
    loss: tensor(0.1234, grad_fn=<DivBackward0>)
    loss: tensor(0.1230, grad_fn=<DivBackward0>)
    loss: tensor(0.1257, grad_fn=<DivBackward0>)
    loss: tensor(0.0937, grad_fn=<DivBackward0>)
    loss: tensor(0.1026, grad_fn=<DivBackward0>)
    loss: tensor(0.1157, grad_fn=<DivBackward0>)
    loss: tensor(0.1094, grad_fn=<DivBackward0>)
    loss: tensor(0.0859, grad_fn=<DivBackward0>)
    loss: tensor(0.1100, grad_fn=<DivBackward0>)
    loss: tensor(0.1436, grad_fn=<DivBackward0>)
    loss: tensor(0.0938, grad_fn=<DivBackward0>)
    loss: tensor(0.1287, grad_fn=<DivBackward0>)
    loss: tensor(0.0873, grad_fn=<DivBackward0>)
    loss: tensor(0.0883, grad_fn=<DivBackward0>)
    loss: tensor(0.1017, grad_fn=<DivBackward0>)
    loss: tensor(0.0934, grad_fn=<DivBackward0>)
    loss: tensor(0.1257, grad_fn=<DivBackward0>)
    loss: tensor(0.1363, grad_fn=<DivBackward0>)
    loss: tensor(0.1057, grad_fn=<DivBackward0>)
    loss: tensor(0.1728, grad_fn=<DivBackward0>)
    loss: tensor(0.1409, grad_fn=<DivBackward0>)
    loss: tensor(0.0934, grad_fn=<DivBackward0>)
    loss: tensor(0.1380, grad_fn=<DivBackward0>)
    loss: tensor(0.0872, grad_fn=<DivBackward0>)
    loss: tensor(0.1247, grad_fn=<DivBackward0>)
    loss: tensor(0.1041, grad_fn=<DivBackward0>)
    loss: tensor(0.1018, grad_fn=<DivBackward0>)
    loss: tensor(0.0984, grad_fn=<DivBackward0>)
    loss: tensor(0.1419, grad_fn=<DivBackward0>)
    loss: tensor(0.0983, grad_fn=<DivBackward0>)
    loss: tensor(0.1308, grad_fn=<DivBackward0>)
    loss: tensor(0.0881, grad_fn=<DivBackward0>)
    loss: tensor(0.1472, grad_fn=<DivBackward0>)
    loss: tensor(0.1059, grad_fn=<DivBackward0>)
    loss: tensor(0.0981, grad_fn=<DivBackward0>)
    loss: tensor(0.1461, grad_fn=<DivBackward0>)
    loss: tensor(0.1166, grad_fn=<DivBackward0>)
    loss: tensor(0.1026, grad_fn=<DivBackward0>)
    loss: tensor(0.1240, grad_fn=<DivBackward0>)
    loss: tensor(0.1594, grad_fn=<DivBackward0>)
    loss: tensor(0.1671, grad_fn=<DivBackward0>)
    loss: tensor(0.1022, grad_fn=<DivBackward0>)
    loss: tensor(0.1244, grad_fn=<DivBackward0>)
    loss: tensor(0.0817, grad_fn=<DivBackward0>)
    loss: tensor(0.1331, grad_fn=<DivBackward0>)
    loss: tensor(0.1227, grad_fn=<DivBackward0>)
    loss: tensor(0.1398, grad_fn=<DivBackward0>)
    loss: tensor(0.1134, grad_fn=<DivBackward0>)
    loss: tensor(0.0946, grad_fn=<DivBackward0>)
    loss: tensor(0.1295, grad_fn=<DivBackward0>)
    loss: tensor(0.1223, grad_fn=<DivBackward0>)
    loss: tensor(0.1481, grad_fn=<DivBackward0>)
    loss: tensor(0.0820, grad_fn=<DivBackward0>)
    loss: tensor(0.1302, grad_fn=<DivBackward0>)
    loss: tensor(0.1110, grad_fn=<DivBackward0>)
    loss: tensor(0.1534, grad_fn=<DivBackward0>)
    loss: tensor(0.1303, grad_fn=<DivBackward0>)
    loss: tensor(0.1556, grad_fn=<DivBackward0>)
    loss: tensor(0.1260, grad_fn=<DivBackward0>)
    loss: tensor(0.1554, grad_fn=<DivBackward0>)
    loss: tensor(0.1275, grad_fn=<DivBackward0>)
    loss: tensor(0.1474, grad_fn=<DivBackward0>)
    loss: tensor(0.1332, grad_fn=<DivBackward0>)
    loss: tensor(0.1438, grad_fn=<DivBackward0>)
    loss: tensor(0.0922, grad_fn=<DivBackward0>)
    loss: tensor(0.1563, grad_fn=<DivBackward0>)
    loss: tensor(0.0848, grad_fn=<DivBackward0>)
    loss: tensor(0.1827, grad_fn=<DivBackward0>)
    loss: tensor(0.1267, grad_fn=<DivBackward0>)
    loss: tensor(0.0891, grad_fn=<DivBackward0>)
    loss: tensor(0.1346, grad_fn=<DivBackward0>)
    loss: tensor(0.1432, grad_fn=<DivBackward0>)
    loss: tensor(0.1135, grad_fn=<DivBackward0>)
    loss: tensor(0.1189, grad_fn=<DivBackward0>)
    loss: tensor(0.1405, grad_fn=<DivBackward0>)
    loss: tensor(0.1027, grad_fn=<DivBackward0>)
    loss: tensor(0.1408, grad_fn=<DivBackward0>)
    loss: tensor(0.1323, grad_fn=<DivBackward0>)
    loss: tensor(0.0716, grad_fn=<DivBackward0>)
    loss: tensor(0.1016, grad_fn=<DivBackward0>)
    loss: tensor(0.0820, grad_fn=<DivBackward0>)
    loss: tensor(0.0909, grad_fn=<DivBackward0>)
    loss: tensor(0.1668, grad_fn=<DivBackward0>)
    loss: tensor(0.1399, grad_fn=<DivBackward0>)
    loss: tensor(0.1393, grad_fn=<DivBackward0>)
    loss: tensor(0.1600, grad_fn=<DivBackward0>)
    loss: tensor(0.1099, grad_fn=<DivBackward0>)
    loss: tensor(0.1395, grad_fn=<DivBackward0>)
    loss: tensor(0.0892, grad_fn=<DivBackward0>)
    loss: tensor(0.1439, grad_fn=<DivBackward0>)
    loss: tensor(0.1229, grad_fn=<DivBackward0>)
    loss: tensor(0.1169, grad_fn=<DivBackward0>)
    loss: tensor(0.0877, grad_fn=<DivBackward0>)
    loss: tensor(0.0993, grad_fn=<DivBackward0>)
    loss: tensor(0.1103, grad_fn=<DivBackward0>)
    loss: tensor(0.1363, grad_fn=<DivBackward0>)
    loss: tensor(0.1328, grad_fn=<DivBackward0>)
    loss: tensor(0.1266, grad_fn=<DivBackward0>)
    loss: tensor(0.1317, grad_fn=<DivBackward0>)
    loss: tensor(0.1229, grad_fn=<DivBackward0>)
    loss: tensor(0.1305, grad_fn=<DivBackward0>)
    loss: tensor(0.1549, grad_fn=<DivBackward0>)
    loss: tensor(0.1409, grad_fn=<DivBackward0>)
    loss: tensor(0.0763, grad_fn=<DivBackward0>)
    loss: tensor(0.1206, grad_fn=<DivBackward0>)
    loss: tensor(0.1305, grad_fn=<DivBackward0>)
    loss: tensor(0.1194, grad_fn=<DivBackward0>)
    loss: tensor(0.1276, grad_fn=<DivBackward0>)
    loss: tensor(0.1018, grad_fn=<DivBackward0>)
    loss: tensor(0.1296, grad_fn=<DivBackward0>)
    loss: tensor(0.0985, grad_fn=<DivBackward0>)
    loss: tensor(0.1340, grad_fn=<DivBackward0>)
    loss: tensor(0.1470, grad_fn=<DivBackward0>)
    loss: tensor(0.1405, grad_fn=<DivBackward0>)
    loss: tensor(0.0994, grad_fn=<DivBackward0>)
    loss: tensor(0.1015, grad_fn=<DivBackward0>)
    loss: tensor(0.0992, grad_fn=<DivBackward0>)
    loss: tensor(0.1405, grad_fn=<DivBackward0>)
    loss: tensor(0.1188, grad_fn=<DivBackward0>)
    loss: tensor(0.1006, grad_fn=<DivBackward0>)
    loss: tensor(0.0986, grad_fn=<DivBackward0>)
    loss: tensor(0.1495, grad_fn=<DivBackward0>)
    loss: tensor(0.0879, grad_fn=<DivBackward0>)
    loss: tensor(0.0893, grad_fn=<DivBackward0>)
    loss: tensor(0.1426, grad_fn=<DivBackward0>)
    loss: tensor(0.1031, grad_fn=<DivBackward0>)
    loss: tensor(0.1198, grad_fn=<DivBackward0>)
    loss: tensor(0.1013, grad_fn=<DivBackward0>)
    loss: tensor(0.1248, grad_fn=<DivBackward0>)
    loss: tensor(0.1394, grad_fn=<DivBackward0>)
    loss: tensor(0.0883, grad_fn=<DivBackward0>)
    loss: tensor(0.1187, grad_fn=<DivBackward0>)
    loss: tensor(0.1252, grad_fn=<DivBackward0>)
    loss: tensor(0.1071, grad_fn=<DivBackward0>)
    loss: tensor(0.0908, grad_fn=<DivBackward0>)
    loss: tensor(0.1249, grad_fn=<DivBackward0>)
    loss: tensor(0.1021, grad_fn=<DivBackward0>)
    loss: tensor(0.1526, grad_fn=<DivBackward0>)
    loss: tensor(0.1087, grad_fn=<DivBackward0>)
    loss: tensor(0.1167, grad_fn=<DivBackward0>)
    loss: tensor(0.1246, grad_fn=<DivBackward0>)
    loss: tensor(0.1001, grad_fn=<DivBackward0>)
    loss: tensor(0.1299, grad_fn=<DivBackward0>)
    loss: tensor(0.1196, grad_fn=<DivBackward0>)
    loss: tensor(0.1401, grad_fn=<DivBackward0>)
    loss: tensor(0.1506, grad_fn=<DivBackward0>)
    loss: tensor(0.1291, grad_fn=<DivBackward0>)
    loss: tensor(0.1528, grad_fn=<DivBackward0>)
    loss: tensor(0.1002, grad_fn=<DivBackward0>)
    loss: tensor(0.0991, grad_fn=<DivBackward0>)
    loss: tensor(0.1428, grad_fn=<DivBackward0>)
    loss: tensor(0.1427, grad_fn=<DivBackward0>)
    loss: tensor(0.1393, grad_fn=<DivBackward0>)
    loss: tensor(0.0941, grad_fn=<DivBackward0>)
    loss: tensor(0.0983, grad_fn=<DivBackward0>)
    loss: tensor(0.1364, grad_fn=<DivBackward0>)
    loss: tensor(0.0906, grad_fn=<DivBackward0>)
    loss: tensor(0.1027, grad_fn=<DivBackward0>)
    loss: tensor(0.1611, grad_fn=<DivBackward0>)
    loss: tensor(0.1213, grad_fn=<DivBackward0>)
    loss: tensor(0.1291, grad_fn=<DivBackward0>)
    loss: tensor(0.1198, grad_fn=<DivBackward0>)
    loss: tensor(0.1137, grad_fn=<DivBackward0>)
    loss: tensor(0.1288, grad_fn=<DivBackward0>)
    loss: tensor(0.1670, grad_fn=<DivBackward0>)
    loss: tensor(0.1709, grad_fn=<DivBackward0>)
    loss: tensor(0.0820, grad_fn=<DivBackward0>)
    loss: tensor(0.1529, grad_fn=<DivBackward0>)
    loss: tensor(0.1618, grad_fn=<DivBackward0>)
    loss: tensor(0.1241, grad_fn=<DivBackward0>)
    loss: tensor(0.1838, grad_fn=<DivBackward0>)
    loss: tensor(0.1436, grad_fn=<DivBackward0>)
    loss: tensor(0.1454, grad_fn=<DivBackward0>)
    loss: tensor(0.1360, grad_fn=<DivBackward0>)
    loss: tensor(0.1255, grad_fn=<DivBackward0>)
    loss: tensor(0.1340, grad_fn=<DivBackward0>)
    loss: tensor(0.0931, grad_fn=<DivBackward0>)
    loss: tensor(0.1162, grad_fn=<DivBackward0>)
    loss: tensor(0.1203, grad_fn=<DivBackward0>)
    loss: tensor(0.0936, grad_fn=<DivBackward0>)
    loss: tensor(0.1191, grad_fn=<DivBackward0>)
    loss: tensor(0.0940, grad_fn=<DivBackward0>)
    loss: tensor(0.1294, grad_fn=<DivBackward0>)
    loss: tensor(0.1537, grad_fn=<DivBackward0>)
    loss: tensor(0.1554, grad_fn=<DivBackward0>)
    loss: tensor(0.1431, grad_fn=<DivBackward0>)
    loss: tensor(0.1258, grad_fn=<DivBackward0>)
    loss: tensor(0.1368, grad_fn=<DivBackward0>)
    loss: tensor(0.1675, grad_fn=<DivBackward0>)
    loss: tensor(0.1437, grad_fn=<DivBackward0>)
    loss: tensor(0.1025, grad_fn=<DivBackward0>)
    loss: tensor(0.0877, grad_fn=<DivBackward0>)
    loss: tensor(0.1264, grad_fn=<DivBackward0>)
    loss: tensor(0.0849, grad_fn=<DivBackward0>)
    loss: tensor(0.1031, grad_fn=<DivBackward0>)
    loss: tensor(0.1289, grad_fn=<DivBackward0>)
    loss: tensor(0.1526, grad_fn=<DivBackward0>)
    loss: tensor(0.1162, grad_fn=<DivBackward0>)
    loss: tensor(0.1554, grad_fn=<DivBackward0>)
    loss: tensor(0.0912, grad_fn=<DivBackward0>)
    loss: tensor(0.1303, grad_fn=<DivBackward0>)
    loss: tensor(0.1569, grad_fn=<DivBackward0>)
    loss: tensor(0.1328, grad_fn=<DivBackward0>)
    loss: tensor(0.0969, grad_fn=<DivBackward0>)
    loss: tensor(0.1047, grad_fn=<DivBackward0>)
    loss: tensor(0.1134, grad_fn=<DivBackward0>)
    loss: tensor(0.1477, grad_fn=<DivBackward0>)
    loss: tensor(0.1227, grad_fn=<DivBackward0>)
    

## 样本各个特征标准值与训练后的预测值对比


```python
plt.plot(samplesX[:,(0)].detach(),labelsY.detach(),"o"+"b")
plt.plot(samplesX[:,(0)].detach(),Net(W,samplesX,b).detach().numpy(),"o"+"r")
plt.show()

plt.plot(samplesX[:,(1)].detach(),labelsY.detach(),"o"+"b") 
plt.plot(samplesX[:,(1)].detach(),Net(W,samplesX,b).detach().numpy(),"o"+"r") 
plt.show()

plt.plot(samplesX[:,(2)].detach(),labelsY.detach(),"o"+"b") 
plt.plot(samplesX[:,(2)].detach(),Net(W,samplesX,b).detach().numpy(),"o"+"r") 
plt.show()
```


    
![png](/李沫《动手学深度学习》学习笔记/3.线性神经网络/3.2线性回归实现/output_26_0.png)
    



    
![png](/李沫《动手学深度学习》学习笔记/3.线性神经网络/3.2线性回归实现/output_26_1.png)
    



    
![png](/李沫《动手学深度学习》学习笔记/3.线性神经网络/3.2线性回归实现/output_26_2.png)
    

