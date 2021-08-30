import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import "firebase/functions"
require("firebase/firestore");
import { updatePassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBIfs3fos21oMJxS01wyzW52XIX96sxSPE",
    authDomain: "anyaprofile-602c2.firebaseapp.com",
    projectId: "anyaprofile-602c2",
    databaseURL: "https://anyaprofile-602c2-default-rtdb.europe-west1.firebasedatabase.app",
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

    createNewGig(title, order){
        this.fireDB.collection("services").add({
            title: title, 
            order: order
        }).then(()=>console.log("Successfully added new gig!"))
        .catch(console.log)
    }

    updateGig(updates, gigId){
        if(updates){
            //update gig
            this.fireDB.collection("services").doc(gigId).update(updates)
        }
    }

    deleteGig(gigId){
        let consent = window.confirm("Вы точно хотите удалить услугу?")
        if(consent){
            this.fireDB.collection("services").doc(gigId).delete().then(()=>console.log("Successfully deleted a gig!")).catch(console.log)
        }
    }

    testStorage(){
        this.db.ref("translations/").set({
            "Войти": "Login"
        })
    }

    removeTranslation(stringRU){
        if(stringRU===""){
            return
        }

        this.db.ref("translations/"+stringRU).remove()
    }

    addNewTranslation(stringRU, stringEN){
        if (stringRU==="" || stringEN===""){
            return
        }

        this.db.ref("translations/").update({
            [stringRU]: stringEN
        })
    }

    getTranslations(setTranslations, translationsStatic){
        this.db.ref("translations/").get().then(snapshot => {
            if(snapshot.exists){
                console.log(snapshot.val())
                setTranslations({...translationsStatic, ...snapshot.val()})
            }
        })
    }

    adminServicesListener(setServicesUTD){
        return this.fireDB.collection("services").orderBy("order", "asc").onSnapshot(snapshot => {
            let res = []
            snapshot.forEach(doc => {
                res.push({...doc.data(), id: doc.id})
            })
            setServicesUTD(res)
        })
    }

    updateAdminPassword(newPassword){
        this.auth.currentUser.updatePassword(newPassword).then(()=>{
            alert("Success!")
        }).catch(err => {
            alert(err?.message)
        })
    }

    updateGigInfo(gigId, info){
        let updates = {info: info}
        if(info!==""){
            this.updateGig(updates, gigId)
        }
        
    }

    sendRequest(name, mobileNum, email, question){
        const request = {
            name: name, 
            email: email, 
            mobileNum: mobileNum,
            question: question,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }

        this.doesRequestExist(mobileNum).then(exist => {
            if(exist){
                alert("You have already submitted a request")
            }else{
                this.fireDB.collection("requests").add(request)
            }
        })
        
    }

    //checks if the user already sent a request
    doesRequestExist(mobileNum){
        return new Promise((resolve, reject) => {
            this.fireDB.collection("requests").where("mobileNum", "==", mobileNum).get().then(snap => {
                if (snap.empty){
                    resolve(false)
                }else{
                    resolve(true)
                }
            }).catch((err)=>reject(err))
        })
    }
}

export default new Firebase();