#ifndef __MyDispatcher__
#define __MyDispatcher__
#include <napi.h>

class MyDispatcher : public Napi::AsyncWorker
{
private:
    Napi::Function jsEmitFun;
    Napi::ThreadSafeFunction tsEmitFun;

public:
    MyDispatcher(Napi::Env env, Napi::Function &callback);
    /**
     Execute() 方法设计为在工作线程上执行。
     这是 AsyncWorker 类的异步本质的一部分，
     它允许长时间运行的任务或计算密集型操作在不阻塞 Node.js 事件循环的独立线程上执行。
     */
    void Execute() override;
    void OnOK() override;
    void OnError(const Napi::Error &e) override;
    void Destroy() override;
    std::vector<napi_value> GetResult(Napi::Env env);
};
#endif