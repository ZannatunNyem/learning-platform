import { getServerSession } from "next-auth";
import { authentication } from "@/lib/auth";
import React from "react";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import banner from "../../../../public/image/banner.png";
export default async function Banner() {
  const session = await getServerSession(authentication);
  return (
    <section className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl h-74 md:h-100 lg:h-[600px]">
      <Image
        src={banner}
        alt="Banner"
        placeholder="blur"
        fill
        priority
        className="absolute inset-0 object-cover"
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 h-full">
        <div className="grid min-h-[600px]  grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-16 py-4 lg:py-0">
          {/* Left */}
          <div>
            <p className="my-4 flex items-center gap-2 text-xl md:text-2xl font-semibold text-white">
              Welcome back {session?.user?.name || ""}
              <Sparkles className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            </p>

            <h1 className="md:text-6xl text-3xl font-bold text-white leading-tight">
              Start learning,
              <br />
              achieve <span className="text-yellow-300">greatness.</span>
            </h1>

            <p className="md:mt-6 mt-4 md:text-xl text-sm text-white/90 max-w-lg">
              Explore new skills, track your progress and reach your goals.
            </p>

            <button className="btn btn-warning btn-lg md:mt-8 mt-6  rounded-full px-8">
              <Link href="/dashboard/courses">Continue Learning →</Link>
            </button>
          </div>

          {/* Right */}
          <div className="relative h-[600px]">
            {/* Boy */}
            {/* <img
            src="/image/boy.png"
            alt=""
            className="absolute bottom-0 right-0 w-[600px]"
          /> */}

            {/* Hat */}
            <img
              src="/image/3.png"
              alt=""
              className="absolute top-16 left-16 w-44 animate-float"
            />

            {/* Play */}
            <img
              src="/image/2.png"
              alt=""
              className="absolute top-55 left-24 w-34 animate-float"
            />

            {/* Progress */}
            <img
              src="/image/1.png"
              alt=""
              className="absolute top-28 -right-15 w-38 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
