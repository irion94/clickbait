import firebase from "firebase";
import 'firebase/storage'
import 'firebase/database'
// Initialize Firebase
const config = {
    apiKey: "AIzaSyBJcpUlTEVxovC_KpWnhZHCY2B3lFWGs4w",
    authDomain: "clickbaitdb-6b119.firebaseapp.com",
    databaseURL: "https://clickbaitdb-6b119.firebaseio.com",
    projectId: "clickbaitdb-6b119",
    storageBucket: "clickbaitdb-6b119.appspot.com",
    messagingSenderId: "151810253280"
};
firebase.initializeApp(config);

const storage = firebase.storage();
const database = firebase.database;

export {
    storage,database, firebase as default
}