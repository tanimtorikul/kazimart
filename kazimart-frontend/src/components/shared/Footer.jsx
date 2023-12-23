import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const textColor = "#375AA5";

  return (
    <footer
      className="text-white px-4 sm:px-8 py-6 md:py-12"
      style={{ color: textColor }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row md:justify-between md:items-center">
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <Link
            to="/"
            className="flex md:justify-center space-x-3 lg:justify-start"
          >
            <span className="self-center text-3xl font-semibold">Kazimart</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-2/3 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-lg">Shop</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/products">Browse Products</Link>
              </li>
              <li>
                <Link to="/categories">Shop by Categories</Link>
              </li>
              <li>
                <Link to="/sales">Sales and Deals</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-lg">Customer Service</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-lg">About Us</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/about">Our Story</Link>
              </li>
              <li>
                <Link to="/mission">Our Mission</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-lg">Follow Us</div>
            <div className="flex justify-start space-x-3">
              <Link
                to="#"
                title="Facebook"
                className="flex text-xl items-center p-1"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="#"
                title="Twitter"
                className="flex text-xl items-center p-1"
              >
                <FaTwitter />
              </Link>
              <Link
                to="#"
                title="Instagram"
                className="flex text-xl items-center p-1"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 text-lg text-center">
        © 2023 Kazimart. Developed by Tanim.
      </div>
    </footer>
  );
};

export default Footer;
