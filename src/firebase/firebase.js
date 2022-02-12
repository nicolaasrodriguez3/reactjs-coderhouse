import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
//PONER ACA LA INFO DE SU APP
{
    apiKey: "AIzaSyCpbciAFvbrFYCcsh_FJGlwn5Hr4Q4D7Nc",
    authDomain: "desafio-12.firebaseapp.com",
    projectId: "desafio-12",
    storageBucket: "desafio-12.appspot.com",
    messagingSenderId: "321190151490",
    appId: "1:321190151490:web:94bc27768585c3d68234db"
}
);
export function getFirebase(){
return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}