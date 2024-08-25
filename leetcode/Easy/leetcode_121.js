var maxProfit = function (prices) {
  let buy = 0;
  let profit = 0;
  let buyAt;
  let sellAt;
  for (let i = 1; i < prices.length; i++) {
    if (prices[buy] >= prices[i]) {
      buy = i;
    } else if (prices[i] > prices[buy]) {
      let currentProfit = prices[i] - prices[buy];
      if (profit < currentProfit) {
        buyAt = buy;
        sellAt = i;
        profit = currentProfit;
      }
    }
    //   console.log("buyAt: ", buyAt, " sellAt: ", sellAt);
  }
  // console.log(profit)

  return profit;
  //   console.log("profit  :", profit);
};

// maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([7, 6, 5, 4, 2]);
// maxProfit([1,2]);
// maxProfit([2, 4, 1, 6, 3]);
// maxProfit([7, 6, 4, 3, 1, 8, 10, 5]);
// maxProfit([1, 5, 2, 9, 6, 3, 8, 7]);
// maxProfit([5, 2, 3, 8, 1, 6, 4, 7]);
