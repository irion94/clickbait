import * as firebase from "firebase";
import 'firebase/storage'
import 'firebase/database'
import ReactGA from "react-ga";

ReactGA.initialize('UA-132483674-1');
export const initializeReactGA = () => {
    ReactGA.pageview(window.location.pathname);
};


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
};