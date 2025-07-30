//libraries
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Quick_Links = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Cart", href: "/cart" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r text-black  bg-slate-100 dark:from-[#0d1117] dark:to-[#161b22] dark:bg-gray-800 dark:text-[#f0f6fc] py-12  ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-start">
          {/* Company Info */}
          <div className="space-y-4">
            <h1 className="text-xl font-bold mb-3">Jallen Products</h1>
            <p className="dark:text-gray-300 leading-relaxed text-sm">
              Where exceptional experience begins with quality you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h1 className="font-semibold mb-3">Quick Links</h1>
            <div className="dark:text-gray-300  space-x-2 md:space-x-4 text-sm list-none space-y-1">
              {Quick_Links.map((link) => {
                return (
                  <li key={link.name}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        clsx(
                          isActive
                            ? "border-b-2 font-medium text-blue-400"
                            : "hover:text-blue-400 transition-colors duration-200"
                        )
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                );
              })}
              {/* <Link to={"/"}>Home</Link>
              <Link to={"/product"}>Product</Link>
              <Link to={"/cart"}>Cart</Link> */}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h1 className=" font-semibold mb-3">Connect</h1>
            <div className="flex flex-col space-y-3 text-sm">
              <a
                href="mailto:jallenportugal5@gmail.com"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                jallenportugal5@gmail.com
              </a>
              <div className="flex space-x-4 mt-4 justify-center md:justify-start">
                <a
                  href="https://github.com/Liebe3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-all duration-200"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jallen-portugal-738110282/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-600 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Jallen Products. All rights reserved. Built with React and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
