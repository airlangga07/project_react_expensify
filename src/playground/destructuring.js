// object destructuring 

const person = {
  name: 'Mikael',
  age: 28,
  location: {
    city: 'Singapore',
    temp: 92
  }
};

console.log(`${person.name} is ${person.age}`);
console.log(`It's ${person.location.temp} in ${person.location.city}.`);

const { 
  // default value
  name = 'Anonymous', 
  age, 
  location: { 
    city, 
    // rename temp as temperature 
    temp: temperature 
  } 
} = person;

console.log(`${name} is ${age}`);
console.log(`It's ${temperature} in ${city}.`);


const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { publisher: { name: publisherName = 'Self-Published' } } = book;

console.log(publisherName);


// array destructuring
const address = ['5 Kim Keat Rd', 'Balestier', 'Singapore', 'Southeast Asia'];
console.log(`You are in ${address[1]} ${address[2]}`);

const [ street, cityName, country, region ] = address;
console.log(`You are in ${street} ${cityName}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [hotCoffee,,medium] = item;
console.log(`A medium ${hotCoffee} costs ${medium}`)