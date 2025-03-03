"use client";
import Image from "next/image";
import { useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalInfo] = useState([]);
  const projects = [
    {
      id: 1,
      description:
        "Throughout my internship, I worked with my colleagues to create a fully functional Clothing Store web application. It aimed to develop a simple and intuitive platform for browsing, searching, and purchasing clothing items for prospective customers. The application was developed with a Laravel backend for robustness and scalability. The Bootstrap and custom CSS technology for frontend development gave rise to a robust flexible and aesthetic interface, working across the devices. JavaScript was used to implement an interactive environment, such as dynamically filtering products, managing the cart, and smooth checkout.",
      title: "Clothing Store",
      tech: "Laravel, Bootstrap, CSS, JavaScript",
      image: "/project/6.png",
      repoLink: "https://github.com/filaliy71/ecommerce_bmy",
      demoLink: null,
      lazy: false,
    },
    {
      id: 2,
      description: "",
      title: "Electronic E-commerce",
      tech: "React, Tailwind(DaisyUI), API",
      image: "/project/2.png",
      repoLink: "https://github.com/filaliy71/electornic_store",
      demoLink: "https://electornic-store.vercel.app/",
      lazy: false,
    },
    {
      id: 3,
      description: "",
      title: "Salah Time App",
      tech: "HTML, CSS, JavaScript",
      image: "/project/1.png",
      repoLink: "https://github.com/filaliy71/Salah.github.io",
      demoLink: "https://salah-github-io.vercel.app/",
      lazy: false,
    },
    {
      id: 4,
      description: "",
      title: "Social Media App",
      tech: "Laravel, React(InertiaJs), Tailwind, CSS",
      image: "/project/5.png",
      repoLink: "https://github.com/filaliy71/social_media_app",
      demoLink: null,
      lazy: false,
    },
    {
      id: 5,
      description: "",
      title: "Todo List",
      tech: "Laravel, Tailwind, JavaScript",
      image: "/project/7.png",
      repoLink: "link",
      demoLink: null,
      lazy: true,
    },
    {
      id: 6,
      description: "",
      title: "Movies Streaming",
      tech: "React, Tailwind, API",
      image: "/project/8.png",
      repoLink: "https://github.com/filaliy71/todo_project",
      demoLink: null,
      lazy: true,
    },
    {
      id: 7,
      description: "",
      title: "Weather App",
      tech: "React, Tailwind",
      image: "/project/9.png",
      repoLink: "https://github.com/filaliy71/Weather.github.io",
      demoLink: "https://weather-github-io-delta.vercel.app/",
      lazy: true,
    },
  ];
  const handleShow = (id) => {
    setIsOpen(!isOpen);
    setModalInfo(projects.find((project) => project.id === id));
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-100 cursor-pointer"
            onClick={() => handleShow(project.id)}>
            <div className="relative w-full h-72 rounded-xl border-2 border-blue-500 shadow-lg hover:shadow-xl overflow-hidden group">
              <Image
                className="object-cover transform hover:scale-105 transition-transform duration-500"
                src={project.image}
                alt={project.title}
                layout="fill"
                loading={project.lazy ? "lazy" : "eager"}
              />
              <div className="absolute inset-0 flex items-center justify-center gap-x-1 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-black dark:text-gray-100 dark:bg-black font-semibold py-2 px-4 rounded-lg shadow-md dark:hover:bg-gray-200 hover:bg-black hover:text-white dark:hover:text-black transition-colors duration-300">
                  Repo
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 text-black dark:text-gray-100 dark:bg-black font-semibold py-2 px-4 rounded-lg shadow-md dark:hover:bg-gray-200 hover:bg-black hover:text-white dark:hover:text-black transition-colors duration-300">
                    Demo
                  </a>
                )}
              </div>
            </div>
            <div className="p-2">
              <h2 className="text-2xl font-bold -tracking-2">
                {project.title}
              </h2>
              <p className="-tracking-1 font-medium dark:text-gray-300 text-gray-600">
                {project.tech}
              </p>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <div>
          <div className="fixed w-full h-full bg-black/85 z-40"></div>
          <div className="fixed z-50 flex justify-center items-center w-2/4 max-h-[90vh] bg-slate-200 dark:bg-gray-900 dark:text-gray-300 text-gray-600">
            <Image
              className="object-cover transform hover:scale-105 transition-transform duration-500"
              src={modalData.image}
              alt={modalData.title}
              layout="fill"
              loading={modalData.lazy ? "lazy" : "eager"}
            />
            <h2>{modalData.title}</h2>
          </div>
        </div>
      )}
    </>
  );
}
