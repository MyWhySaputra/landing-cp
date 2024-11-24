export default function PricingSection() {
  const pricingPlans = [
    {
      title: "Free Plan",
      price: 0,
      description:
        "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
      popular: false,
      features: [
        "Quam adipiscing vitae proin",
        "Nec feugiat nisl pretium",
        "Nulla at volutpat diam uteera",
        "Pharetra massa massa ultricies",
        "Massa ultricies mi quis hendrerit",
        "Voluptate id voluptas qui sed aperiam rerum",
        "Iure nihil dolores recusandae odit voluptatibus",
      ],
    },
    {
      title: "Business Plan",
      price: 29,
      description:
        "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
      popular: true,
      features: [
        "Quam adipiscing vitae proin",
        "Nec feugiat nisl pretium",
        "Nulla at volutpat diam uteera",
        "Pharetra massa massa ultricies",
        "Massa ultricies mi quis hendrerit",
        "Voluptate id voluptas qui sed aperiam rerum",
        "Iure nihil dolores recusandae odit voluptatibus",
      ],
    },
    {
      title: "Developer Plan",
      price: 49,
      description:
        "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
      popular: false,
      features: [
        "Quam adipiscing vitae proin",
        "Nec feugiat nisl pretium",
        "Nulla at volutpat diam uteera",
        "Pharetra massa massa ultricies",
        "Massa ultricies mi quis hendrerit",
        "Voluptate id voluptas qui sed aperiam rerum",
        "Iure nihil dolores recusandae odit voluptatibus",
      ],
    },
  ];

  return (
    <section id="pricing" className="pricing section py-16 bg-gray-50">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Pricing</h2>
        <p className="text-gray-600">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap gap-8 justify-center">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`max-w-sm w-full p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                plan.popular ? "border-4 border-indigo-600" : ""
              }`}
              data-aos="zoom-in"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              {plan.popular && (
                <p className="text-indigo-600 text-sm font-semibold mb-4">
                  Popular
                </p>
              )}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {plan.title}
              </h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <h4 className="text-3xl font-bold text-gray-800 mb-4">
                <sup>$</sup>
                {plan.price}
                <span className="text-sm"> / month</span>
              </h4>
              <a
                href="#"
                className="cta-btn inline-block bg-indigo-600 text-white px-6 py-2 rounded-full mb-4 hover:bg-indigo-700 transition"
              >
                Start a free trial
              </a>
              <p className="text-center text-sm text-gray-500">
                No credit card required
              </p>
              <ul className="list-none mt-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center ${
                      feature.includes("Iure")
                        ? "text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    <i
                      className={`bi ${
                        feature.includes("Iure") ? "bi-x" : "bi-check"
                      } text-green-600 mr-2`}
                    ></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
