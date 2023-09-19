import express, { Express, Request, Response } from "express";
import dotEnv from "dotenv";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import path, { dirname } from "path";
import "./passport"; // passport configuration

dotEnv.config(); // dotEnv configuration so we can use env varibales from .env files

const authRouter = require("./routes/auth"); // auth router containing all the authorization related routes
const app: Express = express();
const port = process.env.PORT || 8080;

// configuring and initializing session
// Session stores the information of the user and helps validating auth
app.use(
  session({
    secret: "confluenceYT",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 0.5 * 60 * 60 * 1000 },
  })
);

// initializing passport and its session
app.use(passport.initialize());
app.use(passport.session());

// using cors for cross origin resource sharing
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

//kind of home page for testing
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "/", "../Temp/index.html"));
});

// Auth router
app.use("/auth", authRouter);

// Server initialization
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
