import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("sucess")
    );
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div>
      <h1>Signup page</h1>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="enter your email"
      />
      <label>password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="enter your password"
      />
      <button onClick={createUser}>SIGNUP </button>
      <br />
      <button onClick={signupWithGoogle}>Siging with google </button>
      <button>Signup With Github</button>
    </div>
  );
}

export default Signup;
