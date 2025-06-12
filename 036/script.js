/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let current = "1";

    for (let i = 1; i < n; i++) {
        let next = "";
        let freq = 1;

        for (let j = 1; j <= current.length; j++) {
            if (current[j] === current[j - 1]) {
                freq++;
            } else {
                next += freq.toString() + current[j - 1];
                freq = 1;
            }
        }

        current = next;
    }
    return current;
};