import * as firebase from "firebase";
import 'firebase/storage'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyBJcpUlTEVxovC_KpWnhZHCY2B3lFWGs4w",
    authDomain: "clickbaitdb-6b119.firebaseapp.com",
    databaseURL: "https://clickbaitdb-6b119.firebaseio.com",
    projectId: "clickbaitdb-6b119",
    storageBucket: "clickbaitdb-6b119.appspot.com",
    messagingSenderId: "151810253280"
};

// var config = {
//     apiKey: "AIzaSyCpxPN98c6fDBSgXmoavH3JfP1eu3FAQaA",
//     authDomain: "test-af9f9.firebaseapp.com",
//     databaseURL: "https://test-af9f9.firebaseio.com",
//     projectId: "test-af9f9",
//     storageBucket: "test-af9f9.appspot.com",
//     messagingSenderId: "988735621315"
// };

let app =firebase.initializeApp(config);

const storage = firebase.storage();
const database = firebase.database();


console.log('set',firebase.database());

export {
    storage, firebase as default
}

firebase.auth().createUserWithEmailAndPassword('irion123@wp.pl', 'lolo123').then((x)=> console.log(x))

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
};