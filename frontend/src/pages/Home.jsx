import { useState, useEffect } from "react";

import "../App.css";

import { auth, db } from "../firebaseConfig";
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

/**
 * Render user1's posts
 * Create a New Post
 * Delete a Post
 * Update a Post
 *
 */

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
const PROVIDER_ID =
  "279328662755-2eo7on38uql0ei0q93laskrs2k23cn34.apps.googleusercontent.com";

function Home() {
  //Unused
  async function write(year) {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        born: year,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  //Unused
  //This sets the content of the LA in collection posts to the following, it either creates or overwrites
  async function overWrite() {
    await setDoc(doc(db, "posts", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA 2",
    });
    console.log("overwrite called");
  }

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
      <Link to={"/signin"}>
        <button>hi</button>
      </Link>

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
