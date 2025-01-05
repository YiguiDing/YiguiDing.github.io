import numpy as np
import matplotlib.pyplot as plt

# 数据

N = 50
Z = []
X = [0] # 估计值初值0

Error_mes = 5 # 测量误差
Error_est = 50 # 估计误差 初值50mm
K = 0 # 卡尔曼增益

# 生成随机数据： 均值 50mm 测量误差 5mm
for i in range(0,N):
    Z.append(np.random.normal(50,5)) 

for i in range(1,N):
    K = Error_est/(Error_est+Error_mes) # 卡尔曼增益=估计误差/（估计误差+测量误差）
    x = X[i-1] + K * (Z[i] - X[i-1]) # 估计值=测量值-K*(测量值-真实值)
    Error_est = (1-K) * Error_est # 估计误差=（1-K）*估计误差
    X.append(x)


# 绘制图形
plt.scatter(range(0,len(Z)),Z) # 点图 测量值
plt.plot(range(0,len(X)),X)  # 折线图 估计值
# 显示图形
plt.show()