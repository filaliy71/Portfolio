// import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "./ui/NavBar";
import clsx from "clsx";
import Footer from "./ui/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat, Roboto } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });
// const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

// export const metadata = {
//   title: "Home | Yusuf Portfolio",
//   applicationName: "Youssef Filali Portfolio",
//   description: "Youssef Filali Talha Portfolio",
//   creator: "Youssef Filali Talha",
//   keywords: ["Youssef", "filali", "talha", "portfolio", "Youssef portfolio", "Next.js", "React"],
//   icons: {
//     icon: [
//       { rel: "icon", type: "image/png", sizes: "96x96", url: "/favicon-96x96.png" },
//       { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
//     ],
//     apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
//     shortcut: "/favicon.ico",
//   },
//   manifest: "/site.webmanifest",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="keywords" content="Yusuf, Portfolio, Next.js, React, Developer, youssef filali talha, filali, talha, youssef" />
        <link rel="canonical" href="https://youssef-filali.vercel.app" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://youssef-filali.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <body className={clsx(montserrat.className, "bg-gray-100 text-black dark:bg-gray-900 dark:text-gray-50 antialiased")}>
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
