/* eslint-disable no-unused-vars */
import React from 'react'
import logo from "../assets/logo-footer.png";
import { FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";
const Footer = () => {
    return (  
    
      <footer className="max-padd-container mt-10 bg-neutral-800 text-white rounded-2xl mb-3 p-4">
        <div className="max-padd-container sm:px-1 py-1 bg-neutral-800 rounded-lg">
          {/* Footer Content: Use flex for small screens and grid for larger screens */}
          <div className="max-padd-container flex flex-col items-center lg:grid lg:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div className="flex justify-center mb-6 lg:mb-0">
              <img src={logo} alt="logo" width={200} height={200} />
            </div>
  
            {/* Right-side Content (Useful Links, Connect with Us, Contact Us) */}
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 col-span-3">
              {/* Useful Links Section */}
              <div className="text-center lg:text-left">
                <p className="font-medium">Useful Links</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm">
                  <a href="https://www.broncooclothing.com/print-on-demand" className="hover:underline hover:opacity-75">Print On Demand</a>
                  <a href="https://www.broncooclothing.com/about-us" className="hover:underline hover:opacity-75">About Us</a>
                  <a href="https://www.broncooclothing.com/privacy-policy" className="hover:underline hover:opacity-75">Privacy Policy</a>
                  <a href="https://www.broncooclothing.com/return-exchange" className="hover:underline hover:opacity-75">Return & Exchange</a>
                  <a href="https://www.broncooclothing.com/terms-of-service" className="hover:underline hover:opacity-75">Terms of Service</a>
                </nav>
              </div>
  
              {/* Connect with Us Section */}
              <div className="text-center lg:text-left ">
                <p className="font-medium">Connect with Us</p>
                <div className="flex justify-center sm:justify-center md:justify-start mt-4 space-x-4 text-cyan-400">
                  {/* Facebook Icon */}
                  <a href="https://www.facebook.com/broncooclothing" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                    <FaFacebookSquare size={24} />
                  </a>
                  {/* Instagram Icon */}
                  <a href="https://www.instagram.com/broncooclothing" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                    <FaInstagramSquare size={24} />
                  </a>
                </div>
              </div>
  
              {/* Contact Us Section */}
              <div className="text-center lg:text-left">
                <p className="font-medium">Contact Us</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm">
                  <a href="tel:+923228666526" className="hover:opacity-75">Call Us : (+92) 322 8 666 526</a>
                  <a href="https://wa.me/+923228666526" className="hover:opacity-75">WhatsApp Us : (+92) 322 8 666 526</a>
                  <a href="mailto:info@broncooclothing.com" className="hover:opacity-75">Email Us : info@broncooclothing.com</a>
                </nav>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <p className="mt-8 text-xs text-center text-gray-400">
            &copy; 2024 MT Store, All rights reserved.
          </p>
        </div>
      </footer>
     
    );
  };

export default Footer