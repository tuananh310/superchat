import React from 'react'
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCMIs2qZr0U12YsCAYMc3ivoL-BLg8FdqY",
  authDomain: "superchat-fa547.firebaseapp.com",
  databaseURL: "https://superchat-fa547-default-rtdb.firebaseio.com",
  projectId: "superchat-fa547",
  storageBucket: "superchat-fa547.appspot.com",
  messagingSenderId: "53801818479",
  appId: "1:53801818479:web:80a072396d3969dec0f09a",
  measurementId: "G-1GJHENPS7T"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        {/* {user ? <ChatRoom/> : <SignIn/>} */}
        {<SignIn/>}
      </header>
    </div>
  );
}

function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut(){
  auth.currentUser && (
    <button onClick = {() => auth.signOut()}>Sign out</button>
  )
}

// function ChatRoom(){

// }

export default App;
