/*Задание 01
1. Разработайте серверное приложение 03-01, которое на запрос http://localhost:5000 возвращает страницу, отражающую состояние приложения (см. рис.).
 Вывод на страницу состояния

2. Приложение может находиться в четырех состояниях: norm, stop, test, idle.
3. Состояние приложения переключается с помощью стандартного системного ввода, который назначен на консоль. Консоль в приглашении (prompt) указывает текущее состояние приложения.
4. Пользователь может ввести новое состояние (norm, stop, test, idle). При корректном вводе состояния осуществляется переключение состояния приложения. 
5. При ошибочном вводе режима ошибочно введенная последовательность символов просто отображается, но переключение режима не осуществляется. 
6. Допускается ввод состояния exit, которое приводит к завершению приложения (см. рис.)
*/

const http = require('http');
const readline = require('readline');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Отображаем состояние приложения в ответе на запрос
  res.end(`Current state: ${currentState}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentState = 'norm';

// Функция для обработки ввода пользователя
function handleUserInput(input) {
  input = input.trim().toLowerCase();

  // Проверяем корректность ввода и переключаем состояние
  if (input === 'norm' || input === 'stop' || input === 'test' || input === 'idle') {
    currentState = input;
    console.log(`State switched to: ${currentState}`);
  } else if (input === 'exit') {
    console.log('Exiting the application.');
    process.exit(0);
  } else {
    console.log(`Invalid input: ${input}`);
  }

  // Отображаем приглашение для ввода
  rl.setPrompt(`Enter state (norm, stop, test, idle, exit): `);
  rl.prompt();
}

// Начальное приглашение для ввода состояния
rl.setPrompt(`Enter state (norm, stop, test, idle, exit): `);
rl.prompt();

// Обработчик события ввода пользователя
rl.on('line', handleUserInput);

// Запускаем сервер на порту 5000
server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000/');
});