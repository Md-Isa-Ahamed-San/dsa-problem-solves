#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    cin >> n;
    int i = 1;
    int k = 0;
    int l = n;
    int numVal;

    while (i <= (2 * n) + 1)
    {
        for (int j = l; j > 0; j--)
        {
            cout << "  ";
        }
        numVal = 0;
        for (int j = 1; j <= (2 * k) + 1; j++)
        {
            if (j > k)
            {
                cout << numVal;

                numVal--;
            }
            else
            {
                cout << numVal;
                numVal++;
            }
            if (j != (2 * k) + 1)
            {
                cout << " ";
            }
        }
        cout << "\n";

        if (i > n)
        {
            l++;
        }
        else
        {
            l--;
        }
        if (i > n)
        {
            k--;
        }
        else
        {

            k++;
        }
        i++;
    }
}
