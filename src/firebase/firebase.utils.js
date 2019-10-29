import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

  apiKey: "AIzaSyAuhorYgUgfZgru7lfZVvk_z5pFEa-2zbk",
  authDomain: "crwn-db-383cf.firebaseapp.com",
  databaseURL: "https://crwn-db-383cf.firebaseio.com",
  projectId: "crwn-db-383cf",
  storageBucket: "crwn-db-383cf.appspot.com",
  messagingSenderId: "288328768755",
  appId: "1:288328768755:web:d6d5e79329da98c66a2b86",
  measurementId: "G-WBYV0YYS3Q"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
