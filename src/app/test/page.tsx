import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function TestPage() {
  const users = await prisma.user.findMany();
  return (
    <div>
      <h1>Users in DB:</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}