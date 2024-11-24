import img1 from "../assets/img/features-1.jpg";
import img2 from "../assets/img/features-2.jpg";

export default function FeaturesDetailsSection() {
  return (
    <section id="features-details" className="features-details section py-16">
      <div className="container mx-auto px-6 space-y-12">
        {/* Feature Item 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Image */}
          <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
            <img
              src={img1}
              className="w-full rounded-lg shadow-md"
              alt="Feature 1"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
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
        {/* Feature Item 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Content */}
          <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
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
              <div className="mt-6">
                <a
                  href="#"
                  className=" bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
            <img
              src={img2}
              className="w-full rounded-lg shadow-md"
              alt="Feature 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
