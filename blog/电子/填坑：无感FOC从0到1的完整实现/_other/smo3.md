# 从电机方程到滑模观测器：反电动势估计与转子位置提取详解

## 引言

在无传感器磁场定向控制（FOC）中，准确获取转子位置是实现高性能控制的关键。传统方法通常依赖位置传感器，但这会增加成本和体积。滑模观测器（SMO）作为一种鲁棒性强的状态观测器，能够从电机电压和电流中估计反电动势，进而提取转子位置。本文将详细推导从单相到三相再到两相静止坐标系的电机方程，解释反电动势包含的电角度信息，并展示如何用滑模观测器实现位置估计的完整过程。

## 1. 电机数学模型

### 1.1 单相RL电路模型

考虑一个含有反电动势的电机相绕组，其电气模型可视为一个RL电路，电压方程为：

```math
v = Ri + L\frac{di}{dt} + e
```

其中：

- $v$ 为相端电压，
- $i$ 为相电流，
- $R$ 为绕组电阻，
- $L$ 为绕组电感，
- $e$ 为反电动势，由转子永磁磁场切割定子绕组产生。

### 1.2 三相PMSM模型

对于三相永磁同步电机（PMSM），每相都有类似的方程。在三相静止坐标系（abc）下，电压方程可写为：

```math
\begin{bmatrix} v_a \\ v_b \\ v_c \end{bmatrix} = 
R_s \begin{bmatrix} i_a \\ i_b \\ i_c \end{bmatrix} + 
L_s \frac{d}{dt} \begin{bmatrix} i_a \\ i_b \\ i_c \end{bmatrix} + 
\begin{bmatrix} e_a \\ e_b \\ e_c \end{bmatrix}
```

其中 $R_s$ 为定子电阻，$L_s$ 为定子电感（假设为面贴式PMSM，电感与转子位置无关）。反电动势与转子位置相关，理想情况下为正弦形式：

```math
\begin{aligned}
e_a &= -\omega_e \psi_m \sin(\theta_e) \\
e_b &= -\omega_e \psi_m \sin(\theta_e - 2\pi/3) \\
e_c &= -\omega_e \psi_m \sin(\theta_e + 2\pi/3)
\end{aligned}
```

其中：

- $\omega_e$ 为电气角速度，
- $\psi_m$ 为永磁体磁链幅值，
- $\theta_e$ 为转子电角度。

### 1.3 克拉克变换到两相静止坐标系（α-β）

通过克拉克变换将三相变量转换为两相静止坐标系，以简化分析。变换矩阵为：

```math
\begin{bmatrix} i_\alpha \\ i_\beta \end{bmatrix} = 
\frac{2}{3} \begin{bmatrix} 
1 & -\frac{1}{2} & -\frac{1}{2} \\ 
0 & \frac{\sqrt{3}}{2} & -\frac{\sqrt{3}}{2} 
\end{bmatrix} \begin{bmatrix} i_a \\ i_b \\ i_c \end{bmatrix}
```

电压和反电动势也进行相同变换。在α-β坐标系下，电压方程变为：

```math
\begin{aligned}
u_\alpha &= R_s i_\alpha + L_s \frac{di_\alpha}{dt} + e_\alpha \\
u_\beta &= R_s i_\beta + L_s \frac{di_\beta}{dt} + e_\beta
\end{aligned}
```

其中反电动势分量为：

```math
\begin{aligned}
e_\alpha &= -\omega_e \psi_m \sin(\theta_e) \\
e_\beta &= \omega_e \psi_m \cos(\theta_e)
\end{aligned}
```

注意这里采用了常用的变换约定，使得反电动势呈现为正余弦形式。

## 2. 反电动势与电角度提取

### 2.1 反电动势中的电角度信息

观察$e_\alpha$和$e_\beta$的表达式，可以看出它们包含了转子位置信息。将两式相除：

```math
\frac{e_\alpha}{e_\beta} = \frac{-\sin(\theta_e)}{\cos(\theta_e)} = -\tan(\theta_e)
```

因此，电角度可以通过反正切函数计算：

```math
\theta_e = -\arctan\left(\frac{e_\alpha}{e_\beta}\right)
```

需要注意的是，实际应用中需使用四象限反正切函数（如`atan2`）以避免象限模糊。

### 2.2 直接计算反电动势的问题

从离散化的电压方程中直接解出反电动势理论上可行。以α轴为例，将连续方程离散化（前向欧拉法）：

```math
i_{\alpha,now} = i_{\alpha,prev} + T_s\left[ -\frac{R_s}{L_s} i_{\alpha,now} + \frac{1}{L_s}(u_\alpha - e_\alpha) \right]
```

整理得：

```math
e_\alpha = u_\alpha - R_s i_{\alpha,now} - \frac{L_s}{T_s}(i_{\alpha,now} - i_{\alpha,prev})
```

这种直接计算的方法存在两个主要问题：

1. **参数敏感性**：电阻和电感随温度、磁饱和等因素变化，导致计算误差。
2. **噪声放大**：差分项$(i_{now} - i_{prev})$相当于对测量电流进行微分，会放大传感器噪声和量化误差，产生巨大毛刺。

因此，需要一种鲁棒的方法来估计反电动势。

## 3. 滑模观测器设计

滑模观测器通过构造一个动态系统来估计状态，并利用不连续反馈迫使估计状态收敛到真实状态。

### 3.1 连续时间模型

在α-β坐标系下，将电流作为状态变量，反电动势作为未知扰动。状态方程为：

```math
\frac{d}{dt} \begin{bmatrix} i_\alpha \\ i_\beta \end{bmatrix} = 
-\frac{R_s}{L_s} \begin{bmatrix} i_\alpha \\ i_\beta \end{bmatrix} + 
\frac{1}{L_s} \left( \begin{bmatrix} u_\alpha \\ u_\beta \end{bmatrix} - \begin{bmatrix} e_\alpha \\ e_\beta \end{bmatrix} \right)
```

### 3.2 观测器结构

构建如下电流观测器：

```math
\frac{d}{dt} \begin{bmatrix} \hat{i}_\alpha \\ \hat{i}_\beta \end{bmatrix} = 
-\frac{R_s}{L_s} \begin{bmatrix} \hat{i}_\alpha \\ \hat{i}_\beta \end{bmatrix} + 
\frac{1}{L_s} \left( \begin{bmatrix} u_\alpha \\ u_\beta \end{bmatrix} - \begin{bmatrix} z_\alpha \\ z_\beta \end{bmatrix} \right)
```

其中$\hat{i}$为估计电流，$z$为滑模控制项，用于逼近真实反电动势。

定义电流误差：

```math
\begin{aligned}
i_{\alpha,err} &= \hat{i}_\alpha - i_\alpha \\
i_{\beta,err} &= \hat{i}_\beta - i_\beta
\end{aligned}
```

误差动态方程为：

```math
\frac{d}{dt} \begin{bmatrix} i_{\alpha,err} \\ i_{\beta,err} \end{bmatrix} = 
-\frac{R_s}{L_s} \begin{bmatrix} i_{\alpha,err} \\ i_{\beta,err} \end{bmatrix} + 
\frac{1}{L_s} \left( \begin{bmatrix} e_\alpha \\ e_\beta \end{bmatrix} - \begin{bmatrix} z_\alpha \\ z_\beta \end{bmatrix} \right)
```

### 3.3 滑模面与趋近律

选择滑模面为电流误差为零：

```math
s_\alpha = i_{\alpha,err} = 0, \quad s_\beta = i_{\beta,err} = 0
```

设计滑模控制项$z$迫使误差趋近于零。常用两种形式：

1. **符号函数**：$z_\alpha = h \cdot \text{sign}(i_{\alpha,err})$
2. **饱和函数**：$z_\alpha = h \cdot \text{sat}(i_{\alpha,err}, \delta)$

其中$h$为滑模增益，$\delta$为边界层厚度。饱和函数定义为：

```math
\text{sat}(x, \delta) = \begin{cases} 
1, & x > \delta \\
x/\delta, & |x| \le \delta \\
-1, & x < -\delta 
\end{cases}
```

饱和函数能减小抖振，在实际中更常用。

### 3.4 离散时间实现

采用前向欧拉法离散化观测器方程。采样周期为$T_s$，离散化后得到：

```math
\begin{aligned}
\hat{i}_{\alpha,now} &= \hat{i}_{\alpha,prev} + T_s \left[ -\frac{R_s}{L_s} \hat{i}_{\alpha,prev} + \frac{1}{L_s}(u_\alpha - z_\alpha) \right] \\
\hat{i}_{\beta,now} &= \hat{i}_{\beta,prev} + T_s \left[ -\frac{R_s}{L_s} \hat{i}_{\beta,prev} + \frac{1}{L_s}(u_\beta - z_\beta) \right]
\end{aligned}
```

在实际代码中，通常使用累加形式。定义估计电流的更新为：

```math
\begin{aligned}
\text{Est\_lalpha} &+= T_s \left( -\frac{R_s}{L_s} \cdot \text{Est\_lalpha} + \frac{1}{L_s} (U_\alpha - E_\alpha) \right) \\
\text{Est\_lbeta} &+= T_s \left( -\frac{R_s}{L_s} \cdot \text{Est\_lbeta} + \frac{1}{L_s} (U_\beta - E_\beta) \right)
\end{aligned}
```

其中$E_\alpha, E_\beta$为反电动势估计值（即滑模控制项$z$）。

电流误差为：

```math
\begin{aligned}
\text{lalpha\_Err} &= \text{Est\_lalpha} - \text{lalpha} \\
\text{lbeta\_Err} &= \text{Est\_lbeta} - \text{lbeta}
\end{aligned}
```

采用饱和函数计算反电动势估计：

```math
\begin{aligned}
E_\alpha &= h \cdot \text{sat}(\text{lalpha\_Err}, 0.5) \\
E_\beta &= h \cdot \text{sat}(\text{lbeta\_Err}, 0.5)
\end{aligned}
```

### 3.5 低通滤波与角度提取

滑模项输出含有高频开关分量，需经过低通滤波得到平滑的反电动势估计：

```math
\begin{aligned}
E_{\alpha,flt} &= 0.1 \cdot E_{\alpha,flt} + 0.9 \cdot E_\alpha \\
E_{\beta,flt} &= 0.1 \cdot E_{\beta,flt} + 0.9 \cdot E_\beta
\end{aligned}
```

滤波后，使用反正切函数提取电角度：

```math
\theta_e = -\text{atan2}(E_{\alpha,flt}, E_{\beta,flt})
```

此角度可用于速度计算和FOC闭环控制。

## 4. 代码实现

以下是滑模观测器的简化C代码实现，对应图片中的函数`SMO_position_estimate()`：

```c
// 滑模观测器参数
float Rs = 1.0;      // 定子电阻
float Ls = 0.01;     // 定子电感
float Ts = 0.0001;   // 采样周期
float h = 10.0;      // 滑模增益

// 状态变量
float Est_lalpha = 0, Est_lbeta = 0;
float Ealpha = 0, Ebeta = 0;
float Ealpha_flt = 0, Ebeta_flt = 0;

// 饱和函数
float sat(float x, float delta) {
    if (x > delta) return 1.0;
    else if (x < -delta) return -1.0;
    else return x / delta;
}

// 滑模观测器函数
void SMO_position_estimate(float Ualpha, float Ubeta, float Ialpha, float Ibeta) {
    // 观测反电动势（电流估计更新）
    Est_lalpha += Ts * (-Rs/Ls * Est_lalpha + 1/Ls * (Ualpha - Ealpha));
    Est_lbeta += Ts * (-Rs/Ls * Est_lbeta + 1/Ls * (Ubeta - Ebeta));

    // 电流误差
    float Ialpha_Err = Est_lalpha - Ialpha;
    float Ibeta_Err = Est_lbeta - Ibeta;

    // 滑模控制项（反电动势估计）
    Ealpha = h * sat(Ialpha_Err, 0.5f);
    Ebeta = h * sat(Ibeta_Err, 0.5f);

    // 低通滤波
    Ealpha_flt = 0.1f * Ealpha_flt + 0.9f * Ealpha;
    Ebeta_flt = 0.1f * Ebeta_flt + 0.9f * Ebeta;

    // 电角度计算（使用atan2，注意符号）
    float theta_e = -atan2f(Ealpha_flt, Ebeta_flt);
    // 后续可将theta_e用于速度环和电流环控制
}
```

## 5. 总结

本文从基本的电机单相方程出发，推导了三相PMSM在α-β坐标系下的模型，揭示了反电动势与转子位置的关系。针对直接计算反电动势的噪声放大问题，引入了滑模观测器进行鲁棒估计。通过设计合适的滑模面和趋近律，实现了对反电动势的准确跟踪，再经低通滤波和反正切运算提取转子位置。最后给出了简洁的代码实现，为无传感器FOC提供了一种可行的解决方案。

滑模观测器的优点在于对参数变化和扰动具有较强的鲁棒性，且实现简单。但需要注意滑模增益和边界层的选择，以平衡响应速度和抖振。在实际应用中，还需结合电机参数辨识和自适应策略以获得最佳性能。
