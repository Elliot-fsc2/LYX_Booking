import MiniDrawer from "@/Layouts/Admin/Sidebar";
import { Typography } from "@mui/material";
import { Head } from "@inertiajs/react";
import AdminDashboardCard from "@/Components/AdminDashboardCard";
import { usePage } from "@inertiajs/react";

export default function Dashboard({
  totalservices,
  totalusers,
  totalbookings,
  totalearnings,
}) {
  const stats = {
    users: totalusers,
    servicesAvailable: totalservices,
    bookings: totalbookings,
    totalEarnings: totalearnings,
  };

  return (
    <>
      <Head title="Admin Dashboard" />
      <MiniDrawer>
        <Typography variant="h4" align="center">
          Welcome to the Admin Dashboard
        </Typography>
        <br />
        <br />

        <AdminDashboardCard stats={stats} />
      </MiniDrawer>
    </>
  );
}
