#include <napi.h>
#include <iostream>

void processArrayBuffer(Napi::ArrayBuffer buffer)
{
    // print
    uint8_t *data = (uint8_t *)buffer.Data();
    uint32_t length = buffer.ByteLength() / sizeof(uint8_t);
    
    std::cout << "bytes:";
    for (int32_t i = 0; i < length; i++)
        std::cout << +data[i] << ",";
    std::cout << std::endl;

    // test for copy to vector
    std::vector<uint8_t> u8Vector(data, data + length);
    // print vector
    std::cout << "bytes:";
    for (uint8_t item : u8Vector)
        std::cout << +item << ",";
    std::cout << std::endl;
}

Napi::Value readArrayBuffer(Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    // type check
    if (info.Length() < 1 || !info[0].IsArrayBuffer())
    {
        Napi::TypeError::New(env, "expect arg0 is ArrayBuffer.").ThrowAsJavaScriptException();
        return Napi::Boolean::New(env, false);
    }
    Napi::ArrayBuffer buffer = info[0].As<Napi::ArrayBuffer>();

    processArrayBuffer(buffer);

    return Napi::Boolean::New(env, true);
}

Napi::Object InitAll(Napi::Env env, Napi::Object exports)
{
    exports["readArrayBuffer"] = Napi::Function::New(env, readArrayBuffer);
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, InitAll)