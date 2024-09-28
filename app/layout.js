import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "./ui/NavBar";
import clsx from "clsx";
import Footer from "./ui/Footer";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Yusuf Portfolio",
  applicationName: "youssef filali portfolio",
  description: "youssef filali talha portfolio",
  creator: "Youssef filali talha",
  keywords:['youssef','filali','talha','portfolio','youssef portfolio','Next.js', 'React']
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

          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
