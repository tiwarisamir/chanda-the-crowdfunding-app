"use client";
import React, { useEffect, useRef } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const { data: session } = useSession();
  const username = useRef();
  const email = useRef();
  const password = useRef();

  const handelRegister = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify({
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    username.current.value = "";
    email.current.value = "";
    password.current.value = "";

    if (res.ok) {
      const resData = await res.json();
      console.log(resData);

      signIn("credentials", {
        email: resData.userdetail.email,
        password: resData.userdetail.password,
        redirect: false,
      });
    }
  };

  const router = useRouter();
  useEffect(() => {
    if (session && !router.isReady) {
      router.push("/");
    }
  }, [session, router.isReady]);

  return (
    <div className="min-h-[80vh]  flex justify-center items-center">
      <div className="w-full md:w-4/12 px-4 mt-5 mx-auto ">
        <div className="relative glass p-5 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div className="flex-auto px-6  py-2">
            <form>
              <div className="relative w-full mb-3">
                <input
                  ref={username}
                  type="username"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="username"
                />
              </div>
              <div className="relative w-full mb-3">
                <input
                  ref={email}
                  type="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>
              <div className="relative w-full mb-3">
                <input
                  ref={password}
                  type="password"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>

              <div className="text-center mt-6">
                <button
                  type="submit"
                  className=" bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 w-full"
                  onClick={handelRegister}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
