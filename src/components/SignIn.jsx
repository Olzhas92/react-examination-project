import React from "react";
import { GoogleButton } from "react-google-button";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const SignIn = () => {
  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <>
      <GoogleButton onClick={login}>Google Sign In</GoogleButton>
    </>
  );
};

export default SignIn;
