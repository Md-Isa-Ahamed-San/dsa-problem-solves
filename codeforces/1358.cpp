#include<bits/stdc++.h>
using namespace std;
int main(){
  long long t;
  double row,col;
  long long ans;
  cin>>t;
  while(t--){
    cin>>row>>col;
    ans = ceil((row*col)/2);
    cout<<ans<<endl;
  }
}

