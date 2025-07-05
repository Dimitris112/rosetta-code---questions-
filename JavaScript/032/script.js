/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const words = s.trim().split(/\s+/); // remove leading-trailing / split by 1+ space
    return words.reverse().join(" ");
};