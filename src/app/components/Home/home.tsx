import React from "react";
import Navbar from "../Navbar";

const Home = () => {
  return (
      
      <div
      className="flex flex-col min-h-screen bg-white bg-fixed bg-no-repeat"
      style={{
          backgroundImage:
          "url('/PinkSpreadPurpleStripes.svg'), url('/GreenDotsPurpleCircles.svg'), url('/TeamBrainstorming.svg'), url('/LogoB.svg')",
        backgroundPosition:
        "top 130% right 112%, left 110% top 40%, center top 13%, center top 70%",
        backgroundSize: "25%, 21%, 22%, 22%",
    }}
    >
      <Navbar textColor="black" logoColor="black" />
      <div className="flex flex-col items-center mt-20 md:mt-96 font-serif text-center flex-1 justify-center">
        <h1 className="text-black text-3xl md:text-4xl">ACM IN ONE</h1>
        <button className="mt-4 md:px-6 md:py-2 bg-black text-white text-lg md:text-xl rounded-lg">
          <a href="/download" className="px-8 py-8">
            Download
          </a>  
        </button>
      </div>
    </div>
  );
};

export default Home ;
