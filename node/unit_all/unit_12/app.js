const config = require('./config');
const randomInt = require('./rand');
const config2 = require('./config2');
const indexArray = require('./indexArray');
const hash = require('./hash');

let a = [
    { id: 24, name: 'Test', age: 23 },
    { id: 34, name: 'User', age: 33 }
];

console.log(config);
console.log(randomInt.f(1, 12));
console.log(config2);
console.log(indexArray.f(a, 'name'));
console.log(hash.f(9));


