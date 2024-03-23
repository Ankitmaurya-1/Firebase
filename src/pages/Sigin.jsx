import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const siginUser = () => {
    signInWithEmailAndPassword(auth, email, password).then((value) =>
      alert("your are succesfully singing").catch((error) => console.log(error))
    );
  };

  return (
    <div>
      <h1>Singin page</h1>
      <label>Enter your email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="enter your emial"
      />

      <label>Enter your password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="enter your emial"
      />

      <button onClick={siginUser}> Signin me</button>
    </div>
  );
}

export default SigninPage;
