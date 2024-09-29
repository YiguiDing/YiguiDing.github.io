#ifndef __BLDCMotor_H__
#define __BLDCMotor_H__
#include <stdint.h>
#include "foc_utils.h"
#include "BLDCDriver.hpp"
#include "LowPassFilter.hpp"
#include "CurrentSensor.hpp"
#include "Sensor.hpp"
#include "Timer.hpp"
#include "pid.hpp"

class BLDCMotor : Timer
{
    enum MotorDirectrion : int8_t
    {
        UNKNOW = 0,
        ANTI_CLOCK_WISE = 1,
        CLOCK_WISE = -1,
    };

public:
    // 极对数
    uint8_t polePairs;
    // 供电电压
    float power_supply_voltage = 12.0f;
    // 限制电压
    float limit_voltage = 5.0f;
    // 限制电流
    float limit_current = 10.0f;
    // 限制速度
    float limit_velocity = 1000.0f;

    // directron
    MotorDirectrion direction = MotorDirectrion::ANTI_CLOCK_WISE;
    // 调参日志
    // 2024-09-26 21:37
    //      kp参数的确定：
    //      iq滤波5ms(任意给定的较小值)target_iq=0 时
    //          设置 kp>=0.7 电机抖动
    //          设置 kp=0.6不抖动但有噪音
    //          设置 kp=0.5不抖动有噪声（dq有4ms周期0.2A振幅电流）
    //      iq滤波常数的确定：
    //      kp: = 0.5 target_iq=0时
    //          设置 iq滤波常数10ms 不抖动有噪声但有明显减小（dq有14ms周期0.2A振幅电流）
    //      ki积分系数的确定：
    //      kp=0.5 iq滤波10ms target_iq=0
    //          设置 ki=100 电机飞快转动 堵转后电机可停下不转动，target_iq=1电机复飞转，然设置target_iq=0不奏效。
    //          设置 ki=50 电机飞快转动 堵转后电机可停下不转动，target_iq=1电机复飞转，然设置target_iq=0不奏效。
    //          设置 ki=25 电机飞快转动
    //          设置 ki=10 电机飞快转动
    //          设置 ki=5 电机飞快转动
    //          设置 ki=2 电机飞快转动
    //          设置 ki=1 电机低速启转然后停下 设置target_iq=1电机 **加速飞转** 设置target_iq=0电机无法减速停下
    //          设置 ki=0.5  电机低低速启转然后缓慢停下 同上
    //          设置 ki=0.25  电机低低低速启转然后缓慢停下 设置target_iq=1电机 **加速起转** 然后设置target_iq=0电机减速停下  复设置target_iq=1电机加速起转,转到飞快 然后设置target_iq=0电机无法减速停下
    //          设置 ki=0.1 电机不起转 然后设置target_iq=1 电机 **起转**  然后设置target_iq=0  电机缓慢减速停下 然后设置target_iq=1 电机 **起转** 等待一个会儿后电机开始加速iq逐渐接近1并在附近波动而后超过,电机继续加速,设置 target_iq=0无法停下
    //          设置 ki=0.05 电机不起转 然后设置target_iq=1 电机 缓慢 **起转** 达到目标iq电流,然后由于积分过大,达到目标值后电机继续加速,无法停下
    //          设置 ki=0.02 表现稍微好一点,但问题同上.
    //          设置 ki=0.01 表现稍微再好一点,但问题同上. 如,设置target_iq=1 实际iq将会缓慢增加到1(大约10秒),但在缓慢增加的过程中误差积分在累计,此时设置target_iq=2,实际iq又缓慢增加到2(大约10秒),误差积分又持续累加,导致设置target_iq=0时,无法减速停下(可能需要长达20秒).
    //          设置 ki=0.005 表现稍微再再好一点,但问题同上(但已逐渐不明显). 如设置target_iq=5 但实际上电机快速旋转iq只能达到4 长时间保持将导致误差的积分累计,导致输出始终很大.
    //          设置 ki=0.001 积分项逐渐失去作用,设置target_iq=1 但实际iq始终为0.40
    //          结论是积分项不能太小,但现在积分项太大则会导致电机无法控制,所以原因应该出在kp,应该放大Kp,但现在kp也不能太大,kp>0.7电机抖动,抖动来源于iq的噪声,所以应该加大滤波
    // 2024-09-27 00:14
    //      iq低通滤波器常数的再次确定
    //          设置 filter_iq = 50ms; kp = 1  target_iq=0,1,2时电机表现较为正常,无任何抖动噪声,但是 target_iq=3时,可能是由于iq上的微小周期波动导致输出uq也周期波动,进而引发电机有微弱的加速减速现象. 怀疑问题可能是滤波过大
    //          设置 filter_iq = 20ms; kp = 1  target_iq=0,1,2时电机表现较为正常  target_iq=3时上述现象更加明显了,并且当target_iq=4时,实际iq能达到5,target_iq=4实际iq却又只能能达到0,并且此时无法通过设置target_iq=0让电机停下,而要逐步降低target_iq=[4,3,2,1,0] 怀疑问题可能是滤波过小
    //          设置 filter_iq = 100ms; kp = 1  target_iq=0,1,2时电机表现较为正常   target_iq=3时上述现象仍然存在 电机周期加减速. 怀疑问题可能是kp过大,导致iq上的周期波动被放大1倍使之成为电压激励.
    //          设置 filter_iq = 50ms; kp = 0.8  target_iq=0,1,2,3,4,5,6时电机表现较为正常   但当target_iq=[6->0] 变化时电机无法停下,需逐步递减 即target_iq=[6,5,4,3,2,1,0] 这样输出的uq不会急剧变化
    //          设置 filter_iq = 50ms; kp = 0.8  pid_iq_max_rate=1 及在上述基础上限制pid输出的uq速度为每秒变化1v 电机在target_iq=[0,1,2] 表现非常正常完美, 但当target_iq=[3]时出现问题,电机逐渐加速,iq波形逐渐周期变换,然后变到负半轴,该过程中error逐渐增大,输出uq逐渐增大,转速也增大.
    //          设置 filter_iq = 20ms; kp = 0.8  pid_iq_max_rate=1 问题同上.
    //          这样下去filter_iq将逐渐减小,kp也逐渐减小,由回到最上面的情况了,现在尝试在原先的基础上限制uq变化率
    // 2024-09-27 00:55
    //   回溯：尝试回到原先配置
    //       设置 filter_iq = 5ms; kp = 0.5  ki=1 pid_iq_max_rate=1 target_iq=0 电机飞速旋转 尝试修改filter_iq
    //       设置 filter_iq = 10ms; kp = 0.5  ki=1 pid_iq_max_rate=1 target_iq=0  同上 尝试修改 ki
    //       设置 filter_iq = 10ms; kp = 0.5  ki=0.1 pid_iq_max_rate=1 target_iq=0 电机低低速启转然后缓慢停下 然后设置target_iq=1 电机 **逐渐加速** 然后逐渐越来越快.  尝试修改增大filter_iq
    //       设置 filter_iq = 20ms; kp = 0.5  ki=0.1 pid_iq_max_rate=1 target_iq=0  现象问题同上,但突然发现iq id波形在当用手转动电机时呈正弦波动,感觉滤波太大. 另外暂时应该不设置积分 应当保证 iq和id波形为直流没有交流分量.
    //       设置 filter_iq = 5ms; kp = 0.5  ki=0 pid_iq_max_rate=1 target_iq=[-4,3,2,1,0,1,2,3,4]  没有积分就非常完美, 唯一的缺点就是没有积分系数后电流始终无法达到目标值,另外就是uq的变化率可能有点小,当从target_iq=[6->0]时,电机速度的衰减时间较长.,另外不知道为什么iq中依然有交流量,怀疑是因为此时测得的iq是上一时候的电压响应,而上一时刻的电压由上一时刻的位置计算得出.还有就是为什么target_iq=4,为什么iq,id=[+4,-4]? id为什么不是0? 又测试了下发现堵转时又正常了.可能就是这样....
    //       设置 filter_iq = 5ms; kp = 0.5  ki=0 pid_iq_max_rate=2 target_iq=[-8->8]  非常完美 但是还没达到快速正反转的效果
    //       设置 filter_iq = 5ms; kp = 0.5  ki=0 pid_iq_max_rate=4 target_iq=[-8->8]  同上
    //       设置 filter_iq = 5ms; kp = 0.5  ki=0 pid_iq_max_rate=8 target_iq=[-2,-1,0,1,2] 电机不转 target_iq=[3,4,5]电机才起转  转速在target_iq=[-3,-4,-5]时比target_iq=[3,4,5]慢；感觉uq变换率已到极限，尝试减小变化率找到最佳值，然后寻找最佳的kp。
    //       设置 filter_iq = 5ms; kp = 0.5  ki=0 pid_iq_max_rate=6 target_iq=[-9,9]。非常完美 正反转速度显著提高 增加uq变化率到7
    //       设置 filter_iq = 5ms; kp = 0.5  ki=0 pid_iq_max_rate=7 target_iq=[-9,9]。非常完美 正反转速度显著提高
    //       设置 filter_iq = 5ms; kp = 0.5  ki=0 pid_iq_max_rate=8 target_iq=[-9,9]。非常完美 为什么上面测试uq变化率=8的这种情况会有问题？  继续增加
    //       设置 filter_iq = 5ms; kp = 0.5  ki=0 pid_iq_max_rate=9 target_iq=[-9,9]。也没问题，有没有一种可能不限制uq变化率也可以很完美？ 因为现在kp本来就不大，而且上面发现需要限制uq变化率是因为ki的影响。尝试不限制uq变化率
    //       设置 filter_iq = 5ms; kp = 0.5  ki=0 pid_iq_max_rate=0 target_iq=[-9,9]。没问题，也就是说如果kp很小的话根本不需要限制uq变化率？尝试增大kp
    //       设置 filter_iq = 5ms; kp = 1.0  ki=0 pid_iq_max_rate=0 target_iq=[0,1,2,3,4,5] 没问题 但是 target_iq=[5->0] 停不下来，可能需要限制uq变化率
    //       设置 filter_iq = 5ms; kp = 1.0  ki=0 pid_iq_max_rate=10 target_iq=[0,1,2,3,4,5] 没问题   但是 target_iq=[5->0] 停不下来 说明uq变化率过大需要减小
    //       设置 filter_iq = 5ms; kp = 1.0  ki=0 pid_iq_max_rate=5 target_iq=[0,1,2] 没问题 但target_iq=[0,1,3]时电机突然反向加速旋转，然后不受控制。
    //       设置 filter_iq = 5ms; kp = 1.0  ki=0 pid_iq_max_rate=3 target_iq=[0]  没问题  target_iq=[1] 时问题同上。
    //       设置 filter_iq = 5ms; kp = 1.0  ki=0 pid_iq_max_rate=1 target_iq=[0] 问题同上...... 但target_iq=[0->1]电机加速过于缓慢 为什么？ kp 太大了？程序有问题？
    //   回溯：因为上面uq变化率为10现象表现为太大，为5时的现象可能是因为太小。现在设置为7
    //       设置 filter_iq = 5ms; kp = 1.0  ki=0 pid_iq_max_rate=7 target_iq=[0,1] target_iq=[1->2]转动电机逐渐加速不受控
    // 2024-09-27 09:30
    //   回溯：不限制uq变化率，寻找可正常工作的kp最大值
    //       设置 filter_iq = 5ms; kp = 0.75  ki=0 pid_iq_max_rate=0 target_iq=[0,1,2,3,4,5] 没问题 没有限制uq变化率，target_iq=[9 -> -9]也没问题,可以快速正反转  但是没限制电流，下管好像烧了....; 测了下，B相对地阻值10欧姆，其余两相为8.8k欧姆；
    // 2024-09-27 21:01
    //       设置 filter_iq = 5ms; kp = 0.75  ki=0 pid_iq_max_rate=0
    //                  target_iq=1 旋转时，实际iq在0.2附近，振幅为0.3左右
    //                  target_iq=2 旋转时，实际iq在0.5附近，振幅为0.3左右
    //                  target_iq=3 旋转时，实际iq在0.8附近，振幅为0.25左右
    //                  target_iq=4 旋转时，实际iq在1.19附近  振幅0.25左右
    //                  结论是kp过小
    //      设置 filter_iq = 5ms; kp = 1  ki=0 pid_iq_max_rate=0
    //                  target_iq=1 堵转时，实际iq在0.26
    //                  target_iq=2 堵转时，实际iq在1.08
    //                  结论是kp过小
    //      设置 filter_iq = 5ms; kp = 2  ki=0 pid_iq_max_rate=0
    //                  target_iq=1 堵转时，实际iq最大在0.85 最小在0.55
    //                  target_iq=2 堵转时，实际iq最大在1.2~1.4 但是由于iq的周期波动，电机会周期加减速，
    //                  结论是kp还要增大一些，iq滤波常数要加大
    //      设置 filter_iq = 5ms; kp = 2.35  ki=0 pid_iq_max_rate=0
    //                  target_iq=1 堵转时，实际iq最大在0.86 最小在0.42
    //      设置 filter_iq = 5ms; kp = 3  ki=0 pid_iq_max_rate=0
    //                  target_iq=1 堵转时，实际iq最大在0.9 最小在0.5, 松手后电机抖动，稳压电源显示电流达到2A
    //                  结论是kp=2 可能表现还算不错，目标1，实际能达到0.7左右
    //                  但问题时为什么实际id iq周期变化，而且周期和转子位子相关，感觉像计算错了？？？
    // 2024-09-27 23:53
    //      重新来，现在怀疑iq有计算错误
    // 2024-09-28 15:02
    //      测试输出了u_alpha u_beta 和 i_alpha i_beta 波形没问题 正相关，而 i_alpha i_beta => i_d i_q的计算公式也没问题。
    //      尝试继续调kp
    //      设置 filter_iq = 5ms; ki=0 pid_iq_max_rate=0
    //      kp = 2.0 target_iq=1 轻微堵转  i.q∈[0.2,0.8] u_q∈[1.57,0.4]
    //      kp = 2.5 target_iq=1 轻微堵转  i.q∈[0.29,0.84] u_q∈[1.77,0.41]
    //      kp = 2.8 target_iq=1 轻微堵转  i.q∈[0.35,0.85] u_q∈[1.82,0.42]
    //      kp = 3.0 target_iq=1 轻微堵转  i.q∈[0.35,0.77] u_q∈[1.95,0.70]
    //      结论： 感觉kp = 2.8 表现不错
    // 2024-09-28 15:30
    //      尝试继续调ki
    //      设置 filter_iq = 5ms; ki=0 pid_iq_max_rate=0 kp = 2.8
    //      ki = 1 target_iq=0 开机电机慢速起转 然后停下  target_iq=1 电机起转 但是再次设置target_iq=0 无法停下
    //      ki = 0.1 target_iq=0 开机电机静止 然后设置target_iq=1 电机起转 但是积分效果不明显（iq应当在1附近波动） 轻微堵转 i.q∈[0.58,0.98] u_q∈[2.24,1.11]
    //      ki = 0.5 target_iq=0 开机电机静止 然后设置target_iq=1 电机起转 约10秒后 iq可在1附近波动 i.q∈[0.82,1.17] u_q∈[2.42,1.43] 设置设置target_iq=0，uq也要几秒时间才能恢复到0
    //      ki = 0.8 target_iq=0 开机电机慢速起转然后停下
    //      ki = 0.7 target_iq=0 开机电机慢速起转然后停下
    //      ki = 0.6 target_iq=0 开机电机静止 但是电机uq会逐渐到负半轴去，然后堵转的话会导致电机反转 ki=0.6还是过大 但是如果要实现让iq可在1附近波动，上面测试结果是ki = 0.5要10秒，就是ki=0.5太小
    //      ki = 0.55 target_iq=0 开机电机静止 然后设置target_iq=1 电机起转 轻微堵转导致iq始终不能达到1，这将累计大量误差，这导致然后设置target_iq=0，uq会从0.4v缓慢落下 有时甚至无法停下
    //   因为上面测试结果是 ki = 0.5 约10秒后 iq可在1附近波动，那么设置ki=5应该就是1秒，但是这肯定导致开机电机起转，所以要限制uq变换率
    //      ki = 5  output_roc_limit=1 可能uq变化过慢
    //      ki = 5  output_roc_limit=10 可能uq变化过慢
    //      ki = 5  output_roc_limit=100 uq变化不慢了，似乎和uq变化率无关，ki还是小了
    // 受不了了，还是得写一个PID调参助手
    //      ki = 200  output_roc_limit=100 感觉可能uq变化率过大
    //      ki = 200  output_roc_limit=50 感觉可能uq变化率过大
    //      ki = 200  output_roc_limit=25 感觉可能uq变化率过大
    //      ki = 200  output_roc_limit=10 感觉不是uq变化率的问题
    //      ki = 100  output_roc_limit=50 感觉uq变化率过小
    //      ki = 200  output_roc_limit=0 堵转达到目标电流值大约要30ms
    //      ki = 100  output_roc_limit=0 堵转达到目标电流值大约要200ms
    //      ki = 50  output_roc_limit=0 堵转达到目标电流值大约要130ms 通电起转，在给电机稍许阻力表现很好，否则当设置target_iq=0电机难以停下 反复震荡后停下 时间较长
    //      ki = 40  output_roc_limit=0 同上 通电起转，堵转达到目标电流值大约要150ms
    //      ki = 25  output_roc_limit=0 同上
    //      ki = 20  output_roc_limit=0 同上 通电起转，堵转达到目标电流值大约要300ms 电机空转时设置target_iq=0电机可以反复震荡后难以停下
    //      ki = 10  output_roc_limit=0 同上 通电起转，
    //      ki = 5  output_roc_limit=0 同上 通电起转，
    //      ki = 3  output_roc_limit=0 同上 但能感受到 随着积分系数的减小，达到目标值所需的时间越来越长
    //      ki = 6  output_roc_limit=0 同上 为降低响应时间，提高ki
    //      ki = 10  output_roc_limit=0 同上 响应时间也低了 大概1秒，uq不会过冲，感觉已经非常完美 缺点就是得给一点阻力
    //      ki = 100  output_roc_limit=0 同上
    // 确定 iq滤波常数5ms kp=2.8 ki=200
    // 2024-09-29T11:30
    // 尝试重调电流环ki减小抖动
    //      ki= 300 设置电流为1 实际电流最大在[0.84,1.19] 即±20mA波动
    //      ki= 150 设置电流为1 实际电流最大在[0.83,1.21] 即±20mA波动
    //      ki= 100 设置电流为1 实际电流最大在[0.83,1.15] 即±15mA波动
    //      ki= 50 设置电流为1 实际电流最大在[0.83,1.13] 即±13mA波动
    //      ki= 25 设置电流为1 实际电流最大在[0.87,1.13] 即±13mA波动
    // 结论，感觉ki= 50效果可以
    // filter
    LowPassFilter current_q_filter{5};
    LowPassFilter current_d_filter{5};
    LowPassFilter shaft_velocity_filter{30};
    LowPassFilter shaft_angle_filter{100};
    // pid-controller
    PIDControler pid_iq_controller{2.8, 5, 0, 12, 0};
    PIDControler pid_id_controller{2.8, 5, 0, 12, 0};
    // kp 1rad->0.5A
    // 2024-09-29T00:20
    // 尝试确定速度控制参数 kp
    //      shaft_velocity_filter=5 kp=1 ki=0 设置target_velocity=0,开机速度在【-10，10】抖动
    //      shaft_velocity_filter=5 kp=0.1 ki=0 不再抖动 设置速度为10系统开始有响应
    //      shaft_velocity_filter=5 kp=0.5 ki=0 抖动 开机速度在【-8.6，8.12】抖动
    //      shaft_velocity_filter=5 kp=0.25 ki=0  不再抖动 设置速度为5系统开始有响应
    // 尝试确定速度控制参数 ki
    //      shaft_velocity_filter=5 kp=0.25 ki=1 系统开始在0.2电角度圈数/秒 响应 但是依旧有顿挫感
    //      shaft_velocity_filter=5 kp=0.25 ki=10 系统开始可以在0.05响应 顿挫感没有了，但是有高频抖动
    // 尝试确定速度控制参数 shaft_velocity_filter
    //      shaft_velocity_filter=10 kp=0.25 ki=10 设置速度为0.1时 速度有 [-1.08,1.25]左右噪声 噪声周期30ms
    //      shaft_velocity_filter=30 kp=0.25 ki=10 噪声消失 但还是有来自永磁体的顿挫感 设置速度为10时，速度的顿挫感幅度[14.72,7.57] 周期为30ms
    //      shaft_velocity_filter=60 kp=0.25 ki=10 开机起转，系统将产生抖动
    //      shaft_velocity_filter=40 kp=0.25 ki=10 开机抖动然后静止，顿挫感无法消除，另外发现拨动转子会产生震荡周期40ms
    //      shaft_velocity_filter=80 kp=0.25 ki=10 开机失控转动无法停止
    // 结论：shaft_velocity_filter=30 kp=0.25 ki=10
    // 2024-09-29T09:34
    // 尝试重调kp:
    //      用匀速转动是电机抖动，尝试减小参数 kp
    //      kp=0.2 不抖动 但设置速度为5系统不响应
    //      kp=0.1 太小
    // 尝试调output_roc_limit:
    //      设置速度为0，然后拨动电机导致电机振荡抖动
    //      抖动周期 40ms 幅值[1.55,-0.57] 斜率为 （1.55- -0.57）/(40/4) = 1/10 = 0.1A/ms = 100A/s
    //      所以先尝试限制iq变换率为 50A/s
    //      output_roc_limit = 50A/s   抖动周期 10ms 幅值[-2.34,1.87] 斜率为  (1.87 - -2.34) / (10/4) = 0.052625 A/ms = 52 A/S
    //      output_roc_limit = 40A/s
    //      output_roc_limit = 25A/s   抖动周期 14ms 幅值[2.69,1.94] 斜率为  (2.69-1.94) / (14/4) = 0.0133928571428571 A/ms = 13.3928 A/S
    //      output_roc_limit = 10A/s
    //      output_roc_limit = 5A/s
    //      output_roc_limit = 2A/s   依然抖动
    // 2024-09-29T11:40
    // 尝试重调速度环ki减小抖动
    //      ki = 20 转子转动的颗粒感消失 但还不够平滑 设置目标速度1 波动范围[0.59,2.17]
    //      ki = 40 抖动现象有减弱 当目标速度为4是出现颗粒感 但空转难以控制 
    //      ki = 80 难以控制
    //      ki = 5 颗粒感过于明显
    // 尝试调速度环Kd
    //      kp=0.25 ki=10 kd=-10 剧烈抖动
    //      kp=0.25 ki=10 kd=-1 剧烈抖动
    //      kp=0.25 ki=10 kd=-0.5 剧烈抖动
    //      kp=0.25 ki=10 kd=-0.25 剧烈抖动
    //      kp=0.25 ki=10 kd=-0.1 剧烈抖动
    //      kp=0.25 ki=10 kd=-0.05 抖动
    //      kp=0.25 ki=10 kd=-0.01 抖动
    //      kp=0.25 ki=10 kd=-0.001 抖动
    //      kp=0.25 ki=10 kd=-0.0001 不再抖动
    //      kp=0.25 ki=10 kd=-100 剧烈抖动
    //      kp=0.25 ki=10 kd=-0.005 
    //      kd给高给低都没什么效果...
    // 尝试调速度环Ki 因为电机静止状态下功耗能达到12V0.128A
    //     电流ki=50 速度ki = 10 目标速度为0  12V0.128A
    //     电流ki=50 速度ki = 0 目标速度为0  12V0.128A
    //     电流ki=0 速度ki = 0 目标速度为0  12V0.132A 去掉积分项转速不会失控了....
    //     电流ki=0 速度ki = 5 目标速度为0  12V0.135A 速度加上积分项，可以消除速度误差了。但电流始终有1A误差
    //     电流ki=50 速度ki = 5 目标速度为0  12V0.138A 电流ki=50 目标速度为60则电机失控无法停下
    //     电流ki=25 速度ki = 5 目标速度为0  12V0.138A 电流ki=25 目标速度为90则电机失控无法停下
    //     电流ki=10 速度ki = 5 目标速度为0  12V0.162A 电流ki=10 目标速度为90则电机失控无法停下 电流响应时间达到260ms
    //     电流ki=5 速度ki = 5 目标速度为0  12V0.188A 电流ki=5 电流响应时间大于500ms 设置速度为90 电机仍然会失控
    //     电流ki=5 速度ki = 0 目标速度为0  12V0.152A 速度ki = 0 电机就不会失控了，说明和电流ki无关 
    //     电流ki=50 速度ki = 0 目标速度为0 设置速度0->90依然导致电机失控，即使去除速度ki项，电流ki还是过大
    //     电流ki=25 速度ki = 0 目标速度为0 ki还是过大
    //     电流ki=10 速度ki = 0 目标速度为0  设置转速从0->90电机不再失控 设置转速从90->90电机失控
    //     电流ki=20 速度ki = 0 目标速度为0 设置转速从90->90电机失控
    //     电流ki=0 速度ki = 0 设置转速从 90 <-> -90电机不失控
    //     电流ki=5 速度ki = 0 目标速度为0  12V0.152A  设置转速从 90 <-> -90电机失控
    //      感觉ki太小还是不行，可能得限制速度的变化率
    //     电流ki=2.5 速度ki = 0 
    // 
    PIDControler pid_velocity_controller{0.25, 0, 0, 5, 0};
private:
    //
    BLDCDriver *driver = nullptr;
    Sensor *sensor = nullptr;
    CurrentSensor *currentSensor = nullptr;

public:
    BLDCMotor(uint8_t polePairs, float power_supply_voltage);
    void connectDriver(BLDCDriver *driver);
    void connectSensor(Sensor *sensor);
    void connectCurrentSensor(CurrentSensor *currentSensor);
    void initFOC();
    void loopFOC();
    /**
     * 获取电角度
     */
    uint16_t electricalAngle();
    /**
     * 设置相电压
     * @param u_d int16_t [-32768,32767] 表示 [-1,1] 精度：1/32768 = 0.0000305
     * @param u_q int16_t [-32768,32767] 表示 [-1,1]
     * @param e_angle uint16_t [0,65535] 表示 [0,2PI] 精度：360°/65535 = 0.00549°
     */
    void setPhraseVoltage(int16_t u_d, int16_t u_q, uint16_t e_angle);
    /**
     * 开环电压控制
     */
    void open_loop_voltage_control(float target_ud, float target_uq);
    /**
     * 获取dq轴电流
     */
    CurrentDQ getCurrentDQ();
    /**
     * 闭环电流控制
     */
    void close_loop_current_control(float target);
    /**
     * 查找最佳pid参数
     */
    void find_close_loop_position_control_kp_ki_kd();
    /**
     * 获取机械角度
     */
    float shaftVelocity();
    /**
     * 闭环速度控制
     */
    void close_loop_velocity_control(float target);
    /**
     * 获取机械角度
     */
    float shaftAngle();
    /**
     * 闭环位置控制
     */
    void close_loop_position_control(float target);
};
#endif
