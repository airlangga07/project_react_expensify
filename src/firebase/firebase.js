import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyCufNjoncpKfUOMPzZBTvDIkrQyicWUFn8",
  authDomain: "project-expensify.firebaseapp.com",
  databaseURL: "https://project-expensify.firebaseio.com",
  projectId: "project-expensify",
  storageBucket: "project-expensify.appspot.com",
  messagingSenderId: "382688022405"
};

firebase.initializeApp(config);
const database = firebase.database();

database.ref().set({
  name: 'Mikael Airlangga',
  age: 28, 
  isSingle: false,
  location: {
    city: 'Singapore', 
    origin: 'Indonesia'
  },
}).then(() => {
  console.log('Data is saved!');
}).catch(error => {
  console.log('Error: ' + error);
});

// update the data
// database.ref('age').set(27);
// database.ref('location/city').set('Balestier');
// database.ref('attributes').set({
//   height: 175,
//   weight: 61
// }).then(() => {
//   console.log('Data is saved!');
// }).catch(error => {
//   console.log('Error: ' + error);
// });

// remove property from database
database.ref('isSingle').remove().then(() => {
  console.log('Data was removed');
}).catch(err => {
  console.log('Error: ' + err);
});

// by passing up the null value is equivalent by calling the remove
// database.ref('isSingle').set(null);