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
        self.sma = bt.indicators.SimpleMovingAverage(self.datas[0], period=self.params.sma_period)
        # 指数移动平均线（EMA）
        self.ema = bt.indicators.ExponentialMovingAverage(self.datas[0], period=25)
        # 加权移动平均线（WMA）
        self.wma = bt.indicators.WeightedMovingAverage(self.datas[0], period=25, subplot=True)
        # MACD柱状图指标
        self.macd = bt.indicators.MACDHisto(self.datas[0])
    def next(self):
        ''' 
            每个K线周期调用的策略逻辑
        '''
        # 记录当前收盘价
        self.log('收盘价, %.2f' % self.dataclose[0]) 
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
