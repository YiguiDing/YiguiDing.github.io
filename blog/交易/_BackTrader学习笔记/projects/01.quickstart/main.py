from __future__ import (absolute_import, division, print_function,
                        unicode_literals)  # 兼容Python 2和3的未来特性导入
import datetime  # 用于处理日期时间对象
import os.path  # 管理文件路径
import sys  # 获取脚本名称（通过argv[0]）

# 导入backtrader量化交易框架
import backtrader as bt
# 导入量化策略
from Strategy import TestStrategy

if __name__ == '__main__':
    cerebro = bt.Cerebro()  # 创建Cerebro引擎（核心控制类）

    # 添加策略并设置参数
    cerebro.addstrategy(TestStrategy, sma_period=20)  # 设定移动平均周期为20
    # cerebro.optstrategy(TestStrategy, sma_period=range(5, 30)) # 优化参数

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