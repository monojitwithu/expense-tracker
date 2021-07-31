import  firebase from "firebase"


const config={

    apiKey: "AIzaSyAIAMsovG8isd0hVGW2MQhUVhXGYjSRFbk",
    authDomain: "expense-tracker-007.firebaseapp.com",
    projectId: "expense-tracker-007",
    storageBucket: "expense-tracker-007.appspot.com",
    messagingSenderId: "819677232440",
    appId: "1:819677232440:web:a15e72a66918579dd895cd",
    measurementId: "G-Z018K47CQG"
}
const fire=firebase.initializeApp(config)

export default fire;