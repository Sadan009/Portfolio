import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionHeading from "@/components/Helper/SectionHeading";

const Contact = () => {
  return (
    <div className="py-16 bg-[#050709]" id="contact">
      <SectionHeading>Contact Us</SectionHeading>
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-16">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
        {/* Contact info */}
        <div className="xl:mx-auto">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
