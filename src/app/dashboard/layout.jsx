"use client";
import Link from "next/link";
import { LayoutDashboard, BookOpen, ChartColumn, User } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 shadow-sm lg:block hidden ">
        <nav className="flex flex-col p-4 gap-2">
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === "/dashboard/courses" ? "bg-gray-500" : "hover:bg-gray-500"}`}
          >
            <LayoutDashboard size={20} />
            All Courses
          </Link>

          <Link
            href="/dashboard/courses"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === "/dashboard/my-courses" ? "bg-gray-500" : "hover:bg-gray-500"}`}
          >
            <BookOpen size={20} />
            My Courses
          </Link>

          <Link
            href="/dashboard/progress"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === "/dashboard/progress" ? "bg-gray-500" : "hover:bg-gray-500"}`}
          >
            <ChartColumn size={20} />
            Progress
          </Link>

          <Link
            href="/dashboard/profile"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === "/dashboard/profile" ? "bg-gray-500" : "hover:bg-gray-500"}`}
          >
            <User size={20} />
            Profile
          </Link>
        </nav>
      </aside>

      {/* Right Side */}
      <div className="flex-1 border-l border-gray-700">
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
