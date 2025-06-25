const kG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
    return present * kG_IN_USD;
}

function calculateKm(distance) {
    return distance * kM_IN_USD;
}
//Default calculation
function getExchangePrice(present1, present2, distance) {
    const price1 = present1 * kG_IN_USD;
    const price2 = present2 * kG_IN_USD;
    const distancePrice = distance * KM_IN_USD;
    return price1 + price2 + distancePrice;
}
//Reuse functions inside each other
function getExchangePrice1(present1, present2, distance) {
    const price1 = calculateW(present1);
    const price2 = calculateW(present2);
    const distancePrice = calculateKm(distance);
    return price1 + price2 + distancePrice;
}

console.log(getExchangePrice(1, 10, 15));

