"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Context } from "../../store/store";

const Dashboard = () => {
  const [showDropdown, setshowDropdown] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const { isAuth, user } = useContext(Context);
  useEffect(() => {
    setTimeout(() => {
      if (!isAuth) {
        router.push("/");
      }
    }, 800);
  }, []);

  return (
    <div className="flex gap-5  p-3">
      <div className="w-1/4 flex flex-col gap-4  p-5 items-center overflow-hidden  glass">
        <div className=" overflow-hidden flex justify-center  rounded-full   h-[10rem]">
          {session?.user?.image ? (
            <img
              // src={session?.user?.image}
              alt="Profile picture"
              className=" object-cover"
            />
          ) : (
            <img
              src="/defaultProfile.webp"
              alt="Profile picture"
              className=" object-cover"
            />
          )}
        </div>
        <div className="text-center ">
          <h3 className="text-xl font-semibold"> {user.username}</h3>
          <h3 className="text-sm ">Student | MERN stack developer</h3>
        </div>

        <div className="flex justify-around w-full">
          <div className="text-center">
            <h3>1</h3>
            <h3>Page</h3>
          </div>
          <div className="text-center">
            <h3>250590</h3>
            <h3>Raised</h3>
          </div>
          <div className="text-center">
            <h3>130400</h3>
            <h3>Donated</h3>
          </div>
        </div>

        <div>
          <h1>Your Donation</h1>
          <ul className="text-xs flex flex-col h-[5.4rem] overflow-y-auto gap-1 ">
            <li>
              Yo donated <span className="font-semibold">Rs 500</span> with
              message "Good job"
            </li>

            <li>
              Yo donated <span className="font-semibold">Rs 500</span> with
              message "Good job"
            </li>
            <li>
              Yo donated <span className="font-semibold">Rs 500</span> with
              message "Good job"
            </li>
            <li>
              Yo donated <span className="font-semibold">Rs 500</span> with
              message "Good job"
            </li>
          </ul>
        </div>

        <Link href={"/edit"} className="underline text-sm underline-offset-2">
          Edit Profile
        </Link>
      </div>
      <div className="w-3/4 p-5 flex flex-col  glass">
        <div className="flex gap-5 mt-3">
          <div className="w-3/4">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold">Pages</h1>
              <div className="relative">
                <button
                  className="bg-slate-700 px-3 py-2 rounded-md "
                  onClick={() => {
                    setshowDropdown(!showDropdown);
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      setshowDropdown(false);
                    }, 300);
                  }}
                >
                  Create Page
                </button>
                <div
                  id="dropdown"
                  className={`z-10 ${
                    !showDropdown && "hidden"
                  } bg-white divide-y mt-1   absolute divide-gray-100 rounded-md shadow w-44 dark:bg-gray-700`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link
                        href={`/creator`}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Creator page
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/charity"}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Charity Page
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full h-[22.3rem] flex flex-col gap-2  mt-2 rounded-md  ">
              <div className="w-full h-[4rem] flex  justify-between items-center border-b px-3 py-2">
                <span className="text-xl">
                  This is where the headings comes!!
                </span>

                <span className="text-green-500 text-xm">Rs 8000 raised</span>
                <span className="cursor-pointer text-sm underline underline-offset-2">
                  <Link href={"/dashboard"}>Dashboard</Link>
                </span>
              </div>
              <div className="w-full h-[4rem] flex  justify-between items-center border-b px-3 py-2">
                <span className="text-xl">
                  This is where the headings comes!!
                </span>

                <span className="text-green-500 text-xm">Rs 8000 raised</span>
                <span className="cursor-pointer text-sm underline underline-offset-2">
                  <Link href={"/dashboard"}>Dashboard</Link>
                </span>
              </div>
            </div>
          </div>

          <div className="w-1/4">
            <h2 className="text-xl mt-2 font-semibold">Recent donations</h2>
            <div className=" h-full flex flex-col gap-2 pl-2 ">
              <div className="flex items-center gap-2">
                <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 "></div>
                <div>
                  <h2>Sasdsd oweoe</h2>
                  <h4 className="text-xs">Rs 500</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 "></div>
                <div>
                  <h2>Sasdsd oweoe</h2>
                  <h4 className="text-xs">Rs 500</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 "></div>
                <div>
                  <h2>Sasdsd oweoe</h2>
                  <h4 className="text-xs">Rs 500</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 "></div>
                <div>
                  <h2>Sasdsd oweoe</h2>
                  <h4 className="text-xs">Rs 500</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 "></div>
                <div>
                  <h2>Sasdsd oweoe</h2>
                  <h4 className="text-xs">Rs 500</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 "></div>
                <div>
                  <h2>Sasdsd oweoe</h2>
                  <h4 className="text-xs">Rs 500</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 "></div>
                <div>
                  <h2>Sasdsd oweoe</h2>
                  <h4 className="text-xs">Rs 500</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
