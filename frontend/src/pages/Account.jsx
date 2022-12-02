import React from "react";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { createPost } from "../functions";
import { getMyPosts, getAllPosts, getProfile } from "../functions";
import { Link } from "react-router-dom";

const Account = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState("");
  //const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let data = getProfile(user?.uid);
    data.then((value) => setProfileData(value));
    console.log("hi");
    console.log(profileData);
  }, []);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[300px] m-auto">
      <h1 className="text-center text-2xl font-bold pt-12">Account</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "left",
          marginLeft: "40px",
          flexDirection: "column",
        }}
      >
        <h2 style={{ textAlign: "left", marginLeft: "30px" }}>Profile</h2>
        <p>Welcome, {user?.displayName}</p>
        <p>Email: {user?.email}</p>
        <p>Phone: {profileData.phone}</p>
        {/* <p>{user?.uid}</p> */}
        <p>Age: {profileData.age}</p>
        <p>Gender: {profileData.gender}</p>
        <p>Bio: {profileData.bio}</p>
      </div>
      <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
        Logout
      </button>
    </div>
  );
};

export default Account;
