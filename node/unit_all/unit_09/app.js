
const mysql = require('mysql');
const http = require('http');
const url = require('url');
const { parse } = require('querystring');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "node_test",
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

http.createServer((req, res) => {

    if (req.method == 'GET') {
        let urlRequest = url.parse(req.url, true);
        let query = '';
        let arr = [];
        let str = '';
        switch (urlRequest.query.task) {
            case '2':
                query = "SELECT firstname FROM user";
                conn.query(query, (err, result, field) => {
                    arr = result.map(elem => elem.firstname);
                    str = JSON.stringify(arr);
                    res.end(str);
                });
                break;
            case '3':
                query = "SELECT email FROM user";
                conn.query(query, (err, result, field) => {
                    arr = result.map(elem => elem.email);
                    str = JSON.stringify(arr);
                    res.end(str);
                });
                break;
            case '4':
                let em = urlRequest.query.email;
                query = `SELECT id FROM user WHERE email='${em}'`;
                conn.query(query, (err, result, field) => {
                    if (result.length == 0) res.end('0');
                    else {
                        let id = result[0].id;
                        res.end(id.toString());
                    }
                });
                break;
            case '5':
                let lk = urlRequest.query.email;
                query = `SELECT id FROM user WHERE email LIKE '%${lk}%'`;
                conn.query(query, (err, result, field) => {
                    if (result.length != 0) {
                        arr = result.map(elem => elem.id);
                        str = JSON.stringify(arr);
                        res.end(str);
                    }
                    else res.end('0');
                });
                break;
            default:
                res.end('404');
        }
    }
    else res.end('404');
}).listen(3000);
