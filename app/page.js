import About from "./ui/About";
import Contact from "./ui/Contact";
import HomePageBanner from "./components/HomePageBanner";
import Head from "next/head";

export default function Home() {
  return (
    <main id="home" className="md:py-20 w-full h-full overflow-x-hidden max-md:overflow">
      <Head>
        <title>Yusuf Portfolio | Full-Stack Developer</title>
        <meta name="description" content="Explore the portfolio of Yusuf, a skilled Full-Stack Developer." />
        <meta property="og:title" content="Yusuf Portfolio | Full-Stack Developer" />
        <meta property="og:description" content="Explore the portfolio of Yusuf, a skilled Full-Stack Developer." />
      </Head>
      <HomePageBanner />
      <About />
      <Contact />
    </main>
  );
}
