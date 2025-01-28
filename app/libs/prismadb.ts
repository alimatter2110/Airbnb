import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = client;
}
export default client;


/* Why Use This Pattern?
Singleton Pattern: Ensures only one instance of PrismaClient is created and reused.

Hot Reloading: In development, Next.js or other frameworks may reload your code, causing multiple instances of PrismaClient to be created. This pattern prevents that.

Performance: Reusing a single instance avoids unnecessary database connections. */