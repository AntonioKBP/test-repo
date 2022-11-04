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
//       cake = 'Cake is completed 🎂';
//       resolve(cake);
//     } else {
//       cake = 'Cake is Lost 🤨';
//       reject(cake);
//     }
//   }, 1000);
// });

// birthday
//   .then(data => (refs.div1.innerHTML = `Celebrating with Cake 🎂✅ + ${data}`))

//   .catch(error => (refs.div1.innerHTML = `Without Cake 🎂❌ + ${error}`))
//   .finally(() => (refs.div2.innerHTML = 'We celebrate the birthday party💝'));

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
