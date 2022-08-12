import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAa3JcFJcvWAf3I2nyrOqDc1Dks-jqZ-fQ",
    authDomain: "netflix-clone-iv2022.firebaseapp.com",
    projectId: "netflix-clone-iv2022",
    storageBucket: "netflix-clone-iv2022.appspot.com",
    messagingSenderId: "516082721739",
    appId: "1:516082721739:web:b1d7fee7954ef15d3a4c4e"
};

const firebase = Firebase.initializeApp(config);

export { firebase };