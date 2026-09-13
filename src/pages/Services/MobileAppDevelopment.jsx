// MobileAppDevelopment.jsx
import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Importing background images
import heroBg from '../../assets/images/photo-1599317193916-642a55564630.avif';
import iosBg from '../../assets/images/photo-1587831991059-40958cea9ca5.avif';
import androidBg from '../../assets/images/photo-1687168644714-3343aa9b5af8.avif';

// Importing framework icons
import dartIcon from '../../assets/images/dart.png';
import postgresIcon from '../../assets/images/Postgresql_elephant.svg.png';
import springbootIcon from '../../assets/images/springboot.png';
import javaIcon from '../../assets/images/java-14-1.svg';
import androidStudioIcon from '../../assets/images/android studio.png';
import mysqlIcon from '../../assets/images/mysql.svg';
import csharpIcon from '../../assets/images/Csharp_Logo.png';
import goIcon from '../../assets/images/Go-Logo_Blue.png';
import dotnetIcon from '../../assets/images/Microsoft_.NET_logo.png';
import cppIcon from '../../assets/images/c++.png';

const MobileAppDevelopment = () => {
  // Technology ecosystem data
  const techCompanies = [
    { company: 'Perfake', services: 'Undefined Environment Teams' },
    { company: 'Blue', services: 'Total created hostages' },
    { company: 'Alone Kit', services: 'All real Advertising' },
    { company: 'Connect Us', services: 'Type Point Software' },
    { services: 'Mobile App Development' },
    { services: 'Custom Web Solutions' },
  ];

  // Technology icons
  const techIcons = [
    { name: 'Dart', icon: dartIcon },
    { name: 'PostgreSQL', icon: postgresIcon },
    { name: 'Spring Boot', icon: springbootIcon },
    { name: 'Java', icon: javaIcon },
    { name: 'Android Studio', icon: androidStudioIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'C#', icon: csharpIcon },
    { name: 'Go', icon: goIcon },
    { name: '.NET', icon: dotnetIcon },
    { name: 'C++', icon: cppIcon },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Mobile App Development
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Develop high-quality mobile applications tailored to market needs, seamless user experiences, and your projects' vision. Let our experts help you build the next big thing in mobile.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1 shadow-lg">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Build High-Impact Mobile Apps with Strategy, Design & Technology
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
            <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform transition duration-500 hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="mr-4 bg-blue-100 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Cross-Platform Development</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Develop cost-effective, cross-platform mobile applications that provide native-site experiences while reaching a broader audience across multiple operating systems.
              </p>
              <div className="bg-gray-50 p-5 rounded-xl">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <p className="text-gray-700">Reach both iOS and Android users with a single codebase</p>
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <p className="text-gray-700">Faster development cycles and reduced costs</p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <p className="text-gray-700">Consistent UI/UX across all platforms</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform transition duration-500 hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="mr-4 bg-blue-100 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Powering Innovation with Versatile Mobile Solutions</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                If you're a fast-growing business looking to build native apps, hybrid apps, cross-platform apps, or progressive web apps, you're in the right place. Let's collaborate and bring your mobile vision to life.
              </p>
              <div className="bg-gray-50 p-5 rounded-xl">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <p className="text-gray-700">Tailored solutions for your specific business needs</p>
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <p className="text-gray-700">Cutting-edge technologies for innovative solutions</p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <p className="text-gray-700">Scalable architecture for future growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future-Proof Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Future-Proof Your Mobile App with Technology That Scales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <strong className="text-blue-600">Bet on mobile app technologies that serve you well today and support your growth as you scale 10x.</strong>
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* iOS Development */}
            <div className="lg:w-1/2 flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:w-2/5 relative">
                <div 
                  className="h-full min-h-[300px]"
                  style={{
                    backgroundImage: `url(${iosBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white py-1 px-4 rounded-full text-sm font-bold">
                  iOS Development
                </div>
              </div>
              <div className="md:w-3/5 p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">iOS App Development</h3>
                <p className="text-gray-600 mb-6">
                  Develop next-generation iOS apps with precision-engineered, future-ready solutions. Our expert iOS development team ensures high-performance, quality-tested applications that elevate user experiences.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Swift and Objective-C development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Apple Design Guidelines compliance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">App Store submission support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">ARKit for augmented reality experiences</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Android Development */}
            <div className="lg:w-1/2 flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:w-2/5 relative">
                <div 
                  className="h-full min-h-[300px]"
                  style={{
                    backgroundImage: `url(${androidBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="absolute top-4 left-4 bg-green-600 text-white py-1 px-4 rounded-full text-sm font-bold">
                  Android Development
                </div>
              </div>
              <div className="md:w-3/5 p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Android App Development</h3>
                <p className="text-gray-600 mb-6">
                  Leverage the full potential of the Android ecosystem with tailor-made apps designed for seamless compatibility across diverse devices and brands.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Kotlin and Java development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Material Design implementation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Play Store optimization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Device fragmentation management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Ecosystem */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive technology stack for building cutting-edge mobile applications
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Technology Icons Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Our Technology Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {techIcons.map((tech, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-gray-50 p-4 rounded-xl mb-4 w-20 h-20 flex items-center justify-center">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-medium text-gray-800 text-center">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
          
          {/* Companies Table */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Our Partners & Services
            </h3>
            <div className="overflow-x-auto rounded-2xl shadow-xl">
              <table className="min-w-full bg-white">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-5 px-6 text-left font-bold uppercase text-lg">Company</th>
                    <th className="py-5 px-6 text-left font-bold uppercase text-lg">Our Services</th>
                  </tr>
                </thead>
                <tbody>
                  {techCompanies.map((item, index) => (
                    <tr 
                      key={index} 
                      className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}
                    >
                      <td className="py-4 px-6 border-b border-gray-200 text-gray-700 font-medium">
                        {item.company}
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200 text-gray-700">
                        {item.services}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our experts help you build the next big thing in mobile. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1 shadow-lg">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;