import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          TripPals
        </div>      
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-items"><a className="nav-items" href="#"><span class="glyphicon glyphicon-user"></span>Hi, Name</a></li>
          <li className="nav-items"><a className="nav-items" href="#"><span class="glyphicon glyphicon-log-in"></span>LOG OUT</a></li>
        </ul>
      </div>
    </nav>
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
