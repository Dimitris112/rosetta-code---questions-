/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    // could use Number to max safe integer -> Number.MAX_SAFE_INTEGER -- any number is less or equal at first
    let first = Infinity;
    let second = Infinity;

    for (let n of nums) {
        if (n <= first) first = n;
        else if (n <= second) second = n;
        else return true;
    }
    return false;
};