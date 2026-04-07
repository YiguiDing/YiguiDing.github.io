好的，没问题。本文将基于您提供的技术资料，以技术博客的形式，为您系统性地推导从永磁同步电机的反电动势模型，到滑模观测器（SMO）的完整数学原理与代码实现。

---

### **从电机本质到代码实现：滑模观测器（SMO）位置估计全推导**

在无刷直流电机（BLDC）和永磁同步电机（PMSM）的高性能矢量控制（FOC）中，获取精准的转子位置（电角度 \(\theta\) ）是实现闭环控制的关键。对于无传感器控制，其核心思想是从我们能够直接测量的定子电压和电流中，“观测”出隐含转子位置信息的物理量——反电动势。

本文将带你一步步推导，从最基础的物理方程开始，一直到最终在微控制器中运行的滑模观测器（Sliding Mode Observer， SMO）C语言代码。

#### **第一章：一切的起点——反电动势与电角度**

为什么反电动势里含有转子的位置信息？

考虑一个理想化的永磁体转子。当它旋转时，其磁场会在静止的定子绕组中切割磁感线，从而产生感应电动势。这个电动势与转子磁链的强度 \(\psi_f\) 和旋转的角速度 \(\omega_e\) 成正比，而其 **相位** 则与转子的空间位置 **直接相关**。

在数学上，三相绕组的反电动势可以表示为：

\[
\begin{aligned}
e_a &= -\omega_e \psi_f \sin(\theta) \\
e_b &= -\omega_e \psi_f \sin(\theta - \frac{2\pi}{3}) \\
e_c &= -\omega_e \psi_f \sin(\theta + \frac{2\pi}{3})
\end{aligned}
\]

其中，\(\theta\) 就是我们最终要求解的电角度。可以看到，反电动势 \(e_a, e_b, e_c\) 是电角度 \(\theta\) 的正弦函数。因此，**只要能准确地观测出反电动势的波形，我们就能通过三角函数（如反正切）解算出转子的瞬时位置**。

#### **第二章：建立数学模型——从三相到两相静止坐标系**

直接处理三相变量较为复杂。我们通过 **Clarke变换** 将其从三相静止坐标系 \((a, b, c)\) 转换到两相静止坐标系 \((\alpha, \beta)\)。这个变换简化了系统，将三相正弦量变为两个相位差90度的正弦量。

变换后的PMSM在两相静止坐标系下的电压方程为：

\[
\begin{aligned}
u_\alpha &= R_s i_\alpha + L_s \frac{di_\alpha}{dt} + e_\alpha \\
u_\beta &= R_s i_\beta + L_s \frac{di_\beta}{dt} + e_\beta
\end{aligned}
\]

其中：
- \(u_\alpha, u_\beta\)： 定子电压在 \(\alpha\beta\) 轴的分量（控制量，已知）。
- \(i_\alpha, i_\beta\)： 定子电流在 \(\alpha\beta\) 轴的分量（可通过传感器测量得到）。
- \(R_s, L_s\)： 定子电阻和电感（电机参数，可近似认为已知）。
- \(e_\alpha, e_\beta\)： 扩展反电动势在 \(\alpha\beta\) 轴的分量（**包含了位置信息的未知量，是我们的观测目标**）。

并且，反电动势与转子位置的关系可以表示为：
\[
\begin{bmatrix} e_\alpha \\ e_\beta \end{bmatrix} = \omega_e \psi_f \begin{bmatrix} -\sin\theta \\ \cos\theta \end{bmatrix}
\]

我们的目标，就是从已知的 \(u_{\alpha\beta}\)、测得的 \(i_{\alpha\beta}\) 和已知的 \(R_s, L_s\) 中，把 \(e_{\alpha\beta}\) “挖”出来。

#### **第三章：一个朴素的想法及其困境**

观察电压方程，似乎可以直接解出反电动势：
\[
e_\alpha = u_\alpha - R_s i_\alpha - L_s \frac{di_\alpha}{dt}
\]

问题就出在微分项 \(\frac{di_\alpha}{dt}\) 上。在离散的数字系统中，我们只能用差分来近似微分：
\[
\frac{di_\alpha}{dt} \approx \frac{i_\alpha(k) - i_\alpha(k-1)}{T_s}
\]
其中 \(T_s\) 为控制周期。

如您图6所示，这会带来两个严重问题：
1.  **放大噪声**：电流传感器测量值 \(i_\alpha\) 本身存在毛刺（噪声），微分运算会显著放大这些高频噪声。
2.  **参数敏感**：公式中的 \(R_s\) 和 \(L_s\) 会随着电机温度、磁饱和程度而变化，直接代入固定参数计算会导致结果不准确。

因此，直接计算得到的 \(e_\alpha\) 会包含巨大的噪声和误差，无法用于高精度的角度计算。

#### **第四章：滑模观测器的核心思想——构建“跟随器”**

既然直接计算行不通，滑模观测器换了一个巧妙的思路：**构建一个虚拟的“电流观测器”**。

我们复制一份电机的数学模型，但用 **估计的反电动势 \(\hat{e}_\alpha, \hat{e}_\beta\)** 代替真实值：
\[
\frac{d\hat{i}_\alpha}{dt} = -\frac{R_s}{L_s} \hat{i}_\alpha + \frac{1}{L_s}(u_\alpha - \hat{e}_\alpha)
\]
将其离散化（采用前向欧拉法）：
\[
\hat{i}_\alpha(k) = \hat{i}_\alpha(k-1) + T_s \left[ -\frac{R_s}{L_s} \hat{i}_\alpha(k) + \frac{1}{L_s}(u_\alpha(k-1) - \hat{e}_\alpha(k-1)) \right]
\]
这就是您图中反复出现的 **“预测电流”** 公式。注意，这里的 \(\hat{i}_\alpha(k)\) 和 \(\hat{e}_\alpha(k-1)\) 都是我们内部的估计值。

现在，**关键的一步**来了：我们将这个观测器预测出的电流 \(\hat{i}_\alpha\)， 与实际测量得到的电流 \(i_\alpha\) 进行比较，得到电流误差：
\[
i_{\alpha\_err} = \hat{i}_\alpha - i_\alpha
\]

滑模观测器的核心控制律（滑模趋近律）是：**根据这个误差的符号（或大小），来动态调整我们估计的反电动势 \(\hat{e}_\alpha\)， 迫使预测电流 \(\hat{i}_\alpha\) 去“跟随”真实的测量电流 \(i_\alpha\)**。

从物理上理解（如图3， 图7）：
- 如果 \(\hat{i}_\alpha\) 和 \(i_\alpha\) 完全相等，说明我们假定的 \(\hat{e}_\alpha\) 是准确的。
- 如果不相等，说明 \(\hat{e}_\alpha\) 不准确，需要立刻调整它，使系统向“误差为零”的状态收敛。

这个“误差为零”的状态，在控制理论中称为 **滑模面**（如图8）。滑模观测器就像一个高增益的非线性反馈控制器，其目标是使系统状态（电流误差）始终保持在滑模面 \(i_{\alpha\_err}=0\) 上滑动。

#### **第五章：滑模控制律的设计——从符号函数到饱和函数**

最简单的调整策略是 **符号函数（sign）**：
\[
\hat{e}_\alpha = h \cdot \text{sign}(i_{\alpha\_err})
\]
其中 \(h\) 是滑模增益（一个常数）。这意味着一旦有误差，无论大小，\(\hat{e}_\alpha\) 都会以最大步长 \(h\) 或 \(-h\) 进行调整。这会引起严重的 **抖振**（Chattering），如图10所示。

为了抑制抖振，工业上普遍采用 **饱和函数（sat）** 来代替符号函数（如图9）。
\[
\text{sat}(x, \delta) = \begin{cases}
\text{sign}(x), & |x| > \delta \\
x/\delta, & |x| \le \delta
\end{cases}
\]

饱和函数的含义是（如图1， 图2）：
- 当误差 \(i_{\alpha\_err}\) 较大（绝对值大于边界层厚度 \(\delta\) ）时，采用最大增益进行快速调节（类似符号函数）。
- 当误差 \(i_{\alpha\_err}\) 较小时，采用线性的、平缓的调节方式（比例调节）。

这样，在平衡点附近，系统的切换变得平滑，有效抑制了抖振。因此，我们的滑模控制律最终确定为：
\[
\begin{aligned}
\hat{e}_\alpha &= h \cdot \text{sat}(i_{\alpha\_err}, \delta) \\
\hat{e}_\beta &= h \cdot \text{sat}(i_{\beta\_err}, \delta)
\end{aligned}
\]

通过这个反馈机制， \(\hat{e}_\alpha, \hat{e}_\beta\) 最终会收敛到真实的反电动势 \(e_\alpha, e_\beta\) 附近。

#### **第六章：位置提取与代码实现**

经过滑模观测器得到的 \(\hat{e}_\alpha, \hat{e}_\beta\) 仍然包含高频切换成分。因此需要一个低通滤波器（LPF）进行平滑（图1中的红色框）：
\[
\begin{aligned}
\hat{e}_{\alpha\_flt}(k) &= (1-\lambda) \hat{e}_{\alpha\_flt}(k-1) + \lambda \hat{e}_{\alpha}(k) \\
\hat{e}_{\beta\_flt}(k) &= (1-\lambda) \hat{e}_{\beta\_flt}(k-1) + \lambda \hat{e}_{\beta}(k)
\end{aligned}
\]
其中 \(\lambda\) 是滤波系数（例如0.1）。

最后，利用滤波后的反电动势，通过 **反正切（Arctangent）** 函数计算电角度（图4）：
\[
\theta_{elec} = -\arctan2(\hat{e}_{\alpha\_flt}, \hat{e}_{\beta\_flt})
\]
注意符号，这里取负号是因为在我们的模型定义中， \(e_\alpha = -\omega_e \psi_f \sin\theta\)。

---

#### **第七章：C语言代码实现**

综合以上所有推导，我们得到最终的滑模观测器函数 `SMO_position_estimate()`， 其流程和代码实现如下（基于您提供的图1）：

```c
// 滑模观测器参数结构体 (需初始化)
typedef struct {
    float Rs;       // 定子电阻
    float Ls;       // 定子电感
    float Ts;       // 控制周期
    float h_gain;   // 滑模增益 h
    float delta;    // 饱和函数边界层
    float lpf_alpha; // 低通滤波器系数 λ
    // 状态变量
    float Est_Ialpha; // 估计的α轴电流
    float Est_Ibeta;  // 估计的β轴电流
    float Ealpha_flt; // 滤波后的α轴反电动势
    float Ebeta_flt;  // 滤波后的β轴反电动势
    float theta_elec; // 估算的电角度
} SMO_HandleTypeDef;

// 饱和函数定义
float sat(float x, float delta) {
    if (x > delta) return 1.0f;
    else if (x < -delta) return -1.0f;
    else return x / delta;
}

// 主函数：滑模观测器位置估算
void SMO_position_estimate(SMO_HandleTypeDef *hsmo,
                           float Ialpha_Meas, float Ibeta_Meas,
                           float Valpha, float Vbeta) {
    float Ialpha_Err, Ibeta_Err;
    float Ealpha, Ebeta;

    // ===== 1. 电流观测器（预测电流） =====
    // 利用上一时刻的电压和估计的反电动势，更新电流估计值
    hsmo->Est_Ialpha += hsmo->Ts * ( -(hsmo->Rs/hsmo->Ls) * hsmo->Est_Ialpha +
                                     (1.0f/hsmo->Ls) * (Valpha - hsmo->Ealpha_flt) );
    hsmo->Est_Ibeta  += hsmo->Ts * ( -(hsmo->Rs/hsmo->Ls) * hsmo->Est_Ibeta +
                                     (1.0f/hsmo->Ls) * (Vbeta - hsmo->Ebeta_flt) );

    // ===== 2. 计算电流跟踪误差 =====
    Ialpha_Err = hsmo->Est_Ialpha - Ialpha_Meas;
    Ibeta_Err  = hsmo->Est_Ibeta - Ibeta_Meas;

    // ===== 3. 滑模控制律（产生反电动势估计值） =====
    Ealpha = hsmo->h_gain * sat(Ialpha_Err, hsmo->delta);
    Ebeta  = hsmo->h_gain * sat(Ibeta_Err, hsmo->delta);

    // ===== 4. 低通滤波器平滑反电动势 =====
    hsmo->Ealpha_flt = hsmo->lpf_alpha * Ealpha + (1.0f - hsmo->lpf_alpha) * hsmo->Ealpha_flt;
    hsmo->Ebeta_flt  = hsmo->lpf_alpha * Ebeta  + (1.0f - hsmo->lpf_alpha) * hsmo->Ebeta_flt;

    // ===== 5. 反正切计算电角度 =====
    // 注意使用atan2f(y, x)函数，并处理象限和符号
    hsmo->theta_elec = -atan2f(hsmo->Ealpha_flt, hsmo->Ebeta_flt);
    // 可选：将角度规范化到 [0, 2π) 或 [-π, π)
    // while (hsmo->theta_elec > PI) hsmo->theta_elec -= 2*PI;
    // while (hsmo->theta_elec < -PI) hsmo->theta_elec += 2*PI;
}
```

**代码执行流程总结**：
1.  **预测**： 用上一次的电压和滤波后的反电动势估计值，通过电机模型预测出本次的电流（`Est_Ialpha, Est_Ibeta`）。
2.  **比较**： 将预测电流与ADC采样得到的实际测量电流比较，得到误差。
3.  **调节**： 将误差送入饱和函数，生成一个“修正信号”作为本次反电动势的估计值（`Ealpha, Ebeta`）。
4.  **滤波**： 对反电动势估计值进行低通滤波，滤除高频抖振，得到平滑的反电动势（`Ealpha_flt, Ebeta_flt`）。
5.  **解算**： 对平滑后的反电动势进行反正切运算，得到最终的电角度 `theta_elec`。

至此，我们完成了从电机基本原理到滑模观测器代码实现的完整推导。这个估算出的 `theta_elec` 便可送入FOC的Park变换和速度环，实现完整的无传感器矢量控制。