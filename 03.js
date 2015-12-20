// http://adventofcode.com/day/3
// Part 1
function houses(str, done) {
    var x = 0,
        y = 0,
        i;

    if (typeof done === 'undefined') {
        done = {
            x0y0: 0
        };
    }

    for (i = 0; i < str.length; i = i + 1) {
        switch (str[i]) {
        case '^':
            x = x + 1;
            break;
        case 'v':
            x = x - 1;
            break;
        case '>':
            y = y + 1;
            break;
        case '<':
            y = y - 1;
            break;
        }
        done['x' + x + 'y' + y] = i + 1;
    }
    return done;
}
function countKeys(obj) {
    return Object.keys(obj).length;
}

// Part 2
function splitSantas(str) {
    var santa = '',
        roboSanta = '',
        done = {
            x0y0: 0
        },
        i;

    for (i = 0; i < str.length; i = i + 1) {
        if ((i + 2) % 2 === 0) {
            santa += str[i];
        } else {
            roboSanta += str[i];
        }
    }

    return countKeys(houses(santa, houses(roboSanta, done)));
}
