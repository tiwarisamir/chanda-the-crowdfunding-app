"use client";
import Discover from "@/components/Discover";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [pageDetails, setpageDetails] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchProfile = async () => {
        const res = await fetch(`/api/gethome`);
        const data = await res.json();
        if (data.success) {
          setpageDetails(data.pageDetails);
          setisLoading(false);
        }
      };

      fetchProfile();
    } catch (err) {
      throw new Error(err);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-center items-center flex-col text-center   p-5 w-3/4 mx-auto gap-10  ">
        <h2 className="font-bold text-5xl md:text-8xl">Chanda</h2>

        <p className="text-xl">
          A platform for crowdsourcing or fund-raising, designed to help
          creators, crowdfunded projects, or charities raise funds. It lets you
          post their projects and ask for donations. Donors can search for
          projects and donate any amount they want. Creators can also engage
          with fans and followers on the platform and build relationships.
        </p>

        <div className="mt-3 flex gap-3 items-center">
          <Link
            href="/pages"
            className=" bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl   font-medium rounded-md text-xl px-5 py-2.5 text-center me-2 mb-2"
          >
            See pages
          </Link>
        </div>
      </div>

      <div
        id="discover"
        className="min-h-screen w-4/5 flex flex-col justify-center items-center  mx-auto"
      >
        <div className="mx-auto w-full mb-3">
          <h1 className=" ml-5 text-2xl font-bold ">
            Discover fundraisers inspired by what you care about
          </h1>
        </div>
        <div className="glass py-5 px-3 w-full bg-[#171738] flex justify-center items-center flex-wrap rounded-xl gap-2">
          {pageDetails.length > 0 ? (
            <div className="flex justify-center items-center gap-5 flex-wrap">
              {pageDetails.map((item) => {
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
              })}
            </div>
          ) : isLoading ? (
            <p>Loading</p>
          ) : (
            <p>No page to show</p>
          )}
        </div>
      </div>

      <div className="min-h-screen   self-center flex justify-center items-center">
        <div className=" w-[80%]">
          <h1 className="text-3xl md:text-5xl my-5 font-bold ">
            What can you do here?
          </h1>

          <div>
            <h2 className="text-2xl font-semibold mb-3 border-b-2 py-1">
              You can donate
            </h2>
            <div className="  mt-10 flex flex-wrap gap-5 justify-around   ">
              <div className="text-center  glass p-5 w-[15rem] flex flex-col items-center gap-3 ">
                <Image
                  src="/creator.webp"
                  width={600}
                  height={300}
                  alt="fund raiser image"
                  className=" rounded-full   object-cover w-[10rem] h-[10rem] transition-transform duration-300 transform hover:scale-105"
                />

                <p>
                  You can donate money to your favorite creator and send message
                  with donation.
                </p>
              </div>
              <div className="text-center glass p-5 w-[15rem] flex flex-col items-center gap-3 ">
                <Image
                  src="/crowdfund.svg"
                  width={600}
                  height={300}
                  alt="fund raiser image"
                  className=" rounded-full    object-cover w-[10rem] h-[10rem] transition-transform duration-300 transform hover:scale-105"
                />
                <p>You can fund the crowd funded projects </p>
              </div>
              <div className="text-center glass p-5 w-[15rem] flex flex-col items-center gap-3 ">
                <Image
                  src="/charity.svg"
                  width={600}
                  height={300}
                  alt="fund raiser image"
                  className=" rounded-full    object-cover w-[10rem] h-[10rem] transition-transform duration-300 transform hover:scale-105"
                />
                <p>You cane donate money to charity to the people directly</p>
              </div>
            </div>
          </div>
          <div className="my-10">
            <h2 className="text-2xl font-semibold mb-3 border-b-2 ">
              You can take donation
            </h2>
            <div className="  mt-10 flex flex-wrap gap-5 justify-around   ">
              <div className="text-center  glass p-5 w-[15rem] flex flex-col items-center gap-3 ">
                <Image
                  src="/creator.webp"
                  width={600}
                  height={300}
                  alt="fund raiser image"
                  className=" rounded-full   object-cover w-[10rem] h-[10rem] transition-transform duration-300 transform hover:scale-105"
                />

                <p>
                  Are you content creator? <br /> your fans can help you grow!
                </p>
              </div>
              <div className="text-center glass p-5 w-[15rem] flex flex-col items-center gap-3 ">
                <Image
                  src="/crowdfund.svg"
                  width={600}
                  height={300}
                  alt="fund raiser image"
                  className=" rounded-full    object-cover w-[10rem] h-[10rem] transition-transform duration-300 transform hover:scale-105"
                />
                <p>
                  You want to develop your project? How about asking people to
                  help you out!
                </p>
              </div>
              <div className="text-center glass p-5 w-[15rem] flex flex-col items-center gap-3 ">
                <Image
                  src="/charity.svg"
                  width={600}
                  height={300}
                  alt="fund raiser image"
                  className=" rounded-full    object-cover w-[10rem] h-[10rem] transition-transform duration-300 transform hover:scale-105"
                />
                <p>
                  You want to raise money for charity? Then it&apos;s the best
                  for you start!
                </p>
                <span className="hover:text-blue-500 cursor-pointer">
                  Read more...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
