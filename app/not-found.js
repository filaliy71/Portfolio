import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold mb-4 -tracking-2">Not Found</h2>
      <p className="text-lg  mb-8">Could not find requested resource</p>
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Return Home
      </Link>
    </div>
  );
}
