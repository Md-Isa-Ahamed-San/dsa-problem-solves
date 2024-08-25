#include<stdio.h>
int main()
{
    int arr[1000],n,total_sum,i;
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);

    }
    getchar();
    for(i=0;i<n;i++)
    {
        total_sum = total_sum + arr[i];
    }
    for(i=0;i<n;i++)
    {
        if(i == n-1)
        {
            printf("%d",arr[i]);
        }
        else
        {
            printf("%d + ",arr[i]);
        }
    }
    printf(" = %d\n",total_sum);

}
