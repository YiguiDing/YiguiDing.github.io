#include <napi.h>

// function creatObj(){ return {"hello":"world"} }
Napi::Value creatObj(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();

  // obj = {}
  Napi::Object obj = Napi::Object::New(env);
  // obj["hello"] = "world"
  obj.Set(Napi::String::New(env, "hello"), Napi::String::New(env, "world"));

  return obj;
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  // exports['creatObj'] = creatObj
  exports.Set(Napi::String::New(env, "creatObj"), Napi::Function::New(env, creatObj));
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)