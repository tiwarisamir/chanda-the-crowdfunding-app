import { Context } from "@/store/store";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Posts = ({ pageDetails }) => {
  const newComment = useRef("");
  const { user, isAuth } = useContext(Context);
  const [isLoading, setisLoading] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const [posts, setposts] = useState([]);
  const [comments, setcomments] = useState([]);
  const [showDropdowns, setShowDropdowns] = useState({});

  const getComment = (postId) => {
    try {
      const fetchComment = async () => {
        setisLoading(true);
        const res = await fetch(`/api/getcomment/id?=${postId}`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        });
        const data = await res.json();
        if (data.success) {
          setcomments((prevState) => ({
            ...prevState,
            [postId]: data.comment,
          }));
          setisLoading(false);
        }
      };

      fetchComment();
    } catch (err) {
      console.log(err);
    }
  };

  const toggleDropdown = (postId) => {
    const show = !showDropdowns[postId];
    setShowDropdowns((prevState) => ({
      ...prevState,
      [postId]: show,
    }));

    if (show) {
      getComment(postId);
    }
  };

  const handleLike = async (id) => {
    if (isAuth) {
      const res = await fetch("/api/updatepost", {
        method: "PUT",
        body: JSON.stringify({
          updateType: "LIKE",
          postid: id,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await res.json();
      if (data.success) {
        setrefresh(!refresh);
      }
    } else {
      toast.error("Please login first");
    }
  };

  const handleComment = async (id) => {
    if (isAuth) {
      const res = await fetch("/api/updatepost", {
        method: "PUT",
        body: JSON.stringify({
          updateType: "COMMENT",
          postid: id,
          comment: newComment.current?.value,
          user: user?._id,
          username: user?.username,
          profilePic: user?.profilepic || "",
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await res.json();
      if (data.success) {
        newComment.current.value = "";
        getComment(id);
      }
    } else {
      toast.error("Please login first");
    }
  };

  // console.log("/******************************************* ");
  // console.log("pageDetails in usestate data in postid: ", pageDetails);

  useEffect(() => {
    try {
      const fetchPost = async () => {
        setisLoading(true);

        // console.log("yo post ma page id ho:", pageDetails?._id);
        const res = await fetch(`/api/getpost/id?id=${pageDetails?._id}`);
        const data = await res.json();
        if (data.success) {
          setposts(data.postDetails);
        }
      };
      setisLoading(false);

      fetchPost();
    } catch (err) {
      console.log("error in posts component 2kxs", err);
    }
  }, [refresh]);

  return (
    <div className="flex  justify-center items-center ">
      <div className="flex  flex-col  gap-2 items-center">
        <div className="w-full flex ">
          <h1 className=" text-2xl w-full  font-bold ">Recent posts </h1>

          {user?._id === pageDetails?.user && (
            <Link href={`/createpost/${pageDetails?._id}`}>
              <FaRegEdit size={25} />
            </Link>
          )}
        </div>
        <div className=" flex flex-col gap-3 w-[40rem]  rounded-lg">
          {posts && posts.length > 0 ? (
            posts.map((item) => {
              return (
                <div key={item?._id} className="bg-slate-900 p-5 rounded-xl">
                  {item?.coverImage?.length > 0 && (
                    <div className="bg-slate-700 w-full h-[15rem] rounded-lg flex justify-center items-center">
                      <img
                        src={`${item?.coverImage}`}
                        alt=""
                        className="object-cover w-full h-[15rem]  "
                      />
                    </div>
                  )}

                  <p className="mt-2">{item?.caption}</p>
                  <div className="flex justify-around pt-2">
                    <button
                      className="hover:bg-slate-800  w-full flex justify-center items-center gap-2 rounded-lg py-2"
                      onClick={() => handleLike(item?._id)}
                    >
                      <FaRegHeart size={20} />{" "}
                      <span className="text-lg">{item?.like}</span>
                    </button>
                    <button
                      className=" hover:bg-slate-800 w-full flex justify-center rounded-lg py-2"
                      onClick={() => toggleDropdown(item?._id)}
                    >
                      <FaRegComment size={20} />
                    </button>
                    {/* <button className="hover:bg-slate-800 w-full flex justify-center rounded-lg py-2">
                    <FaRegShareSquare size={20} />
                  </button> */}
                  </div>

                  {showDropdowns[item?._id] && (
                    <div className="w-full   mt-2 ">
                      <div className="w-full flex flex-col gap-2 min-h-[2rem] rounded-lg bg-slate-800 p-5">
                        {comments[item?._id] &&
                        comments[item?._id].length > 0 ? (
                          comments[item?._id].map((item) => {
                            return (
                              <div key={item?._id}>
                                <div className="flex gap-2 items-center">
                                  <div className="w-5 h-5  rounded-full">
                                    {item?.profilePic ? (
                                      <img
                                        src={`${item?.profilePic}`}
                                        alt="Profile picture"
                                        className=" object-cover  rounded-full w-[1.25rem] h-[1.25rem]"
                                      />
                                    ) : (
                                      <img
                                        src="/defaultProfile.webp"
                                        alt="Profile picture"
                                        className=" object-cover rounded-full w-[1.25rem]  h-[1.25rem]"
                                      />
                                    )}
                                  </div>
                                  <span className="text-sm ">
                                    {item?.username}
                                  </span>
                                </div>
                                <p className="text-xs ml-7">{item?.comment}</p>
                              </div>
                            );
                          })
                        ) : isLoading ? (
                          <p>Loading....</p>
                        ) : (
                          <p>No comment to show.</p>
                        )}
                      </div>
                      <div
                        className="mt-2 flex items-center border  rounded-full relative border-slate-700 
                    h-[2rem]  px-4 "
                      >
                        <input
                          ref={newComment}
                          type="text"
                          placeholder="comment"
                          className="w-full focus:outline-none  bg-slate-900  px-1  rounded-full "
                        />
                        <button
                          className=" cursor-pointer right-5"
                          onClick={() => handleComment(item?._id)}
                        >
                          <FiSend size={20} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : isLoading ? (
            <p>Loading....</p>
          ) : (
            <p>No posts to show.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
