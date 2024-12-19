import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = { id: "1", email: "test@example.com", password: "123456" };

          if (credentials?.email === user.email) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            const passwordMatch = await bcrypt.compare(credentials.password, hashedPassword);

            if (passwordMatch) {
              return { id: user.id, email: user.email };
            }
          }
          return null;
        } catch (error) {
          console.error("Error en authorize:", error);
          throw new Error("Error al autorizar al usuario");
        }
      },
    }),
  ],
  
  session: {
    strategy: "jwt",
  },
  
};

const handler = NextAuth(authOptions);

// Exportamos las funciones GET y POST, tal y como requiere el App Router
export { handler as GET, handler as POST };
