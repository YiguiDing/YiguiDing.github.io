import backtrader as bt

class BBI(bt.Indicator):
    lines = ('bbi',)  # 定义输出线名称
    params = (
        ('p1', 3),    # 3日均线周期
        ('p2', 6),    # 6日均线周期
        ('p3', 12),   # 12日均线周期
        ('p4', 24),   # 24日均线周期
    )

    def __init__(self):
        # 计算四条不同周期的移动平均线
        ma1 = bt.indicators.SMA(self.data.close, period=self.p.p1)
        ma2 = bt.indicators.SMA(self.data.close, period=self.p.p2)
        ma3 = bt.indicators.SMA(self.data.close, period=self.p.p3)
        ma4 = bt.indicators.SMA(self.data.close, period=self.p.p4)
        
        # BBI = 四均线的算术平均值
        self.lines.bbi = (ma1 + ma2 + ma3 + ma4) / 4