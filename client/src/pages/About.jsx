import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white text-gray-800 py-10">
      {/* Hero Section */}
      <section className="text-center my-10">
        <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 shadow-lg">Welcome to Our Real Estate Platform</h1>
        <p className="mt-4 text-2xl text-gray-600 font-bold">Find your dream property with ease</p>
        <Link
          to="/search"
          className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Searching
        </Link>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Story</h2>
        <div className="flex flex-col sm:flex-row gap-8 mt-8">
          <div className="flex-1">
            <p className="text-lg font-semibold text-gray-700">
              Our journey began with a simple goal – to revolutionize the real estate experience. We aim to make it
              easier for people to find their perfect homes, whether for rent or sale. We are committed to transparency,
              innovation, and excellent customer service.
            </p>
            <p className="mt-4 text-lg font-semibold text-gray-700">
              What started as a small platform has grown into a trusted real estate service, serving thousands of
              users. We pride ourselves on offering an easy-to-use interface with real-time listings, AI-based
              recommendations, and secure transactions.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://img.freepik.com/premium-photo/real-estate-image-background-beautiful-house-front-view_800563-4682.jpg"
              alt="About Us"
              className="rounded-full shadow-lg object-cover w-full h-[300px]"
            />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="max-w-7xl mx-auto p-6 mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-800">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQHv0OsB7HQjqw/profile-displayphoto-shrink_200_200/B56ZWLER4gHoAc-/0/1741794911575?e=2147483647&v=beta&t=nmKbdnHe6gwJazBI3Vu0SWvrWO_F9O_EdCgFBlSXS38"
              alt="Team Member"
              className="rounded-full w-32 h-32 mx-auto object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">Swagat Murmu</h3>
            <p className="text-center text-gray-600">Founder & CEO</p>
            <p className="mt-4 text-center text-gray-700">
              Swagat over 10 years of experience in the real estate industry and is passionate about making real
              estate more accessible to everyone.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQEPGpM0mmRjPQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731681423492?e=1751500800&v=beta&t=m27bMELcMWVNxjEjh0Aop2TIHm_bN4T6EULfNWgyDPw"
              alt="Team Member"
              className="rounded-full w-32 h-32 mx-auto object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">Rituraj Das</h3>
            <p className="text-center text-gray-600">Co-Founder & CTO</p>
            <p className="mt-4 text-center text-gray-700">
              Rituraj leads the technology side of the platform, ensuring that we stay on the cutting edge of real
              estate technology.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQFdA35lpa-rzw/profile-displayphoto-shrink_200_200/B4EZZ8rdTGHYAY-/0/1745848490090?e=1751500800&v=beta&t=mMw5GgIgqmP98Kx1lo0oh75W4rdKGaApvxyFO9JI03I"
              alt="Team Member"
              className="rounded-full w-32 h-32 mx-auto object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">Shaswat Sh. Sahoo</h3>
            <p className="text-center text-gray-600">Head of Customer Service</p>
            <p className="mt-4 text-center text-gray-700">
              Shaswat is dedicated to providing excellent support to all of our users and helping them with any
              inquiries or issues.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
          <div className="flex flex-col md:flex-row gap-8 mt-8 justify-center">
            <div className="flex flex-col items-center">
              <div className="bg-purple-500 text-white p-6 rounded-full shadow-lg">
                <i className="fas fa-check-circle fa-3x"></i>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Transparency</h3>
              <p className="mt-2 text-gray-600">We offer honest and verified property listings for your peace of mind.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-purple-500 text-white p-6 rounded-full shadow-lg">
                <i className="fas fa-users fa-3x"></i>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Customer Support</h3>
              <p className="mt-2 text-gray-600">Our team is always available to assist you throughout your journey.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-purple-500 text-white p-6 rounded-full shadow-lg">
                <i className="fas fa-lock fa-3x"></i>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Security</h3>
              <p className="mt-2 text-gray-600">We prioritize the security of your data and ensure safe transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="max-w-7xl mx-auto p-6 mt-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800">What’s Next?</h2>
        <p className="mt-4 text-lg text-gray-600">
          We are constantly evolving. Stay tuned for exciting features such as AR/VR property tours, enhanced AI-based
          recommendations, and more.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-10">
        <Link
          to="/search"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Your Property Search Now
        </Link>
      </section>
    </div>
  );
};

export default About;
