import * as firebase from 'firebase';


const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// // child removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({ id: childSnapshot.key, ...childSnapshot.val() });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Phone Bills',
//   note: '',
//   amount: 5900,
//   createdAt: 1 
// });

// database.ref('notes').push({
//   title: 'new note', 
//   body: 'hello'
// });

// database.ref('notes/-L3T7Si0kKjDclQE786_').update({
//   body: 'buy food'
// })
// const notes = [{
//   id: '12',
//   title: 'first note',
//   body: 'This is my note'
// }, {
//   id: '12daf',
//   title: 'another note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref().on('value', snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

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
