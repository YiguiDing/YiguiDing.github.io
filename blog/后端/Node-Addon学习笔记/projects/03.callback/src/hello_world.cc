#include <napi.h>

// function hello(callback){ callback("hello_world"); }
void call(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();

  Napi::Function callbaack = info[0].As<Napi::Function>();
  Napi::String arg0 = Napi::String::New(env, "hello_world");

  callbaack.Call({arg0});
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  // exports['call'] = call
  exports.Set(Napi::String::New(env, "call"), Napi::Function::New(env, call));
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)