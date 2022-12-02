import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { post } from "../functions";
import { getMyPosts, getAllPosts } from "../functions";
import { Link } from "react-router-dom";
import ProfileImg from '../images/blankprofile.png'
import { useState } from "react";

const Account = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const [btnText, setBtnText] = useState("Display My Posts");

  return (
    <div id="account-container">
      <div id="profile-img-background">
        <img id="profile-img" src={ProfileImg} alt="Profile image"/>
      </div>
      <h1 id="account-header">{user?.displayName}</h1>
      <h1 id="email-txt">@{user?.email}</h1>
      <div id="account-btn-wrapper">
        <button id="account-display-post-btn" onClick={() => {btnText == "Display My Posts" ? setBtnText("Don't Display My Posts") : setBtnText("Display My Posts")}}>{btnText}</button>
        <Link to="/createpost"><button>Create a New Post</button></Link>
      </div>
    </div>
    // <div className="w-[300px] m-auto">
    //   <h1 className="text-center text-2xl font-bold pt-12">Account</h1>
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       flexDirection: "column",
    //     }}
    //   >
    //     <p>Welcome, {user?.displayName}</p>
    //     <p>{user?.email}</p>
    //     <p>{user?.uid}</p>
    //     <button
    //       onClick={() => {
    //         post(user);
    //         <Link to="/createpost">Post</Link>;
    //       }}
    //     ></button>
    //   </div>
    //   <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
    //     Logout
    //   </button>
    //   <button
    //     onClick={() => {
    //       getAllPosts();
    //     }}
    //   >
    //     test
    //   </button>
    // </div>
  );
};

export default Account;
