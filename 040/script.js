/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const hLeft = height[left];
        const hRight = height[right];

        max = Math.max(max, Math.min(hLeft, hRight) * (right - left));
        hLeft < hRight ? left++ : right--;
    }

    return max;
};