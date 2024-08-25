#include<iostream>
#include<algorithm>
#include<math.h>
using namespace std;
int main()
{
    int i=0,j,k,n,maximum,minimum;
    cin>>n;
    int arr[n];
    for(i=0;i<n;i++)
    {
        cin>> arr[i];
    }
    sort(arr,arr+n);
    maximum = max(arr[0],arr[n-1]);
    minimum = min(arr[0],arr[n-1]);
    cout<<maximum <<"  "<<minimum<<endl;
}
