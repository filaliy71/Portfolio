import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "./ui/NavBar";
import clsx from "clsx";
import Footer from "./ui/Footer";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Yusuf.dev Portfolio",
  description: "youssef portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          montserrat.className,
          "bg-gray-100 text-black dark:bg-gray-900 dark:text-gray-50 antialiased"
        )}
      >
        <Providers>
          <NavBar />
          <div
            style={{ marginLeft: "80%", marginTop: "30px" }}
            className="rounded-full bg-blue-500 w-72 z-0 h-72 bg-opacity-75 blur-3xl absolute"
          ></div>
          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
