// const square = function (x)  {
//   return x * x;
// }

// const squareArrow = (x) => {
//   return x * x;
// }

// more concise is available using arrow function
// for one-liner and quickly evaluated, you can omit the {} and return;
// const squareArrow = (x) => x * x;

// console.log(square(4));
// console.log(squareArrow(4));

// for a single parameter, you can omit the ()
const getFirstName = fullName => fullName.split(" ")[0];

console.log(getFirstName("Mikael Airlangga"));