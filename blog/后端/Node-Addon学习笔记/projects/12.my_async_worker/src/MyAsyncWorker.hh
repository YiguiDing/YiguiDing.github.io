#ifndef __MyAsyncWorker__
#define __MyAsyncWorker__
#include <napi.h>

class MyAsyncWorker : public Napi::AsyncWorker
{
private:
    std::string data;

public:
    MyAsyncWorker(Napi::Function &callback, std::string &data);
    void Execute() override;
    void OnOK() override;
    void OnError(const Napi::Error &e) override;
    void Destroy() override;
    std::vector<napi_value> GetResult(Napi::Env env);
};
#endif