import About from "./ui/About";
import Contact from "./ui/Contact";
import HomePageBanner from "./components/HomePageBanner";

export default function Home() {
  return (
    <main id="home" className="md:py-20 w-full h-full overflow-x-hidden max-md:overflow">
      <HomePageBanner />
      <About />
      <Contact />
    </main>
  );
}
