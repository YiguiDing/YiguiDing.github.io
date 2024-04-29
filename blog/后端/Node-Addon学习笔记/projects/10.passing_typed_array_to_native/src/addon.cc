#include <napi.h>
#include <iostream>

void processUint16Array(Napi::Uint16Array uint16Array)
{
    uint16_t *data = uint16Array.Data();
    uint32_t length = uint16Array.ByteLength() / sizeof(uint16_t);
    for (int32_t i = 0; i < length; i++)
        std::cout << data[i] << ",";
    std::cout << std::endl;

    // test for copy to vector
    std::vector<uint16_t> u16Vector(uint16Array.Data(), uint16Array.Data() + uint16Array.ElementLength());
    // print vector
    std::cout << "vector:";
    for (uint16_t item : u16Vector)
        std::cout << item << ",";
    std::cout << std::endl;
}

Napi::Value readTypedArray(Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();

    // type check
    if (info.Length() < 1 || !info[0].IsTypedArray() || info[0].As<Napi::TypedArray>().TypedArrayType() != napi_uint16_array)
    {
        Napi::TypeError::New(env, "expect arg0 is uint16_array.").ThrowAsJavaScriptException();
        return Napi::Boolean::New(env, false);
    }

    Napi::TypedArray typedArray = info[0].As<Napi::TypedArray>();
    Napi::Uint16Array uint16Array = typedArray.As<Napi::Uint16Array>();

    // process
    processUint16Array(uint16Array);

    return Napi::Boolean::New(env, true);
}

Napi::Object InitAll(Napi::Env env, Napi::Object exports)
{
    exports["readTypedArray"] = Napi::Function::New(env, readTypedArray);
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, InitAll)