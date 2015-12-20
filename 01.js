// http://adventofcode.com/day/1
// Part 1
/**
 * Counts floots
 * @param   {String} str input
 * @returns {Number} final floor
 */
function countFloors(str) {
    var l = str.length,
        f = 0,
        i = 0;

    for (i; i < l; i = i + 1) {
        if (str[i] === '(') {
            f = f + 1;
        } else if (str[i] === ')') {
            f = f - 1;
        }
    }

    return f;
}

// Part 2
/**
 * Counts steps to desired position
 * @param   {String}  str input
 * @param   {Number}  pos where to go
 * @returns {Boolean} steps count
 */
function countBasement(str, pos) {
    var l = str.length,
        f = 0,
        i = 0;

    for (i; i < l; i = i + 1) {
        if (str[i] === '(') {
            f = f + 1;
        } else if (str[i] === ')') {
            f = f - 1;
        }

        if (f === pos) {
            return i;
        }
    }

    return false;
}
