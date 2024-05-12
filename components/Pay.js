"use client";
import { Context } from "@/store/store";
import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";

const Pay = ({ pageDetails, recentDonation }) => {
  const { isAuth, logout, user } = useContext(Context);
  const [selectedMethod, setSelectedMethod] = useState("esewa");
  const amount = useRef();
  const message = useRef();

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  // ********* Change this for in fetch body when using for real transaction ****************
  // payment_method: selectedMethod,
  // esewaSecret: pageDetails.esewaSecret,
  // esewaProductCode: pageDetails.esewaProductCode,

  const handelPay = async (e) => {
    e.preventDefault();

    if (isAuth) {
      if (
        amount.current?.value.length !== 0 &&
        message.current?.value.length !== 0 &&
        selectedMethod !== 0
      ) {
        const esewaCall = (formData) => {
          // console.log("form ko data in ecewa function: ", formData);
          var path = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

          var form = document.createElement("form");
          form.setAttribute("method", "POST");
          form.setAttribute("action", path);

          for (var key in formData) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", formData[key]);
            form.appendChild(hiddenField);
          }

          document.body.appendChild(form);
          form.submit();
        };

        try {
          const res = await fetch("/api/handlepay", {
            method: "POST",
            body: JSON.stringify({
              amount: amount.current?.value,
              message: message.current?.value,
              payment_method: "esewa",
              esewaSecret: "8gBm/:&EnhH.1/q",
              esewaProductCode: "EPAYTEST",
              name: user.username,
              from_user: user._id,
              to_page: pageDetails._id,
            }),
            headers: {
              "content-type": "application/json",
            },
          });

          if (res.ok) {
            const responseData = await res.json();
            // console.log("yo res ho with data : ", responseData);

            esewaCall(responseData.formData);
          } else {
            console.log("Oops! Something is wrong.");
          }
        } catch (error) {
          console.log("Error: ", error);
        }
      } else {
        toast.error("Fill the form first!");
      }
    } else {
      toast.error("Please login first");
    }
  };

  return (
    <div className="flex   justify-center  my-5 gap-3 ">
      <div className=" bg-slate-900 w-1/2 p-5 rounded-xl">
        <h2 className="text-xl font-semibold">Suppoters</h2>
        <ul className="mx-3">
          {recentDonation && recentDonation.length > 0 ? (
            recentDonation.map((item) => {
              return (
                <li key={item._id} className="my-2 flex gap-3 items-center">
                  <div>
                    <div className="relative w-[1rem] h-[1rem] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <svg
                        className="absolute w-[1.5rem] h-[1.5rem] text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="">
                    {item.name} donated{" "}
                    <span className="font-bold">Rs {item.amount}</span> with
                    message &quot;{item.message}&quot;
                  </span>
                </li>
              );
            })
          ) : (
            <p>No donation available.</p>
          )}
        </ul>
      </div>
      <div className=" bg-slate-900 w-1/2 p-5 rounded-xl">
        <h2 className="text-xl font-semibold ">Make a Payment</h2>
        <form className="flex flex-col gap-5 my-3">
          <input
            ref={message}
            name="message"
            type="text"
            className="w-full p-3 rounded-lg bg-slate-800 "
            placeholder="Enter Message"
          />
          <input
            ref={amount}
            name="amount"
            type="number"
            className="w-full p-3 rounded-lg bg-slate-800 "
            placeholder="Enter Amount"
          />

          <div className="flex my-3 items-center gap-5">
            {/* Radio input for eSewa */}
            <label
              className={`relative flex items-center justify-center w-20 h-20 p-2 rounded-lg bg-slate-800  cursor-pointer ${
                selectedMethod === "esewa" ? "border border-blue-500" : ""
              }`}
            >
              <input
                type="radio"
                value="esewa"
                checked={selectedMethod === "esewa"}
                onChange={handleMethodChange}
                className="sr-only "
              />
              <img src="/esewa.png" alt="esewa" className="w-24 object-cover" />
            </label>

            {/* Radio input for Khalti */}
            <label
              className={`relative flex items-center justify-center w-20 h-20 p-2 rounded-lg bg-slate-800 cursor-pointer ${
                selectedMethod === "khalti" ? "border border-blue-500" : ""
              }`}
            >
              <input
                type="radio"
                value="khalti"
                checked={selectedMethod === "khalti"}
                onChange={handleMethodChange}
                className="sr-only"
              />
              <img
                src="https://cdn.nayathegana.com/cloudfront-cdn/jamara/web19/images/khalti-logo.svg"
                alt="khalti"
                className="w-24 object-cover"
              />
            </label>
          </div>
          <button
            onClick={handelPay}
            type="submit"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 w-"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pay;
