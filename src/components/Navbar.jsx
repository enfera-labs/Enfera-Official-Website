import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoImage from "../assets/images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <nav className="sticky top-0 z-50 h-20 bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center h-full">
        
        {/* ✅ LOGO (Vertically Centered & Refined Size) */}
        <NavLink to="/" className="flex items-center h-full">
          <img
            src={LogoImage}
            alt="Enfera Logo"
            className="h-7 sm:h-[32px] w-auto object-contain my-auto transition-transform duration-300 hover:scale-105"
          />
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-300 underline underline-offset-4"
                    : "hover:text-blue-300 transition"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/contact">
              <button className="px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-blue-800 transition">
                Contact Us
              </button>
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white border-t border-white/10 shadow-md">
          <ul className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block text-blue-300 font-semibold"
                      : "block hover:text-blue-300"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-blue-800 transition">
                  Contact Us
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
