import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";

import { authentication } from "@/lib/auth";

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authentication);

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex">
      {/* <aside className="w-64 bg-base-200 p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <ul className="space-y-4">
          <li>
            <Link href="/admin">Dashboard</Link>
          </li>

          <li>
            <Link href="/admin/courses/add">Add Course</Link>
          </li>
          <li>
            <Link href="/admin/courses">Manage Courses</Link>
          </li>

          <li>
            <Link href="/admin/users">Manage Users</Link>
          </li>
        </ul>
      </aside> */}

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
