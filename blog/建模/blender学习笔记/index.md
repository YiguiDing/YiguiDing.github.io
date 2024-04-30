---
title: blender学习笔记
date: 2024-04-29T23:06:00+08:00
---

# blender学习笔记

> blender其实在今年一月份就接触过，学过基础知识，但是后来硬盘坏了做的笔记就丢了，现在时间长了有些操作快捷键也忘了，现在重新做个笔记，争取两天把建模操作复习完

## 目录

- [blender学习笔记](#blender学习笔记)
  - [目录](#目录)
  - [基础篇](#基础篇)
    - [创建模型](#创建模型)
    - [删除模型](#删除模型)
    - [选择工具](#选择工具)
    - [模型变换](#模型变换)
    - [视图操作](#视图操作)
    - [场景操作](#场景操作)
    - [面板操作](#面板操作)
    - [工作区操作](#工作区操作)
    - [游标](#游标)
    - [物体原点](#物体原点)
    - [轴心点](#轴心点)
    - [坐标](#坐标)
    - [偏好设置](#偏好设置)
  - [建模篇](#建模篇)
    - [点线面的选择](#点线面的选择)
      - [物体交互模式切换](#物体交互模式切换)
      - [点线面选择模式切换](#点线面选择模式切换)
      - [点线面的基本选择工具](#点线面的基本选择工具)
      - [点、线、面的相连项](#点线面的相连项)
      - [点、线、面的最短连接](#点线面的最短连接)
      - [点、线、面的循环选择](#点线面的循环选择)
      - [点、线、面的并排边选择](#点线面的并排边选择)
      - [点、线、面的扩展/缩减选区](#点线面的扩展缩减选区)
    - [点线面的控制](#点线面的控制)
      - [点线面的移动、缩放、旋转](#点线面的移动缩放旋转)
      - [点线面的删除操作](#点线面的删除操作)
      - [点线面的融并操作](#点线面的融并操作)
      - [法线方向](#法线方向)
    - [建模工具](#建模工具)
      - [建模操作](#建模操作)
      - [辅助工具](#辅助工具)
      - [修改器](#修改器)

## 基础篇

### 创建模型

**新建物体(Shift+A)**

![Alt text](assets/images/image-7.png)
![Alt text](assets/images/image-6.png)

### 删除模型

**删除模型（X）**

- ![Alt text](assets/images/image-62.png)

### 选择工具

> W可以循环切换下面四个工具

**单选移动工具（W）**

![Alt text](assets/images/image-10.png)

**框选工具（B）**

![Alt text](assets/images/image-12.png)

**刷选工具（C）**

![Alt text](assets/images/image-11.png)

**套索工具（L）**

![Alt text](assets/images/image-13.png)

**反选（Ctrl+I）**

![Alt text](assets/images/image-70.png)

### 模型变换

**移动工具(G)**

> 按下G后再按下X 则沿着X轴移动，其他轴和其余操作同理
> 按下G 鼠标右键可取消操作，其他同理

![Alt text](assets/images/image-2.png)

**旋转工具(R)**

![Alt text](assets/images/image-3.png)

**缩放工具(S)**

![Alt text](assets/images/image-4.png)

**变换工具(T)**

> 变换 = 移动+旋转+缩放

![Alt text](assets/images/image-5.png)

### 视图操作

**X、Y、Z轴的方向**

![Alt text](assets/images/image-14.png)

**鼠标切换**

- 旋转观察视角：`鼠标中键`+`鼠标移动`
- 平移观察视角：`Shift`+`鼠标中键`+`鼠标移动`
- 缩放观察视角：`滚动鼠标中键`

**按钮切换**

![Alt text](assets/images/image.png)

- 拖拽可旋转观察视图
- 点击X、Y、Z可切换三个视图

![Alt text](assets/images/image-1.png)

- 长按并上下移动鼠标可缩放视图
- 长按并移动鼠标可平移视图
- 点击可切换摄像机镜头
- 点击可切换正交和透视视图

**小键盘操作**

```bash
# 按键映射关系：

# 7 8 9     ->  7:顶视图  8:上微调  9:视图前后/左右/上下翻转
# 4 5 6     ->  4:左微调  5:正或透  6:右微调
# 1 2 3     ->  1:正视图  2:下微调  3:右视图
# x 0 .     ->  x:不知道  0:摄像机  .:放大特写
# x + -     ->  x:不知道  +:放大点  -:缩小点
```

![Alt text](assets/images/image-16.png)

**派目录(~)**

![Alt text](assets/images/image-15.png)

### 场景操作

- **隐藏选中物体(H)**
- **隐藏未选中物体(Shift+H)**
- **显示隐藏物体(Alt+H)**

![Alt text](assets/images/image-8.png)
![Alt text](assets/images/image-35.png)
![Alt text](assets/images/image-36.png)

**复制然后再移动物体（Shift+D）**

> 需要撤销两次，因为有两个操作

![Alt text](assets/images/image-9.png)

### 面板操作

**面板替换/切换（鼠标点击按钮）**

> 任何面板左上角的第一个按钮可以用来切换当前面板的功能

![Alt text](assets/images/image-17.png)

**面板合并（鼠标拖动）**

> 鼠标点击**面板内侧**并往**面板外侧**方向**拖动**为**合并**

![Alt text](assets/images/image-18.png)
![Alt text](assets/images/image-19.png)

**面板拆分（鼠标拖动）**

> 鼠标点击**面板内侧**并往**面板内侧**方向**拖动**为**拆分**

![Alt text](assets/images/image-21.png)
![Alt text](assets/images/image-20.png)

**合并与拆分（鼠标右击边界）**

![Alt text](assets/images/image-22.png)
![Alt text](assets/images/image-23.png)

### 工作区操作

**添加工作区（点击添加按钮）**

![Alt text](assets/images/image-24.png)
![Alt text](assets/images/image-25.png)

**工作区重排序（鼠标右击工作区名）**

![Alt text](assets/images/image-26.png)

**工作区重命名（鼠标双击工作区名）**

![Alt text](assets/images/image-27.png)

### 游标

**游标**

- 游标在哪里，新建物体就在哪里
- ![Alt text](assets/images/image-28.png)

**游标移动**

- 快捷键：Shift+鼠标右键
- 游标工具：鼠标左键移动游标位置
  - ![Alt text](assets/images/image-29.png)

**游标回到世界原点**

- 快捷键：`Shift+C`
- ![Alt text](assets/images/image-32.png)

**将选中物体移动到游标位置**

- 鼠标选中物体
- 打开吸附工具（快捷键Shift+S），将选中物体吸附到游标（快捷键7）
- ![Alt text](assets/images/image-30.png)
- ![Alt text](assets/images/image-31.png)

**可以作为轴心点**

- ![Alt text](assets/images/image-34.png)
- ![Alt text](assets/images/image-33.png)

### 物体原点

**物体原点**

- 代表整个物体
- 物体的**移动**就是原点的移动
- 物体**旋转**和**缩放**是根据轴心点(可以是物体原点)的位置来旋转和缩放的
- ![Alt text](assets/images/image-37.png)
- 变换轴心点(鼠标点击切换)
  - ![Alt text](assets/images/image-42.png)
- 根据物体原点旋转(R)
  - ![Alt text](assets/images/image-38.png)
- 根据游标旋转(R)
  - ![Alt text](assets/images/image-39.png)
- 根据物体原点缩放(S)
  - ![Alt text](assets/images/image-41.png)
- 根据游标缩放(S)
  - ![Alt text](assets/images/image-40.png)

**修改物体原点位置（Ctrl+.+G）**

- 变换原点(Ctrl+.) ![Alt text](assets/images/image-47.png)
- 移动原点(G) ![Alt text](assets/images/image-48.png)

### 轴心点

**轴心点**

- 旋转、缩放的轴心
- ![Alt text](assets/images/image-46.png)

**以边界框中心作为旋转轴心点**

- ![Alt text](assets/images/image-49.png)
- ![Alt text](assets/images/image-50.png)

**以3D游标作为旋转轴心点**

- ![Alt text](assets/images/image-52.png)
- ![Alt text](assets/images/image-51.png)

**以各自原点作为旋转轴心点**

- ![Alt text](assets/images/image-54.png)
- ![Alt text](assets/images/image-53.png)

**以质心点作为旋转轴心点**

- ![Alt text](assets/images/image-56.png)
- ![Alt text](assets/images/image-55.png)

**以活动元素（最后选中物体）作为旋转轴心点**

- ![Alt text](assets/images/image-58.png)
- ![Alt text](assets/images/image-57.png)

### 坐标

![Alt text](assets/images/image-59.png)

沿着世界坐标系的Z轴平移（快捷键GZ）

- ![Alt text](assets/images/image-60.png)

沿着局部坐标系的Z轴平移（快捷键GZZ）

> 按两下Z便可切换局部坐标

- ![Alt text](assets/images/image-61.png)

### 偏好设置

![Alt text](assets/images/image-45.png)

**缩放至鼠标位置**

![Alt text](assets/images/image-43.png)

**围绕选中物体旋转**

![Alt text](assets/images/image-44.png)

**拖动时的饼菜单**

![Alt text](assets/images/image-64.png)

## 建模篇

### 点线面的选择

#### 物体交互模式切换

**编辑模式与物体模式的切换（Tab）**

- ![Alt text](assets/images/image-63.png)

**编辑模式与物体模式的切换（Tab+鼠标移动）**

> 需要开启`拖动时的饼菜单`

- ![Alt text](assets/images/image-65.png)

#### 点线面选择模式切换

**点模式（1）**

![Alt text](assets/images/image-66.png)

**线模式（2）**

![Alt text](assets/images/image-67.png)

**面模式（3）**

![Alt text](assets/images/image-68.png)

**点、线、面模式（Shift+鼠标点击多选）**

![Alt text](assets/images/image-69.png)

#### 点线面的基本选择工具

**调整(W)、框选(B)、刷选(C)、套索(L)**

![Alt text](assets/images/image-94.png)

**反选（Ctrl+I）**

![Alt text](assets/images/image-72.png)

**透视模式（Alt+Z）**

> 在透视模式可以框选背面的点线面

![Alt text](assets/images/image-92.png)
![Alt text](assets/images/image-93.png)

#### 点、线、面的相连项

![Alt text](assets/images/image-77.png)

- **面的相连项（鼠标要放到要连的地方+L或Ctrl+L）**
  - ![Alt text](assets/images/image-78.png)
- 鼠标移至左眼睛上再按L
  - ![Alt text](assets/images/image-79.png)
- 鼠标移至右耳朵上再按L
  - ![Alt text](assets/images/image-80.png)

#### 点、线、面的最短连接

![Alt text](assets/images/image-76.png)

**两点之间最短路（Ctrl键+点击第二个点）**

![Alt text](assets/images/image-73.png)

**两线之间最短路（Ctrl键+点击第二条线）**

![Alt text](assets/images/image-74.png)

**两面之间最短路（Ctrl键+点击第二个面）**

![Alt text](assets/images/image-75.png)

#### 点、线、面的循环选择

![Alt text](assets/images/image-87.png)

**两点之间循环选择（Alt键+点击水平或垂直方向的下一个点）**

- ![Alt text](assets/images/image-81.png)
- ![Alt text](assets/images/image-82.png)

**两线之间循环选择（Alt键+点击水平或垂直方向的下一个线）**

- ![Alt text](assets/images/image-83.png)
- ![Alt text](assets/images/image-84.png)

**两面之间循环选择（Alt键+点击水平或垂直方向的下一个面）**
![Alt text](assets/images/image-85.png)
![Alt text](assets/images/image-86.png)

#### 点、线、面的并排边选择

**两线之间循环选择（Ctrl键+Alt键+点击水平方向的下一个线）**
![Alt text](assets/images/image-88.png)

#### 点、线、面的扩展/缩减选区

![Alt text](assets/images/image-89.png)

扩展选取（Ctrl + 小键盘`+`）

![Alt text](assets/images/image-91.png)

缩减选取（Ctrl + 小键盘`-`）

![Alt text](assets/images/image-90.png)

### 点线面的控制

#### 点线面的移动、缩放、旋转

移动(G)

- ![Alt text](assets/images/image-97.png)
- ![Alt text](assets/images/image-96.png)

缩放(S)

- ![Alt text](assets/images/image-99.png)
- ![Alt text](assets/images/image-71.png)

旋转(R)

- ![Alt text](assets/images/image-98.png)
- ![Alt text](assets/images/image-95.png)

#### 点线面的删除操作

![Alt text](assets/images/image-106.png)

**删除顶点（X或Delete）**

- ![Alt text](assets/images/image-100.png)
- ![Alt text](assets/images/image-101.png)

**删除边（X或Delete）**

- ![Alt text](assets/images/image-102.png)
- ![Alt text](assets/images/image-103.png)

**删除面（X或Delete）**

- ![Alt text](assets/images/image-104.png)
- ![Alt text](assets/images/image-105.png)

#### 点线面的融并操作

![Alt text](assets/images/image-107.png)

**融并点（X或Delete）**

- ![Alt text](assets/images/image-108.png)
- ![Alt text](assets/images/image-109.png)

**融并线（X或Delete）**

- ![Alt text](assets/images/image-110.png)
- ![Alt text](assets/images/image-111.png)

**融并面（X或Delete）**

- ![Alt text](assets/images/image-112.png)
- ![Alt text](assets/images/image-113.png)

#### 法线方向

**面朝向**

> 蓝正红反

![Alt text](assets/images/image-114.png)

**面法线**

> 方向垂直于面

![Alt text](assets/images/image-115.png)

**点法线**

> 方向垂直于切线

![Alt text](assets/images/image-116.png)

### 建模工具

#### 建模操作

挤出Extrude(E)

向内挤出Insert(I)

环切LoopCut(Ctrl+R)

倒角Bevel(Ctrl+B)

合并Merge(M)

断开Rip(V)

切刀KnifeCut(K)

填充FillFace(F)

桥接Bridge(Ctrl+E)

分离Separate(P)

#### 辅助工具

衰减编辑

#### 修改器
