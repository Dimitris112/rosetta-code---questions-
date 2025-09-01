/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

var findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const result = [[], []]; // O(1)

    set1.forEach(num => {
        if (!set2.has(num)) {
            result[0].push(num);
        }
    });

    set2.forEach(num => {
        if (!set1.has(num)) {
            result[1].push(num);
        }
    });

    return result;
};