import Image from "next/image";
import { Star } from "lucide-react";

const instructors = [
  {
    id: 1,
    name: "Jessica Williams",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    rating: 4.9,
    students: "1.8k",
  },
  {
    id: 3,
    name: "David Brown",
    role: "Data Scientist",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 4.9,
    students: "2.1k",
  },
  {
    id: 3,
    name: "Moti Kulta",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 4.9,
    students: "2.1k",
  },
  {
    id: 4,
    name: "Sarah Miller",
    role: "Digital Marketing",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 4.8,
    students: "1.7k",
  },
];

export default function TopInstructors() {
  return (
    <section className=" max-w-7xl mx-auto  my-15">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-500">Top Instructors</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-7xl mx-auto">
        {instructors.map((teacher) => (
          <div
            key={teacher.id}
            className=" p-2 text-center hover:shadow-md transition"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              width={72}
              height={72}
              className="rounded-full mx-auto object-cover w-35 h-35"
            />

            <h3 className="font-semibold mt-4 text-xl text-gray-800">
              {teacher.name}
            </h3>

            <p className="text-sm text-gray-500">{teacher.role}</p>

            <div className="flex justify-center items-center gap-1 mt-3 text-sm">
              <Star size={15} className="fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-gray-800">
                {teacher.rating}
              </span>
              <span className="text-gray-400">({teacher.students})</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
