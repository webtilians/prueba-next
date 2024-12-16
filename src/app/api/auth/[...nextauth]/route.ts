// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Lógica de autenticación aquí
        const user = { id: "1", email: "test@example.com", password: "123456" };

        if (credentials?.email === user.email) {
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            await bcrypt.hash(user.password, 10) // Simula el hash
          );

          if (passwordMatch) return { id: user.id, email: user.email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // Ruta personalizada para login
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
