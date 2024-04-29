#include "MyAsyncWorker.hh"

#include <iostream>
#include <thread>

MyAsyncWorker::MyAsyncWorker(Napi::Function &callback, std::string &data)
    : AsyncWorker(callback), data(data)
{
}
void MyAsyncWorker::Execute()
/**
 * Execute 不在事件循环线程上运行，
 * 因此必须避免调用任何可能调用 JavaScript 的 node-addon-api 方法。
 */
{
    std::cout << "Execute" << std::endl;
    if (data.length() == 0)
    {
        OnError(Napi::Error::New(Env(), "fall to get data"));
        return;
    }
    // 模拟处理数据的耗时操作
    for (size_t i = 0; i <= 3; i++)
    {
        std::this_thread::sleep_for(std::chrono::seconds(1));
        std::cout << std::to_string(i) << ":" << data << std::endl;
    }
}
void MyAsyncWorker::OnOK()
/**
 * 在 Execute 方法完成后被调用，并且它们在主线程上运行。
 * 这意味着任何通过 node-addon-api 与 JavaScript 的交互（例如，调用 JavaScript 回调）都应该在这些方法中执行。
 */
{
    std::cout << "OnOK" << std::endl;
    Napi::Env env = Env();
    Napi::HandleScope scope(env);
    Napi::FunctionReference &callback = Callback();
    // 执行完毕后调用回调函数
    callback.Call({});
}
void MyAsyncWorker::OnError(const Napi::Error &e)
{
    std::cout << "OnError" << std::endl;
}
void MyAsyncWorker::Destroy()
{
    std::cout << "Destroy" << std::endl;
}
std::vector<napi_value> MyAsyncWorker::GetResult(Napi::Env env)
{
    std::cout << "GetResult" << std::endl;
    return {};
}
