import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        await connectDB();

        let user = await User.findOne({ email: credentials.email }).select(
          "+password"
        );

        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (isMatch) {
          return {
            id: user._id,
            email: user.email,
          };
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // if (account.provider === "github") {
      await connectDB();

      const currentUser = await User.findOne({ email: user?.email });
      if (!currentUser) {
        const newUser = new User({
          email: user.email,
          username: user.email.split("@")[0],
          profilepic: user?.image,
        });
        await newUser.save();
      }
      return true;
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session?.user?.email });
      if (dbUser) {
        session.user.id = dbUser?._id;
        session.user.name = dbUser?.username;
        return session;
      } else {
        return null;
      }
    },
    async jwt({ token, account, profile }) {
      const dbUser = await User.findOne({ email: token.email });

      if (account) {
        token.accessToken = account.access_token;
        token.id = dbUser?._id;
      }
      return token;
    },
  },
});

export { authoptions as GET, authoptions as POST };
