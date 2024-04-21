#include <napi.h>
#ifndef __MY_OBJECT__
#define __MY_OBJECT__

class MyObject : public Napi::ObjectWrap<MyObject>
{
public:
  static Napi::Object Init(Napi::Env env, Napi::Object exports);
  MyObject(const Napi::CallbackInfo &info);

private:
  double value;
  Napi::Value GetVal(const Napi::CallbackInfo &info);
  void AddVal(const Napi::CallbackInfo &info);
  void MutVal(const Napi::CallbackInfo &info);
};

#endif