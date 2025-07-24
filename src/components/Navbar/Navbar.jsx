import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 py-6 px-20">
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
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
