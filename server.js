const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res ) => {
    // lodash
    const num = _.random(0, 20);
    console.log(num);

    const greeting = _.once(() => {
        console.log('Hello');
    })
    greeting();
    // greeting();

    // setheader content type:
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
            
            case '/home':
            path += 'home.html';
            res.statusCode = 200;
            break;
            
            case '/home-page':
            res.statusCode = 301;
            res.setHeader('Location', '/home');
            res.end();
            break;


            case '/About':
            path += 'about.html';
            res.statusCode = 200;
            break;

         default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);

        }
    })

})
server.listen(3003, 'localhost', () => {
    console.log('server is running on port 3003');
})