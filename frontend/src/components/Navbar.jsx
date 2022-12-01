import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink to="/" className="navbar-header">
            TripPals
          </NavLink>
        </div>
        <ul className="nav">
          <li className="nav-items">Hi, {user?.displayName}</li>
          <li className="nav-items">
            <Link to="/feed" style={{ textDecoration: "none", color: "white" }}>
              Feed
            </Link>
          </li>
          <li className="nav-items">
            <Link
              to="/account"
              style={{ textDecoration: "none", color: "white" }}
            >
              Account
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/signin">
              <button id="nav-btn-logout" onClick={handleSignOut}>
                Log Out
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    // <div>
    //   <h1 className="text-center text-2xl font-bold">
    //     TripPals
    //   </h1>
    //   {user?.displayName ? (
    //     <button onClick={handleSignOut}>LOG OUT</button>
    //   ) : (
    //     <Link to="/signin">Sign in</Link>
    //   )}
    // </div>
  );
};

export default Navbar;
