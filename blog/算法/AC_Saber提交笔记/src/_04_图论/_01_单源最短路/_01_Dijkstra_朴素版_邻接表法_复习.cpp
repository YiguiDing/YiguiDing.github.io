// 复习
// 提交状态：AC
#include<iostream>
#include<algorithm>
#include<string.h>
using namespace std;

const int N = 10e5+10;
int MAX_NODE,INF=0x3f3f3f3f;
int h[N],nod[N],nxt[N],wig[N],idx=1;
void addEdge(int a,int b,int w){
    nod[idx]=b;
    wig[idx]=w;
    nxt[idx]=h[a];
    h[a]=idx++;
}
int getMinDistExcludeVisited(int dist[],bool visited[]){
    int idx=-1,minDist=INF;
    for(int i=1;i<MAX_NODE;i++){
        if(!visited[i] && minDist>dist[i]){
            minDist=dist[i];
            idx=i;
        }
    }
    return idx;
}
int* djkstra(int from){
    int *dist = new int[MAX_NODE];
    bool visited[MAX_NODE];
    memset(dist,INF,MAX_NODE * sizeof(int));
    memset(visited,false,sizeof visited);
    dist[from]=0;
    int i=1;
    for(;i<MAX_NODE;i++){
        int cur = getMinDistExcludeVisited(dist,visited);
        if(cur==-1) break;
        visited[cur]=true;
        for(int p=h[cur];p!=0;p=nxt[p]){
            int ne = nod[p];
            int wi = wig[p];
            dist[ne]=min(dist[ne],dist[cur]+wi);
        }
    }
    return dist;
}
int main(){
    int n,m;
    cin>>n>>m;
    MAX_NODE=n+1;
    while(m--){
        int a,b,w;
        cin>>a>>b>>w;
        if(a!=b) addEdge(a,b,w);
    }
    int *dist = djkstra(1);
    if(dist[n]!=INF) cout<<dist[n];
    else cout<<"-1"<<endl;
}