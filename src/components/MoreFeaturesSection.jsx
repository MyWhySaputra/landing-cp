export default function MoreFeaturesSection() {
  const features = [
    {
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias",
      icon: "bi-easel",
    },
    {
      title: "Nemo Enim",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiise",
      icon: "bi-patch-check",
    },
    {
      title: "Dine Pad",
      description:
        "Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit",
      icon: "bi-brightness-high",
    },
    {
      title: "Tride clov",
      description:
        "Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit",
      icon: "bi-brightness-high",
    },
  ];

  return (
    <section id="more-features" className="more-features section py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-around gap-8">
          {/* Text and Icon Boxes */}
          <div
            className="col-lg-6 flex flex-col justify-center order-2 lg:order-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-3xl font-semibold mb-4">
              Enim quis est voluptatibus aliquid consequatur
            </h3>
            <p className="text-gray-600 mb-6">
              Esse voluptas cumque vel exercitationem. Reiciendis est hic
              accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
              voluptate sed facere corporis dolores excepturi
            </p>

            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="col-lg-6 icon-box flex items-center gap-4"
                >
                  <i
                    className={`bi ${feature.icon} text-4xl text-indigo-600`}
                  ></i>
                  <div>
                    <h4 className="text-xl font-semibold">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div
            className="col-lg-5 order-1 lg:order-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="assets/img/features-3.jpg"
              alt="More Features"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
