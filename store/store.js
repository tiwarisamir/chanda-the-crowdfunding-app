"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const Context = createContext({
  isAuth: false,
  user: {},
  login: () => {},
  logout: () => {},
  register: () => {},
});

const ContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  const [user, setuser] = useState({});
  const [refresh, setrefresh] = useState(false);
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session) {
      setisAuth(true);
    }
  }, [session]);

  const login = async (loginType, email, password) => {
    try {
      if (loginType === "credentials") {
        signIn("credentials", {
          email: email,
          password: password,
          redirect: false,
        });
      } else if (loginType === "google") {
        signIn("google");
      } else if (loginType === "github") {
        signIn("github");
      }
      toast.success("login successfully");

      setrefresh(!refresh);
    } catch (error) {
      // toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const register = async (username, email, password) => {
    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        const resData = await res.json();
        console.log(resData);

        signIn("credentials", {
          email: resData.userdetail.email,
          password: resData.userdetail.password,
          redirect: false,
        });

        toast.success(data.message);

        setrefresh(!refresh);
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const logout = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    try {
      const fetchProfile = async () => {
        const res = await fetch(`http://localhost:3000/api/getprofile`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        });
        const data = await res.json();
        if (data.success) {
          // console.log("gtProfile ko data :", data.user);
          setuser(data.user);
        }
        // console.log("isAuth ko value in store useEffect: ", isAuth);
      };

      fetchProfile();
    } catch (err) {
      setuser({});
    }
  }, [refresh]);

  return (
    <Context.Provider
      value={{
        isAuth,
        login,
        register,
        logout,
        user,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
