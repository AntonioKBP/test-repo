// const promise = new Promise(resolve => {
//   resolve(10);
// });

// promise
//   .then(value => {
//     return new Promise(resolve => {
//       resolve(value * 2);
//     });
//   })
//   .then(value => console.log(value));

// ==========================================================================

// const ourPromise = new Promise((resolve, reject) => {
//   let number = Math.random() > 0.5;
//   if (number) {
//     resolve('I am done');
//   } else {
//     reject('I am failed');
//   }
// })
//   .then(data => console.log('Data from resolved promise', data))
//   .catch(error => console.log('I am error', error))
//   .finally(() => console.log('I am complete anyway'));

// console.log('Our promise -> ', ourPromise);

// ===========================================================================

// refs = {
//   div1: document.querySelector('container'),
//   div2: document.querySelector('containerFinally'),
// };
// let cake;
// const birthday = new Promise((resolve, reject) => {
//   const number = Math.random() > 0.5;
//   setTimeout(() => {
//     if (number) {
//       cake = 'Cake is completed π';
//       resolve(cake);
//     } else {
//       cake = 'Cake is Lost π€¨';
//       reject(cake);
//     }
//   }, 1000);
// });

// birthday
//   .then(data => (refs.div1.innerHTML = `Celebrating with Cake πβ + ${data}`))

//   .catch(error => (refs.div1.innerHTML = `Without Cake πβ + ${error}`))
//   .finally(() => (refs.div2.innerHTML = 'We celebrate the birthday partyπ'));

// ====================================================

// const sleep = ms => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('123'), ms);
//   });
// };

// Promise.all([sleep(1500), sleep(2000), sleep(2500), sleep(1000)]).then(data =>
//   console.log('All --> finished', data)
// );
// Promise.race([sleep(1500), sleep(2000), sleep(2500), sleep(1000)]).then(data =>
//   console.log('Race --> finished')
// );

// ============================================================

// const promise = new Promise((resolve, reject) => {
//   resolve({ key: 'value' });
//   //   reject({ key: 'failure' });
// });
// // console.log(promise);
// promise
//   .then(response => {
//     console.log('then 1 -->', response);
//     return Object.keys(response);
//   })
//   .then(response => console.log('then 2 -->', response))
//   .catch(error => console.log(error));

// ============================================================

const timeout = (delay, data) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });

// timeout(2000, { key: 'Hello Promise' }).then(res => console.log(res));

const timeOutsAll = Promise.all([
  timeout(2000, { key: 'I am 2 seconds' }),
  timeout(1500, { key: 'I am 1.5 seconds' }),
  timeout(1000, { key: 'I am 1 second' }),
  timeout(3000, { key: 'I am 3 seconds' }),
]);

timeOutsAll.then(res => console.log(res));

const timeOutsRace = Promise.race([
  timeout(2000, { key: 'I am 2 seconds' }),
  timeout(1500, { key: 'I am 1.5 seconds' }),
  timeout(1000, { key: 'I am 1 second' }),
  timeout(3000, { key: 'I am 3 seconds' }),
]);

timeOutsRace.then(res => console.log(res));
