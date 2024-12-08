import Image from "next/image";
const projects = [
  {
    title: "Clothing Store",
    description: "Laravel, Bootstrap, CSS, JavaScript",
    image: "/project/6.png",
    repoLink: "https://github.com/filaliy71/ecommerce_bmy",
    demoLink: null,
    lazy: false,
  },
  {
    title: "Electronic E-commerce",
    description: "React, Tailwind(DaisyUI), API",
    image: "/project/2.png",
    repoLink: "https://github.com/filaliy71/electornic_store",
    demoLink: "https://electornic-store.vercel.app/",
    lazy: false,
  },
  {
    title: "Salah Time App",
    description: "HTML, CSS, JavaScript",
    image: "/project/1.png",
    repoLink: "https://github.com/filaliy71/Salah.github.io",
    demoLink: "https://salah-github-io.vercel.app/",
    lazy: false,
  },
  {
    title: "Social Media App",
    description: "Laravel, React(InertiaJs), Tailwind, CSS",
    image: "/project/5.png",
    repoLink: "https://github.com/filaliy71/social_media_app",
    demoLink: null,
    lazy: false,
  },
  {
    title: "Todo List",
    description: "Laravel, Tailwind, JavaScript",
    image: "/project/7.png",
    repoLink: "link",
    demoLink: null,
    lazy: true,
  },
  {
    title: "Movies Streaming",
    description: "React, Tailwind, API",
    image: "/project/8.png",
    repoLink: "https://github.com/filaliy71/todo_project",
    demoLink: null,
    lazy: true,
  },
  {
    title: "Weather App",
    description: "React, Tailwind",
    image: "/project/9.png",
    repoLink: "https://github.com/filaliy71/Weather.github.io",
    demoLink: "https://weather-github-io-delta.vercel.app/",
    lazy: true,
  },
];
export const metadata = {
  title: "Yusuf Portfolio | Projects",
  description: "Explore the portfolio of Yusuf, a skilled Full-Stack Developer.",
  ogTitle: "Yusuf Portfolio | Projects",
  ogDescription: "Explore the portfolio of Yusuf, a skilled Full-Stack Developer.",
};

export default function Page() {
  return (
    <main id="project" className="min-h-screen py-10 overflow-x-hidden">
      <div className="rounded-full bg-blue-500 w-72 z-0 h-72 bg-opacity-75 blur-3xl absolute right-1 "></div>
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <h1 className="text-start text-5xl font-bold -tracking-4 mb-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="w-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <div className="relative w-full h-72 rounded-xl border-2 border-blue-500 shadow-lg hover:shadow-xl overflow-hidden group">
                <Image className="object-cover transform hover:scale-105 transition-transform duration-500" src={project.image} alt={project.title} layout="fill" loading={project.lazy ? "lazy" : "eager"} />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-black dark:text-gray-100 dark:bg-black font-semibold py-2 px-4 rounded-lg shadow-md dark:hover:bg-gray-200 hover:bg-black hover:text-white dark:hover:text-white transition-colors duration-300">
                    Repo
                  </a>
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-black dark:text-gray-100 dark:bg-black font-semibold py-2 px-4 rounded-lg shadow-md dark:hover:bg-gray-200 hover:bg-black hover:text-white dark:hover:text-white transition-colors duration-300">
                      Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="p-2">
                <h2 className="text-2xl font-bold -tracking-2">{project.title}</h2>
                <p className="-tracking-1 font-medium dark:text-gray-300 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
