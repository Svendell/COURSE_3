const http = require('http');
const url = require('url');
const fs = require('fs');

var fact =(n)=> {
  // Создать многомерный массив
    // Базовый случай: факториал от 0 и 1 равен 1
    if (n === 0 || n === 1) {
      return 1;
    }
    // Рекурсивный случай: вычисляем факториал для n-1 и умножаем на n
    return n * fact(n - 1);
}
  

http.createServer(function(req, res) {
    let rc = JSON.stringify({k:0});
    let path = url.parse(req.url).pathname;

    if(path ==='/fact'){
      //парсим ссылку, тру отвечает за обработку как объект, а не как строку
        let param = url.parse(req.url, true).query.k;
        if(typeof param !='undefined'){
            let k = parseInt(param);

            if(Number.isInteger(k)){
              res.writeHead(200,{'Content-Type': 'application/json; charset=utf-8'})
              res.end(JSON.stringify({k:k, fact: fact(k)}))
            }
        }
    }
    else if (path === '/'){
      let html = fs.readFile('fact.html', (err, html) =>{
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(html);
    })
    }
    else{
      res.end(rc);
    }
})
.listen(5000, () => {
console.log('Server is running on http://localhost:5000/');
});






//.query - Это свойство объекта, возвращенного url.parse, которое представляет собой объект с параметрами запроса URL-адреса.
// Если, например, URL-адрес содержит ?k=42, то query будет объектом { k: '42' }, где k - это имя параметра, а '42' - его значение.