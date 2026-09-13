import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiCheck, FiSearch, FiEdit3, FiCode, FiTrendingUp, FiPlay, FiX, FiMessageSquare, FiFacebook, FiLinkedin, FiInstagram, FiCalendar, FiPhone, FiMail } from "react-icons/fi";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

import Navbar from "../../components/Navbar";
import ServiceCard from "../../components/ServiceCard";
import servicesData from "../../data/servicesData";
import reasons from "../../data/reasonsData";
import Footer from "../../components/Footer";
import NetworkSphere from "../../components/NetworkSphere";
import WorldMapGraphic from "../../components/WorldMapGraphic";
import AssistantImg from "../../assets/images/Assistant.png";
import Client1 from "../../assets/images/PH2VQ26FQVEXPF3BKILGSEITSQ.jpg";
import Client2 from "../../assets/images/download (2).jpg";
import CalLogo from "../../assets/images/cal-logo.jpg";
import LookaLogo from "../../assets/images/looka-logo.jpg";
import NexvaLogo from "../../assets/images/nexva-logo.jpg";
import ZynexLogo from "../../assets/images/zynex-logo.jpg";
import DiasporaLankaLogo from "../../assets/images/diaspora-lanka.png";
import SriLankanExpressLogo from "../../assets/images/srilankan-express.png";
import LankanTasteLogo from "../../assets/images/lankan-taste.jpg";

import ProjectVideo1 from "../../assets/videos/snaptik_7598085830409817362_v3.mp4";
import ProjectVideo2 from "../../assets/videos/snaptik_7623322430479666440_v3.mp4";
import ProjectVideo3 from "../../assets/videos/snaptik_7657830247089310984_v3.mp4";

const recentProjects = [
  {
    id: 1,
    title: "Smart Dashboard",
    category: "Dashboard",
    description: "Intelligent analytics dashboard providing real-time data visualization, automated workflows, and business insights.",
    video: ProjectVideo1,
    tags: ["React", "Analytics", "Dashboard"],
  },
  {
    id: 2,
    title: "Modern Website",
    category: "Website",
    description: "High-performance responsive website with dynamic interactive elements and modern UI/UX design.",
    video: ProjectVideo2,
    tags: ["React", "Tailwind", "Web Design"],
  },
  {
    id: 3,
    title: "Interactive Website",
    category: "Website",
    description: "Feature-rich web platform designed for seamless user engagement and scalable digital performance.",
    video: ProjectVideo3,
    tags: ["UI/UX", "Vite", "Web Development"],
  },
];

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(null);
  const stats = [
    { number: 20, suffix: "+", label: "Projects Delivered" },
    { number: 92, suffix: "%", label: "Client Satisfaction" },
    { number: 30, suffix: "+", label: "Clients" },
    { number: 6, suffix: "+", label: "Industries" },
    { number: 15, suffix: "+", label: "Team Members" },
    { number: 5, suffix: "+", label: "Countries" },
  ];

  // Partner logos roster
  const partnerLogos = [
    { name: "CAL", logo: CalLogo, isDark: false, imgClass: "max-h-16 max-w-[170px] object-contain" },
    { name: "Looka", logo: LookaLogo, isDark: false, imgClass: "max-h-16 max-w-[170px] object-contain" },
    { name: "NEXVA", logo: NexvaLogo, isDark: true, imgClass: "w-full h-full object-cover scale-115" },
    { name: "ZYNEX", logo: ZynexLogo, isDark: true, imgClass: "w-full h-full object-contain p-3 scale-125" },
    { name: "Diaspora Lanka", logo: DiasporaLankaLogo, isDark: false, imgClass: "max-h-20 max-w-[190px] object-contain scale-130" },
    { name: "Sri Lankan Express", logo: SriLankanExpressLogo, isDark: true, imgClass: "w-full h-full object-contain p-2 scale-115" },
    { name: "Lankan Taste", logo: LankanTasteLogo, isDark: true, imgClass: "w-full h-full object-contain p-2 scale-115" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[90vh] sm:h-screen py-20 sm:py-0 flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="src/assets/images/HeroImage.jpg"
            alt="Digital Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-indigo-900/80" />
        </div>

        <div className="relative z-10 w-full flex items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We Craft{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Exceptional
              </span>{" "}
              Digital Products
            </h1>
            <p className="text-base sm:text-xl text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Transforming your vision into innovative digital experiences that
              drive business growth
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xs sm:max-w-none mx-auto">
              <Link
                to="/services"
                className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-purple-700 text-center"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-20 relative overflow-hidden">
        {/* <div className="absolute -top-40 -left-40 w-[600px] h-[600px] opacity-30">
          <img src="src/assets/images/BlueEllipse.png" alt="blue background" className="w-full h-full object-contain" />
        </div> */}
        {/* <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] opacity-30">
          <img src="src/assets/images/GrayEllipse.png" alt="gray background" className="w-full h-full object-contain" />
        </div> */}

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Who
              </span>{" "}
              We Are
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At Enfera IT Solutions, we believe every successful business starts with a great idea. We partner with business owners to turn their vision into reality through customized software, AI automation, and digital solutions. From improving daily operations to supporting future growth, we provide the technology and guidance businesses need to grow smarter and faster.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CountUp
                  end={stat.number}
                  duration={3}
                  suffix={stat.suffix || ""}
                  className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-3"
                />
                <div className="text-base sm:text-lg font-semibold text-gray-800">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trusted by Businesses Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-100/90 via-indigo-100/80 to-purple-100/90 p-8 sm:p-12 shadow-lg border border-indigo-200/70"
          >
            {/* Soft Light Ambient Glows */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Trusted by{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Businesses
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  We are proud to partner with forward-thinking companies and industry leaders to drive innovative results.
                </p>
              </div>

              {/* Side moving logo marquee */}
              <div className="relative overflow-hidden w-full py-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-sm">
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-indigo-100/90 via-indigo-100/40 to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-indigo-100/90 via-indigo-100/40 to-transparent z-10" />

                <div className="animate-marquee flex gap-8 items-center">
                  {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
                    <div
                      key={index}
                      className={`group rounded-xl border shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center min-w-[210px] h-28 cursor-pointer overflow-hidden relative ${
                        partner.isDark
                          ? "bg-slate-950 border-slate-800 hover:border-blue-500/50 p-0"
                          : "bg-white border-gray-200/80 hover:border-blue-400 px-8 py-4"
                      }`}
                    >
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className={`${partner.imgClass} transition-all duration-300 group-hover:scale-110`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Process Section */}
          <div className="my-24 relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-16">
                <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3 block">
                  OUR PROCESS
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
                  How We Take You From{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    Idea to Impact
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                  A clear, four-stage approach that turns your goals into a digital solution that performs — and keeps performing.
                </p>
              </div>

              {/* Purple-Blue Mix Low-Glass 4-Card Process Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                
                {/* 01 Discover Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="p-7 rounded-3xl bg-gradient-to-br from-blue-600/15 via-indigo-600/15 to-purple-600/20 backdrop-blur-xl border border-indigo-400/30 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5 relative z-10">
                      <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                        01
                      </span>
                      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md group-hover:scale-110 transition duration-300">
                        <FiSearch size={22} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                      Discover
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base relative z-10">
                      Understanding your business, goals, and challenges before building the right digital solution.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-indigo-100 flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-wider">
                    <span>Phase 01</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>Analysis</span>
                  </div>
                </motion.div>

                {/* 02 Design Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-7 rounded-3xl bg-gradient-to-br from-indigo-600/15 via-purple-600/15 to-blue-600/20 backdrop-blur-xl border border-purple-400/30 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5 relative z-10">
                      <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                        02
                      </span>
                      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md group-hover:scale-110 transition duration-300">
                        <FiEdit3 size={22} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">
                      Design
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base relative z-10">
                      Creating modern UI/UX experiences and strategic solution architecture tailored to your brand.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-purple-100 flex items-center gap-2 text-xs font-bold text-purple-600 uppercase tracking-wider">
                    <span>Phase 02</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span>Architecture</span>
                  </div>
                </motion.div>

                {/* 03 Develop Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="p-7 rounded-3xl bg-gradient-to-br from-blue-600/15 via-indigo-600/15 to-purple-600/20 backdrop-blur-xl border border-indigo-400/30 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5 relative z-10">
                      <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                        03
                      </span>
                      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md group-hover:scale-110 transition duration-300">
                        <FiCode size={22} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                      Develop
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base relative z-10">
                      Building high-performance websites, applications, AI solutions, and custom software with modern technologies.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-indigo-100 flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-wider">
                    <span>Phase 03</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span>Engineering</span>
                  </div>
                </motion.div>

                {/* 04 Grow Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="p-7 rounded-3xl bg-gradient-to-br from-purple-600/15 via-indigo-600/15 to-blue-600/20 backdrop-blur-xl border border-purple-400/30 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5 relative z-10">
                      <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                        04
                      </span>
                      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-md group-hover:scale-110 transition duration-300">
                        <FiTrendingUp size={22} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">
                      Grow
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base relative z-10">
                      Helping your business scale with SEO, digital marketing, automation, and continuous technical support.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-purple-100 flex items-center gap-2 text-xs font-bold text-purple-600 uppercase tracking-wider">
                    <span>Phase 04</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span>Scaling</span>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>

          {/* Services Section */}
          <section id="services" className="py-10">

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Services
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer custom-tailored digital solutions built for innovation,
                performance, and results.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl p-3 mr-4">
                      <span className="text-xl font-bold">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Recent Projects Section */}
          <div className="my-24 relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-16">
                <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3 block">
                  PORTFOLIO
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
                  Featured{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    Recent Projects
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                  Explore some of our latest digital transformations, custom web applications, and AI-driven solutions built for performance.
                </p>
              </div>

              {/* Video Project Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    onClick={() => setActiveVideo(project)}
                    className="group rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 border border-slate-800 shadow-xl hover:shadow-2xl hover:border-blue-500/60 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col cursor-pointer relative"
                  >
                    {/* Video Player Container */}
                    <div className="relative w-full h-80 bg-black/80 overflow-hidden flex items-center justify-center">
                      <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Dark Gradient Overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-black/40 pointer-events-none" />

                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/90 text-white backdrop-blur-md border border-blue-400/40 shadow-md">
                          {project.category}
                        </span>
                      </div>

                      {/* Center Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-blue-500 transition-all duration-300 border-2 border-white/40 backdrop-blur-md">
                          <FiPlay size={26} className="ml-1 text-white fill-white" />
                        </div>
                      </div>
                    </div>

                    {/* Project Info Footer */}
                    <div className="p-6 flex-1 flex flex-col justify-between bg-slate-950/90 backdrop-blur-md">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                        {project.tags.map((tag, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Full Screen Video Modal Popup */}
          <AnimatePresence>
            {activeVideo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
                onClick={() => setActiveVideo(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative max-w-4xl w-full bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800/80 bg-slate-900/90 z-10">
                    <div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-2 inline-block">
                        {activeVideo.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {activeVideo.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setActiveVideo(null)}
                      className="p-3 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-200 shadow-md"
                      title="Close Video"
                    >
                      <FiX size={22} />
                    </button>
                  </div>

                  {/* Video Player Box */}
                  <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[65vh]">
                    <video
                      src={activeVideo.video}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Modal Footer */}
                  <div className="p-4 sm:p-6 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800/80 z-10">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                      {activeVideo.description}
                    </p>
                    <div className="flex flex-wrap gap-2 shrink-0">
                      {activeVideo.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-blue-300 border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Global Reach Section */}
          <section className="my-24 relative">
            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl p-8 sm:p-14 overflow-hidden relative">
              {/* Background ambient light glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                {/* Left Column Text Content */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  {/* Badge */}
                  <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-blue-50 text-blue-600 border border-blue-200/80 inline-block shadow-sm">
                    Global Reach
                  </span>

                  {/* Main Title */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                    Trusted by{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      clients
                    </span>
                    <br />
                    across the globe
                  </h2>

                  {/* Subtitle / Paragraph */}
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                    From local startups to businesses overseas, we've partnered with 50+ clients in 5+ countries — delivering digital solutions that work no matter where you're based.
                  </p>

                  {/* CTA Buttons & Social Icons Row */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    {/* Contact Button */}
                    <Link
                      to="/contact"
                      className="px-7 py-3.5 rounded-full bg-[#0a0f1d] hover:bg-blue-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2.5 group"
                    >
                      <FiMessageSquare size={18} className="group-hover:rotate-12 transition-transform" />
                      <span>Contact Us</span>
                    </Link>

                    {/* Social Icon Pills */}
                    <div className="flex items-center gap-2.5">
                      <a
                        href="https://www.facebook.com/enfera"
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 rounded-full border border-gray-200 bg-gray-50/80 hover:bg-blue-50 hover:border-blue-300 text-gray-600 hover:text-blue-600 flex items-center justify-center transition-all duration-300 shadow-sm"
                        title="Facebook"
                      >
                        <FiFacebook size={18} />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/enfera"
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 rounded-full border border-gray-200 bg-gray-50/80 hover:bg-blue-50 hover:border-blue-300 text-gray-600 hover:text-blue-600 flex items-center justify-center transition-all duration-300 shadow-sm"
                        title="LinkedIn"
                      >
                        <FiLinkedin size={18} />
                      </a>
                      <a
                        href="https://www.instagram.com/enfera"
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 rounded-full border border-gray-200 bg-gray-50/80 hover:bg-blue-50 hover:border-blue-300 text-gray-600 hover:text-blue-600 flex items-center justify-center transition-all duration-300 shadow-sm"
                        title="Instagram"
                      >
                        <FiInstagram size={18} />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 rounded-full border border-gray-200 bg-gray-50/80 hover:bg-blue-50 hover:border-blue-300 text-gray-600 hover:text-blue-600 flex items-center justify-center transition-all duration-300 shadow-sm"
                        title="TikTok"
                      >
                        <FaTiktok size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column Graphic */}
                <div className="lg:col-span-6 flex justify-center items-center">
                  <WorldMapGraphic />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 text-white ">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Sarah Johnson", "Michael Chen"].map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >
                <p className="text-gray-200 mb-6 italic">
                  {i === 0
                    ? '"Enferra transformed our digital presence with their innovative solutions. Their team delivered beyond our expectations."'
                    : '"The attention to detail and commitment to quality sets Enferra apart. They truly understand business needs."'}
                </p>
                <div className="flex items-center">
                  <img
                    src={i === 0 ? Client1 : Client2}
                    alt={`Client ${i + 1}`}
                    className="w-16 h-16 rounded-xl object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-gray-300">
                      {i === 0 ? "CTO, TechInnovate" : "CEO, Global Solutions"}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        {/* Ambient Glow / Radial Highlights */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Sub-badge */}
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-200 uppercase block">
                LET'S BUILD SOMETHING
              </span>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to grow your business online?
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-xl">
                Book a free 30-minute strategy call. We'll review your goals and show you exactly how we'd help.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 bg-white text-gray-900 rounded-2xl font-bold shadow-lg hover:shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center gap-2.5"
                >
                  <FiCalendar size={18} className="text-blue-600" />
                  <span>Book Free Consultation</span>
                </Link>

                <a
                  href="https://wa.me/94707200962"
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3.5 bg-white/15 backdrop-blur-md text-white border border-white/30 rounded-2xl font-semibold hover:bg-white/25 hover:scale-105 transition-all duration-300 flex items-center gap-2.5 shadow-md"
                >
                  <FaWhatsapp size={20} className="text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* 3 Contact Info Glass Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-4">
                {/* Card 1: HOTLINE */}
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-3 hover:bg-white/15 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                    <FiPhone size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-blue-200 tracking-wider uppercase block">
                      HOTLINE
                    </span>
                    <a href="tel:+94767200962" className="text-white font-bold text-xs sm:text-sm hover:text-blue-200 transition block truncate">
                      +94 767 200 962
                    </a>
                  </div>
                </div>

                {/* Card 2: EMAIL US */}
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-3 hover:bg-white/15 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                    <FiMail size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-blue-200 tracking-wider uppercase block">
                      EMAIL US
                    </span>
                    <a href="mailto:info@enfera.lk" className="text-white font-bold text-xs sm:text-sm hover:text-blue-200 transition truncate block">
                      info@enfera.lk
                    </a>
                  </div>
                </div>

                {/* Card 3: WHATSAPP 24/7 */}
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-3 hover:bg-white/15 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                    <FaWhatsapp size={20} className="text-emerald-300" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-blue-200 tracking-wider uppercase block">
                      WHATSAPP 24/7
                    </span>
                    <a href="https://wa.me/94707200962" target="_blank" rel="noreferrer" className="text-white font-bold text-xs sm:text-sm hover:text-blue-200 transition block truncate">
                      +94 707 200 962
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Assistant Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 flex justify-center items-center relative"
            >
              {/* Background Soft Glow */}
              <div className="absolute w-72 h-72 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
              
              <img
                src={AssistantImg}
                alt="Enfera Assistant"
                className="w-full max-w-sm lg:max-w-md h-auto object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
