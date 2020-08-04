import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCXurXbLyEp_VI_tosmcOOYgmdySmI0FE0",
    authDomain: "wily-app-1307.firebaseapp.com",
    databaseURL: "https://wily-app-1307.firebaseio.com",
    projectId: "wily-app-1307",
    storageBucket: "wily-app-1307.appspot.com",
    messagingSenderId: "298228620490",
    appId: "1:298228620490:web:76032b50d0ec4ef7e8a833",
    measurementId: "G-HVSGSDR6PF"
}
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
