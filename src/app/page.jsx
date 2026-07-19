import Banner from "./component/Home/Banner";
import Feature from "./component/Home/Feature";
import TopCourses from "./component/Home/TopCourses";
import connectDB from "@/lib/mongodb";
import TopInstructors from "./component/Home/TopInstructors";
import JoinBanner from "./component/Home/JoinBanner";
export default async function Home() {
  await connectDB();

  return (
    <div>
      <Banner></Banner>
      <Feature></Feature>
      <TopCourses></TopCourses>
      <JoinBanner></JoinBanner>
      <TopInstructors></TopInstructors>
    </div>
  );
}
