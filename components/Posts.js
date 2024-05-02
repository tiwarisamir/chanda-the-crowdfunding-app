import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";

const Posts = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col  gap-2 items-center">
        <h1 className="w-3/4 text-2xl font-bold ">Recent posts by Username</h1>
        <div className="w-3/4 flex flex-col gap-3   rounded-lg">
          <div className="bg-slate-900 p-5 rounded-xl">
            <div className="bg-slate-700 w-full h-[15rem] rounded-lg flex justify-center items-center">
              <h1 className="text-3xl">image here</h1>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              asperiores alias! Cum in ab aperiam.
            </p>
            <div className="flex justify-around pt-2">
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegHeart size={20} />
              </button>
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegComment size={20} />
              </button>
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegShareSquare size={20} />
              </button>
            </div>
          </div>
          <div className="bg-slate-900 p-5 rounded-xl">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              asperiores alias! Cum in ab aperiam.
            </p>
            <div className="flex justify-around pt-2">
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegHeart size={20} />
              </button>
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegComment size={20} />
              </button>
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegShareSquare size={20} />
              </button>
            </div>
          </div>
          <div className="bg-slate-900 p-5 rounded-xl">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              asperiores alias! Cum in ab aperiam.
            </p>
            <div className="flex justify-around pt-2">
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegHeart size={20} />
              </button>
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegComment size={20} />
              </button>
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegShareSquare size={20} />
              </button>
            </div>
          </div>
          <div className="bg-slate-900 p-5 rounded-xl">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              asperiores alias! Cum in ab aperiam.
            </p>
            <div className="flex justify-around pt-2">
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegHeart size={20} />
              </button>
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegComment size={20} />
              </button>
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegShareSquare size={20} />
              </button>
            </div>
          </div>
          <div className="bg-slate-900 p-5 rounded-xl">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              asperiores alias! Cum in ab aperiam.
            </p>
            <div className="flex justify-around pt-2">
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegHeart size={20} />
              </button>
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegComment size={20} />
              </button>
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegShareSquare size={20} />
              </button>
            </div>
          </div>
          <div className="bg-slate-900 p-5 rounded-xl">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              asperiores alias! Cum in ab aperiam.
            </p>
            <div className="flex justify-around pt-2">
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegHeart size={20} />
              </button>
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegComment size={20} />
              </button>
              <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                <FaRegShareSquare size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
