#include <napi.h>
#include <iostream>

class Demo : public Napi::ObjectWrap<Demo>
{
public:
    Demo(Napi::Env env, Napi::Object exports)
    {
        std::cout << "InitAddon" << std::endl;
        DefineAddon(exports, {
                                 InstanceMethod("GetVal", &Demo::GetVal, napi_enumerable),
                                 InstanceMethod("SetVal", &Demo::SetVal, napi_enumerable),
                                 InstanceMethod("Add", &Demo::Add, napi_enumerable),
                                 InstanceMethod("Mut", &Demo::Mut, napi_enumerable),
                             });
    }

    double val = 0;
    Napi::Value GetVal(const Napi::CallbackInfo &info)
    {
        return Napi::Number::New(info.Env(), val);
    }

    Napi::Value SetVal(const Napi::CallbackInfo &info)
    {
        double x = info[0].As<Napi::Number>().DoubleValue();
        val = x;
        return GetVal(info);
    }

    Napi::Value Add(const Napi::CallbackInfo &info)
    {
        double x = info[0].As<Napi::Number>().DoubleValue();
        val += x;
        return GetVal(info);
    }

    Napi::Value Mut(const Napi::CallbackInfo &info)
    {
        double x = info[0].As<Napi::Number>().DoubleValue();
        val *= x;
        return GetVal(info);
    }
};

NODE_API_ADDON(Demo)