const fs = require('fs'); 
const http = require('http');


const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    // Исправление Access to XMLHttpRequest at 'http://localhost:5000/api/name' from origin
    // 'http://127.0.0.1:5000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
    // header is present on the requested resource.
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // Если требуется использование куки
        if(req.url ==='/api/name'){
            const responseData = {
                lastName: 'Pesetsky',
                firstName: 'Ilya',
                middleName: 'Andreevich',
            };
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(responseData));
            }    

        else if(req.url ==='/jquery'){
            let html2 = fs.readFileSync('./jquery.html');
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