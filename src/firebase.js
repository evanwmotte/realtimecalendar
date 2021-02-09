import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAyvuNnOcz0v188DSZRQ0znrOqOrbCAMqo",
    authDomain: "calendarshare-c3051.firebaseapp.com",
    projectId: "calendarshare-c3051",
    storageBucket: "calendarshare-c3051.appspot.com",
    messagingSenderId: "354449929597",
    appId: "1:354449929597:web:7cd70bce37c7c3c9bb0814",
    measurementId: "G-C17FGW3G3R"
  };

  const fireBase = firebase.initializeApp(firebaseConfig);
  const storage = fireBase.storage();
  const firestore = firebase.firestore();
  const db = fireBase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, db, firestore, storage, provider }