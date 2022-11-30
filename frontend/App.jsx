import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import CreatePost from "./src/pages/CreatePost";

import { AuthContextProvider } from "./context/AuthContext";
import Account from "./src/pages/Account";
import Home from "./src/pages/Home";
import SignIn from "./src/pages/SignIn";
import Protected from "./context/Protected";


import "./src/App.css";

//https://www.youtube.com/results?search_query=firebase+authentication+react

export default function App() {
  return (
    <div>
      
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}