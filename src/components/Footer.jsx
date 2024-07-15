import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebook size={24} />, url: "" },
  { icon: <FaTwitter size={24} />, url: "" },
  { icon: <FaInstagram size={24} />, url: "" },
  { icon: <FaLinkedin size={24} />, url: "" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container px-4 lg:px-20 py-2 flex justify-center items-center">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full">
          <div className="flex flex-col-reverse lg:flex-row justify-start items-center gap-2 lg:gap-4 mt-4 lg:mt-0">
            <p className="text-sm lg:text-base">
              &copy; {new Date().getFullYear()} Dreel.Co | All rights reserved
            </p>
            <div className="flex justify-start items-center gap-2 text-sm lg:text-base">
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.icon.props["aria-label"]}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
