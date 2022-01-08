const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "116363804668-k6pdqd5r278bvh1o7muufd06phs9idgg.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "211d71e891c58be1bafa";
GITHUB_CLIENT_SECRET = "f3e4bbee99cff1b6554ff39cfe898e23d10972b4";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
