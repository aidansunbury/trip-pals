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

// import { UserAuth } from "./context/AuthContext";
// const { googleSignIn, user } = UserAuth();
let post_data = {
  origin: "place 1",
  destination: "place 2",
  medium: "car",
  arrivalDate: "12-31-2022",
  departureDate: "12-30-2022",
  description: "Description of trip",
};
let profile = {
  name: "User Name",
  email: "email@gmail.com",
  phone: "9998887777",
  age: 100,
  gender: "Male",
  bio: "description of person",
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
export async function post(
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
