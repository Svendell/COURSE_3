const EventEmitter = require('events');
const http = require('http');
const url = require('url');
const fs = require('fs');
let data = require('./DB.js');


let db = new data.DB;

//Слушатели событий
//----------------------------------------------------
db.on('GET', (request, response)=>{
    console.log('DB.GET');
    db.get().then( element =>
    response.end(JSON.stringify(element)));
})

db.on('POST', (requset,response)=>{
    console.log('DB.POST');
    requset.on("data", data=>{
        let r = JSON.parse(data);
        if(r.name == -1){
            console.log('подгрузка DB.POST');
            //подгрузка
            response.setHeader('Content-Type', 'application/json');
            db.select(r.id)
            .then(elem =>{
                response.end(JSON.stringify(elem));
            })
        }
        else{
        db.post(r).then( element =>
        response.end(JSON.stringify(element)));
        }
    })
});

db.on('PUT', (requset,response)=>{
    console.log('DB.PUT');
    requset.on("data", data=>{
        let r = JSON.parse(data);
        db.put(r);
        response.end(JSON.stringify(r));
    })
});

db.on('DELETE', (request, response)=>{
    console.log('DB.DELETE');
        let param = url.parse(request.url, true).query.id;
        if(typeof param !='undefined'){
            db.delete(param);
        }
    }
);
//----------------------------------------------------

http.createServer((request, response)=>{
    if(url.parse(request.url).pathname === '/'){
        let html = fs.readFileSync('./index.html');
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(html);
    }
    else if(url.parse(request.url).pathname=== '/api/db'){
        db.emit(request.method, request, response); //-- для генерации события, имя событя - строка
    }
}).listen(5000);

console.log('Server running at http://localhost:5000');