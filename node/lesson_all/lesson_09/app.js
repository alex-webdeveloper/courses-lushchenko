//  РАБОТА С БАЗАМИ ДАННЫХ. СОЗДАНИЕ БАЗЫ ДАННЫХ И ПОДКЛЮЧЕНИЕ К БАЗЕ.
const mysql = require('mysql');

// конфигурация

const conn = mysql.createConnection({
    host: "localhost", // 127.0.0.1 тоже амое что и localhost
    user: "root",
    database: "stage2_project",
    password: "root",
    port: 8889
});

conn.connect(err => {
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log('Database ----- OK');
    }
});


 let query="SELECT * FROM users";

conn.query(query, (err, result, field) =>{
    console.log(err);
    // console.log(result);
    console.log(result[1]['login']);
     console.log(field);
});

// conn.end( err => {
//     if (err) {
//         console.log(err);
//         return err;
//     }
//     else {
//         console.log('Database ----- Close');
//     }
// });