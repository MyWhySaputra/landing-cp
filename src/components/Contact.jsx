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
          {/* Address */}
          <div>
            <div
              className="info-item flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg min-h-[200px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-geo-alt text-4xl text-primary mb-3"></i>
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600 text-center max-w-xs">
                Lantai 12 Zona B Jl.Prof Dr. Satrio Kav. E IV No.6 Mega
                Kuningan, Kel.Karet Kuningan, Kec.Setia Budi Kota Administrasi
                Jakarta Selatan 12940
              </p>
            </div>
          </div>

          {/* Call Us */}
          <div>
            <div
              className="info-item flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg min-h-[200px]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-telephone text-4xl text-primary mb-3"></i>
              <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600 text-center max-w-xs">
                +1 5589 55488 55
              </p>
            </div>
          </div>

          {/* Email Us */}
          <div>
            <div
              className="info-item flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg min-h-[200px]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-envelope text-4xl text-primary mb-3"></i>
              <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600 text-center max-w-xs">
                info@tdcdigital.id
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.65609174214!2d106.72645187409573!3d-6.176771960523984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7254a3f18dd%3A0xe59f40bd1359d096!2sAZ%20Solusindo!5e0!3m2!1sid!2sid!4v1732433900473!5m2!1sid!2sid"
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
                  <button
                    type="submit"
                    className="px-6 py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg"
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