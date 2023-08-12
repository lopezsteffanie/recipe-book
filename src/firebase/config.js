import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyALHobHHFN190wHffBQ8l0c25nPUTmlFIo",
    authDomain: "recipe-book-d5d29.firebaseapp.com",
    projectId: "recipe-book-d5d29",
    storageBucket: "recipe-book-d5d29.appspot.com",
    messagingSenderId: "366871410585",
    appId: "1:366871410585:web:6ac536c9d36a2e8c1fc508"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };