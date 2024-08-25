
#include<stdio.h>
int main()
{   int n,i;
    long sum_long = 0;
    scanf("%d",&n);
    int a[n];
    for(i=0;i<n;i++)
    {
    scanf("%lld",&a[i]);
    }
    for(i=0;i<n;i++)
    {
        sum_long = sum_long+a[i];
    }
    printf("%lld",sum_long);
    return 0;
}
