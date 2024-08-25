
#include<stdio.h>
int main()
{
    int a[3],b[3],alice = 0,bob = 0,i;
    for(i=0;i<3;i++)
    {
        scanf("%d",&a[i]);
    }
    for(i=0;i<3;i++)
    {
        scanf("%d",&b[i]);
    }
    for(i=0;i<3;i++)
    {
        if(a[i]>b[i])
        {
            alice = alice+1;
        }
        else if(a[i]<b[i])
        {
            bob = bob+1;
        }
        else if(a[i]==b[i])
        {
            continue;
        }
    }
    printf("%d %d", alice,bob);

    return 0;
}
