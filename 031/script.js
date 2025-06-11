/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const chars = s.split("");
    const vowels = "aeiouAEIOU";
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        if (!vowels.includes(chars[left])) {
            left++;
        } else if (!vowels.includes(chars[right])) {
            right--;
        } else {
            [chars[left++], chars[right--]] = [chars[right], chars[left]];
        }
    }
    return chars.join("");
};