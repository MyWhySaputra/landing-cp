export default function ContactSection() {
  return (
    <section id="contact" className="contact section py-16 bg-gray-50">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
        <p className="text-lg text-gray-600">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div
        className="container mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-lg-6">
            <div
              className="info-item flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-geo-alt text-4xl text-primary mb-3"></i>
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">
                A108 Adam Street, New York, NY 535022
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="info-item flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-telephone text-4xl text-primary mb-3"></i>
              <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+1 5589 55488 55</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="info-item flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-envelope text-4xl text-primary mb-3"></i>
              <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600">info@example.com</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              frameBorder="0"
              style={{ border: 0, width: "100%", height: "400px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control w-full p-3 border border-gray-300 rounded-lg"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control w-full p-3 border border-gray-300 rounded-lg"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control w-full p-3 border border-gray-300 rounded-lg"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading...</div>
                  <div className="error-message text-red-500"></div>
                  <div className="sent-message text-green-500">
                    Your message has been sent. Thank you!
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 mt-4 bg-primary text-white font-semibold rounded-lg"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}