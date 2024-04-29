#include "MyObject.hh"

// 实现构造函数
MyObject::MyObject(const Napi::CallbackInfo &info)
    // ↓ c++ 语法 ，调用父级的构造函数
    : Napi::ObjectWrap<MyObject>(info)
{
  Napi::Env env = info.Env();

  // 期望得到一个number作为形参
  if (info.Length() < 1 || !info[0].IsNumber())
  {
    Napi::TypeError::New(env, "expected one number as arguments");
    return;
  }
  // 初始化value
  double val = info[0].As<Napi::Number>().ToNumber().DoubleValue();
  this->value = val;
}

Napi::Value MyObject::GetVal(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  return Napi::Number::New(env, this->value);
}
void MyObject::AddVal(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  // 期望得到一个number作为形参
  if (info.Length() < 1 || !info[0].IsNumber())
  {
    Napi::TypeError::New(env, "expected one number as arguments");
    return;
  }
  this->value += info[0].As<Napi::Number>().ToNumber().DoubleValue();
}
void MyObject::MutVal(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  // 期望得到一个number作为形参
  if (info.Length() < 1 || !info[0].IsNumber())
  {
    Napi::TypeError::New(env, "expected one number as arguments");
    return;
  }
  this->value *= info[0].As<Napi::Number>().ToNumber().DoubleValue();
}

Napi::Object MyObject::Init(Napi::Env env, Napi::Object exports)
{
  Napi::Function MyObjectClassConstructerFun =
      // ↓ node-addon-api/doc/object_wrap.md
      DefineClass(
          env,
          "MyObject",
          {
              // ↓ node-addon-api/doc/instance_wrap.md
              InstanceMethod("GetVal", &MyObject::GetVal),
              InstanceMethod("AddVal", &MyObject::AddVal),
              InstanceMethod("MutVal", &MyObject::MutVal),
          });

  // 保证构造函数引用不被GC
  // ↓ node-addon-api/doc/function_reference.md
  Napi::FunctionReference *funRef = new Napi::FunctionReference();
  *funRef = Napi::Persistent(MyObjectClassConstructerFun);
  env.SetInstanceData(funRef);

  exports.Set("MyObject", MyObjectClassConstructerFun);
  return exports;
}

Napi::Object MyObject::NewInstance(Napi::Env env, Napi::Value arg)
{
  // 获取构造函数
  Napi::FunctionReference *funRef = env.GetInstanceData<Napi::FunctionReference>();
  // 调用构造函数来创建实例对象
  Napi::Object obj = funRef->New({napi_value(arg)});

  // 为了得到能够逃离局部作用域后仍然能够存活的对象
  // https://github.com/nodejs/node-addon-api/blob/main/doc/escapable_handle_scope.md
  Napi::EscapableHandleScope scope(env);
  Napi::Object escapableObj = scope.Escape(napi_value(obj)).ToObject();

  return escapableObj;
}