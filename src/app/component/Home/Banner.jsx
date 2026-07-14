"use client";
import React, { useEffect } from "react";

export default function Banner() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/image/banner.png')",
      }}
    >
      <div className="grid min-h-[600px] grid-cols-1 lg:grid-cols-2 items-center px-8 lg:px-16">
        {/* Left */}
        <div>
          <p className="mb-5 text-lg text-white">Welcome back, Arif! 👋</p>

          <h1 className="text-6xl font-bold text-white leading-tight">
            Start learning,
            <br />
            achieve <span className="text-yellow-300">greatness.</span>
          </h1>

          <p className="mt-6 text-xl text-white/90 max-w-lg">
            Explore new skills, track your progress and reach your goals.
          </p>

          <button className="btn btn-warning btn-lg mt-8 rounded-full px-8">
            Continue Learning →
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
            className="absolute top-28 -right-10 w-38 animate-float"
          />
        </div>
      </div>
    </section>
  );
}
