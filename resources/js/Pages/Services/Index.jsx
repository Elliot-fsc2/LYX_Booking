import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import ServiceCard from "@/Components/ServiceCard";
import { router } from "@inertiajs/react";

export default function Index({ hairServices }) {
  const handleActionClick = (serviceId) => {
    router.get(route("services.show", serviceId));
  };
  return (
    <AuthenticatedLayout>
      <Head title="Services" />

      <h1 className="text-3xl font-bold text-center mb-10 font-open-sans">
        All Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-8">
        {hairServices.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.name}
            description={service.description}
            imageUrl={service.image}
            onActionClick={() => handleActionClick(service.id)}
          />
        ))}
      </div>
    </AuthenticatedLayout>
  );
}
