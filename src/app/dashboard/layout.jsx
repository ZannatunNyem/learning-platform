"use client";
import Link from "next/link";
import { LayoutDashboard, BookOpen, ChartColumn, User } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen text-gray-700">
      {/* Sidebar */}
      <aside className="w-64 shadow-lg lg:block hidden ">
        <nav className="flex flex-col p-4 gap-2 pt-10">
          <Link
            href="/dashboard/courses"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === "/dashboard/courses" ? "bg-orange-400 text-white" : "hover:bg-orange-300"}`}
          >
            <LayoutDashboard size={20} />
            All Courses
          </Link>

          <Link
            href="/dashboard/my-courses"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === "/dashboard/my-courses" ? "bg-orange-400 text-white" : "hover:bg-orange-300"}`}
          >
            <BookOpen size={20} />
            My Courses
          </Link>

          <Link
            href="/dashboard/progress"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === "/dashboard/progress" ? "bg-orange-400 text-white" : "hover:bg-orange-300"}`}
          >
            <ChartColumn size={20} />
            Progress
          </Link>

          <Link
            href="/dashboard/profile"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === "/dashboard/profile" ? "bg-orange-400 text-white" : "hover:bg-orange-300"}`}
          >
            <User size={20} />
            Profile
          </Link>
        </nav>
      </aside>

      {/* Right Side */}
      <div className="flex-1  rounded-2xl bg-[var(--color-sidebar)]">
        <main className="p-8 rounded-2xl mx-5 ">{children}</main>
      </div>
    </div>
  );
}
