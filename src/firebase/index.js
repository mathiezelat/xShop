import firebase from 'firebase/app';
import 'firebase/firestore';

const App = firebase.initializeApp({
        apiKey: "AIzaSyCwkKqmc9ibJZRa6JZOtUbRSbF3Gj7wWy8",
        authDomain: "app-xshop.firebaseapp.com",
        projectId: "app-xshop",
        storageBucket: "app-xshop.appspot.com",
        messagingSenderId: "978960934180",
        appId: "1:978960934180:web:94d5f28c8e96b661c27fb1"
})

export const getFirebase = () =>{
    return App;
}
export const getFirestore = () =>{
    return firebase.firestore(App);
}