import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-100/80 backdrop-blur-lg border-t border-base-content/10 shadow-md sticky">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
        {/* Left Section - Brand */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-wide text-primary">
            Design Store
          </span>
          <p className="opacity-70">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex gap-6 mt-3 md:mt-0">
          <Link to="#" className="hover:text-primary transition">
            <FaInstagram className="size-5" />
          </Link>
          <Link to="#" className="hover:text-primary transition">
            <FaFacebook className="size-5" />
          </Link>
          <Link to="https://wa.me/917255007803" target="_blank" className="hover:text-primary transition">
  <FaWhatsapp className="size-5" />
</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
