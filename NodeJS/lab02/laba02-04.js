const fs = require('fs'); 
const http = require('http');
const url = require('url');

function fact(n) {
    // Базовый случай: факториал от 0 и 1 равен 1
    if (n === 0 || n === 1) {
      return 1;
    }
  
    // Рекурсивный случай: вычисляем факториал для n-1 и умножаем на n
    return n * fact(n - 1);
  }
  
const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    let rc = JSON.stringify({k:0});
    let path = url.parse(req.url).pathname;


        if(req.url ==='/api/name'){
            const responseData = {
                lastName: 'Pesetsky',
                firstName: 'Ilya',
                middleName: 'Andreevich',
            };
            res.setHeader('Content-Type', 'application/json');
            //Converts a JavaScript value to a JavaScript Object Notation (JSON) string
            res.end(JSON.stringify(responseData));
            }    

        else if(req.url ==='/xmlhttprequest'){
            let html2 = fs.readFileSync('./index01.html');
            //Sets a single header value. If the header already exists in the to-be-sent headers, its value will be replaced.
            // Use an array of strings to send multiple headers with the same name.
            res.setHeader('Content-Type', 'text/html');
            res.end(html2);
        }
        else if(path ==="/fact"){
            let param = url.parse(req.url, true).query.k;
            if(typeof param !='undefined'){
                let k = parseInt(param);
                if(Number.isInteger(k)){
                    res.writeHead(200,{'Contenr-Type': 'application/json; charset=uft-8'});
                    setImmediate(()=>res.end(JSON.stringify({k:k, fact:fact(k)})))
                }
            }
        } 
    else {
        res.statusCode = 404;
        res.end('Not Found');
    }
})

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})