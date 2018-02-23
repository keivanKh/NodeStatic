'use strict';
var http = require('http');
var fs=require("fs");
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    var url = req.url;
    switch (url) {
        case '/':
            getStaticPages(res, 'public/Home.html', 'text/html');
            break;
        case '/about':
            getStaticPages(res, 'public/About.html', 'text/html');
            break;
        case '/contactus':
            getStaticPages(res, 'public/Contactus.html', 'text/html');
            break;
        default:
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('400 -- Page not found.');
    }
}).listen(port);


function getStaticPages(response, filePath, ContentType) {
    fs.readFile(filePath, function (error, data) {
        if (error) {
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('500 -- internal sever error');
        }
        if (data) {
            response.writeHead(200, { 'Content-Type': ContentType });
            response.end(data);
        }
    });
}


