from __future__ import (absolute_import, division, print_function,
                        unicode_literals)  # 兼容Python 2和3的未来特性导入
import datetime  # 用于处理日期时间对象
import os.path  # 管理文件路径
import sys  # 获取脚本名称（通过argv[0]）

# 导入backtrader量化交易框架
import backtrader as bt

# 创建交易策略类
class TestStrategy(bt.Strategy):
    params = (
        ('sma_period', 15),  # 可调整参数：移动平均周期（默认15）
        ('opt_strategy',True)
    )
    def __init__(self):
        # 引用数据序列中的收盘价线
        self.dataclose = self.datas[0].close

        # 跟踪挂单、买入价格和佣金
        self.order = None  # 当前订单状态
        self.buyprice = None  # 买入价格
        self.buycomm = None  # 买入佣金
        ################################  技术指标 ################################
        # 简单移动平均线（SMA）
        self.sma = 
    def next(self):
        ''' 
            每个K线周期调用的策略逻辑
        '''
        # 记录当前收盘价
        self.log('收盘价, %.2f' % self.dataclose[0]) 

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
                self.log(
                    '买入执行, 价格: %.2f, 成本: %.2f, 佣金 %.2f' %  # 记录买入详情
                    (order.executed.price, order.executed.value, order.executed.comm)
                )
                self.buyprice = order.executed.price
                self.buycomm = order.executed.comm
            else:  # 卖出订单
                self.log('卖出执行, 价格: %.2f, 成本: %.2f, 佣金 %.2f' %
                         (order.executed.price, order.executed.value, order.executed.comm))
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

    def stop(self):
        self.log('SMA周期:%2d, 最周投资组合价值: %.2f ' %(self.params.sma_period, self.broker.getvalue()), opt_log=True)

    def log(self, txt, dt=None, opt_log=False):
        '''
            策略的日志记录函数
        '''
        if not self.params.opt_strategy or opt_log:
            dt = dt or self.datas[0].datetime.date(0)  # 若无指定日期，使用当前数据日期
            print('%s, %s' % (dt.isoformat(), txt))  # 打印日期和日志内容

if __name__ == '__main__':
    cerebro = bt.Cerebro()  # 创建Cerebro引擎（核心控制类）

    # 添加策略并设置参数
    # cerebro.addstrategy(TestStrategy, sma_period=20)  # 设定移动平均周期为20
    cerebro.optstrategy(TestStrategy, sma_period=range(5, 30)) # 优化参数

    # 获取数据文件路径（适配不同执行路径）
    modpath = os.path.dirname(os.path.abspath(sys.argv[0]))
    datapath = os.path.join(modpath, '../datas/orcl-1995-2014.txt')  # 数据文件路径

    # 创建数据源（Yahoo格式CSV）
    data = bt.feeds.YahooFinanceCSVData(
        dataname=datapath,
        fromdate=datetime.datetime(2000, 1, 1),  # 起始日期
        todate=datetime.datetime(2000, 12, 31),  # 结束日期
        reverse=False  # 不反转数据顺序
    )
    print(data)
    cerebro.adddata(data)  # 将数据加载到引擎

    # 设置初始资金10万
    cerebro.broker.setcash(100000.0)

    # 设置交易手数（固定10股/单位）
    # cerebro.addsizer(bt.sizers.FixedSize, stake=10)
    # 设置交易手数（百分比/半仓）
    cerebro.addsizer(bt.sizers.PercentSizer, percents=50)

    # 设置佣金为2.5/万
    cerebro.broker.setcommission(commission=(2.5/1e4))

    # 打印初始投资组合价值
    print('初始投资组合价值: %.2f' % cerebro.broker.getvalue())

    cerebro.run(maxcpus=1)  # 执行策略回测

    # 打印最终投资组合价值
    print('最终投资组合价值: %.2f' % cerebro.broker.getvalue())

    # cerebro.plot()  # 可视化回测结果