import { useState } from "react";

import "./App.css";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAcnojO71cJTlFvyEWM6ps3bSfbA331yuc",
  authDomain: "trip-pals.firebaseapp.com",
  projectId: "trip-pals",
  storageBucket: "trip-pals.appspot.com",
  messagingSenderId: "279328662755",
  appId: "1:279328662755:web:726e9760241e7909fe51d6",
  measurementId: "G-D7060XNCP1",
};
const app = initializeApp(firebaseConfig);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>My App</h1>
    </div>
  );
}

export default App;
