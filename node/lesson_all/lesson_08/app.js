// ПОЛУЧЕНИЕ GET И POST ЗАПРОСОВ НА NODE.JS
const http = require('http'); // получить сервер
const url = require('url');
const { parse } = require('querystring');

http.createServer((request, response) => {
    console.log('Server Work');
    console.log(request.method); // !!!!!!!!!!
    if (request.method == 'GET') {
        // GET -> получить и обработать
        let urlRequest = url.parse(request.url, true);
        // console.log(urlRequest);
        console.log(urlRequest.query.auth); // ! GET Params
        if (urlRequest.query.test % 2 == 0) {
            response.end('even');
        }
        response.end('odd');
    }

    else {
        // POST
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log(body);
            let params = parse(body);
            console.log(params);
            console.log(params.auth);
            response.end('ok');
        });
    }
}).listen(3000);

