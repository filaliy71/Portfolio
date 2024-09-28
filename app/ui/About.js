
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="mt-40 px-10 md:px-20 lg:px-32"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold mb-8 -tracking-3"
        >
          About Me
        </motion.h1>
        <div className="flex flex-col lg:flex-row">
          <motion.div variants={itemVariants} className="mb-8 lg:mb-0 lg:mr-16">
            <Image
              src="/about.png"
              width={480}
              height={500}
              alt="coding pic"
              className="rounded-2xl"
            />
            <div className="relative -mt-20 -right-10 lg:-right-16">
              <div className="rounded-full bg-gray-100 dark:bg-gray-900 w-40 h-40 flex items-center justify-center ml-72">
                <Image
                  src="/technologist.png"
                  width={50}
                  height={50}
                  alt="technologist icon"
                  className="absolute"
                />
                <div>
                  <motion.img
                    src="/light-full.svg"
                    width={150}
                    height={150}
                    className="block dark:hidden"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "linear",
                    }}
                  />
                  <motion.img
                    src="/dark-full.svg"
                    width={150}
                    height={150}
                    className="hidden dark:block"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="max-w-xl lg:text-left">
            <h2 className="text-3xl font-semibold mb-4 -tracking-2">
              Full-Stack Developer
              <br />
              Based in Fes, Morocco
            </h2>
            <p className="text-pretty font-medium">
              Hi, I&apos;m Youssef, a full-stack developer with a passion for
              creating clean and intuitive UI/UX designs. I primarily work with
              React and Next.js for front-end development, and Node.js and
              Laravel for the back-end.
              <br /> In addition to my core technologies, I have expertise in
              Git, Scrum, Docker, HTML, CSS, PHP, and Tailwind CSS. I&apos;m
              also skilled in using GSAP and Framer Motion for animations,
              JavaScript, Figma for design, and jQuery for dynamic web
              interactions.
            </p>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="p-6 mt-2 space-y-4">
          <h4 className="text-2xl font-bold first-letter:mb-4 border-b-2 border-blue-500 inline-block -tracking-2">
            Skills & Tools
          </h4>

          <motion.div variants={itemVariants}>
            <h5 className="text-xl font-semibold text-blue-500 mb-2 -tracking-1">
              Frameworks and Libraries
            </h5>
            <p>
              React, NextJS, Tailwind, MaterialUI, DaisyUI, Redux, GSAP, Framer,
              Laravel, Nodejs/Express
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h5 className="text-xl font-semibold text-blue-500 mb-2">
              The Obvious
            </h5>
            <p>
              HTML, CSS, JavaScript, PHP, MySQL, MongoDB, REST APIs/JSON, React
              Hooks, Fetch/Axios, WordPress, Inertia.js
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h5 className="text-xl font-semibold text-blue-500 mb-2 -tracking-1">
              Tools
            </h5>
            <p>Git, Docker, Figma, GitHub/GitLab, SonarQube, Jenkins, Jira</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
