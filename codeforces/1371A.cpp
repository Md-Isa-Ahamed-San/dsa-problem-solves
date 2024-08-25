
#include <bits/stdc++.h>
using namespace std;
int main()
{
    long long int t, n;
    cin >> t;
    while (t--)
    {
        cin >> n;
        long long int sumOfFirstNNumber = (n * (n + 1)) / 2;
        long long int ans = ceil(sumOfFirstNNumber / n);
        cout << ans << endl;
    }
}
//a