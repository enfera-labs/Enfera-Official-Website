import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiMessageSquare,
  FiGlobe,
} from "react-icons/fi";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    companyWebsite: "",
    email: "",
    phone: "",
    messageAbout: "Web Development",
    planningMessage: "",
    agree: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTopics = [
    "Web Development",
    "E-commerce",
    "UI/UX Design",
    "SEO & Optimization",
    "Maintenance",
    "Cloud Solutions",
    "Business Automation",
    "Consultation",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  const contactInfo = [
    {
      icon: <FiPhone size={24} className="text-blue-500" />,
      title: "Hotline",
      value: "+94 767 200 962",
      link: "tel:+94767200962",
      badge: "Quick Call",
    },
    {
      icon: <FaWhatsapp size={24} className="text-emerald-500" />,
      title: "WhatsApp 24/7",
      value: "+94 707 200 962",
      link: "https://wa.me/94707200962",
      badge: "Instant Chat",
    },
    {
      icon: <FiMail size={24} className="text-purple-500" />,
      title: "Email Us",
      value: "info@enfera.lk",
      link: "mailto:info@enfera.lk",
      badge: "Official Support",
    },
    {
      icon: <FiMapPin size={24} className="text-rose-500" />,
      title: "Location",
      value: "2A, Alexander Place, Thudella, Ja-Ela, Sri Lanka",
      link: "https://maps.google.com/?q=Ja-Ela,Sri+Lanka",
      badge: "Headquarters",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Navbar />

      {/* Hero Section */}
      <div className="relative py-20 px-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        {/* Ambient Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 inline-block mb-4 shadow-sm"
          >
            LET'S BUILD SOMETHING GREAT TOGETHER
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300">
              Touch
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind, need software guidance, or want to automate your business operations? We're here to help you scale.
          </motion.p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 max-w-6xl -mt-10 mb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Contact Information
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reach out directly to our team via phone, WhatsApp, or email. We respond quickly to all inquiries.
              </p>

              {/* Contact Cards Roster */}
              <div className="space-y-4 pt-2">
                {contactInfo.map((info, idx) => (
                  <motion.a
                    key={idx}
                    href={info.link}
                    target={info.title === "Location" || info.title.includes("WhatsApp") ? "_blank" : "_self"}
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/80 hover:bg-blue-50/80 border border-gray-100 hover:border-blue-200 transition-all duration-300 group cursor-pointer shadow-sm"
                  >
                    <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {info.title}
                        </span>
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-blue-100/70 text-blue-700">
                          {info.badge}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Working Hours Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-lg relative overflow-hidden">
                <div className="flex items-center gap-3 mb-2">
                  <FiClock className="text-blue-400" size={20} />
                  <h3 className="font-bold text-base">Business Hours</h3>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Monday - Friday: 8:30 AM - 6:30 PM (Sri Lanka Time)
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-1">
                  Saturday: 9:00 AM - 2:00 PM
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-3">
                  Follow Our Social Channels
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/enfera"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 flex items-center justify-center transition-all duration-300 shadow-sm"
                    title="Facebook"
                  >
                    <FiFacebook size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/enfera"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0a66c2] hover:text-white text-gray-700 flex items-center justify-center transition-all duration-300 shadow-sm"
                    title="LinkedIn"
                  >
                    <FiLinkedin size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/enfera"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-pink-600 hover:text-white text-gray-700 flex items-center justify-center transition-all duration-300 shadow-sm"
                    title="Instagram"
                  >
                    <FiInstagram size={18} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-black hover:text-white text-gray-700 flex items-center justify-center transition-all duration-300 shadow-sm"
                    title="TikTok"
                  >
                    <FaTiktok size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-8">
                Fill out the form below and our team will get back to you within a few hours.
              </p>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3"
                  >
                    <FiCheckCircle size={24} className="text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                      <p className="text-xs text-emerald-700 mt-0.5">
                        Thank you for reaching out. We will review your request and get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Service Topic Selection Chips */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                    What service are you interested in?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceTopics.map((topic) => (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => setFormData((prev) => ({ ...prev, messageAbout: topic }))}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                          formData.messageAbout === topic
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-sm transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-sm transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +94 77 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Company / Website Link
                    </label>
                    <input
                      type="text"
                      name="companyWebsite"
                      placeholder="e.g. www.yourcompany.com"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-gray-700">
                      Project Details / Message <span className="text-red-500">*</span>
                    </label>
                    <span className="text-xs text-gray-400">
                      {formData.planningMessage.length}/300
                    </span>
                  </div>
                  <textarea
                    name="planningMessage"
                    placeholder="Tell us about what you're planning to build, your goals, or your timeline..."
                    value={formData.planningMessage}
                    onChange={handleChange}
                    maxLength={300}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-sm transition-all resize-none"
                    required
                  />
                </div>

                {/* Checkbox Agreement */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    required
                  />
                  <label htmlFor="agree" className="text-xs text-gray-600 leading-relaxed cursor-pointer select-none">
                    I agree to allow Enfera IT Solutions to process my contact information to provide requested software consultation and services in accordance with our Privacy Policy.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base shadow-lg hover:shadow-xl hover:opacity-95 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <FiSend size={18} className="group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
