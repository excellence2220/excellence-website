"use client";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function NavbarComp({ setLoginModel, setSignupModel }) {
  const token = cookies.get("user-token");
  const handleLogout = () => {
    cookies.remove("user-token", {
      path: "/",
    });
    toast.success("logged out successfully");
    setLoginModel(true);
  };
  return (
    <Navbar fluid rounded className="bg-slate-200">
      <Navbar.Brand href="/">
        <img
          src="/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Excellence Learning Centre
        </span>
      </Navbar.Brand>
      {token ? (
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      ) : (
        <Navbar.Collapse>
          <span className="flex gap-6 items-center">
            <Navbar.Link href="/" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="/about-us">About</Navbar.Link>
            <Navbar.Link href="/contact-us">Contact</Navbar.Link>
            <Button onClick={() => setLoginModel(true)}>login</Button>
            <Button onClick={() => setSignupModel(true)}>signup</Button>
          </span>
        </Navbar.Collapse>
      )}
      {token && (
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/about-us">About</Navbar.Link>
          <Navbar.Link href="/contact-us">Contact</Navbar.Link>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}

export default NavbarComp;
