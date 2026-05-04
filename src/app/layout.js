import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/NavBar";
import Footer from "@/components/Shared/Footer";
import { ToastContainer } from "react-toastify";
import 'animate.css';

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  title: "SunCart - Summer Essentials Store",
  description: "Summer Essentials Store",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`light  ${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
