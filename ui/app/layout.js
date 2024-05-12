import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

function classNames(...classes) {
  console.log(...classes);
  return classes.filter(Boolean).join(" ");
}

export const metadata = {
  title: "GlobalCorp",
  description: "Everything you need",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={classNames(inter.className, "h-full bg-gray-100")}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}