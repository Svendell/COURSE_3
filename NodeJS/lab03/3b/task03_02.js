/*4. Разработайте функцию secondJob, которая будет возвращать Promise.
5. Promise должен отклоняется с сообщением об ошибке через 3 секунды.
6. Вызовите функцию secondJob и обработайте результат двумя способами: с помощью обработчиков Promise и с помощью конструкции async/await c try/catch.
*/ 


function secondJob() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Произошла ошибка");
      }, 3000);
    });
  }
  
  // Обработка Promise с использованием обработчиков
  secondJob()
    .then((result) => {
      console.log("resolve ?:", result);
    })
    .catch((error) => {
      console.error("Promise rehject:", error);
    });
  
  // Обработка Promise с использованием async/await и try/catch
  async function executeAsync() {
    try {
      const result = await secondJob();
      console.log("resolve async/await:", result);
    } catch (error) {
      console.error("Promise rehject async/await:", error);
    }
  }
  
  executeAsync();