import { Marcellus } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
});
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "ELan",
  description: "Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${marcellus.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col ">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="min-h-[calc(100vh-285px)] bg-[var(--color-body)]">
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
