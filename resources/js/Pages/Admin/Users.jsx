import MiniDrawer from "@/Layouts/Admin/Sidebar";
import AdminTable from "@/Components/AdminTable";
import { Typography } from "@mui/material";
import { Head } from "@inertiajs/react";

export default function Users({ users }) {
  return (
    <>
      <Head title="Users Table" />
      <MiniDrawer>
        <Typography variant="h4" align="center">
          Users
        </Typography>
        <AdminTable users={users} />
      </MiniDrawer>
    </>
  );
}
