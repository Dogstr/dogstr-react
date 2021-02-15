const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcryptjs");
var passport = require("passport");

router.post("/register", (req, res, next) => {
  let { name, email, password, password2 } = req.body;

  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please fill in all fields" });
  }

  if (password !== password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password should be at least 6 characters" });
  }

  if (errors.length > 0) {
    res.json(errors);
  } else {
    db.Users.findOne({ email: email }).then((result) => {
      if (result) {
        errors.push({ msg: "Email is already registered" });
        res.json(errors);
      } else {
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            if (err) {
              throw err;
            }

            password = hash;

            db.Users.create({ name: name, email: email, password: password })
              .then(function () {
                passport.authenticate("local", (err, user, info) => {
                  if (err) {
                    return next(err);
                  }
                  if (!user) {
                    res.json(false);
                  } else {
                    req.logIn(user, (err) => {
                      if (err) throw err;
                      res.send(user);
                    });
                  }
                })(req, res, next);
              })
              .catch(function (error) {
                console.log(error);
              });
          });
        });
      }
    });
  }
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.json(false);
    } else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send(user);
      });
    }
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ msg: "logged out" });
});

module.exports = router;
