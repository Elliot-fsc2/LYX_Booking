// "use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, Head, usePage } from "@inertiajs/react";

export default function Component({ header, children }) {
  const user = usePage().props.auth.user;

  return (
    <>
      <Head title="Test" />
      <Navbar fluid rounded className="bg-slate-300">
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
              <span className="block text-sm"></span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            className="text-lg text-white"
            active={route().current("test")}
            href={route("test")}
            as={Link}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            className="text-lg"
            href={route("services.index")}
            as={Link}
            active={route().current("services")}
          >
            Services
          </Navbar.Link>
          <Navbar.Link className="text-lg" href="#">
            My Bookings
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <main>{children}</main>
    </>
  );
}
