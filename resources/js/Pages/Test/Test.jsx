// src/App.js
import React, { useState } from "react";
import Modal from "@/Components/BookingModal";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
    // You can handle the form data here (e.g., send it to an API)
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
