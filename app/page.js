import About from "./ui/About";
import Contact from "./ui/Contact";
import HomePageBanner from "./components/HomePageBanner";
export const metadata = {
  title: "Yusuf Portfolio | Full-Stack Developer",
  description: "Explore the portfolio of Yusuf, a skilled Full-Stack Developer.",
  ogTitle: "Yusuf Portfolio | Full-Stack Developer",
  ogDescription: "Explore the portfolio of Yusuf, a skilled Full-Stack Developer.",
};
export default function Home() {
  return (
    <main id="home" className="w-full h-full overflow-x-hidden">
      <HomePageBanner />
      <About />
      <Contact />
    </main>
  );
}
