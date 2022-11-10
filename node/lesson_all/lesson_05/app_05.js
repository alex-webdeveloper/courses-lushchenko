// console.log(process);
const arg = process.argv;
// console.log(arg[2]);
const a = +arg[2];
const b = +arg[3];
console.log(typeof a);

// if (a > b) console.log(a);
// else console.log(b);

let c = (a > b) ? a: c; // && ||
console.log(c);

let out = '';
for (let i = 5; i >= 0; i--) {
   out += i + ' ';
}
console.log(out);

let d = [4, 7, 9];
let e = d.map(item => item * 3);
console.log(e);

const f = {one: 55, two: 'hello'};
console.log(f);
