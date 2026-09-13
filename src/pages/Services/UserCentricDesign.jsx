import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Import all images
import teamImage from "../../assets/images/WhatsApp Image 2025-07-05 at 20.35.03_8c224cb8.jpg";
import workshopImage from "../../assets/images/WhatsApp Image 2025-07-05 at 20.35.03_e2e6c67d.jpg";
import designSystemImage from "../../assets/images/taras-shypka-iFSvn82XfGo-unsplash.jpg";
import consistencyImage from "../../assets/images/faizur-rehman-d7h4kZXmHhk-unsplash.jpg";
import futureDesignImage from "../../assets/images/note-thanun-GI10ZiPO_3w-unsplash.jpg";

// Import design tool icons
import figmaIcon from "../../assets/images/figma.png";
import photoshopIcon from "../../assets/images/adobe-photoshop-logos-adobe-icons-abstract-art-free-vector.jpg";
import illustratorIcon from "../../assets/images/Ai.png";
import Sketch from "../../assets/images/skecth.png";
import AdobeXD from "../../assets/images/adobexd.jpg";
import invision from "../../assets/images/invision.png";
// import zeplin from "../../assets/images/zeplin.png";

export default function UserCentricDesign() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-r from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              User-Centric Design
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We are a telemetry team dedicated to designing and developing
              innovative digital solutions across all platforms. From seamless
              user experience to important business practices, we help bring
              your ideas to the web with creativity and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="UI/UX Design"
              description="Delivering footprints, user-centric capabilities tailored to your brand identity, fostering functionality with aesthetics to create seamless interactions."
              image={teamImage}
            />
            <ServiceCard
              title="UI Workshops"
              description="We connect in-depth research to understand user benefits, performance, and expectations—ensuring every design solution enhances the user experience."
              image={workshopImage}
            />
            <ServiceCard
              title="Design Systems"
              description="Developing durable, valuable design systems that maintain brand consistency and streamline seamless access to your digital platform."
              image={designSystemImage}
            />
          </div>
        </div>
      </section>

      {/* Consistency & Efficiency Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ensuring Consistency & Efficiency
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A well-structured design system is the foundation of a successful
              digital product. We create cohesive, scalable solutions that
              enhance product accessibility, improve workflow efficiency, and
              provide a seamless user experience across all components.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <img
                src={consistencyImage}
                alt="Design system visualization"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="lg:w-1/2">
              <div className="bg-indigo-50 p-8 rounded-2xl mb-8 border-l-4 border-indigo-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Expert Collaboration
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert teams—Senior designers, researchers, and engineers
                  collaborate across your platform's services. Engine
                  Collaborative focuses on communicating transparency and
                  harnessing our ability to quickly deliver solutions.
                </p>
                <p className="text-gray-700">
                  Cost-free face better — from constantly expanding, we turn
                  your ideas into impactful, user-centric experiences. At
                  Drives, we craft leadership, engaging, and successful
                  organization—and just products.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-gray-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Collaborative UI: Problem-Solving
                </h3>
                <p className="text-gray-700">
                  Over the years, we've represented industries in a work startup
                  through collaborative workshops that align teams, identify
                  challenges, and drive innovation solutions. By engaging
                  stakeholders in human use activities, we gain deep insights
                  into user needs and business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Digital Experiences */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
            <div className="lg:w-1/2">
              <img
                src={futureDesignImage}
                alt="Future technology visualization"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Designing the Future of Digital Experiences
              </h2>
              <p className="text-gray-700 mb-6">
                At Drives, we merge AI, display, and technology to craft
                transformative experiences for customers. Working young is
                critical focusing on our goals as an online marketing solution,
                we guide our through every step.
              </p>
              <p className="text-gray-700">
                Our approach continues strategic design environments, take
                focused solutions, and facilitate development in agile and
                business goals.
              </p>

              <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                  Our Approach
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Human-centered design methodology</li>
                  <li>Data-driven decision making</li>
                  <li>Agile development integration</li>
                  <li>Continuous user feedback loops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tools Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Design Tools
          </h2>
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            We leverage industry-leading tools to create exceptional user
            experiences
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <ToolCard name="Figma" icon={figmaIcon} />
            <ToolCard name="Photoshop" icon={photoshopIcon} />
            <ToolCard name="Illustrator" icon={illustratorIcon} />
            <ToolCard name="Sketch" icon={Sketch} />
            <ToolCard name="AdobeXD" icon={AdobeXD} />
            <ToolCard name="InVision" icon={invision} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Experience?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let's collaborate to create user-centric designs that drive business
            results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition shadow-md hover:shadow-lg">
              Start a Project
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-indigo-700 px-8 py-4 rounded-lg font-bold text-lg transition">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ServiceCard Component
function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden h-full flex flex-col">
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

// ToolCard Component
function ToolCard({ name, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center group">
      <div className="bg-gray-100 rounded-xl w-20 h-20 mb-4 flex items-center justify-center">
        {icon ? (
          <img
            src={icon}
            alt={name}
            className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="text-2xl font-bold text-gray-400">
            {name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </div>
        )}
      </div>
      <h3 className="font-medium text-gray-900">{name}</h3>
    </div>
  );
}
