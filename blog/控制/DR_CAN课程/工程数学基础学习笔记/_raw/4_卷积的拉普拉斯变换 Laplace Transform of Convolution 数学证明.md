---
title: "4_卷积的拉普拉斯变换 Laplace Transform of Convolution 数学证明"
date: 2026-02-25T13:06:00+08:00
---

## 《高级控制理论——数学基础》学习笔记


### 4_卷积的拉普拉斯变换 Laplace Transform of Convolution 数学证明

> [《【工程数学基础】4_卷积的拉普拉斯变换 Laplace Transform of Convolution 数学证明》王天威（网名DR_CAN），博士](https://www.bilibili.com/video/BV1fs411p7zD)



**卷积的拉普拉斯变换证明**

这是拉普拉斯变换的一个重要性质，因为它揭示了传递函数的一个特性。

一个线性时不变系统可以用这样一个框图表示。

![alt text](assets/images/image-11.png)

其中输入是x(t)，输出是y(t)。

在控制理论中，会把它进行拉普拉斯变换，得到框图：

![alt text](assets/images/image-11.png)

其中X(s)是输入x(t)的拉普拉斯变换，Y(s)是输出y(t)的拉普拉斯变换，H(s)是系统的传递函数。并且：

$$
Y(s) = H(s)X(s)
$$

系统输入的拉普拉斯变换与系统传递函数（Transfer Function）的乘积，就是系统输出的拉普拉斯变换。

这是在频域在S域上的。

在时域上，可以查拉普拉斯变换表，对方程进行逆拉氏变换：

$$
L^{-1}\{Y(s)\} = L^{-1}\{H(s)X(s)\} \\
y(t) = h(t) * x(t)
$$

即系统输出y(t)是系统冲激响应h(t)与输入x(t)的卷积。

下面对该等式进行证明。

拉普拉斯变换的定义：

$$
X(s)=L\{x(t)\}=\int_{0}^{\infty} x(t) e^{-st} dt
$$

卷积的定义：

$$
x(t)*g(t)=\int_{0}^{t}x(\tau)g(t-\tau)d\tau
$$

需要证明：

$$
L\{x(t) * g(t)\} = X(s) * G(s)
$$

对卷积进行拉普拉斯变换：

$$
L\{x(t) * g(t)\} = \int_{0}^{\infty} [\int_{0}^{t}x(\tau)g(t-\tau)d\tau] e^{-st} dt
$$

可以发现这是一个二重积分，可以写成一般形式

$$\int\int{F(t, \tau)dA}$$

原式中是先积分d\tau,从0到t，再积分t,从0到\infty：

$$\int_0^{\infty}\int_0^{t}F(t, \tau)d\tau dt$$

变换其积分顺序，先积分t,从t=\tau到\infty，再积分\tau,从0到\infty：

$$\int_0^{\infty}\int_\tau^{t}F(t, \tau) dt d\tau$$

于是原始可以写成：

$$L\{x(t) * g(t)\}  = \int_0^{\infty}[\int_\tau^{t} x(\tau)g(t-\tau) dt ]e^{-st}  d\tau$$

对中括号部分进行换元，

令$t-\tau=u$ ,  
则$t=u+ \tau$  
且 $dt=du+d\tau=du+0=du$ （$\tau$在对t的积分内相当于常数）

换元前，积分范围 $t∈[\tau,\infty)$,  
换元后，$u=t-\tau,u∈[0,\infty)$。

所以原式可以写成：

$$
L\{x(t) * g(t)\}  
= \int_0^{\infty}[\int_0^{\infty} x(\tau)g(u) du ]e^{-s(u+\tau)}  d\tau \\
= \int_0^{\infty}[\int_0^{\infty} x(\tau)g(u) du ][e^{-su } \cdot e^{-s\tau }] d\tau \\
= \int_0^{\infty} x(\tau) e^{-s\tau } d\tau \cdot \int_0^{\infty} g(u) e^{-su } du \\
= L\{x(\tau)\}\cdot L\{g(u)\} \\
= X(s)\cdot G(s)
$$

即

$$
L\{x(t) * g(t)\}  = L\{x(\tau)\} \cdot L\{g(u)\} =  X(s)\cdot G(s)
$$