## 高级控制理论数学基础

### 1_特征值与特征向量

#### 概念和定义

在数学上，特别是线性代数中，对于一个给定的线性变换A,他的特征向量v经过这个线性变换的作用后，得到的新向量仍然与原来的v保持在同一条直线上，但其长度**或**方向也许会改变。即

$$
Av=\lambda v
$$

其中$\lambda$为标量，即特征向量的长度在该线性变换下缩放的比例，称为特征值。

**案例1**

$$
A=\begin{bmatrix}
    1 & 1 \\
    4 & -2
\end{bmatrix} \\
$$

$$
v_1=\begin{bmatrix}
    1 \\
    2
\end{bmatrix}
$$

$$
Av_1=\begin{bmatrix}
    1 & 1 \\
    4 & -2
\end{bmatrix}
\begin{bmatrix}
    1 \\
    2
\end{bmatrix}
=\begin{bmatrix}
    1*1 + 1*2 \\
    4*1 + (-2)*2
\end{bmatrix}
=\begin{bmatrix}
    3 \\
    0
\end{bmatrix}
$$

新向量$Av_1$的大小和方向都发生了改变

![alt text](assets/images/image.png)


**案例2**

$$
A=\begin{bmatrix}
    1 & 1 \\
    4 & -2
\end{bmatrix} \\
$$

$$
v_2=\begin{bmatrix}
    1 \\
    1
\end{bmatrix}
$$

$$
Av_2=\begin{bmatrix}
    1 & 1 \\
    4 & -2
\end{bmatrix}
\begin{bmatrix}
    1 \\
    1
\end{bmatrix}
=\begin{bmatrix}
    1*1 + 1*1 \\
    4*1 + (-2)*1
\end{bmatrix}
=\begin{bmatrix}
    2 \\
    2
\end{bmatrix}
=2\begin{bmatrix}
    1 \\
    1
\end{bmatrix}
=2v_2
$$

新向量$Av_2$的方向不变，但大小改变了。

根据定义，可以说$v_2$是矩阵A的特征向量，$\lambda=2$是矩阵A的特征值

![alt text](assets/images/image-1.png)


#### 如何求解特征值和特征向量

根据定义

$$
Av=\lambda v
$$

可得：

$$
Av-\lambda v=0 \\
(A-\lambda I)v=0 \\
$$

其中$I$是n阶单位矩阵

根据线性代数的知识，为使得方程有非零解，行列式必须满足：

$$
|A-\lambda I|=0
$$

**案例1**

$$
A=\begin{bmatrix}
    1 & 1 \\
    4 & -2
\end{bmatrix} \\
$$

$$
A-\lambda I = \begin{bmatrix}
    1 & 1 \\
    4 & -2
\end{bmatrix} - \lambda \begin{bmatrix}
    1 & 0 \\
    0 & 1
\end{bmatrix} = \begin{bmatrix}
    1-\lambda & 1 \\
    4 & -2-\lambda
\end{bmatrix}
$$

$$
|A-\lambda I|=\begin{vmatrix}
    1-\lambda & 1 \\
    4 & -2-\lambda
\end{vmatrix}
=0 \\
$$

$$
(1-\lambda)(-2-\lambda)-1*4=0 \\
\lambda^2+\lambda-6=0 \\
(\lambda-2)(\lambda+3)=0 \\
\lambda_1=2 \\
\lambda_2=-3 \\
$$

当$\lambda_1=2$时，求对应的特征向量$v_1$

$$
(A-\lambda_1 I)v_1=0 \\
\begin{bmatrix}
    1-\lambda_1 & 1 \\
    4 & -2-\lambda_1
\end{bmatrix}v_1=0 \\
\begin{bmatrix}
    1-2 & 1 \\
    4 & -2-2
\end{bmatrix}v_1=0 \\
\begin{bmatrix}
    -1 & 1 \\
    4 & -4
\end{bmatrix}v_1=0 \\
\begin{bmatrix}
    -1 & 1 \\
    4 & -4
\end{bmatrix}\begin{bmatrix}
    v_{11} \\
    v_{12}
\end{bmatrix}=\begin{bmatrix}
    0 \\
    0
\end{bmatrix} \\
$$

解之得：

$$
-1*v_{11}+1*v_{12}=0 \\
4*v_{11}+-4*v_{12}=0 \\
v_{11} = v_{12}
$$

说明对称轴上任意一个向量都是特征向量，如
$v_1=\begin{bmatrix}
    1 \\
    1
\end{bmatrix}$

![alt text](assets/images/image-2.png)

同理当$\lambda_2=-3$时，求对应的特征向量$v_2$

$$
(A-\lambda_2 I)v_2=0 \\
\begin{bmatrix}
    1-\lambda_2 & 1 \\
    4 & -2-\lambda_2
\end{bmatrix}v_2=0 \\
\begin{bmatrix}
    1+3 & 1 \\
    4 & -2+3
\end{bmatrix}v_2=0 \\
\begin{bmatrix}
    4 & 1 \\
    4 & 1
\end{bmatrix}v_2=0 \\
\begin{bmatrix}
    4 & 1 \\
    4 & 1
\end{bmatrix}\begin{bmatrix}
    v_{21} \\
    v_{22}
\end{bmatrix}=\begin{bmatrix}
    0 \\
    0
\end{bmatrix} \\
$$

解之得：

$$
4*v_{21}+1*v_{22}=0 \\
4*v_{21}+1*v_{22}=0 \\
v_{21} = -\frac{1}{4}v_{22}
$$

说明满足上式的向量都是特征向量，如
$v_2=\begin{bmatrix}
    1 \\
    -4
\end{bmatrix}$


结论

**矩阵**
$$
A=\begin{bmatrix}
    1 & 1 \\
    4 & -2
\end{bmatrix} \\
$$

**特征值**
$$
\lambda_1=2 \\
\lambda_2=-3 \\
$$

**特征向量**
$$
v_1=\begin{bmatrix}
    1 \\
    1
\end{bmatrix} \\
v_2=\begin{bmatrix}
    1 \\
    -4
\end{bmatrix} \\
$$

#### 特征值和特征向量的应用

> 带入对角矩阵，实现解耦。

设P=[v1, v2]为过度矩阵，其中v1和v2是矩阵A的两个特征向量

$$
AP=A[v1, v2]=A\begin{bmatrix}
    v11 & v21 \\
    v12 & v22
\end{bmatrix}
=\begin{bmatrix}
    A\begin{bmatrix}
        v11 \\
        v12
    \end{bmatrix}
    A\begin{bmatrix}
        v21 \\
        v22
    \end{bmatrix}
\end{bmatrix}
$$

由于之前的推导 Av_1=\lambda_1 v_1，Av_2=\lambda_2 v_2，所以

$$
AP=\begin{bmatrix}
    \lambda_1\begin{bmatrix}
        v{11} \\
        v{12}
    \end{bmatrix}
    \lambda_2\begin{bmatrix}
        v{21} \\
        v{22}
    \end{bmatrix}
\end{bmatrix}
=\begin{bmatrix}
    \lambda_1 v_{11} & \lambda_2 v_{21} \\
    \lambda_1 v_{12} & \lambda_2 v_{22}
\end{bmatrix}
=\begin{bmatrix}
    v_{11} & v_{21} \\
    v_{12} & v_{22}
\end{bmatrix}
\begin{bmatrix}
    \lambda_1 & 0 \\
    0 & \lambda_2
\end{bmatrix}
=P
\begin{bmatrix}
    \lambda_1 & 0 \\
    0 & \lambda_2
\end{bmatrix}
$$

定义$\Lambda=\begin{bmatrix}
    \lambda_1 & 0 \\
    0 & \lambda_2
\end{bmatrix}$ 称对角矩阵，于是：

$$
AP=P\Lambda
$$

将这个矩阵左右乘上$P^{-1}$，则有：

$$
P^{-1}AP=P^{-1}P\Lambda \\
P^{-1}AP=\Lambda
$$

这是一个非常重要的结论


考虑一个微分方程组的解法，现代控制理论中，状态空间方程的表示是由一系列微分方程组成的

如

\frac{d}{dt}x_1=x_1+x_2
\frac{d}{dt}x_2=4x_1-2x_2

写成线性代数形式为：

$$
\frac{d}{dt}
\begin{bmatrix}
    x_1 \\
    x_2
\end{bmatrix}=\begin{bmatrix}
    1 & 1 \\
    4 & -2
\end{bmatrix}\begin{bmatrix}
    x_1 \\
    x_2
\end{bmatrix}
$$

写成一般形式为

$$
\dot{x}=Ax
$$

令 $x=Py$ 则 $\dot{x}=P\dot{y}$ 且 $Ax=APy$，带入原式$\dot{x}=Ax$可得：

$$
P\dot{y}=APy
$$

上式左右乘$P^{-1}$，则有：

$$
P^{-1}P\dot{y}=P^{-1}APy \\
$$

根据之前的推导 $P^{-1}AP=\Lambda$，上式可以写为：

$$
\dot{y}=\Lambda y \\
$$

这是一个非常漂亮的公式，因为它把整个系统解耦了。

而$\Lambda
=\begin{bmatrix}
    \lambda_1 & 0 \\
    0 & \lambda_2
\end{bmatrix}
=\begin{bmatrix}
    2 & 0 \\
    0 & -3
\end{bmatrix}$
所有可以得到

$$
\dot{y}=\Lambda y
=\begin{bmatrix}
    2 & 0 \\
    0 & -3
\end{bmatrix}
\begin{bmatrix}
    y_1 \\
    y_2
\end{bmatrix} \\

\dot{y_1}=2y_1 \\
\dot{y_2}=-3y_2
$$
所以 

$$
y_1=c_1e^{2t} \\
y_2=c_2e^{-3t}
$$


有了$y_1$ 和 $y_2$，我们可以通过 $x=Py$ 计算 $x$。


$$
x=Py=\begin{bmatrix}
v11 & v21 \\
v12 & v22
\end{bmatrix}
\begin{bmatrix}
y_1 \\
y_2
\end{bmatrix}
=\begin{bmatrix}
1 & 1 \\
1 & -4
\end{bmatrix}
\begin{bmatrix}
c_1e^{2t} \\
c_2e^{-3t}
\end{bmatrix}
=\begin{bmatrix}
    c_1e^{2t}+c_2e^{-3t} \\
    c_1e^{2t}-4c_2e^{-3t}
\end{bmatrix}
$$

这就是用特征值与特征向量来解微分方程组的方法


#### 总结

1. 特征值与特征向量的定义：Av=\lambda v,变换后的向量v与原向量在一条直线上。
2. 求解方法，利用行列式|A-\lambda I|=0 来求解特征值\lambda，在把特征值带入(A-\lambda I)v=0 中求解特征向量v。
3. P^{-1}AP=\Lambda，其中P=[v1,v2,...]是过度矩阵,由特征向量组成，\Lambda=\begin{bmatrix}
    \lambda_1 & 0 \\
    0 & \lambda_2
\end{bmatrix}是对角矩阵,由多个特征值组成。
4. 应用，解微分方程组，\dot{x}=Ax,令x=Py,得到\dot{y}=\Lambda y,可以反过来求得x,这是非常重要的应用，在很多时候，并不需要解出微分方程，而是直接根据符号和性质判断整个系统的稳定性和表现。