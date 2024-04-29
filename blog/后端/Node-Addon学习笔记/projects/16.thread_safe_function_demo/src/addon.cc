#include <napi.h>
#include <iostream>
#include <thread>
using namespace Napi;

// c++原生线程
std::thread nativeThread;
// Napi线程安全函数
ThreadSafeFunction tsfn;

Value startProcess(CallbackInfo &info)
{
    Env env = info.Env();
    Function fun = info[0].As<Function>();

    tsfn = ThreadSafeFunction::New(
        env,          // 环境
        fun,          // 回调
        "fun_tsfn",   // 资源名
        0,            // 队列大小（0无限）
        1,            // 初始线程数
        [](Env env) { // 用于清理线程的终结器
            std::cout << "finalizeCallback start" << std::endl;
            nativeThread.join(); // 等待线程执行完毕
            std::cout << "nativeThread.join();" << std::endl;
            std::cout << "finalizeCallback end" << std::endl;
        });

    nativeThread = std::thread(
        // 匿名函数，供线程调用
        []()
        {
            std::cout << "nativeThread start" << std::endl;
            for (uint8_t i = 0; i < 5; i++)
            {
                int *data = new int(clock()); // 用于演示数据的传递
                std::cout << std::to_string(i) << std::endl;
                std::cout << "BlockingCall start" << std::endl;
                napi_status status = tsfn.BlockingCall(                 // 线程安全函数的阻塞调用
                    data,                                               // 第一个参数可以传递数据
                    [](Napi::Env env, Function jsCallback, int *data) { // lambda回调
                        std::cout << "lambda start" << std::endl;
                        jsCallback.Call({Number::New(env, *data)}); // 传递参数并调用
                        std::cout << "lambda end" << std::endl;
                        delete data; // 删除数据
                    });
                std::cout << "BlockingCall end" << std::endl;
                std::this_thread::sleep_for(std::chrono::seconds(1));
            }
            // 释放线程安全函数
            tsfn.Release();
            std::cout << "tsfn.Release();" << std::endl;
        });
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports["startProcess"] = Function::New(env, startProcess);
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)