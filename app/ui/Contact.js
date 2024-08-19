import { Locate, Mail, MapPinHouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 -tracking-3">Contact</h1>
        <div className="space-y-4">
          <h2 className="flex items-center text-2xl font-semibold leading-tight mb-6 -tracking-1">
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
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex items-center space-x-4 p-4 rounded-lg">
              <div className="flex-shrink-0 rounded-full w-16 h-16 bg-indigo-100 flex items-center justify-center">
                <MapPinHouse className="text-blue-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold -tracking-1">Location</h3>
                <p className="mt-1 text-blue-600 hover:text-blue-800 transition duration-300 cursor-pointer">
                  Fes, Morocco
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-lg">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
