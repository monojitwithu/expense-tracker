import  firebase from "firebase"


const config={

    apiKey: "AIzaSyB_k25ibK_kgUoU0ZYcdWXMvrK1i0lhNXA",
    authDomain: "expense-tracker-00.firebaseapp.com",
    projectId: "expense-tracker-00",
    storageBucket: "expense-tracker-00.appspot.com",
    messagingSenderId: "617782212146",
    appId: "1:617782212146:web:8cce5b63f3f1eff8d26e2b",
    measurementId: "G-S4X97GN5Z0"
}
const fire=firebase.initializeApp(config)

export default fire;