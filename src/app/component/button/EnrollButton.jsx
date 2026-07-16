"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

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

      alert(data.message);

      if (res.ok) {
        router.push("/my-courses");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      className="btn btn-primary mt-4"
      onClick={handleEnroll}
      disabled={loading}
    >
      {loading ? "Enrolling..." : "Enroll Now"}
    </button>
  );
}
