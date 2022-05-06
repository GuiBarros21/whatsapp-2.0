import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAOgcegYZw7nA0UTAZmxyc9hcxeXUbg8Nk",
  authDomain: "whatsapp-2-e8435.firebaseapp.com",
  projectId: "whatsapp-2-e8435",
  storageBucket: "whatsapp-2-e8435.appspot.com",
  messagingSenderId: "603330114134",
  appId: "1:603330114134:web:6b51d6b44abf22641d01f7",
  measurementId: "G-K17YJLGJXZ"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
