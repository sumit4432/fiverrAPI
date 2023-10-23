const User = require("../schema/userModel");
// Create a function to handle user registration
exports.registerUser = (req, res) => {
  const userData = req.body;
  const newUser = new User(userData);
  newUser
    .save()
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

// useLogin

exports.loginUser = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }
    res.status(200).json({ message: "Login successful", user });
  });
};

exports.allUser = (req, res) => {
  const getAllUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.status(404).json({ err: "user not found" });
    } else {
      res.status(200).json(user);
    }
  });
};

exports.deleteUser = (req, res) => {
  User.findOneAndDelete({ username: req.param.username }, (err, user) => {
    if (err || !user) {
      res.status(404).json(err);
    } else {
      res.status(201).json(user);
    }
  });
};

exports.updateUser = (req, res) => {
  User.finndOneAndUpdate({ username: req.param.username }, (err, user) => {
    if (err || !user) {
      res.status(404).json("user not found");
    } else {
      res.status(201).json("user update sucessfuly");
    }
  });
};

exports.getUserByUsername = (req, res) => {
  User.findOne({ username: req.param.usernam }, (err, user) => {
    if (err || !user) {
      res.status(404).json({ err: "user not found" });
    } else {
      res.status(200).json({ user });
    }
  });
};
