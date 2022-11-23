import React from "react";
import { UserAuth } from "../../../backend/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { post } from "../../../backend/functions";

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

  return (
    <div className="w-[300px] m-auto">
      <h1 className="text-center text-2xl font-bold pt-12">Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
        <p>{user?.email}</p>
        <p>{user?.uid}</p>
        <button
          onClick={() => {
            post(user);
          }}
        >
          Post
        </button>

        <button>Delete</button>
        <button>Update</button>
      </div>
      <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
        Logout
      </button>
    </div>
  );
};

export default Account;
