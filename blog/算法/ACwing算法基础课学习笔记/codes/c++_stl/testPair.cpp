#include <iostream>
using namespace std;
int main()
{
    // ------------创建二元组------------
    pair<int, string> t1 = make_pair(1, "hahahha");
    pair<int, string> t2 = {1, "666"};
    // ------------创建三元组------------
    pair<int, pair<int, int>> t3 = {1, {2, 3}};
    cout << t1.second << endl;
    cout << t2.second << endl;
    cout << t3.second.second << endl;
}