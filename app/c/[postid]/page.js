"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CreatorPage from "@/components/CreatorPage";
import CharityPage from "@/components/CharityPage";

const Profile = ({ params }) => {
  const { data: session, status } = useSession();
  const [pageDetails, setPageDetails] = useState(null);
  const [userDetails, setuserDetails] = useState(null);
  const [recentDonation, setrecentDonation] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const [userId, setuserId] = useState("");

  const router = useRouter();
  let data;

  useEffect(() => {
    try {
      const fetchProfile = async () => {
        // setisLoading(true);
        const id = params.postid;
        const response = await fetch(`/api/getpage/id?=${id}`);
        data = await response.json();
        setPageDetails(data.pageDetails);
        setuserDetails(data.organiser);
        setrecentDonation(data.recentDonation);

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
    return <p>Loading...</p>;
  }

  return (
    <div className="relative">
      {pageDetails?.pageType === "CREATOR" ? (
        <CreatorPage
          userDetails={userDetails}
          pageDetails={pageDetails}
          recentDonation={recentDonation}
        />
      ) : (
        <CharityPage
          userDetails={userDetails}
          pageDetails={pageDetails}
          recentDonation={recentDonation}
        />
      )}
    </div>
  );
};

export default Profile;
