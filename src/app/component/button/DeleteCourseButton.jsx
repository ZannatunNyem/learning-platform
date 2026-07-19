"use client";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function DeleteCourseButton({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    const res = await fetch(`/api/courses/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      await Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Course deleted successfully.",
        confirmButtonColor: "#f59e0b",
      });

      router.refresh();
    } else {
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: "Failed to delete the course.",
        confirmButtonColor: "#ef4444",
      });
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="btn btn-accent w-full btn-sm mt-4 text-white"
    >
      Delete
    </button>
  );
}
