# 从电机方程到代码实现：滑模观测器(SMO)的详细推导

> 简洁流畅的数学推演，直指无传感器FOC的核心

在永磁同步电机(PMSM)的无传感器矢量控制中，**获取准确的转子位置**是实现高性能控制的关键。然而，位置传感器不仅增加成本和体积，也降低了系统可靠性。滑模观测器作为一种**鲁棒性强、实现简洁**的算法，成为了从电机电气信号中提取位置信息的有效方案。

## 一、从反电动势到α-β轴电机模型

在 PMSM 的转子磁场定向控制中，定子电压方程在静止α-β坐标系下可表示为：

$$ u_{\alpha} = R_s i_{\alpha} + L_s \frac{di_{\alpha}}{dt} + e_{\alpha} $$

$$ u_{\beta} = R_s i_{\beta} + L_s \frac{di_{\beta}}{dt} + e_{\beta} $$

其中：
- $u_{\alpha}$、$u_{\beta}$：α-β轴定子电压
- $i_{\alpha}$、$i_{\beta}$：α-β轴定子电流
- $R_s$、$L_s$：定子电阻和电感（这里假设$L_d = L_q = L_s$）
- $e_{\alpha}$、$e_{\beta}$：α-β轴扩展反电动势（包含转子位置信息）

反电动势与转子位置θ的关系为：

$$ e_{\alpha} = -\omega_e \psi_f \sin(\theta_e) $$
$$ e_{\beta} = \omega_e \psi_f \cos(\theta_e) $$

其中$\omega_e$为电气角速度，$\psi_f$为永磁体磁链。**若能准确观测出$e_{\alpha}$、$e_{\beta}$，即可通过反正切函数获得转子位置**：

$$ \theta_e = -\arctan(\frac{e_{\alpha}}{e_{\beta}}) $$

---

## 二、为什么需要观测器？——直接计算的困境

对电压方程进行离散化，理论上可以直接解出反电动势：

$$ e_{\alpha} = u_{\alpha} - R_s i_{\alpha} - L_s \frac{i_{\alpha}(k) - i_{\alpha}(k-1)}{T_s} $$

这个公式看起来直观，但在实际系统中面临**致命问题**：
- **微分放大噪声**：差分项 $\frac{i(k)-i(k-1)}{T_s}$ 会显著放大电流采样噪声和开关谐波
- **参数敏感性**：电阻$R_s$和电感$L_s$随温度和磁饱和而变化
- **信号毛刺**：直接计算结果**毛刺极大，完全无法用于位置估算**

这正是我们需要设计观测器的根本原因——通过**闭环反馈**来抑制噪声、增强鲁棒性。

---

## 三、滑模观测器的核心思想：预测与修正

滑模观测器的核心是构建一个**电流观测模型**，通过不断修正模型中的反电动势估计值，使**观测电流逼近实际电流**。

**第1步：建立电流观测器（预测模型）**
将电压方程改写为状态方程形式，并建立观测器：

$$ \frac{d\hat{i}_{\alpha}}{dt} = -\frac{R_s}{L_s}\hat{i}_{\alpha} + \frac{1}{L_s}(u_{\alpha} - \hat{e}_{\alpha}) $$
$$ \frac{d\hat{i}_{\beta}}{dt} = -\frac{R_s}{L_s}\hat{i}_{\beta} + \frac{1}{L_s}(u_{\beta} - \hat{e}_{\beta}) $$

其中$\hat{i}$为观测电流，$\hat{e}$为反电动势估计值。使用前向欧拉法离散化：

$$ \hat{i}_{\alpha}(k) = \hat{i}_{\alpha}(k-1) + T_s \left[ -\frac{R_s}{L_s}\hat{i}_{\alpha}(k-1) + \frac{1}{L_s}(u_{\alpha}(k-1) - \hat{e}_{\alpha}(k-1)) \right] $$

$$ \hat{i}_{\beta}(k) = \hat{i}_{\beta}(k-1) + T_s \left[ -\frac{R_s}{L_s}\hat{i}_{\beta}(k-1) + \frac{1}{L_s}(u_{\beta}(k-1) - \hat{e}_{\beta}(k-1)) \right] $$

**第2步：定义滑模面**
定义电流误差为观测值与实际测量值之差：

$$ s_{\alpha} = \hat{i}_{\alpha} - i_{\alpha} $$
$$ s_{\beta} = \hat{i}_{\beta} - i_{\beta} $$

理想情况下，我们期望$s=0$，这意味着观测器模型**完全跟踪**了真实系统。$s=0$在状态空间中定义了一个超平面，称为**滑模面**。

**第3步：设计趋近律**
为使误差系统能到达并保持在滑模面上，需要设计反电动势$\hat{e}$的**自适应律**。滑模控制理论告诉我们，需满足$s \cdot \dot{s} < 0$。常用**饱和函数法**设计：

$$ \hat{e}_{\alpha} = K_{smo} \cdot \text{sat}(s_{\alpha}, \delta) $$
$$ \hat{e}_{\beta} = K_{smo} \cdot \text{sat}(s_{\beta}, \delta) $$

其中：
- $K_{smo}$：滑模增益，决定系统趋近速度
- $\delta$：边界层厚度，用于抑制滑模抖振
- $\text{sat}(x, \delta)$为饱和函数：

$$ \text{sat}(x, \delta) = 
\begin{cases} 
1 & x > \delta \\
x/\delta & |x| \leq \delta \\
-1 & x < -\delta 
\end{cases} $$

饱和函数是对符号函数$\text{sign}(x)$的**平滑化改进**，能有效减少稳态抖振。

---

## 四、滑模观测器算法全流程

1. **初始化**：设置$\hat{i}_{\alpha}(0)$、$\hat{i}_{\beta}(0)$、$\hat{e}_{\alpha}(0)$、$\hat{e}_{\beta}(0)$
2. **在每个控制周期**：
   - 采样实际电流$i_{\alpha}(k)$、$i_{\beta}(k)$和电压$u_{\alpha}(k)$、$u_{\beta}(k)$
   - 计算电流观测值：
     $$ \hat{i}_{\alpha}(k) = \hat{i}_{\alpha}(k-1) + T_s \left[ -\frac{R_s}{L_s}\hat{i}_{\alpha}(k-1) + \frac{1}{L_s}(u_{\alpha}(k-1) - \hat{e}_{\alpha}(k-1)) \right] $$
     $$ \hat{i}_{\beta}(k) = \hat{i}_{\beta}(k-1) + T_s \left[ -\frac{R_s}{L_s}\hat{i}_{\beta}(k-1) + \frac{1}{L_s}(u_{\beta}(k-1) - \hat{e}_{\beta}(k-1)) \right] $$
   - 计算滑模面（电流误差）：
     $$ s_{\alpha} = \hat{i}_{\alpha}(k) - i_{\alpha}(k) $$
     $$ s_{\beta} = \hat{i}_{\beta}(k) - i_{\beta}(k) $$
   - 更新反电动势估计值：
     $$ \hat{e}_{\alpha}(k) = K_{smo} \cdot \text{sat}(s_{\alpha}, \delta) $$
     $$ \hat{e}_{\beta}(k) = K_{smo} \cdot \text{sat}(s_{\beta}, \delta) $$
   - 对$\hat{e}$进行低通滤波，消除高频噪声：
     $$ \hat{e}_{\alpha, flt}(k) = a \cdot \hat{e}_{\alpha, flt}(k-1) + (1-a) \cdot \hat{e}_{\alpha}(k) $$
     $$ \hat{e}_{\beta, flt}(k) = a \cdot \hat{e}_{\beta, flt}(k-1) + (1-a) \cdot \hat{e}_{\beta}(k) $$
     其中$a$为滤波系数（通常取0.9-0.99）
   - 计算转子电角度：
     $$ \theta_e = -\arctan2(\hat{e}_{\alpha, flt}, \hat{e}_{\beta, flt}) $$

---

## 五、代码实现（C语言）

```c
// 滑模观测器参数结构体
typedef struct {
    float Rs;       // 定子电阻
    float Ls;       // 定子电感
    float Ts;       // 控制周期
    float K_smo;    // 滑模增益
    float delta;    // 边界层厚度
    float alpha;    // 低通滤波系数 (0<alpha<1)
    
    // 状态变量
    float i_alpha_est;  // α轴电流观测值
    float i_beta_est;   // β轴电流观测值
    float e_alpha_est;  // α轴反电动势估计值
    float e_beta_est;   // β轴反电动势估计值
    float e_alpha_flt;  // α轴滤波后反电动势
    float e_beta_flt;   // β轴滤波后反电动势
} SMO_TypeDef;

// 饱和函数
float sat(float x, float delta) {
    if (x > delta) return 1.0f;
    else if (x < -delta) return -1.0f;
    else return x / delta;
}

// 滑模观测器主函数
void SMO_Update(SMO_TypeDef* smo, 
                float i_alpha_meas, float i_beta_meas,
                float u_alpha, float u_beta,
                float* theta_elec) {
    
    // 1. 计算电流观测值（预测模型）
    smo->i_alpha_est += smo->Ts * (
        -smo->Rs / smo->Ls * smo->i_alpha_est 
        + 1.0f / smo->Ls * (u_alpha - smo->e_alpha_est)
    );
    
    smo->i_beta_est += smo->Ts * (
        -smo->Rs / smo->Ls * smo->i_beta_est 
        + 1.0f / smo->Ls * (u_beta - smo->e_beta_est)
    );
    
    // 2. 计算滑模面（电流误差）
    float s_alpha = smo->i_alpha_est - i_alpha_meas;
    float s_beta = smo->i_beta_est - i_beta_meas;
    
    // 3. 更新反电动势估计值（滑模趋近律）
    smo->e_alpha_est = smo->K_smo * sat(s_alpha, smo->delta);
    smo->e_beta_est = smo->K_smo * sat(s_beta, smo->delta);
    
    // 4. 低通滤波
    smo->e_alpha_flt = smo->alpha * smo->e_alpha_flt 
                       + (1.0f - smo->alpha) * smo->e_alpha_est;
    smo->e_beta_flt = smo->alpha * smo->e_beta_flt 
                      + (1.0f - smo->alpha) * smo->e_beta_est;
    
    // 5. 计算电角度（注意象限处理）
    *theta_elec = -atan2f(smo->e_alpha_flt, smo->e_beta_flt);
    
    // 处理角度归一化到[0, 2π)
    if (*theta_elec < 0) {
        *theta_elec += 2 * PI;
    }
}
```

---

## 六、调参要点与注意事项

1. **滑模增益$K_{smo}$**：决定系统响应速度。增益过小，跟踪慢；增益过大，抖振加剧。通常从较小值开始，逐步增加至电流能较好跟踪。

2. **边界层厚度$\delta$**：平衡跟踪精度与抖振的关键参数。$\delta$越小，跟踪精度越高但抖振越大；$\delta$越大，系统越平滑但存在稳态误差。

3. **低通滤波器设计**：反电动势中含有位置信息，但也包含高频噪声。滤波截止频率需**高于最高电频率但低于开关频率**，通常取0.5-2倍额定电频率。

4. **离散化效应**：控制频率$f_s$需足够高，一般满足$f_s > 20 \times f_{elec\_max}$，其中$f_{elec\_max}$为最高电频率。

5. **初始位置**：观测器启动时，需给定一个初始电角度估计值（如0），通常结合I/F启动策略使用。

---

滑模观测器以其**强鲁棒性、实现简单**的特点，成为无传感器FOC中的经典选择。通过本文的推导可以看到，从电机基本方程到最终代码，整个逻辑链条清晰而严谨。实际应用中，**参数整定**是成功的关键——需要根据具体电机特性，反复调整$K_{smo}$、$\delta$和滤波器参数，才能获得平滑准确的位置估算。

*注：本文推导基于面贴式PMSM（$L_d = L_q$），对于凸极性电机，算法需要相应调整。*