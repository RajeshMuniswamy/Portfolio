import React, { forwardRef } from "react";
import {
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { HiDocumentDownload } from "react-icons/hi";

const Contact = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className=" bg-[#ecf0f3] px-4 pt-4 md:pt-2 pb-16 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="text-center max-w-xl w-full mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Connect <span className="text-[#FF014F]">& Contact</span>
        </h1>

        <h3 className="text-lg md:text-xl text-gray-500 mb-6">
          Let's Connect and build something great!
        </h3>

        <p className="text-gray-700 mb-8">
          I'm currently <strong>open to new opportunities</strong> and would
          love to hear about your projects.
        </p>

        {/* Email */}
        <div className="flex justify-center mb-4">
          <a
            href="mailto:rajeshm841997@gmail.com"
            className="flex items-center gap-3 text-gray-700 hover:text-[#FF014F] transition"
          >
            <TfiEmail className="text-xl text-orange-500" />
            <span className="break-all">rajeshm841997@gmail.com</span>
          </a>
        </div>

        {/* Phone + WhatsApp */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4 text-gray-700">
          <a
            href="tel:+917975345223"
            className="flex items-center gap-2 hover:text-[#FF014F]"
          >
            <FaPhone className="text-xl text-teal-500" />
            <span>+91 7975345223</span>
          </a>

          <a
            href="https://wa.me/919986291699"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#25D366]"
          >
            <FaWhatsapp className="text-xl text-green-500" />
            <span>+91 9986291699</span>
          </a>
        </div>

        {/* Location */}
        <div className="flex justify-center items-center gap-2 mb-5 text-gray-700">
          <FaMapMarkerAlt className="text-xl text-blue-500" />
          <span>Bangalore, India</span>
        </div>

        {/* LinkedIn */}
        <div className="flex justify-center mb-5">
          <a
            href="https://www.linkedin.com/in/rajesh-m-a7bb78257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077b5] flex items-center gap-2"
          >
            <FaLinkedin />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>

        {/* Resume */}
        <div className="flex justify-center mb-5">
          <a
            href="RajeshM.pdf"
            download
            className="flex items-center gap-2 bg-[#FF014F] text-white px-6 py-3 rounded-lg hover:bg-[#e60045] transition shadow-md"
          >
            <HiDocumentDownload className="text-xl" />
            Download Resume
          </a>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm border-t pt-4 mt-4">
          ✨ Thanks for visiting my portfolio!
        </p>
      </div>
    </div>
  );
});

export default Contact;
