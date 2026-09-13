import { motion } from "framer-motion";
import { FiLinkedin } from "react-icons/fi";
import CountUp from "react-countup";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import dev2 from "../../assets/images/eranga.png";

import hasitha from "../../assets/images/Hasitha.jpg";
import Pamuda from "../../assets/images/Pamuda.jpg";
import Imasha from "../../assets/images/Imasha.jpg";
import Himashi from "../../assets/images/Himashi.jpg";
import Hashini from "../../assets/images/Hashini.jpg";
import missionImage from "../../assets/images/photo-1681949101473-9aea8b928a55.avif";
import Sachintha from "../../assets/images/WhatsApp Image 2025-07-06 at 19.08.51_685e65c5.jpg";
import Nimsara from "../../assets/images/Screenshot 2025-07-06 191049.png";
import Nimesh from "../../assets/images/WhatsApp Image 2025-07-06 at 19.21.23_e1e93901.jpg";

// E:\company projects\EnFera web site\Enfera\Enfera_v1\src\assets\images\photo-1681949101473-9aea8b928a55.avif
export default function About() {
  const teamMembers = [
    {
      src: hasitha,
      name: "Hasitha Sandeep",
      role: "Chief Technology Officer (CTO)",
      description:
        "Driving technology innovation, software architecture, and engineering excellence to deliver scalable, secure, and future-ready solutions.",
      social: ["linkedin-in", "github", "twitter"],
    },
    {
      src: Himashi,
      name: "Himasha Gimhani",
      role: "Operations Manager",
      description:
        "Overseeing daily operations, project execution, and team coordination to ensure efficient service delivery and outstanding client satisfaction.",
      social: ["linkedin-in", "twitter"],
    },
    {
      src: Imasha,
      name: "Imasha Williams",
      role: "Service Delivery Manager",
      description:
        "Ensuring seamless project delivery by coordinating teams, optimizing processes, and delivering high-quality solutions that exceed client expectations.",
      social: ["linkedin-in", "instagram"],
    },
    {
      src: Pamuda,
      name: "Pamuda Goonathilake",
      role: "Head of Quality Assurance",
      description:
        "Leading quality assurance initiatives to ensure every solution meets the highest standards of performance, reliability, and customer satisfaction.",
      social: ["linkedin-in", "github"],
    },
    {
      src: Nimesh,
      name: "Nimesh Shaminda",
      role: "Client Relationship Manager",
      description:
        "Building strong client partnerships through effective communication, personalized support, and a commitment to long-term business success.",
      social: ["linkedin-in", "behance"],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
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
            INNOVATION & EXCELLENCE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300">
              ENFERA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Your trusted software development partner, delivering innovative and tailored digital solutions.
          </motion.p>
        </div>
      </div>

      {/* The Story Behind Enfera IT Solutions Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-indigo-100/60 via-blue-50/50 to-white relative overflow-hidden">
        {/* Soft Background Ambient Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-400/15 via-indigo-400/15 to-purple-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/90 shadow-2xl p-8 sm:p-14 relative overflow-hidden group hover:shadow-blue-500/10 transition-all duration-500"
          >
            {/* Top Subtle Light Bar Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />

            <div className="mb-6">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-600 border border-blue-200/80 inline-block shadow-sm">
                OUR JOURNEY & VISION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight leading-tight">
              The Story Behind{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Enfera IT Solutions
              </span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              <p>
                <strong className="text-gray-900 font-semibold">Enfera IT Solutions</strong> was founded in <strong className="text-blue-700 font-semibold">2024</strong> with a clear vision: <strong className="text-blue-700 font-semibold">to empower businesses through innovative digital solutions that drive sustainable growth.</strong> From the beginning, our goal has been more than developing software—we strive to transform the way businesses operate by simplifying complex processes, increasing efficiency, and helping organizations make smarter decisions.
              </p>

              <p>
                We believe that technology should solve real business challenges. That's why our primary focus is on <strong className="text-blue-700 font-semibold">business process automation</strong>, eliminating repetitive manual work, reducing unnecessary operational costs, and improving productivity. Every solution we build is designed to help businesses increase profitability, strengthen daily operations, and gain better visibility into their performance through intelligent dashboards and real-time insights.
              </p>

              <p>
                At Enfera IT Solutions, we also understand the importance of protecting business assets. Our systems are designed to minimize product losses, prevent unauthorized activities, improve inventory control, and reduce the risks associated with side-business operations and operational inefficiencies. By providing accurate data and transparent reporting, we help business owners maintain full control over their operations.
              </p>

              <p>
                Today, we deliver modern <strong className="text-gray-900 font-semibold">web applications, mobile applications, POS systems, cloud solutions, business management platforms, AI-powered solutions, and custom enterprise software</strong> for businesses across multiple industries. Every project is built with a commitment to quality, security, scalability, and long-term value.
              </p>

              <p className="pt-2 border-t border-gray-100">
                The name <strong className="text-gray-900 font-semibold">Enfera IT Solutions</strong> represents our dedication to creating reliable technology that helps businesses grow with confidence. We believe that every business, regardless of its size, deserves access to smart, affordable, and innovative digital solutions that support long-term success. As we continue to grow, our mission remains the same: <strong className="text-blue-700 font-semibold">to become a trusted technology partner that helps businesses automate operations, reduce costs, protect valuable assets, and achieve sustainable growth through innovation.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leader Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white py-20"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            <img
              src={dev2}
              alt="Eranga Madushan"
              className="rounded-full w-64 h-64 sm:w-72 sm:h-72 shrink-0 object-cover border-4 border-blue-600 shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                A Word from Our Leader
              </h2>
              <p className="text-base sm:text-xl text-gray-700 italic leading-relaxed mb-5">
                "At ENFERA, we empower businesses with AI-driven automation and
                cutting-edge web solutions. Our mission is to help companies
                streamline operations, boost sales, and stay ahead in the
                digital era. From intelligent automation to custom web
                development, we deliver innovative solutions that drive growth
                and efficiency."
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-gray-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Eranga Madushan
                  </h3>
                  <p className="text-blue-600 text-base sm:text-lg font-bold tracking-wide mt-0.5">
                    Founder & CEO, ENFERA
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/eranga-madushan"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full bg-[#0a66c2] hover:bg-[#004182] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 group shrink-0"
                  >
                    <FiLinkedin size={18} className="group-hover:scale-110 transition-transform" />
                    <span>Connect on LinkedIn</span>
                  </a>

                  {/* LinkedIn Followers Animated Counting Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-900 shadow-sm text-sm font-medium">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                    </span>
                    <span className="font-bold text-blue-700">
                      <CountUp end={5000} duration={3} separator="," suffix="+" />
                    </span>
                    <span className="text-gray-600 text-xs sm:text-sm">LinkedIn Followers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mission, Vision, Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100"
      >
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              We are Enfera, a global software development company leveraging AI
              to craft tailored solutions with speed and precision. Our
              commitment goes beyond technology—we prioritize building lasting
              trust with our clients through innovation and reliability.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={missionImage}
              alt="Mission"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To drive meaningful change through technology and help businesses
              scale, adapt, and lead in their industries. Enfera envisions a
              world where digital innovation becomes a bridge to success.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Leaders</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            The visionary leaders at Enfera who drive innovation, operational excellence, and lasting client partnerships.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
                    <img
                      src={member.src}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {member.description}
                    </p>
                    <div className="flex justify-center space-x-3">
                      {member.social.map((platform, i) => (
                        <a
                          key={i}
                          href="#"
                          className="text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <i className={`fab fa-${platform}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={30} duration={3} suffix="+" />
                </div>
                <div className="text-blue-100">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={92} duration={3} suffix="%" />
                </div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={15} duration={3} suffix="+" />
                </div>
                <div className="text-blue-100">Expert Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={5} duration={3} suffix="+" />
                </div>
                <div className="text-blue-100">Countries</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
