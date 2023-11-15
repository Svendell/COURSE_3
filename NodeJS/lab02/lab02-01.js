const http = require('http'); // require() импортирует встроеную биюлиотеку http из nodejs 
const fs = require('fs'); 

const hostname = '127.0.0.1';
const port = 5000;
 
const server = http.createServer((req, res) => {
  let html = fs.readFileSync('./index.html');
  //res.writeHead(200,{'Content-Type': 'text/plain; charset=utf-8'});
  res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'}); // 
  res.end(html);
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});