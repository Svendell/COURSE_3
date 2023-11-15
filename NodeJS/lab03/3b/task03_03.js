/*. Разработайте еще одну функцию thirdJob, принимающую параметр data и возвращающую Promise.
8. Если data не является числом, немедленно вернуть отклоненный Promise со значением «error».
9. Если data является нечетным числом, вернуть через 1 секунду успешно разрешенный Promise со значением «odd».
10. Если data является четным числом, вернуть через 2 секунды отклоненный Promise со значением «even».
11. Вызовите функцию thirdJob и обработайте результат двумя способами: с помощью обработчиков Promise и с помощью конструкции async/await c try/catch.
 */



function thirdJob(data) {
    return new Promise((resolve, reject) => {
      if (isNaN(data)) {
        setTimeout(() => {
          reject('Error');
        });
      } else if (data % 2 === 1) {
        setTimeout(() => {
          resolve('odd');
        }, 1000);
      } else {
        setTimeout(() => {
          reject('even');
        }, 2000);
      }
    });
  }
  
  // Обработка Promise с использованием обработчиков
  thirdJob(5)
    .then((result) => {
      console.log("resolve :", result);
    })
    .catch((error) => {
      console.error("rehject:", error);
    });
  
  // Обработка Promise с использованием async/await и try/catch
  async function executeAsync() {
    try {
      const result = await thirdJob("s");
      console.log("resolve async/await:", result);
    } catch (error) {
      console.error("reject async/await:", error);
    }
  }
  
  executeAsync();