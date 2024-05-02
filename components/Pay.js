import React from "react";

const Pay = () => {
  return (
    <div className="flex  justify-center  my-5 gap-3 ">
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

          <div className="flex my-3 items-center gap-5">
            <button className=" focus:border-2 focus:border-slate-100 cursor-pointer w-20 h-20 p-2 rounded-lg bg-slate-800">
              <img src="/esewa.png" alt="esewa" />
            </button>
            <button className=" focus:border-2 focus:border-slate-100 cursor-pointer w-20 h-20 p-2 rounded-lg bg-slate-800">
              <img
                src="https://cdn.nayathegana.com/cloudfront-cdn/jamara/web19/images/khalti-logo.svg"
                alt="khalti"
                className="w-24 object-cover focus:border-2 focus:border-slate-600 cursor-pointer"
              />
            </button>
          </div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 w-"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pay;
