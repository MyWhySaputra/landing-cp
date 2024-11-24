export default function ServicesSection() {
  const services = [
    {
      title: "Nesciunt Mete",
      description:
        "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
      icon: "bi-activity",
      color: "bg-cyan-100",
      delay: "100",
    },
    {
      title: "Eosle Commodi",
      description:
        "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
      icon: "bi-broadcast",
      color: "bg-orange-100",
      delay: "200",
    },
    {
      title: "Ledo Markt",
      description:
        "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
      icon: "bi-easel",
      color: "bg-teal-100",
      delay: "300",
    },
    {
      title: "Asperiores Commodi",
      description:
        "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
      icon: "bi-bounding-box-circles",
      color: "bg-red-100",
      delay: "400",
    },
    {
      title: "Velit Doloremque.",
      description:
        "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
      icon: "bi-calendar4-week",
      color: "bg-indigo-100",
      delay: "500",
    },
    {
      title: "Dolori Architecto",
      description:
        "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
      icon: "bi-chat-square-text",
      color: "bg-pink-100",
      delay: "600",
    },
  ];

  return (
    <section id="services" className="services section bg-gray-50 py-16">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p className="text-gray-600">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item p-6 rounded-lg shadow-lg flex items-start ${service.color} relative`}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              {/* Icon */}
              <i
                className={`bi ${service.icon} text-4xl text-gray-700 mr-4`}
              ></i>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="read-more text-indigo-600 font-semibold hover:underline flex items-center"
                >
                  Learn More <i className="bi bi-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
