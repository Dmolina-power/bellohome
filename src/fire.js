import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC-CQ652LuYrhdQ6XOEM87ACKz4CyxOye8",
  authDomain: "bellohome-and-landscaping.firebaseapp.com",
  databaseURL: "https://bellohome-and-landscaping.firebaseio.com",
  projectId: "bellohome-and-landscaping",
  storageBucket: "bellohome-and-landscaping.appspot.com",
  messagingSenderId: "52384851854",
  appId: "1:52384851854:web:56f4126115d2c0417ee6df",
  measurementId: "G-2GRPPQGY5P"
};
//Initialize firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
if (!user) return;

const userRef = firestore.doc(`users/${user.uid}`);
const snapshot = await userRef.get();

if (!snapshot.exists) {
 const { email, displayName, photoURL } = user;
 try {
   await userRef.set({
     displayName,
     email,
     photoURL,
     ...additionalData
   });
 } catch (error) {
   console.error("Error creating user document", error);
 }
}
return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
if (!uid) return null;
try {
 const userDocument = await firestore.doc(`users/${uid}`).get();

 return {
   uid,
   ...userDocument.data()
 };
} catch (error) {
 console.error("Error fetching user", error);
}
};