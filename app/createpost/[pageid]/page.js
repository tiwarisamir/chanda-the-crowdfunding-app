"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const CreatePost = ({ params }) => {
  const { data: session, status } = useSession();

  const caption = useRef();
  const coverImage = useRef();

  const router = useRouter();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/");
    }
  }, [session, status, router]);

  const handelCreate = async (e) => {
    e.preventDefault();

    if (caption.current.value.length > 0) {
      const res = await fetch("http://localhost:3000/api/createpost", {
        method: "POST",
        body: JSON.stringify({
          caption: caption.current.value,
          coverImage: coverImage.current.value,
          page: params.pageid,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        router.push(`/c/${params.pageid}`);
      }
    } else {
      toast.error("Please write caption");
    }
  };
  return (
    <div className="  flex justify-center items-center">
      <div className="w-full md:w-4/12 px-4 mt-5 mx-auto ">
        <div className="relative glass p-5 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div className="flex-auto px-6  py-2">
            <form>
              <div className="relative w-full mb-3">
                <input
                  ref={coverImage}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="banner image url"
                />
              </div>

              <div className="relative w-full mb-3">
                <textarea
                  rows={4}
                  ref={caption}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="what are the new updates?"
                />
              </div>

              <div className="text-center flex gap-5 justify-center items-center mt-6">
                <button
                  type="submit"
                  className=" bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center  mb-2 w-full"
                  onClick={handelCreate}
                >
                  Create
                </button>
                <Link href={`/c/${params.pageid}`} className="mx-4">
                  {" "}
                  Cancel{" "}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
