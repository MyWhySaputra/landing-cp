import img1 from "../assets/img/features-1.jpg";
import img2 from "../assets/img/features-2.jpg";

export default function FeaturesDetailsSection() {
  return (
    <section id="features-details" className="features-details section py-16">
      <div className="container mx-auto px-6 space-y-12">
        {/* Feature Item 1 */}
        <div className="row flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Image */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img
              src={img1}
              className="img-fluid rounded-lg shadow-md"
              alt="Feature 1"
            />
          </div>

          {/* Content */}
          <div
            className="col-lg-5 flex items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content text-left">
              <h3 className="text-2xl font-bold mb-4">
                Corporis temporibus maiores provident
              </h3>
              <p className="text-gray-600 mb-6">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <a
                href="#"
                className="btn bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Feature Item 2 */}
        <div className="row flex flex-col lg:flex-row-reverse items-center justify-between space-y-8 lg:space-y-0">
          {/* Content */}
          <div
            className="col-lg-5 flex items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="content text-left">
              <h3 className="text-2xl font-bold mb-4">
                Neque ipsum omnis sapiente quod quia dicta
              </h3>
              <p className="text-gray-600 mb-6">
                Quidem qui dolore incidunt aut. In assumenda harum id iusto
                lorena plasico mares.
              </p>
              <ul className="list-none space-y-4">
                <li className="flex items-start">
                  <i className="bi bi-easel text-indigo-600 mr-4"></i>
                  <span>Et corporis ea eveniet ducimus.</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-patch-check text-indigo-600 mr-4"></i>
                  <span>Exercitationem dolorem sapiente.</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-brightness-high text-indigo-600 mr-4"></i>
                  <span>Veniam quia modi magnam.</span>
                </li>
              </ul>
              <a
                href="#"
                className="btn bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 mt-6 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <img
              src={img2}
              className="img-fluid rounded-lg shadow-md"
              alt="Feature 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
