#include "MyDispatcher.hh"

#include <iostream>
#include <thread>

MyDispatcher::MyDispatcher(Napi::Env env, Napi::Function &jsEmitFun)
    : AsyncWorker(env),
      jsEmitFun(jsEmitFun),
      tsEmitFun{Napi::ThreadSafeFunction::New(env, jsEmitFun, "tsEmitFun", 0, 1)}
{
}
void MyDispatcher::Execute()
{
    std::cout << "Execute" << std::endl;

    // 模拟建立连接
    std::this_thread::sleep_for(std::chrono::seconds(1));

    tsEmitFun.BlockingCall(
        [](Napi::Env env, Napi::Function jsEmitFun)
        {
            jsEmitFun.Call({Napi::String::New(env, "open"), env.Undefined()});
        });

    // 模拟传输数据
    std::this_thread::sleep_for(std::chrono::seconds(1));
    for (size_t i = 0; i <= 10; i++)
    {
        tsEmitFun.BlockingCall(
            [](Napi::Env env, Napi::Function jsEmitFun)
            {
                uint8_t data[] = {0, 1, 2, 3, 4};
                jsEmitFun.Call({Napi::String::New(env, "data"), Napi::Buffer<uint8_t>::New(env, data, sizeof(data))});
            });
        std::this_thread::sleep_for(std::chrono::seconds(1));
    }

    // 模拟断开链接
    std::this_thread::sleep_for(std::chrono::seconds(1));
    tsEmitFun.BlockingCall(
        [](Napi::Env env, Napi::Function jsEmitFun)
        {
            jsEmitFun.Call({Napi::String::New(env, "close"), env.Undefined()});
        });
}
void MyDispatcher::OnOK()
{
    std::cout << "OnOK" << std::endl;
}
void MyDispatcher::OnError(const Napi::Error &e)
{
    std::cout << "OnError" << std::endl;
}
void MyDispatcher::Destroy()
{
    std::cout << "Destroy" << std::endl;
}
std::vector<napi_value> MyDispatcher::GetResult(Napi::Env env)
{
    std::cout << "GetResult" << std::endl;
    return {};
}
