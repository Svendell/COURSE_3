/*
13. Для проверки карты необходимо создать функцию validateCard.
 Она должна принимать номер карты, выводить его на консоль
  и рандомно возвращать true или false.
*/
function validateCard(cardNum) {
  console.log('Cark check :', cardNum);
  const random = Math.random() < 0.5 ? 1 : 0;
  return random === 1;
}

function createOrder(CustmrCardNum) {
  return new Promise((resolve, reject) => {
    if (!validateCard(CustmrCardNum)) {
      //А) Если карта покупателя невалидна,
      // то отклонять Promise  с ошибкой «Card is not valid».
      reject('Card is not valid');
    } 
    /*
    Б) Если же карта прошла проверку,
     то генерировать номер заказа (например, с помощью uuid)
      и успешно разрешать Promise с этим номером спустя 5 сек.
    */
    else {
      console.log("Card " + CustmrCardNum + " is valid");
      // Генерируем номер заказа 
      //(в данном случае, случайное число)
      const orderId = Math.floor(Math.random() * 1000);
      // Задержка в 5 секунд перед разрешением обещания
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
}

/*
14. Также разработайте функцию proceedToPayment,
 которая должна вызываться после createOrder,
  если проверка карты прошла успешно.
*/
function proceedToPayment(orderId) {
  console.log('Payment is made for an order with number', orderId);
  return new Promise((resolve, reject) => {
    const random = Math.random() < 0.5 ? 1 : 0;
    if (random === 1) {
      resolve('Payment successful');
    } else {
      reject('Payment failed');
    }
  });
}
/*
12. Разработайте функцию createOrder, в которой будет создаваться Promise. Эта функция должна принимать в качестве параметра номер карты покупателя, проверять ее, а также назначать идентификатор заказу.
А) Если карта покупателя невалидна, то отклонять Promise  с ошибкой «Card is not valid».
Б) Если же карта прошла проверку, то генерировать номер заказа (например, с помощью uuid) и успешно разрешать Promise с этим номером спустя 5 сек.
13. Для проверки карты необходимо создать функцию validateCard. Она должна принимать номер карты, выводить его на консоль и рандомно возвращать true или false.
14. Также разработайте функцию proceedToPayment, которая должна вызываться после createOrder, если проверка карты прошла успешно. В ней необходимо принимать номер заказа, выводить его на консоль и возвращать Promise, который рандомно разрешается либо с успешным значением «Payment successfull», либо с ошибкой «Payment failed».
15. Вызовите функции createOrder и proceedToPayment в правильном порядке и обработайте результат двумя способами: с помощью обработчиков Promise и с помощью конструкции async/await c try/catch. Должны получаться следующие результаты:
*/




// Вызываем функцию createOrder и обрабатываем результаты 
//с использованием обещаний и обработчиков
createOrder(234523452452)
  .then((orderId) => {
    console.log('1.Order is succeseful created. Order num:', orderId);
    return proceedToPayment(orderId);
  })
  .then((paymentResult) => {
    console.log('1.Paying result:', paymentResult);
  })
  .catch((error) => {
    console.error('1.Error:', error);
  });

// Вызываем функцию createOrder и обрабатываем
// результаты с использованием async/await и try/catch
async function processOrder() {
  try {
    const orderId = await createOrder(256246254235);
    console.log('2.Order is succeseful created. With num:', orderId);
    const paymentResult = await proceedToPayment(orderId);
    console.log('2.Paying result:', paymentResult);
  } catch (error) {
    console.error('2.Error:', error);
  }
}

processOrder();
