import { useState, useEffect } from "react";

import "./App.css";

import { app, db } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
/**
 *
 * users:{
 *  user1:{
 *  posts:{
 *  post1:{
 *   Date:
 *   Location:
 *   Etc
 * }
 *  post2:{}
 * }
 *  profile:{
 *  name: Aidan
 *  age: 18
 * }
 *  frinds:{}
 *  }
 *  user2:{}
 * }
 *
 */
async function write() {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      first: "mr",
      last: "guy",
      born: 18999999,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function App() {
  //const db = getFirestore();

  // const [count, setCount] = useState(0);
  // const [users, setUsers] = useState([]);

  // const userRef = collection(db, "posts");

  // useEffect(async () => {
  //   // const querySnapshot = await getDocs(collection(db, "posts"));
  //   // querySnapshot.forEach((doc) => {
  //   //   console.log(`${doc.id} => ${doc.data()}`);
  //   // });
  // }, []);

  return (
    <div className="App">
      <h1>My App</h1>
      {
        // users.map((user) => {
        //   return (
        //     <div>
        //       {" "}
        //       <h1>Name: {user.Location}</h1>
        //       <h1>Age: {user.Name}</h1>
        //     </div>
        //   );
        // })
      }
      <button
        onClick={() => {
          write();
        }}
      >
        hello
      </button>
    </div>
  );
}

export default App;
