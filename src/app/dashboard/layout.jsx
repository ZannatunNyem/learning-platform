import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <aside className="w-64   shadow-sm lg:block hidden">
        <nav className="flex flex-col p-4 gap-2">
          <Link
            href="/dashboard"
            className="px-4 py-3 rounded-lg hover:bg-green-100"
          >
            📊 Dashboard
          </Link>

          <Link
            href="/dashboard/courses"
            className="px-4 py-3 rounded-lg hover:bg-green-100"
          >
            📚 All Courses
          </Link>

          <Link
            href="/dashboard/progress"
            className="px-4 py-3 rounded-lg hover:bg-green-100"
          >
            📈 Progress
          </Link>

          <Link
            href="/dashboard/profile"
            className="px-4 py-3 rounded-lg hover:bg-green-100"
          >
            👤 Profile
          </Link>
        </nav>
      </aside>

      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}

        {/* Page Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
