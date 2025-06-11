/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length && count < n; i++) {
        let prev = 1 > 0 ? flowerbed[i - 1] : 0;
        let curr = flowerbed[i];
        let next = i < flowerbed.length - 1 ? flowerbed[i + 1] : 0;
        if (!prev && !curr & !next) {
            flowerbed[i] = 1;
            count++;
            i++;
        }
    }
    return count >= n;
};