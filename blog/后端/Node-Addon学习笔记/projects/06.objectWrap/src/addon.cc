#include "./MyObject.hh"

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    MyObject::Init(env, exports);
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)