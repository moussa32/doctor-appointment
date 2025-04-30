import { User } from "../models/index.mjs";
import bcrypt from "bcryptjs";
import passport from "passport";

export const getRegister = (req, res) => {
  res.render("auth/register");
};

export const postRegister = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ name, email, password: hashedPassword, role });

  req.flash("success_msg", "You are registered");
  res.redirect("/login");
};

export const getLogin = (req, res) => {
  res.render("auth/login");
};

export const postLogin = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
};

export const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success_msg", "You are logged out");
    res.redirect("/login");
  });
};
