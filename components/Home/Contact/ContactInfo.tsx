import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex flex-col lg:gap-5 gap-3" >
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaPhone className="w-4 h-4 md:h-7 md:w-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Phone</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            <a href="tel:+919170612430">{contactData.phone}</a>
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-red-400 to-red-900 flex items-center justify-center flex-col">
          <FaEnvelope className="w-4 h-4 md:h-7 md:w-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Email</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            <a href="mailto:imamsadan009@gmail.com">{contactData.email}</a>
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-900 flex items-center justify-center flex-col">
          <FaMap className="w-4 h-4 md:h-7 md:w-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Address</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            <a href="https://maps.app.goo.gl/51dZ3seWAcqJJGCv7" target="_blank">
              {contactData.address}
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
