#include "./MyObject.hh"

Napi::Object creatMyObject(Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    Napi::Value arg = info[0];

    return MyObject::NewInstance(env, arg);
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    MyObject::Init(env, exports);
    exports.Set("creatMyObject", Napi::Function::New(env, creatMyObject));
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)