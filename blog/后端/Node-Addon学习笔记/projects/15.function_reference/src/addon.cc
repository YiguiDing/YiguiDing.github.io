#include <napi.h>
#include <iostream>

class Demo : public Napi::ObjectWrap<Demo>
{
public:
    Napi::Function fun;
    Napi::FunctionReference funRef;
    Demo(const Napi::CallbackInfo &info)
        : ObjectWrap(info)
    {
    }
    void setFun(const Napi::CallbackInfo &info)
    {
        fun = info[0].As<Napi::Function>();
        funRef = Napi::Persistent(fun);
    }
    void callFun(const Napi::CallbackInfo &info)
    {
        fun.Call({});
    }
    void callFunRef(const Napi::CallbackInfo &info)
    {
        funRef.Call({});
    }
    static Napi::FunctionReference constructor;
    static Napi::Object Init(Napi::Env env, Napi::Object exports)
    {
        Napi::Function fun = DefineClass(
            env,
            "Demo",
            {
                InstanceMethod("setFun", &Demo::setFun, napi_default_method),
                InstanceMethod("callFun", &Demo::callFun, napi_default_method),
                InstanceMethod("callFunRef", &Demo::callFunRef, napi_default_method),
            });

        constructor = Napi::Persistent(fun);
        constructor.SuppressDestruct();

        exports["Demo"] = fun;

        return exports;
    }
};
Napi::FunctionReference Demo::constructor;

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    Demo::Init(env, exports);
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)