"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password",
      });
      return;
    }

    if (result?.ok) {
      const session = await getSession();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Logged In",
        showConfirmButton: false,
        timer: 1500,
      });

      if (session?.user?.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="w-full max-w-6xl bg-base-100 rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative hidden lg:block">
          <Image
            src="/image/side 2.png"
            alt="Login"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/35"></div>

          <div className="absolute bottom-72 left-10 text-white">
            <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>

            <p className="text-lg max-w-sm leading-8">
              Continue your learning journey and unlock new skills with every
              lesson.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 lg:p-14">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <Image
                src="/image/logo.png"
                alt="Logo"
                width={55}
                height={55}
                className="mx-auto"
              />

              <h1 className="text-3xl font-bold mt-4">Login to your account</h1>

              <p className="text-gray-500 mt-2">
                Welcome back! Please enter your details.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between">
                <label className="label cursor-pointer gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="label-text">Remember me</span>
                </label>

                <a
                  href="#"
                  className="text-sm text-warning font-medium hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-warning w-full rounded-xl text-base"
              >
                Login
              </button>

              <div className="divider">OR</div>

              {/* Google */}
              <button
                type="button"
                className="btn btn-outline w-full rounded-xl"
              >
                Continue with Google
              </button>

              <p className="text-center text-sm mt-6">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="text-warning font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
