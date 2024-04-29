#include <napi.h>
#include "MyAsyncWorker.hh"
#include <iostream>

void StartAsyncWorker(Napi::CallbackInfo &info)
{
    Napi::Function callback = info[0].As<Napi::Function>();
    Napi::String str = info[1].As<Napi::String>();
    std::string u8str = str.Utf8Value();

    MyAsyncWorker *myAsyncWorker = new MyAsyncWorker(callback, u8str);

    /*
        Queue方法用于将 Napi::AsyncWorker 实例排队等待执行。一旦有可用的工作线程，Execute 方法将被调用。

        工作线程池
            Node.js 使用 libuv 库，它内部维护了一个工作线程池。
            这个线程池负责执行那些不需要事件循环上下文的任务，比如长时间计算或者某些 I/O 操作。
        并发执行
            当多个 Napi::AsyncWorker 实例调用了 Queue 方法，libuv 会根据线程池中线程的可用性来并发地执行这些工作项。如果线程池中有足够的线程，那么这些 Execute 方法可以同时在不同的线程上执行。
    */
    myAsyncWorker->Queue();

    std::cout << "StartWorker" << std::endl;
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports["StartAsyncWorker"] = Napi::Function::New(env, StartAsyncWorker);
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)