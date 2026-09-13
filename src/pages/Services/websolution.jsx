import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


// Import images
import heroImage from "../../assets/images/linus-mimietz-gvptKmonylk-unsplash.jpg";
import architectureImage from "../../assets/images/domenico-loia-hGV2TfOh0ns-unsplash.jpg";
import expertiseImage from "../../assets/images/photo-1525547719571-a2d4ac8945e2.avif";

// Import technology icons
import logoGo from "../../assets/images/Go-Logo_Blue.png";
import logoCSS from "../../assets/images/css.png";
import logoHTML from "../../assets/images/html.jpg";
import logoReact from "../../assets/images/react.webp";
import logoNode from "../../assets/images/logo_nodejs2x.png";
import logoPython from "../../assets/images/python.webp";
import logoMongo from "../../assets/images/mongodb-icon-1.svg";
import logoMySQL from "../../assets/images/mysql.svg";
import logoJava from "../../assets/images/java-14-1.svg";
import logoPHP from "../../assets/images/new-php-logo.svg";
import logoDotNet from "../../assets/images/Microsoft_.NET_logo.png";
import logoCpp from "../../assets/images/c++.png";

export default function CustomWebSolutions() {
  // Technology data
  const frontendTech = [
    { name: "HTML5", icon: logoHTML },
    { name: "CSS3", icon: logoCSS },
    { name: "React.js", icon: logoReact },
  ];
  
  const backendTech = [
    { name: "Node.js", icon: logoNode },
    { name: "Go", icon: logoGo },
    { name: "Python", icon: logoPython },
    { name: "Java", icon: logoJava },
    { name: "PHP", icon: logoPHP },
    { name: ".NET", icon: logoDotNet },
    { name: "C++", icon: logoCpp },
  ];
  
  const databaseTech = [
    { name: "MongoDB", icon: logoMongo },
    { name: "MySQL", icon: logoMySQL },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Custom Web Solutions
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Partner with experienced full-stack developers and product specialists to craft high-performing web applications that evolve with your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md hover:shadow-lg">
                Start a Project
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition">
                View Case Studies
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Custom Web Development" 
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-xl">
                <p className="font-bold">10+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-16 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <img 
                src={architectureImage} 
                alt="Robust & Scalable Solutions" 
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Architecting Robust & Scalable Solutions
              </h2>
              <p className="text-gray-700 mb-6">
                We design architectures that can test critical operations, seamlessly integrating with existing systems or developing custom solutions from scratch.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  Transform Your Vision into a Competitive Advantage
                </h3>
                <p className="text-gray-700">
                  With the right approach, unlock new revenue streams through rapid prototyping, a dedicated team, and world-class development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
            <div className="lg:w-1/2">
              <img 
                src={expertiseImage} 
                alt="Industry-Grade Solutions" 
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Leverage Our Expertise in Building Industry-Grade Solutions
              </h2>
              <p className="text-gray-700 mb-6">
                We start by understanding your business needs, then assembling a team of in-house specialists. From discovery and consulting to development and deployment support, we've got you covered—every aspect, every angle.
              </p>
              
              <div className="bg-white p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                  A Strategy-First, Value-Driven Approach
                </h3>
                <p className="text-gray-700">
                  Our solutions focus on delivering tangible value. We collaborate with you at every stage—from defining your strategy to scaling systems that drive real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Framework Section */}
      <section className="py-16 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Technology Framework
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            We leverage cutting-edge technologies to build robust, scalable web solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Frontend Technologies */}
            <div className="bg-blue-50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-600 mb-6 pb-2 border-b border-blue-200">
                Frontend Technologies
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {frontendTech.map((tech, index) => (
                  <TechCard key={index} name={tech.name} icon={tech.icon} />
                ))}
              </div>
            </div>
            
            {/* Backend Technologies */}
            <div className="bg-indigo-50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-indigo-600 mb-6 pb-2 border-b border-indigo-200">
                Backend Technologies
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {backendTech.map((tech, index) => (
                  <TechCard key={index} name={tech.name} icon={tech.icon} />
                ))}
              </div>
            </div>
            
            {/* Database Technologies */}
            <div className="bg-purple-50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-purple-600 mb-6 pb-2 border-b border-purple-200">
                Database Technologies
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {databaseTech.map((tech, index) => (
                  <TechCard key={index} name={tech.name} icon={tech.icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Full Technology Stack</h2>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto mb-12">
            Our comprehensive technology stack enables us to build solutions for any industry challenge
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TechCardLarge name="React" icon={logoReact} />
            <TechCardLarge name="Node.js" icon={logoNode} />
            <TechCardLarge name="Python" icon={logoPython} />
            <TechCardLarge name="Java" icon={logoJava} />
            <TechCardLarge name="Go" icon={logoGo} />
            <TechCardLarge name="MongoDB" icon={logoMongo} />
            <TechCardLarge name="MySQL" icon={logoMySQL} />
            <TechCardLarge name="HTML5" icon={logoHTML} />
            <TechCardLarge name="CSS3" icon={logoCSS} />
            <TechCardLarge name="PHP" icon={logoPHP} />
            <TechCardLarge name=".NET" icon={logoDotNet} />
            <TechCardLarge name="C++" icon={logoCpp} />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

// Technology Card Component
function TechCard({ name, icon }) {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition">
      <div className="bg-white p-2 rounded-lg mb-2 w-16 h-16 flex items-center justify-center">
        <img 
          src={icon} 
          alt={name} 
          className="w-10 h-10 object-contain"
        />
      </div>
      <h3 className="text-sm font-medium text-gray-700 text-center">{name}</h3>
    </div>
  );
}

// Large Technology Card Component
function TechCardLarge({ name, icon }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-opacity-20 transition duration-300">
      <div className="bg-white bg-opacity-20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
        <img 
          src={icon} 
          alt={name} 
          className="w-10 h-10 object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
}