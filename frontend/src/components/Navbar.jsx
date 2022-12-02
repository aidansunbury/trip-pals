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
        <>
          { user? <NavBarLoggedIn/> : <NavBarUser/>}
        </>
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

function NavBarUser() {
  return (  
    <ul className="nav">
      <li class="nav-items">
        <NavLink to="/signin" className="nav-items">Sign in</NavLink>
      </li>
    </ul>
  );
}

function NavBarLoggedIn() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (  

    <ul className="nav">
          <li className="nav-items">
            <NavLink to="/account" className="nav-items">Hi, {user?.displayName}</NavLink>
            </li>
          <li className="nav-items">
            <NavLink to="/feed" className="nav-items">
              Feed
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink
              to="/account"
              className="nav-items"
            >
              Account
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/signin" className="nav-items">
              <button id="nav-btn-logout" onClick={handleSignOut}>
                Log Out
              </button>
            </NavLink>
          </li>
    </ul>
  );
}


