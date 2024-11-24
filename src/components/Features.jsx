import img1 from "../assets/img/tabs-1.jpg";
import img2 from "../assets/img/tabs-2.jpg";
import img3 from "../assets/img/tabs-3.jpg";

export default function FeaturesSection() {
  return (
    <section id="features" className="features section py-16">
      {/* Section Title */}
      <div className="container mx-auto px-6 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="text-gray-600 mt-4">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-10 lg:space-y-0 lg:space-x-12">
          {/* Tab Navigation */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ul className="space-y-6">
              <li>
                <button
                  className="nav-link flex items-center p-4 border rounded-lg hover:bg-gray-100 transition active"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-1"
                >
                  <i className="bi bi-binoculars text-xl text-indigo-600 mr-4"></i>
                  <div>
                    <h4 className="hidden lg:block font-semibold">
                      Modi sit est dela pireda nest
                    </h4>
                    <p className="text-gray-600">
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </button>
              </li>
              <li>
                <button
                  className="nav-link flex items-center p-4 border rounded-lg hover:bg-gray-100 transition"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-2"
                >
                  <i className="bi bi-box-seam text-xl text-indigo-600 mr-4"></i>
                  <div>
                    <h4 className="hidden lg:block font-semibold">
                      Unde praesenti mara setra le
                    </h4>
                    <p className="text-gray-600">
                      Recusandae atque nihil. Delectus vitae non similique
                      magnam molestiae sapiente similique tenetur aut voluptates
                      sed voluptas ipsum voluptas
                    </p>
                  </div>
                </button>
              </li>
              <li>
                <button
                  className="nav-link flex items-center p-4 border rounded-lg hover:bg-gray-100 transition"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-3"
                >
                  <i className="bi bi-brightness-high text-xl text-indigo-600 mr-4"></i>
                  <div>
                    <h4 className="hidden lg:block font-semibold">
                      Pariatur explica nitro dela
                    </h4>
                    <p className="text-gray-600">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                      Debitis nulla est maxime voluptas dolor aut
                    </p>
                  </div>
                </button>
              </li>
            </ul>
          </div>

          {/* Tab Content */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="tab-content">
              <div className="tab-pane fade active show" id="features-tab-1">
                <img
                  src={img1}
                  alt="Feature 1"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="tab-pane fade" id="features-tab-2">
                <img
                  src={img2}
                  alt="Feature 2"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="tab-pane fade" id="features-tab-3">
                <img
                  src={img3}
                  alt="Feature 3"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}