import { Locate, Mail, MapPinHouse } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <div id="contact" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-5xl font-bold mb-6 -tracking-3">Contact</h1>
        <div class="space-y-4">
          <h2 class="flex items-center text-2xl font-semibold leading-tight mb-6 -tracking-1">
            <span class="ml-6">Let's connect! I'm just a message away</span>
            <span class="inline-flex items-center w-20 h-20">
              <Image
                src="/Backhand.png"
                width={30}
                height={30}
                alt="Waving hand"
                class="w-6 h-6 object-contain"
              />
            </span>
          </h2>

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div class="flex items-center space-x-4 p-4 rounded-lg">
              <div class="flex-shrink-0 rounded-full w-16 h-16 bg-indigo-100 flex items-center justify-center">
                <MapPinHouse class="text-blue-600 w-8 h-8" />
              </div>
              <div>
                <h3 class="text-lg font-semibold -tracking-1">Location</h3>
                <p class="mt-1 text-blue-600 hover:text-blue-800 transition duration-300 cursor-pointer">
                  Fes, Morocco
                </p>
              </div>
            </div>

            <div class="flex items-center space-x-4 p-4 rounded-lg">
              <div class="flex-shrink-0 rounded-full w-16 h-16 bg-indigo-100 flex items-center justify-center">
                <Mail class="text-blue-600 w-8 h-8" />
              </div>
              <div>
                <h3 class="text-lg font-semibold -tracking-1">Email</h3>
                <a
                  href="mailto:filaliy71@gmail.com"
                  class="mt-1 text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  filaliy71@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
