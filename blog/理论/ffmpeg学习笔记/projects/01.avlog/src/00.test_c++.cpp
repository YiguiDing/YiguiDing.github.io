#include <cstdint>
#include <iostream>
#include <vector>
using namespace std;
int main(int argc, char **argv)
{
    cout << "hello world" << endl;
    vector<uint16_t> test;
    for (uint16_t i = 0; i < 100; i++)
    {
        test.push_back(i);
    }
    for (uint16_t i = 0; i < 100; i++)
    {
        cout << test.back() << endl;
        test.pop_back();
    }
    return 0;
}