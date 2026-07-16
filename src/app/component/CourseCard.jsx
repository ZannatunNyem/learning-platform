"use client";

import { useRouter } from "next/navigation";

export default function CourseCard({ course }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/dashboard/courses/${course.slug}`)}
      className="cursor-pointer rounded-xl border shadow hover:shadow-lg transition overflow-hidden"
    >
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{course.title}</h2>

        <p className="text-gray-500 my-2">{course.description}</p>

        <div className="flex justify-between mt-4">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {course.category}
          </span>

          <span className="text-sm text-gray-500">{course.level}</span>
        </div>
      </div>
    </div>
  );
}
