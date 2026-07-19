"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function AddCoursePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [instructor, setInstructor] = useState("");

  const [lectures, setLectures] = useState(["", "", "", "", "", "", "", ""]);

  const handleLectureChange = (index, value) => {
    const newLectures = [...lectures];
    newLectures[index] = value;
    setLectures(newLectures);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const course = {
      title,
      slug,
      description,
      thumbnail,
      category,
      level,
      instructor: {
        name: instructor,
      },
      lectures: lectures
        .filter((lecture) => lecture.trim() !== "")
        .map((lecture, index) => ({
          id: index + 1,
          title: lecture,
        })),
    };

    const res = await fetch("/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });

    if (res.ok) {
      await Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Course added successfully.",
        confirmButtonColor: "#f59e0b",
      });

      router.push("/admin/courses");
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Failed to add course.",
        confirmButtonColor: "#ef4444",
      });
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-2xl">
      <h1 className="text-3xl font-bold mb-6">Add Course</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="input input-bordered w-full"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="input input-bordered w-full"
          placeholder="Slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />

        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="input input-bordered w-full"
          placeholder="Thumbnail URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />

        <input
          className="input input-bordered w-full"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="input input-bordered w-full"
          placeholder="Level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />

        <input
          className="input input-bordered w-full"
          placeholder="Instructor Name"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
        />

        <h2 className="text-xl font-bold mt-6">Lectures</h2>

        {lectures.map((lecture, index) => (
          <input
            key={index}
            className="input input-bordered w-full"
            placeholder={`Lecture ${index + 1}`}
            value={lecture}
            onChange={(e) => handleLectureChange(index, e.target.value)}
          />
        ))}

        <button className="btn btn-primary w-full">Add Course</button>
      </form>
    </div>
  );
}
