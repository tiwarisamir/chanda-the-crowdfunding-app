import connectDB from "@/db/connectDB";
import donationPage from "@/models/donationPage";
import Link from "next/link";
import React from "react";

const getPages = async (offset) => {
  await connectDB();
  const allPages = await donationPage.find().skip(offset).limit(6);

  const totalCount = await donationPage.countDocuments();

  const response = {
    allPages,
    totalCount,
  };
  return response;
};

const pages = async ({ searchParams }) => {
  const dataPerPage = 6;

  let currentPage = 1;

  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page);
  }

  let offset = (currentPage - 1) * dataPerPage;

  const { allPages, totalCount } = await getPages(offset);

  const totalPage = Math.ceil(totalCount / dataPerPage);

  let pageNumber = [];
  for (let i = currentPage - 3; i <= currentPage + 3; i++) {
    if (i < 1) continue;
    if (i > totalPage) break;
    pageNumber.push(i);
  }

  return (
    <div className="w-full  flex flex-col justify-center  py-5  items-center ">
      <div className="flex  flex-wrap gap-5 w-3/5">
        {allPages && allPages.length > 0 ? (
          allPages.map((item) => {
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
        ) : (
          <p>No page to show</p>
        )}
      </div>
      <div className="flex gap-5">
        {currentPage - 1 >= 1 && (
          <>
            <Link href={"/pages"}>{"<<"}</Link>
          </>
        )}
        {pageNumber.map((item) => {
          return (
            <Link key={item} href={`/pages?page=${item}`}>
              <div
                className={`${
                  item === currentPage && "bg-red-500 rounded-full "
                }  w-5 h-5 flex justify-center items-center`}
              >
                {item}
              </div>
            </Link>
          );
        })}
        {currentPage + 1 <= totalPage && (
          <>
            <Link href={`/pages?page=${totalPage}`}>{">>"}</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default pages;
