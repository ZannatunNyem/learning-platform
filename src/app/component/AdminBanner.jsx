import { getServerSession } from "next-auth";
import { authentication } from "@/lib/auth";
import { ShieldCheck, CalendarDays, Plus } from "lucide-react";
import Link from "next/link";

export default async function AdminBanner() {
  const session = await getServerSession(authentication);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 rounded-2xl p-6 shadow-lg text-white mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white/20 p-3 rounded-full">
              <ShieldCheck size={30} />
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                Welcome, {session?.user?.name}
              </h1>

              <span className="inline-block mt-1 bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                Administrator
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 text-sm text-white/90">
            <CalendarDays size={18} />
            <span>{today}</span>
          </div>
        </div>

        <div>
          <Link
            href="/admin/courses/add"
            className="inline-flex items-center gap-2 bg-white text-teal-600 px-5 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            <Plus size={18} />
            Add Course
          </Link>
        </div>
      </div>
    </div>
  );
}
