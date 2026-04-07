---
title: "3_变声的基础原理_理解卷积的含义_线性时不变系统的冲激响应与卷积"
date: 2026-02-25T13:06:00+08:00
---

## 《高级控制理论——数学基础》学习笔记


### 3_变声的基础原理_理解卷积的含义_线性时不变系统的冲激响应与卷积

> [《【工程数学基础】3_变声的基础原理_理解卷积的含义_线性时不变系统的冲激响应与卷积》（DR_CAN）](https://www.bilibili.com/video/BV1cs411W74f)

#### 线性时不变系统（Linear Time-Invariant System）

**线性**

用O{.}表示一个运算符，对于一个系统，输入为f(t)，输出为x(t)，也就是 O{f(t)}=x(t)

线性性质则应该满足: 
- $O\{f_1(t)+f_2(t)\}=O\{f_1(t)\}+O\{f_2(t)\}=x_1(t)+x_2(t)$
- $O\{af_1(t)\}=aO\{f_1(t)\}=ax_1(t)$

结合上面两个性质，有：

$O\{a_1f_1(t)+a_2f_2(t)\}=a_1O\{f_1(t)\}+a_2O\{f_2(t)\}=a_1x_1(t)+a_2x_2(t)$

这个性质也叫叠加原理。


**时不变**

所谓时不变，就是如果这个系统存在 $O\{f(t)\}=x(t)$ ，那么对于一个时间上的平移，$O\{f(t-\tau)\}=x(t-\tau)$,也就是说，不管什么时间点，当你对这个系统施加同样的输入时，输出都是相同的。

**案例**

线性弹簧震动阻尼系统就是一个线性时不变系统。

以欠阻尼系统为例：

![alt text](assets/images/image-3.png)

施加的外力为系统的输入f(t), 位移为系统的输出x(t)。 

施加一个短暂的作用力，系统的响应将会震荡最后因阻尼而衰减为零。

![alt text](assets/images/image-4.png)

用传递函数的框图表示：

![alt text](assets/images/image-5.png)

可以写成：F(s)H(s)=X(s)

其中F(s)为输入函数的拉普拉斯变换，H(s)为系统的传递函数，X(s)为输出函数的拉普拉斯变换。

根据传递函数与卷积关系推导的相关结论，即对传递函数系统方程进行拉普拉斯逆变换 $L^{-1}[F(s)H(s)]= L^{-1}[X(s)]$ ，可以得到关系：f(t)*h(t)=x(t)

这意味着对于一个线性时不变系统，输出响应x(t)等于输入f(t)与传递函数的拉普拉斯逆变换H(t)的卷积。

**卷积的理解**

> 这部分内容可以参考之前《电路原理————求解任意激励下的时域分析》的笔记，其中也是先计算出电路的冲激响应，然后与激励信号进行卷积求解。

直观理解，比如系统的输入f(t)如图所示是一个连续函数，将其想象成若干个离散的输入，为简便这里分成3块，每块的时间间隔为 $\Delta T$，物理含义为在$t=i*\Delta T$ 时刻，对系统施加的外力为 $f(i*\Delta T)$，每个离散输入的作用时间为 $\Delta T$，也就是一个矩形函数,这个矩形函数的面积为$A=f(i*\Delta T)*\Delta T$

想象这三个离散的输入对系统的作用都是独立的，那么如图，离散输入函数矩形1的响应为x_1(t)，离散输入函数矩形2的响应为x_2(t),且由于矩形2比矩形1高一些，时间延后一些，响应为x_2(t)赋值也会大一些，时间延后一些，以此类推，离散输入矩形函数3的响应为x_3(t)，那么系统任意时刻的输出x(t)就是这三个响应的叠加求和（叠加原理）。
当时间间隔\Delta划分的越来越小,这种求和就变成了积分;\Delta->0 lim_\Delta->0  ∑ => ∫

![alt text](assets/images/image-6.png)

数学理解

单位冲击函数/狄拉克函数（unit Impulse function/Dirac delta function）

$$
\delta(t)=\begin{cases}
    0, & t \lt 0 \\
    \to +\infty, & t\to0 \\
    0, & t \gt 0
\end{cases} \\

\int \delta(t) = 1
$$

即宽度为0，面积为1。

这是一个纯数学上的函数。

构造一个辅助函数（单位脉冲函数）方便理解：

$$
\delta_\Delta(t)=\begin{cases}
    \frac{1}{\Delta T}, & 0<t<\Delta T \\
    0, & \text{otherwise}
\end{cases} \\
$$

如图函数的面积为$A=\frac{1}{\Delta T}\Delta T=1$
![alt text](assets/images/image-7.png)


令\Delta T \to 0,则，则这个辅助函数的极限就是\delta(t)：

$$
\lim_{\Delta T \to 0} \int \delta_\Delta(t) = \delta(t)
$$


对于这个弹簧系统施加一个单位脉冲函数\delta_\Delta(t)的作用，系统的响应如图记作h_\Delta(t)

![alt text](assets/images/image-8.png)

将系统输入延迟i\Delta t，系统的响应也将延迟i\Delta t

![alt text](assets/images/image-9.png)

绘制表格：

系统输入 系统响应

\delta_\Delta(t) h_\Delta(t)
\delta_\Delta(t-i\Delta T) | h_\Delta(t-i\Delta T)  | 由于系统是线性的，将系统输入延迟i\Delta T，系统的响应也将延迟i\Delta T
A\delta_\Delta(t-i\Delta T) | Ah_\Delta(t-i\Delta T) | 同样，系统是线性的，将系统输入放大A倍，系统的响应也将放大A倍
\Delta Tf(i*\Delta T)\delta_\Delta(t-i\Delta T) | \Delta Tf(i*\Delta T)h_\Delta(t-i\Delta T) | 根据之前关于函数离散后矩形面积$A=f(i*\Delta T)*\Delta T$ 这就把系统的输入f(t)和响应的关系联系了起来。他表示系统的输入是f(i*\Delta T)，响应是\Delta Tf(i*\Delta T)h_\Delta(t-i\Delta T)



根据叠加原理，把某一时刻之前的所有响应叠加起来，就是系统的在这一时刻的响应：

$$
t=i*\Delta T  \\

x(t)=\sum_{i=0}^{t} \Delta Tf(i*\Delta T)h_\Delta(t-i\Delta T)

$$
当\Delta T \to 0, 其中\lim h_\Delta  = \delta(t) ； \lim \Delta T = d\tau ; \lim i\Delta T =\tau

这个求和就变成了积分： 

$$
x(t)=\int_{0}^{t} f(\tau)h(t-\tau)d\tau \\
= f(t)*h(t)
$$


可以看出，线性时不变系统的冲击响应可以完全定义一个系统。这也是为什么把传递函数写成H(s)的原因。

这个特性也可以从另一个角度来验证，对冲击响应做拉普拉斯变换可得$L[\delta(t)]=1$，输入是1，输出是h(s)，传递函数自然就是H(s): $L[h(s)]=H(s)$ $1*H(s)=H(s)$

![alt text](assets/images/image-10.png)

变声的基础原理

从上面的式子可以看出，如果能够得到第一个系统的冲击响应，那么就可以把它和任意的输入做卷积，就能得到这个系统的输出。

比如，在浴室，用饭勺和擀面杖猛烈敲击，时间短力量大，发出的声音就是这个空间的单位冲击响应。

录制一段人声,将人声和单位冲击响应进行卷积，得到的结果就是人在浴室说话的声音。
