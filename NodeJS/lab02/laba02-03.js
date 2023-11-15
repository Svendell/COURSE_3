const http = require('http');
const fs = require('fs'); 

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    if(req.url ==='/api/name'){
        try{
        let html = fs.readFileSync('./index.html');
        res.setHeader('Content-Type', 'text/html');
        res.end(html, 'utf-8');
        }
        catch(err){

        }
    }
    else{
        res.end(req.url);
    }
})

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})