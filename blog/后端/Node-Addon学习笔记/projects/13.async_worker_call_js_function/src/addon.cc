#include <napi.h>
#include "MyDispatcher.hh"
#include <iostream>

void CreatMyDispatcher(Napi::CallbackInfo &info)
{
    std::cout << "CreatMyDispatcher" << std::endl;

    Napi::Env env = info.Env();
    Napi::Function emitFun = info[0].As<Napi::Function>();

    MyDispatcher *myDispatcher = new MyDispatcher(env, emitFun);

    myDispatcher->Queue();
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports["CreatMyDispatcher"] = Napi::Function::New(env, CreatMyDispatcher);
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)