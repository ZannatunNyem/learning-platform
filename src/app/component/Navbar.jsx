import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const link = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/instructor">Instructor</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start pl-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/instructor">Instructor</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/dashboard/courses">All Courses</Link>
              </li>
              <li>
                <Link href="/dashboard/progress">Progress</Link>
              </li>
              <li>
                <Link href="/dashboard/profile">Profile</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="/instructor">
              <Image src="/image/logo.png" width={50} height={50} />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end pr-5">
          <div className="flex items-center gap-3">
            {/* Avatar Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
            </div>
            {/* Login Button */}
            <Link href="/login" className="btn btn-warning rounded-xl px-6">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
