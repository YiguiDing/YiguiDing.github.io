#include <napi.h>
#include "MyPromiseAsyncWorker.hh"
#include <iostream>

Napi::Value CreatMyPromiseAsyncWorker(Napi::CallbackInfo &info)
{
    std::cout << "CreatMyPromiseAsyncWorker" << std::endl;

    Napi::Env env = info.Env();
    Napi::Function emitFun = info[0].As<Napi::Function>();

    MyPromiseAsyncWorker *myPromiseAsyncWorker = new MyPromiseAsyncWorker(env, emitFun);

    myPromiseAsyncWorker->Queue();
    return myPromiseAsyncWorker->getPromise();
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports["CreatMyPromiseAsyncWorker"] = Napi::Function::New(env, CreatMyPromiseAsyncWorker);
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)