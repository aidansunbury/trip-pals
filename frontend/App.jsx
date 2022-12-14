import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import CreatePost from "./src/pages/CreatePost";
import PostFeed from "./src/pages/PostFeed";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./src/context/AuthContext";
import Account from "./src/pages/Account";
import Home from "./src/pages/Home";
import SignIn from "./src/pages/SignIn";
import Protected from "./src/context/Protected";
import SignUp from "./src/pages/SignUp";

import "./src/App.css";

//https://www.youtube.com/results?search_query=firebase+authentication+react

export default function App() {
  return (
    <div id="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/createpost" element={<Protected><CreatePost /> </Protected>} />
          <Route path="/feed" element={<PostFeed />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
    </div>
  );
}
