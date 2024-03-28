"use client";

import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import app from "@/lib/firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// import Share from '/assets/share.mp4';
// import Logo from '/assets/logowhite.png'

export default function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get auth instance
    const auth = getAuth(app);
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe(); // Clean up the listener when the component unmounts
  }, []);
  async function signInWithGoogle() {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const user = await signInWithPopup(auth, provider);
      console.log("User: ", JSON.stringify(user));
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          className="w-full h-full object-cover"
          src="/assets/share.mp4"
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay">
          <div className="p-5">
            <img src="/assets/logowhite.png" width="130px" alt="Logo" />
          </div>
          <div className="shadow-2xl">
            <button
              type="button"
              onClick={signInWithGoogle}
              className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
            >
              <FcGoogle className="mmr-4" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
