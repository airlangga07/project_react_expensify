// in older javascirpt we can use this
// we can reassign it using new variable
// this is totally valid
var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// this may causes an error
// this no longer valid 
let nameLet = 'Jen';
// let nameLet = 'Julie';

// reassignment still ok
nameLet = 'This is valid';
console.log('nameLet', nameLet);

// this assignment is not valid
// and may cause an error
const nameConst = 'Frank';
// const nameConst = 'Scott';

// reassignment is also not valid
// nameConst = 'This is not valid';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Hal';
  // let petName = 'Hal';
  // const petName = 'Hal';
  return petName;
}

// getPetName();
// petName is not accessible
// this is also happened for let and const

// this will causes an error
// console.log(petName);

// let and const is support for block level scoping
var fullName = 'Mikael Airlangga';

if (fullName) {
  const firstName = fullName.split(' ')[0];
  // this is valid
  console.log(firstName);
}

// this is not valid
console.log(firstName);