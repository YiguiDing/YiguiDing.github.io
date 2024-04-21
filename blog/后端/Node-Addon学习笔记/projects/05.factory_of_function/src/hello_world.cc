#include <napi.h>

/*
  function hello_world(){
    return "hello_world"
  }
*/
Napi::String hello_world(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  return Napi::String::New(env, "hello_world");
}

/*
  function creatFunction(){
    return function hello_world(){
      return "hello_world"
    }
  }
*/
Napi::Function createFunction(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  /*
    return function hello_world(){
      return "hello_world"
    }
  */
  return Napi::Function::New(env, hello_world, "hello_world");
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  // exports['creatFunction'] = creatFunction
  exports.Set(Napi::String::New(env, "createFunction"), Napi::Function::New(env, createFunction));
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)