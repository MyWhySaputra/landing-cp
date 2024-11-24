export default function Footer() {
  return (
    <footer id="footer" className="footer bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Footer About */}
          <div className="footer-about">
            <a href="index.html" className="logo flex items-center mb-6">
              <span className="sitename text-2xl font-bold text-gray-800">
                AZ <span className="text-blue-600">Company</span>
              </span>
            </a>
            <div className="footer-contact pt-3 text-gray-700">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
            <div className="social-links flex mt-4 space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="bi bi-twitter-x text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="bi bi-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="bi bi-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="bi bi-linkedin text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="footer-links">
            <h4 className="text-xl font-semibold text-gray-800">
              Useful Links
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-links">
            <h4 className="text-xl font-semibold text-gray-800">
              Our Services
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="footer-newsletter">
            <h4 className="text-xl font-semibold text-gray-800">
              Our Newsletter
            </h4>
            <p className="mt-4 text-gray-700">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <form
              action="forms/newsletter.php"
              method="post"
              className="php-email-form mt-4"
            >
              <div className="newsletter-form flex space-x-4">
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your Email"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto text-center mt-8">
        <p className="text-gray-600">
          © <span className="font-semibold text-gray-800">AZ Solusindo</span> All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
}