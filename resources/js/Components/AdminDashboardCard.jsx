import React from "react";
import { Card, CardContent, Typography, Grid2 } from "@mui/material";

const AdminDashboardCard = ({ title, value, backgroundImage }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 275,
        margin: 2,
        backgroundImage,
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h4" color="inherit">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

const AdminDashboard = ({ stats }) => {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12, sm: 4, md: 4 }}>
        <AdminDashboardCard
          title="Number of Users"
          value={stats.users}
          backgroundImage="linear-gradient(135deg, #f44336 30%, #ffeb3b 100%)" // Red to Yellow
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <AdminDashboardCard
          title="Available Services"
          value={stats.servicesAvailable}
          backgroundImage="linear-gradient(135deg, #4caf50 30%, #8bc34a 100%)" // Green to Light Green
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <AdminDashboardCard
          title="Total Bookings"
          value={stats.bookings}
          backgroundImage="linear-gradient(135deg, #2196f3 30%, #03a9f4 100%)" // Blue to Light Blue
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <AdminDashboardCard
          title="Total Earnings"
          value={`$${stats.totalEarnings}`}
          backgroundImage="linear-gradient(135deg, #ff9800 30%, #ffc107 100%)" // Orange to Amber
        />
      </Grid2>
    </Grid2>
  );
};

export default AdminDashboard;
