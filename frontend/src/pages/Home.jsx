import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";

import "../App.css";

import { auth, db } from "../../firebaseConfig";
import {
  doc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

import { Link } from "react-router-dom";

const PROVIDER_ID =
  "279328662755-2eo7on38uql0ei0q93laskrs2k23cn34.apps.googleusercontent.com";

function Home() {
  //Used
  //This is useful for creating something like a new post
  async function newDoc() {
    // Add a new document with a generated id.
    const docRef = await addDoc(
      collection(db, "/Users/UlY7Z2oUGbxRDNztYEWE/Posts"),
      {
        Destination: "city4",
        Origin: "city2",
      }
    );
    readAll();
    //console.log("Document written with ID: ", docRef.id);
  }

  //Used
  //Depetes all the docs, add a where to be more specific
  //https://firebase.google.com/docs/firestore/query-data/get-data
  async function deleteCity() {
    const q = query(collection(db, "/Users/UlY7Z2oUGbxRDNztYEWE/Posts"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      await deleteDoc(
        doc(db, "/Users/UlY7Z2oUGbxRDNztYEWE/Posts", document.id)
      );
    });
    readAll();
  }

  //Unused
  //Haven't yet created try catch to hadle case of document not there, but works otherwise
  async function read(setData) {
    const docRef = doc(db, "posts", "LA");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    setData(docSnap.data());
  }

  //Used
  //setData to be all of the posts
  async function readAll() {
    const q = query(collection(db, "/Users/UlY7Z2oUGbxRDNztYEWE/Posts"));
    const querySnapshot = await getDocs(q);
    setData([]);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      setData((data) => [doc.data(), ...data]);
      //console.log(doc.data().Origin);
    });
    console.log("done");
    console.log(data);
  }

  const [data, setData] = useState([]);
  const { logOut, user } = UserAuth();

  return (
    <div className="App">
      <h1>My App</h1>
      <p>{user?.uid}</p>
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
          newDoc();
        }}
      >
        Post
      </button>
      <button
        onClick={() => {
          deleteCity();
        }}
      >
        Delete
      </button>

      {data.map((posts) => {
        return (
          <p>
            Origin: {posts.Origin}, Destination: {posts.Destination}
          </p>
        );
      })}
    </div>
  );
}

export default Home;
