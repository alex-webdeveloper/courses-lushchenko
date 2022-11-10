let express = require('express');
let app = express();
/** 
* public- имя папки где хранится статика 
*              DEBUGGER
* DEBUG=express:* npm start 
* DEBUG=express:router npm node app
* DEBUG=express:application npx nodemon app
*/
app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Node express Work on 3000 port');
});

app.get('/', function (req, res) {
    console.log('load /');
    res.render('index.html');
});

app.get('/cat', function (req, res) {
    // res.sendFile('cat.html', { root: './public/' }); // второй способ
    res.sendFile(__dirname + '/public/cat.html');
});

app.get('/goods', function (req, res) {
    res.end('This goods string, not file');
});