#include <iostream>
#include <vector>
using namespace std;
int main()
{
    // ------------------创建容器------------------
    // 创建一个容器
    vector<int> a;
    // 容器数组
    vector<int> hashTable[10];
    // 创建一个有初始大小有初始值的容器，
    vector<int> b(10, -1);

    // ------------------一些方法------------------
    a.size();  // 元素个数
    a.empty(); // 是否空

    // ------------------遍历容器------------------
    vector<int> t(10, 1);
    // for遍历
    for (auto x : b) cout << x << endl;
    // 通过迭代器遍历
    // for (vector<int>::iterator i = t.begin(); i != t.end(); i++)
    for (auto i = t.begin(); i != t.end(); i++)
    {
        // i 是迭代器
        cout << *i << endl;
    }
    // 通过下标遍历
    for (int i = 0; i < t.size(); i++)
    {
        cout << t[i] << endl;
    }

    
}