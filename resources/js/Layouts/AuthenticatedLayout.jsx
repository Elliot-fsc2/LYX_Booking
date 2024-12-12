import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const AuthLayout = ({ children }) => {
  const { auth } = usePage().props;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-100 h-max">
      {/* Navbar */}
      <nav className="bg-hero shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">
            <a href="/" className="text-gray-800">
              Lyx Booking
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <h1 className="text-gray-800 font-bold ">
              Welcome, {auth.user.first_name}!
            </h1>
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 text-gray-800 hover:text-blue-500"
            >
              <span className="material-icons">
                {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside
          className={`fixed inset-0 z-30 bg-white shadow-md md:relative md:w-64 md:h-screen transition-transform duration-300 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="p-4">
            {/* Close Button Inside Sidebar */}
            <button
              onClick={toggleSidebar}
              className="mb-4 p-2 text-gray-800 hover:text-blue-500 md:hidden"
            >
              <CloseIcon /> {/* Close icon */}
            </button>
            <h2 className="text-lg font-bold">Dashboard</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/dashboard"
                  className="block p-2 text-gray-800 hover:bg-gray-200 rounded"
                >
                  <LocalOfferIcon /> &nbsp; Deals
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block p-2 text-gray-800 hover:bg-gray-200 rounded"
                >
                  <RoomServiceIcon /> &nbsp; Services
                </Link>
              </li>
              <li>
                <Link
                  href="/users"
                  className="block p-2 text-gray-800 hover:bg-gray-200 rounded"
                >
                  <BookmarksIcon /> &nbsp; My Bookings
                </Link>
              </li>
            </ul>
            <h2 className="text-lg font-bold mt-10">Account</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/profile"
                  className="block p-2 text-gray-800 hover:bg-gray-200 rounded"
                >
                  <AccountCircleIcon /> &nbsp; Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/logout"
                  method="post"
                  className="block p-2 text-gray-800 hover:bg-gray-200 rounded"
                >
                  <LogoutIcon /> &nbsp; Logout
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-6 ">
          {children} {/* Render children here */}
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
