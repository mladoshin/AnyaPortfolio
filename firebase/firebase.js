import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import "firebase/functions"
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBIfs3fos21oMJxS01wyzW52XIX96sxSPE",
    authDomain: "anyaprofile-602c2.firebaseapp.com",
    projectId: "anyaprofile-602c2",
    storageBucket: "anyaprofile-602c2.appspot.com",
    messagingSenderId: "1029546689669",
    appId: "1:1029546689669:web:71e82154a76093e7c7d5ec"
};

class Firebase {
    constructor() {
        !firebase.apps.length && firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth()
        this.storage = firebase.storage()
        this.db = firebase.database()
        this.fireDB = firebase.firestore()
        this.functions = firebase.functions();
    }

    //function for registering a new user
    async register(name, surname, email, password) {

        await this.auth.createUserWithEmailAndPassword(email, password)
            .then(function () {
                const user = firebase.auth().currentUser;
                //user.sendEmailVerification();
            })

        //update user's auth profile
        return this.auth.currentUser.updateProfile({
            displayName: name + " " + surname,
            userEmail: email
        })
    }

    //function for logging the user in
    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    //function to log the user out
    logout() {
        return this.auth.signOut()
    }
}

export default new Firebase();