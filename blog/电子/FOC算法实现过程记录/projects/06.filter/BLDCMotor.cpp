#include "BLDCMotor.hpp"

BLDCMotor::BLDCMotor()
{
}
void BLDCMotor::connectDriver(BLDCDriver *driver)
{
    this->driver = driver;
}
void BLDCMotor::connectSensor(Sensor *sensor)
{
    this->sensor = sensor;
}
void BLDCMotor::initFOC()
{
    if (this->driver)
    {
        this->driver->initDriver();
        this->driver->enableDriver(true);
        this->driver->setPhraseVoltage(0, 0, 0);
    }
    if (this->sensor)
    {
        this->sensor->initSensor();
        this->sensor->connectMotor(this);
        this->sensor->alignSensor();
        this->sensor->update();
    }
}
#include "LowPassFilter.hpp"
LowPassFilter filter4 = LowPassFilter(40);
void BLDCMotor::loopFOC()
{
    if (this->sensor)
        this->sensor->update();
    this->setPhraseVoltage(0, 1 * _INT16_ONE_, filter4(this->sensor->getPositons() * 7));
}

/**
 * 设置相电压
 * @param u_d int16_t [-32768,32767] 表示 [-1,1] 精度：1/32768 = 0.0000305
 * @param u_q int16_t [-32768,32767] 表示 [-1,1]
 * @param e_angle uint16_t [0,65535] 表示 [0,2PI] 精度：360°/65535 = 0.00549°
 */
void BLDCMotor::setPhraseVoltage(int16_t u_d, int16_t u_q, uint16_t e_angle)
{
    int16_t sin, cos;
    // 计算三角函数
    _sincos(e_angle, &sin, &cos);
    // 帕克逆变换
    int16_t u_alpha = ((cos * (int32_t)u_d) + (-sin * (int32_t)u_q)) / _INT16_ONE_;
    int16_t u_beta = ((sin * (int32_t)u_d) + (cos * (int32_t)u_q)) / _INT16_ONE_;
    // 克拉克逆变换(等幅值形式)
    int16_t u_a = u_alpha;
    int16_t u_b = (-u_alpha + _INT16_SQRT3_ * u_beta / _INT16_ONE_) / 2;
    int16_t u_c = -(u_a + u_b);
    // 设置相电压
    driver->setPhraseVoltage(u_a, u_b, u_c);
}