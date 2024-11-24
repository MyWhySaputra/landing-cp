import img1 from "../assets/img/about-company-1.jpg";
import img2 from "../assets/img/about-company-2.jpg";
import img3 from "../assets/img/about-company-3.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="about section h-screen pt-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Content */}
          <div
            className="content space-y-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-blue-600 text-sm font-semibold uppercase">
              Who We Are
            </p>
            <h3 className="text-2xl font-bold text-gray-800">
              Unleashing Potential with Creative Strategy
            </h3>
            <p className="italic text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <i className="bi bi-check-circle text-blue-600 text-xl"></i>
                <span className="text-gray-700">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="bi bi-check-circle text-blue-600 text-xl"></i>
                <span className="text-gray-700">
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="bi bi-check-circle text-blue-600 text-xl"></i>
                <span className="text-gray-700">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="read-more flex items-center text-blue-600 font-semibold hover:underline"
            >
              <span>Read More</span>
              <i className="bi bi-arrow-right ml-2"></i>
            </a>
          </div>

          {/* Images */}
          <div
            className="about-images space-y-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src={img1}
                alt=""
                className="w-full h-auto rounded-md shadow-md"
              />
              <div className="grid grid-rows-2 gap-4">
                <img
                  src={img2}
                  alt=""
                  className="w-full h-auto rounded-md shadow-md"
                />
                <img
                  src={img3}
                  alt=""
                  className="w-full h-auto rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}