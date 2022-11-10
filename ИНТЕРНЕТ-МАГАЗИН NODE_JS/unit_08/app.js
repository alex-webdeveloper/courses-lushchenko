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

app.listen(3000, function () {
    console.log('Node express Work on 3000 port');
});

app.get('/', function (req, res) {
    console.log('load /');
    // res.render('index.html');
    res.render('main', {
        foo: 4,
        bar: 'variable'
    });
});

app.get('/cat', function (req, res) {
    res.end('category');
});