// ЧТЕНИЕ И ЗАПИСЬ CSV, JSON ФАЙЛОВ В NODE.JS
const fs = require('fs');
const path = require('path');
// const student = require('./one.json');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// fs.writeFile('one.txt', 'Work', (err) => {
//     if (err) console.log('Error');
// });
/**
 *Case 1: write is json file
 */
const man = {
    name: 'Alex',
    age: 22,
    department: 'History',
    car: 'Mercedes'
}
//  ансихронная запись
// fs.writeFile('one.json', JSON.stringify(man), (err) => {  
//     if (err) console.log('Error');
// });

// fs.writeFileSync('one.json', JSON.stringify(man)); // сихронная запись

/**
 *Case 2: read  is json file
 */
// console.log(student);

/**
 *Case 3: read  is csv file
 */
// npm i csv-parser
const results = [];

// fs.createReadStream('table.csv')
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//         console.log(results);
//     });

/**
 *Case 4: write  is csv file
 */
// npm i -s csv-writer 
// настройка модуля
const csvWriter = createCsvWriter({
    path: 'test.csv',
    header: [
        { id: 'name', title: 'NAME' },
        { id: 'surname', title: 'LastName' },
        { id: 'age', title: 'AGE' },
        { id: 'gender', title: 'G' }
    ]
});
const data = [
    {
        name: 'John',
        surname: 'Snow',
        age: 26,
        gender: 'M'
    }, {
        name: 'Clair',
        surname: 'White',
        age: 33,
        gender: 'F',
    }, {
        name: 'Fancy',
        surname: 'Brown',
        age: 78,
        gender: 'F'
    }
];
csvWriter.writeRecords(data)
    .then(() => {
        console.log('...Done');
    });