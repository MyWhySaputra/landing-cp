import bgImage from "../assets/img/hero-bg-light.webp";

export default function Hero() {
  return (
    <section id="hero" className="hero section relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover opacity-20" />
      </div>

      {/* Content */}
      <div className="container mx-auto h-full flex items-center justify-center relative z-10">
        <div className="text-center">
          {/* Heading */}
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-bold text-gray-900"
          >
            Welcome to <span className="text-blue-600">QuickStart</span>
          </h1>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-4 text-lg text-gray-600"
          >
            Quickly start your project now and set the stage for success
          </p>

          {/* Buttons */}
          <div
            className="flex justify-center space-x-4 mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Get Started Button */}
            <a
              href="#about"
              className="btn-get-started px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
