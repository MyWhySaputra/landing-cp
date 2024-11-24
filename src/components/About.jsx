import img1 from "../assets/img/about-company-1.jpg";
import img2 from "../assets/img/about-company-2.jpg";
import img3 from "../assets/img/about-company-3.jpg";
import { CiCircleCheck } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AboutSection() {
  return (
    <section id="about" className="about section h-auto lg:h-screen py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Content */}
          <div
            className="content space-y-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide">
              Who We Are
            </p>
            <h3 className="text-3xl font-extrabold text-gray-800">
              Unleashing Potential with Creative Strategy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CiCircleCheck className=" text-blue-600 text-2xl" />
                <span className=" flex-1 text-gray-700">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CiCircleCheck className="text-blue-600 text-2xl" />
                <span className="flex-1 text-gray-700">
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CiCircleCheck className="text-blue-600 text-2xl" />
                <span className="flex-1 text-gray-700">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="flex items-center text-white bg-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              <span>Read More</span>
              <FaArrowRightLong className="ml-3" />
            </a>
          </div>

          {/* Images */}
          <div
            className="about-images space-y-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <img
                src={img1}
                alt="Company Overview"
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              />
              <div className="grid grid-rows-2 gap-6">
                <img
                  src={img2}
                  alt="Team"
                  className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
                <img
                  src={img3}
                  alt="Office"
                  className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
