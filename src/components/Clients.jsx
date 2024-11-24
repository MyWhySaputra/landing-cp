import img1 from "../assets/img/clients/client-1.png";
import img2 from "../assets/img/clients/client-2.png";
import img3 from "../assets/img/clients/client-3.png";
import img4 from "../assets/img/clients/client-4.png";
import img5 from "../assets/img/clients/client-5.png";
import img6 from "../assets/img/clients/client-6.png";

export default function ClientsSection() {
  return (
    <section id="clients" className="clients section py-12">
      <div className="container mx-auto px-6" data-aos="fade-up">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Client Items */}
          <div className="client-logo">
            <img
              src={img1}
              alt="Client 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="client-logo">
            <img
              src={img2}
              alt="Client 2"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="client-logo">
            <img
              src={img3}
              alt="Client 3"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="client-logo">
            <img
              src={img4}
              alt="Client 4"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="client-logo">
            <img
              src={img5}
              alt="Client 5"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="client-logo">
            <img
              src={img6}
              alt="Client 6"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
