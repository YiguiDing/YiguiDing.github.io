#include "MyPromiseAsyncWorker.hh"

#include <iostream>
#include <thread>

MyPromiseAsyncWorker::MyPromiseAsyncWorker(Napi::Env env, Napi::Function &jsEmitFun)
    : AsyncWorker(env),
      deferred(env)
{
}
void MyPromiseAsyncWorker::Execute()
{
    // do something
    for (size_t i = 0; i <= 10; i++)
    {
        std::cout << i << std::endl;
        std::this_thread::sleep_for(std::chrono::seconds(1));
    }
}
Napi::Promise MyPromiseAsyncWorker::getPromise()
{
    return deferred.Promise();
}
void MyPromiseAsyncWorker::OnOK()
{
    std::cout << "OnOK" << std::endl;
    deferred.Resolve(Napi::String::New(Env(), "OK"));
}
void MyPromiseAsyncWorker::OnError(const Napi::Error &e)
{
    std::cout << "OnError" << std::endl;
    deferred.Resolve(Napi::String::New(Env(), "Error"));
}
