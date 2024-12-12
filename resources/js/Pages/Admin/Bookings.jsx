import React from "react";
import AuthLayout from "@/Layouts/Admin/Sidebar";
import { Head } from "@inertiajs/react";

export default function Bookings() {
  return (
    <AuthLayout>
      <Head title="Bookings" />
      <div>Bookings</div>
    </AuthLayout>
  );
}
