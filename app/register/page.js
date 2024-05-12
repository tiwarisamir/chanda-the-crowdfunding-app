"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Context } from "@/store/store";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "@/components/single-image-dropzone";

const Page = () => {
  const [file, setfile] = useState();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const bio = useRef();
  const { isAuth, register } = useContext(Context);
  const router = useRouter();
  const { edgestore } = useEdgeStore();

  const handelRegister = async (e) => {
    e.preventDefault();
    if (file) {
      const res = await edgestore.myPublicImage.upload({ file });
      // console.log("register data : ", res.url);
      const profilepic = res?.url;
      register(
        username.current.value,
        email.current.value,
        password.current.value,
        bio.current.value,
        profilepic
      );
    } else {
      register(
        username.current.value,
        email.current.value,
        password.current.value,
        bio.current.value
      );
    }

    username.current.value = "";
    email.current.value = "";
    password.current.value = "";
    bio.current.value = "";
    setfile();
  };

  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [isAuth]);

  return (
    <div className="  flex justify-center pt-5 items-center">
      <div className="w-full md:w-[30rem] px-4  ">
        <div className="relative glass p-5 flex flex-col min-w-0 break-words w-full  shadow-lg rounded-lg bg-blueGray-200 border-0">
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
                  ref={bio}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="bio"
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

              <div className="relative flex justify-center  gap-3 w-full mb-3">
                <SingleImageDropzone
                  className="w-full"
                  width={100}
                  height={100}
                  value={file}
                  // dropzoneOptions={{ maxSize: 1024 * 1024 * 1 }}
                  onChange={(file) => {
                    setfile(file);
                  }}
                />
              </div>

              <div className="text-center mt-3">
                <button
                  type="submit"
                  className=" bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2  w-full"
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

export default Page;
