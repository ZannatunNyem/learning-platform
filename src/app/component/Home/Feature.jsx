import { BookOpen, Users, GraduationCap, Award } from "lucide-react";

export default function Stats() {
  return (
    <div className="max-w-6xl mx-auto my-5 grid grid-cols-2 md:grid-cols-4  ">
      <div className="flex items-center gap-3 p-6 ">
        <BookOpen className="text-blue-500" size={30} />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">120+</h2>
          <p className="text-gray-500 text-sm">Courses</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-6 ">
        <Users className="text-cyan-500" size={30} />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">15K+</h2>
          <p className="text-gray-500 text-sm">Students</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-6 ">
        <GraduationCap className="text-red-500" size={30} />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">300+</h2>
          <p className="text-gray-500 text-sm">Instructors</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-6 ">
        <Award className="text-yellow-500" size={30} />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">98%</h2>
          <p className="text-gray-500 text-sm">Success Rate</p>
        </div>
      </div>
    </div>
  );
}
