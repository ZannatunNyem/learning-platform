"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        photo,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Registered",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/");
    } else {
      alert(data.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="w-full max-w-6xl bg-base-100 rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative hidden lg:block">
          <Image
            src="/image/side 3.png" // Your register image
            alt="Register"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-100 left-10 text-white">
            <h2 className="text-4xl font-bold mb-4">Start Learning Today</h2>

            <p className="text-lg max-w-sm leading-8">
              Create your account and unlock hundreds of high-quality courses
              designed by industry experts.
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

              <h1 className="text-3xl font-bold mt-4">Create your account</h1>

              <p className="text-gray-500 mt-2">
                Join our learning community today.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleRegister}>
              {/* Full Name */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="input input-bordered w-full"
                />
              </div>

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
                  placeholder="Create a password"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Photo */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Photo</span>
                </label>

                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="Enter your photo"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="btn btn-warning w-full rounded-xl text-base"
              >
                Sign Up
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
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-warning font-semibold hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
