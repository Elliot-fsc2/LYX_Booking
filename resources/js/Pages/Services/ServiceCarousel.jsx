import React, { useState } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

const servicesData = {
  recommended: [
    {
      title: "Service 1",
      description: "Description of Service 1",
      icon: <LocalOfferIcon />,
    },
    {
      title: "Service 2",
      description: "Description of Service 2",
      icon: <RoomServiceIcon />,
    },
    {
      title: "Service 3",
      description: "Description of Service 3",
      icon: <BookmarksIcon />,
    },
  ],
  hot: [
    {
      title: "Service 4",
      description: "Description of Service 4",
      icon: <LocalOfferIcon />,
    },
    {
      title: "Service 5",
      description: "Description of Service 5",
      icon: <RoomServiceIcon />,
    },
    {
      title: "Service 6",
      description: "Description of Service 6",
      icon: <BookmarksIcon />,
    },
  ],
  hair: [
    {
      title: "Hair Service 1",
      description: "Description of Hair Service 1",
      icon: <LocalOfferIcon />,
    },
    {
      title: "Hair Service 2",
      description: "Description of Hair Service 2",
      icon: <RoomServiceIcon />,
    },
    {
      title: "Hair Service 3",
      description: "Description of Hair Service 3",
      icon: <BookmarksIcon />,
    },
  ],
};

const Carousel = ({ title, services }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="relative">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <div className="flex items-center mb-2">
                {service.icon}
                <h5 className="ml-2 text-2xl font-bold tracking-tight text-gray-900">
                  {service.title}
                </h5>
              </div>
              <p className="font-normal text-gray-700">{service.description}</p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

const ServiceCarousel = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Hot Deals</h2>
      <Carousel
        title="Recommended Services"
        services={servicesData.recommended}
      />
      <Carousel title="Hot Services" services={servicesData.hot} />
      <Carousel title="Hair Services" services={servicesData.hair} />
    </div>
  );
};

export default ServiceCarousel;
