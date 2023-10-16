// User Register
const User = require("../schema/UserSchema");

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
