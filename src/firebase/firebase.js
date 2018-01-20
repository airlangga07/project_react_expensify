import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCufNjoncpKfUOMPzZBTvDIkrQyicWUFn8",
  authDomain: "project-expensify.firebaseapp.com",
  databaseURL: "https://project-expensify.firebaseio.com",
  projectId: "project-expensify",
  storageBucket: "project-expensify.appspot.com",
  messagingSenderId: "382688022405"
};

console.log('firebase called successfully!');
firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Mikael Airlangga'
});
