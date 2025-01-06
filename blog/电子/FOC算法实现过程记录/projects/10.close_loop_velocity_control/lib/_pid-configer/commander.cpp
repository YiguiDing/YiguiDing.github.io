#ifndef __PID_Configer_H__
#define __PID_Configer_H__
#include "simple-protocal/src/simple-protocal.cpp"
#include <vector>
#include <functional>
#include <cstring> // for memcpy

class PID_Configer
{
private:
    SimpleProtocolParser protocal;
    std::vector<std::vector<uint8_t>> tx_queue;
    void send(const std::vector<uint8_t> &data)
    {
        if (tx_queue.size() > 10)
            return;
        auto frame = this->protocal.encoder(data);
        tx_queue.push_back(frame);
    }

public:
    // send and receive message
    virtual void send(uint8_t byte) = 0;

public:
    void update()
    {
        if (tx_queue.empty())
        {
            return;
        }
        if (tx_queue[0].empty())
        {
            tx_queue.erase(tx_queue.begin());
            return;
        }
        this->send(tx_queue[0][0]);
        tx_queue[0].erase(tx_queue[0].begin());
    }

public:
    void receive(uint8_t byte)
    {
        auto data = protocal.decoder(byte);
        if (data.size() == 0)
            return;
        this->ack();
        this->process(data);
    }
    virtual void onSetKp(uint8_t ch, float Kp) = 0;
    virtual void onSetKi(uint8_t ch, float Ki) = 0;
    virtual void onSetKd(uint8_t ch, float Kd) = 0;
    virtual void onSetLimit(uint8_t ch, float limit) = 0;
    virtual void onSetROC(uint8_t ch, float roc) = 0;
    virtual void onSetTarget(uint8_t ch, float target) = 0;
    virtual void onDrawDragram(uint8_t ch, float target, float current) = 0;

    // cmd
    void setKp(uint8_t ch, float Kp)
    {
        // |  cmd    |  ch     |   num    |
        // | uint8_t | uint8_t | float32 |
        std::vector<uint8_t> data(4);
        data[0] = Command::SetKp;
        data[1] = ch;
        memcpy(&data[2], &Kp, sizeof(Kp));
        send(data);
    }

    void setKi(uint8_t ch, float Ki)
    {
        // |  cmd    |  ch     |   num    |
        // | uint8_t | uint8_t | float32 |
        std::vector<uint8_t> data(4);
        data[0] = Command::SetKi;
        data[1] = ch;
        memcpy(&data[2], &Ki, sizeof(Ki));
        send(data);
    }

    void setKd(uint8_t ch, float Kd)
    {
        // |  cmd    |  ch     |   Kd     |
        // | uint8_t | uint8_t | float32  |
        std::vector<uint8_t> data(4);
        data[0] = Command::SetKd;
        data[1] = ch;
        memcpy(&data[2], &Kd, sizeof(Kd));
        send(data);
    }

    void setOutputLimit(uint8_t ch, float limit)
    {
        // |  cmd         |  ch     |   limit   |
        // | uint8_t      | uint8_t |  float32  |
        std::vector<uint8_t> data(6);
        data[0] = Command::SetOutputLimit;
        data[1] = ch;
        memcpy(&data[2], &limit, sizeof(limit));
        send(data);
    }

    void setOutputROC(uint8_t ch, float outputROC)
    {
        // |  cmd         |  ch     |  outputROC |
        // | uint8_t      | uint8_t |  float32   |
        std::vector<uint8_t> data(6);
        data[0] = Command::SetOutputROC;
        data[1] = ch;
        memcpy(&data[2], &outputROC, sizeof(outputROC));
        send(data);
    }

    void setTarget(uint8_t ch, float target)
    {
        // |  cmd         |  ch     |  target   |
        // | uint8_t      | uint8_t |  float32  |
        std::vector<uint8_t> data(6);
        data[0] = Command::SetTarget;
        data[1] = ch;
        memcpy(&data[2], &target, sizeof(target));
        send(data);
    }
    void drawDragram(uint8_t ch, float target, float current)
    {
        // |   ch    | target  | current |
        // | uint8_t | float32 | float32 |
        std::vector<uint8_t> data(10);
        data[0] = Command::DrawDragram;
        data[1] = ch;
        memcpy(&data[2 + 0], &target, 4);
        memcpy(&data[2 + 4], &current, 4);
        send(data);
    }
    void ack()
    {
        std::vector<uint8_t> data(1);
        data[0] = Command::Ack;
        send(data);
    }

private:
    enum Command
    {
        Ack = 0,
        SetKp = 1,
        SetKi = 2,
        SetKd = 3,
        SetOutputLimit = 4,
        SetOutputROC = 5,
        SetTarget = 6,
        DrawDragram = 7
    };
    /**
     * 处理接收到的数据
     */
    void process(const std::vector<uint8_t> &data)
    {
        uint8_t cmd = data[0];
        std::vector<uint8_t> args(data.begin() + 1, data.end());
        switch (cmd)
        {
        case Command::SetKp:
            handleSetKp(args);
            break;
        case Command::SetKi:
            handleSetKi(args);
            break;
        case Command::SetKd:
            handleSetKd(args);
            break;
        case Command::SetOutputLimit:
            handleSetOutputLimit(args);
            break;
        case Command::SetOutputROC:
            handleSetOutputROC(args);
            break;
        case Command::SetTarget:
            handleSetTarget(args);
            break;
        case Command::DrawDragram:
            handleDrawDragram(args);
            break;
        default:
            break;
        }
    }

    void handleSetKp(const std::vector<uint8_t> &args)
    {
        // |   ch    |    kp    |
        // | uint8_t | float32 |
        if (args.size() < 5)
            return;
        uint8_t ch = args[0];
        float Kp;
        memcpy(&Kp, &args[1], sizeof(Kp));
        onSetKp(ch, Kp);
    }

    void handleSetKi(const std::vector<uint8_t> &args)
    {
        // |   ch    |    Ki    |
        // | uint8_t | float32 |
        if (args.size() < 5)
            return;
        uint8_t ch = args[0];
        float Ki;
        memcpy(&Ki, &args[1], sizeof(Ki));
        onSetKi(ch, Ki);
    }

    void handleSetKd(const std::vector<uint8_t> &args)
    {
        // |   ch    |    Kd    |
        // | uint8_t | float32 |
        if (args.size() < 5)
            return;
        uint8_t ch = args[0];
        float Kd;
        memcpy(&Kd, &args[1], sizeof(Kd));
        onSetKd(ch, Kd);
    }

    void handleSetOutputLimit(const std::vector<uint8_t> &args)
    {
        // |   ch    |  limit  |
        // | uint8_t | float32 |
        if (args.size() < 5)
            return;
        uint8_t ch = args[0];
        float limit;
        memcpy(&limit, &args[1], sizeof(limit));
        onSetLimit(ch, limit);
    }
    void OnSetOutputLimit(uint8_t ch, uint16_t limit);

    void handleSetOutputROC(const std::vector<uint8_t> &args)
    {
        // |   ch    | outputROC  |
        // | uint8_t | float32    |
        if (args.size() < 5)
            return;
        uint8_t ch = args[0];
        float outputROC;
        memcpy(&outputROC, &args[1], sizeof(outputROC));
        onSetROC(ch, outputROC);
    }

    void handleSetTarget(const std::vector<uint8_t> &args)
    {
        // |   ch    | outputROC  |
        // | uint8_t | float32    |
        if (args.size() < 5)
            return;
        uint8_t ch = args[0];
        float target;
        memcpy(&target, &args[1], sizeof(target));
        onSetTarget(ch, target);
    }

    void handleDrawDragram(const std::vector<uint8_t> &args)
    {
        // |   ch    | target  | current |
        // | uint8_t | float32 | float32 |
        if (args.size() < 9)
            return;
        uint8_t ch = args[0];
        float target, current;
        memcpy(&target, &args[1 + 0], sizeof(target));
        memcpy(&current, &args[5 + 4], sizeof(current));
        onDrawDragram(ch, target, current);
    }
};

#endif