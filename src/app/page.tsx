import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-8">
      <main className="text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold">
          🚀 Welcome to <span className="text-blue-600">YourZyra</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Clean, personal, and fast. This is our first live deploy.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://yourzyra.com"
            className="px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition"
          >
            Visit Production
          </a>
          <a
            href="https://github.com/Jaydoo88/yourzyra"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            GitHub Repo
          </a>
        </div>
        <div className="pt-10">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={150}
            height={40}
            priority
          />
        </div>
      </main>
    </div>
  );
}