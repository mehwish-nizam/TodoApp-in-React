import * as firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyDgCsEAFZrPTJ4L8v2RKCBAFUy9NlH64Gg",
    authDomain: "web-and-mobile-app-6982f.firebaseapp.com",
    databaseURL: "https://web-and-mobile-app-6982f.firebaseio.com",
    projectId: "web-and-mobile-app-6982f",
    storageBucket: "web-and-mobile-app-6982f.appspot.com",
    messagingSenderId: "841554820720",
    appId: "1:841554820720:web:870ca73a48f85a976cbeb5",
    measurementId: "G-2FEVXSCTY9"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);