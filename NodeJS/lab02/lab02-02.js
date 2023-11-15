const http = require('http'); // require() импортирует встроеную биюлиотеку http из nodejs 
const fs = require('fs'); 

const hostname = '127.0.0.1';
const port = 5000;
 
const server = http.createServer((req, res) => {
    const fname = './pic.gif';
    let gif = null;

    fs.stat(fname, (err,stat)=>{
        if(err){console.log('error:',err);}
        else{
            gif = fs.readFileSync(fname);
            res.writeHead(200,{'Content-Type': 'image/gif;', 'Content-Lenght':stat.size});
            //Можно так
            //res.contentType='image/gif':
            // res.contentLenght=stat.size:
            res.end(gif,'binary');
        }
    })
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});