import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import Progress from "@/models/Progress";
import AdminBanner from "../component/AdminBanner";

export default async function UsersPage() {
  await connectDB();

  const users = await User.find();

  const usersWithCourses = await Promise.all(
    users.map(async (user) => {
      const enrolledCourses = await Progress.countDocuments({
        userID: user._id.toString(),
        enrolled: true,
      });

      return {
        ...user.toObject(),
        enrolledCourses,
      };
    }),
  );

  return (
    <div className="p-6">
      <AdminBanner />

      {/* Section Header */}
      <div className="flex items-center justify-between mt-15 mb-8 ml-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-500">Manage Users</h2>
          <p className="text-gray-500 mt-1">
            View and manage all registered users in your LMS.
          </p>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto rounded-2xl max-w-6xl mx-auto bg-blue-200 shadow-md">
        <table className="table ">
          <thead className="bg-blue-500  text-white">
            <tr className="">
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Enrolled</th>
            </tr>
          </thead>

          <tbody>
            {usersWithCourses.map((user) => (
              <tr key={user._id}>
                <td>
                  <img
                    src={user.image || "/image/user.jpg"}
                    alt={user.name}
                    className="h-12 w-12  rounded-full border object-cover"
                  />
                </td>

                <td>
                  <div className="font-semibold text-gray-800">{user.name}</div>
                </td>

                <td className="text-gray-600">{user.email}</td>

                <td>
                  <span className="badge badge-outline badge-primary ">
                    {user.role}
                  </span>
                </td>

                <td>
                  <span className="badge badge-info">
                    {user.enrolledCourses}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
