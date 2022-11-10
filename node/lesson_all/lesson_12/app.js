const mysql = require('mysql');
const config = require('./config');
const config2 = require('./config2');
const f = require('./fun');
const f2 = require('./f2');

console.log(mysql);
console.log(' node ------------------- ok');
console.log(config);
console.log(config2);
console.log( f(2,3));
console.log(config.f(3,4));
//
console.log(f2(4));
