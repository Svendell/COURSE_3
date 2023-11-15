const http = require('http');
const url = require('url');
const fs = require('fs');

function fact(n) {
    // Базовый случай: факториал от 0 и 1 равен 1
    if (n === 0 || n === 1) {
      return 1;
    }
  
    // Рекурсивный случай: вычисляем факториал для n-1 и умножаем на n
    return n * fact(n - 1);
  }
  
// Создание HTTP-сервера с помощью модуля http
const server = http.createServer((req, res) => {
    // Создание переменной rc и преобразование объекта в JSON-строку (не используется в этом коде)
    let rc = JSON.stringify({k:0});
    let path = url.parse(req.url).pathname;

    if(path ==="/fact"){
      // Извлечение параметра "k" из URL-адреса запроса
        let param = url.parse(req.url, true).query.k;
        if(typeof param !='undefined'){
            let k = parseInt(param);
              // Проверка, если "k" является целым числом
            if(Number.isInteger(k)){
               // Отправка HTTP-ответа с кодом 200 (Успех) и JSON-ответом,
                // содержащим значение "k" и результат функции fact(k)
                res.writeHead(200,{'Contenr-Type': 'application/json; charset=uft-8'});
                res.end(JSON.stringify({k:k, fact:fact(k)}))
            }
        }
    }
  });


server.listen(5000, () => {
console.log('Server is running on http://localhost:5000/');
});