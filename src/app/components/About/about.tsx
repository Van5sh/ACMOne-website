"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../Navbar";

const images = [
  { src: "/LoginPage.svg", text: "Login to the APP!" },
  { src: "/Announcements.svg", text: "Stay updated about club activities" },
  { src: "/Events.svg", text: "Stay updated about club events" },
  { src: "/Profile.svg", text: "Access your Profile" },
  { src: "/Meetings.svg", text: "Join meetings and find moments" },
  { src: "/Resources.svg", text: "Find resources for projects" },
  { src: "/MyTasks.svg", text: "Be aware of your Tasks" },
  { src: "/Odns.svg", text: "Apply your OD's and night slips" },
];

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col bg-no-repeat"
      style={{
        backgroundImage:
          "url('/aboutleft.svg'), url('/aboutdown.svg')",
        backgroundPosition:
          "left 85%, bottom right",
        backgroundSize: "15%, 45%",
      }}
    >
      <Navbar logoColor="white" textColor="white" />

      <main className="flex-grow flex items-center justify-center relative">
        <button
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-900"
          }`}
          onClick={prevImage}
          disabled={currentIndex === 0}
        >
          ❮
        </button>
        <div className="relative w-full max-w-screen-xl overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex items-center justify-center"
                style={{ minWidth: "100%" }}
              >
                <div className="flex-shrink-0">
                  <Image
                    src={image.src}
                    alt={`Slide ${index}`}
                    width={200}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <p className="text-white text-lg md:text-xl ml-4 md:ml-8">{image.text}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${
            currentIndex === images.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-900"
          }`}
          onClick={nextImage}
          disabled={currentIndex === images.length - 1}
        >
          ❯
        </button>
      </main>
    </div>
  );
};

export default About;
