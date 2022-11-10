const http = require('http');
const url = require('url');
const {parse} = require('querystring');

http.createServer(function (req, res) {
    let urlParts = url.parse(req.url, true);
    if (req.method == 'GET') {
        switch (urlParts.pathname) {
            case "/main":
                main(req, res);
                break;
            case "/about":
                about(req, res);
                break;
            case "/cat":
                let query = urlParts.query.lang;
                cat(req, res, query);
                break;
            default:
                page404(req, res);
                break;
        }
    } else page404(req, res);

}).listen(3000);

function main(req, res) {
    res.end("'main'");
}

function about(req, res) {
    res.end("'about'");
}

function cat(req, res, query) {
    if (query) {
       if (query == 'ru') res.end("ru");
      else if  (query == 'en') res.end("en");
       else page404(req, res);
    }
    else  res.end("en");
}

function page404(req, res) {
    res.end("404");
}