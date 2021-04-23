import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC2ouC97CV5e9MD5skeg3rWt2FJ4MBMsnU",
    authDomain: "vue-auth-c019f.firebaseapp.com",
    databaseURL: "https://vue-auth-c019f-default-rtdb.firebaseio.com",
    projectId: "vue-auth-c019f",
    storageBucket: "vue-auth-c019f.appspot.com",
    messagingSenderId: "228070067666",
    appId: "1:228070067666:web:07270c4e8bd7e95113cc0b"
};

export const firebaseRequest = firebase.initializeApp(firebaseConfig);