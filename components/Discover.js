"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Discover = () => {
  const [pageDetails, setpageDetails] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchProfile = async () => {
        const res = await fetch(`/api/gethome`);
        const data = await res.json();
        if (data.success) {
          // console.log("data aayo :", data);
          setpageDetails(data.pageDetails);
          setisLoading(false);
        }
      };

      fetchProfile();
    } catch (err) {
      console.log("Error: ", err);
    }
  }, []);

  return (
    <div className=" flex  justify-center  items-center flex-wrap gap-2">
      {pageDetails && pageDetails.length > 0 ? (
        pageDetails.map((item) => {
          return (
            <Link key={item._id} href={`/c/${item._id}`}>
              <div className=" w-[16rem] h-[14rem]   rounded-xl overflow-hidden    ">
                <div className="relative ">
                  <div className="w-[16rem] h-[10rem] overflow-hidden bg-slate-800 flex justify-center items-center rounded-xl">
                    {item.coverImage && item.coverImage.length > 0 ? (
                      <img
                        src={`${item.coverImage}`}
                        alt=""
                        className="rounded-xl w-[16rem] h-[10rem] cursor-pointer object-cover transition-transform duration-300 transform hover:scale-105"
                      />
                    ) : (
                      <h1 className="text-2xl ">No image to show</h1>
                    )}
                  </div>
                  <h4 className=" text-sm absolute bottom-3 bg-slate-700 px-2 rounded-full right-5">
                    {item.donationCount} donations
                  </h4>
                </div>

                <h1 className=" font-semibold mt-1 text-sm cursor-pointer">
                  {item.title}
                </h1>
                <h4 className="text-xs text-green-500">
                  Rs {item.raisedAmount} raised
                </h4>
              </div>
            </Link>
          );
        })
      ) : isLoading ? (
        <p>Loading</p>
      ) : (
        <p>No page to show</p>
      )}
    </div>
  );
};

export default Discover;
