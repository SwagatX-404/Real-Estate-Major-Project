import React from 'react'
import { Link } from 'react-router-dom'
import {
  BsEnvelopeFill, BsFacebook, BsGeoAltFill, BsInstagram, BsLinkedin,
  BsTelephoneFill, BsTwitterX
} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer className="max-padd-container font-sans bg-zinc-950 text-gray-500 rounded-3xl shadow-md">
      {/* Glassmorphic Background */}
      <div className=" absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding Section */}

        <div className="flex flex-col items-center md:items-start">
          <Link to={'/'}>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              HomiX
            </h1>
          </Link>
          <p className="mt-4 font-medium text-center md:text-left text-gray-500">
          We are a modern real estate platform that simplifies the process of buying, selling, and renting properties. Our mission is to connect buyers, sellers, and renters with ease and transparency.          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-4 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Explore</h2>
          <ul className=" space-y-3 font-medium text-gray-600">
            <li>
              <a
                href="/"
                className="hover:text-blue-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-500 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-500 transition duration-300"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-500 transition duration-300"
                >Post Listing</a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-500 transition duration-300"
                >Blog</a>
            </li>
            
            <li>
              <a
                href="#"
                className="hover:text-indigo-500 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-500 transition duration-300"
                >FAQs</a>
            </li>
            
          </ul>
        </div>

        {/* Services Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-4 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Services</h2>
          <ul className="space-y-3 font-medium text-gray-600">
            <li>
              <a
                href="/"
                className="hover:text-blue-500 transition duration-300"
              >
                Buy Property
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-500 transition duration-300"
              >
                Rent Property
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-500 transition duration-300"
              >
                Sell Property
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-500 transition duration-300"
                >Privacy Policy</a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-500 transition duration-300"
                >Terms & Conditions</a>
            </li>
            
            <li>
              <a
                href="#"
                className="hover:text-indigo-500 transition duration-300"
              >
                Refund Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-500 transition duration-300"
                >Listing Guidelines</a>
            </li>
            
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div className="flex flex-col items-start md:items-start">
          <h2 className="text-xl font-bold mb-4 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Connect</h2>
          <p className="text-gray-700"> <BsEnvelopeFill className='inline-block mr-2' />Email: info@homix.com</p>
          <p className="text-gray-700 mb-2"><BsTelephoneFill className='inline-block mr-2' />Phone: +91 1234567890</p>
          <p className="text-gray-700 mb-5"><BsGeoAltFill className='inline-block mr-2' />Address: 123 HomiX St, Bhubaneswar, INDIA</p>

          <p className="text-gray-700 font-semibold text-lg">Follow us on:</p>

          <div className="flex mt-6 space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="text-xl w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/40 transition duration-300 flex items-center justify-center" >
              <BsFacebook />
            </a>

            <a href="#" className="text-xl w-10 h-10 rounded-full bg-purple-500/20 hover:bg-purple-500/40 transition duration-300 flex items-center justify-center" >
              <BsTwitterX />
            </a>

            <a href="#" className="text-xl w-10 h-10 rounded-full bg-pink-500/20 hover:bg-pink-500/40 transition duration-300 flex items-center justify-center" >
              <BsInstagram />
            </a>

            <a href="#" className="text-xl w-10 h-10 rounded-full bg-indigo-500/20 hover:bg-indigo-500/40 transition duration-300 flex items-center justify-center">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Futuristic Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center ">
        <p className="text-sm text-gray-500">
          Made with ❤️ by HomiX | © 2025 All rights reserved.
        </p>
        <p className="mt-2 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
          Innovating Real Estate Solutions
        </p>
      </div>
    </footer>
  )
}

export default Footer