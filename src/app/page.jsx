import Banner from "./component/Home/Banner";
import connectDB from "@/lib/mongodb";
export default async function Home() {
  await connectDB();

  return (
    <div>
      <Banner></Banner>
      <h2>hello,naz</h2>
      <h1>welcome</h1>
      <h1>welcome</h1>
    </div>
  );
}
