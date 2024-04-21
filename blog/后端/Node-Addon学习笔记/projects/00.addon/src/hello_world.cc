#include <napi.h>

// using namespace Napi;

class HelloAddon : public Napi::Addon<HelloAddon>
{
public:
  HelloAddon(Napi::Env env, Napi::Object exports)
  {
    // exports={"hello":hello}
    // napi_enumerable 可枚举属性
    // DefineAddon和InstanceMethod都是父类上的实例方法
    DefineAddon(exports, {InstanceMethod("hello", &HelloAddon::hello, napi_enumerable)});
  }

private:
  // function hello(){return "world"}
  Napi::Value hello(const Napi::CallbackInfo &info)
  {
    return Napi::String::New(info.Env(), "world");
  }
};

// NODE_API_NAMED_ADDON(NODE_GYP_MODULE_NAME, HelloAddon)
NODE_API_ADDON(HelloAddon)
