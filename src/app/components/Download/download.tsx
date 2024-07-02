import React from "react";
import Navbar from "../Navbar";

export default function DownLoad() {
  return (
    <div
      className="bg-gray-900 text-white min-h-screen flex flex-col justify-between bg-no-repeat"
      style={{
        backgroundImage: "url('/DownloadPage.svg')",
        backgroundPosition: "75% 66%",
        backgroundSize: "28%",
      }}
    >
      <Navbar logoColor="white" textColor="white" />
      <main className="flex-grow flex items-center">
        <div className="mx-4 sm:ml-10 md:ml-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4">Download the APK now!</h1>
          <div className="flex flex-col items-center space-y-4">
            <button className="bg-white text-black px-4 py-2 sm:px-6 sm:py-2 rounded-full mb-4 hover:bg-green-200">
              Download
            </button>
            <p className="text-gray-400 text-sm sm:text-base">Version: 1.0.0.1</p>
            <p className="text-gray-400 text-sm sm:text-base">For IOS and ANDROID</p>
          </div>
        </div>
      </main>
      <footer className="flex justify-center mb-8">
        <p className="text-gray-400 text-xs sm:text-sm md:text-base">Made with ♥ by ACM-VIT</p>
      </footer>
    </div>
  );
}
