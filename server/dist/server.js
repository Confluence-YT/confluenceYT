"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
require("./passport"); // passport configuration
dotenv_1.default.config(); // dotEnv configuration so we can use env varibales from .env files
const authRouter = require("./routes/auth"); // auth router containing all the authorization related routes
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
// configuring and initializing session
// Session stores the information of the user and helps validating auth
app.use((0, express_session_1.default)({
    secret: "confluenceYT",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 0.5 * 60 * 60 * 1000 },
}));
// initializing passport and its session
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// using cors for cross origin resource sharing
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));
//kind of home page for testing
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "/", "../Temp/index.html"));
});
// Auth router
app.use("/auth", authRouter);
// Server initialization
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
