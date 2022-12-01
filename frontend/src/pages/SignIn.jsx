import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { handleSignIn } from "../functions";

const SignIn = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
      handleSignIn(user);
    }
  }, [user]);

  return (
    <div class="sign-up-container">
      {/* <h1 className="text-center text-3xl font-bold py-8">Sign in</h1> */}
      <h1 class="sign-up-title">Welcome back! Sign into your account!</h1>
      <form>
        <input
          class="sign-up-input"
          type="text"
          placeholder="University email"
        />
        <input
          class="sign-up-input"
          type="password"
          placeholder="Password"
        ></input>
      </form>
      <div class="sign-up-btn-wrapper">
        <button class="sign-up-continue-btn">LOG IN</button>
        <Link to="/signup">
          <button class="sign-up-done-btn">I don't have an account</button>
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default SignIn;
