import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function JoinBanner() {
  return (
    <section className="my-18 max-w-7xl mx-auto">
      <div className="rounded-2xl bg-gradient-to-r from-[#15235d] via-[#3b2d8b] to-[#7b3fe4] px-8 py-8 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Join thousands of learners and start your journey today
          </h2>

          <p className="mt-2 text-gray-200">
            Learn new skills, earn certificates and advance your career.
          </p>
        </div>

        <div className="flex items-center gap-5 mt-6 md:mt-0">
          <Link href="/dashboard/courses">
            {" "}
            <button className="btn bg-white text-indigo-700 hover:bg-gray-100 border-none rounded-xl px-6">
              Join Now
            </button>
          </Link>

          <div className="bg-white/10 p-4 rounded-full">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
