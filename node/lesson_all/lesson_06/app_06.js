
// читать файл

const fs = require('fs');
const path = require('path');

// // читать файл 1 вариант ансихронный метод
// fs.readFile('t1.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

// читать файл 2 вариант сихронный метод
// let text = fs.readFileSync('t2.txt', 'utf-8');
// console.log(text);
// console.log('=================');

// читаем папку
fs.readdir('one', 'utf-8', (err, data) => {
    console.log(data);
    data.forEach(file => {
        console.log(file, '\t\t', 'extension', path.extname(file), '\t\t', fs.statSync('one/' + file).size, 'B');
    });
});

// создание файла и запсь в него
fs.writeFile('one/newfile.txt', 'goooo\noooooo', (err) => {
    console.log(err);
});