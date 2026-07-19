// import connectDB from "@/lib/mongodb";
// import User from "@/models/User";
// import Progress from "@/models/Progress";

// export default async function UsersPage() {
//   await connectDB();

//   const users = await User.find();

//   const usersWithCourses = await Promise.all(
//     users.map(async (user) => {
//       const enrolledCourses = await Progress.countDocuments({
//         userID: user._id.toString(),
//         enrolled: true,
//       });

//       return {
//         ...user.toObject(),
//         enrolledCourses,
//       };
//     }),
//   );

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Manage Users</h1>

//       <div className="overflow-x-auto">
//         <table className="table table-zebra">
//           <thead>
//             <tr>
//               <th>Photo</th>
//               <th>Name</th>
//               <th>Email</th>

//               <th>Enrolled Courses</th>
//             </tr>
//           </thead>

//           <tbody>
//             {usersWithCourses.map((user) => (
//               <tr key={user._id}>
//                 <td>
//                   <img
//                     src={user.image || "/image/user.png"}
//                     alt={user.name}
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                 </td>

//                 <td>{user.name}</td>

//                 <td>{user.email}</td>

//                 <td>{user.enrolledCourses}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
