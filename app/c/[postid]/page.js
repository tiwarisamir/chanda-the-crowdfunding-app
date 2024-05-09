"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import Pay from "@/components/Pay";
import Posts from "@/components/Posts";
import CreatorPage from "@/components/CreatorPage";
import CharityPage from "@/components/CharityPage";

const Profile = ({ params }) => {
  const { data: session, status } = useSession();
  const [pageDetails, setPageDetails] = useState(null);
  const [userDetails, setuserDetails] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [userId, setuserId] = useState("");

  const router = useRouter();
  let data;

  useEffect(() => {
    try {
      const fetchProfile = async () => {
        // setisLoading(true);
        const id = params.postid;
        const response = await fetch(
          `http://localhost:3000/api/getpage/id?=${id}`
        );
        data = await response.json();
        setPageDetails(data.pageDetails);
        setuserDetails(data.organiser);
        // console.log("response in postid: ", data);
        setisLoading(false);
      };

      setuserId(session?.user?.id);
      fetchProfile();
      // console.log("yo session ho : ", userId);
    } catch (err) {
      console.log("Error :", err);
    }
  }, []);

  // useEffect(() => {
  //   if (!session && status !== "loading") {
  //     router.push("/");
  //   }
  // }, [session, status, router]);

  if (isLoading) {
    return <p>Loading...</p>; // Render loading state while waiting for data
  }

  return (
    <>
      {pageDetails?.pageType === "CREATOR" ? (
        <CreatorPage userDetails={userDetails} pageDetails={pageDetails} />
      ) : (
        <CharityPage userDetails={userDetails} pageDetails={pageDetails} />
      )}
    </>
  );
};

export default Profile;
