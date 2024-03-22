import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import "./App.css";

const db = getDatabase(app);
function App() {
  const putData = () => {
    set(ref(db, "users/Ankit"), {
      username: "Ankit",
      email: "ankitdeveloper@1gamil.com",
      age: 17,
      profession: "developer",
    });
  };
  return (
    <>
      <h1>Firebase app</h1>
      <button onClick={putData}>Put Data</button>
    </>
  );
}

export default App;
