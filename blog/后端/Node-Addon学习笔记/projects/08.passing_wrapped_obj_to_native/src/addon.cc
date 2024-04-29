#include "./MyObject.hh"

Napi::Object creatMyObject(Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    Napi::Value arg = info[0];

    return MyObject::NewInstance(env, arg);
}
Napi::Object addMyObj(Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    MyObject *obj0 = Napi::ObjectWrap<MyObject>::Unwrap(info[0].As<Napi::Object>());
    MyObject *obj1 = Napi::ObjectWrap<MyObject>::Unwrap(info[1].As<Napi::Object>());
    double res = obj0->value + obj1->value;
    return MyObject::NewInstance(env, Napi::Number::New(env, res));
}

Napi::Object InitAll(Napi::Env env, Napi::Object exports)
{
    MyObject::Init(env, exports);
    exports.Set("creatMyObject", Napi::Function::New(env, creatMyObject));
    exports.Set("addMyObj", Napi::Function::New(env, addMyObj));
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, InitAll)