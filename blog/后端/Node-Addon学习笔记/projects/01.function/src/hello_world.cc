#include <napi.h>

// function hello(){ return "world" }
Napi::String hello(const Napi::CallbackInfo &info)
{
  return Napi::String::New(info.Env(), "world");
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  // exports['hello'] = hello
  exports.Set(Napi::String::New(env, "hello"), Napi::Function::New(env, hello));
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)