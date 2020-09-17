import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyALvjJSPMz6Rcu_xeQeTYAo6314qMgdqFs",
    authDomain: "clone-66464.firebaseapp.com",
    databaseURL: "https://clone-66464.firebaseio.com",
    projectId: "clone-66464",
    storageBucket: "clone-66464.appspot.com",
    messagingSenderId: "670333315016",
    appId: "1:670333315016:web:06266e2c951f25c0e682fd",
    measurementId: "G-LEMJ3HTKK0"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  const runtimeOpts = {
    timeoutSeconds: 300,
    memory: '1GB'
  }
  
 
  

  export { db, auth };
  