const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data');
    reject('Somehting went wrong');
  }, 1500);
});

console.log('before');

promise.then(data => {
  console.log(data);
}).catch(e => {
  console.log(data);
});

console.log('after');