var maxProfit = function (prices) {
  let profit = 0;
  let buyAt = 0;
  let sellAt = 1;
  for (let i = 0; i < prices.length; i++) {
    // tot = prices[sellAt]-tot[buyAt]
    if (prices[i] < prices[buyAt]) {
      buyAt = i;
    }
    if (profit < prices[i] - prices[buyAt]) {
      profit = prices[i] - prices[buyAt];
    }
  }
  console.log(buyAt, sellAt, profit);
  return profit;
};

maxProfit([2, 4, 7, 1, 5, 3, 6, 4]);
maxProfit([1, 2]);
maxProfit([2, 4, 1, 6, 3]);
maxProfit([7, 6, 4, 3, 1, 8, 10, 5]);
maxProfit([1, 5, 2, 9, 6, 3, 8, 7]);
maxProfit([5, 2, 3, 8, 1, 6, 4, 7]);
