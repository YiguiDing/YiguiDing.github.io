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
    float limit_voltage = 12.0f;
    // 限制速度
    float limit_velocity = 100.0f;
    // 限制电流
    float limit_current = 10.0f;
    // directron
    MotorDirectrion direction = MotorDirectrion::ANTI_CLOCK_WISE;
    // filter
    LowPassFilter current_q_filter{10};
    LowPassFilter current_d_filter{10};
    LowPassFilter shaft_velocity_filter{5};
    LowPassFilter shaft_angle_filter{100};
    // 调参日志
    // pid-controller
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
    //
    //
    PIDControler pid_iq_controller{0.75, 0, 0, 12, 0};
    PIDControler pid_id_controller{0.75, 0, 0, 12, 0};
    // kp 1rad->0.5A
    PIDControler pid_velocity_controller{1, 0.2, 0, 5, 0};

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
