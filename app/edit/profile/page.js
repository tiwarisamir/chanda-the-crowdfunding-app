"use client";
import React, { useContext, useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Context } from "@/store/store";
import Link from "next/link";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";

const page = () => {
  const { isAuth, user, editProfile } = useContext(Context);
  const [userDetails, setuserDetails] = useState({
    username: user.username || "",
    bio: user.bio || "",
    profilepic: user.profilepic || "",
  });
  const [file, setfile] = useState();
  const router = useRouter();
  const { edgestore } = useEdgeStore();

  const handleChange = (e) => {
    setuserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handelEditProfile = async (e) => {
    e.preventDefault();
    let image;
    if (file) {
      image = await edgestore.myPublicImage.upload({ file });
    }
    editProfile(userDetails.username, userDetails.bio, image?.url);
    userDetails.username = "";
    userDetails.bio = "";
    setfile();
  };

  // useEffect(() => {
  //   if (isAuth) {
  //     router.push("/");
  //   }
  // }, [isAuth]);

  return (
    <div className="w-full  h-full  flex justify-center items-center">
      <div className="w-full md:w-4/12 px-4 mt-5 mx-auto ">
        <div className="relative glass p-5 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div className="flex-auto px-6  py-2">
            <form>
              <div className="relative w-full mb-3">
                <input
                  value={userDetails.username}
                  onChange={handleChange}
                  name="username"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Enter username"
                />
              </div>
              <div className="relative w-full mb-3">
                <input
                  value={userDetails.bio}
                  onChange={handleChange}
                  name="bio"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Enter your bio"
                />
              </div>
              <div className="relative w-full flex justify-center mb-3">
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

              <div className="text-center flex gap-3 mt-6">
                <button
                  type="submit"
                  className=" bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 w-full"
                  onClick={handelEditProfile}
                >
                  Save
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

export default page;
