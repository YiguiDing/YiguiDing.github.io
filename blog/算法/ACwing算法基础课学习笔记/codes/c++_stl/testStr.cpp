#include <iostream>
#include <string>
using namespace std;
int main()
{
    string s1 = "dyg";
    s1 += " is my name.";// 拼接
    cout << s1 << endl;
    cout << s1.substr(0, 3) << endl;// 子串
    printf("%s\n",s1.c_str());//c_str是第一个字符的地址
}