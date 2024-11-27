import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-lg sm:text-xl mt-6 sm:mt-12 leading-relaxed">
        I am Dawit Zeleke, a Software Engineer from Addis Ababa, Ethiopia, skilled in backend development with tools like .NET Core and Docker. Currently pursuing my BSc in Software Engineering at Addis Ababa University, graduating in 2025.
      </p>

        <p className="text-lg sm:text-xl mt-4 leading-relaxed">
        I interned as a Backend Developer at Xceltech Solution, contributing to backend services for an HR Management System. Through the Africa to Silicon Valley program, I honed my skills in Flutter and teamwork. Additionally, I’ve solved 500+ problems on LeetCode and Codeforces, enhancing my problem-solving and algorithm expertise.
        </p>
      </div>
    </div>
  );
};

export default About;
