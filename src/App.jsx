import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "./firebase";
import "./App.css";
import Signup from "./pages/Signup";
import SigninPage from "./pages/Sigin";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // yes you are logged in
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <>
        <h1>Firebase app|| Auth service</h1>
        <Signup />
        <SigninPage />
      </>
    );
  } else {
    return (
      <>
        <h1>Hello {user.email}</h1>
        <button onClick={() => signOut(auth)}>Logout</button>
      </>
    );
  }
}

export default App;
