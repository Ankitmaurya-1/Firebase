import React from "react";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import "../src/App.css";
import { app } from "./firebase";
import {} from "firebase/firestore";

const firestore = getFirestore(app);

function App() {
  const writeData = async () => {
    const result = await addDoc(collection(firestore, "users"), {
      Name: "anupma",
      Age: 17,
      isMale: false,
    });

    console.log("Result:", result);
  };

  const getDocument = async () => {
    const ref = doc(firestore, "cities", "Ktzi21QeVMbqW81j95kg");
    const snap = await getDoc(ref);
    console.log(snap.data());
  };

  const getDocbyQuery = async () => {
    const collectionRef = collection(firestore, "users");
    const q = query(collectionRef, where("isMale", "==", true));
    const snapshot = await getDocs(q);
    snapshot.forEach((data) => console.log(data.data()));
  };

  return (
    <div>
      <h1>Firebase FireStore</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={getDocument}>Get Data</button>
      <button onClick={getDocbyQuery}>Get Data of Male</button>
    </div>
  );
}

export default App;
