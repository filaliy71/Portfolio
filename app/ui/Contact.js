import { Mail, MapPinHouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
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
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
  return (
    <motion.div
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-bold mb-6 -tracking-3"
          variants={itemVariants}
        >
          Contact
        </motion.h1>
        <div className="space-y-4">
          <motion.h2
            variants={itemVariants}
            className="flex items-center text-2xl font-semibold leading-tight mb-6 -tracking-1"
          >
            <span className="ml-6">
              Let&apos;s connect! I&apos;m just a message away
            </span>
            <span className="inline-flex items-center w-20 h-20">
              <Image
                src="/Backhand.png"
                width={30}
                height={30}
                alt="Waving hand"
                className="w-6 h-6 object-contain"
              />
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <motion.div
              className="flex items-center space-x-4 p-4 rounded-lg "
              variants={itemVariants}
            >
              <div className="flex-shrink-0 rounded-full w-16 h-16 bg-indigo-100 flex items-center justify-center">
                <MapPinHouse className="text-blue-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold -tracking-1">Location</h3>
                <p className="mt-1 text-blue-600 hover:text-blue-800 transition duration-300 cursor-pointer">
                  Fes, Morocco
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 p-4 rounded-lg"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 rounded-full w-16 h-16 bg-indigo-100 flex items-center justify-center">
                <Mail className="text-blue-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold -tracking-1">Email</h3>
                <Link
                  href="mailto:filaliy71@gmail.com"
                  className="mt-1 text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  filaliy71@gmail.com
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
