import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto py-16 text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-6 text-center">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="mt-6 text-lg leading-relaxed sm:text-xl sm:mt-12">
        I am Dawit Zeleke, a Software Engineer from Addis Ababa, Ethiopia, skilled in backend development with tools like .NET Core and Docker.
      </p>

        <p className="mt-4 text-lg leading-relaxed sm:text-xl">
        I interned as a Backend Developer at Xceltech Solution, contributing to backend services for an HR Management System. Through the Africa to Silicon Valley program, I honed my skills in Flutter and teamwork. Additionally, I’ve solved 600+ problems on LeetCode and Codeforces, enhancing my problem-solving and algorithm expertise.
        </p>
      </div>
    </div>
  );
};

export default About;
