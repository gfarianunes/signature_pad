// Firebase Config
import * as functions from "firebase-functions";
import * as firebase from "firebase-admin";

// Firebase Config
export const createUserDoc = functions.auth.user().onCreate(event => {
    const firebaseUser = event;

    const user = {
        name: firebaseUser.displayName || "No Name",
        email: firebaseUser.email || "No Email",
        phoneNumber: firebaseUser.phoneNumber || "No Phone"
    };

// Firebase Firestore save data in db with all promise (every const user has to work)
    return Promise.all([
        firebase.firestore().collection("users").doc(firebaseUser.uid).set(user)
    ]);
});