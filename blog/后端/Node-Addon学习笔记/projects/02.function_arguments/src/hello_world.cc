#include <napi.h>

// function hello(a,b){ return a+b }
Napi::Value add(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();

  if (info.Length() < 2)
  {
    // throw new TypeError("Wring number of arguments.");
    Napi::TypeError::New(env, "Wrong number of arguments.").ThrowAsJavaScriptException();
    return env.Null();
  }

  if (!info[0].IsNumber() || !info[1].IsNumber())
  {
    // throw new TypeError("Wrong type of arguments.");
    Napi::TypeError::New(env, "Wrong type of arguments.").ThrowAsJavaScriptException();
    return env.Null();
  }

  double arg0 = info[0].As<Napi::Number>().DoubleValue();
  double arg1 = info[1].As<Napi::Number>().DoubleValue();
  double result = arg0 + arg1;

  return Napi::Number::New(env, result);
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  // exports['add'] = add
  exports.Set(Napi::String::New(env, "add"), Napi::Function::New(env, add));
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)