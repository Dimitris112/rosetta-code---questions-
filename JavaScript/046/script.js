/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let currentAltitude = 0;
    let highestAltitude = 0;

    for (let i = 0; i < gain.length; i++) {
        currentAltitude = currentAltitude + gain[i];
        if (currentAltitude > highestAltitude) {
            highestAltitude = currentAltitude;
        }
    }
    return highestAltitude;
};