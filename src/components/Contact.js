import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappNumber = '6285117369252'; // No WA tujuan tanpa tanda +
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const Contact = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 right-6 bottom-6"
      style={{ textDecoration: 'none' }}
      tabIndex={0}
    >
      <div
        className="flex items-center rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95 group px-4 py-4"
        style={{
          boxShadow: '0 4px 16px 0 rgba(44,183,66,0.18)',
          width: 'fit-content',
        }}
      >
        <FaWhatsapp className="text-white text-2xl transition-colors duration-200" />
        <span
          className="contact-label ml-2 text-white text-base font-medium whitespace-nowrap transition-all duration-200"
        >
          Contact Us
        </span>
      </div>
      <style>{`
        .group .contact-label {
          max-width: 0;
          opacity: 0;
          padding-left: 0;
          margin-left: 0;
          transition: all 0.3s cubic-bezier(.4,0,.2,1);
          overflow: hidden;
          display: inline-block;
          color: #fff !important;
        }
        .group:hover .contact-label,
        .group:focus-within .contact-label,
        .group:focus .contact-label {
          max-width: 120px;
          opacity: 1;
          margin-left: 0.5rem;
          padding-left: 0.25rem;
          color: #fff !important;
        }
      `}</style>
    </a>
  );
};

export default Contact;