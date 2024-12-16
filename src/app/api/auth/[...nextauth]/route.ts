import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// Configuración de NextAuth
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "1", email: "test@example.com", password: "123456" };

        if (credentials?.email === user.email) {
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            await bcrypt.hash(user.password, 10)
          );

          if (passwordMatch) return { id: user.id, email: user.email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
