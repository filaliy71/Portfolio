import Image from "next/image";
import Modal from "./components/modal";

export const metadata = {
  title: "Yusuf Portfolio | Projects",
  description:
    "Explore the portfolio of Yusuf, a skilled Full-Stack Developer.",
  ogTitle: "Yusuf Portfolio | Projects",
  ogDescription:
    "Explore the portfolio of Yusuf, a skilled Full-Stack Developer.",
};

export default function Page() {
  return (
    <main id="project" className="min-h-screen py-10 overflow-x-hidden">
      <div className="rounded-full bg-blue-500 w-72 z-0 h-72 bg-opacity-75 blur-3xl absolute right-1 "></div>
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <h1 className="text-start text-5xl font-bold -tracking-4 mb-8">
          My Projects
        </h1>
        <Modal />
      </div>
    </main>
  );
}
