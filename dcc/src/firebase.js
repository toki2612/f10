import firebase from 'firebase'
const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBJsGg9CQAz4TjicRWe2hG1uF3paowjYz8",
  authDomain: "f10-dcc.firebaseapp.com",
  databaseURL: "https://f10-dcc.firebaseio.com",
  storageBucket: "f10-dcc.appspot.com",
  messagingSenderId: "123123123123"
};
firebase.initializeApp(config);
const fire = firebase.database()
export default fire;