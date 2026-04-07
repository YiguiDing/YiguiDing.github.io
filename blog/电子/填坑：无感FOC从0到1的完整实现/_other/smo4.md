# 从电机方程到滑模观测器：无传感器FOC角度估计的完整推导与实现

## 引言
在永磁同步电机的无传感器矢量控制中，转子位置信息的获取是关键。直接测量需要使用编码器，增加了成本和系统复杂度。通过测量电机的端电压和相电流，我们可以**估算**出反电动势，进而从中提取出转子的电角度。本文将详细推导这一过程，从最基本的电机单相模型开始，逐步构建滑模观测器，并最终给出可直接在嵌入式平台上实现的C语言代码。

传统的方法试图直接通过电压方程求解反电动势：
```math
e_{\alpha} = u_{\alpha} - R i_{\alpha} - L \frac{di_{\alpha}}{dt}
```
然而，如 **图6** 所示，微分项 `$ \frac{di}{dt} $` 会显著放大电流采样信号中的噪声和毛刺，导致估算出的反电动势信号质量极差，无法用于角度提取。滑模观测器则通过一种**闭环观测**的思路，巧妙地避免了直接微分，从而获得更鲁棒、更平滑的角度估计结果。

## 1. 电机数学模型推导
### 1.1 单相RL电路模型
考虑电机一相绕组，其等效电路可视为电阻 `$ R $` 和电感 `$ L $` 的串联，并包含一个由永磁体旋转产生的反电动势 `$ e $`。根据基尔霍夫电压定律，其端电压方程为：
```math
u = R i + L \frac{di}{dt} + e
```
其中，`$ u $` 为施加的相电压，`$ i $` 为相电流。

### 1.2 三相PMSM模型与克拉克变换
对于三相永磁同步电机（PMSM），其在三相静止坐标系（ABC）下的电压方程为：
```math
\begin{bmatrix} u_A \\ u_B \\ u_C \end{bmatrix} = R_s \begin{bmatrix} i_A \\ i_B \\ i_C \end{bmatrix} + L_s \frac{d}{dt} \begin{bmatrix} i_A \\ i_B \\ i_C \end{bmatrix} + \begin{bmatrix} e_A \\ e_B \\ e_C \end{bmatrix}
```
为了简化分析，我们应用**克拉克变换**，将三相变量转换到两相静止坐标系（`$ \alpha\beta $`）下。采用等幅值变换：
```math
\begin{bmatrix} i_{\alpha} \\ i_{\beta} \end{bmatrix} = \frac{2}{3} \begin{bmatrix} 1 & -\frac{1}{2} & -\frac{1}{2} \\ 0 & \frac{\sqrt{3}}{2} & -\frac{\sqrt{3}}{2} \end{bmatrix} \begin{bmatrix} i_A \\ i_B \\ i_C \end{bmatrix}
```
电压和反电动势的变换同理。变换后，`$ \alpha\beta $` 坐标系下的电机电压方程简化为：
```math
\begin{aligned}
u_{\alpha} &= R_s i_{\alpha} + L_s \frac{di_{\alpha}}{dt} + e_{\alpha} \\
u_{\beta}  &= R_s i_{\beta}  + L_s \frac{di_{\beta}}{dt}  + e_{\beta}
\end{aligned}
```
此即 **图5** 所展示的核心方程。

### 1.3 反电动势与电角度
对于表贴式PMSM，两相静止坐标系下的反电动势与转子电角度 `$ \theta $` 直接相关：
```math
\begin{aligned}
e_{\alpha} &= -K_E \omega_e \sin(\theta) \\
e_{\beta}  &=  K_E \omega_e \cos(\theta)
\end{aligned}
```
其中，`$ K_E $` 为反电动势常数，`$ \omega_e $` 为电角速度。观察上式，反电动势矢量 `$ [e_{\alpha}, e_{\beta}]^T $` 的相位直接反映了转子位置 `$ \theta $`。如 **图4** 所示，可以通过简单的**反正切运算**提取出电角度：
```math
\theta = -\arctan \left( \frac{e_{\alpha}}{e_{\beta}} \right)
```
负号是由于上述反电动势表达式的符号定义所致。因此，**只要我们能准确获得 `$ e_{\alpha} $` 和 `$ e_{\beta} $`，就得到了转子位置**。

## 2. 滑模观测器设计
我们的目标：构造一个动态系统（观测器），利用可测量的 `$ u_{\alpha}, u_{\beta}, i_{\alpha}, i_{\beta} $`，去估算不可直接测量的 `$ e_{\alpha}, e_{\beta} $`。

### 2.1 观测器结构与状态方程
根据电压方程，我们将电流 `$ i_{\alpha}, i_{\beta} $` 作为状态变量。构建一个与真实电机方程结构相同的**状态观测器**：
```math
\frac{d}{dt} \begin{bmatrix} \hat{i}_{\alpha} \\ \hat{i}_{\beta} \end{bmatrix} = -\frac{R_s}{L_s} \begin{bmatrix} \hat{i}_{\alpha} \\ \hat{i}_{\beta} \end{bmatrix} + \frac{1}{L_s} \left( \begin{bmatrix} u_{\alpha} \\ u_{\beta} \end{bmatrix} - \begin{bmatrix} \hat{e}_{\alpha} \\ \hat{e}_{\beta} \end{bmatrix} \right)
```
其中，`$ \hat{i} $` 为观测器估算的电流，`$ \hat{e} $` 是我们为观测器“假定的”反电动势，它是一个**控制输入**，需要我们设计控制律来使其收敛到真实值 `$ e $`。

将此连续方程进行前向欧拉离散化（采样周期 `$ T_s $`），得到离散迭代形式（如 **图2** 所示）：
```math
\begin{aligned}
\hat{i}_{\alpha}(k) &= \hat{i}_{\alpha}(k-1) + T_s \left[ -\frac{R_s}{L_s} \hat{i}_{\alpha}(k-1) + \frac{1}{L_s} ( u_{\alpha}(k-1) - \hat{e}_{\alpha}(k-1) ) \right] \\
\hat{i}_{\beta}(k)  &= \hat{i}_{\beta}(k-1)  + T_s \left[ -\frac{R_s}{L_s} \hat{i}_{\beta}(k-1)  + \frac{1}{L_s} ( u_{\beta}(k-1)  - \hat{e}_{\beta}(k-1) ) \right]
\end{aligned}
```

### 2.2 滑模面与控制律设计
定义电流估算误差为滑模面（如 **图8** 所示）：
```math
\begin{aligned}
s_{\alpha} &= \hat{i}_{\alpha} - i_{\alpha} \\
s_{\beta}  &= \hat{i}_{\beta} - i_{\beta}
\end{aligned}
```
滑模控制的目标是设计 `$ \hat{e} $`，使得误差 `$ s $` 被驱动到零。当 `$ s = 0 $` 时，意味着观测器电流与真实电流完全一致，根据模型可知此时 `$ \hat{e} = e $`。

我们采用经典的**趋近律**方法。对误差 `$ s $` 求导（在离散域可理解为变化率），并代入连续时间的状态方程：
```math
\begin{aligned}
\frac{ds_{\alpha}}{dt} &= \frac{d\hat{i}_{\alpha}}{dt} - \frac{di_{\alpha}}{dt} \\
&= \left[ -\frac{R_s}{L_s} \hat{i}_{\alpha} + \frac{1}{L_s}(u_{\alpha} - \hat{e}_{\alpha}) \right] - \left[ -\frac{R_s}{L_s} i_{\alpha} + \frac{1}{L_s}(u_{\alpha} - e_{\alpha}) \right] \\
&= -\frac{R_s}{L_s} (\hat{i}_{\alpha} - i_{\alpha}) - \frac{1}{L_s} (\hat{e}_{\alpha} - e_{\alpha}) \\
&= -\frac{R_s}{L_s} s_{\alpha} - \frac{1}{L_s} (\hat{e}_{\alpha} - e_{\alpha})
\end{aligned}
```
为了迫使 `$ s $` 收敛到零，我们令 `$ \frac{ds}{dt} = -K \cdot \text{sat}(s) $`，其中 `$ K > 0 $`，`$ \text{sat}() $` 为饱和函数（后文解释）。于是有：
```math
-\frac{R_s}{L_s} s_{\alpha} - \frac{1}{L_s} (\hat{e}_{\alpha} - e_{\alpha}) = -K \cdot \text{sat}(s_{\alpha})
```
由于真实反电动势 `$ e_{\alpha} $` 未知，我们设计控制律时忽略它（将其视为扰动），直接令：
```math
\hat{e}_{\alpha} = (L_s K) \cdot \text{sat}(s_{\alpha}) = h \cdot \text{sat}(s_{\alpha})
```
其中 `$ h = L_s K $` 称为**滑模增益**。同理可得 `$ \hat{e}_{\beta} = h \cdot \text{sat}(s_{\beta}) $`。

### 2.3 为什么是饱和函数？
如 **图9** 和 **图10** 所示，控制律的选择可以是符号函数 `$ \text{sign}(s) $` 或饱和函数 `$ \text{sat}(s) $`。
- **符号函数**：`$ \hat{e} = h \cdot \text{sign}(s) $`。这会使系统状态在滑模面两侧高频切换（抖振），产生大量噪声。
- **饱和函数**：在边界层 `$ |s| < \delta $` 内采用线性反馈，之外与符号函数相同。
```math
\text{sat}(s, \delta) = \begin{cases}
\frac{s}{\delta}, & \text{if } |s| < \delta \\
\text{sign}(s), & \text{otherwise}
\end{cases}
```
饱和函数（如 **图1** 代码中使用的 `sat(lalpha_Err, 0.5f)`）能有效**抑制抖振**，是工程实践中的首选。

### 2.4 稳定性简要分析
将控制律 `$ \hat{e}_{\alpha} = h \cdot \text{sat}(s_{\alpha}) $` 代入误差动态方程：
```math
\frac{ds_{\alpha}}{dt} = -\frac{R_s}{L_s} s_{\alpha} - \frac{1}{L_s} (h \cdot \text{sat}(s_{\alpha}) - e_{\alpha})
```
选取李雅普诺夫函数 `$ V = \frac{1}{2}s_{\alpha}^2 $`，其导数为：
```math
\dot{V} = s_{\alpha} \dot{s}_{\alpha} = -\frac{R_s}{L_s} s_{\alpha}^2 - \frac{1}{L_s} s_{\alpha} (h \cdot \text{sat}(s_{\alpha}) - e_{\alpha})
```
当 `$ h > |e_{\alpha}|_{\text{max}} $`，即滑模增益大于反电动势最大可能幅值时，在边界层外有 `$ \dot{V} < 0 $`，保证了系统状态能被吸引到滑模面 `$ s_{\alpha} = 0 $` 的邻域内。

## 3. 算法实现与代码
滑模观测器的实现流程如 **图1**、**图3** 和 **图7** 的思路所示：**用假定的 `$ \hat{e} $` 预测电流，将预测电流与实际电流比较得到误差，用误差通过饱和函数更新 `$ \hat{e} $`，最终从收敛的 `$ \hat{e} $` 中提取角度**。

以下是完整、可读性更高的C语言实现，符号与上述推导严格一致：
```c
// 滑模观测器参数结构体
typedef struct {
    float Rs;          // 定子电阻 (Ohm)
    float Ls;          // 定子电感 (H)
    float Ts;          // 控制周期 (s)
    float h;           // 滑模增益
    float delta;       // 饱和函数边界层厚度
    float alpha;       // 低通滤波器系数 (通常 ~0.9-0.95)
    
    // 观测器状态变量
    float i_alpha_hat; // 估算的α轴电流
    float i_beta_hat;  // 估算的β轴电流
    float e_alpha_hat; // 估算的α轴反电动势
    float e_beta_hat;  // 估算的β轴反电动势
    float e_alpha_filt;// 滤波后的α轴反电动势
    float e_beta_filt; // 滤波后的β轴反电动势
} SMO_HandleTypeDef;

// 饱和函数定义
static float sat(float x, float delta) {
    if (x > delta) return 1.0f;
    else if (x < -delta) return -1.0f;
    else return x / delta;
}

/**
  * @brief  滑模观测器主函数
  * @param  pSMO: 滑模观测器句柄指针
  * @param  i_alpha: 测量到的α轴电流
  * @param  i_beta:  测量到的β轴电流
  * @param  u_alpha: 施加的α轴电压
  * @param  u_beta:  施加的β轴电压
  * @retval 估算的电角度 (rad)
  */
float SMO_EstimatePosition(SMO_HandleTypeDef *pSMO, float i_alpha, float i_beta, float u_alpha, float u_beta) {
    float i_alpha_err, i_beta_err;
    
    // 1. 基于上一周期的估算反电动势，预测当前电流
    pSMO->i_alpha_hat += pSMO->Ts * ( -pSMO->Rs/pSMO->Ls * pSMO->i_alpha_hat
                                       + 1.0f/pSMO->Ls * (u_alpha - pSMO->e_alpha_hat) );
    pSMO->i_beta_hat  += pSMO->Ts * ( -pSMO->Rs/pSMO->Ls * pSMO->i_beta_hat
                                       + 1.0f/pSMO->Ls * (u_beta  - pSMO->e_beta_hat) );
    
    // 2. 计算电流预测误差 (滑模面)
    i_alpha_err = pSMO->i_alpha_hat - i_alpha;
    i_beta_err  = pSMO->i_beta_hat  - i_beta;
    
    // 3. 根据滑模控制律，更新估算的反电动势
    pSMO->e_alpha_hat = pSMO->h * sat(i_alpha_err, pSMO->delta);
    pSMO->e_beta_hat  = pSMO->h * sat(i_beta_err,  pSMO->delta);
    
    // 4. 对估算的反电动势进行低通滤波，抑制开关高频噪声
    //    一阶低通滤波: y(k) = α * x(k) + (1-α) * y(k-1)
    pSMO->e_alpha_filt = pSMO->alpha * pSMO->e_alpha_hat + (1.0f - pSMO->alpha) * pSMO->e_alpha_filt;
    pSMO->e_beta_filt  = pSMO->alpha * pSMO->e_beta_hat  + (1.0f - pSMO->alpha) * pSMO->e_beta_filt;
    
    // 5. 通过反正切计算电角度，注意符号和象限处理
    return -atan2f(pSMO->e_alpha_filt, pSMO->e_beta_filt);
}
```

## 代码关键点解析
1.  **电流预测** (第1步)：这是观测器的核心，用上一次估算的 `$ \hat{e} $` 来递推本次的 `$ \hat{i} $`。
2.  **误差计算与滑模控制** (第2、3步)：误差 `$ s = \hat{i} - i $` 即为滑模面。通过饱和函数 `$ \hat{e} = h \cdot \text{sat}(s) $` 来修正反电动势的估计值，迫使误差趋向于零。
3.  **低通滤波** (第4步)：饱和函数输出和PWM开关噪声会引入高频纹波。如 **图1** 所示，使用一阶低通滤波器 `$ y(k) = 0.9y(k-1) + 0.1x(k) $` (系数可调) 对 `$ \hat{e} $` 进行平滑，是提取可用角度信号的关键步骤。
4.  **角度计算** (第5步)：对滤波后的反电动势分量使用四象限反正切函数 `atan2f`，直接得到 `$ \theta $`。

## 总结
本文系统性地推导了从电机基本电压方程到滑模观测器实现的完整链条：
1.  **建立模型**：从单相到三相，再通过克拉克变换得到两相静止坐标系模型 `$ u = Ri + L di/dt + e $`。
2.  **关联角度**：反电动势矢量 `$ (e_{\alpha}, e_{\beta}) $` 的相位包含了转子角度信息 `$ \theta = -\arctan(e_{\alpha}/e_{\beta}) $`。
3.  **设计观测器**：构建一个电流观测器，并利用电流误差设计滑模控制律 `$ \hat{e} = h \cdot \text{sat}(\hat{i} - i) $`，迫使观测器状态跟踪真实系统，从而获得对 `$ e $` 的估计。
4.  **工程实现**：离散化迭代、加入滤波、计算角度，最终凝练成一段高效的C代码。

滑模观测器以其对参数变化和扰动的不敏感性（鲁棒性），成为无传感器FOC中估算转子位置的主流方法之一。理解其从物理原理到数学公式，再到代码实现的每一步，是进行高性能电机控制系统设计和调试的基础。

*(本文推导与代码参考了DENG FOC开源项目的相关设计思想，图示来源于用户提供的技术资料。)*