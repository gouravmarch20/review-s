import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import jwt from "next-auth/jwt";

const handler = NextAuth({
  providers: [
    // Google provider for authentication
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

    // Discord provider for authentication
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "identify email",  // You can specify other permissions here
        },
      },
    }),
  ],
  secret: process.env.SECRET,
  debug: true, // Enable NextAuth debugging for better insights
  callbacks: {
    jwt: ({ token, account, user }) => {
      console.log("JWT Callback:", { token, account, user });

      // Extract and log the user's email, access token, and refresh token
      if (account) {
        console.log("User's Email:", user?.email);
        console.log("Access Token:", account?.access_token);
        console.log("Refresh Token:", account?.refresh_token);

        // Store the access token in the token object for later use
        if (account?.access_token) {
          token.access_token = account.access_token;
        }

        // Store refresh token if available
        if (account?.refresh_token) {
          token.refresh_token = account.refresh_token;
        }
      }

      return token;
    },
    session: async ({ session, token }) => {
      console.log("Session Callback:", { session, token });

      // Add the access token and refresh token to the session object
      session.user.access_token = token.access_token;
      session.user.refresh_token = token.refresh_token;
      session.token = token; // You can also store other token data here

      return session;
    },
  },
});

export { handler as GET, handler as POST };
