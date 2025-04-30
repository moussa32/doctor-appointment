import express from "express";
import sequelize from "./config/database.mjs";
import session from "express-session";
import flash from "connect-flash";
import passport from "passport";
import authRoutes from "./routes/authRoutes.mjs";

const app = express();

// EJS
app.set("view engine", "ejs");

// Body parser
app.use(express.urlencoded({ extended: false }));

// Static files
app.use(express.static("public"));

// Express session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Flash
app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

// Routes
app.use("/", authRoutes);

// DB + Server
sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Server started on port 3000"));
});
