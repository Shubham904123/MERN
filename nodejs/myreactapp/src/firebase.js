import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCjYISDGnhUTs_IKGCA4CePNTRarVF17b8",
    authDomain: "reactprojectday19.firebaseapp.com",
    projectId: "reactprojectday19",
    storageBucket: "reactprojectday19.appspot.com",
    messagingSenderId: "651760660421",
    appId: "1:651760660421:web:b31709b8cf7b39bbd6a5ac"
  };

  firebase.initializeApp(firebaseConfig)
  var db=firebase.firestore();
  var storage = firebase.storage();
  var auth=firebase.auth();
  var provider= new firebase.auth.GoogleAuthProvider()
  
  export{db , storage,auth,provider}