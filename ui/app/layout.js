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
  description: "Everything you need, anytime",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en" className={classNames(inter.className,"bg-white h-dvh text-typography-950")}>
      <body className="h-screen flex flex-col ">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>

  );
}