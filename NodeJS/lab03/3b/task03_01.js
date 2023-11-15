/*1. Разработайте функцию firstJob, которая будет возвращать Promise.
2. Promise должен разрешаться успешно со значением «Hello World» через 2 секунды после вызова функции firstJob.
3. Вызовите функцию firstJob и обработайте результат двумя способами: с помощью обработчиков Promise и с помощью конструкции async/await c try/catch.
 */


/*Promise – это специальный объект, который содержит своё состояние.
 Вначале pending («ожидание»), затем – одно из:
  fulfilled («выполнено успешно») или
   rejected («выполнено с ошибкой»).*/

function firstJob() { 
return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Hello World");
    }, 2000);
});
}
  
  // Обработка Promise с использованием обработчиков
  firstJob()
    .then((result) => {
      console.log("Promise разрешен:", result);
    })
    .catch((error) => {
      console.error("Произошла ошибка:", error);
    });
  
  // Обработка Promise с использованием async/await и try/catch
  async function executeAsync() {
    try {
      const result = await firstJob();
      console.log("Promise разрешен (async/await):", result);
    } catch (error) {
      console.error("Promise ошибка (async/await):", error);
    }
  }
  
  executeAsync();