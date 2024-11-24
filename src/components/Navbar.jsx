// import logo from "../assets/img/logo.png";

export default function Navbar() {
  return (
    <div>
      <header
        id="header"
        className="fixed top-0 w-full bg-white shadow-md flex items-center z-50 h-20"
      >
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          {/* Logo Section */}
          <a
            href="index.html"
            className="flex items-center space-x-2 text-lg font-semibold text-gray-900"
          >
            {/* <img src={logo} alt="" className="h-8 w-8" /> */}
            <h1 className="text-xl font-bold">Company Name</h1>
          </a>

          {/* Navigation Menu */}
          <nav id="navmenu" className="hidden lg:flex">
            <ul className="flex items-center space-x-6 text-gray-700">
              <li>
                <a
                  href="index.html#hero"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="index.html#about"
                  className="hover:text-blue-800 font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="index.html#features"
                  className="hover:text-blue-800 font-medium"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="index.html#services"
                  className="hover:text-blue-800 font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="index.html#pricing"
                  className="hover:text-blue-800 font-medium"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="index.html#contact"
                  className="hover:text-blue-800 font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Get Started Button */}
          <a
            href="index.html#about"
            className="hidden lg:inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Get Started
          </a>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-gray-700">
            <i className="bi bi-list text-2xl"></i>
          </button>
        </div>
      </header>
    </div>
  );
}
