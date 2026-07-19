import CourseCard from "@/app/component/CourseCard";

async function getCourses() {
  const res = await fetch("http://localhost:3000/api/courses", {
    cache: "no-store",
  });

  return res.json();
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="max-w-7xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-8">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}
