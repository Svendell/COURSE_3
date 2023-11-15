/*
19. Используйте задание 5. Добавьте к каждой функции разрешение Promise спустя некоторый промежуток времени. 
20. Используйте Promise.race() для вычисления математических функций.
21. Замените использование на Promise.any() для получения первого Promise, который разрешается.

*/
function calculateSquare(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (typeof number !== 'number') {
            reject('Input is not a number');
        } else {
            resolve(Math.pow(number, 2));
        }
        }, 1000); // Разрешаем Promise через 1 секунду
    });
}

function calculateCube(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (typeof number !== 'number') {
            reject('Input is not a number');
        } else {
            resolve(Math.pow(number, 3));
        }
        }, 2000); 
    });
}  

function calculateFourthPower(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (typeof number !== 'number') {
            reject('Input is not a number');
        } else {
            resolve(Math.pow(number, 4));
        }
        }, 3000); 
    });
}

      

/*
20. Используйте Promise.race() для вычисления математических функций.
*/
// Используем Promise.race() для получения первого разрешенного Promise
Promise.race([
    calculateSquare("s"),
    calculateCube(2),
    calculateFourthPower(4)
])
.then((result) => {
    console.log('Первый разрешенный результат:', result);
})
.catch((error) => {
    console.error('Ошибка:', error);
});
      

/*
21. Замените использование на Promise.any() 
для получения первого Promise, который разрешается.
*/
// Используем Promise.any() для получения первого разрешенного Promise
Promise.any([
    calculateSquare(3),
    calculateCube("s"),
    calculateFourthPower(4)
    ])
    .then((result) => {
        console.log('Первый разрешенный результат (Promise.any()):', result);
    })
    .catch((errors) => {
        console.error('Все Promise отклонены (Promise.any()):', errors);
    });
  
   