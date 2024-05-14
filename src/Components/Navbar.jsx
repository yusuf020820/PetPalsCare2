import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full items-center bg-[#F7DBA7]">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-24 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img src={logo} alt="logo" className="dark:hidden" />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={`${open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] px-6 py-5 shadow 
                :bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                  } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/#">Beranda</ListItem>
                  <ListItem NavLink="/#">Cari Dokter</ListItem>
                  <ListItem NavLink="/#">Adopsi</ListItem>
                  <ListItem NavLink="/#">Tentang Kami</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <div className="relative mr-4 flex items-center">
                <span className="absolute left-2 text-black dark:text-gray-400">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  className="w-full rounded-full border border-gray-300 bg-white px-10 py-2 text-base text-black focus:outline-none focus:ring-2 focus:ring-[#DE9455] dark:border-gray-600"
                  placeholder="Search..."
                />
              </div>
              <a
                href="/#"
                className="px-7 py-3 text-base font-medium text-black hover:text-[#DE9455]"
              >
                Sign in
              </a>

              <a
                href="/#"
                className="ml-4 rounded-full bg-[#DE9455] px-7 py-3 text-base font-medium text-white hover:bg-[#D68B4B]"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium text-black hover:text-[#DE9455] dark:text-black dark:hover:text-[#DE9455] lg:ml-12 lg:inline-flex"
      >
        {children}
      </a>
    </li>
  );
};
