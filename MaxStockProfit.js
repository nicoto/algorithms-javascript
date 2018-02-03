/**
 * Search stock prices for max profit.
 * @param {*} prices 
 */
function maxStockProfit(prices) {
    var buyPrice = 0;
    var sellPrice = 0;
    var maxProfit = -1;
    var changeBuyPrice = true;

    for (var i = 0; i < prices.length; i++) {
        if (changeBuyPrice) buyPrice = prices[i];
        sellPrice = prices[i + 1];

        if (buyPrice > sellPrice) changeBuyPrice = true;
        else {
            var tempProfit = sellPrice - buyPrice;
            if (tempProfit > maxProfit) maxProfit = tempProfit;
            changeBuyPrice = false;
        }
    };
    return maxProfit;
}
maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]);
