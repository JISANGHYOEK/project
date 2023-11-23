// async는 JavaScript에서 비동기 처리를 위해 사용하는 키워드입니다. async 키워드는 함수 앞에 위치하며, 이 키워드가 붙은 함수는 항상 Promise를 반환합니다.

// Promise는 JavaScript에서 비동기 처리를 수행하는 객체로, 비동기 처리가 성공적으로 끝났을 때의 값을 담거나, 처리가 실패했을 때의 이유(오류 메시지 등)를 담습니다.

// async 키워드가 붙은 함수 내부에서는 await 키워드를 사용할 수 있습니다. await 키워드는 Promise의 처리가 끝날 때까지 함수의 실행을 일시적으로 멈추게 하며, Promise의 처리 결과를 반환합니다. 이를 통해 비동기 처리를 동기 처리처럼 순차적으로 작성할 수 있어 코드가 더욱 간결하고 이해하기 쉬워집니다.

// 예를 들어, 데이터베이스에서 데이터를 조회하는 비동기 작업이 있다고 가정해봅시다. 이 작업이 끝나기를 기다린 후 그 결과를 활용해야 하는 상황에서 async와 await를 사용하여 작성할 수 있습니다.

// javascript
// async function getData() {
//   const data = await database.query('SELECT * FROM table');
//   console.log(data);
// }
// 위 코드에서 database.query('SELECT * FROM table')는 Promise를 반환하는 비동기 함수라고 가정합니다. await 키워드 덕분에 이 Promise가 처리될 때까지 기다린 후 그 결과를 data에 할당하고, 이후에 console.log(data)를 실행할 수 있습니다.

// 이처럼 async와 await는 비동기 처리를 보다 효율적이고 가독성 좋게 관리할 수 있게 도와줍니다.
