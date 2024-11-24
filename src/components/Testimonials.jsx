export default function FaqSection() {
  const faqs = [
    {
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
      active: true,
    },
    {
      question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
      answer:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
      active: false,
    },
    {
      question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
      answer:
        "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
      active: false,
    },
    {
      question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
      answer:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
      active: false,
    },
    {
      question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
      answer:
        "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in",
      active: false,
    },
    {
      question: "Perspiciatis quod quo quos nulla quo illum ullam?",
      answer:
        "Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.",
      active: false,
    },
  ];

  return (
    <section id="faq" className="faq section py-16 bg-gray-50">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center">
          <div
            className="w-full lg:w-10/12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item border-b border-gray-200 py-4 ${
                    faq.active ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <i
                      className={`faq-toggle bi ${
                        faq.active ? "bi-chevron-down" : "bi-chevron-right"
                      } text-gray-600 cursor-pointer`}
                    ></i>
                  </div>
                  {faq.active && (
                    <div className="faq-content mt-2">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
