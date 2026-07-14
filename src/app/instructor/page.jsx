import Image from "next/image";

const instructors = [
  {
    name: "Alex Johnson",
    course: "Node.js",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    experience: "8+ Years",
    students: "5,200+",
    description:
      "Backend developer specializing in Node.js, Express, MongoDB, and REST APIs.",
  },
  {
    name: "Sophia Carter",
    course: "Python",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    experience: "10+ Years",
    students: "8,100+",
    description:
      "Python expert with experience in Django, Flask, automation, and data science. ",
  },
  {
    name: "Daniel Brown",
    course: "Figma",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    experience: "7+ Years",
    students: "4,700+",
    description:
      "UI/UX designer helping students build beautiful interfaces with Figma.",
  },
  {
    name: "Emma Wilson",
    course: "C++",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    experience: "9+ Years",
    students: "4,900+",
    description:
      "Software engineer teaching modern C++ competitive programming for beginner.",
  },
  {
    name: "Michael Lee",
    course: "JavaScript",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    experience: "8+ Years",
    students: "6,400+",
    description: "Frontend specialist teaching modern JavaScript browser APIs.",
  },
  {
    name: "Olivia Smith",
    course: "React",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    experience: "8+ Years",
    students: "7,300+",
    description:
      "Professional React and Next.js instructor focused on building applications.",
  },
  {
    name: "James Anderson",
    course: "HTML & CSS",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    experience: "11+ Years",
    students: "9,100+",
    description: "Frontend mentor helping beginners master semantic HTML, CSS.",
  },
  {
    name: "Grace Thomas",
    course: "Git & GitHub",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
    experience: "6+ Years",
    students: "4,300+",
    description:
      "Git expert teaching professional version control and collaboration",
  },
];

export default function InstructorsPage() {
  return (
    <section className="bg-base-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {instructors.map((teacher) => (
            <div
              key={teacher.name}
              className="bg-base-100 border border-base-300 rounded-3xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="flex gap-6">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  width={140}
                  height={170}
                  className="rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <span className="badge badge-warning">{teacher.course}</span>

                  <h2 className="text-2xl font-bold mt-3">{teacher.name}</h2>

                  <p className="text-sm text-gray-500 mt-3">
                    {teacher.description}
                  </p>

                  <div className="flex gap-6 mt-5 text-sm">
                    <div>
                      <p className="font-bold">{teacher.experience}</p>
                      <p className="text-gray-500">Experience</p>
                    </div>

                    <div>
                      <p className="font-bold">{teacher.students}</p>
                      <p className="text-gray-500">Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
