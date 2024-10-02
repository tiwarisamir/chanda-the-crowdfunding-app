"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { Context } from "../../store/store";

const Dashboard = () => {
  const [showDropdown, setshowDropdown] = useState(false);
  const router = useRouter();
  const { isAuth, user, pageDetails, paymentDetails } = useContext(Context);

  const donated = paymentDetails.reduce(
    (total, item) => total + item.amount,
    0
  );
  const raised = pageDetails.reduce(
    (total, item) => total + item.raisedAmount,
    0
  );

  return (
    <div className="flex flex-col md:flex-row gap-5   p-3">
      <div className="w-full md:w-1/4 flex flex-col gap-4  p-5 items-center overflow-hidden  glass">
        <div className=" overflow-hidden flex justify-center  rounded-full  ">
          {user?.profilepic ? (
            <img
              src={`${user.profilepic}`}
              alt="Profile picture"
              className=" w-36 h-36 object-cover"
            />
          ) : (
            <img
              src="/defaultProfile.webp"
              alt="Profile picture"
              className="w-36 h-36  object-cover"
            />
          )}
        </div>
        <div className="text-center ">
          <h3 className="text-xl font-semibold"> {user.username}</h3>
          <h3 className="text-sm ">{user.bio}</h3>
        </div>

        <div className="flex justify-around w-full">
          <div className="text-center">
            <h3>{pageDetails.length}</h3>
            <h3>Page</h3>
          </div>
          <div className="text-center">
            <h3>{raised}</h3>
            <h3>Raised</h3>
          </div>
          <div className="text-center">
            <h3>{donated}</h3>
            <h3>Donated</h3>
          </div>
        </div>

        <div className="w-full">
          <h1>Your Donation</h1>
          <ul className="text-xs flex flex-col h-[5.4rem] overflow-y-auto gap-1 ">
            {paymentDetails && pageDetails.length > 0 ? (
              paymentDetails.map((item) => {
                return (
                  <li key={item._id}>
                    Yo donated{" "}
                    <span className="font-semibold">Rs {item.amount}</span> via{" "}
                    {item.payment_method}
                  </li>
                );
              })
            ) : (
              <p>No payment to show.</p>
            )}
          </ul>
        </div>

        <Link
          href={"/edit/profile"}
          className="underline text-sm underline-offset-2"
        >
          Edit Profile
        </Link>
      </div>
      <div className="w-full md:w-3/4 p-5 flex flex-col  glass">
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
              className={`z-10 
                ${!showDropdown && "hidden"}
                 bg-white divide-y  right-5 top-11  absolute divide-gray-100 rounded-md shadow w-44 dark:bg-gray-700`}
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

        <div className=" h-[22.3rem] flex flex-col gap-2  overflow-y-auto mt-2 rounded-md  ">
          {pageDetails && pageDetails.length > 0 ? (
            pageDetails.map((item) => {
              return (
                <div
                  key={item._id}
                  className="w-full h-[4rem] flex    justify-between items-center border-b px-3 py-2"
                >
                  <div className="flex gap-5 justify-center items-center w-2/5">
                    <div className="bg-slate-500 rounded overflow-hidden w-16 h-10">
                      <img
                        src={`${item.coverImage}`}
                        alt=""
                        className=" object-cover   w-16"
                      />
                    </div>
                    <span className="text-xl ">{item.title}</span>
                  </div>

                  <div className="text-green-500 text-xm">
                    Rs {item.raisedAmount} raised
                  </div>

                  <Link href={`/c/${item._id}`}>
                    <FaRegShareFromSquare size={20} />
                  </Link>
                </div>
              );
            })
          ) : (
            <p>No pages available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
