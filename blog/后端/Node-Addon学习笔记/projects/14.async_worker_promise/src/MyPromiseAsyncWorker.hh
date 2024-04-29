#ifndef __MyDispatcher__
#define __MyDispatcher__
#include <napi.h>

class MyPromiseAsyncWorker : public Napi::AsyncWorker
{
private:
    Napi::Promise::Deferred deferred;

public:
    MyPromiseAsyncWorker(Napi::Env env, Napi::Function &callback);

    void Execute() override;
    void OnOK() override;
    void OnError(const Napi::Error &e) override;
    Napi::Promise getPromise();
};
#endif