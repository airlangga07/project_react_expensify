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