---
title: "8_如何在Matlab Simulink 搭建传递函数？？Transfer Function"
date: 2026-03-02T15:00:00+08:00
---

## 《高级控制理论——数学基础》学习笔记

### 8_如何在Matlab Simulink 搭建传递函数？？Transfer Function

> [《【工程数学基础】8_如何在Matlab Simulink 搭建传递函数？？Transfer Function》王天威（网名DR_CAN），博士](https://www.bilibili.com/video/BV1t4411B7UK)

---

对于这样一个传递函数的框图：

![alt text](assets/images/image-19.png)

其中输入为u(t)，输出为y(t),a_0,b_0,b_1为输入参数。

传递函数为

$$H(s)=\frac{b_0+b_1S}{a_0+S}$$


要分析和用简单的模块实现这个传递函数，首先要写出它的微分方程


$$
\frac{Y(s)}{U(s)}=\frac{b_0+b_1S}{a_0+S}
$$

移项得：

$$
(a_0+S)Y(s)=(b_0+b_1S)U(s) \\
a_0Y(s)+SY(s)=b_0U(s)+b_1SU(s)
$$

等式两边拉普拉斯逆变换，得到微分方程：

$$
 L^{-1}\{ a_0Y(s)+SY(s) \} = L^{-1}\{ b_0U(s)+b_1SU(s) \} \\
a_0y(t) + \dot{y}(t) = b_0u(t) + b_1\dot{u}(t) \\
$$

移项得：
$$
\dot{y}(t) - b_1\dot{u}(t) = b_0u(t)-a_0y(t) \\
$$

这就是这个传递函数所体现的微分方程。



在matlab中，对于积分模块\frac{1}{s},

如果输入是\dot{y},则输出为y 

如果是\dot{u},则输出为u

![alt text](assets/images/image-20.png)


如果输入是\dot{y}-b_1\dot{u},则输出为y-b_1u

![alt text](assets/images/image-21.png)

根据微分方程，$\dot{y}(t) - b_1\dot{u}(t) = b_0u(t)-a_0y(t) $ 因此

输入是b_0u(t)-a_0y(t)
输出也是y-b_1u

![alt text](assets/images/image-22.png)

这种替换是搭建simulink时，最常用的一种方法。即用b_0u(t)-a_0y(t)来描述\dot{y}(t) - b_1\dot{u}(t)，这消除了导数项。


现在的输出是y-b_1u，使用加法模块，加上b_1u即可得到输出y


![alt text](assets/images/image-23.png)


而b1u可以通过将b1和u通过相乘模块得到：

![alt text](assets/images/image-24.png)


同样的，对于b_0u(t)-a_0y(t)，

可以通过将b_0和u通过相乘模块得到b_0u(t)，

再将a_0和y(t)通过相乘模块得到a_0y(t)，

将这两者通过加减法模块得到b_0u(t)-a_0y(t)

![alt text](assets/images/image-25.png)

simulink中搭建实际的框图为：

![alt text](assets/images/image-26.png)

可以发现是等效的。


对于高阶情况，可以通过串联积分模块实现，如图，最右边是\dot{\dot{y}},进入积分器得到输出\ddot{y}，再进入积分器得到输出y

![alt text](assets/images/image-27.png)
