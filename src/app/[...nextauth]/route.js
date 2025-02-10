import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import jwt from "next-auth/jwt";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "openid https://www.googleapis.com/auth/drive.file",
          redirect_uri: process.env.NEXTAUTH_URL + "/api/auth/callback/google",
        },
      },
    }),
  ],
  secret: process.env.SECRET,
  debug: true, // Enable NextAuth debugging for better insights
  callbacks: {
    jwt: ({ token, account }) => {
      console.log("jwt_9", { token, account });

      if (account?.access_token) {
        token.access_token = account.access_token;
      }

      return token;
    },
    session: async ({ session, token }) => {
      console.log("session callback", { session, token });

      session.user.access_token = token.access_token; // Make sure this is added
      session.token = token; // Storing token in session if needed
      return session;
    },
  },
});

export { handler as GET, handler as POST };
