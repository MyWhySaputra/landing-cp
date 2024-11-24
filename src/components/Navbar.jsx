import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("hero"); // State untuk track link aktif

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScroll(scrollTop > lastScrollTop);
      lastScrollTop = scrollTop;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver untuk mendeteksi elemen mana yang sedang terlihat di layar
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Semua section yang di-scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id); // Set link aktif sesuai id elemen yang terdeteksi
          }
        });
      },
      {
        threshold: 0.5, // Elemen dianggap terlihat jika 50% dari elemen tersebut terlihat
      }
    );

    sections.forEach((section) => observer.observe(section)); // Amati setiap section

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const handleClick = (event, targetId) => {
    event.preventDefault();
    closeNav();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 10,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <header
        id="header"
        className={`animate__animated animate__fadeInDownBig fixed top-0 w-full bg-white shadow-md flex items-center z-50 h-20 ${
          scroll ? "top-[-110px]" : "shadow-2xl"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          <a
            href="#hero"
            className="flex items-center space-x-2 text-lg font-semibold text-gray-900"
          >
            <h1 className="text-xl font-bold">Company Name</h1>
          </a>

          <nav id="navmenu" className={`lg:flex hidden`}>
            <ul className="flex items-center space-x-6 text-gray-700">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleClick(e, "hero")}
                  className={`${
                    activeLink === "hero"
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-800 font-medium"
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleClick(e, "about")}
                  className={`${
                    activeLink === "about"
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-800 font-medium"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleClick(e, "features")}
                  className={`${
                    activeLink === "features"
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-800 font-medium"
                  }`}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleClick(e, "services")}
                  className={`${
                    activeLink === "services"
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-800 font-medium"
                  }`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleClick(e, "faq")}
                  className={`${
                    activeLink === "faq"
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-800 font-medium"
                  }`}
                >
                  Questions
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleClick(e, "contact")}
                  className={`${
                    activeLink === "contact"
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-800 font-medium"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="#about"
            onClick={(e) => handleClick(e, "about")}
            className="hidden lg:inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Get Started
          </a>

          {/* Button untuk mobile */}
          <button
            className="lg:hidden text-gray-700"
            onClick={handleNav}
            aria-label="Toggle Navigation"
          >
            <FaBars className={`text-2xl ${nav ? "rotate-90" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          nav ? "block" : "hidden"
        } fixed inset-0 bg-white z-40 bg-opacity-90 pt-10`}
      >
        <div className="flex justify-end p-4">
          <button onClick={handleNav} className="text-gray-700 text-3xl">
            <FaBars />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 text-gray-700">
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "hero")}
            className={`${
              activeLink === "hero"
                ? "text-blue-600 font-semibold"
                : "hover:text-blue-800 font-medium"
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleClick(e, "about")}
            className={`${
              activeLink === "about"
                ? "text-blue-600 font-semibold"
                : "hover:text-blue-800 font-medium"
            }`}
          >
            About
          </a>
          <a
            href="#features"
            onClick={(e) => handleClick(e, "features")}
            className={`${
              activeLink === "features"
                ? "text-blue-600 font-semibold"
                : "hover:text-blue-800 font-medium"
            }`}
          >
            Features
          </a>
          <a
            href="#services"
            onClick={(e) => handleClick(e, "services")}
            className={`${
              activeLink === "services"
                ? "text-blue-600 font-semibold"
                : "hover:text-blue-800 font-medium"
            }`}
          >
            Services
          </a>
          <a
            href="#faq"
            onClick={(e) => handleClick(e, "faq")}
            className={`${
              activeLink === "faq"
                ? "text-blue-600 font-semibold"
                : "hover:text-blue-800 font-medium"
            }`}
          >
            Questions
          </a>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "contact")}
            className={`${
              activeLink === "contact"
                ? "text-blue-600 font-semibold"
                : "hover:text-blue-800 font-medium"
            }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
