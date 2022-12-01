import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import "../App.css";

import Freya from "../images/freya.png";
import Jenelle from "../images/jenelle.png";
import Karla from "../images/karla.png";

import { auth, db } from "../firebaseConfig";
import PlaneImage from "../images/plane.png";

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
    <div className="home-container">
      <div id="home-header">
        <div>
          <h1 class="home-header-txt">College Travel</h1>
          <h1 class="home-header-txt">
            Made <span id="special-red">Easier.</span>
          </h1>
          <div>
            <Link to="/signup">
              <button id="home-get-btn" class="home-header-btn">
                Get Started
              </button>
            </Link>
            <Link to="/signin">
              <button id="home-login-btn" class="home-header-btn">
                Log In
              </button>
            </Link>
          </div>
        </div>
        <img id="plane-img" src={PlaneImage} alt="plane emblem" />
      </div>
      <h1 id="home-desc-txt">
        Don't want to be a lonely when going home? Use TripPals to find some
        rando to go with you!
      </h1>
      <div id="review-container">
        <div class="home-review-container">
          <img class="reviewer-img" src={Freya} alt="freya" />
          <h1 class="review-title">Freya's Experience</h1>
          <h1 class="review-desc">
            “TripPals has helped <span class="red-bold">ease my anxiety</span>{" "}
            of flying home from college for the first time. Who would've thought
            that someone from my compsci class was going to be in the{" "}
            <span class="red-bold">same flight?”</span>
          </h1>
          <h1 class="reviewer-name">- Freya</h1>
        </div>

        <div class="home-review-container">
          <img class="reviewer-img" src={Jenelle} alt="jenelle" />
          <h1 class="review-title">Jenelle's Experience</h1>
          <h1 class="review-desc">
            “Excited to pack for our{" "}
            <span class="red-bold">next car trip together!</span> Thanks
            TripPals!!!”
          </h1>
          <h1 class="reviewer-name">- Jenelle</h1>
        </div>

        <div class="home-review-container">
          <img class="reviewer-img" src={Karla} alt="karla" />
          <h1 class="review-title">Karla's Experience</h1>
          <h1 class="review-desc">
            “Came looking for someone fly with and{" "}
            <span class="red-bold">found a best friend.</span> Glad to finally
            have someone else from Seattle!”
          </h1>
          <h1 class="reviewer-name">- Karla</h1>
        </div>
      </div>
      {/* <p>{user?.uid}</p> */}
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

      {/* <button
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
      })} */}
    </div>
  );
}

export default Home;
