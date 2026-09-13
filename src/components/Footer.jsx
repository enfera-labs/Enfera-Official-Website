import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assets/images/Logo.png";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaTiktok,
  FaCcVisa,
  FaCcMastercard,
  FaApplePay,
  FaGooglePay,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white pt-16 pb-8 px-4 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">

        {/* Company Info & Contact Details (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <Link to="/" className="inline-block mb-3">
            <img
              src={LogoImage}
              alt="Enfera Logo"
              className="h-7 sm:h-9 w-auto object-contain object-left"
            />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-5">
            Websites that turn visitors into customers. Based in Sri Lanka, serving clients worldwide.
          </p>

          {/* Contact Details List */}
          <div className="space-y-3 pt-1">
            {/* Hotline */}
            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <FiPhone className="text-blue-400 shrink-0" size={16} />
              <a href="tel:+94767200962" className="hover:text-blue-400 transition">
                +94 767 200 962 <span className="text-slate-500 text-xs">(Hotline)</span>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <FaWhatsapp className="text-emerald-400 shrink-0" size={16} />
              <a
                href="https://wa.me/94707200962"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition"
              >
                +94 707 200 962 <span className="text-slate-500 text-xs">(WhatsApp)</span>
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <FiMail className="text-blue-400 shrink-0" size={16} />
              <a href="mailto:info@enfera.lk" className="hover:text-blue-400 transition">
                info@enfera.lk
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 text-slate-300 text-sm">
              <FiMapPin className="text-blue-400 shrink-0 mt-0.5" size={16} />
              <span className="text-slate-300">
                2A, Alexander Place, Thudella, Ja-Ela, Sri Lanka
              </span>
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="flex items-center gap-3 pt-4">
            <a
              href="https://www.linkedin.com/company/enfera"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all flex items-center justify-center shadow-sm"
              title="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href="https://www.facebook.com/enfera"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all flex items-center justify-center shadow-sm"
              title="Facebook"
            >
              <FiFacebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/enfera"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all flex items-center justify-center shadow-sm"
              title="Instagram"
            >
              <FiInstagram size={16} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all flex items-center justify-center shadow-sm"
              title="TikTok"
            >
              <FaTiktok size={15} />
            </a>
          </div>
        </div>

        {/* Company Column (2 cols) */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-5">
            COMPANY
          </h4>
          <ul className="space-y-3 text-slate-400 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-white transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Column (3 cols) */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-5">
            SERVICES
          </h4>
          <ul className="space-y-2.5 text-slate-400 text-sm font-medium">
            <li><Link to="/services" className="hover:text-white transition">Web Development</Link></li>
            <li><Link to="/services" className="hover:text-white transition">E-commerce</Link></li>
            <li><Link to="/services" className="hover:text-white transition">UI/UX Design</Link></li>
            <li><Link to="/services" className="hover:text-white transition">SEO & Optimization</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Maintenance</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Cloud Solutions</Link></li>
          </ul>
        </div>

        {/* Legal Column (2 cols) */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-5">
            LEGAL
          </h4>
          <ul className="space-y-3 text-slate-400 text-sm font-medium">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms</a></li>
            <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Bar: Secure Payments + Copyright */}
      <div className="mt-14 pt-8 border-t border-slate-800/80 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
        
        {/* Secure Payments Icons */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-bold text-slate-400 tracking-wider uppercase mr-1">
            SECURE PAYMENTS
          </span>
          <div className="flex items-center gap-3 text-slate-300 text-lg">
            <span title="Visa" className="hover:text-white transition"><FaCcVisa size={22} /></span>
            <span title="Mastercard" className="hover:text-white transition"><FaCcMastercard size={22} /></span>
            <span title="Apple Pay" className="hover:text-white transition"><FaApplePay size={24} /></span>
            <span title="Google Pay" className="hover:text-white transition"><FaGooglePay size={26} /></span>
            <span title="PayPal" className="hover:text-white transition"><FaCcPaypal size={22} /></span>
            <span title="American Express" className="hover:text-white transition"><FaCcAmex size={22} /></span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-slate-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Enfera IT Solutions. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;