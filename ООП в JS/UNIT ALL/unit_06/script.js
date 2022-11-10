console.log(Validate.isNumber(99));
console.log(Validate.isNumber("string"));

console.log(Validate.isInt(4));
console.log(Validate.isInt(9.8));

console.log(Validate.isFloat(2.8));
console.log(Validate.isFloat(9));

console.log(Validate.isChar("uuu"));
console.log(Validate.isChar("d"));

console.log(Validate.isString("string"));
console.log(Validate.isString(55));

console.log(Validate.isBoolean(true));
console.log(Validate.isBoolean(false));
console.log(Validate.isBoolean("true"));

console.log(Validate.isArray([1, 2]));
console.log(Validate.isArray("str"));

// console.log(Validate.toMoney(112834.4));
// console.log(Validate.toMoney(100.98));
// console.log(Validate.toMoney(200909000.89));
// console.log(Validate.toMoney(20));
// console.log(Validate.toMoney(1234999888));
document.querySelector('div').innerHTML = Validate.toMoney('dsw1234999888');

// самих tasks в шаблоне не было, брал их с сайта поэтому скидываю ДЗ без tasks
