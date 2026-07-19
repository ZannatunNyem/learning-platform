"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function EnrollButton({ courseID }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleEnroll() {
    try {
      setLoading(true);

      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseID,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        await Swal.fire({
          icon: "success",
          title: "Enrolled Successfully!",
          text: data.message,
          confirmButtonColor: "#3b82f6",
        });

        router.push("/my-courses");
      } else {
        Swal.fire({
          icon: "error",
          title: "Enrollment Failed",
          text: data.message,
          confirmButtonColor: "#ef4444",
        });
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong.",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      className="btn btn-primary"
      onClick={handleEnroll}
      disabled={loading}
    >
      {loading ? "Enrolling..." : "Enroll Now"}
    </button>
  );
}
