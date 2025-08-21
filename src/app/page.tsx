import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen grid place-items-center p-10">
      <main className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold">
          🚀 Welcome to <span className="text-blue-600">YourZyra</span>
        </h1>
        <p className="text-neutral-600">
          Clean, personal, and fast. This is our first live deploy.
        </p>

        <div className="flex items-center justify-center gap-3">
          <a
            className="rounded-full bg-black text-white px-5 py-2 hover:opacity-80"
            href="https://yourzyra.com"
          >
            Visit production
          </a>
          <a
            className="rounded-full border border-black/15 px-5 py-2 hover:bg-black/5"
            href="https://github.com/Jaydoo88/yourzyra"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repo
          </a>
        </div>

        <Image
          className="mx-auto opacity-80"
          src="/next.svg"
          alt="Next.js logo"
          width={140}
          height={30}
          priority
        />
      </main>
    </div>
  );
}