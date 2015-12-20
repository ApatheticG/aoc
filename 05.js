var fs = require('fs'),
    input = fs.readFileSync('inputs/05.txt', 'utf8');

// Part 1
function checkNiceness(str) {
    var nStrings = ['ab', 'cd', 'pq', 'xy'],
        vowels = ['a', 'e', 'i', 'o', 'u'],
        i,
        t = '',
        checkDouble = false,
        checkVowels = [];

    for (i = 0; i < nStrings.length; i += 1) {
        if (str.indexOf(nStrings[i]) > -1) {
            return false;
        }
    }

    for (i = 0; i < str.length; i += 1) {
        if (vowels.indexOf(str[i]) > -1) {
            checkVowels.push(str[i]);
        }
    }
    if (checkVowels.length < 3) {
        return false;
    }

    for (i = 0; i < str.length; i += 1) {
        if (str[i] === t) {
            checkDouble = true;
        }
        t = str[i];
    }
    if (!checkDouble) {
        return false;
    }


    return true;

}

function checkAll(str) {
    var arr = str.split('\n'),
        i,
        count = 0;

    for (i = 0; i < arr.length; i = i + 1) {
        if (checkNiceness(arr[i])) {
            count += 1;
        }
    }
    return count;
}


// Part 2
function checkPairs(str) {
    var i = 0,
        pair;
    for (i; i < str.length; i += 1) {
        pair = str.substr(i, 2);
        if (str.indexOf(pair, i + 2) > -1) {
            return true;
        }
    }
    return false;
}

function checkRepeats(str) {
    var i = 0,
        letter;
    for (i; i < str.length; i += 1) {
        letter = str[i];
        if (str.indexOf(letter, i + 2) === i + 2) {
            return true;
        }
    }
    return false;
}

function checkNicenessImproved(str) {
    if (!checkPairs(str)) {
        return false;
    }
    if (!checkRepeats(str)) {
        return false;
    }
    return true;
}

function checkAllImproved(str) {
    var arr = str.split('\n'),
        i,
        count = 0;

    for (i = 0; i < arr.length; i = i + 1) {
        if (checkNicenessImproved(arr[i])) {
            count += 1;
        }
    }
    return count;
}

console.log(checkAll(input));
console.log(checkAllImproved(input));
