---
title: 2_线性化_泰勒级数_泰勒公式_Linearization
date: 2026-02-25T10:36:00+08:00
tags: [控制理论, 线性化]
categories: [控制理论, 线性化]
---

## 高级控制理论数学基础学习笔记

> [2_线性化_泰勒级数_泰勒公式_Linearization————DR_CAN](https://www.bilibili.com/video/BV1Xx411M7sT)


### 2_线性化_泰勒级数_泰勒公式_Linearization

> 介绍一种通用的线性化的方法，不止局限于控制理论方面的应用。

### 线性系统

对于一个线性系统，它应该符合叠加原理。

也就是说有一个系统$\dot{x}=f(x)$,它符合

1. x1 x2是解
2. x3 = k1*x1+k2*x2 (k1,k2是常数)
3. x3是解

符合以上三点，就可以说系统是线性的。


**案例**

$\dot{\dot{x}}+2\dot{x}+\sqrt{2}x=0$ 是

$\dot{\dot{x}}+2\dot{x}+\sqrt{2}x^2=0$ 不是，因为有平方项

$\dot{\dot{x}}+\sin{\dot{x}}+\sqrt{2}x=0$ 不是，因为有sin函数



### 线性化

泰勒级数

泰勒级数的展开式

$$
f(x)=f(x_0)+\frac{f^{'}(x_0)}{1!}(x-x_0)+\frac{f^{''}(x_0)}{2!}(x-x_0)^2+...+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n
$$

$x_0$为任取的一点，而泰勒级数就是在这一点附近展开

如果x非常接近$x_0$，也就是$x-x_0\to0$，那么$(x-x_0)^2\to0$ 以及 $(x-x_0)^n\to0$就会非常小，在很多时候都可以忽略不计。

于是在x_0附近泰勒级数就等于$f(x)=f(x_0)+f^{'}(x_0)(x-x_0)$

其中f(x_0)是一个常数，令其等于k_1;f^'(x_0)也是一个常数，令其等于k_2，于是有

f(x)=k_1+k_2(x-x_0)
=k_1+k_2x-k_2x_0

其中x_0也是一个常数，所以令k_1-k_2x_0=b,于是有

f(x)=k_2x+b

这其实就是一条直线的表达式，k_2=\tan(\theta)是斜率，b是截距。

这意味着把原来的f(x)线性化成了k_2x+b的形式。

把这个过程叫做线性化

案例：

f(x)=\sin(x)

带入公式可得：
f(x)=\sin(x_0)+cos(x_0)(x-x_0)

当x=0时，f(x)=\sin(0)+cos(0)(x-0)=0+1(x-0)=x

也就是说在x=0时，sinx的线性化形式就是x

验证：

sin(\frac{\pi}{6})=\frac{1}{2}=0.5

\frac{\pi}{6}=\frac{3.14}{6}=0.52

误差=\frac{0.52-0.5}{0.5}*100%=4%


sin(\frac{\pi}{4})=0.707
\frac{\pi}{4}=\frac{3.14}{6}=0.785
误差=\frac{0.785-0.707}{0.707}*100%=11%

误差达到了11%，因为在线性化的过程中忽略了泰勒展开式中平方项以及之后的项。这只是在x和x_0非常接近时才可以这么做，**线性化是在某一点附近的线性化，而不是在整个定义域上的全局线性化。**线性化的区域越解决线性化的点，准确度就越高。


案例1：

$$
\dot{\dot{x}}+\dot{x}+\frac{1}{x}=1
$$

在平衡点附近线性化

平衡点的求法就是令所有导数项都为0

$$
\dot{\dot{x}}=\dot{x}=0 \\
=> 0 + 0 + \frac{1}{x}=1 \\
=> x=1 \\
x_0=1为平衡点 \\
$$

在x_0=1附近线性化：

$$
x_{\delta}=x_0+x_d
$$

x_d为一个比较小的值。

带入原式得：

$$
\dot{\dot{x_{\delta}}}+\dot{x_{\delta}}+\frac{1}{x_{\delta}}=1
$$

将其中非线性项$f=\frac{1}{x_{\delta}}$线性化得：

$$
f(x_\delta)=f(x_\delta)+f^{'}(x_\delta)(x-x_\delta) \\
\frac{1}{x_{\delta}}=\frac{1}{x_0}+(\frac{1}{x_\delta})^{'}(x_{\delta}-x_0) \\
\frac{1}{x_{\delta}}=\frac{1}{x_0}-\frac{1}{x_\delta^2}(x_d) \\
\frac{1}{x_{\delta}}=1-x_d \\
$$

也就是$\frac{1}{x_{\delta}}$在$x_0=1$附近的线性化形式是$1-x_d$


将x_{\delta}=x_0+x_d带入之前的式子：

$$
\dot{\dot{x_{\delta}}}+\dot{x_{\delta}}+\frac{1}{x_{\delta}}=1 \\
$$

其中
$$
\dot{\dot{x_{\delta}}}=\dot{\dot{x_0}}+\dot{\dot{x_d}}=0+\dot{\dot{x_d}}=\dot{\dot{x_d}} \\
\dot{x_{\delta}} = \dot{x_0}+\dot{x_d}=0+\dot{x_d}=\dot{x_d} \\
\frac{1}{x_{\delta}}=1-x_d \\
$$
得：
$$
\dot{\dot{x_d}}+\dot{x_d}+(1-x_d)=1 \\
\dot{\dot{x_d}}+\dot{x_d}-x_d=0 \\
$$

案例2（二维）：

考虑一般形式的非线性系统：
$$
\begin{cases}
\dot{x}_1 = f_1(x_1, x_2) \\[6pt]
\dot{x}_2 = f_2(x_1, x_2)
\end{cases}
$$

在平衡点 $(a, b)$ 处（满足所有导数项为0，即 $\dot{x}_1=f_1(a, b) = 0$, $\dot{x}_2=f_2(a, b) = 0$）进行一阶泰勒展开：
$$
\begin{cases}
\dot{x}_1 = f_1(a, b) + \frac{\partial f_1}{\partial x_1}(x_1 - a) + \frac{\partial f_1}{\partial x_2}(x_2 - b) \\[6pt]
\dot{x}_2 = f_2(a, b) + \frac{\partial f_2}{\partial x_1}(x_1 - a) + \frac{\partial f_2}{\partial x_2}(x_2 - b)
\end{cases}
$$

写成紧凑的矩阵形式：
$$
\begin{bmatrix} \dot{x}_1 \\ \dot{x}_2 \end{bmatrix}
 = \begin{bmatrix} f_1(a, b) \\ f_2(a, b) \end{bmatrix}
 + \begin{bmatrix}
     \dfrac{\partial f_1}{\partial x_1} & \dfrac{\partial f_1}{\partial x_2} \\[8pt]
     \dfrac{\partial f_2}{\partial x_1} & \dfrac{\partial f_2}{\partial x_2}
   \end{bmatrix} \Bigg|_{x_1=a, x_2=b}
   \begin{bmatrix} x_1 - a \\ x_2 - b \end{bmatrix}
$$

> 注：上面的雅可比矩阵是函数某一点上的导数，可以理解为$dy=f^{′}(x_0)dx$,只不过多变量函数的导数是偏导。

定义偏差变量（小增量）：

$$
\begin{cases}
x_1 = a + x_{1d} \\[4pt]
x_2 = b + x_{2d}
\end{cases}
\quad \text{其中 } x_{1d}, x_{2d} \text{ 为小量}
$$
相应地有：
$$
\begin{cases}
\dot{x}_1 = \dot{x}_{1d} \\[4pt]
\dot{x}_2 = \dot{x}_{2d}
\end{cases}
$$

代入矩阵方程，并利用平衡点处 $f_1(a, b)=0$, $f_2(a, b)=0$，得到线性化系统：
$$
\boxed{\;
\begin{bmatrix} \dot{x}_{1d} \\ \dot{x}_{2d} \end{bmatrix}
 = \mathbf{J}(a, b)
   \begin{bmatrix} x_{1d} \\ x_{2d} \end{bmatrix}
\;}
$$
其中雅可比矩阵 $\mathbf{J}(a, b)$ 为：
$$
\mathbf{J}(a, b) = 
\begin{bmatrix}
 \dfrac{\partial f_1}{\partial x_1} & \dfrac{\partial f_1}{\partial x_2} \\[8pt]
 \dfrac{\partial f_2}{\partial x_1} & \dfrac{\partial f_2}{\partial x_2}
\end{bmatrix} \Bigg|_{(x_1, x_2) = (a, b)}
$$

考虑二阶非线性微分方程：
$$
\ddot{x} + \dot{x} + \frac{1}{x} = 1
$$

引入状态变量 $x_1 = x$, $x_2 = \dot{x}$，即： 
$$
X=\begin{bmatrix}
    x_1 \\
    x_2
\end{bmatrix}
=\begin{bmatrix}
    x \\
    \dot{x}
\end{bmatrix}
$$

将其化为一阶系统：

$$
\begin{cases}
\dot{x}_1 = x_2 \\[6pt]
\dot{x}_2 = 1 - \dfrac{1}{x_1} - x_2
\end{cases}
$$

设平衡点为 $(x_{10}, x_{20}) = (1, 0)$，验证可知：
$$
\begin{cases}
f_1(1,0) = 0 \\[4pt]
f_2(1,0) = 1 - \dfrac{1}{1} - 0 = 0
\end{cases}
$$

计算雅可比矩阵：
$$
\mathbf{J}(x_1, x_2) = 
\begin{bmatrix}
 \dfrac{\partial f_1}{\partial x_1} & \dfrac{\partial f_1}{\partial x_2} \\[8pt]
 \dfrac{\partial f_2}{\partial x_1} & \dfrac{\partial f_2}{\partial x_2}
\end{bmatrix}
 = \begin{bmatrix}
     0 & 1 \\[6pt]
     \dfrac{1}{x_1^2} & -1
   \end{bmatrix}
$$

在平衡点 $(1, 0)$ 处：
$$
\mathbf{J}(1, 0) = 
\begin{bmatrix}
 0 & 1 \\[6pt]
 1 & -1
\end{bmatrix}
$$

因此，系统在 $(1, 0)$ 附近的线性化方程为：
$$
\begin{bmatrix} \dot{x}_{1d} \\ \dot{x}_{2d} \end{bmatrix}
 = \begin{bmatrix}
    0 & 1 \\
    1 & -1
   \end{bmatrix}
   \begin{bmatrix} x_{1d} \\ x_{2d} \end{bmatrix}
$$
其中 $x_{1d} = x_1 - 1$, $x_{2d} = x_2 - 0 = x_2$。