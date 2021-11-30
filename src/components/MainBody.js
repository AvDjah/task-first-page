import React from "react";
import RightImage from "../Logo/Right.png";

const LeftSide = () => {
  return (
    <div
      className="flex flex-col bg-white p-10 text-lg rounded-l-xl w-1/3"
      style={{ fontFamily: "Poppins", fontWeight: "bold" }}
    >
      <span className="text-center text-gray-600 text-xl">
        Create An Account
      </span>{" "}
      <input></input>
      <input
        className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                    my-4
                  "
        placeholder="Enter Mobile"
        type="number"
      ></input>
      <input
        className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black my-4
                  "
        placeholder="Enter Email"
        type="email"
      ></input>
      <input
        className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black my-4
                  "
        placeholder="Enter Password"
        type="password"
      ></input>
      <input
        className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black my-4
                  "
        placeholder="Confirm Password"
        type="password"
      ></input>
      <div>
        <input name="cb" type="checkbox"></input>
        <label className="text-gray-500 text-xs">
          {" "}
          I hereby confirm that i am above 18 years old.
        </label>
      </div>
      <button className="text-white bg-blue-500 my-4 rounded-lg text-sm py-2 w-1/3">
        Verify OTP
      </button>
      <span className="text-xs">
        By Creating this account, you agree to our{" "}
        <a href="" className="text-blue-600">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="" className="text-blue-600">
          Terms of Use.
        </a>
      </span>
    </div>
  );
};

const RightSide = () => {
  return (
    <div className="bg-gray-100 rounded-r-xl flex flex-col justify-evenly">
      <img src={RightImage} alt="Not Found" className="mx-auto h-4/5"></img>
    </div>
  );
};

export default function Body() {
  return (
    <div className="ring-red-50 flex flow-row w-2/3 mx-auto m-10 justify-center">
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </div>
  );
}
