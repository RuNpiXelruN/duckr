import firebase from 'firebase'

  // Initialize Firebase
const config = {
    apiKey: "AIzaSyCxahJIxre1j02iMUepDJoIYeTVS6DRm_k",
    authDomain: "justin-test-project-75b43.firebaseapp.com",
    databaseURL: "https://justin-test-project-75b43.firebaseio.com",
    storageBucket: "justin-test-project-75b43.appspot.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth 
