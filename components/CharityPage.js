"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import Pay from "@/components/Pay";
import Posts from "@/components/Posts";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { Context } from "@/store/store";

const CharityPage = ({ userDetails, pageDetails, recentDonation }) => {
  const { user } = useContext(Context);
  return (
    <>
      {pageDetails && pageDetails.length > 0 && (
        <div className="w-full flex flex-col items-center  ">
          <div className=" flex gap-5 w-[80%]  my-5">
            <div className="flex flex-col gap-2 w-3/4 items-center justify-center bg-slate-900 p-4 rounded-lg">
              <div className="w-full flex  ">
                <h1 className="text-2xl bg  font-bold w-full ">
                  {pageDetails.title}
                </h1>

                {user && user.length > 0 && user?._id === pageDetails?.user && (
                  <Link href={`/edit/pages/h/${pageDetails?._id}`}>
                    <FaRegEdit size={20} />
                  </Link>
                )}
              </div>

              {pageDetails.coverImage && pageDetails.coverImage.length > 0 ? (
                <Image
                  src={`${pageDetails.coverImage}`}
                  width={600}
                  height={300}
                  alt="fund raiser image"
                  className="w-full h-[25rem] object-cover rounded-lg "
                />
              ) : (
                <div className="w-full h-[25rem] bg-slate-800 flex justify-center items-center">
                  <h1 className="text-2xl">No image to show</h1>
                </div>
              )}

              <div className="w-full flex items-center gap-2">
                <div className="bg-slate-700 flex justify-center items-center w-[3.5rem] h-[3.5rem] ml-2 rounded-full">
                  <img
                    src={`${userDetails?.profilepic}`}
                    alt="Profile picture"
                    className=" object-cover  rounded-full w-[3.5rem] h-[3.5rem]"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-bold">{userDetails?.username}</h1>
                  <h4 className="text-sm">Organiser</h4>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 flex flex-col gap-2 rounded-lg p-4 w-2/4 ">
              <h1 className="text-sm">
                <span className="font-bold text-xl ">
                  Rs {pageDetails?.raisedAmount}{" "}
                </span>
                raised of Rs {pageDetails?.targetAmount}
              </h1>
              <h4 className="text-sm">
                {pageDetails?.donationCount} donations
              </h4>
              <a
                href="#donate"
                className="bg-green-600 hover:bg-green-500 px-3 py-2 rounded-lg  text-lg text-center font-bold"
              >
                Donate now
              </a>
              <div className="flex  self-center gap-5">
                <a href="#">
                  <FaXTwitter size={20} />
                </a>
                <a href="#">
                  <AiFillInstagram size={20} />
                </a>
                <a href="#">
                  <FaFacebookSquare size={20} />
                </a>
              </div>

              <h2 className="text-xl mt-2 font-semibold">Recent donations</h2>
              <div className=" h-full flex flex-col gap-2 pl-2 ">
                {recentDonation && recentDonation.length > 0 ? (
                  recentDonation.map((item) => {
                    return (
                      <div key={item?._id} className="flex items-center gap-2">
                        <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 ">
                          <img
                            src="/defaultProfile.webp"
                            alt="Profile picture"
                            className=" object-cover rounded-full w-[3rem]"
                          />
                        </div>
                        <div>
                          <h2>{item?.name}</h2>
                          <h4 className="text-xs">Rs {item?.amount}</h4>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p>No donation available.</p>
                )}
              </div>
            </div>
          </div>

          <div className="w-[80%] bg-slate-900 p-4 rounded-lg">
            <h2 className="text-xl font-bold">Message from Organiser</h2>
            <p>{pageDetails?.description}</p>
          </div>

          <div id="donate" className="w-[80%]">
            <Pay pageDetails={pageDetails} recentDonation={recentDonation} />
          </div>

          <div className="flex justify-center items-center w-full">
            <Posts pageDetails={pageDetails} />
          </div>
        </div>
      )}
    </>
  );
};

export default CharityPage;
