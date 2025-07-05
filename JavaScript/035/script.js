/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let write = 0;
    let i = 0;

    while (i < chars.length) {

        let j = i;
        while (j < chars.length && chars[j] === chars[i]) j++;
        chars[write++] = chars[i];
        let count = j - i;
        if (count > 1) {
            let countStr = count.toString();
            for (let k = 0; k < countStr.length; k++) {
                chars[write++] = countStr[k]
            };
        }
        i = j;
    }

    return write;
};