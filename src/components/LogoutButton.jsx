"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <div>
      <button
        className="bg-red-400 px-2 py-1 rounded"
        onClick={() => signOut()}
      >
        logOut
      </button>
    </div>
  );
};

export default LogoutButton;
