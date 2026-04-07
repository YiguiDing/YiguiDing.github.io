---
title: "6_SinX=2？复变函数 欧拉公式"
date: 2026-03-02T15:00:00+08:00
---

## 《高级控制理论——数学基础》学习笔记

### 6_`SinX=2`？复变函数 欧拉公式

> [《【工程数学基础】6_SinX=2？复变函数 欧拉公式》王天威（网名DR_CAN），博士](https://www.bilibili.com/video/BV1TW411z77n)

> 作者称没什么实际含义：“ 没含义。就是反复运用欧拉公式。 巩固记忆。”。


## 

映像中，sinx是如下图这样一个函数，函数的上下限分别为1，-1。

![alt text](assets/images/image-16.png)

但这个图形的前提是定义域为实数，x∈R。

考虑x∈C的情况，即x是复数。是否存在一个解使得sinx=2？


## 回顾复数的一些基本定义

z=a+bi

i是虚数单位，满足i=\sqrt{-1}

在图像中表达出来，横轴为实轴Re，纵轴为虚轴Im。它看起来就是一个向量的样子，横轴为a,纵轴为b.

![alt text](assets/images/image-17.png)

如果有两个复数，
Z_1=a_1+b_1i
Z_2=a_2+b_2i

那么这两个复数相等的条件Z_1=Z_2，就一定要保证
a_1=a_2
b_1=b_2


欧拉公式

e^(i\theta)=cos(\theta)+isin(\theta)

继续分析可知，两边乘上r可得

re^(i\theta)=rcos(\theta)+risin(\theta)

右边就是一个a+bi的复数形式

在图中就是一个，长度为r的向量，它的横轴也就是实部a=rcos(\theta)，纵轴也就是虚部b=risin(\theta)

![alt text](assets/images/image-18.png)

所以复数还有另一种等价于（Z=a+bi的表示方式）表达方式,就是 

Z=re^(i\theta)

其中r=\sqrt{a^2+b^2}
\theta=arctan(\frac{b}{a})


## 

回到原问题，sinx=2 如果x属于R,这是不可能的。
考虑x属于C的情况，即x是复数。

用Z=a+bi表示复数x,求解sinz=2,或者更广义的，求解sinz=C 其中C>1的实数。

首先应用欧拉公式

e^(iZ)=cos(Z)+isin(Z)      ---①

将z替换为-z得：

e^(-iZ)=cos(-Z)+isin(-Z)
=cos(Z)-isin(Z) ----②

// TODO: 补充cos(复数) sin(复数) 复平面奇偶性的证明/说明


①-②得：

e^(iZ)-e^(-iZ)=cos(Z)+isin(Z)-cos(Z)+isin(Z)=2isin(Z)

sin(Z)=\frac{e^(iZ)-e^(-iZ)}{2i}

带入原始sinz=C得

\frac{e^(iZ)-e^(-iZ)}{2i}=C

其中Z=a+bi,带入得：

\frac{e^(i(a+bi))-e^(-i(a+bi))}{2i}=C


\frac{e^(ai)e^(-b)-e^(-ai)e^(b)}{2i}=C

根据欧拉公式，其中
e^(ai)=cos(a)+isin(a)
e^(-ai)=cos(a)-isin(a)

于是

$$
\frac{(cos(a)+isin(a))e^(-b)-(cos(a)-isin(a))e^(b)}{2i}=C \\
$$

提取出e^(-b)-e^(b)得

$$
\frac{ (e^(-b)-e^(b))cos(a) + (e^(-b)+e^(b))isin(a) }{2i}=C
$$

上下同除i得


$$
\frac{1}{2}(e^(-b)-e^(b))cos(a)(-i) + \frac{1}{2}(e^(-b)+e^(b))sin(a)=C \\

\frac{1}{2}(e^(-b)+e^(b))sin(a) + \frac{1}{2}(e^(b)-e^(-b))cos(a)(i) + =C + 0i

$$

根据之前复数的一些基本知识，两复数相等， 实部相等，虚部相等。

实部=\frac{1}{2}(e^(-b)+e^(b))sin(a)=C   ---B
虚部=\frac{1}{2}(e^(b)-e^(-b))cos(a)=0   ---A

解二元方程组：

对于式A,等于0则，

(e^(b)-e^(-b))=0 => e^(b)=e^(-b) => b=0

或

cos(a)=0 => a=\frac{\pi}{2}+2k\pi


对于式B,

若b=0,则:

\frac{1}{2}(e^(-b)+e^(b))sin(a)=C 
\frac{1}{2}(1+1)sin(a)=C => 1sin(a)=C 其中a是实数，C>1,这是不存在的。


若a=\frac{\pi}{2}+2k\pi,则:

\frac{1}{2}(e^(-b)+e^(b))sin(\frac{\pi}{2}+2k\pi)=C 
\frac{1}{2}(e^(-b)+e^(b))1=C 
e^(-b)+e^(b)=2C
e^(-b)+e^(b)-2C=0

两边同乘e^b

e^b(e^(-b)+e^(b)-2C)=0 * e^b


1+e^{2b}-2Ce^b=0

令e^b=u

1+u^2-2Cu=0

u=\frac{2C\pm\sqrt{4C^2-4}}{2}
=C\pm\sqrt{C^2-1}


e^b=u=C\pm\sqrt{C^2-1}

b=ln(u)=ln(C\pm\sqrt{C^2-1})


根据

a=\frac{\pi}{2}+2k\pi
b=ln(C\pm\sqrt{C^2-1})

得到结论：

若sinZ=C C>1

则Z=a+bi
=\frac{\pi}{2}+2k\pi+ln(C\pm\sqrt{C^2-1})i


特别的，C=2,

Z=\frac{\pi}{2}+2k\pi+ln(C\pm\sqrt{3})i