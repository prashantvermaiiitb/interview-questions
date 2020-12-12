function buySellStock(prices) {
    if (prices.length == 0) {
        return 0;
    }
    let minPrice = Infinity,
        maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
}

function buySellStock2(prices) {
    if (prices.length === 0) return 0;
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        let profit = 0;
        for (let j = i + 1; j < prices.length; j++) {
            profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}

console.log(buySellStock([]));
console.log(buySellStock([2, 4, 1]));
console.log(buySellStock([7, 1, 5, 3, 6, 4]));


console.log(buySellStock2([]));
console.log(buySellStock2([2, 4, 1]));
console.log(buySellStock2([7, 1, 5, 3, 6, 4]));