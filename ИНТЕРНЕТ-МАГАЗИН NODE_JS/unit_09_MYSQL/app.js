let express = require('express');
let app = express();
/** 
* public- имя папки где хранится статика 
*              DEBUGGER
* DEBUG=express:* npm start 
* DEBUG=express:router npm node app
* DEBUG=express:application npx nodemon app
* app.set('views', './views')
*/
app.use(express.static('public'));
app.set('view engine', 'pug');

/**
 * Подключаем mysql модуль 
 */
let mysql = require('mysql');
/**
 * Настраиваем модуль 
 */
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "lite_shop",
    port: 8889
});


app.listen(3000, function () {
    console.log('Node express Work on 3000 port');
});

app.get('/', function (req, res) {
    con.query(
        'SELECT * FROM goods',
        function (error, result) {
            if (error) throw error;
            // console.log(result);
            let goods = {};
            for (let i = 0; i < result.length; i++) {
                goods[result[i]['id']] = result[i];
            }
            console.log(goods);
            // console.log(goods[5]);
            console.log(JSON.parse(JSON.stringify(goods)));

            res.render('main', {
                foo: 4,
                bar: 'variable',
                goods: JSON.parse(JSON.stringify(goods))
            });
        });
});

