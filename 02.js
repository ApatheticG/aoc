// http://adventofcode.com/day/2
// Part 1
function countSingle(str) {
    var arr = str.split('x'),
        l = arr[0],
        w = arr[1],
        h = arr[2],
        wr = 2 * l * w + 2 * w * h + 2 * h * l,
        sl = [l * w, w * h, h * l].sort(function (a, b) {
            return a - b;
        })[0];

    return wr + sl;
}

function countAll(str) {
    var arr = str.split('\n'),
        sum = 0,
        i;

    for (i = 0; i < arr.length; i = i + 1) {
        sum = sum + countSingle(arr[i]);
    }
}

// Part 2
function countSingleRibbon(str) {
    var arr = str.split('x'),
        l = arr[0],
        w = arr[1],
        h = arr[2],
        sorted = [l, w, h].sort(function (a, b) {
            return a - b;
        }),
        ribbon = (sorted[0] * 2) + (sorted[1] * 2) + (l * w * h);

    return ribbon;
}

function countAllRibbons(str) {
    var arr = str.split('\n'),
        sum = 0,
        i;

    for (i = 0; i < arr.length; i = i + 1) {
        sum = sum + countSingleRibbon(arr[i]);
    }
}
