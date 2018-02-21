var moment = require('moment');
// JAN 1ST 1970 00:00:00
// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(2, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

var sometimestamp = moment().valueOf();
console.log(sometimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('H:mm a'));