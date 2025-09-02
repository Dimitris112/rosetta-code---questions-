/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let counts = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (counts[num]) {
            counts[num] = counts[num] + 1;
        } else {
            counts[num] = 1;
        }
    }

    let vals = [];

    for (let num in counts) {
        vals.push(counts[num]);
    }

    for (let i = 0; i < vals.length; i++) {
        for (let j = i + 1; j < vals.length; j++) {
            if (vals[i] === vals[j]) {
                return false;
            }
        }
    }

    return true;
};