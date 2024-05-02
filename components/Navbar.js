"use client";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setshowDropdown] = useState(false);

  const handleSignout = async () => {
    await signOut();
  };

  return (
    <nav className="bg-[#171738] text-white flex justify-between items-center px-5 h-16 ">
      <Link className="font-bold text-2xl" href={"/"}>
        Chanda
      </Link>

      <div>
        {session ? (
          <>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white relative flex justify-center items-center "
              type="button"
              onClick={() => {
                setshowDropdown(!showDropdown);
              }}
              onBlur={() => {
                setTimeout(() => {
                  setshowDropdown(false);
                }, 300);
              }}
            >
              <img
                src={`${session?.user?.image}`}
                alt="Profile picture"
                className="rounded-full w-[3rem]"
              />
            </button>
            {/* Dropdown menu */}
            <div
              id="dropdown"
              className={`z-10 ${
                !showDropdown && "hidden"
              } bg-white divide-y top-16 right-5  absolute divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    href={`/profile`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={handleSignout}
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link href={"/login"}>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-lg px-5 py-1 text-center me-2 mb-2">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
