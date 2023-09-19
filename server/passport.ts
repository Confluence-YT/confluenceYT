import passportGoogle from "passport-google-oauth20";
import passport from "passport";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "./dotEnvExports";
const googleStrategy = passportGoogle.Strategy;

// passport config for OAuth 2.0
passport.use(
  new googleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    (
      accessToken: any,
      refreshToken: any,
      profile: any,
      callback: (arg0: null, arg1: any) => void
    ) => {
      callback(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user:Express.User, done) => {
  done(null, user);
});
