//Task 1.
// Для работы с базой данных используется mysql2.Все действия в задачах производим над таблицей user(таблицу создайте на основе файла node_unit_11.sql).Настройки подключения к базе данных должны быть вынесены в отдельный файл config.js и require в данный файл.

const mysql = require('mysql2/promise');
const config = require('./config');

// Напишите функцию f1(все функции в задании async), которая возвращает age пользователя с email = iv@ua

async function f1() {
    const conn = await mysql.createConnection(config);
    const [ rows, fields] = await conn.execute(`select age from user where email = 'iv@ua'`);
    conn.end();
    return rows[0]['age'];
}

// f1() - для проверки расскоментируйте, потом верните комментарий на место.

// Task 2
// Создайте функцию f2, которая возвращает coin (число) пользователя с возрастом 46.

async function f2() {
    const conn = await mysql.createConnection(config);
    const [ rows, fields] = await conn.execute(`select coin from user where age = 46`);
    conn.end();
    return rows[0]['coin'];
}

// f2() - для проверки расскоментируйте, потом верните комментарий на место.


// Task 3
// Создайте функцию f3, которая возвращает true если у пользователя с lastname Petr монет больше 15 или false если меньше или равно.

async function f3() {
    const conn = await mysql.createConnection(config);
    const [ rows, fields] = await conn.execute(`select coin from user where lastname = 'Petr'`);
    conn.end();
    if (rows[0]['coin'] > 15) return true;
  else return false;
}

// f3() - для проверки расскоментируйте, потом верните комментарий на место.


// Task 4
// Создайте функцию f4, которая возвращает массив [ ] где нулевой элемент это количество монет у пользователя с емейл = iv@ua, а первый элемент - емейл пользователя с firstname berg. Задачу решать двумя последовательными запросами.

async function f4() {
    const conn = await mysql.createConnection(config);
    const [ rows, fields] = await conn.execute(`select coin from user where email = 'iv@ua'`);
    const [ rows2, fields2] = await conn.execute(`select email from user where firstname = 'berg'`);
    let arr = [rows[0]['coin'], rows2[0]['email']];
    conn.end();
    return arr;
}

// f4() - для проверки расскоментируйте, потом верните комментарий на место.


// Task 5
// Создайте функцию f5, которая возвращает массив строку состоящую количества монет у кажого пользователя через пробел. Порядок - по id (возрастание). Т.е. я ожидаю от вас строку 4 8 12 56 43. Задача выполняется выборкой и последующей обработкой массива.

async function f5() {
    const conn = await mysql.createConnection(config);
    const [ rows, fields] = await conn.execute(`select coin from user`);
    let arr = [rows.map(item => item.coin).join(' ')];
    conn.end();
    return arr;
}

// f5() - для проверки расскоментируйте, потом верните комментарий на место.


// Task 6
// Создайте функцию f6, которая первым запросом получает firstname пользователя с email = al@em, а вторым запросом записывает это firstname для пользователя с lastname Bro. Также функция должна возвращать данное firstname.

async function f6() {
    const conn = await mysql.createConnection(config);
    const [ rows, fields] = await conn.execute(`select firstname from user where email = 'al@em'`);
    await conn.execute(`update user set firstname='${rows[0]['firstname']}' where lastname = 'Bro'`);
    console.log(rows[0]['firstname']);
    conn.end();
    return rows[0]['firstname'];
}

// f6() - для проверки расскоментируйте, потом верните комментарий на место.