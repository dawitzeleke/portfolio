import React from "react";
import Horizon from "../assets/portfolio/horizon2.png";
// import installNode from "../assets/portfolio/installNode.jpg";
import Xcel from "../assets/xcel.jpg";
import Hotel from "../assets/hotel.png";
import { FaGithub} from "react-icons/fa";
import outPut from "../assets/output.png";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Xcel,
      subTitle: "HRMS",
      link: "https://github.com/amanjnc/XcelTech.HRMS",
    },
    {
      id: 2,
      src: outPut,
      subTitle: "Football Analysis App",
      link: "https://github.com/dawitzeleke/football_analysis",
    },
    {
      id: 3,
      src: Horizon,
      subTitle: "Banking App",
      link: "https://github.com/dawitzeleke/banking",
    },
    {
      id: 4,
      src: Hotel,
      subTitle: "Booking App",
      link: "https://github.com/dawitzeleke/booking-app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Portfolio
          </h2>
          <p className="mt-4">Check out some of my work below.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {portfolios.map(({ id, src, subTitle, link }) => (
            <div
              key={id}
              className="rounded-lg shadow-lg bg-gray-900 hover:scale-105 duration-300"
            >
              <img
                src={src}
                alt={subTitle}
                className="rounded-t-lg w-full object-cover h-48"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{subTitle}</h3>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-cyan-500 hover:underline"
                  >
                    <FaGithub size={30} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;