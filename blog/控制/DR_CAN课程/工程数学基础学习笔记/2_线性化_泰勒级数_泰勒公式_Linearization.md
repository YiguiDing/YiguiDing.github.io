---
title: 泰勒一阶线性化、动态系统在平衡点附近的扰动分析
date: 2026-02-25T10:36:00+08:00
tags: [控制理论, 线性化]
categories: [控制理论, 线性化]
article: false 
index: true
---

## 《高级控制理论——数学基础》学习笔记

## 2_线性化_泰勒级数_泰勒公式_Linearization

> - [《【工程数学基础】2_线性化_泰勒级数_泰勒公式_Linearization》王天威（网名DR_CAN），博士](https://www.bilibili.com/video/BV1Xx411M7sT)
> - 介绍一种通用的线性化方法，不仅限于控制理论方面的应用。

---

## 一、线性系统

对于一个线性系统，它应该符合**叠加原理**。

即对于系统 $\dot{x}=f(x)$，满足：

1. $x_1, x_2$ 是解
2. $x_3 = k_1x_1 + k_2x_2$ （其中 $k_1, k_2$ 为常数）
3. $x_3$ 也是解

符合以上三点，就可以说系统是线性的。

---

### 示例

| 方程 | 是否为线性系统 | 原因 |
|------|--------------|------|
| $\ddot{x} + 2\dot{x} + \sqrt{2}x = 0$ | ✅ 是 | 所有项都是线性的 |
| $\ddot{x} + 2\dot{x} + \sqrt{2}x^2 = 0$ | ❌ 否 | 含有 $x^2$ 平方项 |
| $\ddot{x} + \sin(\dot{x}) + \sqrt{2}x = 0$ | ❌ 否 | 含有 $\sin$ 非线性函数 |

---

## 二、线性化方法

### 2.1 泰勒级数基础

泰勒级数展开式：

$$
f(x) = f(x_0) + \frac{f'(x_0)}{1!}(x-x_0) + \frac{f''(x_0)}{2!}(x-x_0)^2 + \cdots + \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n
$$

其中 $x_0$ 为展开点，泰勒级数在这一点附近展开。

---

### 2.2 一阶线性化原理

**关键思想**：当 $x$ 非常接近 $x_0$ 时（即 $x - x_0 \to 0$），高阶项 $(x-x_0)^n$ 非常小，可以忽略不计。

因此在 $x_0$ 附近，泰勒级数简化为：

$$
\boxed{f(x) \approx f(x_0) + f'(x_0)(x - x_0)}
$$

> 这是泰勒展开的**一阶近似**。

---

### 2.3 线性化的几何意义

令其中的常数项 $f(x_0) = k_1$，$f'(x_0) = k_2$，则有：

$$
\begin{aligned}
f(x) &= k_1 + k_2(x - x_0) \\
     &= k_1 + k_2x - k_2x_0 \\
     &= k_2x + (k_1 - k_2x_0) \\
     &= k_2x + b
\end{aligned}
$$

其中 $k_2 = \tan\theta$ 为斜率，$b = k_1 - k_2x_0$ 为截距。

**结论**：通过泰勒一阶展开，将非线性函数 $f(x)$ 在 $x_0$ 附近用直线 $y = k_2x + b$ 近似。

---

### 2.4 单变量线性化示例：$\sin x$

**问题**：在 $x_0 = 0$ 附近将 $f(x) = \sin x$ 线性化。

**求解**：

$$
\begin{aligned}
f(x) &= f(x_0) + f'(x_0)(x - x_0) \\
\sin x &= \sin 0 + \cos 0 \cdot (x - 0) \\
       &= 0 + 1 \cdot x \\
       &= x
\end{aligned}
$$

因此，在 $x = 0$ 附近，$\sin x$ 的线性化形式为 $\boxed{x}$。

---

#### 验证与误差分析

| $x$ | $\sin x$（精确值） | 线性化 $x$ | 相对误差 |
|-----|-------------------|------------|----------|
| $\frac{\pi}{6} \approx 0.52$ | $0.5$ | $0.52$ | $\frac{0.52-0.5}{0.5} \times 100\% = 4\%$ |
| $\frac{\pi}{4} \approx 0.79$ | $0.707$ | $0.79$ | $\frac{0.79-0.707}{0.707} \times 100\% \approx 11\%$ |

> **重要结论**：
> - 线性化是在**某一点附近**的局部近似，不是全局近似
> - 越接近展开点，误差越小
> - 误差来源：忽略了泰勒展开中的二阶及高阶项

---

## 三、微分方程的线性化

### 3.1 一阶系统线性化示例

**问题**：在平衡点附近线性化以下非线性微分方程

$$
\ddot{x} + \dot{x} + \frac{1}{x} = 1
$$

---

#### 步骤1：求平衡点

平衡点的定义：所有导数项为 0 的点。

$$
\begin{aligned}
\ddot{x} &= 0, \quad \dot{x} = 0 \\
\Rightarrow \quad 0 + 0 + \frac{1}{x} &= 1 \\
\Rightarrow \quad x_0 &= 1
\end{aligned}
$$

因此平衡点为 $x_0 = 1$。

---

#### 步骤2：引入小偏差变量

令 $x = x_0 + x_d$，其中 $x_d$ 为小偏差量。

相应地：

$$
\dot{x} = \dot{x}_0 + \dot{x}_d = \dot{x}_d \\
\ddot{x} = \ddot{x}_0 + \ddot{x}_d = \ddot{x}_d
$$

---

#### 步骤3：对非线性项进行线性化

非线性项 $f(x) = \frac{1}{x}$ 在 $x_0 = 1$ 附近展开：

$$
\begin{aligned}
\frac{1}{x} &= f(x_0) + f'(x_0)(x - x_0) \\
          &= \frac{1}{x_0} + \left(\frac{1}{x}\right)' \Bigg|_{x=x_0} (x - x_0) \\
          &= \frac{1}{x_0} - \frac{1}{x_0^2} \cdot x_d \\
          &= 1 - x_d
\end{aligned}
$$

---

#### 步骤4：代入原方程得到线性化方程

将各变量代入原方程：

$$
\begin{aligned}
\ddot{x}_d + \dot{x}_d + (1 - x_d) &= 1 \\
\ddot{x}_d + \dot{x}_d - x_d &= 0
\end{aligned}
$$

上式即为非线性微分方程在**平衡点附近**的线性化方程。

---

### 3.2 多维系统线性化

#### 一般形式

考虑二维非线性系统：

$$
\begin{cases}
\dot{x}_1 = f_1(x_1, x_2) \\[6pt]
\dot{x}_2 = f_2(x_1, x_2)
\end{cases}
$$

---

#### 步骤1：确定平衡点

平衡点 $(a, b)$ 满足 $f_1(a, b) = 0$ 且 $f_2(a, b) = 0$。

---

#### 步骤2：一阶泰勒展开

在平衡点处展开，得到：

$$
\begin{cases}
\dot{x}_1 = f_1(a, b) + \frac{\partial f_1}{\partial x_1}(x_1 - a) + \frac{\partial f_1}{\partial x_2}(x_2 - b) \\[8pt]
\dot{x}_2 = f_2(a, b) + \frac{\partial f_2}{\partial x_1}(x_1 - a) + \frac{\partial f_2}{\partial x_2}(x_2 - b)
\end{cases}
$$

写成矩阵形式：

$$
\begin{bmatrix} \dot{x}_1 \\ \dot{x}_2 \end{bmatrix}
 = \begin{bmatrix} f_1(a, b) \\ f_2(a, b) \end{bmatrix}
 + \underbrace{\begin{bmatrix}
     \dfrac{\partial f_1}{\partial x_1} & \dfrac{\partial f_1}{\partial x_2} \\[8pt]
     \dfrac{\partial f_2}{\partial x_1} & \dfrac{\partial f_2}{\partial x_2}
   \end{bmatrix}}_{\displaystyle \text{雅可比矩阵 } \mathbf{J}(a,b)}
   \Bigg|_{x_1=a, x_2=b}
   \begin{bmatrix} x_1 - a \\ x_2 - b \end{bmatrix}
$$

> **雅可比矩阵**：多变量函数在某点的"导数"，是单变量函数 $dy = f'(x_0)dx$ 的推广，只不过用偏导替代了导数。

---

#### 步骤3：引入偏差变量并得到线性化方程

定义偏差变量（小增量）：

$$
\begin{cases}
x_1 = a + x_{1d} \\[4pt]
x_2 = b + x_{2d}
\end{cases}
\quad \Rightarrow \quad
\begin{cases}
x_1 - a = x_{1d} \\[4pt]
x_2 - b = x_{2d}
\end{cases}
$$

相应地，导数关系为：

$$
\begin{cases}
\dot{x}_1 = \dot{x}_{1d} \\[4pt]
\dot{x}_2 = \dot{x}_{2d}
\end{cases}
$$

将偏差变量代入泰勒展开式，并利用平衡点条件 $f_1(a, b) = f_2(a, b) = 0$，消去常数项，得到线性化系统：

$$
\boxed{\;
\begin{bmatrix}
   \dot{x}_{1d} \\
   \dot{x}_{2d}
\end{bmatrix}
=\mathbf{J}(a, b)
\begin{bmatrix}
     x_{1d} \\ 
     x_{2d}
 \end{bmatrix}
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

---

### 3.3 二阶系统状态空间线性化示例

**问题**：将以下二阶非线性方程在平衡点附近线性化

$$
\ddot{x} + \dot{x} + \frac{1}{x} = 1
$$

---

#### 步骤1：转换为一阶状态空间形式

引入状态变量 $x_1 = x$，$x_2 = \dot{x}$，则：

$$
\mathbf{X} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} x \\ \dot{x} \end{bmatrix}
$$

转换为状态方程：

$$
\begin{cases}
\dot{x}_1 = x_2 \\[6pt]
\dot{x}_2 = 1 - \dfrac{1}{x_1} - x_2
\end{cases}
$$

---

#### 步骤2：求平衡点

根据平衡点的定义可得：$\dot{x}_1 = 0$ 且 $\dot{x}_2 = 0$。

$$
\begin{cases}
\dot{x}_1 = x_{20} = 0 \\[6pt]
\dot{x}_2 = 1 - \dfrac{1}{x_{10}} - x_{20} = 0
\end{cases}
$$

代入 $x_{20} = 0$：

$$
1 - \dfrac{1}{x_{10}} = 0 \quad \Rightarrow \quad x_{10} = 1
$$

因此平衡点为 $(x_{10}, x_{20}) = (1, 0)$。

---

#### 步骤3：计算雅可比矩阵

雅可比矩阵的定义：

$$
\mathbf{J}(x_1, x_2) =
\begin{bmatrix}
 \dfrac{\partial f_1}{\partial x_1} & \dfrac{\partial f_1}{\partial x_2} \\[8pt]
 \dfrac{\partial f_2}{\partial x_1} & \dfrac{\partial f_2}{\partial x_2}
\end{bmatrix}
$$

逐项计算偏导数：

对于 $f_1(x_1, x_2) = x_2$：

$$
\begin{aligned}
\dfrac{\partial f_1}{\partial x_1} &= \dfrac{\partial}{\partial x_1}(x_2) = 0 \\[6pt]
\dfrac{\partial f_1}{\partial x_2} &= \dfrac{\partial}{\partial x_2}(x_2) = 1
\end{aligned}
$$

对于 $f_2(x_1, x_2) = 1 - \dfrac{1}{x_1} - x_2$：

$$
\begin{aligned}
\dfrac{\partial f_2}{\partial x_1} &= \dfrac{\partial}{\partial x_1}\left(1 - \dfrac{1}{x_1} - x_2\right) = \dfrac{1}{x_1^2} \\[6pt]
\dfrac{\partial f_2}{\partial x_2} &= \dfrac{\partial}{\partial x_2}\left(1 - \dfrac{1}{x_1} - x_2\right) = -1
\end{aligned}
$$

因此雅可比矩阵为：

$$
\mathbf{J}(x_1, x_2) = \begin{bmatrix}
     0 & 1 \\[6pt]
     \dfrac{1}{x_1^2} & -1
   \end{bmatrix}
$$

在平衡点 $(1, 0)$ 处：

$$
\mathbf{J}(1, 0) = \begin{bmatrix} 0 & 1 \\ 1 & -1 \end{bmatrix}
$$

---

#### 步骤4：得到线性化方程

$$
\boxed{\;
\begin{bmatrix} \dot{x}_{1d} \\ \dot{x}_{2d} \end{bmatrix}
 = \begin{bmatrix} 0 & 1 \\ 1 & -1 \end{bmatrix}
   \begin{bmatrix} x_{1d} \\ x_{2d} \end{bmatrix}
\;}
$$

其中 $x_{1d} = x_1 - 1$，$x_{2d} = x_2$。该方程即为非线性系统在**平衡点 $(1, 0)$ 附近**的线性化方程。

---

## 四、为什么微分方程线性化要引入偏差变量？

### 两种线性化场景的对比

| 场景 | 示例 | 目的 | 是否需要偏差变量 |
|------|------|------|-----------------|
| 函数近似 | $\sin x \approx x$ | 简化计算，方便分析 | ❌ 不需要 |
| 平衡点分析 | $\ddot{x} + \dot{x} + \frac{1}{x} = 1$ | **分析系统受到小扰动后的稳定性** | ✅ 需要 |

---

### 偏差变量引入的逻辑

**分析目标**：研究系统在平衡点附近受到小扰动后的响应

```
平衡点 x₀ ────────► 小扰动 ────────► 演化行为
   (稳定状态)          x_d           (稳定/不稳定？)
```

**数学实现**：

1. 定义偏差：$x_d = x - x_0$（$x_d$ 表示偏离平衡点的扰动量）
2. 泰勒线性化：$\frac{1}{x} = \frac{1}{x_0} - \frac{1}{x_0^2}x_d$
3. 消去常数项：平衡点处满足原方程，常数项自然消去
4. 得到齐次线性方程：$\ddot{x}_d + \dot{x}_d - x_d = 0$

---

### 关键点

- **偏差变量 $x_d$**：直接代表"扰动量"，其导数 $\dot{x}_d, \ddot{x}_d$ 表示扰动的变化率
- **线性化方程**：描述的是"扰动如何演化"，而非"绝对位置如何变化"
- **物理意义**：通过分析 $x_d$ 的解（衰减/发散/振荡）判断平衡点的稳定性

> **本质区别**：函数线性化是"数学近似"，平衡点线性化是"稳定性分析"。偏差变量是稳定性分析的工具。

---

## 五、总结

| 要点           | 内容                                                                  |
| -------------- | --------------------------------------------------------------------- |
| **函数线性化** | $f(x) \approx f(x_0) + f'(x_0)(x-x_0)$，一阶泰勒展开                |
| **平衡点**     | 所有导数项为 0 的点，$f_1(x_0) = f_2(x_0) = 0$                      |
| **偏差变量**   | $x_d = x - x_0$，表示偏离平衡点的扰动量，用于稳定性分析              |
| **雅可比矩阵** | $\mathbf{J}(x) = \begin{bmatrix} \frac{\partial f_i}{\partial x_j} \end{bmatrix}$，多变量系统的"导数" |
| **线性化方程** | $\dot{x}_d = \mathbf{J}x_d$，描述扰动在平衡点附近的演化              |
| **核心应用**   | 通过分析 $x_d$ 的解（衰减/发散）判断系统在平衡点附近的稳定性        |
| **两种场景**   | 函数近似（数学计算）vs 平衡点分析（稳定性研究）                      |