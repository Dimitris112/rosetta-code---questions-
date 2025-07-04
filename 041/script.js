/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    const count = new Map();
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    let operations = 0;
    const visited = new Set();

    for (const [num, freq] of count) {
        if (visited.has(num)) continue;

        const complement = k - num;

        if (num === complement) {
            operations += Math.floor(freq / 2);
        } else if (count.has(complement)) {
            // num + complement = k
            // min(count(num), count(complement))
            operations += Math.min(freq, count.get(complement));
            visited.add(complement);
        }

        visited.add(num);
    }

    return operations;
};

console.log("Test 1:", maxOperations([1, 2, 3, 4], 5)); // Expected: 2
console.log("Test 2:", maxOperations([3, 1, 3, 4, 3], 6)); // Expected: 1
console.log("Test 3:", maxOperations([2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3)); // Expected: 4
console.log("Test 4:", maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2)); // Expected: 2
