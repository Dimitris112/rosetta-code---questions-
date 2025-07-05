/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    let a = str1.length;
    let b = str2.length;
    if (str1 + str2 !== str2 + str1) return "";
    while (b) [a, b] = [b, a % b];
    return str1.slice(0, a);
};