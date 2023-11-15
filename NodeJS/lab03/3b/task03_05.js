/*
16. Разработайте три отдельные функции для вычисления квадрата, куба и четвертой степени заданного числа. Каждая из функций должна возвращать Promise, который либо разрешается с вычисленным значением, либо отклоняется с сообщением об ошибке, если ввод недействителен.
17. Далее используйте Promise.all() для вычисления этих функций. 
18. Обработайте результат с помощью обработчиков Promise. Протестируйте работу с правильным и неправильным вводом.
 */

/*
Разработайте три отдельные функции для вычисления квадрата, 
куба и четвертой степени заданного числа. 
Каждая из функций должна возвращать Promise,
 который либо разрешается с вычисленным значением,
  либо отклоняется с сообщением об ошибке, если ввод недействителен.
*/
function calculateSquare(number) {
    return new Promise((resolve, reject) => {
      if (typeof number !== 'number') {
        reject('Input is not a number');
      } else {
        resolve(Math.pow(number, 2));
      }
    });
  }
  
  function calculateCube(number) {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number') {
          reject('Input is not a number');
        } else {
          resolve(Math.pow(number, 3));
        }
    });
  }
  
  function calculateFourthPower(number) {
    return new Promise((resolve, reject) => {
      if (typeof number !== 'number') {
        reject('Input is not a number');
      } else {
        resolve(Math.pow(number, 4));
      }
    });
  }
  
  /*
Далее используйте Promise.all() для вычисления этих функций. 
  */
  Promise.all([
    calculateSquare(5),
    calculateCube(5),
    calculateFourthPower(5)
  ])
  /*
  18. Обработайте результат с помощью обработчиков Promise.
   Протестируйте работу с правильным и неправильным вводом.
  */
    .then((results) => {
      const [squareResult, cubeResult, fourthPowerResult] = results;
      console.log('Квадрат:', squareResult);
      console.log('Куб:', cubeResult);
      console.log('Четвертая степень:', fourthPowerResult);
    })
    .catch((error) => {
      console.error('Ошибка:', error);
    });