import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiSmartphone,
  FiBarChart2,
  FiShield,
  FiLayers,
  FiArrowRight,
  FiTrendingUp,
} from 'react-icons/fi';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Images
import erpMobileAppImage from '../../assets/images/1_l5HrHYMWBBQDUoBBhm5VEg.png';
import orlandoMain from '../../assets/images/orlando-erp-main.png';
import orlandoPayroll from '../../assets/images/orlando-erp-payroll.png';
import orlandoStaff from '../../assets/images/orlando-erp-staff.png';
import multiAccountBankingImage from '../../assets/images/multi-account-banking.png';

const Portfolio = () => {

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
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
            OUR RECENT WORK & CASE STUDIES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300">
              Portfolio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Explore our innovative solutions that showcase our expertise in creating exceptional enterprise software and mobile digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-3.5 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 font-bold py-3.5 px-8 rounded-full transition duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-blue-500 mr-4"></div>
              <span className="text-blue-600 font-bold uppercase tracking-wider">SHOWCASE</span>
              <div className="w-12 h-0.5 bg-blue-500 ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Latest Projects We've Completed
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our real-world software applications engineered for automated business growth, inventory control, and enterprise management.
            </p>
          </div>

          {/* Featured Showcase Project 1: Enterprise ERP Mobile Application */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 bg-gradient-to-br from-orange-50/90 via-white to-amber-50/60 rounded-3xl border border-orange-100/90 shadow-2xl p-6 sm:p-10 lg:p-14 relative overflow-hidden"
          >
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Info Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-orange-700 border border-orange-200 inline-flex items-center gap-1.5 shadow-sm">
                    <FiSmartphone size={14} /> FEATURED MOBILE SOLUTION
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Active Production
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Enterprise ERP Mobile Application
                </h3>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                  A high-performance enterprise mobile application suite crafted to simplify multi-warehouse business management, user authorization, and real-time operational analytics for growing organizations.
                </p>

                {/* Key Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-orange-100 shadow-sm">
                    <FiTrendingUp className="text-orange-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase">Live Analytics</h4>
                      <p className="text-xs text-gray-600">Weekly & monthly revenue reports</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-orange-100 shadow-sm">
                    <FiLayers className="text-orange-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase">Product Modules</h4>
                      <p className="text-xs text-gray-600">Stockpile, Lunar & Aquila suites</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-orange-100 shadow-sm">
                    <FiShield className="text-orange-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase">User Auth Control</h4>
                      <p className="text-xs text-gray-600">Role-based admin permissions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-orange-100 shadow-sm">
                    <FiBarChart2 className="text-orange-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase">Multi-Warehouse</h4>
                      <p className="text-xs text-gray-600">Cross-company asset visibility</p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
                    Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-900 text-white">React Native</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">Node.js API</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-600 text-white">PostgreSQL</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-600 text-white">AWS Cloud</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-600 text-white">Real-Time Charts</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 text-white font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-95 transition-all group"
                  >
                    <span>Request Similar Solution</span>
                    <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Image Mockup Column */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                  <img
                    src={erpMobileAppImage}
                    alt="Enterprise ERP Mobile Application Showcase"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white text-xs font-semibold bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                      📱 Live ERP Mobile Interface Mockup
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Showcase Project 2: Orlando Enterprise ERP Platform */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/60 rounded-3xl border border-indigo-100/90 shadow-2xl p-6 sm:p-10 lg:p-14 relative overflow-hidden"
          >
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600" />

            <div className="space-y-10">
              {/* Info Header Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 border border-indigo-200 inline-flex items-center gap-1.5 shadow-sm">
                      <FiLayers size={14} /> WEB ENTERPRISE ERP
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200">
                      Active Production System
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    Orlando Enterprise ERP Platform
                  </h3>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal max-w-4xl">
                    Orlando ERP simplifies complex operations, bringing payroll, budgeting, logistics, and procurement into one intuitive system. A clean interface, real-time data visualization, and structured workflows make managing business processes effortless. Designed for clarity and efficiency, it helps teams make smarter decisions faster.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
                      Technologies Used:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-900 text-white">React / Next.js</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">Node.js Microservices</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-600 text-white">PostgreSQL</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-600 text-white">Financial Analytics</span>
                    </div>
                  </div>

                  <div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-95 transition-all group"
                    >
                      <span>Request Similar ERP Platform</span>
                      <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* 3 Dashboard Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white group hover:shadow-2xl transition-all duration-300">
                  <div className="overflow-hidden">
                    <img
                      src={orlandoMain}
                      alt="Orlando ERP Dashboard Overview"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm">Main Dashboard Overview</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Real-time income, budget history & vouchers</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white group hover:shadow-2xl transition-all duration-300">
                  <div className="overflow-hidden">
                    <img
                      src={orlandoPayroll}
                      alt="Orlando ERP Payroll & Salary"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm">Payroll & Salary Breakdown</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Annual summaries, net salaries & tax tracking</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white group hover:shadow-2xl transition-all duration-300">
                  <div className="overflow-hidden">
                    <img
                      src={orlandoStaff}
                      alt="Orlando ERP Staff Directory"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm">Staff & Operations Directory</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Employee search, role permissions & designations</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Showcase Project 3: Multi-Account Banking & FinTech Mobile App */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 rounded-3xl border border-emerald-100/90 shadow-2xl p-6 sm:p-10 lg:p-14 relative overflow-hidden"
          >
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Info Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1.5 shadow-sm">
                    <FiSmartphone size={14} /> FINTECH & BANKING APP
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200">
                    Active Production App
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Multi-Account Banking & FinTech Application
                </h3>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                  The primary pain point in multi-account banking is the mental math. We designed the home screen around one number, your total balance. Fiat, savings, and crypto all rolled into a single figure at the top, with individual accounts as simple line items underneath. The credit card sits directly below with total due and a one-tap pay button. Recent activity at the bottom with categories and timestamps. Total financial position first, active debt second, recent transactions third. Everything else is one tap away.
                </p>

                {/* Key Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-emerald-100 shadow-sm">
                    <FiTrendingUp className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase">Unified Total Balance</h4>
                      <p className="text-xs text-gray-600">Fiat, savings & crypto in one view</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-emerald-100 shadow-sm">
                    <FiBarChart2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase">One-Tap Card Pay</h4>
                      <p className="text-xs text-gray-600">Instant credit due view & pay button</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-emerald-100 shadow-sm">
                    <FiShield className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase">Rewards & Leveling</h4>
                      <p className="text-xs text-gray-600">Gamified points, NFTs & passes</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-emerald-100 shadow-sm">
                    <FiLayers className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase">Categorized Activity</h4>
                      <p className="text-xs text-gray-600">Real-time feeds with timestamps</p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
                    Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-600 text-white">Flutter</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-600 text-white">Supabase</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-600 text-white">PostgreSQL</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-900 text-white">REST & WebSockets</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-teal-600 text-white">FinTech Encryption</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-95 transition-all group"
                  >
                    <span>Request Similar FinTech App</span>
                    <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Image Mockup Column */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                  <img
                    src={multiAccountBankingImage}
                    alt="Multi-Account Banking Mobile Application Showcase"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white text-xs font-semibold bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                      💳 Live Multi-Account Banking & Rewards Interface Mockup
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 mb-16 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-blue-100 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">92%</div>
                <div className="text-blue-100 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100 font-medium">Expert Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-blue-100 font-medium">Countries</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="md:flex items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Ready to Build Your Custom Software Solution?
                </h3>
                <p className="text-gray-600 mb-6 max-w-xl text-sm sm:text-base leading-relaxed">
                  Contact Enfera IT Solutions today to discuss your business automation, mobile app, or web platform requirements with our engineering leaders.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg text-center"
                  >
                    Schedule a Consultation
                  </Link>
                  <Link
                    to="/services"
                    className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition duration-300 text-center"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block">
                <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 h-full flex items-center justify-center p-12 text-white">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center">
                    <FiSmartphone className="h-14 w-14 mx-auto mb-3 text-blue-200" />
                    <h4 className="text-xl font-bold">Let's Build Something Amazing</h4>
                    <p className="text-xs text-blue-100 mt-2">
                      Custom Web Apps • Mobile Solutions • ERP Platforms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;