import firebase from "firebase";
import 'firebase/storage'
import 'firebase/database'

import '@firebase/firestore'

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
const database = firebase.database();

export {
    storage, firebase as default
}

const sectionModel = (id, title, description, picture_path, timestamp) => ({
    id: id,
    title: title,
    description: description,
    picture_path: picture_path,
    like:0,
    dislike:0,
    timestamp: timestamp
});



export const addSection = (title, description, picture_path) => {
    let key = database.ref('/').push().key;
    let model = sectionModel(key, title, description, picture_path, firebase.database.ServerValue.TIMESTAMP);
    return database.ref('/'+ key).set(model)
}


//cloud platform

// const admin = require('firebase-admin');
//
// admin.initializeApp({
//     credential: admin.credential.applicationDefault()
// });
//
// export var db = admin.firestore();