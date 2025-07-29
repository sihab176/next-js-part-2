import Link from "next/link";
import React from "react";
import LoginButton from "../LoginButton";
import { getServerSession } from "next-auth";
import LogoutButton from "../LogoutButton";
import { authOptions } from "@/lib/authOptions";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <nav className="bg-[#354f52] py-6 px-20">
        <ul className="flex justify-center gap-20">
          <Link href="/">
            <li>home</li>
          </Link>
          <Link href="/post">
            <li>posts</li>
          </Link>
          <Link href="/meals">
            <li>meals</li>
          </Link>
          <Link href="/product">
            <li>product</li>
          </Link>
          <Link href="/product/Add">
            <li>Add product</li>
          </Link>
          <div className="">
            {session?.user ? (<LogoutButton />) : (<LoginButton />)}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
