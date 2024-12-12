import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Welcome() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="bg-gray-100">
        <nav className="bg-hero px-4 sm:py-3 sm:px-20 shadow border-b border-white">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <a href="#" className="text-xl font-bold">
                  Lyx BeautyLine
                </a>
              </div>
              <div className="hidden md:flex justify-center flex-grow space-x-4">
                <a
                  href="#"
                  className="text-white bg-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-white bg-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-white bg-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-white bg-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
              {/* <div className="ml-auto">
                <a
                  href="#"
                  className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Get Started
                </a>
              </div> */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-700 hover:bg-gray-200 p-2 rounded-md focus:outline-none"
                >
                  {isMobileMenuOpen ? (
                    <svg
                      className="w- 6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden bg-yellow-200 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="bg-hero sm:pt-20 h-hero sm:h-smhero flex justify-center ">
          <div className="max-w-3xl ml-10 mt-20 sm:mt-0 sm:ml-20">
            <p className="text-1xl font-bold sm:text-4xl mb-8">
              Beauty• Expertise • Care • Passion
            </p>
            <h1 className="text-4xl mt-10 sm:text-7xl sm:mb-10 font-bold mb-4">
              Your Beauty, Our Passion
            </h1>
            <p className="text-lg font-semibold mb-20 mt-10 sm:mb-10">
              We enhance your natural beauty with services tailored to bring out
              your best.
            </p>
            <a
              href="login"
              className="bg-black hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium"
            >
              Sign Up
            </a>
          </div>
        </section>

        <section className="bg-gray-300" id="about">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div className="grid grid-rows-2 mx-6 sm:mx-10 gap-10">
              <div className="img1">
                <img src="welcome/image-20.png" alt="" />
              </div>
              <div className="img2">
                <img src="welcome/image-40.png" alt="" />
              </div>
            </div>
            <div className="text grid grid-rows-3 items-center justify-center mx-4">
              <p className="text-3xl font-bold">
                LOOKING FOR AFFORDABLE YET QUALITY SERVICES?
              </p>
              <p className="text-lg font-semibold">
                We believe that beauty should be both luxurious and accessible.
                More than just a salon, we are your one-stop destination for
                transformative beauty care. Our expert team is dedicated to
                providing a personalized experience that enhances your natural
                features, leaving you feeling confident and radiant. From
                hairstyling to skincare, experience quality and elegance in
                every touch.
              </p>
              <p className="text-lg font-medium">
                Join us at Lyx Beautyline, where your beauty journey begins with
                a touch of elegance and ends with a look you’ll love.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 text-white" id="services">
          <div className="container mx-auto flex flex-col gap-10 py-20 items-center">
            <p className="text-yellow-400 text-4xl sm:text-5xl font-extrabold">
              Our Services
            </p>
            <p className="text-xl sm:text-6xl">
              TREAT YOURSELF OF OUR BEST DEALS
            </p>
            <div className="grid grid-row-3 sm:grid-cols-3 gap-12">
              <img src="welcome/rectangle-140.png" alt="" />
              <img src="welcome/rectangle-150.png" alt="" />
              <img src="welcome/rectangle-130.png" alt="" />
            </div>
          </div>
        </section>

        <section className="bg-hero" id="contact">
          <div className="container mx-auto flex flex-col gap-10 py-10 items-center text-center">
            <p className="text-2xl sm:text-6xl font-bold">
              FIND YOUR NEAREST BRANCH
            </p>
            <p className="text-lg font-serif sm:text-xl">
              Visit any of our near locations to enjoy expert beauty treatments,
              friendly service, anda relaxing atmosphere.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              <div className="relative group">
                <img
                  src="welcome/rectangle-120.png"
                  alt="Your Image"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <p className="text-white text-3xl font-bold">IMUS BRANCH</p>
                    <p className="text-white text-xl mt-5 font-bold">
                      Beside Subaru Kymco Cars
                    </p>
                    <p className="text-white text-lg mt-5 font-bold">
                      9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="welcome/rectangle-80.png"
                  alt="Your Image"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <p className="text-white text-3xl font-bold">MAIN BRANCH</p>
                    <p className="text-white text-3xl font-bold">
                      (Dasmarinas, Cavite)
                    </p>
                    <p className="text-white text-xl mt-5 font-bold">
                      Infront of De La Salle University Gate 1
                    </p>
                    <p className="text-white text-lg mt-5 font-bold">
                      9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="welcome/rectangle-110.png"
                  alt="Your Image"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <p className="text-white text-3xl font-bold">
                      LUZVIMINDA BRANCH
                    </p>
                    <p className="text-white text-xl mt-5 font-bold">
                      Beside Western Union
                    </p>
                    <p className="text-white text-lg mt-5 font-bold">
                      9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="pt-9">
          <p className="text-4xl text-center font-bold">
            Ready To Elevate Your Beauty Routine?
          </p>
          <div className="text-white py-10 mx-auto bg-gray-700 grid grid-cols-1 gap-10 sm:grid-cols-2 mt-10 items-center">
            <div className="text-center">
              <p className="font-bold text-2xl">Lyx BeautyLine</p>
              <p className="text-xl font-serif">Your Beauty, Our Passion</p>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0 items-center justify-center">
              <a
                href="https://www.facebook.com/@BEAUTYLOUNGEbylyza/"
                target="_blank"
                className="hover:text-gray-400"
              >
                <FacebookIcon />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/lyx_beautyline/"
                target="_blank"
                className="hover:text-gray-400"
              >
                <InstagramIcon />
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
