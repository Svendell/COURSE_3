const fs = require('fs'); 
const http = require('http');


const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    
        if(req.url ==='/api/name'){
            const responseData = {
                lastName: 'Pesetsky',
                firstName: 'Ilya',
                middleName: 'Andreevich',
            };
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(responseData));
            }    

        else if(req.url ==='/fetch'){
            let html2 = fs.readFileSync('./fetch.html');
            res.setHeader('Content-Type', 'text/html');
            res.end(html2);
        }
    else {
        res.statusCode = 404;
        res.end('Not Found');
    }
})

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})