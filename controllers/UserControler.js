const User = require("../models/UserModel");

const loginUser = async (req, res) => {
  res.json({ message: "login successfully" });
};
const signUpUser = async (req, res) => {
  res.json({ message: "signup successfully" });
};

module.exports = {
  loginUser,
  signUpUser,
};
