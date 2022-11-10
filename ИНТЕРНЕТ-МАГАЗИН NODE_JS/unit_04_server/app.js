const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers['user-agent']);


    res.setHeader("Content-Type", "text/html; charset=utf-8;")
    if (req.url == '/') res.end('main <h1>Главная</h1>');
    else if (req.url == '/cat') res.end('Category');
    else if (req.url == '/dat') {
        const myFile = fs.readFileSync('1.dat');
        console.log(myFile);
        res.end(myFile);
    };
}).listen(3000);