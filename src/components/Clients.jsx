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
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex justify-center items-center">
          Clients
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Client Items */}
          <div className="w-30 h-auto flex justify-center items-center">
            <img
              src={img1}
              alt="Client 1"
              className="w-full h-auto grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
          <div className="w-30 h-auto flex justify-center items-center">
            <img
              src={img2}
              alt="Client 2"
              className="w-full h-auto grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
          <div className="w-30 h-auto flex justify-center items-center">
            <img
              src={img3}
              alt="Client 3"
              className="w-full h-auto grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
          <div className="w-30 h-auto flex justify-center items-center">
            <img
              src={img4}
              alt="Client 4"
              className="w-full h-auto grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
          <div className="w-30 h-auto flex justify-center items-center">
            <img
              src={img5}
              alt="Client 5"
              className="w-full h-auto grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
          <div className="w-30 h-auto flex justify-center items-center">
            <img
              src={img6}
              alt="Client 6"
              className="w-full h-auto grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
