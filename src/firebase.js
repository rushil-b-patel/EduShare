import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBGFCR8bCkuFTa3X8YU7vRKYcwnk7kT6OI",
    authDomain: "edushare-f051c.firebaseapp.com",
    projectId: "edushare-f051c",
    storageBucket: "edushare-f051c.appspot.com",
    messagingSenderId: "457452659924",
    appId: "1:457452659924:web:abe4c52290676a688a0741"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };