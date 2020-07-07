import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyA1oGluoz1Ejfkf0uObX2jpejdncqxCvtw",
  authDomain: "foodsantanew-7eaba.firebaseapp.com",
  databaseURL: "https://foodsantanew-7eaba.firebaseio.com",
  projectId: "foodsantanew-7eaba",
  storageBucket: "foodsantanew-7eaba.appspot.com",
  messagingSenderId: "825656179687",
  appId: "1:825656179687:web:11afa69acb6da5ce731b42"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
