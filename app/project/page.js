import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen py-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <h1 className="text-start text-5xl font-bold -tracking-4 mb-8">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="relative w-full h-72 rounded-xl border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group">
            <Image
              className="rounded-xl object-cover transform hover:scale-105 transition-transform duration-500"
              src={"/project/6.png"}
              alt={`Project`}
              layout="fill"
              quality={100}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={"https://github.com/filaliy71/ecommerce_bmy"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-black dark:text-gray-100 dark:bg-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
              >
                Repo
              </a>
            </div>
          </div>
          <div className="relative w-full h-72 rounded-xl border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group">
            <Image
              className="rounded-xl object-cover transform hover:scale-105 transition-transform duration-500"
              src={"/project/2.png"}
              alt={`Project`}
              layout="fill"
              quality={100}
            />
            <div className="absolute inset-0 flex items-center gap-2 justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={"https://github.com/filaliy71/electornic_store"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-black dark:text-gray-100 dark:bg-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
              >
                Repo
              </a>
              <a
                href={"https://electornic-store.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-black dark:text-gray-100 dark:bg-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
              >
                Demo
              </a>
            </div>
          </div>
          <div className="relative w-full h-72 rounded-xl border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group">
            <Image
              className="rounded-xl object-cover transform hover:scale-105 transition-transform duration-500"
              src={"/project/1.png"}
              alt={`Project`}
              layout="fill"
              quality={100}
            />
            <div className="absolute inset-0 gap-2 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={"https://github.com/filaliy71/Salah.github.io"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-black dark:text-gray-100 dark:bg-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
              >
                Repo
              </a>
              <a
                href={"https://salah-github-io.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-black dark:text-gray-100 dark:bg-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
              >
                Repo
              </a>
            </div>
          </div>
          <div className="relative w-full h-72 rounded-xl border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group">
            <Image
              className="rounded-xl object-cover transform hover:scale-105 transition-transform duration-500"
              src={"/project/5.png"}
              alt={`Project`}
              layout="fill"
              quality={100}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={"https://github.com/filaliy71/social_media_app"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-black dark:text-gray-100 dark:bg-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
              >
                Repo
              </a>
            </div>
          </div>
          <div className="relative w-full h-72 rounded-xl border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group">
            <Image
              className="rounded-xl object-cover transform hover:scale-105 transition-transform duration-500"
              src={"/project/7.png"}
              alt={`Project`}
              layout="fill"
              quality={100}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={"link"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-black dark:text-gray-100 dark:bg-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
              >
                Repo
              </a>
            </div>
          </div>
          <div className="relative w-full h-72 rounded-xl border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group">
            <Image
              className="rounded-xl object-cover transform hover:scale-105 transition-transform duration-500"
              src={"/project/8.png"}
              alt={`Project`}
              layout="fill"
              quality={100}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={"https://github.com/filaliy71/todo_project"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-black dark:text-gray-100 dark:bg-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
              >
                Repo
              </a>
            </div>
          </div>
          <div className="relative w-full h-72 rounded-xl border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group">
            <Image
              className="rounded-xl object-cover transform hover:scale-105 transition-transform duration-500"
              src={"/project/9.png"}
              alt={`Project`}
              layout="fill"
              quality={100}
            />
            <div className="absolute inset-0 gap-2 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={"https://github.com/filaliy71/Weather.github.io"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-black dark:text-gray-100 dark:bg-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
              >
                Repo
              </a>
              <a
                href={"https://weather-github-io-delta.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-black dark:text-gray-100 dark:bg-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
