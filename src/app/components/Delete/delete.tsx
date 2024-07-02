import React from "react";
import Navbar from "../Navbar";

const Delete: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white bg-fixed">
    <Navbar textColor="black" logoColor="black" />
    <div
      className="flex-1 flex items-end justify-evenly bg-no-repeat"
      style={{
        backgroundImage:
          "url('/Group.svg'), url('/Ellipse1.svg'), url('/Group2.svg'), url('/Ellipse4.svg'), url('/Partnership.svg')",
        backgroundPosition:
          "bottom left, bottom left, top right, bottom right, center 5%",
        backgroundSize: "13%, 18%, 13%, 12%, 30%",
      }}
    >
      <form className="bg-white mx-4 sm:ml-5 sm:mb-11 pb-16 w-full max-w-lg">
        <div className="mb-2">
          <label
            htmlFor="email"
            className="font-bold text-[20px] sm:text-[24px] md:text-[34px] bg-grey text-lg text-gray-900 mb-2 flex w-full sm:w-[130px] h-[52px] flex-col justify-center flex-shrink-0"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block bg-slate-200 w-full sm:w-3/5 px-4 py-1 border rounded-2xl focus:ring focus:outline-none focus:ring-blue-300"
            placeholder="Enter email..."
            required
          />
        </div>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Enter the email address associated with the account you would like to delete. 
          We will process the delete request as soon as possible.
        </p>
        <button
          type="submit"
          className="w-half sm:w-half mt-5 py-1 px-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-700"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  );
};

export default Delete;