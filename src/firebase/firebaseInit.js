import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAnYkViQcojNlSsy1dtX6_p6pmOu-PVv-o",
  authDomain: "bill-it-b69ae.firebaseapp.com",
  projectId: "bill-it-b69ae",
  storageBucket: "bill-it-b69ae.appspot.com",
  messagingSenderId: "1032666742570",
  appId: "1:1032666742570:web:254fde6fa90a882983a853"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();