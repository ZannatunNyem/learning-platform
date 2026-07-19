import CourseCard from "@/app/component/CourseCard";

async function getCourses() {
  const res = await fetch("http://localhost:3000/api/courses", {
    cache: "no-store",
  });

  return res.json();
}

export default async function FeaturedCourses() {
  const courses = await getCourses();

  return (
    <div className="max-w-7xl mx-auto rounded-2xl bg-gray-100 shadow-lg p-8  my-8">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-500">Top Courses</h2>
      </div>
      <div className="grid grid-cols-1 mb-5 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {courses.slice(0, 3).map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}
