import React from "react";
import Horizon from "../assets/portfolio/horizon2.png";
// import installNode from "../assets/portfolio/installNode.jpg";
import Xcel from "../assets/xcel.jpg";
import Hotel from "../assets/hotel.png";
import learnify from "../assets/learnify.png";
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
      id: 5,
      src: learnify,
      subTitle: "An E-Learing Platform",
      link: "https://github.com/dawitzeleke/learnify",
    },
    {
      id: 4,
      src: Horizon,
      subTitle: "Banking App",
      link: "https://github.com/dawitzeleke/banking",
    },
    {
      id: 5,
      src: Hotel,
      subTitle: "Booking App",
      link: "https://github.com/dawitzeleke/booking-app",
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="w-full py-16 text-white bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="text-center">
          <h2 className="inline text-4xl font-bold border-b-4 border-gray-500">
            Portfolio
          </h2>
          <p className="mt-4">Check out some of my work below.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map(({ id, src, subTitle, link }) => (
            <div
              key={id}
              className="duration-300 bg-gray-900 rounded-lg shadow-lg hover:scale-105"
            >
              <img
                src={src}
                alt={subTitle}
                className="object-cover w-full h-48 rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{subTitle}</h3>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-cyan-500 hover:underline"
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