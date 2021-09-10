'use strict';

// Date object

var date = new Date();


var year = date.getFullYear();
var month = date.getMonth() + 1; //  return 0 -11 so we add 1
var day = date.getDate();

var minutes = date.getMinutes();


console.log(`${day} / ${month} / ${year} `)

let a = 9

const rs = Math.round(a) === a ? 'Interger' : 'Float';
console.log(rs);