const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;

//facebook dosen't work on local host!!!!!!

const passport = require("passport");
const GOOGLE_CLIENT_ID = "990037402403-dq00u7m26ifgjge2t6a62bfhkts9hveh.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET= "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";

GITHUB_CLIENT_ID = "20c7a522ffa3bb1f2e47";
GITHUB_CLIENT_SECRET= "d73b7e3736a4c67863303b0eb1420f86adbf1669";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.use(new GithubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback",
},
function(accessToken, refreshToken, profile, done) {
  done(null, profile);
}
));

passport.serializeUser((user, done) =>{
    done(null, user);
});
passport.deserializeUser((user, done) =>{
    done(null, user);
});