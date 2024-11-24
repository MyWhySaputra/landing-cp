import { FaBriefcase, FaChartBar } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";

export default function FeaturedServices() {
  return (
    <section
      id="featured-services"
      className="featured-services section bg-gray-100 py-12"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Service Item 1 */}
          <div
            className="service-item flex items-start space-x-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a
              href="#"
              className="text-blue-600 hover:text-white text-3xl flex-shrink-0 p-7 bg-blue-200 hover:bg-blue-400 transition-all duration-300"
            >
              <FaBriefcase />
            </a>
            <div>
              <h4 className="title text-xl font-semibold">
                <a href="#" className="stretched-link hover:text-blue-600">
                  Lorem Ipsum
                </a>
              </h4>
              <p className="description text-gray-600 mt-2">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>

          {/* Service Item 2 */}
          <div
            className="service-item flex items-start space-x-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="#"
              className="text-blue-600 hover:text-white text-3xl flex-shrink-0 p-7 bg-blue-200 hover:bg-blue-400 transition-all duration-300"
            >
              <BsCardChecklist />
            </a>
            <div>
              <h4 className="title text-xl font-semibold">
                <a href="#" className="stretched-link hover:text-blue-600">
                  Dolor Sitema
                </a>
              </h4>
              <p className="description text-gray-600 mt-2">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip exa
              </p>
            </div>
          </div>

          {/* Service Item 3 */}
          <div
            className="service-item flex items-start space-x-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="#"
              className="text-blue-600 hover:text-white text-3xl flex-shrink-0 p-7 bg-blue-200 hover:bg-blue-400 transition-all duration-300"
            >
              <FaChartBar />
            </a>
            <div>
              <h4 className="title text-xl font-semibold">
                <a href="#" className="stretched-link hover:text-blue-600">
                  Sed ut perspiciatis
                </a>
              </h4>
              <p className="description text-gray-600 mt-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
