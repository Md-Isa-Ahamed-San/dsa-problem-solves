#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin >> n;
    int num, sum = 0, count = 0, max = INT_MIN;
    for (int i = 0; i < n; i++)
    {
        cin >> num;
        if (num == 0)
            sum++;
        else
        {
            sum--;
            count++;
        }

        if (sum > max)
            max = sum;
        if (sum < 0)
            sum = 0;
    }

    cout << count + max << endl;

    return 0;
}