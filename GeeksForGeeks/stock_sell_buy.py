def maximumProfit(prices):
    min_price = prices[0]
    max_profit=0
    for i in range(len(prices)):
        min_price = min(min_price, prices[i])
        max_profit = max(max_profit, prices[i] - min_price)
    # print(max_profit)
    return max_profit


# maximumProfit([7, 10, 1, 3, 6, 9, 2])
# maximumProfit([7, 6, 4, 3, 1])
maximumProfit([1, 3, 6, 9, 11])