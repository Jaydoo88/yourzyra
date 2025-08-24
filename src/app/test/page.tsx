import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function TestPage() {
  const users = await prisma.user.findMany();
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-pink-500">Tailwind is Working!</h1>
      <h2 className="text-xl mt-4">Users in DB:</h2>
      <pre className="bg-gray-800 p-4 rounded-lg mt-2 w-1/2">
        {JSON.stringify(users, null, 2)}
      </pre>
    </div>
  );
}