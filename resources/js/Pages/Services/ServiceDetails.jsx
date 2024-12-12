import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import BookingModal from "@/Components/BookingModal";

const ServiceDetails = ({ service }) => {
  // Generate the full URL for the image
  const imageUrl = `${window.location.origin}/${service.image}`;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AuthenticatedLayout>
      <Head title={service.name} />

      <div className="container mx-auto p-6">
        <div className="flex flex-col items-center">
          <img
            src={imageUrl}
            alt={service.name}
            className="w-full h-auto mb-6 rounded-lg object-contain"
            style={{ maxHeight: "400px" }} // Set a max height to maintain layout
          />
          <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{service.description}</p>
          <div className="flex flex-col md:flex-row md:justify-between w-full mb-6">
            <span className="text-2xl font-semibold text-green-600">
              ₱{service.price}
            </span>
            <span className="text-lg text-gray-600 mt-2 md:mt-0">
              Duration: {service.duration} minutes
            </span>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-200"
          >
            Book Now
          </button>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={service}
      />
    </AuthenticatedLayout>
  );
};

export default ServiceDetails;
