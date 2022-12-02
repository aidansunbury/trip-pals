import { db } from "./firebaseConfig";
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

import { UserAuth } from "./context/AuthContext";
import { async } from "@firebase/util";
//const { googleSignIn, user } = UserAuth();

let post_data = {
  origin: "place 1",
  destination: "place 2",
  medium: "car",
  arrivalDate: "12-31-2022",
  departureDate: "12-30-2022",
  description: "Description of trip",
};
let profile = {
  name: "John Doe",
  email: "jdberkeley99@gmail.com",
  phone: "3106997999",
  age: 23,
  gender: "Male",
  bio: "Stanford student who is less cool than the berkely students.",
};

export async function handleSignIn(user) {
  console.log("User has signed in with id: ", user.uid);
  //check if user already exists in users
  const q = query(collection(db, "/Users"));
  const querySnapshot = await getDocs(q);

  let exists = false;
  querySnapshot.forEach(async (document) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());

    if (document.id == user.uid) {
      exists = true;
    }
  });

  if (exists) {
    console.log("User already exists?: ", exists);
  } else {
    createUser(user, profile); //create a new user with given template
  }
}

export async function getMyPosts(user) {
  const q = query(collection(db, "/Users/" + user.uid + "/Posts"));
  const querySnapshot = await getDocs(q);
  let posts = [];
  querySnapshot.forEach(async (document) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());

    posts.push(document.data());
  });
  console.log(posts);

  return posts;
}

export async function getAllPosts() {
  const all = query(collection(db, "/Users"));
  const querySnapshot = await getDocs(all);
  let allPosts = [];
  querySnapshot.forEach(async (user) => {
    //console.log("id: " + user.id);
    const posts = query(collection(db, "/Users/" + user.id + "/Posts"));
    const postsSnapshot = await getDocs(posts);
    postsSnapshot.forEach(async (post) => {
      allPosts.push(post.data());
    });
  });

  //console.log(allPosts);
  return allPosts;
}

export async function getProfile(id) {
  const docRef = doc(db, "/Users/", id);

  const snapshot = await getDoc(docRef);
  return snapshot.data();

  // Below is a monument to bad programming practice

  // // const result = snapshot.data();
  // // return result;
  // if (snapshot.exists()) {
  //   console.log("Document data:", snapshot.data());
  //   let data = {
  //     age: snapshot.data().age,
  //     phone: snapshot.data().phone,
  //     bio: snapshot.data().bio,
  //     email: snapshot.data().email,
  //     gender: snapshot.data().gender,
  //     name: snapshot.data().name,
  //   };
  //   return snapshot.data().age;
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }
  // const q = query(collection(db, "/Users/"));
  // const querySnapshot = await getDocs(q);

  // querySnapshot.forEach(async (document) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   //console.log(doc.id, " => ", doc.data());
  //   //console.log(document.id);
  //   if (document.id == id) {
  //     console.log("yay");
  //     console.log(document.data().gender);
  //     return document.data();
  //   }
  // });
  // return "none";
}

export async function createUser(user, profile) {
  await setDoc(doc(db, "/Users", user.uid), profile); //Creates a document with data
  await addDoc(collection(db, "/Users/" + user.uid, "Posts")); //Creates a collection within that document titled Posts
  //await addDoc(collection(db, "/Users/" + user.uid, "Posts"),{name: "Aidan"}); This method creates it with an auto-id'd doc
  console.log("New user created with data: ", profile);
}

//This sets the content of the id document in a specific path to the data, it either creates or overwrites
export async function overWrite(path, id, data) {
  await setDoc(doc(db, path, id), data);
  //await setDoc(doc(db, path), data); no id passed should auto id
  console.log("overwrite called");
}
export async function createPost(
  user,
  data = { ...post_data, time_posted: new Date() }
) {
  //Create a doc with doc name Post 2
  // await setDoc(doc(db, "/Users/" + user.uid + "/Posts", "Post 2"), {
  //   Destination: "city4",
  //   Origin: "city2 a",
  // }); //Creates a document with data

  //Creates a doc with auto generated uid
  await addDoc(collection(db, "/Users/" + user.uid + "/Posts"), data);
  console.log("posted");
}

//deletes document with id at path
export async function deleteDocument(path, id) {
  await deleteDoc(doc(db, path, id));
}

export async function readDoc(path, id) {
  const docRef = doc(db, path, id);
}
