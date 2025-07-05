/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const map = new Map();
    for (let i = 0; i < arr1.length; ++i) {
        map.set(arr1[i].id, arr1[i]);
    }
    for (let i = 0; i < arr2.length; ++i) {
        const id = arr2[i].id;
        if (map.has(id)) {
            Object.assign(map.get(id), arr2[i]);
        } else {
            map.set(id, arr2[i]);
        }
    }
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};