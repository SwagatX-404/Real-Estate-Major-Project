import React from 'react'
import { Link } from 'react-router-dom'
import {
  BsEnvelopeFill, BsFacebook, BsGeoAltFill, BsInstagram, BsLinkedin,
  BsTelephoneFill, BsTwitterX
} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer className="max-padd-container bg-white text-gray-700 rounded-3xl shadow-md">
      {/* Glassmorphic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding Section */}

        <div className="flex flex-col items-center md:items-start">
          <Link to={'/'}>
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              KeyZo
            </h1>
          </Link>
          <p className="mt-4 text-center md:text-left text-gray-700">
            Leading the future of real estate and bookings. Discover, list, and book with ease.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-center">
          <h2 className="text-xl font-bold mb-4 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Explore</h2>
          <ul className="space-y-3">
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
                className="hover:text-indigo-500 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Connect</h2>
          <p className="text-gray-700"> <BsEnvelopeFill className='inline-block mr-2' />Email: info@keyzo.com</p>
          <p className="text-gray-700 mb-2"><BsTelephoneFill className='inline-block mr-2' />Phone: +91 1234567890</p>

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
          Made with ❤️ by KeyZo | © 2025 All rights reserved.
        </p>
        <p className="mt-2 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
          Innovating Real Estate Solutions
        </p>
      </div>
    </footer>
  )
}

export default Footer