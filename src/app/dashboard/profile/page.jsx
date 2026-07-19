import { getServerSession } from "next-auth";
import { authentication } from "@/lib/auth";
import Image from "next/image";
import { User, Mail, ShieldCheck, CalendarDays } from "lucide-react";

export default async function ProfilePage() {
  const session = await getServerSession(authentication);

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-400 to-orange-400 p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="mt-2 text-white/90">
          View your account information and profile details.
        </p>
      </div>

      {/* Profile Card */}
      <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-40 h-40">
            <img
              src={session?.user?.image || "/image/user.png"}
              alt="Profile"
              fill
              className="rounded-full object-cover border-4 border-amber-400"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800">
              {session?.user?.name}
            </h2>

            <p className="text-gray-500 mt-2">
              Welcome back to your dashboard.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-8">
              <div className="bg-amber-50 rounded-2xl p-5 flex items-center gap-4">
                <User className="text-amber-500" />
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <h3 className="font-semibold">{session?.user?.name}</h3>
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-5 flex items-center gap-4">
                <Mail className="text-amber-500" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <h3 className="font-semibold">{session?.user?.email}</h3>
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-5 flex items-center gap-4">
                <ShieldCheck className="text-amber-500" />
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <h3 className="font-semibold capitalize">
                    {session?.user?.role}
                  </h3>
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-5 flex items-center gap-4">
                <CalendarDays className="text-amber-500" />
                <div>
                  <p className="text-sm text-gray-500">Account Status</p>
                  <h3 className="font-semibold text-green-600">Active</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
