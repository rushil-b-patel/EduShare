import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDTd09TKOCuY4CZgoaZHMuF4AkPPviECp4",
  authDomain: "edushare-resource.firebaseapp.com",
  projectId: "edushare-resource",
  storageBucket: "edushare-resource.appspot.com",
  messagingSenderId: "433429115687",
  appId: "1:433429115687:web:12ddae231b3caeb442ef02"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };