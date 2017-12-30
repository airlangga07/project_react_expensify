// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // arguments no longer accessible
  // console.log(arguments);
  return a + b;
}

console.log(add(56, 1));

// this keyword - no longer bound

const user = {
  name: 'Mikael',
  cities: [ 'Singapore', 'Jakarta'],
  printPlacesLived() {
    return this.cities.map(city => `${this.name} has lived in ${city}`);
  }
}

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 1264,
  multiply() {
    return this.numbers.map(num => num * this.multiplyBy);
  }
}

console.log(multiplier.multiply());