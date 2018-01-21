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

database.ref().on('value', snapshot => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

// retrieving data
// database.ref().once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch(err => {
//     console.log('Error fetching data ', err);
//   });

// another way to retrieve data
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (err) => {
//   console.log('Error with data fetching', err);
// });

// setTimeout(() => {
//   database.ref('age').set(80);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(90);
// }, 10500);

// creating data
// database.ref().set({
//   name: 'Mikael Airlangga',
//   age: 28, 
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Singapore', 
//     origin: 'Indonesia'
//   },
// }).then(() => {
//   console.log('Data is saved!');
// }).catch(error => {
//   console.log('Error: ' + error);
// });


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
// database.ref('isSingle').remove().then(() => {
//   console.log('Data was removed');
// }).catch(err => {
//   console.log('Error: ' + err);
// });

// by passing up the null value is equivalent by calling the remove
// database.ref('isSingle').set(null);

// updating data
// database.ref().update({
  // update name and age property
  // name: 'Mike',
  // age: 29,
  // deleting property
  // isSingle: null,
  // setting value
  // job: 'Software developer'
// });

// update the nested document
// database.ref().update({
  // job: 'Manager',
  // 'location/city': 'Jakarta'
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });
