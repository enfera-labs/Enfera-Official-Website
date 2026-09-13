import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// 📸 Image Imports
import laptopImage from "../../assets/images/nordwood-themes-Cli7eZZzfyM-unsplash.jpg";
import teamImage from "../../assets/images/WhatsApp Image 2025-03-07 at 23.05.13 (2).jpeg";
import successImage from "../../assets/images/krakenimages-376KN_ISplE-unsplash.jpg";

// 🛠️ Technology Logos
import logoGo from "../../assets/images/Go-Logo_Blue.png";
import logoAndroid from "../../assets/images/android studio.png";
import logoCSharp from "../../assets/images/Csharp_Logo.png";
import logoCSS from "../../assets/images/css.png";
import logoDrive from "../../assets/images/google-drive-logo.webp";
import logoHTML from "../../assets/images/html.jpg";
import logoReact from "../../assets/images/react.webp";
import logoNode from "../../assets/images/logo_nodejs2x.png";
import logoPython from "../../assets/images/python.webp";
import logoMongo from "../../assets/images/mongodb-icon-1.svg";
import logoMySQL from "../../assets/images/mysql.svg";
import logoN8n from "../../assets/images/n8n.webp";
import logoJava from "../../assets/images/java-14-1.svg";
import logoPHP from "../../assets/images/new-php-logo.svg";
import logoDotNet from "../../assets/images/Microsoft_.NET_logo.png";
import logoCpp from "../../assets/images/c++.png";

export default function DedicatedDevelopmentTeam() {
  return (
    <>
      <Navbar />
      <div className="pt-20 pb-10 px-4 md:px-20 bg-white text-black">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-600 mb-4">
          Home &gt; Services &gt; Dedicated Development Teams
        </p>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src={laptopImage} 
              alt="Dedicated development team" 
              className="w-full rounded-2xl shadow-xl object-cover h-80 md:h-96"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Dedicated Development Teams
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              We help you build a high-performing team of developers, product designers, and data scientists, giving you the flexibility to scale and customize as needed.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Work with experts who bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-md hover:shadow-lg">
                Hire Your Team
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>

        {/* Team Collaboration Section */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-2xl mb-16 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src={teamImage} 
                alt="Team collaboration" 
                className="w-full rounded-xl shadow-lg object-cover h-80"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Expert Collaboration</h2>
              <p className="text-gray-700 mb-6">
                Building a successful digital product requires a skilled team of engineers, designers, and strategists. With us as your technology partner, you gain access to a dedicated team that has helped businesses thrive.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Hire Top Talent</h3>
                <p className="text-gray-700">
                  Assemble an elite team to build your software solutions so you can focus on what truly matters—growing your business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 rounded-2xl mb-16 shadow-sm">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src={successImage} 
                alt="Team success" 
                className="w-full rounded-xl shadow-lg object-cover h-80"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Scale & Succeed</h2>
              <p className="text-gray-700 mb-6">
                Launch products faster, scale on demand, and tap into industry-leading expertise to bring your ideas to market.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Full Control & Flexibility</h3>
                <p className="text-gray-700">
                  Whether it's your first or hundredth developer, your team grows with your needs customizable at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Powered by technology built for the future</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our teams leverage cutting-edge technologies to deliver robust, scalable solutions that stand the test of time.
          </p>

          {/* Icons Row 1 */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              {img: logoGo, name: "Go"},
              {img: logoAndroid, name: "Android"},
              {img: logoCSharp, name: "C#"},
              {img: logoCSS, name: "CSS"},
              {img: logoDrive, name: "Google Drive"},
              {img: logoHTML, name: "HTML"},
              {img: logoReact, name: "React"},
              {img: logoNode, name: "Node.js"},
            ].map((tech, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-center group"
              >
                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-20 h-20 flex items-center justify-center">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Icons Row 2 */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {img: logoPython, name: "Python"},
              {img: logoMongo, name: "MongoDB"},
              {img: logoMySQL, name: "MySQL"},
              {img: logoN8n, name: "n8n"},
              {img: logoJava, name: "Java"},
              {img: logoPHP, name: "PHP"},
              {img: logoDotNet, name: ".NET"},
              {img: logoCpp, name: "C++"},
            ].map((tech, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-center group"
              >
                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-20 h-20 flex items-center justify-center">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-center mb-16 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how our dedicated development teams can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition duration-300 shadow-lg">
              Get a Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}