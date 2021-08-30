import firebase from "firebase";

const firebaseconfig = {
  apiKey: "AIzaSyB05BH8L6EmpdF6VmSEH9RaRLgmajbm74E",
  authDomain: "todo-d7f38.firebaseapp.com",
  databaseURL: "https://todo-d7f38-default-rtdb.firebaseio.com",
  projectId: "todo-d7f38",
  storageBucket: "todo-d7f38.appspot.com",
  messagingSenderId: "346289505522",
  appId: "1:346289505522:web:e5c775535d9b5b6bd53c6b",
};

const firebaseApp = firebase.initializeApp(firebaseconfig);
export default firebaseApp;
