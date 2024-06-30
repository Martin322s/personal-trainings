function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}


function result(currencyFormatter) {
    let separator = ",";
    let symbol = "$";
    let symbolFirst = true;
    
    return (value) => currencyFormatter(separator, symbol, symbolFirst, value);
}