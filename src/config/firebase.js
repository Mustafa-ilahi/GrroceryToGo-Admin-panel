import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOaKRYoD2oqzElPVehFneH3CXE0y3Jml4",
  authDomain: "groceriestogo-2cb24.firebaseapp.com",
  projectId: "groceriestogo-2cb24",
  storageBucket: "groceriestogo-2cb24.appspot.com",
  messagingSenderId: "974579173315",
  appId: "1:974579173315:web:e6a6d1e0d907baa4ce5f76",
  measurementId: "G-Z89Q7VXQTN",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const signup = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
  // .then((userCredential) => {
  //   // Signed in
  //   var user = userCredential.user;
  //   // ...

  //   console.log("user registered successfully", user.uid);
  //   db.collection("Admin").doc(user.uid).set({
  //     email,
  //     userName,
  //   });
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ..
  //   console.log(errorMessage);
  // });
};

const signin = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

const signout = () => {
  return firebase.auth().signOut();
};

export { signup, signin, signout, db, storage };
