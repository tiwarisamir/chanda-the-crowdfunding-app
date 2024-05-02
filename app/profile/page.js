"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/");
    }
  }, [session, status, router]);

  return (
    <div>
      <div className="flex justify-center items-center  gap-3">
        <img
          src={`${session?.user?.image}`}
          alt="Profile picture"
          className="rounded-full w-[7rem]"
        />
        <div className="">
          <ul>
            <li>Name: dkdmk</li>
            <li>Username: ksksdk</li>
            <li>Email: dks@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
