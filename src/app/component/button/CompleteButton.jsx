"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CompleteButton({ courseID, lectureID }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleComplete() {
    try {
      setLoading(true);

      const res = await fetch("/api/progress/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseID,
          lectureID,
        }),
      });

      const data = await res.json();

      alert(data.message);

      if (res.ok) {
        router.refresh(); // Refresh the page to get updated progress
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
      onClick={handleComplete}
      disabled={loading}
      className="btn bg-green-500 hover:bg-green-600 text-white btn-sm"
    >
      {loading ? "Updating..." : "Mark Complete"}
    </button>
  );
}
