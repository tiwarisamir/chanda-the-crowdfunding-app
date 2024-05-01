"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Profile = ({ params }) => {
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/");
    }
  }, [session, status, router]);

  return (
    <div>
      <div className=" -z-10 relative flex justify-center  w-full bg-red-300">
        <img
          src="https://img.freepik.com/free-photo/business-concept-close-up-portrait-young-beautiful-attractive-ginger-red-hair-girl-smiling-showing-b_1258-124915.jpg?t=st=1714540877~exp=1714544477~hmac=a6cd9768e2f292ddd4356b021cb3f9029666000516eddfcc781b0a616e49da70&w=826"
          alt=""
          className="object-cover w-full h-[15rem]  "
        />
        <div className="absolute -bottom-10  border-2 border-white rounded-full bg-slate-400  overflow-hidden ">
          <img
            src="https://img.freepik.com/free-photo/smiling-young-beautiful-girl-wearing-olive-green-t-shirt-isolated-yellow-wall_141793-82379.jpg?t=st=1714541247~exp=1714544847~hmac=0aa44bb1699d827ed639c4cea4c4b4fc37811366f902f4da699823cfe03338ae&w=740"
            alt=""
            className="w-36 h-36 object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  my-12">
        <div className="flex flex-col  items-center justify-center">
          <h1 className="text-xl font-semibold">{params.username} Tiwari</h1>
          <h3 className="text-slate-200 ">Gamer</h3>
        </div>
        <div className="flex  justify-center  my-5 gap-3 w-[80%]">
          <div className=" bg-slate-900 w-1/2 p-5 rounded-xl">
            <h2 className="text-xl font-semibold">Suppoters</h2>
            <ul className="mx-3">
              <li className="my-2 flex gap-3 items-center">
                <div>
                  <div class="relative w-[1rem] h-[1rem] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                      class="absolute w-[1.5rem] h-[1.5rem] text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span className="">
                  arkyl donated <span className="font-bold">Rs 5000</span> with
                  message "Hello there"
                </span>
              </li>
              <li className="my-2 flex gap-3 items-center">
                <div>
                  <div class="relative w-[1rem] h-[1rem] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                      class="absolute w-[1.5rem] h-[1.5rem] text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span className="">
                  arkyl donated <span className="font-bold">Rs 5000</span> with
                  message "Hello there"
                </span>
              </li>
              <li className="my-2 flex gap-3 items-center">
                <div>
                  <div class="relative w-[1rem] h-[1rem] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                      class="absolute w-[1.5rem] h-[1.5rem] text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span className="">
                  arkyl donated <span className="font-bold">Rs 5000</span> with
                  message "Hello there"
                </span>
              </li>
            </ul>
          </div>
          <div className=" bg-slate-900 w-1/2 p-5 rounded-xl">
            <h2 className="text-xl font-semibold ">Make a Payment</h2>
            <div className="flex flex-col gap-5 my-3">
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800 "
                placeholder="Enter Name"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800 "
                placeholder="Enter Message"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800 "
                placeholder="Enter Amount"
              />
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 w-"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
