## backtrader学习笔记

### 安装环境

```bash
conda create -n trade python=3.5
conda activate trade
pip install backtrader
pip install backtrader[plotting]
```

###  quickstart


**基本写法**

```python
import backtrader as bt

if __name__ == '__main__':
    cerebro = bt.Cerebro() # # 创建Cerebro引擎（核心控制类）

    print('初始投资组合价值: %.2f' % cerebro.broker.getvalue())

    cerebro.run()

    print('最终投资组合价值: %.2f' % cerebro.broker.getvalue())
```

**设置现金**

```python
cerebro = bt.Cerebro()
cerebro.broker.setcash(100000.0)
```

**添加数据**

```python
import datetime
import os.path 
import sys

cerebro = bt.Cerebro()

# 获取当前路径
modpath = os.path.dirname(os.path.abspath(sys.argv[0]))
# 拼接文件路径
datapath = os.path.join(modpath, '../../datas/orcl-1995-2014.txt')

# 创建数据馈送（Data Feed）
data = bt.feeds.YahooFinanceCSVData(
        dataname=datapath,
        fromdate=datetime.datetime(2000, 1, 1),
        todate=datetime.datetime(2000, 12, 31),
        reverse=False # 预期的CSV排序是日期升序
    )

# 添加
cerebro.adddata(data)
```

**指标**

```bash
# Import the backtrader platform
import backtrader as bt

# Create a Data Feed
data = bt.feeds.YahooFinanceCSVData(
        dataname='...',
        fromdate=datetime.datetime(2000, 1, 1),
        todate=datetime.datetime(2000, 12, 31),
        reverse=False
    )

# 简单移动平均线（SMA）
sma = bt.indicators.SimpleMovingAverage(data, period=20)
# 指数移动平均线（EMA）
ema = bt.indicators.ExponentialMovingAverage(data, period=25)
# 加权移动平均线（WMA）
wma = bt.indicators.WeightedMovingAverage(data, period=25, subplot=True) # subplot在子图中绘制
# MACD柱状图指标
macd = bt.indicators.MACDHisto(data)
```

**创建策略**

```python
class TestStrategy(bt.Strategy):
    def __init__(self):
        # datas[0]就是上面创建的数据馈送（Data Feed）
        # close是一个DataSeries，包含每天的收盘价
        self.dataclose = self.datas[0].close

    def next(self):
        # dataclose[0]是当前收盘价格 -1是前一天的收盘价格
        self.log('Close, %.2f' % self.dataclose[0])
    
    def log(self, txt, dt=None):
        ''' Logging function for this strategy'''
        dt = dt or self.datas[0].datetime.date(0)
        print('%s, %s' % (dt.isoformat(), txt))

if __name__ == '__main__':
    cerebro = bt.Cerebro()
    cerebro.addstrategy(TestStrategy)
```


**为策略添加买入卖出逻辑/管理订单状态**

```python
class TestStrategy(bt.Strategy):
    def __init__(self):
        self.order = None  # 记录当前订单状态
        self.dataclose = self.datas[0].close
        # 简单移动平均线（SMA）
        self.sma = bt.indicators.SimpleMovingAverage(self.datas[0], period=self.params.sma_period)

    def next(self):
        ''' 
            每个K线周期调用的策略逻辑
        '''
        # 记录当前收盘价
        self.log('Close, %.2f' % self.dataclose[0])
        # 存在挂单时禁止新订单
        if self.order:
            return
        # 检查当前持仓状态
        if not self.position:  # 无持仓
            if self.dataclose[0] > self.sma[0]:  # 收盘价上穿SMA时买入
                self.log('创建买入订单, %.2f' % self.dataclose[0])
                self.order = self.buy()  # 发送买入指令
        else:  # 有持仓
            if self.dataclose[0] < self.sma[0]:  # 收盘价下穿SMA时卖出
                self.log('创建卖出订单, %.2f' % self.dataclose[0])
                self.order = self.sell()  # 发送卖出指令

    def notify_order(self, order):
        ''' 
            订单状态通知处理
        '''
        if order.status in [order.Submitted, order.Accepted]:
            # 订单已提交/接受，无需操作
            return

        # 检查订单是否完成（注意：资金不足时经纪人可能拒绝）
        if order.status in [order.Completed]:
            if order.isbuy():
                # 记录买入详情
                self.log('买入执行, 价格: %.2f, 成本: %.2f, 佣金 %.2f' %(order.executed.price, order.executed.value, order.executed.comm))
                self.buyprice = order.executed.price
                self.buycomm = order.executed.comm
            else:  # 卖出订单
                self.log('卖出执行, 价格: %.2f, 成本: %.2f, 佣金 %.2f' %(order.executed.price, order.executed.value, order.executed.comm))
            self.bar_executed = len(self)  # 记录订单执行时的K线位置

        elif order.status in [order.Canceled, order.Margin, order.Rejected]:
            self.log('订单取消/保证金不足/被拒绝')

        self.order = None  # 重置当前订单状态

    def notify_trade(self, trade):
        ''' 
            交易结果通知（仅在交易关闭时触发）
        '''
        if not trade.isclosed:
            return
        self.log('交易利润, 毛利润 %.2f, 净利润 %.2f' % (trade.pnl, trade.pnlcomm))


if __name__ == '__main__':
    cerebro = bt.Cerebro()
    cerebro.addstrategy(TestStrategy)
```

**交易佣金**

```python
# 0.1%
cerebro.broker.setcommission(commission=0.001)
# 万分之2.5
cerebro.broker.setcommission(commission=2.5/1e4)
```

**交易策略参数**

```python
class TestStrategy(bt.Strategy):
    params = (
        ('myparam', 27),
        ('sma_period', 15),  # 可调整参数：移动平均周期（默认15）
    )
    def __init__(self):
        # 简单移动平均线（SMA）
        self.sma = bt.indicators.SimpleMovingAverage(self.datas[0], period=self.params.sma_period)


cerebro.addstrategy(TestStrategy, sma_period=20, myparam=123456) # 修改参数
```

**交易策略参数优化**

```python
class TestStrategy(bt.Strategy):
    params = (
        ('sma_period', 15),  # 可调整参数：移动平均周期（默认15）
        ('opt_strategy',True)
    )
    def __init__(self):
        # 简单移动平均线（SMA）
        self.sma = bt.indicators.SimpleMovingAverage(self.datas[0], period=self.params.sma_period)

    def stop(self):
        self.log('SMA周期:%2d, 最周投资组合价值: %.2f ' %(self.params.sma_period, self.broker.getvalue()), opt_log=True)
        
    def log(self, txt, dt=None, opt_log=False):
        '''
            策略的日志记录函数
        '''
        if not self.params.opt_strategy or opt_log:
            dt = dt or self.datas[0].datetime.date(0) 
            print('%s, %s' % (dt.isoformat(), txt))


cerebro.optstrategy(TestStrategy, sma_period=range(5, 30)) # 优化参数
```