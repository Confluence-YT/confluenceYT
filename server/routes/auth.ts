import express, {
  Express,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import passport from "passport";
import { CLIENT_URL } from "../dotEnvExports";
const router: Router = express.Router();
 
// Google OAuth 2.0 route for authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth 2.0 callback route
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/auth/login/failed",
  })
);

// Google OAuth 2.0 success route
router.get("/login/success", (req, res) => {
  if (req.user) {
    console.log(req.user);
    res.status(200).json({
      error: false,
      message: "Successfully Logged In",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorised" });
  }
});

// Google OAuth 2.0 failier route
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in Failure",
  });
});

// Google OAuth 2.0 logout route
router.get('/logout',(req,res)=>{
  req.logout((err)=>{
    console.log(err);
  });
  res.redirect(CLIENT_URL);
})
    


module.exports = router;
