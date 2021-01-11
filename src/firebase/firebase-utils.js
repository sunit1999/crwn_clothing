import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_GCs9yLvQA6m1rBwm7NB7q_R-kDT_CvQ",
    authDomain: "e-commerce-db-34f44.firebaseapp.com",
    projectId: "e-commerce-db-34f44",
    storageBucket: "e-commerce-db-34f44.appspot.com",
    messagingSenderId: "898120688628",
    appId: "1:898120688628:web:074c0c9de005bc33394fa1",
    measurementId: "G-3C2MVWB89Q"
};

// userAuth --> an object created by firebase if user sign in/ new user created eith email and password
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;  // if user is not logged in

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
   
    // if user(i.e. userAuth) does not exist in database, then create one
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(err) {
            console.log('error creating user', err.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;