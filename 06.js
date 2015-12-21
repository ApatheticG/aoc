/*jslint node: true, devel: true*/

var fs = require('fs'),
    input = fs.readFileSync('inputs/06.txt', 'utf8'),
    lights;

// Part 1
function setupLights(size) {
    'use strict';
    var sideX = size[0],
        sideY = size[1],
        lights = {},
        x,
        y;

    for (x = 0; x < sideX; x += 1) {
        lights[x] = {};
        for (y = 0; y < sideY; y += 1) {
            lights[x][y] = false;
        }
    }

    return lights;
}

function operateLights(str, lights) {
    'use strict';
    var re = /(\d{1,3},\d{1,3})/g,
        from = str.match(re)[0].split(','),
        to = str.match(re)[1].split(','),
        x,
        y;

    from = from.map(function (n) {
        return parseInt(n, 10);
    });

    to = to.map(function (n) {
        return parseInt(n, 10);
    });


    for (x = from[0]; x <= to[0]; x += 1) {
        for (y = from[1]; y <= to[1]; y += 1) {

            // Turn on
            if (str.indexOf('turn on') > -1) {
                lights[x][y] = true;

            // Turn off
            } else if (str.indexOf('turn off') > -1) {
                lights[x][y] = false;

            // Toggle
            } else if (str.indexOf('toggle') > -1) {
                lights[x][y] = (lights[x][y] ? false : true);
            }
        }
        console.log(x, y);
    }

    return lights;
}

function operateAll(str, lights) {
    'use strict';
    var arr = str.split('\n'),
        i;

    for (i = 0; i < arr.length; i = i + 1) {
        lights = operateLights(arr[i], lights);
    }
    return lights;
}

function countLights(lights) {
    'use strict';
    var count = 0,
        x,
        y;

    for (x = 0; x < Object.keys(lights).length; x += 1) {
        console.log(x, Object.keys(lights[x]).length);
        for (y = 0; y < Object.keys(lights[x]).length; y += 1) {
            count += (lights[x][y] ? 1 : 0);
        }
    }
    return count;
}

// Part 2
function setupLightsBrightness(size) {
    'use strict';
    var sideX = size[0],
        sideY = size[1],
        lights = {},
        x,
        y;

    for (x = 0; x < sideX; x += 1) {
        lights[x] = {};
        for (y = 0; y < sideY; y += 1) {
            lights[x][y] = 0;
        }
    }

    return lights;
}

function operateBrightness(str, lights) {
    'use strict';
    var re = /(\d{1,3},\d{1,3})/g,
        from = str.match(re)[0].split(','),
        to = str.match(re)[1].split(','),
        x,
        y;

    from = from.map(function (n) {
        return parseInt(n, 10);
    });

    to = to.map(function (n) {
        return parseInt(n, 10);
    });


    for (x = from[0]; x <= to[0]; x += 1) {
        for (y = from[1]; y <= to[1]; y += 1) {

            // Turn on
            if (str.indexOf('turn on') > -1) {
                lights[x][y] += 1;

            // Turn off
            } else if (str.indexOf('turn off') > -1) {
                lights[x][y] -= (lights[x][y] !== 0 ? 1 : 0);

            // Toggle
            } else if (str.indexOf('toggle') > -1) {
                lights[x][y] += 2;
            }
        }
        console.log(x, y);
    }

    return lights;
}

function operateAllBrightness(str, lights) {
    'use strict';
    var arr = str.split('\n'),
        i;

    for (i = 0; i < arr.length; i = i + 1) {
        lights = operateBrightness(arr[i], lights);
    }
    return lights;
}

function countLightsBrightness(lights) {
    'use strict';
    var count = 0,
        x,
        y;

    for (x = 0; x < Object.keys(lights).length; x += 1) {
        console.log(x, Object.keys(lights[x]).length);
        for (y = 0; y < Object.keys(lights[x]).length; y += 1) {
            count += lights[x][y];
        }
    }
    return count;
}


lights = setupLightsBrightness([1000, 1000]);
lights = operateAllBrightness(input, lights);

console.log(countLightsBrightness(lights));
