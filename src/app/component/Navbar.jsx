import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { authentication } from "@/lib/auth";
import LogoutButton from "./button/LogoutButton";

export default async function Navbar() {
  const session = await getServerSession(authentication);
  console.log(session);
  const link =
    session?.user?.role === "admin" ? (
      <>
        <li>
          <Link href="/admin">Dashboard</Link>
        </li>
        <li>
          <Link href="/admin/courses">Manage Courses</Link>
        </li>
        <li>
          <Link href="/admin/courses/add">Add Courses</Link>
        </li>
      </>
    ) : (
      <>
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* <li>
          <Link href="/instructor">Instructor</Link>
        </li> */}
        <li>
          <Link href="/dashboard/courses">Dashboard</Link>
        </li>
      </>
    );
  return (
    <div>
      <div className="navbar py-5 bg-[var(--color-navbar)] py-2 font-semibold text-gray-700 ">
        <div className="navbar-start pl-2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-black lg:hidden"
            >
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
              className="menu menu-sm dropdown-content bg-gray-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {session?.user?.role === "admin" ? (
                <>
                  <li>
                    <Link href="/admin">Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/admin/courses">Manage Courses</Link>
                  </li>
                  <li>
                    <Link href="/admin/courses/add">Add Courses</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  {/* <li>
                    <Link href="/instructor">Instructor</Link>
                  </li> */}
                  <li>
                    <Link href="/dashboard/courses">Dashboard</Link>
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
                </>
              )}
            </ul>
          </div>
          <div>
            <Link href="/">
              <Image src="/image/mylogo.png" width={50} height={50} />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end pr-5">
          <div className="flex items-center gap-3">
            {session ? (
              <>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={session.user.image || "/image/user.jpg"}
                        alt={session.user.name || "User Avatar"}
                      />
                    </div>
                  </div>
                </div>

                <LogoutButton />
              </>
            ) : (
              <>
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="/image/user.jpg" alt="Default User" />
                  </div>
                </div>

                <Link href="/login" className="btn btn-warning rounded-xl px-6">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
