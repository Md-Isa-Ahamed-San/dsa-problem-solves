#include <bits/stdc++.h>
using namespace std;
int main()
{
    int t, a, b, c, n;
    cin >> t;
    while (t--)
    {
        cin >> a >> b >> c >> n;
        int maxVal = max({a, b, c});
        // cout << maxVal << endl;
        int totalDiffFromMax = (3 * maxVal) - a - b - c;
        int x = n - totalDiffFromMax;
        if (n < totalDiffFromMax)
        {
            cout << "NO" << endl;
        }
        else if (x % 3 == 0)
        {
            cout << "YES" << endl;
        }
        else
        {
            cout << "NO" << endl;
        }
        // cout<<totalDiffFromMax<<endl;
    }
}
/*
Explaination:
here we have to distribute the value n to a,b,c so that after distribution all a,b,c value becomes
same. so first we can get the max of a,b,c and then we will give to other two which is not max
value to become equal to max then we can distribute rest of n's value equally.
condition: if differences between sum of,  max to other two is less than n then we cant make 3 equal
so ans is no;
if we can distribute and all the number becomes same as max then rest of n's value should be multiply
of 3 as each of a/b/c will get x*n number of coins now.

*/