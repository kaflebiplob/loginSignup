const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usermodel = require("./models/users.model.js");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/loginsignup");

app.listen(3001, () => {
  console.log("server is running");
});

app.post("/signup", (req, res) => {
  usermodel
    .create(req.body)
    .then((User) => res.json(User))
    .catch((err) => res.json(err));
});
app.post("/login", (req, res) => {
  const { name, password } = req.body;
  usermodel.findOne({ name: name }).then((User) => {
    if (User) {
      if (User.password === password) {
        res.json("Success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("no user recorded");
    }
  });
});
