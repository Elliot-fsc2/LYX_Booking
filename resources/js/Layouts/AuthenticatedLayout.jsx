// "use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, Head, usePage } from "@inertiajs/react";

export default function Component({ children }) {
  const user = usePage().props.auth.user;

  return (
    <>
      <Head title="Test" />
      <Navbar className="bg-gold-300 top-0 fixed w-screen">
        <Navbar.Brand href="/">
          {/* <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
            Lyx BeautyLine
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">
                {user.first_name.charAt(0).toUpperCase() +
                  user.first_name.slice(1)}{" "}
                {user.last_name.charAt(0).toUpperCase() +
                  user.last_name.slice(1)}
              </span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item href={route("profile.edit")} as={Link}>
              Profile
            </Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href={route("logout")} method="post" as={Link}>
              Sign out
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            className={
              route().current("dashboard")
                ? "text-white text-xl hover:text-black-500 active-link"
                : "text-black text-xl hover:text-white"
            }
            href={route("dashboard")}
            as={Link}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            className={
              route().current("services.index")
                ? "text-white text-xl hover:text-black-500 active-link"
                : "text-black text-xl hover:bg-white"
            }
            href={route("services.index")}
            as={Link}
            // active={route().current("services")}
          >
            Services
          </Navbar.Link>
          <Navbar.Link
            className={
              route().current("test")
                ? "text-white text-xl hover:text-black-500"
                : "text-black text-xl hover:text-white"
            }
            href="#"
          >
            My Bookings
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <main className="mt-24 px-12">{children}</main>
    </>
  );
}
