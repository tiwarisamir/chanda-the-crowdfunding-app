"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import Pay from "@/components/Pay";
import Posts from "@/components/Posts";

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
      <div className="  relative flex justify-center  w-full ">
        <img
          src="https://img.freepik.com/free-photo/business-concept-close-up-portrait-young-beautiful-attractive-ginger-red-hair-girl-smiling-showing-b_1258-124915.jpg?t=st=1714540877~exp=1714544477~hmac=a6cd9768e2f292ddd4356b021cb3f9029666000516eddfcc781b0a616e49da70&w=826"
          alt=""
          className="object-cover w-full h-[22rem]  "
        />

        <div className="glass p-5 w-72 absolute -bottom-[13rem] flex flex-col justify-center items-center  ">
          <div className=" text-center border-2 border-white rounded-3xl w-36 h-36 bg-slate-400  overflow-hidden ">
            <img
              src="https://img.freepik.com/free-photo/smiling-young-beautiful-girl-wearing-olive-green-t-shirt-isolated-yellow-wall_141793-82379.jpg?t=st=1714541247~exp=1714544847~hmac=0aa44bb1699d827ed639c4cea4c4b4fc37811366f902f4da699823cfe03338ae&w=740"
              alt=""
              className="w-36 h-36 object-cover"
            />
          </div>
          <div className="flex flex-col  items-center justify-center">
            <h1 className="text-xl font-semibold">{params.postid} Tiwari</h1>
            <h3 className="text-center my-2">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <h3>2000 Suppoters - 12 Posts</h3>

            <div className="flex my-3 gap-5">
              <a href="#">
                <FaXTwitter size={25} />
              </a>
              <a href="#">
                <AiFillInstagram size={25} />
              </a>
              <a href="#">
                <FaFacebookSquare size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center  mt-[14rem]">
        <div className="w-[80%] my-10 ">
          <h1 className="ml-5 text-2xl font-bold ">
            Support your favorite creator
          </h1>
          <Pay />
        </div>
      </div>
      <div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
