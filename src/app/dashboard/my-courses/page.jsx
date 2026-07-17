"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MyCourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function getCourse() {
      const res = await fetch(`/api/my-courses/${id}`);
      const data = await res.json();

      setCourse(data);
    }

    if (id) {
      getCourse();
    }
  }, [id]);

  if (!course) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>{course.title}</h1>

      {course.lectures.map((lecture) => (
        <div key={lecture.id}>{lecture.title}</div>
      ))}
    </div>
  );
}
