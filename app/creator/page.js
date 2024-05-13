"use client";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { Context } from "@/store/store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Creator = () => {
  const [file, setfile] = useState();
  const { data: session, status } = useSession();
  const { isAuth, setrefresh, refresh } = useContext(Context);
  const title = useRef();
  const esewaProductCode = useRef();
  const esewaSecret = useRef();
  const router = useRouter();
  const { edgestore } = useEdgeStore();

  // useEffect(() => {
  //   if (!session && status !== "loading") {
  //     router.push("/");
  //   }
  // }, [session, status, router]);

  const handelCreate = async (e) => {
    e.preventDefault();

    if (file) {
      const image = await edgestore.myPublicImage.upload({ file });

      const res = await fetch("/api/donationpage", {
        method: "POST",
        body: JSON.stringify({
          title: title.current.value,
          coverImage: image?.url,
          esewaProductCode: esewaProductCode.current.value,
          esewaSecret: esewaSecret.current.value,
          user: session.user.id,
          pageType: "CREATOR",
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        router.push("/profile");
        setrefresh(!refresh);
      }
    } else {
      toast.error("please upload image");
    }
  };
  return (
    <div className="  flex justify-center items-center">
      <div className="w-full md:w-4/12 px-4 mt-5 mx-auto ">
        <div className="relative glass p-5 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div className="flex-auto px-4  py-1">
            <form>
              <div className="relative w-full flex justify-center mb-2">
                <SingleImageDropzone
                  className="w-full"
                  width={300}
                  height={100}
                  value={file}
                  // dropzoneOptions={{ maxSize: 1024 * 1024 * 1 }}
                  onChange={(file) => {
                    setfile(file);
                  }}
                />
              </div>

              <div className="relative w-full mb-2">
                <input
                  ref={title}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Title"
                />
              </div>

              <div>
                <div className="mb-2">
                  <span className="text-lg cursor-pointer font-semibold border-b-2 border-white m-2 ">
                    Esewa
                  </span>
                  <span className="text-lg font-semibold text-slate-500 ">
                    Khalti
                  </span>
                </div>
                <div className="relative w-full mb-3">
                  <input
                    ref={esewaProductCode}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="esewa product code"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <input
                    ref={esewaSecret}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="esewa secret"
                  />
                </div>
              </div>

              <div className="text-center flex gap-3 mt-3">
                <button
                  type="submit"
                  className=" bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 w-full"
                  onClick={handelCreate}
                >
                  Create
                </button>
                <Link
                  href={"/profile"}
                  className=" text-lg px-5 py-2.5 text-center  mb-2 w-full"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;
