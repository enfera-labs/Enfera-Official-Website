import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Service Images
import devTeamImage from "../../assets/images/nordwood-themes-kRNZiGKtz48-unsplash.jpg";
import devTeamImage2 from "../../assets/images/damian-zaleski-RYyr-k3Ysqg-unsplash.jpg";
import devTeamImage3 from "../../assets/images/leone-venter-VieM9BdZKFo-unsplash.jpg";
import devTeamImage4 from "../../assets/images/aidan-hancock-UtzrcidfCsk-unsplash.jpg";
import devTeamImage5 from "../../assets/images/david-svihovec-y625OUyhTG8-unsplash.jpg";
import devTeamImage6 from "../../assets/images/nordwood-themes-Cli7eZZzfyM-unsplash.jpg";
// Service Card Component
const ServiceCard = ({ number, title, description, image, onClick }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl cursor-pointer h-72"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90"></div>
      </div>

      <div className="relative p-6 h-full flex flex-col justify-end text-white z-10">
        <div className="flex items-center mb-2">
          <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
            {number}
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-200 mb-4 text-sm">{description}</p>
        <div className="flex justify-between items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-full text-xs transition-all group-hover:px-6">
            Learn More
          </button>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Services Page Component
export default function Services() {
  const navigate = useNavigate();

  // Services Data
  const services = [
    {
      number: "1",
      title: "Dedicated Development Teams",
      description:
        "Expand your team with top-tier professionals dedicated to accelerating your project's success!",
      image: devTeamImage,
      path: "/services/dedicated-development-team",
    },
    {
      number: "2",
      title: "User-Centric Design",
      description:
        "Transform user experiences with intuitive and engaging designs that captivate and delight!",
      image: devTeamImage2,
      path: "/services/user-centric-design",
    },
    {
      number: "3",
      title: "Flyer Post Design",
      description:
        "Make a lasting impression with visually compelling, high-impact flyers that boost your brand!",
      image: devTeamImage3,
      path: "/services/service-unavailable",
    },
    {
      number: "4",
      title: "AI and Automation",
      description:
        "Empower your business with cutting-edge AI and automation solutions that drive efficiency and innovation.",
      image: devTeamImage4,
      path: "/services/service-unavailable",
    },
    {
      number: "5",
      title: "Mobile App Development",
      description:
        "Build seamless high-performance mobile apps that connect, engage and grow your audience!",
      image: devTeamImage5,
      path: "/services/mobile-app-development",
    },
    {
      number: "6",
      title: "Custom Web Solutions",
      description:
        "Turn your ideas into stunning, high-performance websites that leave a digital footprint!",
      image: devTeamImage6,
      path: "/services/custom-web-solutions",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
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
            TAILORED DIGITAL SOLUTIONS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Our Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300">
              Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Enfera leads with excellence in every endeavor. We are committed to delivering superior quality products, always surpassing customer expectations.
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <div className="w-10 h-0.5 bg-blue-600 mr-4"></div>
            <span className="text-blue-600 font-bold uppercase tracking-wider">
              What We Offer
            </span>
            <div className="w-10 h-0.5 bg-blue-600 ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Excellence In Every Endeavor
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver innovative solutions tailored to your business needs,
            driving growth and success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              image={service.image}
              onClick={() => {
                if (service.path) {
                  navigate(service.path);
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 my-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">30+</div>
            <div className="text-blue-100 font-medium">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">92%</div>
            <div className="text-blue-100 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-blue-100 font-medium">Expert Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-blue-100 font-medium">Countries</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
