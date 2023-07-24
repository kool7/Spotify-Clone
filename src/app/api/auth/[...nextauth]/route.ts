import UserModel from "@/models/userModel";
import startDb from "@/utils/mongodb";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        await startDb();

        const user = await UserModel.findOne({ email });
        if (!user) {
          throw Error("email/password mismatch!");
        }

        const passwordMatch = await user.comparePassword(password);
        if (!passwordMatch) {
          throw Error("email/password mismatch!");
        }

        return {
          id: user._id,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    jwt(params: any) {
      if (params.user) {
        params.token.id = params.user.id;
      }

      return params.token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as { id: string }).id = token.id as string;
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };

