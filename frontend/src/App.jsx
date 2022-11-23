import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import { AuthContextProvider } from "../../backend/context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Protected from "../../backend/context/Protected";

import "./App.css";

//https://www.youtube.com/results?search_query=firebase+authentication+react

export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />

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
