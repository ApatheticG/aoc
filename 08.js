/*jslint browser: true, devel: true*/
// Нет желания разбираться, почему не работает в Node. Запускать из консоли.

var input = $$('pre')[0].innerText.trim(),
    p1 = 0,
    p2 = 0;

input.split('\n').map(function (s) {
    'use strict';
    p1 += s.length - eval(s).length;
    p2 += JSON.stringify(s).length - s.length;
});

console.log(p1, p2);
