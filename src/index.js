// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {
        "H":0,
        "D":0,
        "Q":0,
        "N":0,
        "P":0
    }
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (currency<=0) {
        return {};
    }
    let temp=currency;
    result.H=Math.floor(temp/50);
    temp=currency-result.H*50;
    result.Q=Math.floor(temp/25);
    temp=temp-result.Q*25;
    result.D=Math.floor(temp/10);
    temp=temp-result.D*10;
    result.N=Math.floor(temp/5);
    temp=temp-result.N*5;
    result.P=Math.floor(temp/1);

    for (let key in result) {
        if (result[key]===0) {
            delete result[key];
        }
    }
    return result;
}
