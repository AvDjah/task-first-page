import React from "react";
import MainLogo from "../Logo/VectorMainLogo.svg";

export default function Header() {
  return (
    <div
      className="flex flex-row justify-between w-2/3 mx-auto text-white"
      style={{ fontFamily: "Poppins" }}
    >
      <div>
        <img className="p-5" src={MainLogo} alt="not found"></img>
      </div>
      <div>
        Already a user?{" "}
        <button
          className="text-white text-sm bg-blue-500 m-2 py-2 px-5"
          style={{ fontWeight: "bold" }}
        >
          Log In
        </button>
      </div>
    </div>
  );
}
