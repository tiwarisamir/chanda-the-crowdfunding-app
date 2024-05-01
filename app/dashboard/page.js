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
      <div className="flex flex-col items-center gap-3">
        <img
          src={`${session?.user?.image}`}
          alt="Profile picture"
          className="rounded-full w-[10rem]"
        />
        <div className="text-center">
          <h4>{session?.user?.name}</h4>
          <h4>{session?.user?.email}</h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
