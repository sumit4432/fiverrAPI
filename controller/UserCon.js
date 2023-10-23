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

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }

      if (user.password !== password) {
        return res.status(401).json({ error: "Incorrect password" });
      }

      res.status(200).json({ message: "Login successful", user });
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal server error" });
    });
};
exports.getAllUser = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

exports.deleteUser = (req, res) => {
  User.findOneAndDelete({ username: req.params.username })
    .then((user) => {
      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.status(200).json(user);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

exports.updateUser = (req, res) => {
  User.finndOneAndUpdate({ username: req.params.username }, (err, user) => {
    if (err || !user) {
      res.status(404).json("user not found");
    } else {
      res.status(201).json("user update sucessfuly");
    }
  });
};

exports.getUserByUsername = (req, res) => {
  User.findOne({ username: req.params.username })
    .then((user) => {
      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.status(200).json({ user });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal server error" });
    });
};
