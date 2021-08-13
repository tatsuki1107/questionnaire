import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyATStpjaj9SvQvN6hfG3oPFjoxnvYABdmo",
    authDomain: "questionnaire-c7155.firebaseapp.com",
    projectId: "questionnaire-c7155",
    storageBucket: "questionnaire-c7155.appspot.com",
    messagingSenderId: "825848563104",
    appId: "1:825848563104:web:f19ed9bfdefcebc9e250c5",
    measurementId: "G-X3XBEP44DK"
}

// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase