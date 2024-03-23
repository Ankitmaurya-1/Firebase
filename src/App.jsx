import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebase";
import "./App.css";
import Signup from "./pages/Signup";
import SigninPage from "./pages/Sigin";

const auth = getAuth(app);

function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "ankitdev@gmail.com",
      "ankit12345"
    ).then((value) => console.log(value));
  };
  return (
    <>
      <h1>Firebase app|| Auth service</h1>
      <Signup />
      <SigninPage />
    </>
  );
}

export default App;
